import type { Unit } from '../types';

export const u5: Unit = {
  id: 'unit-5',
  no: 5,
  name: 'Technology',
  viName: 'Công nghệ',
  desc: 'Thiết bị, phần mềm, bảo trì hệ thống và hỗ trợ IT.',
  version: 1,
  theme: { from: '#102A43', to: '#2264A7', accent: '#5CE1E6' },
  overview: [
    { t: 'p', text: 'Văn bản công nghệ gồm **email IT thông báo bảo trì**, **hướng dẫn sử dụng thiết bị**, **chuỗi tin nhắn hỗ trợ kỹ thuật**, **quảng cáo sản phẩm**. Chú ý thời gian ngừng hệ thống và việc người dùng cần làm.' },
    { t: 'list', items: ['Part 5: bị động (be installed, be upgraded), tính từ + giới từ (compatible with), trạng từ (automatically).', 'Part 6: email thông báo nâng cấp phần mềm.', 'Part 7: hướng dẫn cài đặt, chat hỗ trợ (text message chain).'] }
  ],
  vocab: [
    { w: 'install', ipa: '/ɪnˈstɔːl/', pos: 'V', vi: 'cài đặt, lắp đặt', ex: 'The new printer was installed yesterday.', exVi: 'Máy in mới đã được lắp hôm qua.' },
    { w: 'upgrade', ipa: '/ʌpˈɡreɪd/', pos: 'V', vi: 'nâng cấp', ex: 'We will upgrade the network this weekend.', exVi: 'Chúng tôi sẽ nâng cấp mạng cuối tuần này.' },
    { w: 'malfunction', ipa: '/ˌmælˈfʌŋkʃn/', pos: 'N', vi: 'sự trục trặc', ex: 'Report any malfunction to IT.', exVi: 'Báo mọi trục trặc cho bộ phận IT.' },
    { w: 'compatible', ipa: '/kəmˈpætəbl/', pos: 'Adj', vi: 'tương thích', ex: 'The app is compatible with all phones.', exVi: 'Ứng dụng tương thích với mọi điện thoại.' },
    { w: 'device', ipa: '/dɪˈvaɪs/', pos: 'N', vi: 'thiết bị', ex: 'Please restart your device.', exVi: 'Vui lòng khởi động lại thiết bị.' },
    { w: 'troubleshoot', ipa: '/ˈtrʌblʃuːt/', pos: 'V', vi: 'xử lý sự cố', ex: 'The technician troubleshot the problem.', exVi: 'Kỹ thuật viên đã xử lý sự cố.' },
    { w: 'password', ipa: '/ˈpɑːswɜːd/', pos: 'N', vi: 'mật khẩu', ex: 'Change your password every 90 days.', exVi: 'Đổi mật khẩu mỗi 90 ngày.' },
    { w: 'maintenance', ipa: '/ˈmeɪntənəns/', pos: 'N', vi: 'bảo trì', ex: 'Scheduled maintenance begins at midnight.', exVi: 'Bảo trì theo lịch bắt đầu lúc nửa đêm.' },
    { w: 'automatically', ipa: '/ˌɔːtəˈmætɪkli/', pos: 'Adv', vi: 'tự động', ex: 'Files are saved automatically.', exVi: 'Tệp được lưu tự động.' },
    { w: 'outage', ipa: '/ˈaʊtɪdʒ/', pos: 'N', vi: 'sự ngừng hoạt động', ex: 'The outage lasted two hours.', exVi: 'Sự cố ngừng hoạt động kéo dài hai giờ.' },
    { w: 'user-friendly', pos: 'Adj', vi: 'dễ sử dụng', ex: 'The interface is user-friendly.', exVi: 'Giao diện dễ dùng.' },
    { w: 'warranty', ipa: '/ˈwɒrənti/', pos: 'N', vi: 'bảo hành', ex: 'The laptop has a two-year warranty.', exVi: 'Máy tính xách tay được bảo hành hai năm.' }
  ],
  families: [
    { root: 'install', items: [['install', 'V', 'cài đặt'], ['installation', 'N', 'việc cài đặt'], ['installer', 'N', 'người/trình cài đặt']] },
    { root: 'rely', items: [['rely', 'V', 'dựa vào'], ['reliable', 'Adj', 'đáng tin cậy'], ['reliably', 'Adv', 'một cách đáng tin'], ['reliability', 'N', 'độ tin cậy']] },
    { root: 'access', items: [['access', 'V/N', 'truy cập / quyền truy cập'], ['accessible', 'Adj', 'có thể truy cập'], ['accessibility', 'N', 'khả năng tiếp cận']] },
    { root: 'operate', items: [['operate', 'V', 'vận hành'], ['operation', 'N', 'sự vận hành'], ['operator', 'N', 'người vận hành'], ['operational', 'Adj', 'đang hoạt động']] }
  ],
  collocations: [
    ['run a software update', 'chạy cập nhật phần mềm', 'Please run the software update before Friday.'],
    ['back up files', 'sao lưu tệp', 'Back up your files regularly.'],
    ['submit a support ticket', 'gửi yêu cầu hỗ trợ', 'Submit a support ticket if the issue continues.'],
    ['gain access to', 'truy cập vào', 'New staff will gain access to the database on Monday.'],
    ['be out of order', 'bị hỏng', 'The copier on floor 3 is out of order.'],
    ['under warranty', 'còn bảo hành', 'The device is still under warranty.']
  ],
  structures: [
    { t: 'formula', pattern: 'be compatible with / be equipped with', text: 'Tính từ / bị động + with.', fid: 'f-be-v3' },
    { t: 'formula', pattern: 'is being upgraded / has been installed', text: 'Bị động tiếp diễn và hoàn thành cho trạng thái hệ thống.', fid: 'f-be-being-v3' },
    { t: 'formula', pattern: 'When using ..., / Once installed, ...', text: 'Mệnh đề phân từ trong hướng dẫn.', fid: 'f-participle-clause' },
    { t: 'formula', pattern: 'so that + S + can + V', text: '`Restart the computer so that the update can take effect.`', fid: 'f-so-that' }
  ],
  part5: [
    ['The new software is {compatible|Adj} with older operating systems.', 'Phần mềm mới tương thích với hệ điều hành cũ.', 'be + Adj + with.'],
    ['The server {is being upgraded|V} and will be offline until 6 A.M.', 'Máy chủ đang được nâng cấp và sẽ ngắt đến 6 giờ sáng.', 'Bị động tiếp diễn.'],
    ['Data is backed up {automatically|Adv} every night.', 'Dữ liệu được sao lưu tự động mỗi đêm.', 'Câu bị động đủ → Adv.'],
    ['Once {installed|V}, the app requires no further setup.', 'Sau khi cài, ứng dụng không cần thiết lập thêm.', 'Once + V3 (ứng dụng được cài).']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Email từ bộ phận IT',
      kind: 'Email',
      lines: [
        ['To all staff:', 'Gửi toàn thể nhân viên:'],
        ['Our e-mail system **will be unavailable** from 10 P.M. Saturday **until** 2 A.M. Sunday.', 'Hệ thống email sẽ ngưng từ 10 giờ tối thứ Bảy đến 2 giờ sáng Chủ nhật.', 'from ... until.'],
        ['**During** this time, technicians **will install** a new security filter.', 'Trong thời gian này, kỹ thuật viên sẽ cài bộ lọc bảo mật mới.', 'Chủ động có tân ngữ.'],
        ['Please **save** any drafts **before** logging off **so that** no work **is lost**.', 'Vui lòng lưu bản nháp trước khi đăng xuất để không mất dữ liệu.', 'before + V-ing; so that + bị động.']
      ]
    },
    {
      t: 'passage',
      title: 'Chuỗi tin nhắn hỗ trợ',
      kind: 'Text message chain',
      lines: [
        ['Mai Pham (9:02): My laptop **won\'t connect** to the Wi-Fi in Room 4B.', 'Mai Phạm (9:02): Laptop của tôi không kết nối được Wi-Fi ở phòng 4B.', 'won\'t = will not, ý "không chịu".'],
        ['Ken Ota (9:05): The router there **is being replaced**. Try the guest network for now.', 'Ken Ota (9:05): Bộ phát ở đó đang được thay. Tạm thời dùng mạng khách nhé.', 'Bị động tiếp diễn.'],
        ['Mai Pham (9:06): That works. Thanks!', 'Mai Phạm (9:06): Được rồi. Cảm ơn!', '"That works" = cách đó được – câu hỏi ý định thường nhắm vào câu kiểu này.']
      ]
    }
  ],
  related: ['bai-8', 'bai-10', 'bai-11', 'bai-13'],
  summary: [
    'Bị động mô tả hệ thống: is being upgraded, has been installed, will be unavailable.',
    'compatible with, equipped with, under warranty, out of order.',
    'Adv trong hướng dẫn: automatically, regularly, immediately.',
    'Mệnh đề phân từ: When using..., Once installed...'
  ]
};

