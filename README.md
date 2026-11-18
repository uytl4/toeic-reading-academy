# TOEIC Reading Grammar Academy

Giáo trình điện tử tiếng Việt để tự học **ngữ pháp TOEIC Reading Part 5–6–7**. Ứng dụng chạy offline (PWA) trên Windows, Android và iOS.

Phạm vi: bài giảng, công thức, ví dụ phân tích, từ vựng theo 8 Unit, hướng dẫn đọc Part 5–6–7, lộ trình 14 ngày, tìm kiếm, ghi chú, bookmark và sao lưu.
**Không có** luyện đề, câu trắc nghiệm, chấm điểm, Listening, và không gọi AI online.

> Nội dung bài giảng, ví dụ và đoạn văn đều do ứng dụng tự biên soạn, không sao chép từ ETS hay khóa học. Tên bài (Bài 4–17) và tên 8 Unit chỉ giữ theo danh sách khóa học, phần nội dung bên trong không phải nội dung chính thức của khóa học.

---

## 1. Chạy thử

Yêu cầu: Node.js 18 trở lên.

```bash
npm install
npm run build      # kiểm tra kiểu + build production (sinh Service Worker)
npm run preview    # mở http://localhost:4173
```

- `npm run dev`: chế độ phát triển. Chế độ này **không** bật Service Worker nên không dùng offline được.
- `npm run check:content`: kiểm tra dữ liệu nội dung (liên kết nội bộ, số ví dụ, id công thức, nhãn loại từ) và in báo cáo độ bao phủ.

**GitHub Pages:** mỗi lần push lên nhánh `main`, workflow `.github/workflows/deploy.yml` tự động kiểm tra nội dung, build rồi xuất bản lên `https://<tài-khoản>.github.io/<tên-repo>/`. Lần đầu cần vào **Settings → Pages → Source** và chọn **GitHub Actions**.

Thư mục `dist/` là bản build tĩnh. Có thể đưa lên bất kỳ máy chủ HTTPS nào (GitHub Pages, Netlify, IIS…). Đường dẫn dùng `base: './'` và HashRouter nên chạy được cả trong thư mục con.

> Service Worker/PWA chỉ chạy qua **https://** hoặc **http://localhost**. Mở trực tiếp `dist/index.html` bằng `file://` thì không học offline được.

## 2. Cài đặt để học offline

Mở **Cài đặt & sao lưu → Học offline**. Khi thấy dòng xanh **“Sẵn sàng học offline”** thì có thể tắt mạng. Ứng dụng kiểm tra từng tệp trong danh sách precache của Service Worker. Nếu còn thiếu tệp nào, ứng dụng ghi rõ tên tệp và cách khắc phục.

| Nền tảng | Cách cài |
|---|---|
| **Windows** (Chrome/Edge) | Mở trang khi có mạng → biểu tượng “Cài đặt ứng dụng” trên thanh địa chỉ (hoặc menu ⋯ → Ứng dụng → Cài đặt). |
| **Android** (Chrome) | Menu ⋮ → “Cài đặt ứng dụng” / “Thêm vào màn hình chính”. |
| **iOS/iPadOS** (Safari) | Nút Chia sẻ → “Thêm vào Màn hình chính”. Mở ứng dụng một lần khi có mạng để tải xong. |

Lưu ý về iOS và bộ nhớ:
- iOS có thể xóa dữ liệu web của ứng dụng nếu lâu không mở, hoặc khi bạn xóa ứng dụng hay xóa dữ liệu Safari. Ứng dụng **không cam kết** dữ liệu còn lại trong các trường hợp đó.
- Nên bấm **“Yêu cầu lưu trữ bền vững”** trong Cài đặt và **xuất JSON định kỳ**.
- Dữ liệu **không tự đồng bộ** giữa các thiết bị. Muốn chuyển dữ liệu, dùng Xuất/Nhập JSON.

## 3. Công nghệ

