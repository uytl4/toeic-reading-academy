import type { Unit } from '../types';

export const u1: Unit = {
  id: 'unit-1',
  no: 1,
  name: 'Personnel',
  viName: 'Nhân sự',
  desc: 'Tuyển dụng, phúc lợi, đánh giá, lịch làm việc và thăng chức.',
  version: 1,
  theme: { from: '#1F4E79', to: '#3A7BBF', accent: '#F2C14E' },
  overview: [
    { t: 'p', text: 'Chủ đề nhân sự xuất hiện dày đặc trong TOEIC Reading: **quảng cáo tuyển dụng**, **email mời phỏng vấn**, **thông báo chính sách nghỉ phép**, **bản tin chào đón nhân viên mới** hay **thông báo thăng chức/nghỉ hưu**.' },
    { t: 'list', items: ['Part 5: cặp danh từ người/việc (applicant/application), bị động (be hired, be promoted).', 'Part 6: email phản hồi ứng viên, thông báo thay đổi chính sách.', 'Part 7: quảng cáo việc làm + email ứng tuyển (đoạn đôi), đối chiếu yêu cầu và kinh nghiệm.'] }
  ],
  vocab: [
    { w: 'applicant', ipa: '/ˈæplɪkənt/', pos: 'N', vi: 'ứng viên', ex: 'Each applicant must provide two references.', exVi: 'Mỗi ứng viên phải cung cấp hai người tham chiếu.' },
    { w: 'qualification', ipa: '/ˌkwɒlɪfɪˈkeɪʃn/', pos: 'N', vi: 'bằng cấp, tiêu chuẩn', ex: 'The position requires specific qualifications.', exVi: 'Vị trí này yêu cầu những tiêu chuẩn cụ thể.' },
    { w: 'recruit', ipa: '/rɪˈkruːt/', pos: 'V', vi: 'tuyển dụng', ex: 'We plan to recruit ten interns.', exVi: 'Chúng tôi dự định tuyển mười thực tập sinh.' },
    { w: 'résumé', ipa: '/ˈrezjumeɪ/', pos: 'N', vi: 'sơ yếu lý lịch', ex: 'Please attach your résumé.', exVi: 'Vui lòng đính kèm sơ yếu lý lịch.' },
    { w: 'benefits', ipa: '/ˈbenɪfɪts/', pos: 'N', vi: 'phúc lợi', ex: 'The benefits package includes dental care.', exVi: 'Gói phúc lợi bao gồm chăm sóc răng.' },
    { w: 'promote', ipa: '/prəˈməʊt/', pos: 'V', vi: 'thăng chức', ex: 'Ms. Ha was promoted to manager.', exVi: 'Bà Hà được thăng chức quản lý.' },
    { w: 'performance', ipa: '/pəˈfɔːməns/', pos: 'N', vi: 'hiệu suất làm việc', ex: 'Performance reviews take place in June.', exVi: 'Đánh giá hiệu suất diễn ra vào tháng Sáu.' },
    { w: 'mandatory', ipa: '/ˈmændətəri/', pos: 'Adj', vi: 'bắt buộc', ex: 'The training is mandatory for all staff.', exVi: 'Khóa đào tạo là bắt buộc với toàn bộ nhân viên.' },
    { w: 'eligible', ipa: '/ˈelɪdʒəbl/', pos: 'Adj', vi: 'đủ điều kiện', ex: 'Part-time workers are eligible for paid leave.', exVi: 'Nhân viên bán thời gian đủ điều kiện nghỉ có lương.' },
    { w: 'retire', ipa: '/rɪˈtaɪə(r)/', pos: 'V', vi: 'nghỉ hưu', ex: 'Mr. Phan will retire in December.', exVi: 'Ông Phan sẽ nghỉ hưu vào tháng Mười Hai.' },
    { w: 'payroll', ipa: '/ˈpeɪrəʊl/', pos: 'N', vi: 'bảng lương', ex: 'Payroll is processed on the 25th.', exVi: 'Bảng lương được xử lý vào ngày 25.' },
    { w: 'probation', ipa: '/prəˈbeɪʃn/', pos: 'N', vi: 'thời gian thử việc', ex: 'New hires have a three-month probation period.', exVi: 'Nhân viên mới có ba tháng thử việc.' }
  ],
  families: [
    { root: 'employ', items: [['employ', 'V', 'thuê'], ['employee', 'N', 'nhân viên'], ['employer', 'N', 'chủ lao động'], ['employment', 'N', 'việc làm'], ['employed', 'Adj', 'có việc làm']] },
    { root: 'apply', items: [['apply', 'V', 'nộp đơn'], ['applicant', 'N', 'ứng viên'], ['application', 'N', 'đơn ứng tuyển'], ['applicable', 'Adj', 'có thể áp dụng']] },
    { root: 'qualify', items: [['qualify', 'V', 'đủ tiêu chuẩn'], ['qualification', 'N', 'tiêu chuẩn'], ['qualified', 'Adj', 'đủ năng lực']] },
    { root: 'supervise', items: [['supervise', 'V', 'giám sát'], ['supervisor', 'N', 'người giám sát'], ['supervision', 'N', 'sự giám sát'], ['supervisory', 'Adj', 'thuộc giám sát']] }
  ],
  collocations: [
    ['submit an application', 'nộp đơn', 'Candidates must submit an application by May 1.'],
    ['fill a position', 'lấp đầy vị trí', 'We hope to fill the position quickly.'],
    ['conduct an interview', 'tiến hành phỏng vấn', 'Ms. Lin will conduct the interviews.'],
    ['meet the requirements', 'đáp ứng yêu cầu', 'Only two applicants met the requirements.'],
    ['take a day off', 'nghỉ một ngày', 'He took a day off on Friday.'],
    ['be on leave', 'đang nghỉ phép', 'Ms. Ito is on leave until Monday.'],
    ['receive a raise', 'được tăng lương', 'Staff received a raise this year.']
  ],
  structures: [
    { t: 'formula', pattern: 'be eligible for + N / be eligible to + V', text: 'Đủ điều kiện hưởng/làm gì.', fid: 'f-be-complement' },
    { t: 'formula', pattern: 'be promoted to + chức vụ', text: '`She was promoted to senior editor.` – bị động.', fid: 'f-be-v3' },
    { t: 'formula', pattern: 'applicant (người) vs application (đơn)', text: 'Chọn theo nghĩa; người dùng với `qualified, experienced`; đơn dùng với `submit, review`.', fid: 'f-suffix-n' },
    { t: 'formula', pattern: 'have + V3 ... since/for', text: 'Thâm niên: `She has worked here for ten years.`', fid: 'f-have-v3' }
  ],
  part5: [
    ['All {applicants|N} must hold a valid driver\'s license.', 'Mọi ứng viên phải có bằng lái hợp lệ.', 'Người phải có bằng → N chỉ người, số nhiều sau All.'],
    ['Mr. Vo has been {promoted|V} to regional director.', 'Ông Võ đã được thăng chức giám đốc khu vực.', 'Bị động hoàn thành: has been + V3.'],
    ['Employees are {eligible|Adj} for a bonus after one year.', 'Nhân viên đủ điều kiện nhận thưởng sau một năm.', 'be + Adj + for.'],
    ['The interview schedule will be sent {shortly|Adv}.', 'Lịch phỏng vấn sẽ được gửi ngay sau đây.', 'Câu bị động đã đủ → Adv.']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Quảng cáo tuyển dụng',
      kind: 'Job advertisement',
      lines: [
        ['Larkspur Hotels is seeking an experienced front desk supervisor.', 'Larkspur Hotels đang tìm một giám sát lễ tân có kinh nghiệm.', 'is seeking: hiện tại tiếp diễn; experienced: V3 làm Adj.'],
        ['The successful candidate will **oversee** a team of eight.', 'Ứng viên trúng tuyển sẽ quản lý nhóm tám người.', 'will + V.'],
        ['Applicants **must have** at least three years of hotel experience.', 'Ứng viên phải có ít nhất ba năm kinh nghiệm khách sạn.', 'modal + V.'],
        ['To apply, send a résumé and cover letter to hr@larkspur.com **by** April 15.', 'Để ứng tuyển, gửi sơ yếu lý lịch và thư xin việc tới hr@larkspur.com trước 15/4.', 'To V chỉ mục đích; by + hạn chót.']
      ]
    },
    {
      t: 'passage',
      title: 'Email phản hồi ứng viên',
      kind: 'Email',
      lines: [
        ['Dear Ms. Tran,', 'Kính gửi bà Trần,'],
        ['Thank you for **your application** for the supervisor position.', 'Cảm ơn bà đã ứng tuyển vị trí giám sát.', 'your + N (việc).'],
        ['We **were impressed** by your experience at Royal Inn.', 'Chúng tôi ấn tượng với kinh nghiệm của bà tại Royal Inn.', 'Người cảm thấy → V3.'],
        ['**Would** you **be available** for an interview on April 22?', 'Bà có thể phỏng vấn vào ngày 22/4 không?', 'be available + for.']
      ]
    }
  ],
  related: ['bai-5', 'bai-8', 'bai-10'],
  summary: [
    'Phân biệt N chỉ người (applicant, employee, supervisor) và N chỉ việc (application, employment, supervision).',
    'Bị động hay gặp: be hired, be promoted, be required to, be eligible for.',
    'Hiện tại hoàn thành + for/since cho thâm niên.',
    'Collocations: submit an application, fill a position, meet the requirements.'
  ]
};

