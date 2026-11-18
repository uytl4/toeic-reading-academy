import type { Formula } from '../types';

type Row = [
  id: string,
  group: string,
  label: string,
  pattern: string,
  explain: string,
  example: string,
  translation: string,
  positions: string,
  exceptions: string,
  tags: string[],
  lessons: string[],
  featured?: boolean
];

export const FORMULA_GROUPS = [
  'Câu & cụm danh từ',
  'Loại từ & hậu tố',
  'Thì & động từ',
  'Bị động',
  'Hòa hợp S–V',
  'Phân từ',
  'Đại từ',
  'Giới từ',
  'Liên từ',
  'So sánh',
  'Điều kiện',
  'Mệnh đề quan hệ'
] as const;

const rows: Row[] = [
  // Câu & cụm danh từ
  ['f-s-v-o', 'Câu & cụm danh từ', 'Câu đơn S + V (+ O)', 'S + V + O', 'Mỗi mệnh đề có một động từ chia thì. Động từ ngoại động cần tân ngữ, nội động thì không.', 'The board approved the budget.', 'Hội đồng đã duyệt ngân sách.', 'S = cụm danh từ; V = động từ chia thì; O = cụm danh từ', 'Nội động từ (arrive, occur, rise) không có tân ngữ và không có bị động.', ['câu đơn', 'chủ ngữ', 'tân ngữ', 'svo'], ['bai-4']],
  ['f-s-v-c', 'Câu & cụm danh từ', 'Động từ nối + bổ ngữ', 'S + linking V + Adj/N', 'be, become, remain, seem, appear, prove, stay đi với tính từ hoặc danh từ mô tả chủ ngữ.', 'The results remain positive.', 'Kết quả vẫn tích cực.', 'Sau linking verb: Adj hoặc N', 'Không dùng Adv sau động từ nối (seem positively ✗).', ['linking verb', 'bổ ngữ', 'seem', 'remain'], ['bai-4', 'bai-6']],
  ['f-the-adj-n', 'Câu & cụm danh từ', 'the + Adj + N', 'the + (Adv) + Adj + N', 'Cấu trúc cụm danh từ phổ biến: tính từ đứng giữa mạo từ và danh từ chính.', 'The annual conference starts on Monday.', 'Hội nghị thường niên bắt đầu vào thứ Hai.', 'the → (Adv) → Adj → N', 'Không phải khuôn duy nhất: sau the có thể là N ngay (the manager), Adv + V3 (the recently opened store), số thứ tự (the first).', ['the', 'tính từ', 'danh từ', 'cụm danh từ'], ['bai-4', 'bai-6'], true],
  ['f-a-an-adj-n', 'Câu & cụm danh từ', 'a/an + Adj + N', 'a/an + Adj + N số ít', 'a/an chỉ đi với danh từ đếm được số ít. Chọn a hay an theo **âm** đầu của từ ngay sau.', 'an urgent request / a useful guide / an hour', 'một yêu cầu khẩn / một hướng dẫn hữu ích / một giờ', 'a/an → Adj → N số ít', '`a university` (âm /j/), `an hour` (h câm), `an MBA` (âm /e/).', ['a', 'an', 'mạo từ'], ['bai-4', 'bai-5', 'bai-6']],
  ['f-poss-adj-n', 'Câu & cụm danh từ', 'Tính từ sở hữu + N', 'my/your/his/her/its/our/their + (Adj) + N', 'Tính từ sở hữu luôn có danh từ theo sau, có thể có tính từ chen giữa.', 'Please submit their signed forms.', 'Vui lòng nộp các mẫu đơn đã ký của họ.', 'Possessive → (Adj) → N', 'Đại từ sở hữu (theirs, ours) đứng một mình, không có danh từ sau.', ['their', 'its', 'sở hữu'], ['bai-4', 'bai-11']],
  ['f-adj-n', 'Câu & cụm danh từ', 'Adj + N', 'Adj + N', 'Tính từ đứng trước bổ nghĩa danh từ.', 'We offer competitive salaries.', 'Chúng tôi trả lương cạnh tranh.', 'Adj trước N', 'Tính từ đứng sau đại từ bất định (something new) và khi có cụm theo sau (a room large enough).', ['tính từ', 'adj'], ['bai-6']],
  ['f-adv-adj', 'Câu & cụm danh từ', 'Adv + Adj', 'Adv (mức độ) + Adj', 'Trạng từ chỉ mức độ bổ nghĩa cho tính từ: highly, extremely, very, relatively, fully.', 'a highly qualified candidate', 'một ứng viên rất có năng lực', 'Adv → Adj → (N)', 'Cũng có Adv + Adv (very quickly). Không dùng very trước so sánh hơn.', ['trạng từ', 'highly', 'extremely'], ['bai-4', 'bai-6', 'bai-11'], true],
  ['f-n-n', 'Câu & cụm danh từ', 'Danh từ ghép N + N', 'N (bổ nghĩa) + N (chính)', 'Danh từ đứng trước làm chức năng như tính từ, thường ở dạng số ít.', 'a safety inspection, the sales department', 'đợt kiểm tra an toàn, phòng kinh doanh', 'N1 (số ít) + N2', 'Một số danh từ luôn có -s: sales, customs, savings, earnings.', ['danh từ ghép', 'compound noun'], ['bai-4', 'bai-5']],
  ['f-quantifier', 'Câu & cụm danh từ', 'Lượng từ + N', 'each/every + N số ít; many/several + N số nhiều; much/little + N không đếm được', 'Lượng từ quyết định dạng danh từ và động từ.', 'Each employee has a locker. / Several orders were late.', 'Mỗi nhân viên có một tủ đồ. / Vài đơn hàng bị trễ.', 'Quantifier → N', 'a number of + N số nhiều + V số nhiều; the number of + V số ít.', ['each', 'every', 'many', 'much', 'a number of'], ['bai-5', 'bai-9']],

  // Loại từ & hậu tố
  ['f-suffix-n', 'Loại từ & hậu tố', 'Hậu tố danh từ', '-tion, -sion, -ment, -ance, -ence, -ity, -ness, -er/-or/-ee/-ant/-ist', 'Dấu hiệu nhận biết danh từ; nhóm -er/-or/-ee/-ant/-ist chỉ người.', 'registration, agreement, attendance, security, employee', 'sự đăng ký, thỏa thuận, sự tham dự, an ninh, nhân viên', 'N', '-al có thể là N (approval) hoặc Adj (financial); -ive có thể là N (representative).', ['hậu tố', 'suffix', 'danh từ'], ['bai-5']],
  ['f-suffix-adj', 'Loại từ & hậu tố', 'Hậu tố tính từ', '-able/-ible, -ful, -less, -ive, -al, -ous, -ic, -ent/-ant, -ary/-ory', 'Dấu hiệu nhận biết tính từ.', 'reliable, successful, effective, financial, various', 'đáng tin, thành công, hiệu quả, tài chính, đa dạng', 'Adj', 'Đuôi -ly là Adj: friendly, timely, costly, likely, quarterly.', ['hậu tố', 'tính từ', 'suffix'], ['bai-6']],
  ['f-suffix-adv', 'Loại từ & hậu tố', 'Hậu tố trạng từ', 'Adj + -ly', 'Phần lớn trạng từ cách thức được tạo từ tính từ + -ly.', 'quick → quickly, careful → carefully, efficient → efficiently', 'nhanh, cẩn thận, hiệu quả', 'Adv', 'Không phải mọi từ -ly là Adv (friendly là Adj). Một số Adv không có -ly: fast, hard, late, well.', ['trạng từ', '-ly'], ['bai-11']],

  // Thì & động từ
  ['f-modal-v', 'Thì & động từ', 'Modal + V nguyên mẫu', 'modal + V nguyên mẫu', 'will, would, can, could, should, must, may, might + động từ nguyên mẫu không to.', 'All staff must review the new policy.', 'Mọi nhân viên phải đọc chính sách mới.', 'modal → V0', 'Không thêm -s/-ed sau modal. `ought to`, `have to`, `be able to` có to.', ['modal', 'must', 'should', 'will'], ['bai-7'], true],
  ['f-have-v3', 'Thì & động từ', 'Thì hoàn thành chủ động', 'have/has/had + V3', 'Diễn tả hành động hoàn tất trước một mốc. Dấu hiệu: since, for, already, so far, by the time.', 'We have hired five new engineers since May.', 'Từ tháng Năm chúng tôi đã tuyển năm kỹ sư mới.', 'have/has/had → V3', 'Không dùng hiện tại hoàn thành với mốc quá khứ xác định (yesterday, last year).', ['hoàn thành', 'perfect', 'since', 'for'], ['bai-7']],
  ['f-time-clause', 'Thì & động từ', 'Mệnh đề thời gian chỉ tương lai', 'when/before/after/as soon as/once/until + hiện tại đơn, S + will + V', 'Trong mệnh đề thời gian hoặc điều kiện nói về tương lai dùng hiện tại đơn.', 'We will call you as soon as the parts arrive.', 'Chúng tôi sẽ gọi ngay khi linh kiện về.', 'Liên từ thời gian → V hiện tại', 'Có thể dùng hiện tại hoàn thành để nhấn mạnh hoàn tất: once you have finished.', ['when', 'as soon as', 'tương lai'], ['bai-7', 'bai-15']],
  ['f-be-complement', 'Thì & động từ', 'be + Adj/N/V-ing/V3', 'be + Adj | N | V-ing | V3', 'Sau be có thể là tính từ (vị ngữ), danh từ, V-ing (tiếp diễn) hoặc V3 (bị động). Chọn theo nghĩa và tân ngữ.', 'The room is available. / She is reviewing it. / It is reviewed weekly.', 'Phòng còn trống. / Cô ấy đang xem xét. / Nó được xem xét hằng tuần.', 'be → Adj/N/V-ing/V3', 'Không có quy tắc "sau be luôn là Adj". Có tân ngữ → V-ing; không tân ngữ, chủ ngữ bị tác động → V3.', ['be', 'bị động', 'tiếp diễn', 'tính từ'], ['bai-6', 'bai-8', 'bai-10'], true],

  // Bị động
  ['f-be-v3', 'Bị động', 'Câu bị động', 'S + be (chia thì) + V3 (+ by O)', 'Chủ ngữ chịu tác động của hành động. be mang thì, V3 mang nghĩa.', 'The contract was signed yesterday.', 'Hợp đồng đã được ký hôm qua.', 'be → V3', 'Nội động từ không có bị động. Động từ hai tân ngữ ở bị động vẫn còn tân ngữ (was offered a job).', ['bị động', 'passive', 'be + V3'], ['bai-8', 'bai-8-1'], true],
  ['f-modal-be-v3', 'Bị động', 'Modal bị động', 'modal + be + V3', 'Bị động với will, can, should, must, may.', 'Forms must be submitted online.', 'Mẫu đơn phải được nộp trực tuyến.', 'modal → be → V3', 'Bị động hoàn thành với modal: should have been + V3.', ['modal', 'bị động'], ['bai-8', 'bai-8-1']],
  ['f-have-been-v3', 'Bị động', 'Bị động hoàn thành', 'have/has/had been + V3', 'Hành động đã được hoàn tất (bị động).', 'Your order has been shipped.', 'Đơn hàng của bạn đã được gửi.', 'have → been → V3', 'has V3 (chủ động, có tân ngữ) khác has been V3.', ['hoàn thành', 'bị động', 'been'], ['bai-8', 'bai-8-1']],
  ['f-be-being-v3', 'Bị động', 'Bị động tiếp diễn', 'am/is/are/was/were + being + V3', 'Hành động đang được thực hiện.', 'The lobby is being painted.', 'Sảnh đang được sơn.', 'be → being → V3', 'is V-ing là chủ động tiếp diễn.', ['tiếp diễn', 'being', 'bị động'], ['bai-8', 'bai-8-1']],

  // Hòa hợp
  ['f-agreement', 'Hòa hợp S–V', 'Hòa hợp chủ ngữ – động từ', 'N số ít/không đếm được + V số ít; N số nhiều + V số nhiều', 'Động từ hòa hợp với danh từ chính của chủ ngữ, bỏ qua cụm giới từ chen giữa.', 'The cost of the repairs is high.', 'Chi phí sửa chữa cao.', 'Head noun → V', 'along with / as well as không cộng chủ ngữ. V-ing làm chủ ngữ → số ít.', ['hòa hợp', 'số ít', 'số nhiều'], ['bai-9']],
  ['f-both-and', 'Hòa hợp S–V', 'both ... and ...', 'both A and B (+ V số nhiều)', 'Cả A và B; A và B song song về cấu trúc.', 'Both the manager and the assistant are available.', 'Cả quản lý và trợ lý đều rảnh.', 'both → A → and → B', 'Không dùng both ... or.', ['both', 'and', 'tương quan', 'song song'], ['bai-9', 'bai-13'], false],
  ['f-either-or', 'Hòa hợp S–V', 'either/neither ... or/nor', 'either A or B / neither A nor B (+ V theo B)', 'Hoặc A hoặc B / không A cũng không B; động từ chia theo B.', 'Neither the printer nor the scanners work.', 'Cả máy in lẫn các máy scan đều không chạy.', 'V hòa hợp với B', 'Cũng áp dụng cho not only A but also B.', ['either', 'neither', 'nor'], ['bai-9', 'bai-13']],

  // Phân từ
  ['f-ving-adj', 'Phân từ', 'V-ing làm tính từ', 'V-ing + N / N + V-ing ...', 'Danh từ thực hiện hành động hoặc gây ra cảm xúc.', 'a growing company / an exciting offer', 'một công ty đang phát triển / ưu đãi hấp dẫn', 'V-ing bổ nghĩa N', 'Nội động từ chỉ có V-ing: remaining, existing, rising.', ['V-ing', 'phân từ', 'tính từ'], ['bai-10', 'bai-17']],
  ['f-v3-adj', 'Phân từ', 'V3 làm tính từ', 'V3 + N / N + V3 ...', 'Danh từ chịu tác động; người cảm thấy cảm xúc.', 'the attached file / satisfied customers', 'tệp đính kèm / khách hàng hài lòng', 'V3 bổ nghĩa N', 'V3 thành tính từ cố định: qualified, experienced, detailed, established.', ['V3', 'phân từ', 'past participle', 'established'], ['bai-10', 'bai-17']],
  ['f-participle-clause', 'Phân từ', 'Mệnh đề phân từ', '(Liên từ) + V-ing/V3 ..., S + V', 'Rút gọn mệnh đề trạng ngữ khi cùng chủ ngữ. V-ing chủ động, V3 bị động.', 'After reviewing the data, Ms. Lim approved the plan.', 'Sau khi xem dữ liệu, bà Lim đã duyệt kế hoạch.', 'V-ing/V3 đầu câu', 'Chủ ngữ ẩn phải trùng chủ ngữ mệnh đề chính.', ['phân từ', 'rút gọn', 'when using', 'once approved'], ['bai-10']],

  // Đại từ
  ['f-s-adv-v', 'Đại từ', 'Vị trí trạng từ', 'S + Adv + V / aux + Adv + V-ing/V3', 'Trạng từ đứng trước động từ thường hoặc giữa trợ động từ và động từ chính.', 'Sales have steadily increased.', 'Doanh số đã tăng đều.', 'Adv trước V / sau aux', 'Một trong nhiều vị trí hợp lệ: Adv còn đứng cuối câu hoặc đầu câu.', ['trạng từ', 'vị trí'], ['bai-11']],
  ['f-pronoun-family', 'Đại từ', 'Họ đại từ', 'they / them / their / theirs / themselves', 'Chủ ngữ – tân ngữ – tính từ sở hữu (+N) – đại từ sở hữu (đứng một mình) – phản thân.', 'Our prices are lower than theirs.', 'Giá của chúng tôi thấp hơn giá của họ.', 'their + N; theirs đứng một mình', "its (sở hữu) ≠ it's (it is).", ['đại từ', 'their', 'theirs', 'them'], ['bai-11'], true],
  ['f-reflexive', 'Đại từ', 'Đại từ phản thân', 'S + V + oneself / by oneself', 'Khi chủ ngữ và tân ngữ cùng là một, để nhấn mạnh, hoặc by oneself = tự mình.', 'She completed the report by herself.', 'Cô ấy tự hoàn thành báo cáo.', 'Sau V hoặc sau by', 'Không dùng phản thân làm chủ ngữ.', ['phản thân', 'himself', 'themselves'], ['bai-11']],

  // Giới từ
  ['f-prep-n', 'Giới từ', 'Giới từ + N/V-ing', 'preposition + N / pronoun / V-ing', 'Sau giới từ là danh từ, đại từ tân ngữ hoặc V-ing, không phải mệnh đề.', 'Thank you for choosing us.', 'Cảm ơn quý khách đã chọn chúng tôi.', 'Prep → N/V-ing', '`to` có thể là giới từ (look forward to meeting) hoặc dấu hiệu nguyên mẫu (plan to meet).', ['giới từ', 'preposition', 'to', 'V-ing'], ['bai-12'], true],
  ['f-because-of', 'Giới từ', 'because of / due to', 'because of / due to / owing to + N phrase / V-ing', 'Chỉ nguyên nhân, theo sau là cụm danh từ.', 'The event was postponed because of the storm.', 'Sự kiện bị hoãn vì bão.', 'because of → N', 'Không dùng giống because + mệnh đề. `due to` còn đứng sau be: The delay was due to traffic.', ['because of', 'due to', 'nguyên nhân'], ['bai-12', 'bai-13'], true],
  ['f-despite', 'Giới từ', 'despite / in spite of', 'despite / in spite of + N / V-ing', 'Mặc dù (giới từ).', 'Despite the rain, the festival continued.', 'Dù trời mưa, lễ hội vẫn tiếp tục.', 'despite → N', 'Không có `despite of`. Mệnh đề → although.', ['despite', 'nhượng bộ'], ['bai-12', 'bai-13']],

  // Liên từ
  ['f-although', 'Liên từ', 'although / even though', 'Although + S + V, S + V', 'Liên từ nhượng bộ nối hai mệnh đề trái ngược.', 'Although sales fell, profits rose.', 'Dù doanh số giảm, lợi nhuận vẫn tăng.', 'Although → mệnh đề', 'Không dùng although ... but trong cùng câu.', ['although', 'though', 'liên từ'], ['bai-13']],
  ['f-not-only', 'Liên từ', 'not only ... but also', 'not only A but (also) B', 'Không những A mà còn B; A, B song song.', 'The device is not only light but also durable.', 'Thiết bị không chỉ nhẹ mà còn bền.', 'A, B cùng loại từ', 'Đầu câu đảo ngữ: Not only does it save time, but it also...', ['not only', 'but also'], ['bai-13']],
  ['f-so-that', 'Liên từ', 'so that (mục đích)', 'S + V + so that + S + can/will + V', 'Để mà; mệnh đề sau chỉ mục đích.', 'Arrive early so that we can start on time.', 'Hãy đến sớm để chúng ta bắt đầu đúng giờ.', 'so that → mệnh đề', 'in order to / so as to + V nguyên mẫu.', ['so that', 'mục đích', 'in order to'], ['bai-13']],
  ['f-unless', 'Liên từ', 'unless', 'unless + S + V (khẳng định)', 'Trừ khi = if ... not.', 'Unless you register, you cannot attend.', 'Nếu không đăng ký, bạn không thể tham dự.', 'unless → mệnh đề khẳng định', 'Không thêm not sau unless.', ['unless', 'điều kiện'], ['bai-13', 'bai-15']],

  // So sánh
  ['f-as-as', 'So sánh', 'So sánh bằng', 'as + Adj/Adv + as', 'Bằng nhau; dạng nguyên của tính/trạng từ.', 'The new model is as reliable as the old one.', 'Mẫu mới đáng tin cậy như mẫu cũ.', 'as → Adj/Adv → as', 'as many/much + N + as; twice as ... as.', ['so sánh bằng', 'as as'], ['bai-14'], true],
  ['f-comparative-than', 'So sánh', 'So sánh hơn', 'Adj-er / more + Adj + than', 'So sánh hai đối tượng.', 'Our rates are lower than last year.', 'Mức giá của chúng tôi thấp hơn năm ngoái.', 'comparative → than', 'Nhấn mạnh bằng much/far/even/still, không dùng very.', ['so sánh hơn', 'than', 'more'], ['bai-14']],
  ['f-superlative', 'So sánh', 'So sánh nhất', 'the + Adj-est / the most + Adj (+ in/of)', 'Nhất trong một nhóm.', 'This is the most popular item in our store.', 'Đây là món hàng được ưa chuộng nhất cửa hàng.', 'the → superlative → N', 'one of the + so sánh nhất + N số nhiều.', ['so sánh nhất', 'the most'], ['bai-14']],
  ['f-the-more', 'So sánh', 'So sánh kép', 'The + comparative ..., the + comparative ...', 'Càng ... càng ...', 'The earlier you book, the cheaper the fare.', 'Đặt càng sớm, vé càng rẻ.', 'The + hơn, the + hơn', 'Có thể lược be ở vế sau: the cheaper the fare (is).', ['càng càng', 'so sánh kép'], ['bai-14']],

  // Điều kiện
  ['f-if-1', 'Điều kiện', 'Điều kiện loại 1', 'If + S + V(hiện tại), S + will/can + V', 'Điều có thể xảy ra ở hiện tại/tương lai.', 'If you need help, please contact us.', 'Nếu cần giúp đỡ, vui lòng liên hệ chúng tôi.', 'if → hiện tại đơn', 'Mệnh đề chính có thể là câu mệnh lệnh.', ['if', 'điều kiện', 'loại 1'], ['bai-15']],
  ['f-if-2', 'Điều kiện', 'Điều kiện loại 2', 'If + S + V2/were, S + would + V', 'Giả định không có thật ở hiện tại.', 'If we had more staff, we would open on Sundays.', 'Nếu có thêm nhân viên, chúng tôi sẽ mở cửa Chủ nhật.', 'if → quá khứ', 'Dùng were cho mọi ngôi.', ['if', 'loại 2', 'would'], ['bai-15']],
  ['f-if-3', 'Điều kiện', 'Điều kiện loại 3', 'If + S + had V3, S + would have V3', 'Giả định trái với quá khứ.', 'If we had known, we would have called.', 'Nếu biết, chúng tôi đã gọi.', 'if → had V3', 'Đảo ngữ: Had we known, ...', ['if', 'loại 3', 'would have'], ['bai-15']],
  ['f-should-inversion', 'Điều kiện', 'Đảo ngữ Should', 'Should + S + V, ...', '= If + S + V (trang trọng), rất hay gặp trong email.', 'Should you have any questions, call us.', 'Nếu có câu hỏi, hãy gọi cho chúng tôi.', 'Should → S → V0', 'Bỏ if khi đảo ngữ.', ['should', 'đảo ngữ', 'inversion'], ['bai-15']],

  // MĐQH
  ['f-who-which', 'Mệnh đề quan hệ', 'who / which / that', 'N(người) + who + V; N(vật) + which/that + V', 'Đại từ quan hệ làm chủ ngữ; động từ hòa hợp với danh từ đứng trước.', 'Employees who work overtime receive extra pay.', 'Nhân viên làm thêm giờ được trả thêm.', 'N → who/which → V', 'Không dùng that sau dấu phẩy hoặc sau giới từ.', ['who', 'which', 'that', 'mệnh đề quan hệ'], ['bai-16']],
  ['f-whose', 'Mệnh đề quan hệ', 'whose + N', 'N + whose + N + V', 'Sở hữu, dùng cho cả người và vật.', 'We hired a firm whose designs won awards.', 'Chúng tôi thuê một công ty có thiết kế từng đoạt giải.', 'whose → N (không mạo từ)', 'Không dùng which + N để chỉ sở hữu.', ['whose', 'sở hữu'], ['bai-16']],
  ['f-where-when', 'Mệnh đề quan hệ', 'where / when', 'N(nơi) + where + S + V; N(thời gian) + when + S + V', 'Theo sau là mệnh đề đầy đủ.', 'the hotel where the event is held', 'khách sạn nơi tổ chức sự kiện', 'where → mệnh đề đủ', 'Nếu mệnh đề thiếu tân ngữ → which: the hotel which we booked.', ['where', 'when'], ['bai-16']],
  ['f-reduced-ving', 'Mệnh đề quan hệ', 'Rút gọn chủ động', 'N + V-ing (= who/which + V)', 'Rút gọn mệnh đề quan hệ chủ động.', 'Passengers traveling with pets must notify staff.', 'Hành khách đi cùng thú cưng phải báo nhân viên.', 'N → V-ing', 'Câu vẫn cần một động từ chính khác.', ['rút gọn', 'V-ing', 'reduced clause'], ['bai-17']],
  ['f-reduced-v3', 'Mệnh đề quan hệ', 'Rút gọn bị động', 'N + V3 (= which/who + be + V3)', 'Rút gọn mệnh đề quan hệ bị động.', 'The items listed below are on sale.', 'Các mặt hàng liệt kê dưới đây đang giảm giá.', 'N → V3', 'Phân biệt với động từ chính quá khứ.', ['rút gọn', 'V3'], ['bai-17']],
  ['f-to-v-first', 'Mệnh đề quan hệ', 'the first/only + N + to V', 'the first/last/only/so sánh nhất + N + to V', 'Rút gọn bằng to V sau từ chỉ thứ tự.', 'She was the first employee to finish the course.', 'Cô ấy là nhân viên đầu tiên hoàn thành khóa học.', 'N → to V', 'Bị động: the first to be promoted.', ['to V', 'the first', 'the only'], ['bai-17']]
];