React 18, TypeScript, Vite 5, Tailwind CSS 3 (bundle cục bộ), IndexedDB (thư viện `idb`), vite-plugin-pwa/Workbox, lucide-react (icon bundle cục bộ).
Ứng dụng không dùng CDN, Google Fonts hay API bên ngoài. Font dùng font hệ thống (Segoe UI/Roboto/San Francisco), hiển thị tốt tiếng Việt. Ảnh bìa 8 Unit là minh họa SVG tự vẽ, không dùng ảnh có bản quyền.

## 4. Sơ đồ nội dung và dữ liệu

```text
src/
  app/          progress.ts (tính tiến độ), hooks.ts (cuộn tới mục, % đọc, mục lục)
  components/   Layout, SearchBox, UnitCard (+ UnitCover SVG), FormulaCard, Blocks
                (GrammarExample, ReadingAnnotation, DataTable, Callout),
                StudySection (bookmark/ghi chú/highlight/đã học), NoteDialog, Rich (markup)
  pages/        Dashboard, Roadmap, Lessons, LessonDetail, Units, UnitDetail,
                FormulaLibrary, ReadingGuides, Notebook, Settings, SearchPage
  data/
    types.ts            schema nội dung (Lesson, Unit, Formula, ReadingGuide, RoadmapDay)
    grammar/            15 bài: l04-06, l07-08 (gồm 8.1), l09-11, l12-14, l15-17
    units/              8 Unit: u1-4, u5-8
    formulas/           50 công thức + bảng hậu tố + bảng đại từ
    reading/            Part 5, 6, 7 + lộ trình 14 ngày
  db/           db.ts (IndexedDB + sao lưu/validate), store.tsx (React context)
  search/       chỉ mục toàn văn cục bộ, chuẩn hóa tiếng Việt có/không dấu
  offline/      status.ts (kiểm tra sẵn sàng offline)
public/icons/   icon.svg, icon-192.png, icon-512.png (tạo bằng scripts/make-icons.mjs)
```

**Markup nội tuyến trong dữ liệu:** `**đậm**`, `` `công thức` ``, `{từ|N}` / `{từ|V}` / `{từ|Adj}` / `{từ|Adv}`. Loại từ được tô màu: N xanh dương, V đỏ, Adj tím, Adv cam. Màu luôn đi kèm nhãn chữ để người khó phân biệt màu vẫn đọc được.

**Cấu trúc một bài ngữ pháp:**
1. Mục tiêu và kiến thức cần biết trước
2. Khái niệm và công thức (các `formula-card` có nút Lưu, Sao chép, Ghi chú)
3. Dấu hiệu nhận biết
4. Ít nhất 10 ví dụ phân tích
5. Lỗi thường gặp
6. Ứng dụng Part 5, Part 6, Part 7
7. Tổng kết quy tắc
8. Gợi ý ôn tập và bài liên quan

**Cấu trúc một Unit:** 9 mục chuẩn (`UNIT_SECTIONS`). Tiến độ “X/Y mục đã học” tính theo số mục người học tự đánh dấu.

**IndexedDB `tra-db` (v1):**

| Store | Khóa | Nội dung |
|---|---|---|
| `progress` | `key` | `lesson:<id>`, `unit:<unitId>:<mục>`, `reading:<part>:<mục>`, `day:<n>` → `{done, at}` |
| `bookmarks` | `id` | `{kind: formula/section/lesson/unit/vocab/reading, refId, title, link}` |
| `notes` | `id` | `{contentId, contentVersion, kind: note/highlight, quote, text, link}` |
| `kv` | chuỗi | `settings` (theme, fontSize), `lastVisited`, `visited` |

Ghi chú và highlight gắn với `contentId` (ví dụ `lesson:bai-4#cum-danh-tu`) và `contentVersion`. Nếu nội dung được cập nhật lên version mới, ghi chú cũ vẫn còn và được đánh dấu “phiên bản cũ”.

