import type { ReadingGuide, RoadmapDay } from '../types';

export const readingGuides: ReadingGuide[] = [
  {
    id: 'part-5',
    part: 'Part 5',
    title: 'Incomplete Sentences – Đọc câu đơn có chỗ trống',
    desc: 'Cách đọc dấu hiệu trước/sau chỗ trống để xác định loại từ, thì, cấu trúc. Chỉ học phương pháp, không có bài thi.',
    version: 1,
    related: ['bai-4', 'bai-5', 'bai-6', 'bai-7', 'bai-8', 'bai-9', 'bai-12', 'bai-13'],
    sections: [
      {
        id: 'phan-tich-cau',
        title: '1. Phân tích cấu trúc câu đơn',
        blocks: [
          { t: 'p', text: 'Trước khi nghĩ đến nghĩa, hãy xác định **câu đang thiếu thành phần nào**: chủ ngữ, động từ, tân ngữ, bổ ngữ hay trạng ngữ.' },
          {
            t: 'list',
            ordered: true,
            items: [
              'Gạch bỏ cụm giới từ và mệnh đề phụ.',
              'Tìm động từ chia thì. Nếu chưa có → chỗ trống cần V chia thì.',
              'Nếu đã có S + V + O đầy đủ → chỗ trống thường là Adv hoặc thành phần bổ sung.',
              'Nếu chỗ trống nằm trong cụm danh từ → xét vị trí Det – Adv – Adj – N.'
            ]
          },
          {
            t: 'passage',
            title: 'Phân tích mẫu',
            lines: [
              ['The marketing team **carefully** reviewed the survey results before the meeting.', 'Nhóm marketing đã xem kỹ kết quả khảo sát trước cuộc họp.', 'S = The marketing team; V = reviewed; O = the survey results. Câu đã đủ → vị trí giữa S và V là Adv.']
            ]
          }
        ]
      },
      {
        id: 'loai-tu',
        title: '2. Nhận diện N, V, Adj, Adv',
        blocks: [
          {
            t: 'table',
            head: ['Vị trí', 'Thường cần', 'Ví dụ'],
            rows: [
              ['Sau a/the/my + trước động từ', 'N', 'The **decision** was made.'],
              ['Giữa Det và N', 'Adj', 'a **reliable** supplier'],
              ['Trước Adj', 'Adv', 'a **surprisingly** low price'],
              ['Sau be/become/remain', 'Adj (hoặc N, V-ing, V3)', 'The office is **spacious**.'],
              ['Giữa aux và V chính', 'Adv', 'has **recently** opened'],
              ['Sau giới từ', 'N / V-ing', 'for **approval** / by **calling**'],
              ['Sau modal', 'V nguyên mẫu', 'must **submit**']
            ]
          },
          { t: 'note', tone: 'warn', title: 'Quy tắc không tuyệt đối', text: 'Sau `the` có thể là Adj/Adv; sau `be` có thể là N, V-ing, V3. Luôn kiểm tra **từ đứng sau chỗ trống** và nghĩa câu trước khi kết luận.' }
        ]
      },
      {
        id: 'han-dinh',
        title: '3. Từ hạn định, đại từ, số ít/số nhiều',
        blocks: [
          { t: 'list', items: ['a/an/each/every/another + N số ít.', 'many/several/a few/both/these + N số nhiều.', 'much/little/an amount of + N không đếm được.', 'Tính từ sở hữu + N; đại từ sở hữu đứng một mình; phản thân khi S = O.'] }
        ]
      },
      {
        id: 'thi-bi-dong',
        title: '4. Thì, bị động, hòa hợp',
        blocks: [
          { t: 'list', items: ['Tìm cụm thời gian (since, last, by next...) để chọn thì.', 'Có tân ngữ sau động từ → chủ động; không có → cân nhắc bị động.', 'Tìm danh từ chính của chủ ngữ để chia số ít/số nhiều.'] }
        ]
      },
      {
        id: 'gioi-lien-tu',
        title: '5. Giới từ, liên từ, collocations',
        blocks: [
          { t: 'formula', pattern: 'Chỗ trống + cụm danh từ → giới từ; chỗ trống + mệnh đề → liên từ', text: 'despite/because of + N; although/because + S + V.', fid: 'f-because-of' },
          { t: 'p', text: 'Collocations không suy luận được từ ngữ pháp – cần học thuộc theo cụm: `place an order`, `comply with`, `be eligible for`, `in accordance with`.' }
        ]
      },
      {
        id: 'phuong-phap',
        title: '6. Phương pháp đọc dấu hiệu trước/sau chỗ trống',
        blocks: [
          {
            t: 'list',
            ordered: true,
            items: [
              'Đọc **1–2 từ trước và sau** chỗ trống.',
              'Xác định chỗ trống cần loại từ gì hoặc chức năng gì.',
              'Nếu vẫn phân vân, đọc cả câu để xét nghĩa, thì, số ít/nhiều.',
              'Kiểm tra lại các ngoại lệ (từ -ly là Adj, nội động từ, to là giới từ).'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'part-6',
    part: 'Part 6',
    title: 'Text Completion – Đọc đoạn văn ngắn',
    desc: 'Theo dõi thì xuyên suốt, quan hệ ý giữa các câu, đại từ tham chiếu và mục đích văn bản.',
    version: 1,
    related: ['bai-7', 'bai-11', 'bai-13'],
    sections: [
      {
        id: 'thi-xuyen-suot',
        title: '1. Xác định thì xuyên suốt đoạn',
        blocks: [
          { t: 'p', text: 'Đoạn văn có **khung thời gian**: thông báo sự kiện sắp tới dùng tương lai; báo cáo việc đã làm dùng quá khứ/hoàn thành. Một câu riêng lẻ có thể đúng ngữ pháp với nhiều thì, nhưng **chỉ một thì khớp với cả đoạn**.' },
          {
            t: 'passage',
            title: 'Đoạn minh họa: thì theo ngữ cảnh',
            kind: 'Email',
            lines: [
              ['We are pleased to announce that our new branch **will open** on Main Street next month.', 'Chúng tôi vui mừng thông báo chi nhánh mới sẽ khai trương trên phố Main tháng sau.', 'Mốc tương lai được đặt ở câu đầu.'],
              ['The branch **will offer** extended hours on weekends.', 'Chi nhánh sẽ mở cửa thêm giờ vào cuối tuần.', 'Giữ thì tương lai theo câu trước.'],
              ['A ribbon-cutting ceremony **will be held** on the first day.', 'Lễ cắt băng sẽ được tổ chức vào ngày đầu tiên.', 'Tương lai + bị động.']
            ]
          }
        ]
      },
      {
        id: 'quan-he-y',
        title: '2. Quan hệ ý giữa các câu và từ nối',
        blocks: [
          {
            t: 'table',
            head: ['Quan hệ', 'Từ nối'],
            rows: [
              ['Bổ sung', 'In addition, Moreover, Furthermore, Also'],
              ['Đối lập', 'However, Nevertheless, On the other hand, In contrast'],
              ['Kết quả', 'Therefore, As a result, Consequently, Thus'],
              ['Ví dụ', 'For example, For instance'],
              ['Thời gian/trình tự', 'First, Then, Afterward, Meanwhile, Finally'],
              ['Thay thế', 'Instead, Alternatively, Otherwise']
            ]
          },
          { t: 'note', tone: 'tip', text: 'Để chọn từ nối, đọc **câu trước và câu sau**, rồi tự hỏi: câu sau bổ sung, trái ngược hay là kết quả của câu trước?' }
        ]
      },
      {
        id: 'tham-chieu',
        title: '3. Đại từ thay thế và tham chiếu',
        blocks: [
          { t: 'p', text: '`it, they, this, these, such, the former, the latter, the company, the item` thường thay cho danh từ ở câu trước. Số ít/số nhiều của đại từ phải khớp với danh từ được thay.' },
          {
            t: 'passage',
            title: 'Đoạn minh họa: tham chiếu',
            kind: 'Notice',
            lines: [
              ['New ID badges have been printed for all employees.', 'Thẻ nhân viên mới đã được in cho toàn bộ nhân viên.'],
              ['**They** can be collected from the reception desk.', 'Có thể nhận thẻ tại quầy lễ tân.', 'They = New ID badges (số nhiều).'],
              ['**This** change is part of our updated security policy.', 'Thay đổi này là một phần của chính sách an ninh mới.', 'This change = việc phát thẻ mới.']
            ]
          }
        ]
      },
      {
        id: 'muc-dich',
        title: '4. Nhận biết mục đích và văn phong công sở',
        blocks: [
          {
            t: 'table',
            head: ['Loại văn bản', 'Mục đích', 'Câu mở đầu thường gặp'],
            rows: [
              ['Email thông báo', 'Thông tin thay đổi', 'We would like to inform you that...'],
              ['Thư xin lỗi', 'Xin lỗi, đề xuất giải pháp', 'We apologize for...'],
              ['Thư cảm ơn', 'Cảm ơn, mời quay lại', 'Thank you for...'],
              ['Memo nội bộ', 'Yêu cầu hành động', 'Please be advised that...'],
              ['Quảng cáo', 'Giới thiệu sản phẩm/ưu đãi', 'Are you looking for...?']
            ]
          }
        ]
      },
      {
        id: 'doan-gan-nhan',
        title: '5. Đoạn minh họa có nhãn chức năng câu',
        blocks: [
          {
            t: 'passage',
            title: 'Email gửi khách hàng',
            kind: 'Email',
            lines: [
              ['Thank you for shopping at Linden Home Goods.', 'Cảm ơn quý khách đã mua sắm tại Linden Home Goods.', '[Mở đầu – cảm ơn]'],
              ['We are writing to let you know that your sofa delivery **has been rescheduled** for March 14.', 'Chúng tôi viết thư để báo rằng lịch giao ghế sofa đã được dời sang 14/3.', '[Mục đích chính – thông báo thay đổi]'],
              ['**This is because** our supplier experienced unexpected delays.', 'Lý do là nhà cung cấp gặp chậm trễ ngoài dự kiến.', '[Giải thích nguyên nhân – This thay cho việc dời lịch]'],
              ['**As a token of our apology**, we have added a free cushion set to your order.', 'Để thể hiện lời xin lỗi, chúng tôi đã tặng thêm bộ gối tựa vào đơn hàng.', '[Đền bù]'],
              ['Please contact us **if** the new date is not convenient.', 'Vui lòng liên hệ nếu ngày mới không thuận tiện.', '[Kêu gọi hành động]']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'part-7',
    part: 'Part 7',
    title: 'Reading Comprehension – Đọc hiểu văn bản',
    desc: 'Đọc câu dài, nhận diện thông tin then chốt và cách đọc từng dạng văn bản: email, lịch, quảng cáo, hóa đơn, chuỗi tin nhắn, đoạn đôi/ba.',
    version: 1,
    related: ['bai-10', 'bai-16', 'bai-17', 'bai-8', 'bai-14', 'bai-15'],
    sections: [
      {
        id: 'cau-dai',
        title: '1. Đọc cấu trúc câu dài',
        blocks: [
          { t: 'list', ordered: true, items: ['Tìm động từ chính chia thì.', 'Tìm chủ ngữ của động từ đó (danh từ chính).', 'Xếp các phần còn lại vào "khung": mệnh đề quan hệ, phân từ, cụm giới từ bổ nghĩa cho danh từ nào.', 'Diễn đạt lại câu thành 2–3 câu ngắn.'] },
          {
            t: 'passage',
            title: 'Bóc tách câu dài',
            kind: 'Article',
            lines: [
              [
                'Customers who signed up for the loyalty program before March, when the new rules took effect, will continue to receive the discounts offered under the previous plan.',
                'Khách hàng đăng ký chương trình thành viên trước tháng Ba, thời điểm quy định mới có hiệu lực, sẽ tiếp tục được hưởng các ưu đãi theo gói cũ.',
                'V chính: will continue. S: Customers. who signed up...: MĐQH. when the new rules took effect: bổ nghĩa March. offered under...: rút gọn bị động bổ nghĩa discounts.'
              ]
            ]
          }
        ]
      },
      {
        id: 'thong-tin',
        title: '2. Nhận diện thông tin then chốt',
        blocks: [
          {
            t: 'table',
            head: ['Loại thông tin', 'Tín hiệu ngôn ngữ'],
            rows: [
              ['Đối tượng', 'Chủ ngữ, `for + người`, `those who`, `all employees`'],
              ['Thời gian', 'by, until, within, as of, starting, effective + ngày'],
              ['Hành động yêu cầu', 'Please + V, must/should + V, be required to'],
              ['Điều kiện', 'if, unless, provided that, only if, eligible'],
              ['Phủ định', 'not, no longer, neither, without, fail to, unable to'],
              ['So sánh', 'more/less than, the same as, unlike, compared to']
            ]
          },
          { t: 'note', tone: 'warn', text: 'Phủ định ngầm như `no longer` (không còn), `fail to` (không làm được), `rather than` (thay vì) rất dễ bị đọc lướt qua và hiểu ngược nghĩa.' }
        ]
      },
      {
        id: 'dang-van-ban',
        title: '3. Cách đọc từng dạng văn bản',
        blocks: [
          {
            t: 'table',
            head: ['Dạng', 'Đọc gì trước', 'Ngữ pháp nổi bật'],
            rows: [
              ['Email/thư', 'Người gửi, người nhận, dòng tiêu đề, câu đầu (mục đích)', 'Thì, đại từ, câu điều kiện lịch sự'],
              ['Lịch trình/schedule', 'Tiêu đề cột, ngày giờ, ghi chú (*)', 'Giới từ thời gian, nơi chốn'],
              ['Thông báo/notice', 'Ai bị ảnh hưởng, từ khi nào, phải làm gì', 'Bị động, modal'],
              ['Quảng cáo', 'Sản phẩm, ưu đãi, điều kiện, hạn', 'Tính từ, so sánh nhất'],
              ['Hóa đơn/đơn hàng', 'Số lượng, đơn giá, tổng, ghi chú giao hàng', 'Danh từ, con số, giới từ'],
              ['Chuỗi tin nhắn', 'Ai nói, thời gian gửi, câu trả lời ngắn', 'Câu rút gọn, thành ngữ ("Sounds good")'],
              ['Bài báo', 'Tiêu đề, đoạn đầu, trích dẫn', 'Câu dài, phân từ, danh từ hóa']
            ]
          }
        ]
      },
      {
        id: 'doan-don',
        title: '4. Ví dụ đoạn đơn – thông báo',
        blocks: [
          {
            t: 'passage',
            title: 'Notice: Parking garage',
            kind: 'Notice',
            lines: [
              ['**Effective** October 1, the north parking garage **will be reserved** for visitors only.', 'Kể từ 1/10, bãi đỗ xe phía bắc chỉ dành cho khách.', 'Effective + ngày = có hiệu lực từ. Bị động tương lai.'],
              ['Employees **who currently park** there **must apply** for a permit for the south garage.', 'Nhân viên hiện đang đỗ ở đó phải xin giấy phép cho bãi phía nam.', 'Đối tượng bị ảnh hưởng: MĐQH. Hành động: must apply.'],
              ['Permits **are issued** on a first-come, first-served basis.', 'Giấy phép được cấp theo thứ tự đến trước.', 'Bị động hiện tại – quy trình chung.']
            ]
          }
        ]
      },
      {
        id: 'doan-doi',
        title: '5. Ví dụ đoạn đôi – quảng cáo + email',
        blocks: [
          {
            t: 'passage',
            title: 'Văn bản 1: Quảng cáo',
            kind: 'Advertisement',
            lines: [
              ['Brightdesk Office Supplies – Spring Sale!', 'Brightdesk Office Supplies – Giảm giá mùa xuân!'],
              ['Orders **over** $200 **receive** free delivery. Orders placed **before** April 10 **also** get 15 percent off printer ink.', 'Đơn trên 200 đô được giao miễn phí. Đơn đặt trước 10/4 còn được giảm 15% mực in.', 'Hai điều kiện riêng: giá trị đơn và thời điểm đặt.']
            ]
          },
          {
            t: 'passage',
            title: 'Văn bản 2: Email khách hàng',
            kind: 'Email',
            lines: [
              ['I placed an order for $180 on April 8, **including** three ink cartridges.', 'Tôi đặt đơn 180 đô vào ngày 8/4, gồm ba hộp mực.', 'Liên kết với văn bản 1: < $200 (không miễn phí giao), trước 10/4 (được giảm mực).'],
              ['**However**, I was charged the full price for the ink.', 'Tuy nhiên, tôi bị tính đủ giá mực.', 'However: vấn đề phát sinh.']
            ]
          },
          { t: 'note', tone: 'tip', text: 'Đoạn đôi/ba yêu cầu **ghép thông tin**: điều kiện ở văn bản 1 + dữ kiện ở văn bản 2. Ghi chú nhanh các con số, ngày và điều kiện sang lề để đối chiếu.' }
        ]
      },
      {
        id: 'doan-ba',
        title: '6. Ví dụ đoạn ba – lịch + email + biểu mẫu',
        blocks: [
          {
            t: 'passage',
            title: 'Văn bản 1: Lịch hội thảo',
            kind: 'Schedule',
            lines: [
              ['Session A – Digital Marketing (Room 101, 9:00–10:30)', 'Phiên A – Marketing số (Phòng 101, 9:00–10:30)'],
              ['Session B – Budget Planning (Room 204, 11:00–12:30) *Limited to 20 participants', 'Phiên B – Lập kế hoạch ngân sách (Phòng 204, 11:00–12:30) *Tối đa 20 người', 'Dấu * chứa điều kiện quan trọng.']
            ]
          },
          {
            t: 'passage',
            title: 'Văn bản 2: Email',
            kind: 'Email',
            lines: [
              ['Session B **has reached** its capacity, so a second Budget Planning session **has been added** at 2:00 P.M. **in the same room**.', 'Phiên B đã kín chỗ, vì vậy một phiên Lập kế hoạch ngân sách thứ hai được thêm lúc 2 giờ chiều tại cùng phòng.', '"the same room" tham chiếu Room 204 ở văn bản 1.']
            ]
          },
          {
            t: 'passage',
            title: 'Văn bản 3: Phiếu đăng ký',
            kind: 'Form',
            lines: [
              ['Name: Hoa Le — Sessions: A, Budget Planning (afternoon)', 'Tên: Lê Hoa — Phiên: A, Lập kế hoạch ngân sách (buổi chiều)', 'Ghép 3 văn bản: Hoa sẽ ở phòng 204 lúc 2 giờ chiều.']
            ]
          }
        ]
      }
    ]
  }
];

export const readingById = (id: string) => readingGuides.find((r) => r.id === id);

export const roadmap: RoadmapDay[] = [
  { day: 1, title: 'Câu đơn, cụm danh từ, danh từ', focus: 'Bài 4–5', lessons: ['bai-4', 'bai-5'], units: ['unit-1'], tasks: ['Đọc Bài 4 và Bài 5', 'Học bảng hậu tố danh từ', 'Lưu 3 công thức cụm danh từ'] },
  { day: 2, title: 'Tính từ và thì chủ động', focus: 'Bài 6–7', lessons: ['bai-6', 'bai-7'], tasks: ['Đọc Bài 6 và Bài 7', 'Ghi các từ -ly là tính từ', 'Ghi 10 cụm thời gian và thì tương ứng'] },
  { day: 3, title: 'Bị động và ví dụ phân tích', focus: 'Bài 8–8.1', lessons: ['bai-8', 'bai-8-1'], tasks: ['Đọc Bài 8', 'Đọc phân tích Bài 8.1', 'Viết 5 cặp câu chủ động/bị động'] },
  { day: 4, title: 'Hòa hợp S–V, phân từ', focus: 'Bài 9–10', lessons: ['bai-9', 'bai-10'], tasks: ['Đọc Bài 9 và Bài 10', 'Lập bảng 10 cặp -ing/-ed'] },
  { day: 5, title: 'Trạng từ, đại từ, giới từ', focus: 'Bài 11–12', lessons: ['bai-11', 'bai-12'], tasks: ['Đọc Bài 11 và Bài 12', 'Đọc to bảng đại từ', 'Ghi 15 cụm giới từ'] },
  { day: 6, title: 'Liên từ, so sánh', focus: 'Bài 13–14', lessons: ['bai-13', 'bai-14'], tasks: ['Đọc Bài 13 và Bài 14', 'So sánh bảng liên từ – giới từ'] },
  { day: 7, title: 'Điều kiện, mệnh đề quan hệ', focus: 'Bài 15–16', lessons: ['bai-15', 'bai-16'], tasks: ['Đọc Bài 15 và Bài 16', 'Chuyển 3 câu if thành đảo ngữ'] },
  { day: 8, title: 'Rút gọn MĐQH và ôn công thức', focus: 'Bài 17 + thư viện công thức', lessons: ['bai-17'], tasks: ['Đọc Bài 17', 'Xem toàn bộ thư viện công thức', 'Lưu thẻ còn chưa nhớ'] },
  { day: 9, title: 'Part 5: loại từ', focus: 'Ứng dụng N/V/Adj/Adv', lessons: ['bai-5', 'bai-6', 'bai-11'], reading: ['part-5'], units: ['unit-2', 'unit-4'], tasks: ['Đọc mục 1–3 Part 5', 'Ôn bảng hậu tố', 'Đọc ví dụ Part 5 của Unit 2 và 4'] },
  { day: 10, title: 'Part 5: thì, bị động, hòa hợp', focus: 'Ứng dụng động từ', lessons: ['bai-7', 'bai-8', 'bai-9'], reading: ['part-5'], units: ['unit-3', 'unit-5'], tasks: ['Đọc mục 4 Part 5', 'Ôn bảng thì và bảng bị động'] },
  { day: 11, title: 'Part 5: giới từ, liên từ, collocations', focus: 'Ứng dụng từ nối', lessons: ['bai-12', 'bai-13'], reading: ['part-5'], units: ['unit-6', 'unit-7'], tasks: ['Đọc mục 5–6 Part 5', 'Ôn collocations của Unit 6, 7'] },
  { day: 12, title: 'Part 6: cấu trúc và liên kết', focus: 'Thì xuyên suốt, từ nối, tham chiếu', lessons: ['bai-11', 'bai-13'], reading: ['part-6'], units: ['unit-8'], tasks: ['Đọc toàn bộ hướng dẫn Part 6', 'Gắn nhãn chức năng cho một email'] },
  { day: 13, title: 'Part 7: câu dài và dạng văn bản', focus: 'Phân từ, MĐQH, đoạn đôi/ba', lessons: ['bai-10', 'bai-16', 'bai-17'], reading: ['part-7'], tasks: ['Đọc toàn bộ hướng dẫn Part 7', 'Bóc tách 3 câu dài'] },
  { day: 14, title: 'Tổng ôn', focus: 'Ghi chú, thẻ công thức, 8 Unit', lessons: [], reading: ['part-5', 'part-6', 'part-7'], units: ['unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5', 'unit-6', 'unit-7', 'unit-8'], tasks: ['Đọc lại sổ tay ghi chú', 'Xem các công thức đã lưu', 'Đọc mục "Tóm tắt cần nhớ" của 8 Unit'] }
];