export const u2: Unit = {
  id: 'unit-2',
  no: 2,
  name: 'Entertainment',
  viName: 'Giải trí',
  desc: 'Sự kiện, buổi biểu diễn, triển lãm, vé và lịch tổ chức.',
  version: 1,
  theme: { from: '#4B1D6B', to: '#C2185B', accent: '#FFD54F' },
  overview: [
    { t: 'p', text: 'Chủ đề giải trí gồm **quảng cáo sự kiện**, **thông báo đổi lịch biểu diễn**, **bài phê bình** phim/kịch, **chính sách vé**. Văn bản thường có ngày giờ, địa điểm và điều kiện mua vé.' },
    { t: 'list', items: ['Part 5: giới từ thời gian (on/at/in), bị động (be held, be postponed), so sánh (the most popular).', 'Part 6: thông báo hoãn/đổi địa điểm, email khán giả.', 'Part 7: lịch sự kiện, bài review, chính sách hoàn vé.'] }
  ],
  vocab: [
    { w: 'performance', ipa: '/pəˈfɔːməns/', pos: 'N', vi: 'buổi biểu diễn', ex: 'The evening performance starts at 8.', exVi: 'Buổi diễn tối bắt đầu lúc 8 giờ.' },
    { w: 'exhibition', ipa: '/ˌeksɪˈbɪʃn/', pos: 'N', vi: 'triển lãm', ex: 'The exhibition runs through May.', exVi: 'Triển lãm kéo dài hết tháng Năm.' },
    { w: 'admission', ipa: '/ədˈmɪʃn/', pos: 'N', vi: 'phí vào cửa, sự cho vào', ex: 'Admission is free for children.', exVi: 'Trẻ em được vào cửa miễn phí.' },
    { w: 'venue', ipa: '/ˈvenjuː/', pos: 'N', vi: 'địa điểm tổ chức', ex: 'The venue holds 2,000 people.', exVi: 'Địa điểm chứa được 2.000 người.' },
    { w: 'postpone', ipa: '/pəˈspəʊn/', pos: 'V', vi: 'hoãn', ex: 'The concert was postponed due to rain.', exVi: 'Buổi hòa nhạc bị hoãn vì mưa.' },
    { w: 'audience', ipa: '/ˈɔːdiəns/', pos: 'N', vi: 'khán giả', ex: 'The audience applauded loudly.', exVi: 'Khán giả vỗ tay vang dội.' },
    { w: 'critic', ipa: '/ˈkrɪtɪk/', pos: 'N', vi: 'nhà phê bình', ex: 'Critics praised the new film.', exVi: 'Các nhà phê bình khen ngợi bộ phim mới.' },
    { w: 'sold out', pos: 'Phrase', vi: 'bán hết vé', ex: 'Friday\'s show is sold out.', exVi: 'Suất diễn thứ Sáu đã hết vé.' },
    { w: 'reserve', ipa: '/rɪˈzɜːv/', pos: 'V', vi: 'đặt trước', ex: 'You can reserve seats online.', exVi: 'Bạn có thể đặt chỗ trực tuyến.' },
    { w: 'renowned', ipa: '/rɪˈnaʊnd/', pos: 'Adj', vi: 'nổi tiếng', ex: 'A renowned pianist will perform.', exVi: 'Một nghệ sĩ dương cầm nổi tiếng sẽ biểu diễn.' },
    { w: 'intermission', ipa: '/ˌɪntəˈmɪʃn/', pos: 'N', vi: 'giờ giải lao (giữa buổi diễn)', ex: 'Drinks are sold during the intermission.', exVi: 'Đồ uống được bán trong giờ giải lao.' },
    { w: 'complimentary', ipa: '/ˌkɒmplɪˈmentri/', pos: 'Adj', vi: 'miễn phí (tặng)', ex: 'Members receive complimentary tickets.', exVi: 'Hội viên được tặng vé miễn phí.' }
  ],
  families: [
    { root: 'perform', items: [['perform', 'V', 'biểu diễn'], ['performer', 'N', 'người biểu diễn'], ['performance', 'N', 'buổi diễn'], ['performing', 'Adj', 'thuộc biểu diễn (performing arts)']] },
    { root: 'entertain', items: [['entertain', 'V', 'giải trí'], ['entertainment', 'N', 'sự giải trí'], ['entertainer', 'N', 'người làm giải trí'], ['entertaining', 'Adj', 'thú vị']] },
    { root: 'admit', items: [['admit', 'V', 'cho vào'], ['admission', 'N', 'sự vào cửa'], ['admittance', 'N', 'quyền vào']] },
    { root: 'attend', items: [['attend', 'V', 'tham dự'], ['attendee', 'N', 'người tham dự'], ['attendance', 'N', 'sự tham dự'], ['attendant', 'N', 'người phục vụ']] }
  ],
  collocations: [
    ['hold an event', 'tổ chức sự kiện', 'The festival will be held in the park.'],
    ['purchase tickets in advance', 'mua vé trước', 'Visitors are advised to purchase tickets in advance.'],
    ['receive positive reviews', 'nhận đánh giá tốt', 'The play received positive reviews.'],
    ['give a performance', 'biểu diễn', 'The orchestra gave an outstanding performance.'],
    ['be open to the public', 'mở cửa cho công chúng', 'The gallery is open to the public on weekends.'],
    ['draw a large crowd', 'thu hút đông người', 'The parade drew a large crowd.']
  ],
  structures: [
    { t: 'formula', pattern: 'be held / be postponed / be canceled', text: 'Sự kiện là vật → bị động.', fid: 'f-be-v3' },
    { t: 'formula', pattern: 'on + ngày / at + giờ / in + tháng', text: '`on Saturday, June 3, at 7 P.M.`', fid: 'f-prep-n' },
    { t: 'formula', pattern: 'one of the most + Adj + N số nhiều', text: '`one of the most popular musicals`.', fid: 'f-superlative' },
    { t: 'formula', pattern: 'exciting (sự kiện) / excited (khán giả)', text: 'V-ing gây cảm xúc, V3 người cảm thấy.', fid: 'f-ving-adj' }
  ],
  part5: [
    ['The jazz festival will be {held|V} at Riverside Park.', 'Lễ hội jazz sẽ được tổ chức tại công viên Riverside.', 'Sự kiện bị tác động → be held.'],
    ['Tickets can be purchased **at** the box office or online.', 'Vé có thể mua tại quầy hoặc trực tuyến.', 'at + địa điểm cụ thể.'],
    ['It was the {most entertaining|Adj} show of the season.', 'Đó là chương trình thú vị nhất mùa.', 'the most + Adj; show gây cảm xúc → -ing.'],
    ['Audience members were {delighted|Adj} with the encore.', 'Khán giả rất thích phần diễn thêm.', 'Người cảm thấy → V3.']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Thông báo đổi lịch',
      kind: 'Notice',
      lines: [
        ['Due to the forecast of heavy rain, Saturday\'s outdoor concert **has been moved** to Sunday, July 9.', 'Do dự báo mưa lớn, buổi hòa nhạc ngoài trời thứ Bảy đã được dời sang Chủ nhật 9/7.', 'Due to + N; bị động hoàn thành.'],
        ['Tickets for Saturday **will be honored** on Sunday.', 'Vé thứ Bảy vẫn có hiệu lực vào Chủ nhật.', 'honor a ticket: chấp nhận vé.'],
        ['Ticket holders **who cannot attend** may request a full refund **until** July 7.', 'Người giữ vé không thể tham dự có thể yêu cầu hoàn tiền đến 7/7.', 'Mệnh đề quan hệ; until + mốc.']
      ]
    },
    {
      t: 'passage',
      title: 'Bài review ngắn',
      kind: 'Review',
      lines: [
        ['The Starlight Theater\'s new production is **far more ambitious than** last year\'s show.', 'Vở diễn mới của nhà hát Starlight tham vọng hơn nhiều so với vở năm ngoái.', 'far + so sánh hơn.'],
        ['**Although** the first act is slow, the second act is **truly memorable**.', 'Dù màn một chậm, màn hai thực sự đáng nhớ.', 'Although + mệnh đề; Adv + Adj.']
      ]
    }
  ],
  related: ['bai-8', 'bai-12', 'bai-14', 'bai-10'],
  summary: [
    'Sự kiện là chủ ngữ → bị động: be held, be postponed, be rescheduled.',
    'Giới từ thời gian on/at/in và until/by trong chính sách vé.',
    'So sánh nhất và từ nhấn mạnh trong bài review.',
    'exciting/excited, entertaining/entertained.'
  ]
};