**Tệp sao lưu JSON:** `{ app, schemaVersion: 1, exportedAt, data: { progress, bookmarks, notes, settings, lastVisited, visited } }`. Khi nhập, ứng dụng kiểm tra `app`, phiên bản schema và từng bản ghi. Nếu tệp không hợp lệ, ứng dụng báo lỗi bằng tiếng Việt và giữ nguyên dữ liệu hiện có. Nếu hợp lệ, ứng dụng hỏi xác nhận trước khi thay thế.

## 5. Chức năng đã chạy thử

Chạy thử trên bản build production (`npm run preview`) trong trình duyệt Chromium:

- [x] Tổng quan: thẻ thống kê, “Học tiếp”, lịch hôm nay, lưới 8 Unit có ảnh bìa và thanh tiến độ, lộ trình 15 chủ điểm, công thức nổi bật.
- [x] Đánh dấu đã học → ghi vào IndexedDB, thanh tiến độ và dấu ✓ cập nhật.
- [x] Lưu công thức (bookmark) → hiện trong Sổ tay và thẻ “Công thức đã lưu”.
- [x] Bôi đen văn bản → Highlight hiển thị `<mark>` trong bài và lưu vào Sổ tay. Ghi chú theo mục cũng hoạt động.
- [x] Tìm kiếm offline: `the + adj + n`, `because of`, `their`, `established`, `mệnh đề quan hệ` và `menh de quan he` (không dấu) đều trả kết quả đúng.
- [x] Nhập JSON: tệp hỏng và tệp của ứng dụng khác bị từ chối kèm thông báo rõ. Xóa sạch IndexedDB rồi nhập lại bản sao lưu khôi phục đủ 100% bản ghi.
- [x] Responsive: không cuộn ngang ở 360 px trên tất cả 11 nhóm trang. Desktop 1440 px có bố cục 3 cột cho bài học.
- [x] Light/dark mode theo lựa chọn hoặc theo hệ thống, lưu lại trên thiết bị. Cỡ chữ chỉnh được từ 15 đến 22 px.
- [x] Bàn phím: có liên kết “Bỏ qua tới nội dung”, viền focus rõ, điều hướng combobox tìm kiếm bằng ↑/↓/Enter/Esc, dialog ghi chú đóng bằng Esc.
- [x] **Offline:** khi đã tắt server (yêu cầu mạng báo `network error`), tải lại trang vẫn mở được đủ 34 route: 15 bài ngữ pháp, 8 Unit, 3 hướng dẫn Part, công thức, sổ tay, cài đặt và tìm kiếm.
- [x] Màn hình “Sẵn sàng học offline” xác nhận 12/12 tệp precache có trong bộ nhớ đệm.

Chưa kiểm tra trên thiết bị iOS/Android thật.

## 6. Báo cáo độ bao phủ nội dung

Các số dưới đây lấy từ lệnh `npm run check:content`:

| Hạng mục | Số lượng |
|---|---|
| Mục ngữ pháp nguồn | **15/15** (Bài 4, 5, 6, 7, 8, 8.1, 9, 10, 11, 12, 13, 14, 15, 16, 17) |
| Unit | **8/8** (Personnel, Entertainment, Travel, Dining Out, Technology, Purchasing, General Business, Offices) |
| Chuyên mục Reading | 3 (Part 5, 6, 7), tổng 17 mục, gồm ví dụ đoạn đơn, đoạn đôi và đoạn ba |
| Công thức trong thư viện | 50, chia 12 nhóm, kèm bảng hậu tố và bảng họ đại từ |
| Ví dụ có phân tích (Anh – Việt – lý do) | 254 (mỗi bài có 10–12 ví dụ chính, cộng phần Part 5 và ví dụ trong Unit) |
| Đoạn minh họa có chú thích | 58 |
| Từ vựng trọng tâm (có IPA, nghĩa, ví dụ) | 96 |
| Word families / Collocations | 32 / 49 |
| Lộ trình | 14 ngày, không khóa bài |

Bài 8.1 (“Bài tập”) được chuyển thành bài **phân tích ví dụ từng bước**, không có phần thi. Các bài chiến thuật 28–32 được chuyển thành chuyên mục **Reading Part 5–6–7** chỉ dạy cách đọc, không có bài thi.
