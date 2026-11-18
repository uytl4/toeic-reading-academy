import type { Lesson } from '../types';

export const bai9: Lesson = {
  id: 'bai-9',
  code: 'Bài 9',
  order: 7,
  title: 'Sự hòa hợp giữa chủ ngữ và động từ',
  short: 'Hòa hợp S – V',
  summary: 'Chia động từ số ít/số nhiều theo đúng chủ ngữ thật, kể cả khi chủ ngữ dài, có lượng từ hoặc liên từ.',
  version: 1,
  goals: [
    'Tìm đúng danh từ chính của chủ ngữ để chia động từ.',
    'Nắm quy tắc với each/every, a number of/the number of, either/neither, both, V-ing làm chủ ngữ.',
    'Nhận ra hòa hợp trong mệnh đề quan hệ.'
  ],
  prereq: ['Bài 4, Bài 5, Bài 7.'],
  sections: [
    {
      id: 'nguyen-tac',
      title: 'Nguyên tắc cơ bản',
      blocks: [
        { t: 'formula', pattern: 'N số ít / N không đếm được + V số ít', text: '`The equipment is new.`', fid: 'f-agreement' },
        { t: 'formula', pattern: 'N số nhiều + V số nhiều', text: '`The tools are new.`', fid: 'f-agreement' },
        {
          t: 'p',
          text: 'Những dạng động từ cần chú ý: `is/are`, `was/were`, `has/have`, `does/do` và V(s/es) ở hiện tại đơn. Động từ sau **modal** và ở **quá khứ đơn** (trừ was/were) không đổi theo chủ ngữ.'
        }
      ]
    },
    {
      id: 'chu-ngu-dai',
      title: 'Chủ ngữ dài – cụm giới từ, mệnh đề chen giữa',
      blocks: [
        {
          t: 'p',
          text: 'Cụm giới từ, mệnh đề quan hệ hoặc cụm phân từ đứng giữa **không** thay đổi chủ ngữ. Hãy tìm danh từ đứng **trước** giới từ đầu tiên.'
        },
        {
          t: 'ex',
          items: [
            ['The {cost|N} of the repairs {is|V} high.', 'Chi phí sửa chữa cao.', 'Chủ ngữ `cost` (số ít), không phải `repairs`.'],
            ['The {members|N} of the committee {have|V} agreed.', 'Các thành viên ủy ban đã đồng ý.', 'Chủ ngữ `members` (số nhiều).'],
            ['The {manager|N}, along with two assistants, {is|V} attending.', 'Quản lý cùng hai trợ lý đang tham dự.', '`along with / as well as / together with` không cộng chủ ngữ.']
          ]
        }
      ]
    },
    {
      id: 'luong-tu',
      title: 'Lượng từ và liên từ',
      blocks: [
        {
          t: 'table',
          head: ['Chủ ngữ', 'Động từ', 'Ví dụ'],
          rows: [
            ['Each / Every + N số ít', 'Số ít', 'Every employee **has** an ID card.'],
            ['Each of + N số nhiều', 'Số ít', 'Each of the rooms **has** a desk.'],
            ['A number of + N số nhiều', 'Số nhiều', 'A number of orders **were** delayed.'],
            ['The number of + N số nhiều', 'Số ít', 'The number of orders **was** high.'],
            ['Both A and B', 'Số nhiều', 'Both the CEO and the CFO **are** here.'],
            ['Either A or B / Neither A nor B', 'Theo B (gần nhất)', 'Neither the manager nor the staff **were** informed.'],
            ['Not only A but also B', 'Theo B', 'Not only the staff but also the manager **is** invited.'],
            ['V-ing / To V làm chủ ngữ', 'Số ít', 'Reducing costs **is** our priority.'],
            ['Mệnh đề danh từ (What/Whether...)', 'Số ít', 'What we need **is** more time.'],
            ['Most/Some/All/Half of + N', 'Theo N sau of', 'Most of the budget **is** spent. / Most of the funds **are** spent.']
          ]
        },
        {
          t: 'note',
          tone: 'warn',
          text: 'Danh từ tập thể (staff, team, committee, management) trong TOEIC thường đi với động từ số ít khi nói về cả nhóm như một khối; `staff` cũng có thể dùng số nhiều khi nhấn mạnh từng người. Ưu tiên dấu hiệu khác trong câu khi phân vân.'
        }
      ]
    },
    {
      id: 'menh-de-quan-he',
      title: 'Hòa hợp trong mệnh đề quan hệ',
      blocks: [
        {
          t: 'formula',
          pattern: 'N + who/which/that + V (hòa hợp với N)',
          text: '`the {employees|N} who {work|V} at night` / `the {employee|N} who {works|V} at night`.'
        }
      ]
    }
  ],
  signals: [
    'Tìm danh từ đứng trước `of / in / for / with` đầu tiên – đó thường là chủ ngữ thật.',
    'Có `each / every / the number of` → V số ít.',
    'Có `a number of / both ... and / several / many` → V số nhiều.',
    '`either ... or / neither ... nor / not only ... but also` → chia theo danh từ gần động từ nhất.',
    'Chủ ngữ là V-ing hoặc to V → số ít.',
    'Mệnh đề quan hệ: nhìn danh từ đứng ngay trước who/which/that.'
  ],
  examples: [
    ['The list of approved vendors {is|V} updated monthly.', 'Danh sách nhà cung cấp được duyệt được cập nhật hằng tháng.', 'Chủ ngữ `list` số ít.'],
    ['Two of our branches {have|V} closed.', 'Hai chi nhánh của chúng tôi đã đóng cửa.', '`Two of` + N số nhiều → số nhiều.'],
    ['Every invoice {includes|V} a reference number.', 'Mỗi hóa đơn đều có mã tham chiếu.', 'Every + N số ít → includes.'],
    ['Each of the participants {receives|V} a certificate.', 'Mỗi người tham gia nhận một chứng chỉ.', 'Each of + N số nhiều → V số ít.'],
    ['A number of complaints {have|V} been received.', 'Đã nhận được một số lời phàn nàn.', 'A number of → số nhiều.'],
    ['The number of applicants {has|V} increased.', 'Số ứng viên đã tăng.', 'The number of → số ít.'],
    ['Either the director or her assistants {are|V} responsible.', 'Hoặc giám đốc hoặc các trợ lý của bà chịu trách nhiệm.', 'Theo `assistants` (gần nhất).'],
    ['Attending the workshops {is|V} mandatory.', 'Tham dự các buổi hội thảo là bắt buộc.', 'V-ing làm chủ ngữ → số ít.'],
    ['The furniture in the lobby {looks|V} modern.', 'Đồ nội thất ở sảnh trông hiện đại.', '`furniture` không đếm được → số ít.'],
    ['Customers who {shop|V} online receive free delivery.', 'Khách mua trực tuyến được giao hàng miễn phí.', '`who` thay cho `Customers` → shop.'],
    ['Ms. Ali, together with her team, {was|V} praised.', 'Bà Ali cùng nhóm của bà đã được khen ngợi.', '`together with` không cộng chủ ngữ.'],
    ['Most of the information {is|V} confidential.', 'Phần lớn thông tin là bảo mật.', 'Most of + N không đếm được → số ít.']
  ],
  mistakes: {
    head: ['Bẫy', 'Sai', 'Đúng'],
    rows: [
      ['Danh từ gần động từ', 'The quality of the products are high.', 'The quality of the products **is** high.'],
      ['Each of', 'Each of the stores have a manager.', 'Each of the stores **has** a manager.'],
      ['as well as', 'The CEO as well as the managers are attending.', 'The CEO as well as the managers **is** attending.'],
      ['V-ing chủ ngữ', 'Hiring new staff take time.', 'Hiring new staff **takes** time.'],
      ['Danh từ không đếm được', 'The equipment are expensive.', 'The equipment **is** expensive.']
    ]
  },
  part5: [
    ['The results of the survey {show|V} strong customer interest.', 'Kết quả khảo sát cho thấy khách hàng rất quan tâm.', 'Chủ ngữ `results` số nhiều.'],
    ['Neither the printer nor the scanner {is|V} working.', 'Cả máy in lẫn máy scan đều không hoạt động.', 'Theo `scanner` (số ít).'],
    ['Each department {submits|V} a monthly report.', 'Mỗi phòng nộp báo cáo hằng tháng.', 'Each + N số ít.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Bản tin công ty',
      kind: 'Newsletter',
      lines: [
        ['The number of employees using the shuttle bus **has** grown.', 'Số nhân viên đi xe đưa đón đã tăng.', 'The number of → has.'],
        ['As a result, two additional buses **are** now available.', 'Vì vậy, hiện có thêm hai xe buýt.', 'buses → are.'],
        ['Each bus **stops** at the main gate every 15 minutes.', 'Mỗi xe dừng ở cổng chính 15 phút một lần.', 'Each + N số ít → stops.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Trong câu dài Part 7, hòa hợp S–V là **công cụ đọc hiểu**: động từ số ít hay số nhiều giúp bạn biết chủ ngữ thật là danh từ nào khi có nhiều danh từ chen giữa.'
    },
    {
      t: 'passage',
      title: 'Câu dài trong báo cáo',
      kind: 'Report',
      lines: [
        ['The **proposal** submitted by the three regional offices last month **includes** a plan to share warehouses.', 'Đề xuất do ba văn phòng khu vực nộp tháng trước bao gồm kế hoạch dùng chung kho.', '`includes` số ít → chủ ngữ là `proposal`, không phải `offices`.']
      ]
    }
  ],
  keyRules: [
    'Động từ hòa hợp với danh từ chính của chủ ngữ.',
    'Cụm giới từ và along with/as well as không đổi chủ ngữ.',
    'Each/Every/Each of → số ít.',
    'A number of → số nhiều; the number of → số ít.',
    'Both A and B → số nhiều; either/neither/not only → theo B.',
    'V-ing, to V, mệnh đề danh từ làm chủ ngữ → số ít.',
    'Most/Some/All of + N → theo N.'
  ],
  review: ['Học bảng lượng từ theo cặp đối lập (a number of / the number of).', 'Tìm 5 câu dài trong một email và gạch chân danh từ chính của chủ ngữ.'],
  related: ['bai-4', 'bai-5', 'bai-16'],
  formulas: ['f-agreement', 'f-quantifier', 'f-both-and', 'f-either-or']
};

export const bai10: Lesson = {
  id: 'bai-10',
  code: 'Bài 10',
  order: 8,
  title: 'Tính từ phân từ, mệnh đề phân từ',
  short: 'Phân từ',
  summary:
    'Phân biệt V-ing và V3 khi dùng như tính từ, và cách rút gọn mệnh đề trạng ngữ thành cụm phân từ.',
  version: 1,
  goals: [
    'Chọn đúng V-ing (chủ động, gây ra) hay V3 (bị động, chịu tác động) khi làm tính từ.',
    'Hiểu mệnh đề phân từ đầu câu và điều kiện cùng chủ ngữ.',
    'Nhận biết các phân từ đã thành tính từ cố định trong TOEIC.'
  ],
  prereq: ['Bài 6 (tính từ), Bài 8 (bị động).'],
  sections: [
    {
      id: 'tinh-tu-phan-tu',
      title: 'Tính từ đuôi -ing và -ed',
      blocks: [
        { t: 'formula', pattern: 'V-ing + N', text: 'Danh từ **thực hiện / gây ra** hành động: `a growing company` (công ty đang lớn mạnh).', fid: 'f-ving-adj' },
        { t: 'formula', pattern: 'V3 + N', text: 'Danh từ **chịu** hành động: `a signed contract` (hợp đồng đã được ký).', fid: 'f-v3-adj' },
        {
          t: 'table',
          head: ['V-ing (chủ động)', 'V3 (bị động)'],
          rows: [
            ['an **interesting** proposal (gây hứng thú)', '**interested** clients (cảm thấy hứng thú)'],
            ['a **confusing** form (gây khó hiểu)', '**confused** customers (bị bối rối)'],
            ['the **remaining** seats (còn lại – nội động)', 'the **attached** file (được đính kèm)'],
            ['**existing** customers (hiện có)', '**qualified** applicants (đủ năng lực)'],
            ['a **leading** supplier (hàng đầu)', '**limited** space (có hạn)'],
            ['**rising** costs (đang tăng)', '**reduced** prices (đã được giảm)']
          ]
        },
        {
          t: 'note',
          tone: 'tip',
          text: 'Với cảm xúc: vật/sự việc **gây** cảm xúc → -ing (`exciting news`); người **cảm thấy** → -ed (`excited staff`). Một số V3 thành tính từ cố định: `experienced, qualified, detailed, dedicated, complicated, sophisticated, established`.'
        }
      ]
    },
    {
      id: 'sau-danh-tu',
      title: 'Phân từ đứng sau danh từ',
      blocks: [
        {
          t: 'p',
          text: 'Phân từ có kèm thành phần khác thường đứng **sau** danh từ (thực chất là mệnh đề quan hệ rút gọn – xem Bài 17).'
        },
        {
          t: 'ex',
          items: [
            ['Employees {wishing|V} to attend should register.', 'Nhân viên muốn tham dự nên đăng ký.', '= who wish – chủ động.'],
            ['The documents {attached|V} to this e-mail are confidential.', 'Các tài liệu đính kèm email này là bảo mật.', '= which are attached – bị động.']
          ]
        }
      ]
    },
    {
      id: 'menh-de-phan-tu',
      title: 'Mệnh đề phân từ (rút gọn mệnh đề trạng ngữ)',
      blocks: [
        {
          t: 'formula',
          pattern: '(Liên từ) + V-ing ..., S + V',
          text: 'Chủ ngữ ẩn **thực hiện** hành động: `After reviewing the data, Ms. Lim approved the plan.`',
          fid: 'f-participle-clause'
        },
        {
          t: 'formula',
          pattern: '(Liên từ) + V3 ..., S + V',
          text: 'Chủ ngữ ẩn **chịu** hành động: `Once approved, the plan will take effect.`',
          fid: 'f-participle-clause'
        },
        {
          t: 'formula',
          pattern: 'Having + V3 ..., S + V',
          text: 'Hành động xảy ra **trước**: `Having completed the training, she received a certificate.`'
        },
        {
          t: 'note',
          tone: 'warn',
          title: 'Điều kiện bắt buộc',
          text: 'Chủ ngữ ẩn của cụm phân từ phải **trùng** chủ ngữ mệnh đề chính. Sai: `Reviewing the data, the plan was approved.` (kế hoạch không tự xem dữ liệu).'
        },
        {
          t: 'p',
          text: 'Các liên từ hay giữ lại trước phân từ: `when, while, after, before, since, once, unless, if, until, as`. Ví dụ: `when using`, `unless otherwise noted`, `as requested`, `if needed`.'
        }
      ]
    }
  ],
  signals: [
    'Danh từ sau chỗ trống **tự làm** hành động → V-ing; **bị/được** làm → V3.',
    'Sau chỗ trống có tân ngữ → V-ing (chủ động).',
    'Sau chỗ trống có `by` hoặc giới từ, không có tân ngữ → V3.',
    'Đầu câu: liên từ (when/after/once/if) + chỗ trống → cân nhắc V-ing/V3 theo chủ ngữ mệnh đề chính.',
    'Cảm xúc: người → -ed; vật/sự việc → -ing.'
  ],
  examples: [
    ['We offer discounts to {returning|Adj} customers.', 'Chúng tôi giảm giá cho khách quay lại.', 'Khách tự quay lại → V-ing.'],
    ['Please read the {enclosed|Adj} brochure.', 'Vui lòng đọc tờ giới thiệu được gửi kèm.', 'Tờ giới thiệu được gửi kèm → V3.'],
    ['The {remaining|Adj} tickets will be sold at the door.', 'Số vé còn lại sẽ được bán tại cửa.', '`remain` là nội động từ → chỉ có V-ing.'],
    ['Only {qualified|Adj} candidates will be contacted.', 'Chỉ ứng viên đủ tiêu chuẩn mới được liên hệ.', 'V3 đã thành tính từ cố định.'],
    ['The results were {disappointing|Adj}.', 'Kết quả thật đáng thất vọng.', 'Sự việc gây thất vọng → -ing.'],
    ['Investors were {disappointed|Adj} with the results.', 'Nhà đầu tư thất vọng với kết quả.', 'Người cảm thấy → -ed.'],
    ['When {using|V} the copier, enter your code first.', 'Khi dùng máy photo, hãy nhập mã trước.', 'Chủ ngữ ẩn (bạn) dùng máy → V-ing.'],
    ['Once {installed|V}, the software updates automatically.', 'Sau khi được cài đặt, phần mềm tự động cập nhật.', 'Phần mềm được cài → V3.'],
    ['{Having|V} reviewed the bids, the board chose Lumex.', 'Sau khi xem xét các hồ sơ thầu, hội đồng đã chọn Lumex.', 'Having + V3: hành động xảy ra trước.'],
    ['Unless otherwise {stated|V}, all prices include tax.', 'Trừ khi có ghi chú khác, mọi mức giá đã gồm thuế.', 'Cụm cố định `unless otherwise stated/noted`.'],
    ['Staff {working|V} overtime will be paid extra.', 'Nhân viên làm thêm giờ sẽ được trả thêm.', 'Phân từ sau N, chủ động.'],
    ['The report {prepared|V} by the auditors was accurate.', 'Báo cáo do kiểm toán viên soạn là chính xác.', 'Phân từ sau N, bị động có `by`.']
  ],
  mistakes: {
    head: ['Cặp', 'Đúng', 'Lý do'],
    rows: [
      ['V-ing vs V3', 'the **attached** document', 'Tài liệu được đính kèm.'],
      ['V-ing vs V3', 'an **increasing** number', 'Con số đang tự tăng.'],
      ['Cảm xúc', 'The staff were **satisfied**. / The result is **satisfying**.', 'Người -ed, vật -ing.'],
      ['Chủ ngữ treo', '**Arriving** late, **Mr. Ota** missed the intro.', 'Chủ ngữ mệnh đề chính phải là người đến muộn.'],
      ['Nội động từ', 'the **remaining** items (không phải remained)', 'Nội động từ không có nghĩa bị động.']
    ]
  },
  part5: [
    ['Please review the {revised|Adj} schedule.', 'Vui lòng xem lịch đã chỉnh sửa.', 'Lịch được chỉnh sửa → V3.'],
    ['Before {leaving|V} the office, turn off all lights.', 'Trước khi rời văn phòng, hãy tắt hết đèn.', 'Liên từ + V-ing, có tân ngữ `the office`.'],
    ['As {requested|V}, I have attached the invoice.', 'Theo yêu cầu, tôi đã đính kèm hóa đơn.', 'Cụm cố định `as requested`.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Email gửi kèm tài liệu',
      kind: 'Email',
      lines: [
        ['Dear Mr. Sato,', 'Kính gửi ông Sato,'],
        ['As **discussed** during our call, I have attached the **updated** price list.', 'Như đã trao đổi qua điện thoại, tôi đã đính kèm bảng giá cập nhật.', 'as + V3; V3 + N.'],
        ['**Existing** customers will keep their current rates until March.', 'Khách hàng hiện hữu được giữ mức giá hiện tại đến tháng Ba.', 'existing là V-ing đã thành Adj.'],
        ['If **needed**, I can arrange a meeting to explain the changes.', 'Nếu cần, tôi có thể sắp xếp cuộc họp để giải thích thay đổi.', 'if + V3 (= if it is needed).']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Mệnh đề phân từ giúp văn bản ngắn gọn nhưng làm câu khó đọc hơn. Khi thấy câu bắt đầu bằng V-ing/V3, hãy **tìm chủ ngữ của mệnh đề chính** rồi gán nó cho hành động trong cụm phân từ.'
    },
    {
      t: 'passage',
      title: 'Thông cáo báo chí',
      kind: 'Press release',
      lines: [
        ['**Founded** in 1998, Brightway Logistics now operates in 12 countries.', 'Được thành lập năm 1998, Brightway Logistics nay hoạt động ở 12 quốc gia.', '= Brightway was founded in 1998.'],
        ['**Seeking** to expand further, the company **has opened** an office in Jakarta.', 'Muốn mở rộng thêm, công ty đã mở văn phòng ở Jakarta.', '= The company seeks to expand.']
      ]
    }
  ],
  keyRules: [
    'V-ing = chủ động/gây ra; V3 = bị động/chịu tác động.',
    'Cảm xúc: người -ed, vật -ing.',
    'Nội động từ chỉ có dạng V-ing làm tính từ (remaining, rising, existing).',
    'Mệnh đề phân từ phải cùng chủ ngữ với mệnh đề chính.',
    'Having + V3: hành động xảy ra trước.',
    'Nhớ cụm: as requested, as discussed, unless otherwise noted, if needed, when using.'
  ],
  review: ['Lập bảng 10 cặp -ing/-ed hay gặp.', 'Đọc lại đoạn thông cáo báo chí và viết lại câu phân từ thành mệnh đề đầy đủ.'],
  related: ['bai-6', 'bai-8', 'bai-17'],
  formulas: ['f-ving-adj', 'f-v3-adj', 'f-participle-clause', 'f-be-complement']
};

export const bai11: Lesson = {
  id: 'bai-11',
  code: 'Bài 11',
  order: 9,
  title: 'Trạng từ, đại từ',
  short: 'Trạng từ & đại từ',
  summary: 'Vị trí của trạng từ, các trạng từ dễ nhầm và hệ thống đại từ nhân xưng, sở hữu, phản thân, bất định.',
  version: 1,
  goals: [
    'Đặt trạng từ đúng vị trí và phân biệt với tính từ.',
    'Nắm bảng đại từ: chủ ngữ – tân ngữ – tính từ sở hữu – đại từ sở hữu – phản thân.',
    'Hiểu cách đại từ tham chiếu trong đoạn văn.'
  ],
  prereq: ['Bài 4, Bài 6.'],
  sections: [
    {
      id: 'trang-tu',
      title: 'Vị trí của trạng từ',
      blocks: [
        { t: 'formula', pattern: 'S + Adv + V', text: 'Trước động từ thường: `We carefully reviewed...`', fid: 'f-s-adv-v' },
        { t: 'formula', pattern: 'aux/be + Adv + V-ing/V3', text: 'Giữa trợ động từ và động từ chính: `has recently opened`, `is currently being repaired`.', fid: 'f-s-adv-v' },
        { t: 'formula', pattern: 'V + O + Adv', text: 'Cuối mệnh đề: `She completed the task quickly.`' },
        { t: 'formula', pattern: 'Adv + Adj / Adv + Adv', text: '`highly qualified`, `very quickly`.', fid: 'f-adv-adj' },
        { t: 'formula', pattern: 'Adv, S + V', text: 'Trạng từ bổ nghĩa cả câu: `Unfortunately, the event was canceled.`' },
        {
          t: 'note',
          tone: 'warn',
          text: 'Trạng từ có thể đứng ở nhiều vị trí; chỉ khi chỗ trống nằm ở vị trí mà **câu đã đầy đủ thành phần** (đã có S, V, O) thì thường cần Adv.'
        }
      ]
    },
    {
      id: 'trang-tu-de-nham',
      title: 'Trạng từ dễ nhầm',
      blocks: [
        {
          t: 'table',
          head: ['Từ', 'Nghĩa / cách dùng'],
          rows: [
            ['hard / hardly', 'chăm chỉ / hầu như không'],
            ['late / lately', 'muộn / gần đây'],
            ['high / highly', 'cao (vị trí) / rất, hết sức'],
            ['near / nearly', 'gần / gần như'],
            ['close / closely', 'gần / chặt chẽ, kỹ lưỡng'],
            ['already / yet / still', 'đã (khẳng định) / chưa (phủ định, câu hỏi) / vẫn'],
            ['so / such', 'so + Adj/Adv; such + (a) + Adj + N'],
            ['too / enough', 'too + Adj (quá); Adj + enough (đủ)'],
            ['soon / shortly', 'sớm / ngay sau đây (shortly after)'],
            ['approximately / almost', 'xấp xỉ + số / gần như (almost all, almost every)']
          ]
        }
      ]
    },
    {
      id: 'dai-tu',
      title: 'Bảng đại từ',
      blocks: [
        {
          t: 'table',
          head: ['Chủ ngữ', 'Tân ngữ', 'Tính từ sở hữu', 'Đại từ sở hữu', 'Phản thân'],
          rows: [
            ['I', 'me', 'my', 'mine', 'myself'],
            ['you', 'you', 'your', 'yours', 'yourself / yourselves'],
            ['he', 'him', 'his', 'his', 'himself'],
            ['she', 'her', 'her', 'hers', 'herself'],
            ['it', 'it', 'its', '—', 'itself'],
            ['we', 'us', 'our', 'ours', 'ourselves'],
            ['they', 'them', 'their', 'theirs', 'themselves']
          ]
        },
        { t: 'formula', pattern: 'their + (Adj) + N', text: 'Tính từ sở hữu luôn cần danh từ theo sau.', fid: 'f-poss-adj-n' },
        { t: 'formula', pattern: 'theirs / ours = their/our + N', text: 'Đại từ sở hữu đứng một mình, thay cho cả cụm.', fid: 'f-pronoun-family' },
        {
          t: 'formula',
          pattern: 'S + V + oneself / by oneself',
          text: 'Phản thân khi chủ ngữ và tân ngữ là một (`introduce herself`), để nhấn mạnh (`the CEO himself`), hoặc `by oneself` = một mình, tự mình.',
          fid: 'f-reflexive'
        },
        {
          t: 'note',
          tone: 'warn',
          title: 'its ≠ it\'s',
          text: '`its` là tính từ sở hữu (`the company and its staff`); `it\'s` = it is / it has.'
        }
      ]
    },
    {
      id: 'bat-dinh',
      title: 'Đại từ bất định và chỉ định',
      blocks: [
        {
          t: 'list',
          items: [
            '`another + N số ít` (một cái khác) / `other + N số nhiều` / `the other` (cái còn lại) / `others` (những cái khác, đứng một mình).',
            '`one another / each other`: lẫn nhau.',
            '`those who + V số nhiều`: những người mà... `Those who registered early will receive a gift.`',
            '`that of / those of`: thay cho danh từ đã nhắc để so sánh: `Our prices are lower than those of our competitors.`',
            '`anyone, someone, everyone, no one` + V số ít.'
          ]
        }
      ]
    }
  ],
  signals: [
    'Câu đã đủ S + V (+ O) mà còn chỗ trống → thường là Adv.',
    'Chỗ trống giữa trợ động từ và V-ing/V3 → Adv.',
    'Chỗ trống trước Adj → Adv mức độ.',
    'Chỗ trống trước danh từ, chỉ người sở hữu → tính từ sở hữu (my/their).',
    'Sau động từ/giới từ → đại từ tân ngữ (them) hoặc phản thân nếu trùng chủ ngữ.',
    'Đứng một mình làm S/O, thay cụm "their + N" → đại từ sở hữu (theirs).',
    '`by ___` nghĩa "tự mình" → phản thân.'
  ],
  examples: [
    ['The new system works {efficiently|Adv}.', 'Hệ thống mới vận hành hiệu quả.', 'Câu đã đủ S+V → Adv bổ nghĩa động từ.'],
    ['Sales have {steadily|Adv} increased.', 'Doanh số đã tăng đều.', 'Giữa trợ động từ `have` và V3.'],
    ['The workshop was {extremely|Adv} useful.', 'Buổi hội thảo cực kỳ hữu ích.', 'Adv + Adj.'],
    ['{Unfortunately|Adv}, the flight was delayed.', 'Đáng tiếc là chuyến bay bị hoãn.', 'Adv bổ nghĩa cả câu.'],
    ['We have {hardly|Adv} any stock left.', 'Chúng tôi hầu như không còn hàng.', 'hardly = gần như không.'],
    ['Ms. Garcia presented **her** proposal.', 'Bà Garcia trình bày đề xuất của bà.', 'Trước N → tính từ sở hữu.'],
    ['The client called **us** twice.', 'Khách hàng đã gọi cho chúng tôi hai lần.', 'Sau động từ → đại từ tân ngữ.'],
    ['Our offices are larger than **theirs**.', 'Văn phòng của chúng tôi rộng hơn của họ.', 'theirs = their offices.'],
    ['Mr. Brown repaired the shelf **himself**.', 'Ông Brown tự sửa cái kệ.', 'Phản thân nhấn mạnh.'],
    ['New employees should introduce **themselves** to the team.', 'Nhân viên mới nên tự giới thiệu với nhóm.', 'Chủ ngữ và tân ngữ cùng một người.'],
    ['**Those** who wish to attend must register.', 'Những ai muốn tham dự phải đăng ký.', 'those who + V số nhiều.'],
    ['Our fees are lower than **those** of other banks.', 'Phí của chúng tôi thấp hơn phí của các ngân hàng khác.', 'those of thay cho `the fees`.']
  ],
  mistakes: {
    head: ['Lỗi', 'Sai', 'Đúng'],
    rows: [
      ['Adj thay Adv', 'He speaks clear.', 'He speaks **clearly**.'],
      ['Adv thay Adj sau be', 'The room is quietly.', 'The room is **quiet**.'],
      ['Tân ngữ thay sở hữu', 'Please submit them reports.', 'Please submit **their** reports.'],
      ['Sở hữu thay đại từ sở hữu', 'This desk is their.', 'This desk is **theirs**.'],
      ['Phản thân sai', 'She did it by her.', 'She did it by **herself**.'],
      ['it\'s / its', 'The firm raised it\'s prices.', 'The firm raised **its** prices.']
    ]
  },
  part5: [
    ['The package was delivered {promptly|Adv}.', 'Gói hàng được giao nhanh chóng.', 'Câu bị động đã đủ → Adv.'],
    ['Staff members must wear **their** badges at all times.', 'Nhân viên phải luôn đeo thẻ.', 'Trước N → tính từ sở hữu.'],
    ['Ms. Tanaka prefers to check the data **herself**.', 'Bà Tanaka thích tự mình kiểm tra dữ liệu.', 'Nhấn mạnh → phản thân.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Email từ phòng nhân sự',
      kind: 'Email',
      lines: [
        ['Dear team members,', 'Gửi các thành viên,'],
        ['HR has **recently** updated **its** vacation policy.', 'Phòng nhân sự vừa cập nhật chính sách nghỉ phép.', 'Adv giữa trợ động từ và V3; `its` thay cho HR.'],
        ['Please read **it** carefully before submitting **your** requests.', 'Vui lòng đọc kỹ trước khi gửi yêu cầu.', '`it` = the policy; `your` + N.'],
        ['**Those** who have questions may contact Ms. Ngo **directly**.', 'Ai có thắc mắc có thể liên hệ trực tiếp bà Ngô.', 'those who; Adv cuối câu.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Đại từ là sợi dây nối các câu. Mỗi khi gặp `it, they, this, these, those, the former, the latter`, hãy dừng lại và xác định nó **thay cho danh từ nào** ở câu trước – đây là nguồn gốc của nhiều câu hỏi suy luận.'
    },
    {
      t: 'passage',
      title: 'Bài báo kinh doanh',
      kind: 'Article',
      lines: [
        ['Fenwick Motors and Orion Cars both released electric models this year.', 'Fenwick Motors và Orion Cars đều ra mắt xe điện trong năm nay.'],
        ['**The former** focused on price, while **the latter** emphasized design.', 'Hãng trước tập trung vào giá, còn hãng sau nhấn mạnh thiết kế.', 'the former = Fenwick; the latter = Orion.']
      ]
    }
  ],
  keyRules: [
    'Adv bổ nghĩa V, Adj, Adv khác hoặc cả câu.',
    'Câu đã đủ thành phần → chỗ trống thường là Adv.',
    'aux + Adv + V-ing/V3.',
    'Tính từ sở hữu + N; đại từ sở hữu đứng một mình.',
    'Phản thân khi S = O, để nhấn mạnh, hoặc by oneself.',
    'those who + V số nhiều; that/those of để so sánh.',
    'hardly, lately, highly, nearly mang nghĩa khác với dạng không -ly.'
  ],
  review: ['Đọc to bảng đại từ theo hàng ngang 3 lần.', 'Ghi 6 cặp trạng từ dễ nhầm vào sổ tay.'],
  related: ['bai-6', 'bai-14', 'bai-16'],
  formulas: ['f-s-adv-v', 'f-adv-adj', 'f-pronoun-family', 'f-reflexive', 'f-poss-adj-n', 'f-suffix-adv']
};
