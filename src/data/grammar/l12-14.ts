import type { Lesson } from '../types';

export const bai12: Lesson = {
  id: 'bai-12',
  code: 'Bài 12',
  order: 10,
  title: 'Giới từ',
  short: 'Giới từ',
  summary: 'Giới từ thời gian, nơi chốn, giới từ đi sau danh từ/động từ/tính từ và cụm giới từ dài hay gặp trong văn bản công sở.',
  version: 1,
  goals: [
    'Dùng đúng in/on/at, by/until, for/during/within, between/among.',
    'Biết sau giới từ là N, đại từ tân ngữ hoặc V-ing – không phải mệnh đề.',
    'Nhận diện `to` là giới từ trong các cụm cố định.'
  ],
  prereq: ['Bài 5 (danh từ), Bài 11 (đại từ).'],
  sections: [
    {
      id: 'sau-gioi-tu',
      title: 'Sau giới từ là gì?',
      blocks: [
        { t: 'formula', pattern: 'preposition + N / pronoun / V-ing', text: 'for {approval|N}, with **them**, before {leaving|V}.', fid: 'f-prep-n' },
        {
          t: 'note',
          tone: 'warn',
          title: '`to` là giới từ hay dấu hiệu nguyên mẫu?',
          text: 'Trong `look forward to, be committed to, be dedicated to, be used to, object to, in addition to, contribute to, be devoted to`, `to` là **giới từ** → theo sau là N hoặc V-ing: `We look forward to meeting you.` Còn `plan to, need to, want to, be able to` thì `to` + V nguyên mẫu.'
        }
      ]
    },
    {
      id: 'thoi-gian',
      title: 'Giới từ thời gian',
      blocks: [
        {
          t: 'table',
          head: ['Giới từ', 'Dùng với', 'Ví dụ'],
          rows: [
            ['at', 'giờ, thời điểm', 'at 9 A.M., at noon, at the end of'],
            ['on', 'ngày, thứ, ngày tháng', 'on Monday, on May 5, on weekdays'],
            ['in', 'tháng, năm, mùa, buổi, khoảng', 'in June, in 2025, in the morning, in two weeks (sau hai tuần)'],
            ['by', 'hạn chót (không muộn hơn)', 'Submit it by Friday.'],
            ['until', 'kéo dài liên tục đến', 'The store is open until 10 P.M.'],
            ['for', '+ khoảng thời gian', 'for three days'],
            ['during', '+ danh từ chỉ sự kiện/giai đoạn', 'during the meeting'],
            ['within', 'trong vòng (giới hạn)', 'within 30 days'],
            ['since', 'từ mốc (thì hoàn thành)', 'since 2018'],
            ['prior to', 'trước (trang trọng)', 'prior to the meeting'],
            ['throughout', 'suốt', 'throughout the year']
          ]
        }
      ]
    },
    {
      id: 'noi-chon',
      title: 'Giới từ nơi chốn và phương hướng',
      blocks: [
        {
          t: 'table',
          head: ['Giới từ', 'Ví dụ'],
          rows: [
            ['at (điểm cụ thể)', 'at the front desk, at the airport'],
            ['in (bên trong, thành phố, quốc gia)', 'in the lobby, in Hanoi'],
            ['on (bề mặt, tầng, đường)', 'on the second floor, on Main Street'],
            ['between (giữa 2) / among (giữa nhiều)', 'between the two offices / among employees'],
            ['across / along / through', 'across the street, along the river, through the main gate'],
            ['next to / opposite / near', 'next to the elevator, opposite the bank'],
            ['throughout', 'throughout the building']
          ]
        }
      ]
    },
    {
      id: 'cum-gioi-tu',
      title: 'Cụm giới từ và collocations',
      blocks: [
        {
          t: 'table',
          head: ['Cụm', 'Nghĩa'],
          rows: [
            ['because of / due to / owing to + N', 'bởi vì'],
            ['despite / in spite of + N/V-ing', 'mặc dù'],
            ['according to', 'theo như'],
            ['in addition to / apart from', 'ngoài ra'],
            ['instead of', 'thay vì'],
            ['regarding / concerning / with regard to', 'liên quan đến'],
            ['on behalf of', 'thay mặt'],
            ['in charge of', 'phụ trách'],
            ['in accordance with', 'phù hợp với, theo đúng'],
            ['as of + ngày', 'kể từ ngày'],
            ['ahead of schedule / behind schedule', 'trước / chậm tiến độ']
          ]
        },
        { t: 'formula', pattern: 'because of / due to + N phrase / V-ing', text: 'Không theo sau bởi mệnh đề.', fid: 'f-because-of' },
        {
          t: 'list',
          items: [
            'Danh từ + giới từ: `demand for`, `increase in`, `access to`, `solution to`, `interest in`, `reason for`.',
            'Động từ + giới từ: `apply for`, `comply with`, `respond to`, `participate in`, `depend on`, `consist of`.'
          ]
        }
      ]
    }
  ],
  signals: [
    'Sau chỗ trống là cụm danh từ (không có động từ chia thì) → giới từ, không phải liên từ.',
    'Ngày/thứ → on; giờ → at; tháng/năm → in.',
    'Hạn chót (submit, complete, return) → by; trạng thái kéo dài (open, stay, valid) → until.',
    '+ con số khoảng thời gian → for/within; + tên sự kiện → during.',
    'Sau giới từ cần V → dùng V-ing.',
    'Danh từ/động từ đứng trước gợi ý giới từ cố định: increase **in**, comply **with**.'
  ],
  examples: [
    ['The report must be submitted **by** Friday.', 'Báo cáo phải được nộp trước thứ Sáu.', 'Hạn chót → by.'],
    ['The library is open **until** 8 P.M.', 'Thư viện mở đến 8 giờ tối.', 'Trạng thái kéo dài → until.'],
    ['Phones must be turned off during the presentation.', 'Phải tắt điện thoại trong suốt bài thuyết trình.', 'during + sự kiện.'],
    ['Returns are accepted within 30 days of purchase.', 'Chấp nhận trả hàng trong vòng 30 ngày kể từ khi mua.', 'within + giới hạn thời gian.'],
    ['The flight was canceled due to heavy fog.', 'Chuyến bay bị hủy do sương mù dày.', 'due to + N phrase.'],
    ['Despite the rain, the festival attracted large crowds.', 'Dù trời mưa, lễ hội vẫn thu hút đông người.', 'Despite + N.'],
    ['We look forward to working with you.', 'Chúng tôi mong được hợp tác với quý vị.', '`to` là giới từ → V-ing.'],
    ['There has been an increase in demand for solar panels.', 'Nhu cầu về tấm pin mặt trời đã tăng.', 'increase in; demand for.'],
    ['All staff must comply with the safety rules.', 'Mọi nhân viên phải tuân thủ quy định an toàn.', 'comply with.'],
    ['Ms. Ruiz spoke on behalf of the company.', 'Bà Ruiz phát biểu thay mặt công ty.', 'Cụm cố định.'],
    ['Instead of mailing the forms, please upload them.', 'Thay vì gửi qua bưu điện, vui lòng tải mẫu đơn lên.', 'instead of + V-ing.'],
    ['As of July 1, the office will be located on Pine Street.', 'Kể từ 1/7, văn phòng sẽ đặt ở phố Pine.', 'as of + ngày; on + tên đường.']
  ],
  mistakes: {
    head: ['Cặp', 'Đúng', 'Ghi nhớ'],
    rows: [
      ['by vs until', 'Finish **by** 5. / Wait **until** 5.', 'by = hạn chót; until = kéo dài.'],
      ['for vs during', '**for** two hours / **during** the meeting', 'for + khoảng; during + sự kiện.'],
      ['because vs because of', '**because** it rained / **because of** the rain', 'because + mệnh đề; because of + N.'],
      ['between vs among', '**between** two firms / **among** all firms', '2 đối tượng / nhiều đối tượng.'],
      ['to + V-ing', 'committed **to providing**', '`to` giới từ.']
    ]
  },
  part5: [
    ['The museum will be closed **for** renovations until April.', 'Bảo tàng đóng cửa để cải tạo đến tháng Tư.', 'for + mục đích (danh từ); until + mốc.'],
    ['Interviews will take place **on** March 3.', 'Phỏng vấn diễn ra vào ngày 3 tháng 3.', 'on + ngày tháng.'],
    ['Applicants are selected **according** to their experience.', 'Ứng viên được chọn theo kinh nghiệm.', 'according to + N.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Thông báo đóng cửa tạm thời',
      kind: 'Notice',
      lines: [
        ['**Due to** scheduled maintenance, the cafeteria will be closed **from** May 2 **to** May 4.', 'Do bảo trì theo lịch, căng tin sẽ đóng cửa từ ngày 2 đến 4/5.', 'due to + N; from ... to ...'],
        ['**During** this period, snacks will be available **in** the lounge **on** the third floor.', 'Trong thời gian này, đồ ăn nhẹ có tại phòng chờ tầng ba.', 'during + giai đoạn; in + phòng; on + tầng.'],
        ['We apologize **for** any inconvenience.', 'Chúng tôi xin lỗi vì sự bất tiện.', 'apologize for.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Giới từ chứa **thông tin chi tiết** mà câu hỏi Part 7 hay hỏi: thời hạn (`by`, `within`), địa điểm (`on the fifth floor`), nguyên nhân (`due to`). Khi quét văn bản tìm thông tin, hãy dò các giới từ này.'
    },
    {
      t: 'passage',
      title: 'Lịch hội thảo',
      kind: 'Schedule',
      lines: [
        ['Registration opens **at** 8:30 A.M. **in** the main hall.', 'Đăng ký bắt đầu lúc 8:30 tại hội trường chính.'],
        ['Lunch will be served **between** the morning and afternoon sessions.', 'Bữa trưa phục vụ giữa phiên sáng và phiên chiều.'],
        ['Certificates will be e-mailed **within** a week **of** the event.', 'Chứng chỉ được gửi email trong vòng một tuần sau sự kiện.']
      ]
    }
  ],
  keyRules: [
    'Giới từ + N/đại từ tân ngữ/V-ing, không + mệnh đề.',
    'at giờ – on ngày – in tháng/năm.',
    'by = hạn chót; until = kéo dài đến.',
    'for + khoảng; during + sự kiện; within + giới hạn.',
    'because of/due to/despite + N; because/although + mệnh đề.',
    'Học giới từ theo cụm: increase in, comply with, look forward to + V-ing.'
  ],
  review: ['Lập bảng 15 cụm giới từ cố định trong sổ tay.', 'Ôn cùng Bài 13 để so sánh giới từ – liên từ.'],
  related: ['bai-13', 'bai-7', 'bai-5'],
  formulas: ['f-prep-n', 'f-because-of', 'f-despite']
};

export const bai13: Lesson = {
  id: 'bai-13',
  code: 'Bài 13',
  order: 11,
  title: 'Liên từ',
  short: 'Liên từ',
  summary: 'Liên từ kết hợp, liên từ tương quan, liên từ phụ thuộc và trạng từ liên kết; phân biệt với giới từ cùng nghĩa.',
  version: 1,
  goals: [
    'Phân biệt liên từ (nối mệnh đề) và giới từ (đi với cụm danh từ).',
    'Dùng đúng cặp tương quan: both...and, either...or, neither...nor, not only...but also.',
    'Hiểu quan hệ ý: nguyên nhân, nhượng bộ, điều kiện, thời gian, mục đích.'
  ],
  prereq: ['Bài 12.'],
  sections: [
    {
      id: 'ket-hop',
      title: 'Liên từ kết hợp (FANBOYS)',
      blocks: [
        {
          t: 'p',
          text: '`for, and, nor, but, or, yet, so` nối hai thành phần **cùng chức năng** (từ – từ, cụm – cụm, mệnh đề – mệnh đề). Khi nối hai mệnh đề thường có dấu phẩy trước liên từ.'
        },
        {
          t: 'ex',
          items: [
            ['The room is small **but** bright.', 'Căn phòng nhỏ nhưng sáng sủa.', 'Nối hai tính từ, ý trái ngược.'],
            ['The printer was broken, so we sent the files by e-mail.', 'Máy in bị hỏng nên chúng tôi gửi tệp qua email.', 'so: kết quả.']
          ]
        }
      ]
    },
    {
      id: 'tuong-quan',
      title: 'Liên từ tương quan',
      blocks: [
        { t: 'formula', pattern: 'both A and B', text: 'cả A và B (V số nhiều).', fid: 'f-both-and' },
        { t: 'formula', pattern: 'either A or B / neither A nor B', text: 'hoặc A hoặc B / không A cũng không B (V theo B).', fid: 'f-either-or' },
        { t: 'formula', pattern: 'not only A but (also) B', text: 'không những A mà còn B.', fid: 'f-not-only' },
        { t: 'formula', pattern: 'whether A or B', text: 'liệu A hay B.' },
        {
          t: 'note',
          tone: 'tip',
          text: 'A và B phải **song song** về cấu trúc: `both quickly and accurately` (Adv–Adv), `either by phone or by e-mail` (cụm giới từ – cụm giới từ).'
        }
      ]
    },
    {
      id: 'phu-thuoc',
      title: 'Liên từ phụ thuộc và giới từ tương ứng',
      blocks: [
        {
          t: 'table',
          head: ['Nghĩa', 'Liên từ + mệnh đề', 'Giới từ + N/V-ing', 'Trạng từ liên kết (nối câu)'],
          rows: [
            ['Nguyên nhân', 'because, since, as, now that', 'because of, due to, owing to', '—'],
            ['Nhượng bộ', 'although, though, even though, while', 'despite, in spite of', 'however, nevertheless'],
            ['Kết quả', 'so (that)', '—', 'therefore, as a result, consequently'],
            ['Điều kiện', 'if, unless, provided (that), as long as', 'in case of, in the event of', 'otherwise'],
            ['Thời gian', 'when, while, before, after, until, once, as soon as', 'during, before, after, until', 'afterward, meanwhile'],
            ['Mục đích', 'so that, in order that', 'in order to / so as to + V', '—'],
            ['Thêm ý', '—', 'in addition to, besides', 'moreover, furthermore, in addition, also']
          ]
        },
        { t: 'formula', pattern: 'Although + S + V, S + V', text: 'Liên từ + mệnh đề.', fid: 'f-although' },
        {
          t: 'note',
          tone: 'warn',
          title: 'Trạng từ liên kết không nối được hai mệnh đề bằng dấu phẩy',
          text: 'Sai: `The price rose, however sales grew.` Đúng: `The price rose; however, sales grew.` hoặc `The price rose. However, sales grew.`'
        }
      ]
    }
  ],
  signals: [
    'Sau chỗ trống là **mệnh đề** (S + V chia thì) → liên từ.',
    'Sau chỗ trống là **cụm danh từ/V-ing** → giới từ.',
    'Chỗ trống đầu câu, theo sau là dấu phẩy, nối với câu trước → trạng từ liên kết (However, Therefore).',
    'Có `both/either/neither/not only` ở trước → tìm cặp tương ứng and/or/nor/but also.',
    'Xét quan hệ ý giữa hai vế: trái ngược, nguyên nhân, điều kiện hay thời gian.'
  ],
  examples: [
    ['Although the budget was limited, the event was a success.', 'Dù ngân sách hạn chế, sự kiện vẫn thành công.', 'Although + mệnh đề, nhượng bộ.'],
    ['Despite the limited budget, the event was a success.', 'Dù ngân sách hạn chế, sự kiện vẫn thành công.', 'Despite + N phrase – cùng nghĩa với câu trên.'],
    ['We extended the deadline because many staff were on leave.', 'Chúng tôi gia hạn vì nhiều nhân viên đang nghỉ phép.', 'because + mệnh đề.'],
    ['The office will close early so that staff can attend the party.', 'Văn phòng đóng cửa sớm để nhân viên dự tiệc.', 'so that + mệnh đề (mục đích).'],
    ['Unless you register by Friday, you cannot attend.', 'Nếu không đăng ký trước thứ Sáu, bạn không thể tham dự.', 'unless = if ... not.'],
    ['Please call either Mr. Ko or Ms. Lin.', 'Vui lòng gọi ông Ko hoặc bà Lin.', 'either ... or.'],
    ['The product is not only durable but also affordable.', 'Sản phẩm không chỉ bền mà còn rẻ.', 'Song song Adj – Adj.'],
    ['Sales fell in May; however, they recovered in June.', 'Doanh số giảm tháng Năm; tuy nhiên đã phục hồi vào tháng Sáu.', 'Trạng từ liên kết sau dấu chấm phẩy.'],
    ['Now that the merger is complete, we can expand.', 'Giờ khi việc sáp nhập đã hoàn tất, chúng ta có thể mở rộng.', 'now that = vì giờ đây.'],
    ['You may use the room as long as you clean it afterward.', 'Bạn có thể dùng phòng miễn là dọn dẹp sau đó.', 'as long as: điều kiện.'],
    ['While Ms. Tran handles sales, Mr. Le manages logistics.', 'Trong khi bà Trần phụ trách bán hàng, ông Lê quản lý hậu cần.', 'while: đối lập/song song.'],
    ['Neither the hotel nor the restaurant accepts checks.', 'Cả khách sạn lẫn nhà hàng đều không nhận séc.', 'V theo `restaurant` (số ít).']
  ],
  mistakes: {
    head: ['Sai', 'Đúng', 'Vì sao'],
    rows: [
      ['Despite it rained, ...', '**Although** it rained, ... / **Despite** the rain, ...', 'Despite + N.'],
      ['Because of the store closed, ...', '**Because** the store closed, ...', 'Mệnh đề → liên từ.'],
      ['both A or B', 'both A **and** B', 'Cặp cố định.'],
      ['Although ..., but ...', 'Although ..., ... (bỏ but)', 'Không dùng hai liên từ cho hai mệnh đề.'],
      ['..., however we ...', '...; however, we ...', 'however là trạng từ.']
    ]
  },
  part5: [
    ['**Although** the train was late, Ms. Diaz arrived on time.', 'Dù tàu trễ, bà Diaz vẫn đến đúng giờ.', 'Sau chỗ trống là mệnh đề, ý trái ngược.'],
    ['The workshop is open to both managers **and** assistants.', 'Hội thảo dành cho cả quản lý và trợ lý.', 'both ... and.'],
    ['Bring your ID card **so** that security can verify your identity.', 'Mang thẻ để bảo vệ xác minh danh tính.', 'so that: mục đích.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Email phản hồi khách hàng',
      kind: 'Email',
      lines: [
        ['Thank you for your order. **Unfortunately**, the blue model is out of stock.', 'Cảm ơn đơn hàng của quý khách. Đáng tiếc, mẫu màu xanh đã hết hàng.'],
        ['**However**, the gray model is available **and** can ship today.', 'Tuy nhiên, mẫu màu xám còn hàng và có thể giao hôm nay.', 'However nối hai câu; and nối hai vị ngữ.'],
        ['**If** you prefer to wait, we will notify you **as soon as** the blue model arrives.', 'Nếu quý khách muốn chờ, chúng tôi sẽ báo ngay khi mẫu xanh về.', 'if + điều kiện; as soon as + hiện tại đơn.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Liên từ và trạng từ liên kết là **biển chỉ đường** trong Part 7: `however/but/although` báo hiệu ý ngược lại (thường chứa thông tin quan trọng), `therefore/as a result` dẫn tới kết luận, `in addition/moreover` bổ sung thông tin cùng chiều.'
    }
  ],
  keyRules: [
    'Liên từ + mệnh đề; giới từ + N/V-ing.',
    'Although/though/even though ≈ despite/in spite of.',
    'Because/since/as ≈ because of/due to.',
    'Cặp tương quan cố định và phải song song.',
    'Trạng từ liên kết (however, therefore) không thay liên từ.',
    'Không dùng hai liên từ (although ... but) cho cùng một cặp mệnh đề.',
    'unless = if not.'
  ],
  review: ['Học bảng liên từ – giới từ – trạng từ liên kết theo hàng nghĩa.', 'Viết lại 3 câu dùng although thành câu dùng despite.'],
  related: ['bai-12', 'bai-15', 'bai-16'],
  formulas: ['f-although', 'f-because-of', 'f-despite', 'f-both-and', 'f-either-or', 'f-not-only', 'f-unless']
};

export const bai14: Lesson = {
  id: 'bai-14',
  code: 'Bài 14',
  order: 12,
  title: 'So sánh',
  short: 'So sánh',
  summary: 'So sánh bằng, hơn, nhất, so sánh kép và các từ nhấn mạnh mức độ so sánh.',
  version: 1,
  goals: [
    'Tạo đúng dạng so sánh hơn/nhất của tính từ và trạng từ.',
    'Nhận diện dấu hiệu than, as ... as, the + -est/most, of/in + nhóm.',
    'Dùng đúng từ nhấn mạnh: much/far/even/still + so sánh hơn.'
  ],
  prereq: ['Bài 6, Bài 11.'],
  sections: [
    {
      id: 'so-sanh-bang',
      title: 'So sánh bằng',
      blocks: [
        { t: 'formula', pattern: 'as + Adj/Adv + as', text: 'Bằng nhau. Phủ định: not as/so ... as.', fid: 'f-as-as' },
        { t: 'formula', pattern: 'as many/much + N + as', text: '`as many orders as last year`.' },
        { t: 'formula', pattern: 'the same (N) as', text: '`the same price as`.' },
        {
          t: 'note',
          tone: 'tip',
          text: 'Chọn Adj hay Adv giữa `as ... as` theo động từ: `The new model is as **reliable** as...` (be + Adj), `She works as **efficiently** as...` (V thường + Adv).'
        }
      ]
    },
    {
      id: 'so-sanh-hon',
      title: 'So sánh hơn',
      blocks: [
        { t: 'formula', pattern: 'Adj-er / more + Adj + than', text: 'Tính từ ngắn thêm -er; dài dùng more.', fid: 'f-comparative-than' },
        {
          t: 'table',
          head: ['Loại', 'Hơn', 'Nhất'],
          rows: [
            ['1 âm tiết', 'cheaper, faster', 'the cheapest'],
            ['2 âm tiết tận cùng -y', 'easier, busier', 'the easiest'],
            ['2+ âm tiết', 'more efficient', 'the most efficient'],
            ['Bất quy tắc', 'better, worse, farther/further, more, less', 'the best, the worst, the most, the least']
          ]
        },
        {
          t: 'formula',
          pattern: 'much/far/even/still/a lot/significantly + so sánh hơn',
          text: 'Nhấn mạnh. **Không** dùng `very` trước so sánh hơn.'
        }
      ]
    },
    {
      id: 'so-sanh-nhat',
      title: 'So sánh nhất và so sánh kép',
      blocks: [
        { t: 'formula', pattern: 'the + Adj-est / the most + Adj (+ in/of/among ...)', text: '`the most popular product in our line`.', fid: 'f-superlative' },
        { t: 'formula', pattern: 'one of the + so sánh nhất + N số nhiều', text: '`one of the largest suppliers`.', fid: 'f-superlative' },
        { t: 'formula', pattern: 'the + so sánh nhất + N + (that) S + have ever V3', text: '`the best service we have ever received`.' },
        { t: 'formula', pattern: 'The + so sánh hơn ..., the + so sánh hơn ...', text: 'Càng ... càng ...: `The earlier you book, the cheaper the fare.`', fid: 'f-the-more' },
        {
          t: 'p',
          text: 'Nhấn mạnh so sánh nhất: `by far the best`, `the very best`. Không cần `the` khi có tính từ sở hữu: `our most popular item`.'
        }
      ]
    }
  ],
  signals: [
    'Có `than` sau chỗ trống → so sánh hơn.',
    'Có `as ... as` bao quanh → dạng nguyên của Adj/Adv.',
    'Có `the` + chỗ trống + `in/of/among/ever` → so sánh nhất.',
    'Có much/far/even/still trước chỗ trống → so sánh hơn.',
    'Có `one of the` → so sánh nhất + N số nhiều.',
    'Cấu trúc `The ___ ..., the ___` → so sánh kép.'
  ],
  examples: [
    ['This printer is {faster|Adj} than the old one.', 'Máy in này nhanh hơn máy cũ.', 'Adj ngắn + -er + than.'],
    ['The new software is {more reliable|Adj} than the previous version.', 'Phần mềm mới đáng tin cậy hơn phiên bản trước.', 'Adj dài → more.'],
    ['Our rates are {as competitive|Adj} as those of larger firms.', 'Giá của chúng tôi cạnh tranh ngang các công ty lớn hơn.', 'as + Adj + as; those of.'],
    ['Ms. Park responded {as quickly|Adv} as possible.', 'Bà Park đã phản hồi nhanh nhất có thể.', 'as + Adv + as possible.'],
    ['This is {the most affordable|Adj} plan we offer.', 'Đây là gói rẻ nhất chúng tôi cung cấp.', 'So sánh nhất với Adj dài.'],
    ['Greenway is one of the {largest|Adj} retailers in the region.', 'Greenway là một trong những nhà bán lẻ lớn nhất khu vực.', 'one of the + -est + N số nhiều.'],
    ['Profits were {much higher|Adj} than expected.', 'Lợi nhuận cao hơn nhiều so với dự kiến.', 'much nhấn mạnh so sánh hơn.'],
    ['The earlier you book, the {lower|Adj} the price.', 'Đặt càng sớm, giá càng thấp.', 'So sánh kép.'],
    ['Fewer customers complained this month.', 'Tháng này ít khách phàn nàn hơn.', 'fewer + N đếm được số nhiều (less + không đếm được).'],
    ['The second proposal is {less expensive|Adj} than the first.', 'Đề xuất thứ hai ít tốn kém hơn đề xuất thứ nhất.', 'less + Adj + than.'],
    ['It was the best presentation I have ever seen.', 'Đó là bài thuyết trình hay nhất tôi từng xem.', 'the best ... have ever V3.'],
    ['Our new branch is twice as large as the old one.', 'Chi nhánh mới rộng gấp đôi chi nhánh cũ.', 'twice/three times + as ... as.']
  ],
  mistakes: {
    head: ['Sai', 'Đúng', 'Ghi nhớ'],
    rows: [
      ['more cheaper', '**cheaper**', 'Không dùng more với -er.'],
      ['very better', '**much** better', 'very không đi với so sánh hơn.'],
      ['as faster as', 'as **fast** as', 'Giữa as ... as là dạng nguyên.'],
      ['the most large', 'the **largest**', 'Adj 1 âm tiết dùng -est.'],
      ['less customers', '**fewer** customers', 'fewer + N đếm được.']
    ]
  },
  part5: [
    ['Train tickets are {cheaper|Adj} when purchased online.', 'Vé tàu rẻ hơn khi mua trực tuyến.', 'So sánh ngầm (than at the station) – vẫn dùng dạng hơn.'],
    ['Mr. Wu is the {most experienced|Adj} engineer on the team.', 'Ông Wu là kỹ sư giàu kinh nghiệm nhất trong nhóm.', 'the + most + Adj + on the team.'],
    ['The meeting lasted {longer|Adv} than planned.', 'Cuộc họp kéo dài lâu hơn dự kiến.', 'long/longer dùng như trạng từ bổ nghĩa `lasted`.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Quảng cáo dịch vụ',
      kind: 'Advertisement',
      lines: [
        ['Switch to SkyNet and enjoy internet speeds **twice as fast as** before.', 'Chuyển sang SkyNet và tận hưởng tốc độ nhanh gấp đôi trước đây.'],
        ['Our plans are **more flexible than** those of other providers.', 'Gói cước của chúng tôi linh hoạt hơn của các nhà mạng khác.'],
        ['**The sooner** you sign up, **the more** you save.', 'Đăng ký càng sớm, tiết kiệm càng nhiều.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Part 7 hay có bảng giá hoặc mô tả so sánh nhiều lựa chọn. Hãy đánh dấu từ so sánh (`cheaper, the largest, fewer, the same as`) và **đối tượng được so sánh** để tránh hiểu ngược.'
    },
    {
      t: 'passage',
      title: 'So sánh gói thành viên',
      kind: 'Table description',
      lines: [
        ['The Premium plan costs **more than** the Basic plan but includes **the widest** range of classes.', 'Gói Premium đắt hơn gói Basic nhưng có nhiều lớp học nhất.'],
        ['The Standard plan offers **the same** pool access **as** Premium.', 'Gói Standard có quyền dùng hồ bơi giống gói Premium.']
      ]
    }
  ],
  keyRules: [
    'as + dạng nguyên + as.',
    '-er/more + than; không dùng hai dấu hiệu cùng lúc.',
    'the + -est/most + phạm vi (in/of/among).',
    'one of the + so sánh nhất + N số nhiều.',
    'much/far/even/still + so sánh hơn; không dùng very.',
    'The + hơn ..., the + hơn ...',
    'fewer + N đếm được; less + N không đếm được.'
  ],
  review: ['Học thuộc 5 dạng bất quy tắc.', 'Đặt câu so sánh hai gói dịch vụ trong Unit Technology.'],
  related: ['bai-6', 'bai-11', 'bai-13'],
  formulas: ['f-as-as', 'f-comparative-than', 'f-superlative', 'f-the-more']
};
