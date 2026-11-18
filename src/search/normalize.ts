/** Chuẩn hóa tiếng Việt: bỏ dấu, đ → d, chữ thường, bỏ markup. */
export function normalize(s: string) {
  return s
    .replace(/\{([^}|]+)\|[A-Za-z]+\}/g, '$1')
    .replace(/[*`]/g, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, ' ')
    .trim();
}

export function stripMarkup(s: string) {
  return s.replace(/\{([^}|]+)\|[A-Za-z]+\}/g, '$1').replace(/[*`]/g, '');
}