export const u3: Unit = {
  id: 'unit-3',
  no: 3,
  name: 'Travel',
  viName: 'Du lịch – công tác',
  desc: 'Chuyến bay, khách sạn, lịch trình công tác và hoàn chi phí.',
  version: 1,
  theme: { from: '#0E5E6F', to: '#3FA796', accent: '#F9F871' },
  overview: [
    { t: 'p', text: 'Văn bản du lịch/công tác gồm **xác nhận đặt vé**, **lịch trình (itinerary)**, **thông báo hoãn chuyến bay**, **chính sách hoàn chi phí công tác**. Câu hỏi thường xoay quanh thời gian, địa điểm và thay đổi lịch.' },
    { t: 'list', items: ['Part 5: giới từ (depart from, arrive at/in), bị động (be delayed), mệnh đề thời gian.', 'Part 6: email xác nhận đặt phòng, thông báo thay đổi chuyến bay.', 'Part 7: lịch trình + email (đoạn đôi), bảng giá phòng.'] }
  ],
  vocab: [
    { w: 'itinerary', ipa: '/aɪˈtɪnərəri/', pos: 'N', vi: 'lịch trình chuyến đi', ex: 'Your itinerary is attached.', exVi: 'Lịch trình của bạn được đính kèm.' },
    { w: 'depart', ipa: '/dɪˈpɑːt/', pos: 'V', vi: 'khởi hành', ex: 'The flight departs at 6:40 A.M.', exVi: 'Chuyến bay khởi hành lúc 6:40 sáng.' },
    { w: 'destination', ipa: '/ˌdestɪˈneɪʃn/', pos: 'N', vi: 'điểm đến', ex: 'Da Lat is a popular destination.', exVi: 'Đà Lạt là điểm đến được ưa chuộng.' },
    { w: 'accommodation', ipa: '/əˌkɒməˈdeɪʃn/', pos: 'N', vi: 'chỗ ở', ex: 'Accommodation is included in the package.', exVi: 'Chỗ ở đã bao gồm trong gói.' },
    { w: 'boarding pass', pos: 'Phrase', vi: 'thẻ lên máy bay', ex: 'Print your boarding pass before arriving.', exVi: 'Hãy in thẻ lên máy bay trước khi đến.' },
    { w: 'delay', ipa: '/dɪˈleɪ/', pos: 'V', vi: 'trì hoãn, làm chậm', ex: 'Our flight was delayed by two hours.', exVi: 'Chuyến bay bị hoãn hai giờ.' },
    { w: 'reimburse', ipa: '/ˌriːɪmˈbɜːs/', pos: 'V', vi: 'hoàn trả (chi phí)', ex: 'Travel expenses will be reimbursed.', exVi: 'Chi phí đi lại sẽ được hoàn trả.' },
    { w: 'fare', ipa: '/feə(r)/', pos: 'N', vi: 'giá vé (phương tiện)', ex: 'Train fares rose in January.', exVi: 'Giá vé tàu tăng vào tháng Một.' },
    { w: 'luggage', ipa: '/ˈlʌɡɪdʒ/', pos: 'N', vi: 'hành lý (không đếm được)', ex: 'Each passenger may bring one piece of luggage.', exVi: 'Mỗi hành khách được mang một kiện hành lý.' },
    { w: 'round-trip', pos: 'Adj', vi: 'khứ hồi', ex: 'A round-trip ticket costs $240.', exVi: 'Vé khứ hồi giá 240 đô.' },
    { w: 'check in', pos: 'Phrase', vi: 'làm thủ tục nhận phòng / lên máy bay', ex: 'Guests may check in after 2 P.M.', exVi: 'Khách có thể nhận phòng sau 2 giờ chiều.' },
    { w: 'commute', ipa: '/kəˈmjuːt/', pos: 'V', vi: 'đi lại (đi làm)', ex: 'She commutes by subway.', exVi: 'Cô ấy đi làm bằng tàu điện ngầm.' }
  ],
  families: [
    { root: 'depart', items: [['depart', 'V', 'khởi hành'], ['departure', 'N', 'sự khởi hành'], ['department', 'N', 'phòng ban (khác nghĩa!)']] },
    { root: 'accommodate', items: [['accommodate', 'V', 'cung cấp chỗ, đáp ứng'], ['accommodation', 'N', 'chỗ ở'], ['accommodating', 'Adj', 'dễ chiều, chu đáo']] },
    { root: 'reserve', items: [['reserve', 'V', 'đặt trước'], ['reservation', 'N', 'sự đặt chỗ'], ['reserved', 'Adj', 'đã đặt, dành riêng']] },
    { root: 'reimburse', items: [['reimburse', 'V', 'hoàn tiền'], ['reimbursement', 'N', 'khoản hoàn trả']] }
  ],
  collocations: [
    ['make a reservation', 'đặt chỗ', 'I would like to make a reservation for two nights.'],
    ['book a flight', 'đặt vé máy bay', 'Please book a flight to Singapore.'],
    ['submit receipts for reimbursement', 'nộp hóa đơn để được hoàn tiền', 'Submit receipts for reimbursement within 30 days.'],
    ['be subject to availability', 'tùy tình trạng còn chỗ', 'Upgrades are subject to availability.'],
    ['take a business trip', 'đi công tác', 'Mr. Kang took a business trip to Busan.'],
    ['miss a connecting flight', 'lỡ chuyến bay nối', 'Passengers who miss a connecting flight will be rebooked.']
  ],
  structures: [
    { t: 'formula', pattern: 'be delayed / be canceled / be rebooked', text: 'Bị động cho chuyến bay và đặt chỗ.', fid: 'f-be-v3' },
    { t: 'formula', pattern: 'as soon as / once + hiện tại đơn', text: '`We will notify you once the flight departs.`', fid: 'f-time-clause' },
    { t: 'formula', pattern: 'arrive at (điểm) / arrive in (thành phố)', text: '`arrive at the airport`, `arrive in Seoul`.', fid: 'f-prep-n' },
    { t: 'formula', pattern: 'Should you need ..., please ...', text: 'Đảo ngữ điều kiện rất hay gặp trong email khách sạn.', fid: 'f-should-inversion' }
  ],
  part5: [
    ['Flight 208 has been {delayed|V} due to fog.', 'Chuyến bay 208 bị hoãn do sương mù.', 'has been + V3; due to + N.'],
    ['Employees must submit receipts **within** two weeks of returning.', 'Nhân viên phải nộp hóa đơn trong vòng hai tuần sau khi về.', 'within + khoảng giới hạn.'],
    ['The hotel is {conveniently|Adv} located near the station.', 'Khách sạn có vị trí thuận tiện gần nhà ga.', 'Adv giữa be và V3.'],
    ['Passengers {traveling|V} with infants may board first.', 'Hành khách đi cùng em bé được lên máy bay trước.', 'Rút gọn MĐQH chủ động.']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Lịch trình công tác',
      kind: 'Itinerary',
      lines: [
        ['Monday: Depart Hanoi at 7:15 A.M.; arrive **in** Singapore at 11:40 A.M.', 'Thứ Hai: Khởi hành từ Hà Nội 7:15 sáng; đến Singapore 11:40 trưa.', 'arrive in + thành phố.'],
        ['Tuesday: Meeting with Orion Ltd. **at** its head office, 9:00 A.M.', 'Thứ Ba: Họp với Orion Ltd. tại trụ sở, 9 giờ sáng.', 'at + địa điểm cụ thể.'],
        ['Wednesday: Return flight. Hotel checkout **by** noon.', 'Thứ Tư: Chuyến bay về. Trả phòng trước trưa.', 'by = hạn chót.']
      ]
    },
    {
      t: 'passage',
      title: 'Email chính sách hoàn chi phí',
      kind: 'Email',
      lines: [
        ['Expenses for meals and taxis **will be reimbursed** **provided that** original receipts **are submitted**.', 'Chi phí ăn uống và taxi sẽ được hoàn trả với điều kiện nộp hóa đơn gốc.', 'Bị động + provided that.'],
        ['Hotel upgrades are not covered **unless** they **are approved** in advance by your manager.', 'Nâng hạng phòng không được chi trả trừ khi quản lý duyệt trước.', 'unless + bị động.']
      ]
    }
  ],
  related: ['bai-7', 'bai-8', 'bai-12', 'bai-15'],
  summary: [
    'Bị động: be delayed, be reimbursed, be rebooked.',
    'arrive at/in, depart from, by (hạn chót), within (trong vòng).',
    'Mệnh đề thời gian dùng hiện tại đơn cho tương lai.',
    'luggage/baggage không đếm được; fare (vé phương tiện) ≠ fee (phí).',
    'department ≠ departure: cùng gốc chữ nhưng khác nghĩa.'
  ]
};

