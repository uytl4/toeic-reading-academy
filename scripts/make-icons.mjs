// Tạo icon PNG (192, 512) không cần thư viện ngoài.
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc = (buf) => { let c = 0xffffffff; for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const c = Buffer.alloc(4); c.writeUInt32BE(crc(td));
  return Buffer.concat([len, td, c]);
};

function draw(S) {
  const px = new Uint8Array(S * S * 4);
  const set = (x, y, [r, g, b]) => { const i = (y * S + x) * 4; px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = 255; };
  const navy = [23, 50, 77], paper = [247, 248, 245], blue = [156, 195, 234], green = [21, 115, 71];
  const u = S / 512;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const X = x / u, Y = y / u;
    let c = navy;
    // trang trái: x 96..256, cong nhẹ
    const topL = 150 + (X - 96) * 0.06, botL = 370 + (X - 96) * 0.06;
    const topR = 150 + (416 - X) * 0.06, botR = 370 + (416 - X) * 0.06;
    if (X >= 96 && X < 250 && Y > topL && Y < botL) c = paper;
    if (X > 262 && X <= 416 && Y > topR && Y < botR) c = blue;
    if (X >= 150 && X <= 362 && Y >= 402 && Y <= 424) c = green;
    set(x, y, c);
  }
  return px;
}

function png(S) {
  const px = draw(S);
  const raw = Buffer.alloc((S * 4 + 1) * S);
  for (let y = 0; y < S; y++) { raw[y * (S * 4 + 1)] = 0; Buffer.from(px.buffer, y * S * 4, S * 4).copy(raw, y * (S * 4 + 1) + 1); }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(S, 0); ihdr.writeUInt32BE(S, 4); ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}
for (const s of [192, 512]) writeFileSync(`public/icons/icon-${s}.png`, png(s));
console.log('icons ok');