export const u6: Unit = {
  id: 'unit-6',
  no: 6,
  name: 'Purchasing',
  viName: 'Mua hàng',
  desc: 'Đặt hàng, nhà cung cấp, giao hàng, hóa đơn và đổi trả.',
  version: 1,
  theme: { from: '#3D2C8D', to: '#916BBF', accent: '#C8F7C5' },
  overview: [
    { t: 'p', text: 'Mua hàng là chủ đề Part 7 rất phổ biến: **hóa đơn (invoice)**, **đơn đặt hàng**, **email khiếu nại giao sai hàng**, **chính sách đổi trả**. Cần đọc kỹ số lượng, mã hàng, ngày giao và điều kiện giảm giá.' },
    { t: 'list', items: ['Part 5: danh từ không đếm được (merchandise, equipment), giới từ (in stock, on order), bị động (be shipped).', 'Part 6: email xác nhận đơn, thư xin lỗi giao trễ.', 'Part 7: hóa đơn + email khiếu nại (đoạn đôi/ba).'] }
  ],
  vocab: [
    { w: 'invoice', ipa: '/ˈɪnvɔɪs/', pos: 'N', vi: 'hóa đơn', ex: 'The invoice is due in 30 days.', exVi: 'Hóa đơn đến hạn sau 30 ngày.' },
    { w: 'supplier', ipa: '/səˈplaɪə(r)/', pos: 'N', vi: 'nhà cung cấp', ex: 'We changed suppliers last year.', exVi: 'Năm ngoái chúng tôi đã đổi nhà cung cấp.' },
    { w: 'shipment', ipa: '/ˈʃɪpmənt/', pos: 'N', vi: 'lô hàng', ex: 'The shipment arrived damaged.', exVi: 'Lô hàng đến nơi bị hư hại.' },
    { w: 'merchandise', ipa: '/ˈmɜːtʃəndaɪs/', pos: 'N', vi: 'hàng hóa (không đếm được)', ex: 'All merchandise is 20 percent off.', exVi: 'Mọi hàng hóa giảm 20%.' },
    { w: 'quote', ipa: '/kwəʊt/', pos: 'N', vi: 'bảng báo giá', ex: 'Please send us a quote for 500 units.', exVi: 'Vui lòng gửi báo giá cho 500 sản phẩm.' },
    { w: 'bulk', ipa: '/bʌlk/', pos: 'N', vi: 'số lượng lớn', ex: 'We offer discounts on bulk orders.', exVi: 'Chúng tôi giảm giá cho đơn số lượng lớn.' },
    { w: 'defective', ipa: '/dɪˈfektɪv/', pos: 'Adj', vi: 'bị lỗi', ex: 'Defective items will be replaced.', exVi: 'Sản phẩm lỗi sẽ được thay.' },
    { w: 'refund', ipa: '/ˈriːfʌnd/', pos: 'N', vi: 'khoản hoàn tiền', ex: 'You will receive a full refund.', exVi: 'Bạn sẽ được hoàn tiền toàn bộ.' },
    { w: 'inventory', ipa: '/ˈɪnvəntri/', pos: 'N', vi: 'hàng tồn kho', ex: 'We check inventory every Monday.', exVi: 'Chúng tôi kiểm kho mỗi thứ Hai.' },
    { w: 'expedite', ipa: '/ˈekspədaɪt/', pos: 'V', vi: 'xúc tiến, đẩy nhanh', ex: 'Can you expedite the delivery?', exVi: 'Bạn có thể giao nhanh hơn không?' },
    { w: 'out of stock', pos: 'Phrase', vi: 'hết hàng', ex: 'The blue model is out of stock.', exVi: 'Mẫu xanh đã hết hàng.' },
    { w: 'vendor', ipa: '/ˈvendə(r)/', pos: 'N', vi: 'nhà cung ứng, người bán', ex: 'Approved vendors are listed online.', exVi: 'Danh sách nhà cung ứng được duyệt có trên mạng.' }
  ],
  families: [
    { root: 'supply', items: [['supply', 'V/N', 'cung cấp / nguồn cung'], ['supplier', 'N', 'nhà cung cấp'], ['supplies', 'N', 'vật tư']] },
    { root: 'purchase', items: [['purchase', 'V/N', 'mua / việc mua'], ['purchaser', 'N', 'người mua'], ['purchasing', 'N', 'bộ phận thu mua']] },
    { root: 'deliver', items: [['deliver', 'V', 'giao'], ['delivery', 'N', 'việc giao hàng'], ['deliverable', 'N', 'sản phẩm bàn giao']] },
    { root: 'replace', items: [['replace', 'V', 'thay thế'], ['replacement', 'N', 'sự thay thế, hàng thay thế'], ['replaceable', 'Adj', 'có thể thay']] }
  ],
  collocations: [
    ['place an order', 'đặt hàng', 'We placed an order for 200 chairs.'],
    ['issue a refund', 'hoàn tiền', 'The store issued a refund within a week.'],
    ['be back in stock', 'có hàng trở lại', 'The item will be back in stock next month.'],
    ['meet a deadline', 'kịp hạn', 'The supplier failed to meet the deadline.'],
    ['negotiate a price', 'thương lượng giá', 'We negotiated a lower price for bulk orders.'],
    ['track a package', 'theo dõi bưu kiện', 'You can track your package online.']
  ],
  structures: [
    { t: 'formula', pattern: 'be shipped / be delivered / be charged', text: 'Hàng hóa và chi phí là vật bị tác động.', fid: 'f-be-v3' },
    { t: 'formula', pattern: 'much merchandise / many items', text: 'Không đếm được vs đếm được.', fid: 'f-quantifier' },
    { t: 'formula', pattern: 'Unless + mệnh đề, ... / provided that ...', text: 'Điều kiện đổi trả và giảm giá.', fid: 'f-unless' },
    { t: 'formula', pattern: 'because of / due to + N', text: 'Lý do giao trễ: due to high demand.', fid: 'f-because-of' }
  ],
  part5: [
    ['Your order {has been shipped|V} and should arrive Thursday.', 'Đơn hàng đã được gửi và sẽ đến vào thứ Năm.', 'Bị động hoàn thành.'],
    ['We regret that the item is currently out of {stock|N}.', 'Rất tiếc mặt hàng hiện đã hết.', 'Cụm cố định out of stock.'],
    ['{Defective|Adj} products may be returned within 14 days.', 'Sản phẩm lỗi có thể trả lại trong 14 ngày.', 'Adj + N làm chủ ngữ.'],
    ['The delay was {due|Adj} to a shortage of materials.', 'Sự chậm trễ là do thiếu nguyên liệu.', 'be due to + N.']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Email khiếu nại',
      kind: 'Email',
      lines: [
        ['Dear Customer Service,', 'Kính gửi bộ phận chăm sóc khách hàng,'],
        ['I **placed** an order (#5521) for 40 desk lamps on May 2.', 'Tôi đã đặt đơn #5521 gồm 40 đèn bàn vào ngày 2/5.', 'Quá khứ đơn + mốc.'],
        ['**However**, only 30 lamps **were delivered**, and five of them **were damaged**.', 'Tuy nhiên chỉ 30 chiếc được giao, và năm chiếc bị hỏng.', 'However; bị động quá khứ.'],
        ['I would appreciate it if you **could send** the **remaining** lamps and **replacements** as soon as possible.', 'Tôi rất mong quý vị gửi số đèn còn lại và hàng thay thế sớm nhất có thể.', 'remaining (V-ing, nội động); replacements (N).']
      ]
    },
    {
      t: 'passage',
      title: 'Phản hồi của nhà cung cấp',
      kind: 'Email',
      lines: [
        ['We apologize for the error. The **missing** items **will be shipped** today by express delivery **at no additional charge**.', 'Chúng tôi xin lỗi vì sai sót. Các sản phẩm còn thiếu sẽ được gửi hôm nay bằng chuyển phát nhanh, không tính thêm phí.', 'missing: V-ing làm Adj; at no charge.'],
        ['Please keep the damaged lamps **until** our courier **collects** them.', 'Vui lòng giữ đèn hỏng đến khi nhân viên giao nhận tới lấy.', 'until + hiện tại đơn (tương lai).']
      ]
    }
  ],
  related: ['bai-5', 'bai-8', 'bai-12', 'bai-15'],
  summary: [
    'merchandise, equipment, inventory (tổng thể) thường không đếm được.',
    'Bị động: be shipped, be delivered, be charged, be refunded.',
    'Cụm: place an order, out of stock, back in stock, at no charge.',
    'Điều kiện: unless, provided that, within + thời hạn.'
  ]
};