export const formulas: Formula[] = rows.map((r) => ({
  id: r[0],
  group: r[1],
  label: r[2],
  pattern: r[3],
  explain: r[4],
  example: r[5],
  translation: r[6],
  positions: r[7],
  exceptions: r[8],
  tags: r[9],
  lessons: r[10],
  featured: r[11]
}));

export const formulaById = (id: string) => formulas.find((f) => f.id === id);

/** Bảng hậu tố hiển thị trong thư viện */
export const suffixTable = {
  head: ['Loại từ', 'Hậu tố', 'Ví dụ'],
  rows: [
    ['N – sự việc', '-tion, -sion, -ment, -ance, -ence, -ity, -ness, -ure, -age, -ship, -al', 'decision, payment, attendance, quality, awareness, procedure, shortage, membership, approval'],
    ['N – người', '-er, -or, -ee, -ant, -ent, -ist, -ian', 'manager, supervisor, trainee, applicant, resident, specialist, technician'],
    ['Adj', '-able, -ible, -ful, -less, -ive, -al, -ous, -ic, -ent, -ant, -ary, -ory, -y', 'available, flexible, helpful, wireless, effective, annual, generous, specific, efficient, significant, necessary, mandatory, wealthy'],
    ['Adj đuôi -ly', 'friendly, timely, costly, likely, lively, orderly, elderly, daily, weekly, monthly, quarterly', 'a timely reply, a costly mistake'],
    ['Adv', 'Adj + -ly', 'quickly, carefully, efficiently, recently, approximately'],
    ['V', '-ize/-ise, -ify, -en, -ate', 'organize, simplify, strengthen, evaluate']
  ]
};

export const pronounTable = {
  head: ['Chủ ngữ', 'Tân ngữ', 'TT sở hữu (+N)', 'Đại từ sở hữu', 'Phản thân'],
  rows: [
    ['I', 'me', 'my', 'mine', 'myself'],
    ['you', 'you', 'your', 'yours', 'yourself/yourselves'],
    ['he', 'him', 'his', 'his', 'himself'],
    ['she', 'her', 'her', 'hers', 'herself'],
    ['it', 'it', 'its', '—', 'itself'],
    ['we', 'us', 'our', 'ours', 'ourselves'],
    ['they', 'them', 'their', 'theirs', 'themselves']
  ]
};
