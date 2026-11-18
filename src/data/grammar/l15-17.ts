import type { Lesson } from '../types';

export const bai15: Lesson = {
  id: 'bai-15',
  code: 'Bài 15',
  order: 13,
  title: 'Câu điều kiện',
  short: 'Câu điều kiện',
  summary: 'Điều kiện loại 0, 1, 2, 3, đảo ngữ với should/were/had và các liên từ điều kiện thay thế if.',
  version: 1,
  goals: [
    'Chọn đúng thì ở mệnh đề if và mệnh đề chính cho từng loại.',
    'Nhận ra câu đảo ngữ `Should you...`, `Had we...`, `Were it not for...`.',
    'Dùng unless, provided that, as long as, in case, otherwise.'
  ],
  prereq: ['Bài 7 (thì), Bài 13 (liên từ).'],
  sections: [
    {
      id: 'cac-loai',
      title: 'Các loại câu điều kiện',
      blocks: [
        {
          t: 'table',
          head: ['Loại', 'Mệnh đề if', 'Mệnh đề chính', 'Dùng khi'],
          rows: [
            ['0', 'hiện tại đơn', 'hiện tại đơn', 'Sự thật, quy trình luôn đúng'],
            ['1', 'hiện tại đơn', 'will/can/may + V; mệnh lệnh', 'Có thể xảy ra ở hiện tại/tương lai'],
            ['2', 'quá khứ đơn (be → were)', 'would/could + V', 'Không có thật ở hiện tại, giả định'],
            ['3', 'had + V3', 'would/could have + V3', 'Không có thật trong quá khứ']
          ]
        },
        { t: 'formula', pattern: 'If + S + V(hiện tại), S + will + V', text: 'Loại 1 – phổ biến nhất trong email/thông báo.', fid: 'f-if-1' },
        { t: 'formula', pattern: 'If + S + V2/were, S + would + V', text: 'Loại 2.', fid: 'f-if-2' },
        { t: 'formula', pattern: 'If + S + had V3, S + would have V3', text: 'Loại 3.', fid: 'f-if-3' },
        {
          t: 'note',
          tone: 'tip',
          text: 'Mệnh đề chính loại 1 trong thư công việc rất hay là **câu mệnh lệnh**: `If you have any questions, please contact us.`'
        }
      ]
    },
    {
      id: 'dao-ngu',
      title: 'Đảo ngữ câu điều kiện',
      blocks: [
        { t: 'formula', pattern: 'Should + S + V, ...', text: '= If + S + should/V (loại 1, trang trọng): `Should you need assistance, call us.`', fid: 'f-should-inversion' },
        { t: 'formula', pattern: 'Were + S + to V / Were + S + ..., ...', text: '= If + S + were (loại 2).' },
        { t: 'formula', pattern: 'Had + S + V3, ...', text: '= If + S + had V3 (loại 3): `Had we known, we would have called.`' },
        { t: 'p', text: 'Đảo ngữ **bỏ if**. Gặp câu bắt đầu bằng `Should/Had/Were` + chủ ngữ mà không phải câu hỏi → điều kiện đảo.' }
      ]
    },
    {
      id: 'thay-the-if',
      title: 'Liên từ điều kiện khác',
      blocks: [
        {
          t: 'table',
          head: ['Từ', 'Nghĩa', 'Ví dụ'],
          rows: [
            ['unless', 'trừ khi, nếu không', 'Unless noted otherwise, prices include tax.'],
            ['provided (that) / providing', 'với điều kiện là', 'You may leave early provided that your work is done.'],
            ['as long as / so long as', 'miễn là', 'As long as you keep the receipt, you can return it.'],
            ['in case', 'phòng khi', 'Bring an umbrella in case it rains.'],
            ['in case of / in the event of + N', 'trong trường hợp', 'In case of fire, use the stairs.'],
            ['otherwise', 'nếu không thì (trạng từ)', 'Register now; otherwise, you may lose your seat.'],
            ['only if', 'chỉ khi', 'Refunds are given only if the item is unused.']
          ]
        },
        { t: 'formula', pattern: 'unless + S + V (khẳng định)', text: 'unless = if ... not, **không** thêm not nữa.', fid: 'f-unless' }
      ]
    }
  ],
  signals: [
    'Mệnh đề if có hiện tại đơn → mệnh đề chính will/can/mệnh lệnh.',
    'Có `would/could + V` → mệnh đề if dùng quá khứ (were).',
    'Có `would have + V3` → mệnh đề if dùng had + V3.',
    'Câu bắt đầu bằng Should/Had/Were + S (không phải câu hỏi) → đảo ngữ điều kiện.',
    'Sau chỗ trống là N phrase → in case of / in the event of; là mệnh đề → if/unless/provided that.',
    'Ý "nếu không" → unless (+ khẳng định) hoặc otherwise (nối câu).'
  ],
  examples: [
    ['If you {pay|V} by credit card, a receipt will be e-mailed.', 'Nếu bạn thanh toán bằng thẻ tín dụng, biên lai sẽ được gửi qua email.', 'Loại 1: if + hiện tại đơn.'],
    ['If the temperature exceeds 30°C, the system {shuts|V} down automatically.', 'Nếu nhiệt độ vượt 30°C, hệ thống tự động tắt.', 'Loại 0: quy trình luôn đúng.'],
    ['If we {had|V} more space, we would hire more staff.', 'Nếu có nhiều mặt bằng hơn, chúng tôi sẽ tuyển thêm người.', 'Loại 2: hiện tại không có đủ chỗ.'],
    ['If the shipment had arrived on time, we {would have met|V} the deadline.', 'Nếu lô hàng đến đúng hạn, chúng tôi đã kịp hạn chót.', 'Loại 3: quá khứ không xảy ra.'],
    ['Should you have any questions, please {contact|V} our help desk.', 'Nếu có thắc mắc, vui lòng liên hệ bộ phận hỗ trợ.', 'Đảo ngữ loại 1 + mệnh lệnh.'],
    ['Had the manager known about the problem, she {would have acted|V} sooner.', 'Nếu quản lý biết vấn đề, bà ấy đã hành động sớm hơn.', 'Đảo ngữ loại 3.'],
    ['Unless the weather {improves|V}, the outdoor concert will be canceled.', 'Trừ khi thời tiết khá hơn, buổi hòa nhạc ngoài trời sẽ bị hủy.', 'unless + khẳng định.'],
    ['You can use the company car provided that you return it by 6 P.M.', 'Bạn được dùng xe công ty với điều kiện trả trước 6 giờ tối.', 'provided that + mệnh đề.'],
    ['In the event of a power outage, save your work immediately.', 'Trong trường hợp mất điện, hãy lưu công việc ngay.', 'in the event of + N.'],
    ['Please confirm your attendance; otherwise, your seat will be released.', 'Vui lòng xác nhận tham dự; nếu không, chỗ của bạn sẽ được nhường lại.', 'otherwise nối hai câu.'],
    ['Keep a copy of the contract in case the original is lost.', 'Giữ một bản sao hợp đồng phòng khi bản gốc bị mất.', 'in case + mệnh đề.'],
    ['If I were in your position, I would accept the offer.', 'Nếu tôi ở vị trí của bạn, tôi sẽ nhận lời.', 'Loại 2: `were` cho mọi ngôi.']
  ],
  mistakes: {
    head: ['Sai', 'Đúng', 'Vì sao'],
    rows: [
      ['If you will need help, call us.', 'If you **need** help, call us.', 'Loại 1: if + hiện tại đơn.'],
      ['Unless you don\'t register, ...', 'Unless you **register**, ...', 'unless đã mang nghĩa phủ định.'],
      ['If we had time, we will go.', 'If we had time, we **would** go.', 'Loại 2.'],
      ['Should you needed help, ...', 'Should you **need** help, ...', 'Should + V nguyên mẫu.'],
      ['In case of it rains, ...', '**In case** it rains / **In case of** rain', 'in case of + N.']
    ]
  },
  part5: [
    ['If the item {is|V} damaged, we will send a replacement.', 'Nếu sản phẩm bị hỏng, chúng tôi sẽ gửi sản phẩm thay thế.', 'Loại 1.'],
    ['**Should** you wish to cancel, please notify us 24 hours in advance.', 'Nếu muốn hủy, vui lòng báo trước 24 giờ.', 'Đảo ngữ Should + S + V.'],
    ['The order will ship today **provided** that payment is received by noon.', 'Đơn sẽ được gửi hôm nay với điều kiện nhận được thanh toán trước trưa.', 'provided that + mệnh đề.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Email xác nhận đặt phòng',
      kind: 'Email',
      lines: [
        ['Your reservation for June 10–12 is confirmed.', 'Đặt phòng của quý khách cho ngày 10–12/6 đã được xác nhận.'],
        ['**If** you **arrive** after 10 P.M., please **inform** the front desk in advance.', 'Nếu đến sau 10 giờ tối, vui lòng báo trước cho lễ tân.', 'Loại 1 + mệnh lệnh.'],
        ['**Should** you **need** to change your dates, you may do so online at no charge.', 'Nếu cần đổi ngày, quý khách có thể đổi trực tuyến miễn phí.', 'Đảo ngữ.'],
        ['Cancellations are free **unless** they **are** made less than 48 hours before arrival.', 'Hủy miễn phí trừ khi hủy trong vòng 48 giờ trước khi đến.', 'unless + khẳng định.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Điều kiện trong Part 7 thường quyết định **ai được hưởng gì** (`eligible only if...`, `provided that...`). Khi đọc chính sách, hãy gạch chân mệnh đề điều kiện và kiểm tra người trong tình huống có thỏa mãn không.'
    },
    {
      t: 'passage',
      title: 'Chính sách bảo hành',
      kind: 'Policy',
      lines: [
        ['The warranty is valid **only if** the product is registered within 30 days of purchase.', 'Bảo hành chỉ có hiệu lực nếu sản phẩm được đăng ký trong 30 ngày kể từ khi mua.'],
        ['**In the event of** a defect, the item will be repaired **or**, **if** repair is not possible, replaced.', 'Trong trường hợp lỗi, sản phẩm sẽ được sửa, hoặc nếu không sửa được thì sẽ được thay.']
      ]
    }
  ],
  keyRules: [
    'Loại 1: if + hiện tại đơn, will/mệnh lệnh.',
    'Loại 2: if + quá khứ (were), would + V.',
    'Loại 3: if + had V3, would have V3.',
    'Should + S + V = If + S + V (trang trọng).',
    'Had + S + V3 = If + S + had V3.',
    'unless + khẳng định = if ... not.',
    'in case of / in the event of + N; in case / provided that + mệnh đề.'
  ],
  review: ['Viết bảng 4 loại điều kiện ra giấy.', 'Chuyển 3 câu If ... thành đảo ngữ Should/Had.'],
  related: ['bai-7', 'bai-13'],
  formulas: ['f-if-1', 'f-if-2', 'f-if-3', 'f-should-inversion', 'f-unless']
};

export const bai16: Lesson = {
  id: 'bai-16',
  code: 'Bài 16',
  order: 14,
  title: 'Mệnh đề quan hệ',
  short: 'Mệnh đề quan hệ',
  summary: 'who, whom, which, that, whose, where, when; mệnh đề xác định/không xác định; giới từ + which/whom.',
  version: 1,
  goals: [
    'Chọn đại từ quan hệ theo danh từ được bổ nghĩa và vai trò trong mệnh đề.',
    'Phân biệt mệnh đề quan hệ xác định và không xác định (có dấu phẩy).',
    'Hiểu whose + N, giới từ + which/whom, và what khác which.'
  ],
  prereq: ['Bài 9 (hòa hợp), Bài 11 (đại từ).'],
  sections: [
    {
      id: 'dai-tu-quan-he',
      title: 'Các đại từ / trạng từ quan hệ',
      blocks: [
        {
          t: 'table',
          head: ['Từ', 'Thay cho', 'Vai trò', 'Ví dụ'],
          rows: [
            ['who', 'người', 'chủ ngữ (hoặc tân ngữ, thân mật)', 'the engineer **who** designed it'],
            ['whom', 'người', 'tân ngữ, sau giới từ', 'the client **whom** we met / to **whom**'],
            ['which', 'vật, sự việc', 'chủ ngữ hoặc tân ngữ', 'the report **which** was sent'],
            ['that', 'người/vật', 'chủ ngữ/tân ngữ, chỉ mệnh đề xác định', 'the product **that** sells best'],
            ['whose', 'sở hữu của người/vật', '+ danh từ', 'the firm **whose** CEO resigned'],
            ['where', 'nơi chốn', '= in/at which', 'the hotel **where** we stayed'],
            ['when', 'thời gian', '= on/in which', 'the day **when** the store opens']
          ]
        },
        { t: 'formula', pattern: 'N (người) + who + V', text: 'who làm chủ ngữ → theo sau là động từ.', fid: 'f-who-which' },
        { t: 'formula', pattern: 'N + whose + N + V', text: 'Sau whose luôn là danh từ không có mạo từ.', fid: 'f-whose' },
        { t: 'formula', pattern: 'N (nơi chốn) + where + S + V', text: 'where theo sau là mệnh đề đầy đủ.', fid: 'f-where-when' }
      ]
    },
    {
      id: 'xac-dinh',
      title: 'Xác định và không xác định',
      blocks: [
        {
          t: 'table',
          head: ['Xác định', 'Không xác định'],
          rows: [
            ['Cần thiết để biết đang nói về ai/cái gì', 'Chỉ thêm thông tin, bỏ đi câu vẫn rõ'],
            ['Không có dấu phẩy', 'Có dấu phẩy'],
            ['Dùng được that', '**Không** dùng that'],
            ['Employees **who** work overtime get a bonus.', 'Mr. Lee, **who** joined in 2020, leads the team.']
          ]
        },
        {
          t: 'p',
          text: '`, which` có thể thay cho **cả mệnh đề** trước: `The flight was delayed, which caused us to miss the meeting.`'
        }
      ]
    },
    {
      id: 'gioi-tu-which',
      title: 'Giới từ + which/whom; what vs which',
      blocks: [
        { t: 'formula', pattern: 'N + preposition + which/whom + S + V', text: '`the conference at which she spoke`, `the person to whom it was addressed`. Không dùng giới từ + that/who.' },
        { t: 'formula', pattern: 'quantifier + of + whom/which', text: '`200 applicants, most of whom have degrees`.' },
        {
          t: 'note',
          tone: 'warn',
          title: 'what ≠ which',
          text: '`what` = the thing(s) that, **không có danh từ đứng trước**: `What we need is a plan.` Còn `which` luôn có danh từ đứng trước.'
        }
      ]
    }
  ],
  signals: [
    'Danh từ trước chỗ trống là người → who/whom/that; vật → which/that.',
    'Sau chỗ trống là động từ → đại từ làm chủ ngữ (who/which/that).',
    'Sau chỗ trống là S + V (thiếu tân ngữ) → whom/which/that (có thể lược bỏ).',
    'Sau chỗ trống là danh từ không mạo từ + V → whose.',
    'Sau chỗ trống là mệnh đề đầy đủ, danh từ trước chỉ nơi/thời gian → where/when.',
    'Có dấu phẩy trước chỗ trống → không dùng that.',
    'Giới từ ngay trước chỗ trống → whom/which.'
  ],
  examples: [
    ['Customers **who** sign up today receive a free gift.', 'Khách đăng ký hôm nay được tặng quà.', 'who làm chủ ngữ cho `sign up`.'],
    ['The laptop which I ordered arrived damaged.', 'Chiếc laptop tôi đặt đến nơi bị hỏng.', 'which làm tân ngữ (có thể lược bỏ).'],
    ['We hired a consultant whose experience is impressive.', 'Chúng tôi thuê một chuyên gia có kinh nghiệm ấn tượng.', 'whose + N.'],
    ['The hotel where the conference is held has a large garden.', 'Khách sạn tổ chức hội nghị có khu vườn lớn.', 'where + mệnh đề đầy đủ.'],
    ['Ms. Okada, who manages our Osaka office, will visit.', 'Bà Okada, người quản lý văn phòng Osaka, sẽ đến thăm.', 'Mệnh đề không xác định – có dấu phẩy, không dùng that.'],
    ['The manager to whom you should send the form is Mr. Hill.', 'Người quản lý mà bạn nên gửi mẫu đơn là ông Hill.', 'Giới từ + whom.'],
    ['The candidates, most of whom live nearby, start Monday.', 'Các ứng viên, hầu hết sống gần đây, bắt đầu vào thứ Hai.', 'most of whom.'],
    ['Sales doubled, which surprised everyone.', 'Doanh số tăng gấp đôi, điều này khiến mọi người bất ngờ.', ', which thay cả mệnh đề.'],
    ['What the client wants is a lower price.', 'Điều khách hàng muốn là giá thấp hơn.', 'what = the thing that, không có danh từ trước.'],
    ['Monday is the day when deliveries arrive.', 'Thứ Hai là ngày hàng được giao.', 'when sau danh từ thời gian.'],
    ['The software that we use is easy to update.', 'Phần mềm chúng tôi dùng dễ cập nhật.', 'that trong mệnh đề xác định.'],
    ['Anyone who needs a parking permit should contact security.', 'Ai cần giấy phép đỗ xe nên liên hệ bảo vệ.', 'anyone + who + V số ít.']
  ],
  mistakes: {
    head: ['Sai', 'Đúng', 'Vì sao'],
    rows: [
      ['the firm which CEO resigned', 'the firm **whose** CEO resigned', 'Sở hữu → whose.'],
      ['Mr. Lee, that leads the team, ...', 'Mr. Lee, **who** leads the team, ...', 'Không dùng that sau dấu phẩy.'],
      ['the city which I was born', 'the city **where** I was born / **in which** I was born', 'Thiếu giới từ → dùng where.'],
      ['the report who was sent', 'the report **which/that** was sent', 'Vật → which.'],
      ['the person to who', 'the person to **whom**', 'Sau giới từ dùng whom.']
    ]
  },
  part5: [
    ['Employees **whose** contracts expire this month must meet HR.', 'Nhân viên có hợp đồng hết hạn tháng này phải gặp nhân sự.', 'whose + N (contracts).'],
    ['The restaurant **where** we held the party has closed.', 'Nhà hàng nơi chúng tôi tổ chức tiệc đã đóng cửa.', 'Sau là mệnh đề đầy đủ → where.'],
    ['Mr. Sato, **who** has worked here for 20 years, is retiring.', 'Ông Sato, người đã làm ở đây 20 năm, sắp nghỉ hưu.', 'Sau dấu phẩy, người → who.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Giới thiệu nhân sự mới',
      kind: 'Memo',
      lines: [
        ['Please welcome Dana Kim, **who** joins us as head of design.', 'Xin chào mừng Dana Kim, người gia nhập với vai trò trưởng nhóm thiết kế.'],
        ['Ms. Kim previously worked at Vexa Studio, **where** she led a team of 15.', 'Bà Kim từng làm ở Vexa Studio, nơi bà dẫn dắt nhóm 15 người.'],
        ['The projects **that** she completed there won several awards.', 'Các dự án bà hoàn thành ở đó đã giành nhiều giải thưởng.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Mệnh đề quan hệ không xác định thường chứa **thông tin phụ nhưng hay được hỏi** (năm thành lập, chức vụ, nơi làm cũ). Khi gặp `, who/, which/, where`, hãy xác định nó bổ nghĩa cho danh từ nào.'
    }
  ],
  keyRules: [
    'who – người (chủ ngữ); whom – người (tân ngữ, sau giới từ).',
    'which – vật; that – người/vật trong mệnh đề xác định.',
    'whose + N.',
    'where/when + mệnh đề đầy đủ.',
    'Sau dấu phẩy không dùng that.',
    'Giới từ + which/whom, không + that/who.',
    'what không có danh từ đứng trước.',
    'Động từ trong mệnh đề quan hệ hòa hợp với danh từ đứng trước.'
  ],
  review: ['Học bảng đại từ quan hệ theo cột "sau nó là gì".', 'Tiếp tục với Bài 17 để rút gọn mệnh đề.'],
  related: ['bai-17', 'bai-9', 'bai-11'],
  formulas: ['f-who-which', 'f-whose', 'f-where-when']
};

export const bai17: Lesson = {
  id: 'bai-17',
  code: 'Bài 17',
  order: 15,
  title: 'Rút gọn mệnh đề quan hệ',
  short: 'Rút gọn MĐQH',
  summary: 'Rút gọn mệnh đề quan hệ bằng V-ing, V3, to V và cụm danh từ đồng vị; cách nhận ra mệnh đề đã rút gọn khi đọc.',
  version: 1,
  goals: [
    'Rút gọn mệnh đề quan hệ chủ động thành V-ing, bị động thành V3.',
    'Dùng to V sau the first/last/only/so sánh nhất.',
    'Nhận ra mệnh đề rút gọn trong câu dài Part 7.'
  ],
  prereq: ['Bài 10 (phân từ), Bài 16 (mệnh đề quan hệ).'],
  sections: [
    {
      id: 'cach-rut-gon',
      title: 'Các cách rút gọn',
      blocks: [
        { t: 'formula', pattern: 'N + V-ing (= who/which + V chủ động)', text: '`Passengers traveling with pets` = who travel.', fid: 'f-reduced-ving' },
        { t: 'formula', pattern: 'N + V3 (= who/which + be + V3)', text: '`The items listed below` = which are listed.', fid: 'f-reduced-v3' },
        { t: 'formula', pattern: 'the first/last/only/so sánh nhất + N + to V', text: '`She was the first employee to receive the award.`', fid: 'f-to-v-first' },
        { t: 'formula', pattern: 'N, (a/the) N, ...', text: 'Đồng vị: `Mr. Grant, the sales director, ...` = who is the sales director.' },
        { t: 'formula', pattern: 'N + Adj phrase', text: '`a room large enough for 50 people` = which is large enough.' }
      ]
    },
    {
      id: 'dieu-kien',
      title: 'Khi nào rút gọn được?',
      blocks: [
        {
          t: 'list',
          items: [
            'Đại từ quan hệ là **chủ ngữ** của mệnh đề quan hệ.',
            'Chủ động → bỏ đại từ, động từ thành V-ing (với mọi thì, nghĩa thời gian do ngữ cảnh).',
            'Bị động → bỏ đại từ và be, giữ V3.',
            'Mệnh đề có tân ngữ là đại từ quan hệ (`the book which I bought`) → chỉ lược bỏ được which: `the book I bought`.'
          ]
        },
        {
          t: 'note',
          tone: 'warn',
          text: 'Đừng nhầm V-ing/V3 rút gọn với động từ chính. Trong `The documents submitted yesterday are missing`, động từ chính là **are**; `submitted` là V3 rút gọn.'
        }
      ]
    }
  ],
  signals: [
    'Câu đã có động từ chính; chỗ trống ngay sau danh từ → V-ing/V3 rút gọn, không phải V chia thì.',
    'Sau chỗ trống có tân ngữ → V-ing.',
    'Sau chỗ trống là giới từ/by/trạng ngữ, không có tân ngữ → V3.',
    'Có the first/the last/the only trước danh từ → to V.',
    'Danh từ + dấu phẩy + cụm danh từ → đồng vị bổ sung thông tin.'
  ],
  examples: [
    ['Visitors {wishing|V} to park on site must register.', 'Khách muốn đỗ xe tại chỗ phải đăng ký.', '= who wish; có to V theo sau.'],
    ['The products {displayed|V} in the window are on sale.', 'Các sản phẩm trưng bày trong tủ kính đang giảm giá.', '= which are displayed.'],
    ['Anyone {interested|Adj} in the position should apply.', 'Ai quan tâm vị trí này nên nộp đơn.', '= who is interested.'],
    ['The man {sitting|V} at the front desk is our new receptionist.', 'Người đàn ông ngồi ở quầy lễ tân là lễ tân mới.', '= who is sitting.'],
    ['All orders {placed|V} before noon ship the same day.', 'Mọi đơn đặt trước trưa được gửi trong ngày.', '= which are placed; động từ chính `ship`.'],
    ['Ms. Fox was the only applicant {to have|V} a pilot\'s license.', 'Bà Fox là ứng viên duy nhất có bằng phi công.', 'the only + N + to V.'],
    ['Mr. Grant, the sales director, will lead the meeting.', 'Ông Grant, giám đốc kinh doanh, sẽ chủ trì cuộc họp.', 'Đồng vị.'],
    ['We need a room {large|Adj} enough for 50 people.', 'Chúng tôi cần một phòng đủ rộng cho 50 người.', 'Cụm tính từ sau danh từ.'],
    ['The report {prepared|V} by the auditors contained errors.', 'Báo cáo do kiểm toán viên soạn có lỗi.', '= which was prepared.'],
    ['Employees {living|V} more than 30 km away receive a travel allowance.', 'Nhân viên sống cách hơn 30 km được phụ cấp đi lại.', '= who live.'],
    ['The first train {to leave|V} the station departs at 5 A.M.', 'Chuyến tàu đầu tiên rời ga khởi hành lúc 5 giờ sáng.', 'the first + N + to V.'],
    ['The new policy, {introduced|V} last month, has reduced costs.', 'Chính sách mới, được áp dụng tháng trước, đã giảm chi phí.', 'Rút gọn không xác định (có dấu phẩy).']
  ],
  mistakes: {
    head: ['Sai', 'Đúng', 'Vì sao'],
    rows: [
      ['Passengers travel with pets must ...', 'Passengers **traveling** with pets must ...', 'Câu có hai động từ chia thì.'],
      ['the items listing below', 'the items **listed** below', 'Vật được liệt kê → V3.'],
      ['the first person receiving', 'the first person **to receive**', 'the first + to V.'],
      ['employees are interested', 'employees **interested** (rút gọn)', 'Bỏ cả who và be.']
    ]
  },
  part5: [
    ['Packages {left|V} at the front desk will be held for three days.', 'Bưu kiện để ở quầy lễ tân được giữ ba ngày.', '= which are left; động từ chính `will be held`.'],
    ['Companies {seeking|V} government contracts must submit bids online.', 'Các công ty tìm kiếm hợp đồng chính phủ phải nộp hồ sơ thầu trực tuyến.', '= which seek; có tân ngữ.'],
    ['Ms. Bell was the last speaker {to arrive|V}.', 'Bà Bell là diễn giả cuối cùng đến.', 'the last + N + to V.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Thông báo hội chợ việc làm',
      kind: 'Notice',
      lines: [
        ['Students **interested** in internships are invited to our career fair.', 'Sinh viên quan tâm đến thực tập được mời tới hội chợ việc làm.', '= who are interested.'],
        ['Companies **participating** this year include Delta Bank and Vireo Tech.', 'Các công ty tham gia năm nay gồm Delta Bank và Vireo Tech.', '= which are participating.'],
        ['Résumés **submitted** in advance will be shared with employers.', 'Hồ sơ nộp trước sẽ được chia sẻ cho nhà tuyển dụng.', '= which are submitted.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Câu dài Part 7 hay "nhồi" nhiều cụm rút gọn. Mẹo đọc: tìm **động từ chính chia thì** trước; các V-ing/V3 khác đứng sau danh từ là thông tin bổ sung về danh từ đó.'
    },
    {
      t: 'passage',
      title: 'Câu dài trong bài báo',
      kind: 'Article',
      lines: [
        [
          'The bridge, **completed** in 1965 and **used** by more than 40,000 vehicles a day, **will undergo** repairs **starting** next month.',
          'Cây cầu, được hoàn thành năm 1965 và có hơn 40.000 xe qua lại mỗi ngày, sẽ được sửa chữa bắt đầu từ tháng sau.',
          'Động từ chính: will undergo. completed/used: rút gọn bị động. starting: cụm phân từ chỉ thời gian.'
        ]
      ]
    }
  ],
  keyRules: [
    'Chủ động → V-ing; bị động → V3.',
    'the first/last/only/so sánh nhất + N + to V.',
    'Chỉ rút gọn khi đại từ quan hệ làm chủ ngữ.',
    'Câu chỉ có một động từ chính – các V-ing/V3 sau danh từ là rút gọn.',
    'Đồng vị: N, (a/the) N, ... bổ sung thông tin.'
  ],
  review: ['Viết lại 5 mệnh đề quan hệ ở Bài 16 dưới dạng rút gọn.', 'Ôn chung với Bài 10 vì cùng logic V-ing/V3.'],
  related: ['bai-16', 'bai-10', 'bai-8'],
  formulas: ['f-reduced-ving', 'f-reduced-v3', 'f-to-v-first', 'f-ving-adj', 'f-v3-adj']
};
