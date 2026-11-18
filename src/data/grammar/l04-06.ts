import type { Lesson } from '../types';

export const bai4: Lesson = {
  id: 'bai-4',
  code: 'Bài 4',
  order: 1,
  title: 'Cấu trúc câu đơn – Cụm danh từ',
  short: 'Câu đơn – Cụm danh từ',
  summary:
    'Nhận ra khung S–V–O/C của một câu và cách một cụm danh từ được xây dựng quanh danh từ chính. Đây là nền móng để đoán đúng loại từ ở mọi chỗ trống.',
  version: 1,
  goals: [
    'Xác định được chủ ngữ (S), động từ chính (V), tân ngữ (O), bổ ngữ (C) và trạng ngữ (A) trong câu đơn.',
    'Nắm thứ tự trong cụm danh từ: từ hạn định → trạng từ → tính từ → danh từ bổ nghĩa → danh từ chính.',
    'Biết mỗi câu đơn có đúng một động từ chia thì và tìm được nó trong câu dài.'
  ],
  prereq: ['Biết khái niệm cơ bản: danh từ, động từ, tính từ, trạng từ.'],
  sections: [
    {
      id: 'khai-niem',
      title: 'Câu đơn là gì?',
      blocks: [
        {
          t: 'p',
          text: 'Câu đơn là câu chỉ có **một mệnh đề độc lập**, tức là một cặp chủ ngữ – động từ chia thì. Câu có thể rất dài vì có nhiều cụm danh từ, cụm giới từ, nhưng vẫn là câu đơn nếu chỉ có một động từ chính.'
        },
        {
          t: 'table',
          head: ['Thành phần', 'Vai trò', 'Thường là'],
          rows: [
            ['S – Chủ ngữ', 'Ai/cái gì thực hiện hoặc được mô tả', 'Cụm danh từ, đại từ, V-ing, to V'],
            ['V – Động từ', 'Hành động/trạng thái, mang thì', 'Động từ chia thì (có thể kèm trợ động từ)'],
            ['O – Tân ngữ', 'Đối tượng chịu tác động', 'Cụm danh từ, đại từ tân ngữ'],
            ['C – Bổ ngữ', 'Mô tả lại S hoặc O', 'Tính từ hoặc danh từ (sau be, become, seem, remain...)'],
            ['A – Trạng ngữ', 'Thời gian, nơi chốn, cách thức...', 'Trạng từ, cụm giới từ']
          ]
        },
        {
          t: 'note',
          tone: 'tip',
          title: 'Mẹo tìm động từ chính',
          text: 'Gạch bỏ các cụm giới từ (`in the office`, `for new employees`...) trước. Phần còn lại thường lộ ra S + V rất rõ.'
        }
      ]
    },
    {
      id: 'mau-cau',
      title: 'Năm mẫu câu đơn cơ bản',
      blocks: [
        { t: 'formula', pattern: 'S + V', text: 'Động từ nội động, không cần tân ngữ: arrive, rise, occur, expire.', fid: 'f-s-v-o' },
        { t: 'formula', pattern: 'S + V + O', text: 'Động từ ngoại động cần tân ngữ: approve, submit, review.', fid: 'f-s-v-o' },
        { t: 'formula', pattern: 'S + V + C', text: 'Động từ nối (be, become, remain, seem, appear) + tính từ/danh từ.', fid: 'f-s-v-c' },
        { t: 'formula', pattern: 'S + V + O + O', text: 'Hai tân ngữ: send/give/offer + người + vật.' },
        { t: 'formula', pattern: 'S + V + O + C', text: 'Tân ngữ + bổ ngữ: make/keep/find/consider + O + Adj/N.' },
        {
          t: 'ex',
          items: [
            ['Prices rose sharply.', 'Giá tăng mạnh.', '`rose` là nội động từ nên không có tân ngữ; `sharply` ({Adv}) bổ nghĩa cho động từ.'],
            ['The board approved the budget.', 'Hội đồng đã duyệt ngân sách.', '`approved` cần tân ngữ `the budget`.'],
            ['The new policy seems {effective|Adj}.', 'Chính sách mới có vẻ hiệu quả.', '`seem` là động từ nối, sau nó cần tính từ chứ không cần trạng từ.']
          ]
        }
      ]
    },
    {
      id: 'cum-danh-tu',
      title: 'Cấu tạo cụm danh từ',
      blocks: [
        {
          t: 'p',
          text: 'Cụm danh từ luôn xoay quanh **một danh từ chính** (head noun). Các từ khác đứng trước hoặc sau để bổ nghĩa cho nó.'
        },
        {
          t: 'formula',
          pattern: 'Det + (Adv) + (Adj) + (N bổ nghĩa) + N chính',
          text: 'Thứ tự phổ biến nhất. Ví dụ: `the + extremely + popular + training + program`.',
          fid: 'f-the-adj-n'
        },
        {
          t: 'table',
          head: ['Vị trí', 'Loại từ', 'Ví dụ'],
          rows: [
            ['Từ hạn định', 'a/an/the, this/these, my/their, some, every...', '**their**'],
            ['Trạng từ mức độ', 'Adv (bổ nghĩa cho Adj)', '**highly**'],
            ['Tính từ', 'Adj', '**qualified**'],
            ['Danh từ bổ nghĩa', 'N đứng như tính từ (luôn số ít)', '**sales**/**marketing**'],
            ['Danh từ chính', 'N', '**candidates**']
          ],
          caption: '→ their highly qualified marketing candidates'
        },
        {
          t: 'p',
          text: 'Sau danh từ chính có thể có **cụm giới từ** (`the report on sales`), **mệnh đề quan hệ** (`the report that you sent`) hoặc **phân từ** (`the report attached`).'
        },
        {
          t: 'note',
          tone: 'warn',
          title: 'Không phải quy tắc tuyệt đối',
          text: 'Sau `the` không phải lúc nào cũng là danh từ ngay: có thể là tính từ (`the new office`), trạng từ (`the recently opened branch`) hoặc số thứ tự (`the first quarter`). Hãy nhìn tới **danh từ chính** ở cuối cụm.'
        }
      ]
    }
  ],
  signals: [
    'Thiếu **động từ chính** trong câu (chưa có từ nào mang thì) → chỗ trống cần V chia thì.',
    'Chỗ trống đứng **giữa từ hạn định và danh từ** (`the ___ report`) → thường là Adj (hoặc N ghép).',
    'Chỗ trống đứng **sau từ hạn định và trước động từ/giới từ** (`The ___ was approved`) → cần N.',
    'Chỗ trống **trước Adj** trong cụm danh từ (`a ___ successful launch`) → Adv mức độ.',
    'Sau **động từ nối** (be, become, remain, seem) → Adj hoặc N làm bổ ngữ, không dùng Adv.',
    'Sau **động từ ngoại động** chưa có tân ngữ → cần N/đại từ tân ngữ.'
  ],
  examples: [
    ['The {marketing|N} {director|N} will present the plan.', 'Giám đốc marketing sẽ trình bày kế hoạch.', '`marketing` là danh từ bổ nghĩa cho danh từ chính `director`; cụm này làm chủ ngữ.'],
    ['Our {quarterly|Adj} {revenue|N} increased by 8 percent.', 'Doanh thu hằng quý của chúng tôi tăng 8%.', '`quarterly` đuôi -ly nhưng là **tính từ**, đứng trước danh từ `revenue`.'],
    ['The shipment arrived {late|Adv}.', 'Lô hàng đến muộn.', 'S + V (nội động); `late` là trạng từ cùng dạng với tính từ.'],
    ['Ms. Tran sent the clients a detailed proposal.', 'Bà Trần đã gửi cho khách hàng một bản đề xuất chi tiết.', 'S + V + O (người) + O (vật).'],
    ['The committee considers the offer {reasonable|Adj}.', 'Ủy ban cho rằng lời đề nghị là hợp lý.', 'S + V + O + C: `reasonable` mô tả `the offer`.'],
    ['A {highly|Adv} {experienced|Adj} {technician|N} repaired the machine.', 'Một kỹ thuật viên giàu kinh nghiệm đã sửa máy.', 'Adv `highly` bổ nghĩa Adj `experienced`, Adj bổ nghĩa N `technician`.'],
    ['The deadline for all applications is Friday.', 'Hạn chót cho tất cả hồ sơ là thứ Sáu.', 'Bỏ cụm giới từ `for all applications` → `The deadline is Friday`. Động từ hòa hợp với `deadline` (số ít).'],
    ['Employees in the Tokyo branch receive annual bonuses.', 'Nhân viên ở chi nhánh Tokyo nhận thưởng hằng năm.', 'Chủ ngữ là `Employees` (số nhiều) nên dùng `receive`.'],
    ['The {customer|N} {service|N} {team|N} remains {available|Adj} until 9 P.M.', 'Đội chăm sóc khách hàng vẫn làm việc đến 9 giờ tối.', 'Chuỗi danh từ ghép; `remain` + Adj làm bổ ngữ.'],
    ['Several {safety|N} {inspections|N} took place last week.', 'Đã có vài đợt kiểm tra an toàn vào tuần trước.', '`safety` là danh từ bổ nghĩa, luôn để số ít dù danh từ chính số nhiều.'],
    ['The {recently|Adv} {renovated|Adj} lobby impressed visitors.', 'Sảnh vừa được cải tạo gây ấn tượng với khách.', 'Adv + V3 (đóng vai Adj) + N: trạng từ đứng sau `the` vẫn hợp lệ.'],
    ['Please keep the storage room {clean|Adj}.', 'Vui lòng giữ phòng kho sạch sẽ.', 'Câu mệnh lệnh: keep + O + Adj. Không dùng `cleanly`.']
  ],
  mistakes: {
    head: ['Dễ nhầm', 'Sai', 'Đúng', 'Vì sao'],
    rows: [
      ['Hai động từ chính', 'The manager approves reviewed the plan.', 'The manager reviewed the plan.', 'Câu đơn chỉ có một động từ chia thì.'],
      ['Thiếu danh từ chính', 'The new is ready.', 'The new **schedule** is ready.', 'Tính từ cần danh từ đi kèm (trừ vài trường hợp như `the elderly`).'],
      ['Adv sau động từ nối', 'The results seem positively.', 'The results seem **positive**.', '`seem` nối với bổ ngữ là Adj.'],
      ['Danh từ bổ nghĩa số nhiều', 'a products launch', 'a **product** launch', 'Danh từ bổ nghĩa đứng trước thường ở dạng số ít (trừ vài từ như `sales`, `customs`).'],
      ['Chủ ngữ bị cụm giới từ che', 'The list of items are long.', 'The list of items **is** long.', 'Chủ ngữ thật là `list`.']
    ]
  },
  part5: [
    ['The {annual|Adj} {conference|N} will be held in Da Nang.', 'Hội nghị thường niên sẽ được tổ chức ở Đà Nẵng.', 'Giữa `The` và danh từ `conference` là vị trí của tính từ.'],
    ['Mr. Lee submitted his {resignation|N} on Monday.', 'Ông Lee đã nộp đơn từ chức hôm thứ Hai.', 'Sau tính từ sở hữu `his` và sau động từ ngoại động `submitted` cần danh từ làm tân ngữ.'],
    ['The new software is {extremely|Adv} easy to use.', 'Phần mềm mới cực kỳ dễ dùng.', 'Trước tính từ `easy` cần trạng từ mức độ.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Email thông báo nội bộ',
      kind: 'Email',
      lines: [
        ['Dear staff,', 'Gửi toàn thể nhân viên,'],
        ['The **quarterly safety inspection** will take place on May 12.', 'Đợt kiểm tra an toàn hằng quý sẽ diễn ra vào ngày 12 tháng 5.', 'Cụm danh từ: Adj + N bổ nghĩa + N chính.'],
        ['All employees must keep their **work areas** clear.', 'Mọi nhân viên phải giữ khu vực làm việc thông thoáng.', 'keep + O + Adj (`clear`).'],
        ['The inspector will check fire exits and electrical equipment.', 'Thanh tra viên sẽ kiểm tra lối thoát hiểm và thiết bị điện.', 'S + V + O với hai tân ngữ nối bằng `and`.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Trong Part 7, câu dài thường chỉ là câu đơn có nhiều cụm bổ nghĩa. Tìm **S + V** trước để biết câu nói "ai làm gì", rồi mới đọc chi tiết.'
    },
    {
      t: 'passage',
      title: 'Câu dài trong thông báo',
      kind: 'Notice',
      lines: [
        [
          'The **newly appointed head** of the regional sales division in Hanoi **will visit** our main office next Tuesday.',
          'Trưởng bộ phận kinh doanh khu vực ở Hà Nội vừa được bổ nhiệm sẽ đến thăm văn phòng chính của chúng ta vào thứ Ba tới.',
          'S = the newly appointed head; V = will visit; O = our main office; A = next Tuesday.'
        ]
      ]
    }
  ],
  keyRules: [
    'Mỗi mệnh đề có đúng một động từ chia thì.',
    'Cụm danh từ: Det + (Adv) + (Adj) + (N) + N chính.',
    'Danh từ bổ nghĩa đứng trước danh từ chính thường ở dạng số ít.',
    'Sau động từ nối (be, become, seem, remain) dùng Adj/N, không dùng Adv.',
    'Động từ hòa hợp với danh từ chính, không với danh từ trong cụm giới từ.',
    'Sau `the` không chắc chắn là N ngay – xem từ cuối cụm.',
    'Gạch bỏ cụm giới từ để tìm nhanh S và V.'
  ],
  review: [
    'Đọc lại bảng thứ tự cụm danh từ và tự đọc to 3 cụm trong bài.',
    'Lấy một email tiếng Anh bất kỳ, gạch chân S và V của từng câu.',
    'Mở thư viện công thức, lọc nhóm "Cụm danh từ" và lưu các thẻ còn thấy lạ.'
  ],
  related: ['bai-5', 'bai-6', 'bai-9'],
  formulas: ['f-s-v-o', 'f-s-v-c', 'f-the-adj-n', 'f-a-an-adj-n', 'f-poss-adj-n', 'f-adj-n', 'f-adv-adj', 'f-n-n']
};

export const bai5: Lesson = {
  id: 'bai-5',
  code: 'Bài 5',
  order: 2,
  title: 'Danh từ',
  short: 'Danh từ',
  summary:
    'Hậu tố danh từ, danh từ đếm được/không đếm được, danh từ chỉ người và chỉ việc, cùng các từ hạn định đi kèm.',
  version: 1,
  goals: [
    'Nhận ra danh từ qua hậu tố và vị trí trong câu.',
    'Phân biệt danh từ đếm được/không đếm được và từ hạn định phù hợp.',
    'Phân biệt danh từ chỉ người (applicant) và chỉ sự việc (application).'
  ],
  prereq: ['Bài 4: cấu trúc câu đơn và cụm danh từ.'],
  sections: [
    {
      id: 'vi-tri',
      title: 'Vị trí của danh từ',
      blocks: [
        {
          t: 'list',
          items: [
            'Làm **chủ ngữ**: `{Applicants|N} must submit a résumé.`',
            'Làm **tân ngữ** sau động từ: `We received your {application|N}.`',
            'Sau **giới từ**: `in {addition|N} to`, `for {approval|N}`.',
            'Sau **từ hạn định**: a/an/the, this/that, my/their, some, many, much, each, every.',
            'Sau **tính từ** trong cụm danh từ: `a careful {review|N}`.',
            'Làm **bổ ngữ** sau be/become: `She became a {supervisor|N}.`'
          ]
        }
      ]
    },
    {
      id: 'hau-to',
      title: 'Hậu tố danh từ thường gặp',
      blocks: [
        {
          t: 'table',
          head: ['Hậu tố', 'Ví dụ', 'Ghi chú'],
          rows: [
            ['-tion / -sion', 'registration, decision, expansion', 'Rất phổ biến'],
            ['-ment', 'agreement, payment, development', ''],
            ['-ance / -ence', 'attendance, maintenance, preference', ''],
            ['-ity / -ty', 'availability, security, loyalty', ''],
            ['-ness', 'effectiveness, awareness', ''],
            ['-er / -or / -ee / -ant / -ist', 'manager, supervisor, employee, applicant, specialist', 'Chỉ **người**'],
            ['-al', 'approval, arrival, proposal, renewal', 'Cẩn thận: -al cũng là đuôi tính từ (financial)'],
            ['-ure / -age / -ship', 'procedure, shortage, membership', '']
          ]
        },
        {
          t: 'note',
          tone: 'warn',
          text: 'Hậu tố chỉ là gợi ý. `-al` có thể là N (`approval`) hoặc Adj (`additional`); `-ive` thường là Adj nhưng `representative`, `executive`, `objective` còn là N. Luôn kiểm tra **vị trí** trong câu.'
        }
      ]
    },
    {
      id: 'dem-duoc',
      title: 'Đếm được – không đếm được',
      blocks: [
        {
          t: 'table',
          head: ['Loại', 'Đặc điểm', 'Từ hạn định đi kèm'],
          rows: [
            ['Đếm được số ít', 'Phải có từ hạn định', 'a/an, the, each, every, another, one'],
            ['Đếm được số nhiều', 'Có -s/-es', 'many, few, a few, several, a number of, these, both'],
            ['Không đếm được', 'Không có -s, động từ số ít', 'much, little, a little, an amount of, less']
          ]
        },
        {
          t: 'p',
          text: 'Danh từ **không đếm được** thường gặp trong TOEIC: `information, equipment, furniture, advice, luggage/baggage, merchandise, feedback, research, access, machinery, stationery, staff (nghĩa tập thể)`.'
        },
        { t: 'formula', pattern: 'each/every + N số ít + V số ít', text: '`Each employee has a locker.`', fid: 'f-quantifier' },
        { t: 'formula', pattern: 'a number of + N số nhiều + V số nhiều', text: 'Khác với `the number of + N số nhiều + V số ít`.', fid: 'f-quantifier' }
      ]
    },
    {
      id: 'nguoi-viec',
      title: 'Danh từ chỉ người và chỉ việc',
      blocks: [
        {
          t: 'p',
          text: 'Cùng một gốc thường có hai danh từ: một chỉ **người**, một chỉ **việc/khái niệm**. Chọn theo **nghĩa** và theo **từ hạn định** (danh từ chỉ người đếm được nên số ít phải có a/an/the).'
        },
        {
          t: 'table',
          head: ['Người', 'Việc / khái niệm'],
          rows: [
            ['applicant (ứng viên)', 'application (đơn, sự nộp đơn)'],
            ['attendee (người tham dự)', 'attendance (sự tham dự)'],
            ['supervisor (người giám sát)', 'supervision (sự giám sát)'],
            ['consultant (chuyên gia tư vấn)', 'consultation (buổi tư vấn)'],
            ['competitor (đối thủ)', 'competition (sự cạnh tranh)'],
            ['employer / employee', 'employment (việc làm)']
          ]
        }
      ]
    }
  ],
  signals: [
    'Sau a/an/the, tính từ sở hữu, this/that, each/every → cần danh từ (hoặc Adj + N).',
    'Sau giới từ (`of, for, in, with, without`) → thường là N hoặc V-ing.',
    'Chỗ trống đứng **trước động từ chính** và sau từ hạn định → N làm chủ ngữ.',
    'Có `a/an` hoặc `each/every` → N **số ít**; có `many, several, a few, both` → N **số nhiều**.',
    'Có `much, little, an amount of` → N **không đếm được**.',
    'Nghĩa câu nói về con người làm việc gì → N chỉ người; về hành động/khái niệm → N chỉ việc.'
  ],
  examples: [
    ['The {registration|N} {deadline|N} has been extended.', 'Hạn đăng ký đã được gia hạn.', 'Danh từ ghép `registration deadline`; danh từ chính là `deadline`.'],
    ['We appreciate your {cooperation|N}.', 'Chúng tôi trân trọng sự hợp tác của quý vị.', 'Sau tính từ sở hữu `your` cần danh từ.'],
    ['All {applicants|N} must have three years of experience.', 'Tất cả ứng viên phải có ba năm kinh nghiệm.', 'Người nộp đơn → `applicants`, số nhiều sau `All`.'],
    ['The {application|N} form is available online.', 'Mẫu đơn đăng ký có trên mạng.', 'Nói về tờ đơn → danh từ chỉ việc làm danh từ bổ nghĩa.'],
    ['Each {department|N} has its own budget.', 'Mỗi phòng ban có ngân sách riêng.', '`Each` + N số ít + V số ít (`has`).'],
    ['The hotel offers free {access|N} to the fitness center.', 'Khách sạn cho sử dụng miễn phí phòng tập.', '`access` không đếm được, đi với `to`.'],
    ['Please send us your {feedback|N} by Friday.', 'Vui lòng gửi phản hồi trước thứ Sáu.', '`feedback` không đếm được – không viết `feedbacks`.'],
    ['A {number|N} of {customers|N} have requested refunds.', 'Một số khách hàng đã yêu cầu hoàn tiền.', '`A number of` + N số nhiều + V số nhiều.'],
    ['The number of {visitors|N} has doubled.', 'Số lượng khách tham quan đã tăng gấp đôi.', '`The number of` → động từ số ít `has`.'],
    ['Ms. Kim was promoted to {supervisor|N}.', 'Bà Kim được thăng chức làm giám sát viên.', 'Sau `promoted to` + chức danh, có thể không dùng mạo từ khi nói về chức vụ.'],
    ['The {maintenance|N} of the elevators is scheduled for Sunday.', 'Việc bảo trì thang máy được lên lịch vào Chủ nhật.', 'Đuôi -ance; danh từ chính làm chủ ngữ, V số ít.'],
    ['We need more {information|N} about the {shipment|N}.', 'Chúng tôi cần thêm thông tin về lô hàng.', '`information` không đếm được; `shipment` đếm được, sau `the`.']
  ],
  mistakes: {
    head: ['Cặp dễ nhầm', 'Ví dụ đúng', 'Ghi nhớ'],
    rows: [
      ['N vs Adj', 'a **decision** (N) / a **decisive** leader (Adj)', 'Sau mạo từ, nếu sau chỗ trống không còn danh từ → cần N.'],
      ['Người vs việc', 'an experienced **consultant** / a free **consultation**', 'Người có thể "experienced"; buổi tư vấn có thể "free".'],
      ['Không đếm được', 'much **equipment**, some **advice**', 'Không dùng a/an hay -s.'],
      ['a number of vs the number of', 'A number of staff **are**... / The number of staff **is**...', 'Xem lại Bài 9.'],
      ['N số ít thiếu mạo từ', 'He is **a** manager.', 'Danh từ đếm được số ít luôn cần từ hạn định.']
    ]
  },
  part5: [
    ['The {approval|N} of the new budget took two weeks.', 'Việc phê duyệt ngân sách mới mất hai tuần.', 'Sau `The`, trước giới từ `of` → cần danh từ; `approval` là N đuôi -al.'],
    ['Several {participants|N} asked for printed copies.', 'Vài người tham gia đã xin bản in.', '`Several` + N số nhiều; người thực hiện hành động `asked` → N chỉ người.'],
    ['There is too much {furniture|N} in the meeting room.', 'Có quá nhiều đồ đạc trong phòng họp.', '`much` + N không đếm được.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Thông báo tuyển dụng',
      kind: 'Advertisement',
      lines: [
        ['Greenleaf Foods is seeking an **assistant** for its purchasing department.', 'Greenleaf Foods đang tìm một trợ lý cho phòng thu mua.', '`an` + N chỉ người số ít.'],
        ['The successful **candidate** will handle supplier **communication**.', 'Ứng viên trúng tuyển sẽ phụ trách việc liên lạc với nhà cung cấp.', 'Người (candidate) vs việc (communication).'],
        ['**Applications** must be submitted by June 30.', 'Hồ sơ phải được nộp trước ngày 30/6.', 'Hồ sơ là "vật/việc", số nhiều → V số nhiều `must be`.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Part 7 hay dùng **danh từ hóa** (nominalization) để nói gọn: `the expansion of the factory` thay cho `the factory expanded`. Khi gặp cụm `the + N-tion + of`, hãy dịch lại thành câu có động từ để hiểu nhanh.'
    },
    {
      t: 'passage',
      title: 'Danh từ hóa trong bản tin',
      kind: 'Article',
      lines: [
        ['The **completion** of the new warehouse has led to a **reduction** in delivery times.', 'Việc hoàn thành nhà kho mới đã giúp rút ngắn thời gian giao hàng.', '= The new warehouse was completed, so delivery times were reduced.']
      ]
    }
  ],
  keyRules: [
    'Danh từ đứng sau từ hạn định, tính từ, giới từ và làm S/O.',
    'Hậu tố -tion, -ment, -ance, -ity, -ness thường là danh từ.',
    '-er/-or/-ee/-ant/-ist thường chỉ người.',
    'Danh từ đếm được số ít luôn cần từ hạn định.',
    'information, equipment, furniture, advice, feedback, luggage, merchandise không đếm được.',
    'A number of + N số nhiều + V số nhiều; the number of + V số ít.',
    'Chọn N chỉ người hay chỉ việc theo nghĩa và mạo từ.'
  ],
  review: [
    'Học thuộc bảng hậu tố, che cột ví dụ và tự đọc lại.',
    'Liệt kê 10 danh từ không đếm được, đặt cụm `some/much + N`.',
    'Ôn cặp danh từ người/việc trong 8 Unit (Personnel có nhiều nhất).'
  ],
  related: ['bai-4', 'bai-6', 'bai-9'],
  formulas: ['f-suffix-n', 'f-quantifier', 'f-the-adj-n', 'f-poss-adj-n', 'f-prep-n']
};

export const bai6: Lesson = {
  id: 'bai-6',
  code: 'Bài 6',
  order: 3,
  title: 'Tính từ',
  short: 'Tính từ',
  summary: 'Vị trí của tính từ, hậu tố tính từ, tính từ đi với giới từ và những từ đuôi -ly là tính từ.',
  version: 1,
  goals: [
    'Biết hai vị trí chính của tính từ: trước danh từ và sau động từ nối.',
    'Nhận ra tính từ qua hậu tố và phân biệt với trạng từ.',
    'Ghi nhớ các cụm tính từ + giới từ hay gặp.'
  ],
  prereq: ['Bài 4, Bài 5.'],
  sections: [
    {
      id: 'vi-tri',
      title: 'Vị trí của tính từ',
      blocks: [
        { t: 'formula', pattern: '(Det) + Adj + N', text: 'Tính từ đứng trước danh từ để bổ nghĩa.', fid: 'f-adj-n' },
        { t: 'formula', pattern: 'linking verb + Adj', text: 'be, become, remain, stay, seem, appear, look, sound, feel, prove + Adj.', fid: 'f-be-complement' },
        { t: 'formula', pattern: 'make/keep/find/consider + O + Adj', text: 'Tính từ làm bổ ngữ cho tân ngữ.' },
        { t: 'formula', pattern: 'something/anyone + Adj', text: 'Tính từ đứng **sau** đại từ bất định: `something new`, `anyone interested`.' },
        {
          t: 'ex',
          items: [
            ['The hotel provides {comfortable|Adj} rooms.', 'Khách sạn có phòng tiện nghi.', 'Adj trước N.'],
            ['The instructions were {clear|Adj}.', 'Hướng dẫn rất rõ ràng.', 'be + Adj.'],
            ['Anyone {interested|Adj} should contact Ms. Ruiz.', 'Ai quan tâm hãy liên hệ bà Ruiz.', 'Adj sau đại từ bất định.']
          ]
        }
      ]
    },
    {
      id: 'hau-to',
      title: 'Hậu tố tính từ',
      blocks: [
        {
          t: 'table',
          head: ['Hậu tố', 'Ví dụ'],
          rows: [
            ['-able / -ible', 'available, reliable, flexible, responsible'],
            ['-ful / -less', 'successful, helpful, careless, wireless'],
            ['-ive', 'effective, attractive, competitive, extensive'],
            ['-al', 'additional, financial, professional, seasonal'],
            ['-ous', 'various, numerous, generous, previous'],
            ['-ic / -ical', 'economic, specific, practical'],
            ['-ent / -ant', 'efficient, convenient, significant, relevant'],
            ['-ary / -ory', 'necessary, temporary, mandatory'],
            ['-ed / -ing', 'qualified, experienced / leading, missing (xem Bài 10)']
          ]
        },
        {
          t: 'note',
          tone: 'warn',
          title: 'Đuôi -ly nhưng là tính từ',
          text: '`friendly, costly, timely, lively, likely, orderly, quarterly, monthly, weekly, daily, elderly`. Ví dụ: `a timely response` (phản hồi kịp thời). Một số từ như `daily`, `monthly` vừa là Adj vừa là Adv.'
        }
      ]
    },
    {
      id: 'adj-prep',
      title: 'Tính từ + giới từ',
      blocks: [
        {
          t: 'table',
          head: ['Cụm', 'Nghĩa'],
          rows: [
            ['responsible for', 'chịu trách nhiệm về'],
            ['eligible for', 'đủ điều kiện cho'],
            ['available to sb / for sth', 'có sẵn cho'],
            ['familiar with', 'quen thuộc với'],
            ['compatible with', 'tương thích với'],
            ['aware of', 'nhận thức được'],
            ['capable of', 'có khả năng'],
            ['subject to', 'phụ thuộc vào, có thể bị'],
            ['similar to / different from', 'giống / khác'],
            ['comparable to', 'có thể so sánh với'],
            ['be likely to V', 'có khả năng sẽ']
          ]
        }
      ]
    }
  ],
  signals: [
    'Chỗ trống nằm giữa từ hạn định và danh từ (`a ___ increase`) → Adj.',
    'Sau be/become/remain/seem và **không có danh từ theo sau** → Adj.',
    'Sau keep/make/find + tân ngữ → Adj.',
    'Trước chỗ trống có Adv mức độ (very, extremely, highly) và sau đó không có Adj khác → chỗ trống là Adj.',
    'Sau chỗ trống là giới từ cố định (for, with, of, to) → xem cụm Adj + giới từ.'
  ],
  examples: [
    ['Our {competitive|Adj} prices attract many buyers.', 'Giá cạnh tranh của chúng tôi thu hút nhiều người mua.', 'Tính từ sở hữu + Adj + N.'],
    ['The meeting room is {available|Adj} on Thursday.', 'Phòng họp còn trống vào thứ Năm.', 'be + Adj; available rất hay gặp.'],
    ['Mr. Patel is {responsible|Adj} for training new staff.', 'Ông Patel chịu trách nhiệm đào tạo nhân viên mới.', 'responsible for + V-ing.'],
    ['Full-time employees are {eligible|Adj} for health insurance.', 'Nhân viên toàn thời gian đủ điều kiện hưởng bảo hiểm y tế.', 'eligible for + N.'],
    ['Thank you for your {timely|Adj} payment.', 'Cảm ơn quý khách đã thanh toán đúng hạn.', '`timely` đuôi -ly nhưng là Adj, đứng trước N.'],
    ['The software is {compatible|Adj} with most devices.', 'Phần mềm tương thích với hầu hết thiết bị.', 'compatible with.'],
    ['The new procedure proved {effective|Adj}.', 'Quy trình mới tỏ ra hiệu quả.', '`prove` là động từ nối + Adj.'],
    ['Prices are {subject|Adj} to change without notice.', 'Giá có thể thay đổi mà không báo trước.', '`subject to` + N; `to` ở đây là giới từ.'],
    ['The company hired an {additional|Adj} technician.', 'Công ty thuê thêm một kỹ thuật viên.', 'an + Adj + N; chú ý `an` vì âm /ə/.'],
    ['Customers found the website {confusing|Adj}.', 'Khách hàng thấy trang web khó hiểu.', 'find + O + Adj; -ing vì website gây ra cảm giác.'],
    ['The project is {likely|Adj} to finish early.', 'Dự án có khả năng xong sớm.', 'be likely to V – `likely` là Adj.'],
    ['We offer {various|Adj} payment options.', 'Chúng tôi có nhiều lựa chọn thanh toán.', '`various` + N số nhiều.']
  ],
  mistakes: {
    head: ['Cặp', 'Đúng', 'Sai', 'Lý do'],
    rows: [
      ['Adj vs Adv', 'The plan is **successful**.', 'The plan is successfully.', 'Sau be cần Adj.'],
      ['Adj vs Adv', 'She works **efficiently**.', 'She works efficient.', 'Bổ nghĩa động từ thường → Adv.'],
      ['Adj vs N', 'a **significant** increase', 'a significance increase', 'Trước N cần Adj.'],
      ['Adj sau make/keep', 'keep the room **quiet**', 'keep the room quietly', 'Bổ ngữ cho tân ngữ là Adj.'],
      ['Đuôi -ly', 'a **costly** repair', 'a costing repair', '`costly` là Adj có sẵn.']
    ]
  },
  part5: [
    ['The museum is {accessible|Adj} to visitors in wheelchairs.', 'Bảo tàng có lối vào cho khách dùng xe lăn.', 'be + Adj + to.'],
    ['Ms. Nguyen gave a very {informative|Adj} presentation.', 'Bà Nguyễn đã có bài trình bày rất bổ ích.', 'Adv `very` + Adj + N.'],
    ['Please keep all receipts {safe|Adj}.', 'Vui lòng giữ an toàn tất cả hóa đơn.', 'keep + O + Adj.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Thư cảm ơn khách hàng',
      kind: 'Letter',
      lines: [
        ['Thank you for choosing Harbor View Hotel.', 'Cảm ơn quý khách đã chọn khách sạn Harbor View.'],
        ['We hope your stay was **pleasant**.', 'Chúng tôi mong quý khách đã có kỳ nghỉ dễ chịu.', 'be + Adj.'],
        ['As a **loyal** guest, you are **eligible** for a 15 percent discount.', 'Là khách quen, quý khách được giảm 15%.', 'Adj + N; eligible for.'],
        ['This offer is **valid** until December 31.', 'Ưu đãi có hiệu lực đến 31/12.', 'be + Adj.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Tính từ trong Part 7 thường mang **thông tin then chốt**: `mandatory` (bắt buộc), `optional` (tùy chọn), `temporary` (tạm thời), `complimentary` (miễn phí), `refundable/non-refundable`. Khi đọc, hãy chú ý tính từ đứng trước danh từ chính vì nó cho biết điều kiện.'
    },
    {
      t: 'passage',
      title: 'Điều khoản vé sự kiện',
      kind: 'Notice',
      lines: [
        ['Tickets are **non-refundable** but **transferable** to another person.', 'Vé không được hoàn tiền nhưng có thể chuyển nhượng cho người khác.', 'Hai Adj nối bằng `but` – thông tin trái ngược.'],
        ['**Complimentary** parking is **available** for ticket holders.', 'Có chỗ đỗ xe miễn phí cho người có vé.', 'Adj + N làm chủ ngữ; be + Adj.']
      ]
    }
  ],
  keyRules: [
    'Tính từ đứng trước danh từ hoặc sau động từ nối.',
    'keep/make/find/consider + O + Adj.',
    'Tính từ đứng sau something, anyone, nothing...',
    'Các đuôi -able, -ful, -ive, -ous, -al, -ent, -ic thường là Adj.',
    'friendly, timely, costly, likely, quarterly là Adj dù có -ly.',
    'Học tính từ theo cụm giới từ: responsible for, eligible for, compatible with.'
  ],
  review: [
    'Đọc lại bảng hậu tố và nhóm từ -ly là tính từ.',
    'Tự đặt 5 câu với linking verb + Adj theo ngữ cảnh văn phòng.',
    'Lưu thẻ công thức "Adj + N" và "be + Adj/N/V-ing/V3".'
  ],
  related: ['bai-4', 'bai-10', 'bai-11'],
  formulas: ['f-adj-n', 'f-adv-adj', 'f-be-complement', 'f-suffix-adj', 'f-the-adj-n', 'f-a-an-adj-n']
};
