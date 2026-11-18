import type { Lesson } from '../types';

export const bai7: Lesson = {
  id: 'bai-7',
  code: 'Bài 7',
  order: 4,
  title: 'Động từ chia thì chủ động',
  short: 'Thì chủ động',
  summary: 'Các thì hay gặp trong TOEIC Reading, dấu hiệu thời gian và cách chọn thì theo ngữ cảnh email, thông báo.',
  version: 1,
  goals: [
    'Nắm cấu trúc 8 thì chủ động thường gặp trong văn bản công sở.',
    'Nhận ra trạng từ/cụm thời gian quyết định thì.',
    'Biết các trường hợp dùng hiện tại đơn cho tương lai (lịch trình, mệnh đề thời gian).'
  ],
  prereq: ['Bài 4: tìm động từ chính trong câu.'],
  sections: [
    {
      id: 'bang-thi',
      title: 'Bảng thì chủ động',
      blocks: [
        {
          t: 'table',
          head: ['Thì', 'Công thức', 'Dấu hiệu thường gặp'],
          rows: [
            ['Hiện tại đơn', 'S + V(s/es)', 'every day, usually, regularly, each month; lịch trình cố định'],
            ['Hiện tại tiếp diễn', 'S + am/is/are + V-ing', 'now, currently, at the moment, this week'],
            ['Hiện tại hoàn thành', 'S + have/has + V3', 'since, for, already, recently, so far, over the past year'],
            ['Quá khứ đơn', 'S + V2/V-ed', 'yesterday, last week, ago, in 2023'],
            ['Quá khứ tiếp diễn', 'S + was/were + V-ing', 'while, when (hành động đang diễn ra bị cắt ngang)'],
            ['Quá khứ hoàn thành', 'S + had + V3', 'by the time + quá khứ, before + quá khứ'],
            ['Tương lai đơn', 'S + will + V', 'tomorrow, next month, soon'],
            ['Tương lai hoàn thành', 'S + will have + V3', 'by + mốc tương lai, by the time + hiện tại đơn']
          ]
        },
        { t: 'formula', pattern: 'have/has/had + V3', text: 'Các thì hoàn thành ở thể chủ động.', fid: 'f-have-v3' },
        { t: 'formula', pattern: 'modal + V nguyên mẫu', text: 'will, can, should, must, may + V nguyên mẫu (không chia).', fid: 'f-modal-v' }
      ]
    },
    {
      id: 'tuong-lai',
      title: 'Hiện tại đơn mang nghĩa tương lai',
      blocks: [
        {
          t: 'p',
          text: 'Trong **mệnh đề thời gian/điều kiện** bắt đầu bằng `when, before, after, as soon as, until, once, if`, ta dùng **hiện tại đơn** dù nghĩa là tương lai. Mệnh đề chính vẫn dùng `will`.'
        },
        {
          t: 'formula',
          pattern: 'When/As soon as + S + V(hiện tại), S + will + V',
          text: '`As soon as the shipment arrives, we will contact you.`'
        },
        {
          t: 'p',
          text: 'Lịch trình cố định (giờ tàu, giờ mở cửa, lịch hội thảo) cũng dùng hiện tại đơn: `The conference begins at 9 A.M. tomorrow.`'
        }
      ]
    },
    {
      id: 'hoan-thanh',
      title: 'Hiện tại hoàn thành và quá khứ đơn',
      blocks: [
        {
          t: 'table',
          head: ['Hiện tại hoàn thành', 'Quá khứ đơn'],
          rows: [
            ['Không nêu thời điểm cụ thể, liên quan hiện tại', 'Có thời điểm xác định trong quá khứ'],
            ['We **have hired** five new staff **since** January.', 'We **hired** five new staff **last** January.'],
            ['Sales **have increased** **over the past** year.', 'Sales **increased** **in** 2022.']
          ]
        },
        {
          t: 'note',
          tone: 'tip',
          text: '`since + mốc thời gian` (since 2020, since Monday) và `for + khoảng thời gian` (for three years) là dấu hiệu mạnh của thì hoàn thành.'
        }
      ]
    }
  ],
  signals: [
    'Nhìn cụm thời gian: `last/ago/yesterday` → quá khứ đơn; `since/for/so far/recently` → hiện tại hoàn thành.',
    '`by the end of next month` / `by the time + hiện tại đơn` → tương lai hoàn thành.',
    '`by the time + quá khứ đơn` → quá khứ hoàn thành ở mệnh đề còn lại.',
    'Chủ ngữ số ít ngôi thứ ba ở hiện tại đơn → V thêm -s/-es.',
    'Sau modal (will, can, should, must) → V nguyên mẫu.',
    'Trong mệnh đề `when/if/as soon as/before` nói về tương lai → hiện tại đơn, không dùng will.'
  ],
  examples: [
    ['The store {opens|V} at 8 A.M. every day.', 'Cửa hàng mở cửa lúc 8 giờ sáng mỗi ngày.', 'Thói quen/lịch cố định → hiện tại đơn; chủ ngữ số ít → `opens`.'],
    ['Our team is currently {reviewing|V} the contract.', 'Nhóm chúng tôi hiện đang xem xét hợp đồng.', '`currently` → hiện tại tiếp diễn.'],
    ['Ms. Choi has {worked|V} here since 2019.', 'Bà Choi đã làm ở đây từ năm 2019.', '`since + mốc` → hiện tại hoàn thành.'],
    ['The company {launched|V} its app two months ago.', 'Công ty đã ra mắt ứng dụng hai tháng trước.', '`ago` → quá khứ đơn.'],
    ['Mr. Diaz was {preparing|V} the slides when the power went out.', 'Ông Diaz đang chuẩn bị slide thì mất điện.', 'Hành động đang diễn ra bị cắt ngang → quá khứ tiếp diễn.'],
    ['By the time the manager arrived, the meeting had {started|V}.', 'Lúc quản lý tới thì cuộc họp đã bắt đầu.', 'Hành động xảy ra trước một hành động quá khứ → quá khứ hoàn thành.'],
    ['We {will send|V} the invoice tomorrow.', 'Chúng tôi sẽ gửi hóa đơn vào ngày mai.', '`tomorrow` → tương lai đơn.'],
    ['By next March, the factory will have {produced|V} one million units.', 'Đến tháng Ba tới, nhà máy sẽ sản xuất được một triệu sản phẩm.', '`By + mốc tương lai` → tương lai hoàn thành.'],
    ['Please call me as soon as the package {arrives|V}.', 'Vui lòng gọi tôi ngay khi gói hàng đến.', 'Mệnh đề thời gian chỉ tương lai → hiện tại đơn, không viết `will arrive`.'],
    ['Sales have {risen|V} steadily over the past three quarters.', 'Doanh số đã tăng đều trong ba quý qua.', '`over the past + khoảng` → hiện tại hoàn thành.'],
    ['The seminar {begins|V} at 2 P.M. on Friday.', 'Hội thảo bắt đầu lúc 2 giờ chiều thứ Sáu.', 'Lịch trình → hiện tại đơn dù là tương lai.'],
    ['Employees should {submit|V} timesheets every Friday.', 'Nhân viên nên nộp bảng chấm công mỗi thứ Sáu.', 'Modal + V nguyên mẫu.']
  ],
  mistakes: {
    head: ['Lỗi', 'Sai', 'Đúng'],
    rows: [
      ['Dùng will trong mệnh đề thời gian', 'when the order will arrive', 'when the order **arrives**'],
      ['Hiện tại hoàn thành + thời điểm quá khứ', 'We have met him yesterday.', 'We **met** him yesterday.'],
      ['Chia động từ sau modal', 'must submits', 'must **submit**'],
      ['Quên -s ngôi thứ ba', 'The office close at 6.', 'The office **closes** at 6.'],
      ['Nhầm since/for', 'for 2020', '**since** 2020 / **for** five years']
    ]
  },
  part5: [
    ['Ms. Ortega has {managed|V} the Seoul office for six years.', 'Bà Ortega đã quản lý văn phòng Seoul được sáu năm.', '`for six years` + liên quan hiện tại → hiện tại hoàn thành.'],
    ['The technician {repaired|V} the printer last Tuesday.', 'Kỹ thuật viên đã sửa máy in vào thứ Ba tuần trước.', '`last Tuesday` → quá khứ đơn.'],
    ['Once the survey {is|V} complete, we will share the results.', 'Khi khảo sát hoàn tất, chúng tôi sẽ chia sẻ kết quả.', '`Once` + hiện tại đơn cho nghĩa tương lai.']
  ],
  part6: [
    {
      t: 'p',
      text: 'Trong Part 6, thì của chỗ trống thường được quyết định bởi **câu trước/sau**, không chỉ trong câu chứa chỗ trống. Hãy xác định mốc thời gian của cả đoạn.'
    },
    {
      t: 'passage',
      title: 'Email cập nhật dự án',
      kind: 'Email',
      lines: [
        ['Last week, our team **completed** the first phase of the renovation.', 'Tuần trước, nhóm đã hoàn thành giai đoạn một của việc cải tạo.', 'Mốc quá khứ → quá khứ đơn.'],
        ['We **are** now **installing** new lighting on the second floor.', 'Hiện chúng tôi đang lắp đèn mới ở tầng hai.', '`now` → hiện tại tiếp diễn.'],
        ['The work **will continue** until the end of the month.', 'Công việc sẽ tiếp tục đến cuối tháng.', 'Tương lai.'],
        ['We **have received** very few complaints so far.', 'Đến nay chúng tôi nhận được rất ít phàn nàn.', '`so far` → hiện tại hoàn thành.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Câu hỏi Part 7 về "điều gì đã xảy ra/sẽ xảy ra" phụ thuộc vào thì. Đánh dấu động từ trong văn bản theo ba nhóm: **đã xong** (quá khứ, hoàn thành), **đang diễn ra** (tiếp diễn), **sắp tới** (will, be going to, hiện tại đơn cho lịch).'
    },
    {
      t: 'passage',
      title: 'Thông báo chuyển văn phòng',
      kind: 'Memo',
      lines: [
        ['The accounting department **has moved** to the fifth floor.', 'Phòng kế toán đã chuyển lên tầng năm.', 'Đã xong, kết quả còn ở hiện tại.'],
        ['The IT team **will relocate** next Monday.', 'Nhóm IT sẽ chuyển vào thứ Hai tới.', 'Sắp tới.'],
        ['Until then, IT staff **are working** from Room 210.', 'Đến lúc đó, nhân viên IT đang làm việc tại phòng 210.', 'Tạm thời đang diễn ra.']
      ]
    }
  ],
  keyRules: [
    'Thì do cụm thời gian và ngữ cảnh quyết định.',
    'since/for/so far/recently/over the past → hiện tại hoàn thành.',
    'ago/last/yesterday/in + năm đã qua → quá khứ đơn.',
    'by + mốc tương lai → tương lai hoàn thành; by the time + quá khứ → quá khứ hoàn thành.',
    'Mệnh đề when/if/before/after/as soon as/once nói về tương lai dùng hiện tại đơn.',
    'Modal + V nguyên mẫu.',
    'Chủ ngữ số ít ngôi thứ ba + V(s/es) ở hiện tại đơn.'
  ],
  review: [
    'Che cột công thức trong bảng thì và tự nhớ lại.',
    'Ghi 10 cụm thời gian vào sổ tay kèm thì tương ứng.',
    'Đọc lại đoạn email Part 6 và gắn nhãn "đã xong/đang/sắp" cho từng động từ.'
  ],
  related: ['bai-8', 'bai-9', 'bai-15'],
  formulas: ['f-have-v3', 'f-modal-v', 'f-time-clause']
};

export const bai8: Lesson = {
  id: 'bai-8',
  code: 'Bài 8',
  order: 5,
  title: 'Động từ chia thì bị động',
  short: 'Thì bị động',
  summary: 'Cách tạo câu bị động ở mọi thì, khi nào dùng bị động và cách nhận ra chỗ trống cần bị động.',
  version: 1,
  goals: [
    'Tạo câu bị động: be (chia theo thì) + V3.',
    'Quyết định chủ động hay bị động dựa vào tân ngữ và nghĩa.',
    'Nhận biết bị động với modal và các cụm bị động + giới từ cố định.'
  ],
  prereq: ['Bài 7: các thì chủ động.'],
  sections: [
    {
      id: 'cong-thuc',
      title: 'Công thức bị động theo thì',
      blocks: [
        { t: 'formula', pattern: 'S + be + V3 (+ by O)', text: '`be` mang thì; V3 (quá khứ phân từ) mang nghĩa.', fid: 'f-be-v3' },
        {
          t: 'table',
          head: ['Thì', 'Bị động', 'Ví dụ'],
          rows: [
            ['Hiện tại đơn', 'am/is/are + V3', 'Reports **are reviewed** weekly.'],
            ['Hiện tại tiếp diễn', 'am/is/are being + V3', 'The lobby **is being painted**.'],
            ['Hiện tại hoàn thành', 'have/has been + V3', 'The order **has been shipped**.'],
            ['Quá khứ đơn', 'was/were + V3', 'The contract **was signed** yesterday.'],
            ['Quá khứ tiếp diễn', 'was/were being + V3', 'The road **was being repaired**.'],
            ['Quá khứ hoàn thành', 'had been + V3', 'The tickets **had been sold** out.'],
            ['Tương lai đơn', 'will be + V3', 'Winners **will be announced** Friday.'],
            ['Modal', 'modal + be + V3', 'Forms **must be submitted** online.']
          ]
        },
        { t: 'formula', pattern: 'modal + be + V3', text: 'Bị động với can/should/must/may/will.', fid: 'f-modal-be-v3' },
        { t: 'formula', pattern: 'have/has been + V3', text: 'Bị động hoàn thành.', fid: 'f-have-been-v3' }
      ]
    },
    {
      id: 'khi-nao',
      title: 'Khi nào dùng bị động?',
      blocks: [
        {
          t: 'list',
          items: [
            'Chủ ngữ **chịu** tác động của hành động (vật/việc được làm): `The packages were delivered.`',
            'Người thực hiện không quan trọng hoặc không rõ.',
            'Văn bản trang trọng: thông báo, quy định, chính sách.'
          ]
        },
        {
          t: 'note',
          tone: 'tip',
          title: 'Phép thử nhanh',
          text: 'Nếu động từ là **ngoại động** mà **sau chỗ trống không có tân ngữ** → khả năng cao là bị động. Nếu sau chỗ trống có tân ngữ (cụm danh từ) → chủ động.'
        },
        {
          t: 'note',
          tone: 'warn',
          title: 'Ngoại lệ',
          text: 'Nội động từ (arrive, occur, happen, rise, remain, expire) **không** có bị động. Một số động từ có hai tân ngữ (give, send, offer, award) vẫn có tân ngữ sau dạng bị động: `She was offered a position.`'
        }
      ]
    },
    {
      id: 'bi-dong-gioi-tu',
      title: 'Cụm bị động + giới từ hay gặp',
      blocks: [
        {
          t: 'table',
          head: ['Cụm', 'Nghĩa'],
          rows: [
            ['be required to V', 'được yêu cầu phải'],
            ['be expected to V', 'được dự kiến sẽ'],
            ['be scheduled to V / for + time', 'được lên lịch'],
            ['be located in/at', 'nằm ở'],
            ['be interested in', 'quan tâm'],
            ['be involved in', 'tham gia vào'],
            ['be committed to + N/V-ing', 'cam kết'],
            ['be based on', 'dựa trên'],
            ['be equipped with', 'được trang bị'],
            ['be satisfied with / pleased with', 'hài lòng với'],
            ['be entitled to', 'có quyền hưởng']
          ]
        }
      ]
    }
  ],
  signals: [
    'Trước chỗ trống có dạng của `be` (is/are/was/has been/will be) và sau chỗ trống **không có tân ngữ** → V3.',
    'Chủ ngữ là vật/việc (report, order, meeting, product) + động từ ngoại động → thường bị động.',
    'Có `by + người/tổ chức` sau chỗ trống → bị động.',
    '`being` + V3 → bị động tiếp diễn; `been` + V3 → bị động hoàn thành.',
    'Sau modal + be → V3.',
    'Cụm cố định be + V3 + giới từ (located in, based on, equipped with).'
  ],
  examples: [
    ['All visitors {are required|V} to sign in.', 'Tất cả khách đều phải đăng ký khi vào.', 'be required to V.'],
    ['The new branch {will be opened|V} in May.', 'Chi nhánh mới sẽ được khai trương vào tháng Năm.', 'Tương lai bị động: will be + V3.'],
    ['The conference room {is being renovated|V}.', 'Phòng hội nghị đang được cải tạo.', 'Bị động tiếp diễn: is being + V3.'],
    ['Your order {has been shipped|V}.', 'Đơn hàng của bạn đã được gửi đi.', 'Bị động hoàn thành: has been + V3.'],
    ['The awards {were presented|V} by the CEO.', 'Giải thưởng được trao bởi giám đốc điều hành.', 'Có `by + người` → bị động.'],
    ['Late payments {may be charged|V} a fee.', 'Thanh toán trễ có thể bị tính phí.', 'modal + be + V3 (động từ hai tân ngữ `charge`).'],
    ['The museum {is located|V} near the station.', 'Bảo tàng nằm gần nhà ga.', 'Cụm cố định be located near/in.'],
    ['Ms. Hall {was offered|V} the position of director.', 'Bà Hall được mời giữ chức giám đốc.', 'Động từ hai tân ngữ: sau bị động vẫn còn `the position`.'],
    ['The decision {was based|V} on customer feedback.', 'Quyết định được đưa ra dựa trên phản hồi của khách.', 'be based on.'],
    ['Each room {is equipped|V} with a projector.', 'Mỗi phòng được trang bị một máy chiếu.', 'be equipped with; chủ ngữ `Each room` số ít.'],
    ['The shipment {arrived|V} two days late.', 'Lô hàng đến trễ hai ngày.', '`arrive` là nội động từ → không có bị động.'],
    ['The files {had been deleted|V} before the backup ran.', 'Các tệp đã bị xóa trước khi sao lưu chạy.', 'Quá khứ hoàn thành bị động.']
  ],
  mistakes: {
    head: ['Lỗi', 'Sai', 'Đúng', 'Ghi chú'],
    rows: [
      ['Dùng V-ing thay V3', 'The report is reviewing by Ms. Ito.', 'The report is **reviewed** by Ms. Ito.', 'V-ing sau be là chủ động tiếp diễn.'],
      ['Bị động nội động từ', 'The problem was occurred.', 'The problem **occurred**.', 'occur không có tân ngữ.'],
      ['Thiếu be', 'The order shipped yesterday by DHL.', 'The order **was shipped** ... by DHL.', 'Khi có `by` tác nhân cần be + V3.'],
      ['Chủ động khi có tân ngữ', 'The manager was approved the plan.', 'The manager **approved** the plan.', 'Có tân ngữ `the plan` → chủ động.'],
      ['V3 bất quy tắc', 'was wrote', 'was **written**', 'write – wrote – written.']
    ]
  },
  part5: [
    ['The parking lot {will be closed|V} for repairs on Sunday.', 'Bãi đỗ xe sẽ đóng cửa để sửa chữa vào Chủ nhật.', 'Chủ ngữ là vật, không có tân ngữ sau động từ → bị động.'],
    ['Applications {must be received|V} by June 1.', 'Hồ sơ phải được nhận trước ngày 1/6.', 'modal + be + V3.'],
    ['The budget proposal {has been revised|V} twice.', 'Đề xuất ngân sách đã được chỉnh sửa hai lần.', 'Hoàn thành bị động.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Thông báo bảo trì',
      kind: 'Notice',
      lines: [
        ['The elevators in Building B **will be inspected** on Saturday.', 'Thang máy tòa B sẽ được kiểm tra vào thứ Bảy.', 'Tương lai bị động.'],
        ['During this time, tenants **are asked** to use the stairs.', 'Trong thời gian này, người thuê được đề nghị dùng cầu thang bộ.', 'be asked to V.'],
        ['Normal service **is expected** to resume by 3 P.M.', 'Dịch vụ dự kiến hoạt động lại trước 3 giờ chiều.', 'be expected to V.']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Thông báo, chính sách, hướng dẫn trong Part 7 dùng nhiều bị động. Khi đọc, hãy tự hỏi **"ai làm?"** – thường câu trả lời nằm ở cụm `by ...` hoặc ở câu khác trong văn bản.'
    },
    {
      t: 'passage',
      title: 'Chính sách hoàn tiền',
      kind: 'Policy',
      lines: [
        ['Refunds **are issued** within 10 business days.', 'Tiền hoàn được trả trong vòng 10 ngày làm việc.', 'Người thực hiện (công ty) không cần nêu.'],
        ['Items **must be returned** in their original packaging.', 'Hàng phải được trả lại kèm bao bì gốc.', 'Quy định → modal bị động.']
      ]
    }
  ],
  keyRules: [
    'Bị động = be (chia thì) + V3.',
    'Có tân ngữ sau động từ → chủ động; không có → cân nhắc bị động.',
    'Nội động từ (arrive, occur, rise, happen, expire) không có bị động.',
    'being + V3 = bị động tiếp diễn; been + V3 = bị động hoàn thành.',
    'modal + be + V3.',
    'Học thuộc cụm be required/expected/scheduled to V, be located in, be based on, be equipped with.'
  ],
  review: [
    'Viết lại bảng bị động theo 8 thì mà không nhìn.',
    'Đọc Bài 8.1 để xem phân tích từng bước.',
    'Lưu thẻ công thức "be + V3", "modal + be + V3".'
  ],
  related: ['bai-7', 'bai-8-1', 'bai-10'],
  formulas: ['f-be-v3', 'f-modal-be-v3', 'f-have-been-v3', 'f-be-being-v3', 'f-be-complement']
};

export const bai81: Lesson = {
  id: 'bai-8-1',
  code: 'Bài 8.1',
  order: 6,
  title: 'Phân tích ví dụ – Động từ chia thì bị động',
  short: 'Ví dụ bị động',
  summary:
    'Không phải bài kiểm tra: đây là chuỗi câu hoàn chỉnh được phân tích từng bước để thấy vì sao dùng bị động hay chủ động và chọn thì nào.',
  version: 1,
  goals: [
    'Áp dụng quy trình 3 bước: tìm chủ ngữ → kiểm tra tân ngữ → xác định thì.',
    'Phân biệt các dạng gần giống nhau: is reviewing / is reviewed / has reviewed / has been reviewed.'
  ],
  prereq: ['Bài 7, Bài 8.'],
  sections: [
    {
      id: 'quy-trinh',
      title: 'Quy trình 3 bước',
      blocks: [
        {
          t: 'list',
          ordered: true,
          items: [
            '**Tìm chủ ngữ thật** (bỏ qua cụm giới từ). Chủ ngữ là người làm hay vật bị tác động?',
            '**Nhìn sau động từ**: có tân ngữ (cụm danh từ) không? Có → chủ động. Không → nghĩ tới bị động (trừ nội động từ).',
            '**Xác định thì** từ cụm thời gian và ngữ cảnh, rồi chia `be` (bị động) hoặc động từ chính (chủ động).'
          ]
        }
      ]
    },
    {
      id: 'so-sanh-dang',
      title: 'So sánh bốn dạng dễ nhầm',
      blocks: [
        {
          t: 'table',
          head: ['Dạng', 'Thể', 'Nghĩa', 'Câu mẫu'],
          rows: [
            ['is reviewing', 'Chủ động tiếp diễn', 'đang xem xét (cái gì)', 'Mr. Kato **is reviewing** the budget.'],
            ['is reviewed', 'Bị động hiện tại đơn', 'được xem xét (thường xuyên)', 'The budget **is reviewed** every year.'],
            ['has reviewed', 'Chủ động hoàn thành', 'đã xem xét xong (cái gì)', 'Mr. Kato **has reviewed** the budget.'],
            ['has been reviewed', 'Bị động hoàn thành', 'đã được xem xét', 'The budget **has been reviewed**.'],
            ['is being reviewed', 'Bị động tiếp diễn', 'đang được xem xét', 'The budget **is being reviewed** now.']
          ]
        }
      ]
    },
    {
      id: 'phan-tich',
      title: 'Phân tích từng bước',
      blocks: [
        {
          t: 'passage',
          title: 'Câu 1',
          lines: [
            ['The quarterly report **was submitted** to the board on Monday.', 'Báo cáo quý đã được nộp lên hội đồng hôm thứ Hai.', 'B1: chủ ngữ `report` là vật. B2: sau động từ là `to the board` (cụm giới từ), không có tân ngữ → bị động. B3: `on Monday` (đã qua) → quá khứ: was + V3.']
          ]
        },
        {
          t: 'passage',
          title: 'Câu 2',
          lines: [
            ['Our technicians **have installed** new software on every computer.', 'Kỹ thuật viên của chúng tôi đã cài phần mềm mới trên mọi máy tính.', 'B1: chủ ngữ là người. B2: có tân ngữ `new software` → chủ động. B3: kết quả hiện tại, không có mốc → hiện tại hoàn thành.']
          ]
        },
        {
          t: 'passage',
          title: 'Câu 3',
          lines: [
            ['The main entrance **is being repainted**, so please use the side door.', 'Lối vào chính đang được sơn lại, vì vậy vui lòng dùng cửa bên.', 'B1: `entrance` là vật. B2: không tân ngữ → bị động. B3: việc đang diễn ra (vì thế mới phải dùng cửa bên) → is being + V3.']
          ]
        },
        {
          t: 'passage',
          title: 'Câu 4',
          lines: [
            ['The winners **will be notified** by e-mail next week.', 'Người thắng giải sẽ được thông báo qua email tuần sau.', 'B1: `winners` là người nhưng **nhận** thông báo. B2: không tân ngữ, có `by e-mail` → bị động. B3: `next week` → will be + V3.']
          ]
        },
        {
          t: 'passage',
          title: 'Câu 5',
          lines: [
            ['Prices **rose** by 3 percent after the new tax **was introduced**.', 'Giá tăng 3% sau khi thuế mới được áp dụng.', '`rise` nội động từ → chủ động. `tax` là vật được áp dụng → bị động quá khứ.']
          ]
        }
      ]
    }
  ],
  signals: [
    'Có cụm giới từ ngay sau chỗ trống (to, by, at, on) và không có cụm danh từ → nghĩ đến bị động.',
    'Có `being` trước chỗ trống → V3.',
    'Có `been` trước chỗ trống → V3 (bị động) hoặc V-ing (hiếm, hoàn thành tiếp diễn chủ động).',
    'Chủ ngữ là người nhưng nghĩa "được/bị" (được thông báo, được mời) → bị động.'
  ],
  examples: [
    ['The training session {was postponed|V} because of the storm.', 'Buổi đào tạo bị hoãn vì bão.', 'Chủ ngữ là sự việc, không tân ngữ, quá khứ → was + V3.'],
    ['Ms. Wong {postponed|V} the training session.', 'Bà Wong đã hoãn buổi đào tạo.', 'Chủ ngữ người, có tân ngữ → chủ động.'],
    ['New safety rules {have been introduced|V} this year.', 'Năm nay các quy định an toàn mới đã được đưa ra.', '`this year` (chưa kết thúc) + không tân ngữ → bị động hoàn thành.'],
    ['The manager {has introduced|V} new safety rules.', 'Quản lý đã đưa ra quy định an toàn mới.', 'Có tân ngữ → chủ động hoàn thành.'],
    ['The software update {is being tested|V} right now.', 'Bản cập nhật phần mềm đang được thử nghiệm.', '`right now` + vật → is being + V3.'],
    ['Engineers {are testing|V} the update right now.', 'Kỹ sư đang thử nghiệm bản cập nhật.', 'Chủ ngữ người + tân ngữ → chủ động tiếp diễn.'],
    ['All receipts {should be kept|V} for one year.', 'Mọi hóa đơn nên được giữ trong một năm.', 'modal + be + V3.'],
    ['The guests {were served|V} lunch at noon.', 'Khách được phục vụ bữa trưa lúc trưa.', '`serve` hai tân ngữ: sau bị động vẫn có `lunch`.'],
    ['The delay {occurred|V} because of a system error.', 'Sự chậm trễ xảy ra do lỗi hệ thống.', '`occur` nội động từ → không bị động.'],
    ['The office {will have been cleaned|V} by 8 A.M.', 'Văn phòng sẽ được dọn xong trước 8 giờ sáng.', 'by + mốc tương lai, vật bị tác động → tương lai hoàn thành bị động.']
  ],
  mistakes: {
    head: ['Câu sai', 'Câu đúng', 'Vì sao'],
    rows: [
      ['The invoice has sent.', 'The invoice **has been sent**.', 'Hóa đơn không tự gửi → bị động.'],
      ['We were received your letter.', 'We **received** your letter.', 'Có tân ngữ `your letter` → chủ động.'],
      ['The meeting is held now.', 'The meeting **is being held** now.', '`now` → tiếp diễn.'],
      ['The fee will be charge.', 'The fee will be **charged**.', 'Sau be cần V3.']
    ]
  },
  part5: [
    ['Refreshments {will be provided|V} during the break.', 'Đồ ăn nhẹ sẽ được phục vụ trong giờ nghỉ.', 'Vật + không tân ngữ + tương lai.'],
    ['The catering company {will provide|V} refreshments.', 'Công ty dịch vụ ăn uống sẽ cung cấp đồ ăn nhẹ.', 'Có tân ngữ → chủ động.']
  ],
  part6: [
    {
      t: 'passage',
      title: 'Email xác nhận đơn hàng',
      kind: 'Email',
      lines: [
        ['Your order #4417 **has been received** and **is being processed**.', 'Đơn hàng #4417 đã được nhận và đang được xử lý.', 'Hai bị động: hoàn thành + tiếp diễn.'],
        ['You **will receive** a tracking number once it **is shipped**.', 'Bạn sẽ nhận mã vận đơn khi hàng được gửi đi.', 'Chủ động (có tân ngữ) + bị động trong mệnh đề thời gian (hiện tại đơn).']
      ]
    }
  ],
  part7: [
    {
      t: 'p',
      text: 'Khi văn bản Part 7 chuyển từ bị động sang chủ động, thường là để **nêu rõ ai chịu trách nhiệm**: "Forms are collected by HR" → "HR collects the forms". Hai câu cùng nghĩa – nhận ra điều này giúp bạn khớp thông tin giữa văn bản và câu diễn đạt lại.'
    }
  ],
  keyRules: [
    'Bước 1 chủ ngữ – Bước 2 tân ngữ – Bước 3 thì.',
    'is V-ing (chủ động) ≠ is V3 (bị động) ≠ is being V3 (bị động tiếp diễn).',
    'has V3 (chủ động) ≠ has been V3 (bị động).',
    'Nội động từ không bao giờ bị động.',
    'Động từ hai tân ngữ ở bị động vẫn còn một tân ngữ.'
  ],
  review: [
    'Đọc to năm câu phân tích và tự nói lại 3 bước.',
    'Ghi vào sổ tay 5 cặp câu chủ động/bị động trong ngữ cảnh Unit bạn thích.'
  ],
  related: ['bai-8', 'bai-7', 'bai-9'],
  formulas: ['f-be-v3', 'f-be-being-v3', 'f-have-been-v3', 'f-modal-be-v3']
};