export const u7: Unit = {
  id: 'unit-7',
  no: 7,
  name: 'General Business',
  viName: 'Kinh doanh chung',
  desc: 'Hợp đồng, dự án, họp hành, sáp nhập và kết quả kinh doanh.',
  version: 1,
  theme: { from: '#17324D', to: '#3E6E8E', accent: '#9AE6B4' },
  overview: [
    { t: 'p', text: 'Kinh doanh chung bao gồm **thông cáo báo chí** (sáp nhập, mở rộng), **biên bản/thư mời họp**, **hợp đồng**, **báo cáo doanh thu**. Văn bản dài, nhiều danh từ hóa và câu phức.' },
    { t: 'list', items: ['Part 5: danh từ hóa (expansion, acquisition), so sánh (higher than expected), liên từ.', 'Part 6: thông báo nội bộ về dự án, email đối tác.', 'Part 7: bài báo kinh doanh, thông cáo báo chí, hợp đồng.'] }
  ],
  vocab: [
    { w: 'merger', ipa: '/ˈmɜːdʒə(r)/', pos: 'N', vi: 'sự sáp nhập', ex: 'The merger was announced Monday.', exVi: 'Việc sáp nhập được công bố hôm thứ Hai.' },
    { w: 'acquire', ipa: '/əˈkwaɪə(r)/', pos: 'V', vi: 'mua lại', ex: 'Tanaka Corp. acquired a local startup.', exVi: 'Tanaka Corp. đã mua lại một startup địa phương.' },
    { w: 'contract', ipa: '/ˈkɒntrækt/', pos: 'N', vi: 'hợp đồng', ex: 'The contract expires in June.', exVi: 'Hợp đồng hết hạn vào tháng Sáu.' },
    { w: 'revenue', ipa: '/ˈrevənjuː/', pos: 'N', vi: 'doanh thu', ex: 'Revenue grew by 12 percent.', exVi: 'Doanh thu tăng 12%.' },
    { w: 'agenda', ipa: '/əˈdʒendə/', pos: 'N', vi: 'chương trình họp', ex: 'The budget is first on the agenda.', exVi: 'Ngân sách là mục đầu tiên trong chương trình họp.' },
    { w: 'negotiate', ipa: '/nɪˈɡəʊʃieɪt/', pos: 'V', vi: 'đàm phán', ex: 'We are negotiating new terms.', exVi: 'Chúng tôi đang đàm phán điều khoản mới.' },
    { w: 'proposal', ipa: '/prəˈpəʊzl/', pos: 'N', vi: 'đề xuất', ex: 'The board accepted the proposal.', exVi: 'Hội đồng chấp nhận đề xuất.' },
    { w: 'expand', ipa: '/ɪkˈspænd/', pos: 'V', vi: 'mở rộng', ex: 'The firm plans to expand into Asia.', exVi: 'Công ty định mở rộng sang châu Á.' },
    { w: 'competitor', ipa: '/kəmˈpetɪtə(r)/', pos: 'N', vi: 'đối thủ cạnh tranh', ex: 'Our competitors lowered prices.', exVi: 'Đối thủ đã giảm giá.' },
    { w: 'deadline', ipa: '/ˈdedlaɪn/', pos: 'N', vi: 'hạn chót', ex: 'The deadline has been extended.', exVi: 'Hạn chót đã được gia hạn.' },
    { w: 'profitable', ipa: '/ˈprɒfɪtəbl/', pos: 'Adj', vi: 'có lãi', ex: 'The new line proved profitable.', exVi: 'Dòng sản phẩm mới tỏ ra có lãi.' },
    { w: 'stakeholder', ipa: '/ˈsteɪkhəʊldə(r)/', pos: 'N', vi: 'bên liên quan', ex: 'All stakeholders were informed.', exVi: 'Mọi bên liên quan đã được thông báo.' }
  ],
  families: [
    { root: 'expand', items: [['expand', 'V', 'mở rộng'], ['expansion', 'N', 'sự mở rộng'], ['expansive', 'Adj', 'rộng lớn']] },
    { root: 'compete', items: [['compete', 'V', 'cạnh tranh'], ['competition', 'N', 'sự cạnh tranh'], ['competitor', 'N', 'đối thủ'], ['competitive', 'Adj', 'cạnh tranh'], ['competitively', 'Adv', 'một cách cạnh tranh']] },
    { root: 'acquire', items: [['acquire', 'V', 'mua lại'], ['acquisition', 'N', 'thương vụ mua lại']] },
    { root: 'profit', items: [['profit', 'N', 'lợi nhuận'], ['profitable', 'Adj', 'có lãi'], ['profitability', 'N', 'khả năng sinh lời']] }
  ],
  collocations: [
    ['sign a contract', 'ký hợp đồng', 'Both parties signed the contract on Friday.'],
    ['reach an agreement', 'đạt thỏa thuận', 'The two firms reached an agreement.'],
    ['launch a product', 'ra mắt sản phẩm', 'We will launch the product in spring.'],
    ['exceed expectations', 'vượt kỳ vọng', 'Sales exceeded expectations.'],
    ['hold a meeting', 'tổ chức cuộc họp', 'The team holds a meeting every Monday.'],
    ['ahead of schedule', 'trước tiến độ', 'The project finished ahead of schedule.']
  ],
  structures: [
    { t: 'formula', pattern: 'the + N-tion + of + N', text: 'Danh từ hóa: `the expansion of the factory`.', fid: 'f-suffix-n' },
    { t: 'formula', pattern: 'higher/lower than expected', text: 'So sánh với kỳ vọng trong báo cáo kết quả.', fid: 'f-comparative-than' },
    { t: 'formula', pattern: 'Although/Despite ...', text: 'Đối lập kết quả kinh doanh.', fid: 'f-although' },
    { t: 'formula', pattern: 'Founded in ..., S + V', text: 'Mệnh đề phân từ trong thông cáo báo chí.', fid: 'f-participle-clause' }
  ],
  part5: [
    ['The {acquisition|N} of Bluefin Co. was completed in March.', 'Thương vụ mua lại Bluefin Co. hoàn tất vào tháng Ba.', 'The + N + of.'],
    ['Quarterly profits were {higher|Adj} than analysts had predicted.', 'Lợi nhuận quý cao hơn dự đoán của giới phân tích.', 'So sánh hơn + than.'],
    ['The two companies have {reached|V} an agreement.', 'Hai công ty đã đạt được thỏa thuận.', 'have + V3, có tân ngữ.'],
    ['Our prices remain {competitive|Adj} despite rising costs.', 'Giá của chúng tôi vẫn cạnh tranh dù chi phí tăng.', 'remain + Adj; despite + N.']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Thông cáo báo chí',
      kind: 'Press release',
      lines: [
        ['**Headquartered** in Ho Chi Minh City, Vina Textiles **announced** today that it **has acquired** Linh Fabrics.', 'Có trụ sở tại TP.HCM, Vina Textiles hôm nay thông báo đã mua lại Linh Fabrics.', 'Phân từ đầu câu; mệnh đề danh từ that.'],
        ['The **acquisition** is expected to **increase** production capacity by 30 percent.', 'Thương vụ dự kiến tăng năng lực sản xuất thêm 30%.', 'be expected to V.'],
        ['**Both** companies **will continue** to operate under their current names **until** next year.', 'Cả hai công ty tiếp tục hoạt động dưới tên hiện tại cho đến năm sau.', 'both + N số nhiều; until.']
      ]
    },
    {
      t: 'passage',
      title: 'Email mời họp',
      kind: 'Email',
      lines: [
        ['The project review meeting **has been moved** to Thursday at 2 P.M.', 'Cuộc họp đánh giá dự án đã được dời sang 2 giờ chiều thứ Năm.', 'Bị động hoàn thành.'],
        ['Please review the **attached** agenda and send any additional topics **by** Wednesday.', 'Vui lòng xem chương trình họp đính kèm và gửi chủ đề bổ sung trước thứ Tư.', 'V3 làm Adj; by + hạn.']
      ]
    }
  ],
  related: ['bai-5', 'bai-10', 'bai-13', 'bai-14'],
  summary: [
    'Danh từ hóa: expansion, acquisition, completion, reduction.',
    'Họ từ compete: competition / competitor / competitive / competitively.',
    'So sánh với kỳ vọng: higher than expected, exceed expectations.',
    'Mệnh đề phân từ trong thông cáo: Founded in..., Headquartered in...'
  ]
};

