export interface OfflineCheck {
  label: string;
  ok: boolean;
  hint?: string;
}

export const OFFLINE_FLAG = 'tra-offline-ready';

export function markOfflineReady() {
  try {
    localStorage.setItem(OFFLINE_FLAG, new Date().toISOString());
  } catch {
    /* bỏ qua */
  }
  window.dispatchEvent(new Event('tra-offline-ready'));
}

/** Kiểm tra thực tế: SW đang điều khiển trang và cache chứa đủ index.html + mọi script/style của trang. */
export async function checkOffline(): Promise<{ ready: boolean; checks: OfflineCheck[]; cached: number }> {
  const checks: OfflineCheck[] = [];
  const secure = window.isSecureContext;
  checks.push({ label: 'Chạy qua HTTPS hoặc localhost', ok: secure, hint: 'Service Worker không hoạt động với file:// hoặc HTTP thường.' });
  const swSupported = 'serviceWorker' in navigator;
  checks.push({ label: 'Trình duyệt hỗ trợ Service Worker', ok: swSupported });
  const isDev = import.meta.env.DEV;
  if (isDev) checks.push({ label: 'Bản build production', ok: false, hint: 'Đang chạy chế độ dev (npm run dev). Hãy chạy npm run build rồi npm run preview.' });

  let controlled = false;
  if (swSupported) {
    const reg = await navigator.serviceWorker.getRegistration();
    controlled = !!navigator.serviceWorker.controller && !!reg?.active;
  }
  checks.push({ label: 'Service Worker đang điều khiển trang', ok: controlled, hint: 'Tải lại trang một lần sau lần mở đầu tiên.' });

  let cached = 0;
  let assetsOk = false;
  let total = 0;
  let missingList: string[] = [];
  if ('caches' in window) {
    const keys = await caches.keys();
    for (const k of keys) cached += (await (await caches.open(k)).keys()).length;
    const needed = [
      ...Array.from(document.querySelectorAll<HTMLScriptElement>('script[src]')).map((s) => s.src),
      ...Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')).map((l) => l.href)
    ];
    // Danh sách precache do Workbox sinh trong sw.js – đối chiếu từng tệp
    let manifest: string[] = [];
    try {
      const swText = await (await fetch(new URL('sw.js', document.baseURI).href)).text();
      manifest = Array.from(swText.matchAll(/url:\s*"([^"]+)"/g), (m) => m[1]);
    } catch {
      /* offline và sw.js chưa cache: coi như thiếu */
    }
    const urls = Array.from(new Set([...manifest.map((u) => new URL(u, document.baseURI).href), ...needed]));
    const results = await Promise.all(urls.map((u) => caches.match(u, { ignoreSearch: true })));
    const missing = urls.filter((_, i) => !results[i]);
    assetsOk = manifest.length > 0 && missing.length === 0;
    total = manifest.length;
    missingList = missing.map((u) => u.replace(document.baseURI, ''));
  }
  checks.push({
    label: `Đã lưu app shell, nội dung bài học, ảnh và icon vào bộ nhớ đệm${total ? ` (${total - missingList.length}/${total} tệp)` : ''}`,
    ok: assetsOk,
    hint: missingList.length ? `Còn thiếu: ${missingList.slice(0, 4).join(', ')}${missingList.length > 4 ? '…' : ''}. Mở ứng dụng khi có mạng và chờ vài giây.` : 'Mở ứng dụng khi có mạng và chờ vài giây để tải xong.'
  });

  let persisted = false;
  try {
    persisted = (await navigator.storage?.persisted?.()) ?? false;
  } catch {
    /* bỏ qua */
  }
  checks.push({ label: 'Bộ nhớ được bảo vệ khỏi tự động dọn (khuyến nghị)', ok: persisted, hint: 'Bấm "Yêu cầu lưu trữ bền vững". Một số trình duyệt tự quyết định.' });

  const ready = secure && swSupported && controlled && assetsOk && !isDev;
  return { ready, checks, cached };
}