export const u4: Unit = {
  id: 'unit-4',
  no: 4,
  name: 'Dining Out',
  viName: 'Ăn uống – nhà hàng',
  desc: 'Đặt bàn, thực đơn, phục vụ, đánh giá nhà hàng và tiệc công ty.',
  version: 1,
  theme: { from: '#8C3B12', to: '#E07A2F', accent: '#FFF1C1' },
  overview: [
    { t: 'p', text: 'Chủ đề ăn uống có **quảng cáo nhà hàng mới**, **thực đơn**, **email đặt tiệc công ty**, **phiếu góp ý khách hàng** và **bài đánh giá**. Thông tin hay hỏi: giờ mở cửa, ưu đãi, món đặc biệt, điều kiện đặt chỗ.' },
    { t: 'list', items: ['Part 5: tính từ mô tả (fresh, local, seasonal), so sánh, collocation (make a reservation).', 'Part 6: email xác nhận tiệc, thông báo đổi thực đơn.', 'Part 7: thực đơn + phiếu đánh giá (đoạn đôi), quảng cáo khai trương.'] }
  ],
  vocab: [
    { w: 'reservation', ipa: '/ˌrezəˈveɪʃn/', pos: 'N', vi: 'sự đặt bàn', ex: 'Reservations are recommended on weekends.', exVi: 'Nên đặt bàn trước vào cuối tuần.' },
    { w: 'cuisine', ipa: '/kwɪˈziːn/', pos: 'N', vi: 'ẩm thực', ex: 'The restaurant serves Thai cuisine.', exVi: 'Nhà hàng phục vụ ẩm thực Thái.' },
    { w: 'ingredient', ipa: '/ɪnˈɡriːdiənt/', pos: 'N', vi: 'nguyên liệu', ex: 'We use only fresh ingredients.', exVi: 'Chúng tôi chỉ dùng nguyên liệu tươi.' },
    { w: 'cater', ipa: '/ˈkeɪtə(r)/', pos: 'V', vi: 'cung cấp đồ ăn (cho sự kiện)', ex: 'Bella Foods will cater the banquet.', exVi: 'Bella Foods sẽ cung cấp đồ ăn cho buổi tiệc.' },
    { w: 'beverage', ipa: '/ˈbevərɪdʒ/', pos: 'N', vi: 'đồ uống', ex: 'Beverages are not included.', exVi: 'Đồ uống không được bao gồm.' },
    { w: 'banquet', ipa: '/ˈbæŋkwɪt/', pos: 'N', vi: 'tiệc lớn', ex: 'The awards banquet is on Friday.', exVi: 'Tiệc trao giải diễn ra vào thứ Sáu.' },
    { w: 'diner', ipa: '/ˈdaɪnə(r)/', pos: 'N', vi: 'thực khách', ex: 'Diners can enjoy live music.', exVi: 'Thực khách có thể thưởng thức nhạc sống.' },
    { w: 'seasonal', ipa: '/ˈsiːzənl/', pos: 'Adj', vi: 'theo mùa', ex: 'The chef offers a seasonal menu.', exVi: 'Đầu bếp có thực đơn theo mùa.' },
    { w: 'accommodate', ipa: '/əˈkɒmədeɪt/', pos: 'V', vi: 'đáp ứng, chứa', ex: 'The room can accommodate 80 guests.', exVi: 'Phòng chứa được 80 khách.' },
    { w: 'dietary', ipa: '/ˈdaɪətəri/', pos: 'Adj', vi: 'thuộc chế độ ăn', ex: 'Please tell us about any dietary restrictions.', exVi: 'Vui lòng cho biết nếu có hạn chế về ăn uống.' },
    { w: 'gratuity', ipa: '/ɡrəˈtjuːəti/', pos: 'N', vi: 'tiền boa', ex: 'A 10 percent gratuity is added for groups.', exVi: 'Nhóm đông được cộng 10% tiền boa.' },
    { w: 'patron', ipa: '/ˈpeɪtrən/', pos: 'N', vi: 'khách quen', ex: 'Regular patrons receive a loyalty card.', exVi: 'Khách quen được nhận thẻ thành viên.' }
  ],
  families: [
    { root: 'reserve', items: [['reserve', 'V', 'đặt trước'], ['reservation', 'N', 'việc đặt chỗ'], ['reserved', 'Adj', 'đã được đặt']] },
    { root: 'satisfy', items: [['satisfy', 'V', 'làm hài lòng'], ['satisfaction', 'N', 'sự hài lòng'], ['satisfied', 'Adj', 'hài lòng (người)'], ['satisfactory', 'Adj', 'đạt yêu cầu']] },
    { root: 'cater', items: [['cater', 'V', 'phục vụ đồ ăn'], ['caterer', 'N', 'đơn vị cung cấp đồ ăn'], ['catering', 'N', 'dịch vụ ăn uống']] },
    { root: 'prefer', items: [['prefer', 'V', 'thích hơn'], ['preference', 'N', 'sở thích'], ['preferable', 'Adj', 'đáng chọn hơn'], ['preferably', 'Adv', 'tốt hơn là']] }
  ],
  collocations: [
    ['make a reservation', 'đặt bàn', 'Call ahead to make a reservation.'],
    ['place an order', 'gọi món, đặt hàng', 'You can place an order at the counter.'],
    ['accommodate dietary needs', 'đáp ứng nhu cầu ăn uống', 'Our chefs can accommodate dietary needs.'],
    ['be fully booked', 'kín chỗ', 'The restaurant is fully booked tonight.'],
    ['offer a discount', 'giảm giá', 'We offer a discount to large groups.'],
    ['highly recommend', 'rất khuyến nghị', 'I highly recommend the grilled fish.']
  ],
  structures: [
    { t: 'formula', pattern: 'Adj + N mô tả món ăn', text: '`fresh local seafood`, `a cozy atmosphere`.', fid: 'f-adj-n' },
    { t: 'formula', pattern: 'be + satisfied with / satisfying', text: 'Khách hài lòng (V3) – bữa ăn làm hài lòng (V-ing).', fid: 'f-v3-adj' },
    { t: 'formula', pattern: 'so sánh trong bài review', text: '`the best pasta in town`, `more spacious than before`.', fid: 'f-superlative' },
    { t: 'formula', pattern: 'Adv + V3 / Adv + Adj', text: '`highly recommended`, `reasonably priced`.', fid: 'f-adv-adj' }
  ],
  part5: [
    ['The banquet hall can {accommodate|V} up to 200 guests.', 'Sảnh tiệc chứa tối đa 200 khách.', 'modal + V nguyên mẫu.'],
    ['Our dishes are made with {locally|Adv} grown vegetables.', 'Món ăn được làm từ rau trồng tại địa phương.', 'Adv bổ nghĩa V3 `grown`.'],
    ['Guests were very {satisfied|Adj} with the service.', 'Khách rất hài lòng với dịch vụ.', 'Người cảm thấy → V3.'],
    ['Please inform us of any dietary {restrictions|N} in advance.', 'Vui lòng báo trước các hạn chế ăn uống.', 'Adj + N; any + N số nhiều.']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Quảng cáo khai trương',
      kind: 'Advertisement',
      lines: [
        ['Olive & Thyme, a **family-owned** Mediterranean restaurant, opens on Elm Street this Friday.', 'Olive & Thyme, nhà hàng Địa Trung Hải do gia đình sở hữu, khai trương trên phố Elm thứ Sáu này.', 'Đồng vị; tính từ ghép.'],
        ['**During** opening week, all diners **will receive** a complimentary dessert.', 'Trong tuần khai trương, mọi thực khách được tặng món tráng miệng.', 'During + giai đoạn.'],
        ['Reservations are **strongly recommended**, **as** seating is limited.', 'Rất nên đặt bàn trước vì số chỗ có hạn.', 'Adv + V3; as = because.']
      ]
    },
    {
      t: 'passage',
      title: 'Phiếu góp ý của khách',
      kind: 'Customer review',
      lines: [
        ['The food was **excellent**, **but** the wait was **longer than** we expected.', 'Đồ ăn rất ngon, nhưng phải chờ lâu hơn dự kiến.', 'be + Adj; but; so sánh hơn.'],
        ['**If** the staff **added** one more server on weekends, the service **would improve**.', 'Nếu nhân viên thêm một người phục vụ vào cuối tuần, dịch vụ sẽ tốt hơn.', 'Điều kiện loại 2.']
      ]
    }
  ],
  related: ['bai-6', 'bai-10', 'bai-14', 'bai-11'],
  summary: [
    'Tính từ mô tả món ăn và không gian: fresh, seasonal, cozy, spacious.',
    'satisfied (người) / satisfying (bữa ăn) / satisfactory (đạt yêu cầu).',
    'make a reservation, place an order, be fully booked.',
    'Adv + V3: highly recommended, reasonably priced, locally grown.'
  ]
};