export const u8: Unit = {
  id: 'unit-8',
  no: 8,
  name: 'Offices',
  viName: 'Văn phòng',
  desc: 'Trang thiết bị văn phòng, quy trình nội bộ, cải tạo và chuyển văn phòng.',
  version: 1,
  theme: { from: '#2E4F3E', to: '#5E9C76', accent: '#FFE8A3' },
  overview: [
    { t: 'p', text: 'Chủ đề văn phòng gồm **memo nội bộ**, **thông báo cải tạo/chuyển chỗ**, **quy trình đặt phòng họp**, **yêu cầu văn phòng phẩm**. Văn bản ngắn, nhiều câu mệnh lệnh và bị động.' },
    { t: 'list', items: ['Part 5: giới từ nơi chốn (on the third floor), bị động (be relocated), đại từ (their, themselves).', 'Part 6: memo thông báo quy trình mới.', 'Part 7: thông báo + email trao đổi (đoạn đôi), mẫu đơn yêu cầu.'] }
  ],
  vocab: [
    { w: 'memo', ipa: '/ˈmeməʊ/', pos: 'N', vi: 'thông báo nội bộ', ex: 'Please read the attached memo.', exVi: 'Vui lòng đọc memo đính kèm.' },
    { w: 'relocate', ipa: '/ˌriːləʊˈkeɪt/', pos: 'V', vi: 'di dời', ex: 'The team will relocate to Building C.', exVi: 'Nhóm sẽ chuyển sang tòa C.' },
    { w: 'renovation', ipa: '/ˌrenəˈveɪʃn/', pos: 'N', vi: 'việc cải tạo', ex: 'Renovations will begin in May.', exVi: 'Việc cải tạo bắt đầu vào tháng Năm.' },
    { w: 'stationery', ipa: '/ˈsteɪʃənri/', pos: 'N', vi: 'văn phòng phẩm', ex: 'Order stationery through the portal.', exVi: 'Đặt văn phòng phẩm qua cổng nội bộ.' },
    { w: 'supervisor', ipa: '/ˈsuːpəvaɪzə(r)/', pos: 'N', vi: 'người quản lý trực tiếp', ex: 'Ask your supervisor for approval.', exVi: 'Xin phê duyệt từ quản lý trực tiếp.' },
    { w: 'procedure', ipa: '/prəˈsiːdʒə(r)/', pos: 'N', vi: 'quy trình', ex: 'Follow the new security procedure.', exVi: 'Làm theo quy trình an ninh mới.' },
    { w: 'cubicle', ipa: '/ˈkjuːbɪkl/', pos: 'N', vi: 'ô làm việc', ex: 'Each cubicle has a desk lamp.', exVi: 'Mỗi ô làm việc có một đèn bàn.' },
    { w: 'reimbursement', ipa: '/ˌriːɪmˈbɜːsmənt/', pos: 'N', vi: 'khoản hoàn tiền', ex: 'Submit a reimbursement form.', exVi: 'Nộp mẫu đơn hoàn tiền.' },
    { w: 'premises', ipa: '/ˈpremɪsɪz/', pos: 'N', vi: 'khuôn viên, trụ sở', ex: 'Smoking is not allowed on the premises.', exVi: 'Không được hút thuốc trong khuôn viên.' },
    { w: 'facility', ipa: '/fəˈsɪləti/', pos: 'N', vi: 'cơ sở vật chất', ex: 'The facility has a staff gym.', exVi: 'Cơ sở có phòng tập cho nhân viên.' },
    { w: 'designated', ipa: '/ˈdezɪɡneɪtɪd/', pos: 'Adj', vi: 'được chỉ định', ex: 'Park only in designated areas.', exVi: 'Chỉ đỗ xe ở khu vực được chỉ định.' },
    { w: 'promptly', ipa: '/ˈprɒmptli/', pos: 'Adv', vi: 'kịp thời, ngay', ex: 'Please respond promptly.', exVi: 'Vui lòng phản hồi ngay.' }
  ],
  families: [
    { root: 'renovate', items: [['renovate', 'V', 'cải tạo'], ['renovation', 'N', 'việc cải tạo'], ['renovated', 'Adj', 'đã cải tạo']] },
    { root: 'organize', items: [['organize', 'V', 'sắp xếp'], ['organization', 'N', 'tổ chức'], ['organizer', 'N', 'người tổ chức'], ['organized', 'Adj', 'ngăn nắp']] },
    { root: 'assign', items: [['assign', 'V', 'phân công'], ['assignment', 'N', 'nhiệm vụ'], ['assigned', 'Adj', 'được phân công']] },
    { root: 'secure', items: [['secure', 'V/Adj', 'bảo đảm / an toàn'], ['security', 'N', 'an ninh'], ['securely', 'Adv', 'một cách an toàn']] }
  ],
  collocations: [
    ['book a conference room', 'đặt phòng họp', 'Book a conference room through the online calendar.'],
    ['fill out a form', 'điền mẫu đơn', 'Fill out the request form and give it to Ms. Ly.'],
    ['be closed for renovation', 'đóng cửa để cải tạo', 'The kitchen is closed for renovation.'],
    ['in accordance with', 'phù hợp với', 'Store files in accordance with company policy.'],
    ['keep ... organized', 'giữ ngăn nắp', 'Please keep shared areas organized.'],
    ['report directly to', 'báo cáo trực tiếp cho', 'She reports directly to the COO.']
  ],
  structures: [
    { t: 'formula', pattern: 'Please + V nguyên mẫu', text: 'Câu mệnh lệnh lịch sự trong memo.' },
    { t: 'formula', pattern: 'on + tầng / in + phòng / at + bàn', text: '`on the fifth floor`, `in Room 502`, `at the front desk`.', fid: 'f-prep-n' },
    { t: 'formula', pattern: 'keep + O + Adj', text: '`keep the hallway clear`.', fid: 'f-s-v-c' },
    { t: 'formula', pattern: 'will be relocated / is being renovated', text: 'Bị động cho văn phòng và thiết bị.', fid: 'f-be-v3' }
  ],
  part5: [
    ['The accounting team will be {relocated|V} to the fifth floor.', 'Nhóm kế toán sẽ được chuyển lên tầng năm.', 'will be + V3.'],
    ['Please keep the emergency exits {clear|Adj} at all times.', 'Vui lòng luôn giữ lối thoát hiểm thông thoáng.', 'keep + O + Adj.'],
    ['Employees must park in {designated|Adj} areas only.', 'Nhân viên chỉ được đỗ xe ở khu vực chỉ định.', 'V3 làm Adj + N.'],
    ['Staff should clean up after **themselves** in the kitchen.', 'Nhân viên nên tự dọn dẹp sau khi dùng bếp.', 'Phản thân sau giới từ, trùng chủ ngữ.']
  ],
  part67: [
    {
      t: 'passage',
      title: 'Memo về quy trình đặt phòng họp',
      kind: 'Memo',
      lines: [
        ['To: All employees  /  From: Facilities Department', 'Gửi: Toàn bộ nhân viên  /  Từ: Phòng Hành chính – Cơ sở vật chất'],
        ['**Starting** June 1, conference rooms **must be booked** through the new online calendar.', 'Từ ngày 1/6, phòng họp phải được đặt qua lịch trực tuyến mới.', 'Starting + ngày; modal bị động.'],
        ['Bookings **made** by phone **will no longer be accepted**.', 'Đặt qua điện thoại sẽ không còn được chấp nhận.', 'Rút gọn MĐQH (made = which are made).'],
        ['**If** a meeting **ends** early, please **cancel** the remaining time **so that** others **can use** the room.', 'Nếu họp xong sớm, vui lòng hủy thời gian còn lại để người khác dùng phòng.', 'Điều kiện loại 1 + so that.']
      ]
    }
  ],
  related: ['bai-8', 'bai-11', 'bai-12', 'bai-17'],
  summary: [
    'Memo dùng nhiều câu mệnh lệnh: Please + V.',
    'Giới từ nơi chốn: on the floor, in the room, at the desk.',
    'Bị động: be relocated, be renovated, must be booked.',
    'stationery (văn phòng phẩm) ≠ stationary (đứng yên).'
  ]
};
