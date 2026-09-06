# IELTS 9.0 — v66 (đợt 1)

## Thay đổi trong bản này
- Bỏ toàn bộ trường `author` / `source` khỏi dữ liệu và khỏi giao diện chi tiết. Thay bằng nhãn dạng đề (subtype).
- Bỏ mọi liên kết PDF nguồn và liên kết descriptor ngoài.
- Thêm 21 đề Writing Task 2 mới (2 bộ forecast 17/8–23/8 và 24/8–30/8) kèm bài mẫu band 8.0+ viết theo lối giản dị, chính xác: 4 đoạn, 260–290 từ, lập trường rõ ràng, từ vựng chính xác thay vì hoa mỹ.
- Chia lại đoạn cho các bài Task 2 bị dồn thành một khối văn bản.
- Đánh số lại toàn bộ `_displayNo` theo từng mục.
- Theme sáng: trắng + xanh dương (giữ nguyên). Theme tối: nền tối + xanh mint.
- Màu chủ đề và thanh điều hướng tự đổi theo theme, chữ trên nền accent dùng biến `--on-accent`.

## Triển khai GitHub Pages
1. Giải nén, ghi đè toàn bộ vào thư mục gốc repository.
2. Chờ Pages deploy.
3. Mở `index.html?v=65` và tải lại mạnh (hard reload) một lần.

## v66 — Đợt 1 viết lại
- Viết lại **20 bài Writing Task 2 dài nhất** (423–507 từ) theo lối giản dị, chính xác: 4 đoạn, 250–280 từ, lập trường rõ ràng ngay ở mở bài.
- Chuẩn hoá lại đề bài cho 8 mục vốn không đúng định dạng đề thi thật (ví dụ "What is the difference between traditional food and fast food?" → "In many countries, traditional home-cooked meals are being replaced by fast food. Why is this happening, and what effects does it have?").
- Gán lại chủ đề và dạng đề (subtype) cho 20 mục này.
- Mỗi bài kèm 4 cụm từ ăn điểm được in đậm trong bài và đối chiếu nghĩa tiếng Việt.
- Kiểm tra tự động: không còn bài Task 2 nào dưới 250 từ.
- Xem `CAN-VIET-LAI.md` để biết phần còn lại.

## v67 — Đợt 2 viết lại
- Viết lại **20 bài Task 2 tiếp theo** (391–422 từ → 250–270 từ), chuẩn 4–5 đoạn.
- Sửa thêm 2 bài lỗi: `#043` và `#070`. Bài `#070` có đoạn văn hỏng ký tự ("considerate- of' their situation") và nhiều lỗi ngữ pháp; cả hai đều thiếu bảng cụm từ và có tiêu đề chung chung ("Culture", "Education").
- Chuẩn hoá 9 đề bài về đúng định dạng đề thi thật.
- **Paraphrase**: rà soát 300 từ vựng + 128 mẫu logic. Dữ liệu sạch (không trùng lặp, không định nghĩa vòng, không thiếu trường). Đã thống nhất chính tả Anh-Anh cho 34 vị trí (behavior→behaviour, organize→organise, prioritize→prioritise…) để khớp với toàn bộ bài mẫu trong app.
- Đổi nhãn "Sort: PDF order" → "Sort: thứ tự mặc định" (đã bỏ PDF từ v65).
- Kiểm tra tự động: 0 bài Task 2 dưới 250 từ, 0 bài thiếu bảng cụm từ, 0 đề trùng nhau.

## v68 — Đợt 3 (hoàn tất nhóm A) + rà soát toàn bộ theo tiêu chí chấm IELTS
- Viết lại **24 bài Task 2 cuối cùng** trên 340 từ. Nhóm A hoàn tất.
- Viết lại `#080`: bài này có lỗi dấu phẩy thật ("cancelled so, students", "important to, their").
- **Rà soát toàn bộ 722 mục theo band descriptors**, sửa:
  - 61 chỗ chính tả Anh-Mỹ lẫn vào bài Anh-Anh (organize, behavior, defense, honored...).
  - 6 chỗ program → programme (chương trình TV/trao đổi; "computer program" giữ nguyên vì đúng Anh-Anh).
  - 2 lỗi comma splice thật trong Speaking Part 2 (however dùng sai sau dấu phẩy).
  - 1 lỗi hoà hợp đại từ: "employers... his or her business" → "their business".
  - 5 chỗ gạch nối bị PDF cắt rời (one- person, T- shirt, weight- loss, film- makers, up-to-the- minute).
  - 3 dấu nháy mồ côi trong đề bài.
  - 5 bài Task 2 chỉ có 2–3 đoạn → chia lại đủ 4–5 đoạn.
  - 5 bài có câu kết bị dính vào thân bài → tách thành đoạn kết riêng.
  - 7 dòng glossary trỏ tới cụm không còn trong bài → xoá; 2 mục thiếu glossary → bổ sung.
  - `#037` Task 1 chỉ 145 từ (dưới mức tối thiểu 150) → 170 từ, chỉ dùng số liệu đã có sẵn.
- Đã xác minh các cảnh báo còn lại đều là false positive: "laboratory/laboratories" và "computer program"
  là chính tả Anh-Anh đúng; "however + tính từ" và "thus + V-ing" không phải comma splice;
  "had had" là thì quá khứ hoàn thành đúng; thư tín kết bằng chữ ký nên không có dấu chấm cuối.

## v69 — Đợt 4 (Speaking Part 3)
- Viết lại **16 mục Part 3** ngắn nhất (45–89 từ → 103–165 từ), theo cấu trúc band 8:
  quan điểm → lý do → ví dụ/hệ quả → giới hạn của lập luận. Văn phong nói tự nhiên.
- Sửa lỗi hỏng từ trong `#085`: "consuming attention **unfewer** people set clear boundaries"
  → "unless people set firm boundaries". Đã quét toàn bộ 722 mục, không còn lỗi tương tự.
- Kiểm tra tự động: mọi mục Part 3 đều khớp số câu hỏi giữa đề và bài trả lời (Q/A/prompt),
  không mục nào thiếu glossary.
- **Đính chính**: cách lọc Part 3 ở các đợt trước dựa trên tổng số từ nên bỏ sót nhiều mục.
  Xem CAN-VIET-LAI.md để biết danh sách đo lại theo từ/câu hỏi.

## v70 — Đợt 5 (Speaking Part 3)
- Viết lại **20 mục Part 3 mỏng nhất** (38–42 từ/câu hỏi → 72–89 từ/câu hỏi).
  Mỗi câu trả lời theo cấu trúc band 8: trả lời thẳng → lý do → ví dụ cụ thể → giới hạn/ngoại lệ.
- Sửa lỗi trùng câu hỏi ở `#081`: mục này hỏi "How can regular exercise improve your health?"
  rồi ngay sau đó hỏi "What are the benefits of exercise?" — hai câu gần như giống hệt nhau.
  Đã đổi câu thứ hai thành "Should schools make sport compulsory?" và viết câu trả lời mới.
- Kiểm tra mới: đo **từng câu trả lời** thay vì trung bình cả mục, nên không còn câu nào
  bị lọt dưới ngưỡng khi các câu khác kéo trung bình lên. Đồng thời dò trùng câu hỏi trong cùng một mục.
- Xác minh: `#039` và `#044` bị báo trùng nhưng thực tế là câu hỏi khác nhau (chỉ trùng từ ngữ) — giữ nguyên.

## v71 — Đợt 6 (Speaking Part 3)
- Viết lại **20 mục Part 3** (42–45 từ/câu hỏi → 74–79 từ/câu hỏi), tổng 60 câu trả lời mới.
- Sửa câu hỏi hỏng ở `#016`: "Did you like to do more things at that age?" là câu tiếng Anh
  không mạch lạc và tham chiếu tới một đề Part 2 không tồn tại. Đã đổi thành
  "Do you think children today are encouraged to try new things?" và viết câu trả lời mới.
- Sửa 4 lỗi glossary do viết hoa đầu câu: cụm in đậm nằm ở đầu câu nên không khớp với
  dòng nghĩa tiếng Việt viết thường. Đã viết lại câu để cụm nằm giữa câu.
- **Siết tiêu chí lần hai**: chuẩn mới là câu trả lời yếu nhất trong mục phải ≥70 từ,
  thay vì trung bình cả mục. Lượt chạy đầu bắt được 21 câu lọt dưới ngưỡng mà cách đo
  trung bình sẽ bỏ qua. Đã viết bổ sung hết.

## v72 — Đợt 7 (Speaking Part 3)
- Viết lại **20 mục Part 3** có câu yếu nhất chỉ 25–38 từ. Tổng 58 câu trả lời mới.
- `#029` có 2 câu vốn đã đạt chuẩn (91 và 80 từ) và giọng văn nói rất tự nhiên
  ("the hustle and bustle", "I think it's a great idea") — **giữ nguyên**, chỉ viết lại câu giữa.
  Nguyên tắc: không sửa những gì đã tốt.
- Sửa 2 lỗi glossary do viết hoa đầu câu (giống lỗi đã gặp ở đợt 6).
- Lượt chạy đầu có 32 câu rơi vào khoảng 61–69 từ, lượt hai còn 4 câu ở đúng mốc 69.
  Đã nâng hết. Mọi câu trong 20 mục hiện đều ≥70 từ.

## v73 — Đợt 8 (HOÀN TẤT Speaking Part 3)
- 24 mục cuối. Cách làm khác các đợt trước: **không viết lại câu đã đạt chuẩn**.
  Nhiều mục có câu vốn đã tốt với giọng nói rất tự nhiên ("Well, there's no substitute for
  a good teacher", "Children love winning things"). Em chỉ **nối dài 43 câu còn thiếu**,
  giữ nguyên văn phong sẵn có của từng câu.
- Trong 24 mục này có 7 mục do chính em viết ở đợt 4, khi đó còn dùng tiêu chí trung bình
  nên vài câu lọt xuống 60–69 từ. Đã nâng nốt.
- Sửa lặp ý ở `#011`: phần nối thêm trùng ý "smaller gatherings" với câu gốc.
- **Kết quả: Speaking Part 3 hoàn tất — 96/96 mục, 254 câu, mọi câu ≥70 từ.**

## v74 — Đợt 9 (Speaking Part 2)
- Nối dài **12 mục Part 2** từ 158–186 từ lên 242–295 từ, đủ để nói trọn 2 phút.
  Giữ nguyên bài gốc, chỉ bổ sung phần trả lời đầy đủ hơn các gạch đầu dòng của đề.
- Cập nhật `outline` (dàn ý từ khóa) cho khớp với nội dung mới, bổ sung bảng cụm từ.
- Sửa **16 chỗ xuống dòng giữa câu** ở `#087` và `#041` — di chứng của việc trích xuất từ PDF.
- Bỏ câu kết yếu "That's all I want to talk about" ở `#087` (câu này cũng gây lỗi dính chữ
  "about.As" sau khi nối). Part 2 không nên kết bằng câu tuyên bố hết giờ.
- Rút gọn `#041` từ 302 xuống 295 từ; trên 300 từ là quá dài cho 2 phút.
- Đã kiểm tra: 185 mục có dấu xuống dòng đơn giữa đoạn, nhưng app tách đoạn theo `\n\n`
  nên dấu xuống dòng đơn hiển thị thành khoảng trắng — **không phải lỗi**, giữ nguyên.

## v75 — Đợt 10 (ĐỢT CUỐI)
- Viết lại **8 bài Task 2** cuối cùng. Đọc kỹ thì đây không chỉ là vấn đề văn phong:
  - `#193` **kết thúc bằng dấu phẩy giữa chừng** — bài bị cụt.
  - `#118` dùng sai thành ngữ: "at the mercy of the market" (nghĩa là bị thị trường
    thao túng, không phải do thị trường điều tiết) và "render more resistance to citizens" (vô nghĩa).
  - `#024` lập trường mâu thuẫn: đề hỏi chọn một bên, bài viết "I side with both of them".
    Còn thiếu dấu chấm sau "police force".
  - `#058` không có đoạn mở bài, vào thẳng phần lợi ích.
  - `#067` kết bằng "According to the above advantages" — sai ngữ pháp.
- `#053` vốn đã sạch và tốt → **giữ nguyên**, chỉ đổi câu kết cứng
  "For the reasons mentioned above" thành "In conclusion".
- Sửa nốt 4 chỗ `program` → `programme` (chương trình TV và chương trình trao đổi).
  Các chỗ `computer program` giữ nguyên vì đó là chính tả Anh-Anh đúng.
- **Toàn bộ 10 đợt hoàn tất.** Xem CAN-VIET-LAI.md để biết kết quả kiểm tra cuối cùng.

## v76 — Ghi chú số từ, làm sạch theme, rà soát nội dung
### Giao diện
- **Theme tối bỏ hết màu xanh dương và tím.** Ba nguồn gây lẫn màu:
  `.item-row{--topic:#2563eb}` (màu dự phòng xanh dương), bảng màu chủ đề dark còn lẫn
  xanh lơ `#67e8f9` và xanh lá `#34d399`, và huy hiệu Core Story dùng tím cứng `#7c3aed`.
  Nay theme tối chỉ còn xám đen + mint, theme sáng chỉ còn trắng + xanh dương.
- Thêm biến `--plate` cho nền ảnh biểu đồ, thay cho `#fff` cứng.
- Không còn màu nào khai báo ngoài 2 khối biến CSS.
### Ghi chú số từ
- Cuối mỗi bài hiện số từ kèm mốc chuẩn theo từng dạng (Task 2 ≥250, Task 1 ≥150, Part 2 ~2 phút).
- Dưới mốc thì nhãn đổi màu cảnh báo.
### Nội dung
- Xoá 2 mục trùng hoàn toàn cả đề lẫn bài (`#031`, `#114` cũ) — 722 còn 720 mục.
- Viết mới 4 bài Part 2 vốn dùng chung nội dung với mục khác dù đề khác nhau:
  thư quan trọng, cây quan trọng, câu chuyện ấn tượng, vận động viên ngưỡng mộ.
- Sửa dấu chấm đặt sai trong ngoặc: `(around 110.)` → `(around 110).`
- Sửa `e.g.,financial` → `e.g., financial` (2 chỗ).
- Sửa đề bài `#042` bị cụt giữa chừng và thiếu dấu đóng ngoặc.

## v77 — Rà soát định tính toàn bộ + làm sạch ảnh đề bài

Đợt này làm nốt việc mà `CAN-VIET-LAI.md` của v76 đã ghi là "không script hóa được, phải đọc thủ công":
đọc lại từng bài theo tiêu chí chấm band 8, và kiểm tra cả phần ảnh mà mọi script quét chữ trước đây
không nhìn thấy.

### Giao diện
- Gỡ hệ màu `PALETTES` trong app logic: trước đây mỗi chủ đề được gán 1 trong 6 mã màu cứng cho mỗi
  theme, tiêm vào DOM qua `style="--topic:…"`. Nay dùng thẳng `var(--accent)` và `var(--core-strong)`.
- Kiểm tra lại bằng cách tính sắc độ (hue) của từng mã màu còn lại: theme sáng chỉ có trắng và họ xanh
  dương (hue 211–223); theme tối chỉ có đen xám và họ mint (hue 159–171). Không còn sắc độ thứ ba nào.
- Hai mã màu cứng còn lại trong JS là giá trị `<meta name="theme-color">` — thẻ meta không nhận `var()`,
  và hai giá trị này trùng khớp chính xác với accent của hai theme.

### Ảnh đề bài (hạng mục mới, các đợt trước chưa kiểm)
- **41/75 ảnh có logo và dòng ghi nguồn của đơn vị phát hành in chìm trong ảnh.** Script quét chữ không
  thể phát hiện vì đây là điểm ảnh, không phải văn bản. Đã xoá sạch bằng cách che theo toạ độ chữ (OCR)
  kết hợp so khớp mẫu ảnh. Kiểm tra lại: 0 ảnh còn sót.
- **30 ảnh bị lộ bài mẫu**: ảnh chụp từ trang gốc kèm luôn bài giải và bảng từ vựng phía dưới biểu đồ,
  nghĩa là người học nhìn thấy đáp án ngay trong ảnh đề. Đã cắt bỏ phần này.
- **5 ảnh hỏng dữ liệu** (giải mã ra nhiễu, không đọc được biểu đồ): `#007`, `#013`, `#035`, `#048`,
  `#067`. Đã dựng lại từ đúng những con số mà chính bài mẫu của mục đó đã nêu.
- Giữ nguyên các dòng ghi nguồn dữ liệu hợp lệ nằm trong biểu đồ gốc (ví dụ "Source: The Department
  for Transport, UK") — đây là một phần của đề thi thật, không phải watermark.

### Lỗi dữ liệu phát hiện được
- `writing-academic-047`: tiêu đề và đề bài nói về lượng nước tiêu thụ toàn cầu, nhưng cả ảnh lẫn bài
  mẫu đều là biểu đồ giá dầu và giá lương thực — đồng thời trùng đề với `#034`. Đã sửa phần mô tả cho
  khớp ảnh và bài viết.
- `writing-academic-063`: số liệu cuộc gọi cấp cứu gán nhầm nước. Đối chiếu với biểu đồ gốc trong ảnh:
  France dao động quanh 110, Japan quanh 90 — bài viết đang ghi ngược.
- `writing-task-2-176`: dòng tóm tắt ghi "A Negative Development" trong khi bài lập luận rằng đây là
  thay đổi tích cực.

### Độ dài và cấu trúc
- Task 2: 250–337 từ, 4–5 đoạn (214/214 đạt). Task 1: ≥150 từ (98/98). Part 2: 207–334 từ (222/222).
  Part 3: mọi câu trả lời ≥70 từ (96/96).
- Task 1 Academic: sửa lỗi cấu trúc phổ biến nhất trong mục này — thiếu câu diễn giải đề, hoặc câu tổng
  quan bị đẩy xuống cuối bài thay vì đứng ngay sau phần mở.

### Chất lượng lập luận
Đọc lại và sửa **501 mục**:

| Mục | Đã sửa / Tổng | Lỗi thường gặp nhất |
|---|---|---|
| Writing Academic | 41/69 | Câu tổng quan lạc chỗ; thiếu đoạn diễn giải đề |
| Writing Task 2 | 61/214 | Đoạn cuối nhắc lại ý cũ thay vì thêm ý mới |
| Speaking Part 2 | 220/222 | Văn viết chứ không phải văn nói |
| Speaking Part 1 & 3 | 171/186 | Không dùng dạng rút gọn; trả lời chưa đủ 4 tầng |
| Writing General | 8/29 | Lặp thừa, sai đại từ |
| Paraphrase | 10/428 | Chính tả Anh-Anh; câu diễn giải làm sai ý gốc |

### Kiểm tra cuối
- Toàn bộ 720 mục: 0 lỗi số từ, 0 lỗi số đoạn, 0 lỗi kết bài, 0 lệch bảng cụm từ, 0 bài trùng,
  0 lỗi chính tả, 0 ngoặc lệch, 0 tên nguồn/tác giả (cả trong chữ lẫn trong ảnh).
- Test dựng giao diện headless (jsdom): 18/18 hạng mục đạt, 0 lỗi console — bao gồm dựng danh sách cả
  6 mục, mở bài chi tiết, hiện ảnh biểu đồ, nhãn đếm từ, đổi theme hai chiều, tìm kiếm lọc danh sách,
  và hai trang paraphrase.

### Triển khai
Giải nén ghi đè vào thư mục gốc repository, chờ Pages deploy, mở `index.html?v=77` và tải lại mạnh
(hard reload) một lần.

## v78 — Bổ sung 58 đề Writing Task 2 từ bộ forecast

Đối chiếu 121 đề trong 13 tuần forecast (01/6 – 06/9) với ngân hàng 214 đề đang có:

- **25 đề đã có sẵn** dưới cách diễn đạt khác (ví dụ "studying abroad", "museums entertain vs
  educate", "spread of English", "high salaries", "women in the army").
- **Hai tuần 17/8–23/8 và 24/8–30/8 đã có đủ** từ bản v66 (mục `#195`–`#214`).
- **4 đề bị lặp lại giữa các tuần** trong chính bộ forecast.
- **58 đề còn lại chưa có** → đã viết mới, thành mục `#215`–`#272`.

Writing Task 2 nay có **272 bài**.

### Chuẩn áp dụng cho 58 bài mới
Giống hệt phần còn lại của ngân hàng, kiểm bằng script trước khi ghép vào:
250–340 từ (thực tế 259–297), đúng 5 đoạn, lập trường rõ ngay mở bài, đoạn kết thật sự nằm cuối bài,
4–5 cụm từ ăn điểm khớp hai chiều với bảng từ vựng, chính tả Anh-Anh, không dùng dạng rút gọn,
không dùng từ nối hoa mỹ (*moreover, furthermore, whilst, notwithstanding*) và không dùng khung
liệt kê rỗng (*Firstly… Secondly…*). Mỗi bài cũng được đối chiếu với toàn bộ 214 bài cũ **và với
nhau** để loại trùng ý.

### Tra cứu
`FORECAST-COVERAGE.md` là bảng đối chiếu từng tuần: mỗi đề forecast trỏ tới số hiệu bài mẫu tương
ứng trong app. Đối chiếu đủ **121/121 đề**.

### Kiểm tra
- Quét toàn bộ 778 mục: 0 lỗi số từ, 0 lỗi số đoạn, 0 lỗi kết bài, 0 lệch bảng cụm từ, 0 bài trùng,
  0 lỗi chính tả, 0 lỗi gõ, 0 ngoặc lệch, 0 tên nguồn/tác giả.
- Test dựng giao diện headless: 18/18 đạt, 0 lỗi console, danh sách Writing Task 2 dựng đủ 272 dòng.

### Triển khai
Giải nén ghi đè vào thư mục gốc repository, mở `index.html?v=78` và tải lại mạnh một lần.

## v79 — Rà soát độ trong sáng của câu chữ

Đợt cuối này đo trước rồi mới sửa, thay vì đọc lại mù toàn bộ. Bốn phép đo được chạy trên cả 778 mục:
độ dài câu và mật độ mệnh đề phụ, mật độ danh từ hoá (`-tion`, `-ment`, `-ity`…), mức độ có ví dụ cụ
thể để bám vào, và mức độ tự nhiên của văn nói (dạng rút gọn, từ ngữ thuộc văn viết).

### Kết quả đo — phần lớn ngân hàng đã đạt
- **Văn nói rất chắc.** Trung vị 2,1–2,4 dạng rút gọn trên 100 từ; **0 mục** thiếu hẳn dạng rút gọn.
  Câu dài trong Part 2 (dài nhất 69 từ) đã kiểm bằng mắt: đó là câu nối bằng *and* theo trình tự kể
  chuyện — **tự nhiên khi nói**, không phải lỗi, nên giữ nguyên.
- **Khung liệt kê rỗng gần như không còn**: chỉ 3 trường hợp ba danh từ trừu tượng liên tiếp trong
  370 bài viết, và cả ba đều có nghĩa thật (*"Discussion, argument and cooperation"*).
- **Trừu tượng có chỗ bám**: trung vị 0% số câu mở đầu bằng danh từ trừu tượng; chỉ 1 bài vượt 30%,
  và đọc kỹ thì bài đó vẫn có lập luận và ví dụ cụ thể.
- **Câu dài trong văn viết phần lớn hợp lệ**: chúng chạy trên trục dấu hai chấm hoặc chấm phẩy nên
  vẫn dễ theo. Đa số câu bị máy gắn cờ nằm ở Task 1 — mô tả số liệu thì câu dài là đúng cách.

### Đã sửa (22 chỗ)
- **13 từ nối bị brief cấm hoặc quá sách vở**: 10 × *furthermore*, 1 × *moreover*, 1 × *thereby*,
  1 × *thus*. Sửa bằng cách viết lại câu để mạch nối nằm trong ngữ pháp, chứ không thay bằng một từ
  nối khác. Quét lại: **0 từ còn sót**.
- **4 câu thật sự lê thê** (`#053`, `#055`, `#102`, `#132`) — đều là kiểu nối các mệnh đề độc lập
  bằng *and* thay vì có trục rõ. Đã tách tại khớp tự nhiên. Câu dài nhất trong Task 2 giảm từ
  **68 xuống 54 từ**.
- **3 từ thuộc văn viết lọt vào bài nói**: *pivotal* → *a turning point*, *detrimental impact on the
  environment* → *real damage to the environment*, *a substantial toll* → *a heavy toll* (đúng
  collocation hơn). Bảng cụm từ cập nhật theo.
- **2 bài dùng lặp cùng một từ chuyển ý** (`#079`, `#264`) → đổi một trong hai.

### Kiểm tra cuối
Toàn bộ 778 mục: 0 lỗi số từ, 0 lỗi số đoạn, 0 lỗi kết bài, 0 lệch bảng cụm từ, 0 bài trùng,
0 lỗi chính tả, 0 lỗi gõ, 0 ngoặc lệch, 0 tên nguồn/tác giả, 0 từ nối bị cấm, 0 bài lặp từ chuyển ý.
Test dựng giao diện: 18/18 đạt, 0 lỗi console.

### Triển khai
Giải nén ghi đè vào thư mục gốc repository, mở `index.html?v=79` và tải lại mạnh một lần.

## v80 — Sửa triệt để ảnh vỡ và kiểm tra khớp đề / ảnh / bài

### Ảnh vỡ: soi mắt toàn bộ 75 ảnh
Đợt v77 chỉ soi phần đáy từng ảnh nên **bỏ sót**: 5 ảnh vỡ ở giữa khung vẫn lọt qua. Đợt này thử hai
bộ dò tự động — dò theo ám màu và dò theo mất cạnh sắc — **cả hai đều vừa báo nhầm vừa bỏ sót** (ảnh
matplotlib nhiều màu bị báo nhầm; vệt vỡ màu xám thì lọt). Nên chuyển sang cách chắc chắn: dựng
contact sheet cho **cả 75 ảnh** và soi từng cái.

Kết quả: **đúng 5 ảnh còn vỡ** — `#004`, `#029`, `#039`, `#064`, `#068` — trùng khớp 5 ảnh người dùng
báo. Cộng 5 ảnh đã sửa ở v77, tổng cộng 10/75 ảnh gốc bị hỏng dữ liệu.

Cả 5 đã dựng lại từ số liệu mà chính bài mẫu của mục đó nêu ra:
- `#004` hai biểu đồ cột thay đổi giá nhà 1990–1995 và 1995–2000 ở năm thành phố
- `#029` sơ đồ khuôn viên trường 2004 và quy hoạch 2024
- `#039` bảng phát thải CO₂ từ giao thông ở ba nước
- `#064` hai biểu đồ người lớn và trẻ em béo phì ở Anh
- `#068` bảng dân số Mỹ theo nhóm sắc tộc và biểu đồ tăng dân số theo thập kỷ

Với `#039` và `#068`, bài mẫu nêu tổng và một vài dòng cụ thể nhưng không nêu đủ mọi ô. Các ô còn lại
được dựng sao cho **thoả mãn mọi con số bài mẫu đã nêu**, và bài mẫu không hề nhắc tới chúng riêng lẻ.
Đây là bản dựng lại, không phải số liệu gốc.

### Khớp đề / ảnh / bài
- Thử đối chiếu **số liệu trong bài với số đọc từ ảnh** — không dùng được: OCR đọc tiêu đề tốt nhưng
  nát phần số, đến mức ảnh do chính mình dựng từ bài cũng bị chấm 0%.
- Đổi sang đối chiếu **chủ đề của đề bài với chữ in trong ảnh**. Trung vị trùng khớp **100%**; các mục
  điểm thấp đều chỉ khác từ ngữ (`overweight` / `obese`, `Britain` / `UK`), không phải lệch nội dung.
  Lỗi gắn nhầm đề duy nhất (`#047`) đã sửa ở v77 và không còn mục nào tương tự.
- **`#051`: bài viết nói "seven problems" nhưng chỉ nêu tên và số liệu cho năm.** Đã sửa con số trong
  bài thành "five" — không bịa thêm hai dòng số liệu vào bảng để hợp thức hoá.
- Đối chiếu **tiêu đề + tóm tắt với đề bài** trên cả 778 mục: trung vị 0,75. Phát hiện `#087` bị gắn
  nhãn chủ đề **Education** trong khi đề hỏi vì sao người ta đi du lịch nhiều hơn → sửa thành
  **Tourism**.
- **24 tóm tắt Task 2 viết hoa kiểu tiêu đề** (`House vs. Apartment: Space Wins Despite Higher Costs`)
  trong khi 248 mục còn lại dùng chữ thường mô tả đề. Đã viết lại cả 24 cho thống nhất, đối chiếu với
  đề bài từng mục khi viết.

### Dấu vết nguồn còn sót
Tìm thấy logo **"Focus and Superfocus"** ở `#037` mà đợt v77 bỏ qua vì chữ bị cắt cụt nên OCR không đọc
được. Đã khớp mẫu ảnh trên cả 75 ảnh và che. Quét lại: **0 dấu vết nguồn**.

### Kiểm tra
Toàn bộ 778 mục: 0 lỗi số từ / số đoạn / kết bài / bảng cụm từ / trùng lặp / chính tả / lỗi gõ /
ngoặc / tên nguồn / từ nối bị cấm. 75/75 ảnh sạch và đọc được. Test dựng giao diện 18/18, 0 lỗi console.

### Triển khai
Giải nén ghi đè vào thư mục gốc repository, mở `index.html?v=80` và tải lại mạnh một lần.

---

# v81 — bổ sung đề từ 7 trang tổng hợp đề thi

## Việc đã làm

### Quét đề
Đọc toàn bộ 7 trang tổng hợp đề thi anh đưa và lấy **289 đề Writing Task 2** (kèm ngày thi):

| Trang | Số đề |
|---|---|
| dolenglish.vn | 81 |
| onthiielts.com.vn | 106 |
| zim.vn (2026) | 27 |
| zim.vn (2025) | 25 |
| talkfirst.vn | 20 |
| ielts-fighter.com | 17 |
| ieltscity.vn | 13 |

Facebook group vẫn không truy cập được (`ROBOTS_DISALLOWED`) — không có cách nào lấy được nội dung
trong đó, và không thử đi vòng bằng công cụ khác.

### Loại trùng
Các trang đăng lại lẫn nhau, nên cùng một đề xuất hiện nhiều lần dưới nhiều ngày và nhiều cách diễn đạt.
Quy trình lọc gồm hai bước:

1. **Gộp trùng trong chính 289 đề** — so khớp theo từ nội dung (bỏ từ chức năng và phần hướng dẫn đề bài).
2. **Đối chiếu với 272 bài Task 2 đang có** — tự động lọc trước, sau đó **đọc tay từng đề trong ngân hàng**
   để quyết định. Máy chỉ dùng để khoanh vùng, không dùng để kết luận: nhiều cặp máy chấm điểm thấp lại là
   cùng một đề (`#046`, `#148`, `#114`), và nhiều cặp máy chấm cao lại khác dạng câu hỏi.

Kết quả: **108 đề thực sự mới**, còn lại đã có bài trong app.

### Viết bài mới
108 bài band 8.5, đánh số **#273–#380**, cùng phong cách đang dùng: câu ngắn, từ thông dụng nhưng chính xác,
mỗi đoạn một ý, không dùng từ nối rườm rà, không có khung "Firstly / Secondly".

Mỗi bài đều qua bộ kiểm trước khi ghép:

- 277–323 từ, 5 đoạn
- Nêu rõ lập trường ngay đoạn mở
- Kết bài có tổng kết thật, không mở bằng cụm bị cấm
- Bảng cụm từ khớp **hai chiều tuyệt đối** với các cụm in đậm trong bài
- Chính tả Anh-Anh
- Không viết tắt kiểu nói (`don't`, `it's`)
- Không trùng quá 50% từ nội dung với bất kỳ bài nào đã có, và không trùng lẫn nhau

Toàn bộ 108/108 bài qua bộ kiểm.

### Một chỗ hổng tự phát hiện
Khi dựng bảng đối chiếu cuối cùng, phát hiện đề **"Professional workers like doctors, nurses and teachers
… should be paid more than sports and entertainment personalities"** đã bị lọt trong lúc chốt danh sách —
không có bài nào trong app trả lời được đề này. Đã viết bổ sung thành `#380`.

### Bảng đối chiếu
`SITE-COVERAGE.md` liệt kê **cả 289 đề theo từng trang và từng ngày thi**, kèm số hiệu bài mẫu trong app.
289/289 đề đều có bài mẫu; 108/108 bài mới đều được ít nhất một đề thi thật dẫn tới.

### Sửa công cụ kiểm tra
- `validate.js` — bộ bắt "không rõ lập trường" bỏ sót các cách nêu quan điểm như *my own view is*,
  *I regard*, *the disadvantages outweigh*, và bắt nhầm cả dạng đề hỏi nguyên nhân/giải pháp (vốn không
  cần lập trường). Đã mở rộng và loại trừ các dạng đề đó → còn 24 cảnh báo, tất cả đã đọc và xác nhận là
  báo nhầm.
- `render-test.js` — thêm một phép thử: trước đây chỉ kiểm tra ô tìm kiếm có **lọc sạch** danh sách khi gõ
  chuỗi vô nghĩa, nay kiểm tra thêm rằng gõ từ có thật thì **ra đúng số bài** (`380 → 5`).

# v82 — sửa lỗi đánh số và xác định lại cụm từ ăn điểm

## Lỗi đánh số: bốn lỗi, không phải một

Anh Điền gửi ảnh chụp danh sách Writing Task 2: các dòng đọc là `#080 EDUCATION`, `#081 EDUCATION`,
… `#152 EDUCATION`, `#195 EDUCATION` — trông giống hệt nhau, số nhảy cóc trong cùng một chủ đề.

Truy ngược nguyên nhân, đó là **bốn lỗi độc lập chồng lên nhau**:

**1. Giao diện in tên chủ đề vào từng dòng.** `data/app-logic.js` dòng 174:

```js
b.innerHTML = `<span class="no">${esc(x._displayNo)}</span><span class="topic">${esc(g.topic)}</span>`;
```

`g.topic` là tên chủ đề của **cả nhóm**, nên mọi bài trong nhóm hiện đúng một chữ giống nhau. Nay:

```js
const head = document.createElement('div'); head.className = 'group-head';
head.innerHTML = `<span class="group-name">${esc(g.topic)}</span><span class="group-count">${g.items.length}</span>`;
// ... và mỗi dòng:
b.innerHTML = `<span class="no">${esc(x._displayNo)}</span><span class="item-title">${esc(cleanText(x.title))}</span>`;
```

Tên chủ đề lên **tiêu đề nhóm** (kèm số bài), mỗi dòng hiện **tên bài của chính nó**.

**2. 407 mục chưa có tên bài.** Vì giao diện chưa bao giờ đọc trường `title`, nhiều mục để trống hoặc
lấy luôn tên chủ đề làm tên. Đã viết tên riêng cho đủ **407 mục**: 202 Speaking Part 2, 96 Part 3,
90 Part 1, 19 Task 2 trống, 72 Task 2 lấy tên chủ đề, 24 mục trùng nhãn chủ đề cũ. Số mục "tên bài
chỉ là tên chủ đề" nay là **0**, và `render-test.js` có phép kiểm giữ nguyên trạng thái đó.

**3. Nhãn chủ đề bị vụn.** Task 2 có **49 nhãn** cho cùng một tập chủ đề — "Media" / "News & Media" /
"The Media" là ba nhãn khác nhau, nên một chủ đề bị tách thành mấy khối rời rạc và số nhìn như nhảy
cóc. Đã gộp còn **27 nhãn**. Academic có 21 mục nhãn "General" và 21 mục nhãn "Culture" (không nói lên
điều gì) → thay bằng **16 nhãn theo nội dung biểu đồ**.

**4. Số thứ tự chạy theo thứ tự nhập liệu.** `_displayNo` được gán khi nhập dữ liệu, không theo thứ tự
hiển thị. `scripts/renumber.js` sắp lại theo (chủ đề, số cũ), gán `#001..#n`, rồi **xếp lại mảng dữ
liệu theo đúng thứ tự đó** — giao diện không cần tự sắp nữa, nên thứ tự nhìn thấy luôn khớp với số.
Core Stories giữ nguyên nhãn `CORE nn`. Bảng tra số cũ → số mới: `data/renumber-map.json`.

Hai bảng `SITE-COVERAGE.md` và `FORECAST-COVERAGE.md` trước đây tham chiếu theo số `#NNN`, nên sẽ hỏng
khi đánh số lại. Đã đổi 86 + 18 tham chiếu sang **id cố định của mục** trước khi đánh số, và cả hai
bảng sinh lại đúng (288/289 và 121/121).

## Bài trùng: đã gỡ 5 bài

Bộ dò trùng cũ dùng hệ số Jaccard, bỏ sót các cặp mà một đề viết ngắn một đề viết dài (ví dụ đề bảo
tàng `#033` và `#035`). Đổi sang **hệ số chồng lấn** (overlap coefficient) ở ngưỡng 0.78; riêng
Part 2 chỉ so **dòng đề trước "You should say"** vì phần sau là khung câu dùng chung.

Kết quả: **4 bài Task 2 và 1 bài Academic** hỏi đúng cùng một câu → đã gỡ. Một cặp Part 1 trùng đề đã
được **viết lại** thay vì gỡ. 55 cặp còn lại bị báo là dương tính giả, đã đọc tay từng cặp.

## Cụm từ ăn điểm: xác định lại toàn bộ phần Writing

Câu hỏi cần trả lời: một cụm được in đậm có thật sự là ngôn ngữ band cao không? Dựng
`scripts/audit-phrases.py` chấm mỗi cụm theo **tần suất Zipf** (thang `wordfreq`) của từ nội dung
**hiếm nhất** trong cụm — Zipf cao nghĩa là từ quá thông dụng — kèm hai chỉ báo phụ:

- `promptEcho`: tỷ lệ từ trong cụm lấy nguyên văn từ đề bài;
- `comparisonFrame`: cụm có phải **khung so sánh số liệu** của Task 1 không ("nearly three times as
  high as", "just over", "respectively") — loại này toàn từ thông dụng nhưng đúng là cấu trúc ăn điểm,
  nên phải loại trừ, nếu không bộ chấm sẽ báo nhầm hàng loạt.

Bộ chấm chỉ ra đúng chỗ hỏng:

- `by contrast` được in đậm ở **27 bài** như thể là cụm ăn điểm;
- `the figure for` ở 8 bài, `a peak of` ở 6 bài;
- **24 cụm** lặp ở từ 3 bài trở lên;
- rất nhiều mục in đậm **danh từ chủ đề lấy thẳng từ đề** — "air pollution", "economic growth",
  "cultural diversity", "academic achievement". Đó là chủ đề của bài, không phải cụm ăn điểm.

Đã thay bằng ngôn ngữ lập luận / mô tả số liệu **của chính bài đó**, vốn nằm sẵn trong cùng đoạn văn
mà không được đánh dấu — ví dụ thay `cultural diversity` bằng *"see foreign lifestyles as more modern
or attractive than their own"*, thay `economic growth` bằng *"a country's standing on the global
stage"*.

Công cụ áp dụng `scripts/apply-phrase-fixes.js` chỉ ghi file **sau khi mọi thay đổi đều hợp lệ**:
cụm bị gỡ đúng là cụm đang in đậm và có trong bảng giải nghĩa; cụm mới xuất hiện **đúng một lần** và
không chồng lên vùng in đậm khác; mỗi bài còn **≥3 cụm**; bảng giải nghĩa khớp hai chiều với chữ in
đậm. Một lỗi thật đã bị bắt theo cách này: cụm `does not appear to justify such a substantial
increase` không tồn tại — thư viết `my circumstances **do not** appear…`; công cụ dừng trước khi ghi,
không hỏng dữ liệu.

Đã rà **186 mục Task 2** (16 đợt), 9 đợt Academic, 2 đợt General:

| Chỉ số | Trước | Sau |
|---|---|---|
| Cụm lặp ở ≥3 bài Writing | 24 | **0** |
| Cụm lặp ở đúng 2 bài | — | 9 (đều hợp lệ: mẫu câu thư GT, động từ mô tả xu hướng Task 1) |
| Cụm toàn từ cực thông dụng | 77 | **14** |
| Cụm chép lại từ ngữ của đề | 14 | **5** |

14 cụm còn lại trong nhóm "toàn từ thông dụng" là thành ngữ thật, giữ có chủ đích: *get on really
well*, *make yourself at home*, *no one to call on*, *set the whole field back many years*, *has
nothing in common with them*. Đây là chỗ mà chỉ số Zipf sai và người đọc đúng — thành ngữ hay nhất
tiếng Anh thường ghép từ những từ thông dụng nhất.

Tổng: **2.121 cụm in đậm trên 473 mục Writing**, khớp hai chiều 100%.

## Giao diện danh sách

- `.list { column-width: 330px; column-gap: 22px }` — chia cột trên màn rộng, **1 cột trên điện thoại**.
- Thêm `.group-head` / `.group-name` / `.group-count` cho tiêu đề nhóm chủ đề.
- `.item-title` dùng `var(--text)`, `.no` dùng `var(--accent)` — vẫn đúng hai màu, không thêm màu thứ ba.
# v83–v84 — gộp Speaking Practice vào app

Trang luyện nói (bản rời tên SpeakSharp) nay là **mục thứ 7 của app**, đặt ngay sau Speaking Part 3.
Không còn file rời, không còn service worker riêng, không còn nút Install riêng.

## Cách gộp: dữ liệu tách khỏi engine, engine tách khỏi router

Bản rời là một file `index.html` 2.770 dòng: ngân hàng câu hỏi, engine ghi âm và markup nằm chung
một IIFE chạy đúng một lần lúc tải trang. App IELTS 9.0 thì là SPA — `route()` **render lại `#app`
mỗi lần đổi hash**. Nhét nguyên IIFE vào đó thì lần chuyển trang thứ hai là hỏng: handler trỏ vào
DOM đã bị xoá, mic vẫn mở, `setInterval` vẫn chạy sau lưng trang khác.

Nên tách làm ba:

| File | Nội dung |
|---|---|
| `data/speaking-practice-data.js` | `window.SPEAKING_PRACTICE` — 1.000 câu hỏi + 40 chủ đề, thuần dữ liệu |
| `data/speaking-practice.js` | `window.SPEAKING_PRACTICE_UI` — engine, chỉ lộ ra `mount(el)` và `unmount()` |
| `data/app-logic.js` | thêm `['speaking-practice','Speaking Practice']` vào `PAGES` và một nhánh trong `route()` |

`route()` gọi `unmount()` **ở dòng đầu tiên, mọi lần chuyển trang** — kể cả khi sang trang khác:

```js
function route(){
  window.SPEAKING_PRACTICE_UI?.unmount();
  const h=(location.hash||'#home').slice(1); const [section,id]=h.split('/');
  ...
  if(section==='speaking-practice'){renderPracticePage();return}
}
```

`unmount()` tắt track micro, `clearInterval` đồng hồ, dừng `MediaRecorder` nếu đang chạy, và
`URL.revokeObjectURL` bản ghi. Có một phép kiểm riêng cho đúng việc này: mount → rời trang → mount
lại phải sạch.

`inject.js` nay **nhận diện script block theo dấu hiệu chứ không theo vị trí**, nên build chạy đúng
dù `index.html` đã có hay chưa có hai block mới. Cả hai block được nhúng thẳng vào `index.html` như
`IELTS_DATA` và `IELTS_VISUALS`, không thêm file phải tải riêng — app vẫn là một file chạy offline.

## Đồng bộ giao diện: gỡ sạch hệ màu và font của bản rời

Bản rời là nền đen `#080a0a` + xanh neon `#00ff99`, kèm đỏ `#ff5964` cho trạng thái ghi âm và vàng
`#ffc85a` cho dòng dẫn chứng — bốn màu, trong khi app chỉ được có hai.

| Bản rời | Sau khi gộp |
|---|---|
| `--accent:#00ff99` | `var(--accent)` — xanh dương ở theme sáng, mint ở theme tối |
| `--danger:#ff5964` cho nút đang ghi | `var(--accent)` + **chấm tròn biến thành hình vuông** + vòng nhấp nháy. Đổi hình, không đổi màu |
| `--warn:#ffc85a` cho dòng dẫn chứng | `var(--muted)` + in nghiêng |
| `--panel` / `--panel2` | `var(--surface)` / `var(--soft)` |
| Font Poppins tải từ Google Fonts | Bỏ hẳn — font hệ thống, offline vẫn đúng |
| `.practice-screen{height:100dvh}` + `body{overflow:hidden}` | Trang cuộn bình thường, `.sp-main` giống `.study-main` |
| `.prompt` `.empty` `.topic` `.brand` `.count` | Đổi hết sang tiền tố `sp-` — app đã dùng những tên này cho việc khác, để nguyên là đè lên nhau |

`scripts/audit-colours.js` kiểm lại bằng cách đổi từng mã màu sang HSL: theme sáng chỉ được nằm
trong dải hue xanh dương, theme tối chỉ trong dải mint, và **ngoài hai khối token thì không rule nào
được mang sắc độ** — vì rule ở đó phục vụ cả hai theme, một mã màu cứng là rò một theme sang theme
kia. Kết quả: 21 màu, 0 màu lạc, 0 font ngoài.

## Một lỗi thật đã bắt được khi soi ảnh chụp

`.sp-recorded` đặt `display:grid`, `.sp-controls` đặt `display:flex` — cả hai **đè lên rule mặc định
của trình duyệt cho `[hidden]`**, nên panel phát lại hiện ra ngay khi mở trang dù chưa thu gì. Test
cũ không bắt được vì nó chỉ kiểm thuộc tính `hidden`, không kiểm `computed style`. Đã thêm
`.sp-main [hidden]{display:none!important}` và một phép kiểm mới đọc `getComputedStyle`.

## v84 — sắp lại vùng điều khiển theo tần suất bấm

Bố cục cũ để bốn nút chế độ tự xuống dòng, nên "Thought → Speech" rơi xuống một hàng riêng và cả cụm
trông lệch. Nút **API key** thì nằm chung hàng với các nút thao tác dù cả đời chỉ bấm một lần.

Nguyên tắc sắp lại: **xếp theo tần suất bấm, cái bấm nhiều nhất nằm xa bên phải** (tay phải với tới
mà không phải rướn).

| Nút | Tần suất | Chỗ mới |
|---|---|---|
| **Đề khác** | mỗi câu một lần — nhiều nhất | Sát mép phải, rộng nhất hàng (149px ở 390px) |
| Đồng hồ | thỉnh thoảng | Bên trái nút Đề khác |
| IELTS part | hiếm | Bên trái đồng hồ, chỉ hiện ở chế độ IELTS |
| 4 nút chế độ | thỉnh thoảng | Hàng riêng phía trên, chia 4 cột đều nhau |
| **API key** | **một lần duy nhất** | Lên khu tiêu đề trang, cạnh các pill thống kê |

Tên nút rút gọn cho vừa 4 cột: `Topics → Chủ đề`, `Thought → Speech → Phản xạ`. Nhãn đồng hồ bỏ mũi
tên và chữ thừa: `30 giây ↓ → 30s`, `Tự do ↑ → Tự do`.

Trên điện thoại `.sp-modes` chuyển từ `flex-wrap` sang **grid 4 cột đều nhau** — không bao giờ xuống
dòng nữa, bất kể tên nút dài bao nhiêu. Dưới 420px thì ẩn ký hiệu, chỉ còn chữ.

### Kiểm bằng đo đạc thật, không bằng mắt

jsdom không có bộ dựng layout nên không đo được chuyện xuống dòng. Thêm `scripts/layout-speaking.js`
mở Chromium ở **8 khổ màn hình** (320 → 1440px), bật sẵn chế độ IELTS vì đó là trường hợp chật nhất
(3 control cùng hàng), rồi đo:

- mọi nút trong một hàng phải cùng `offsetTop` — **đúng một dòng**;
- trang **không được cuộn ngang**;
- nút Đề khác phải là control cuối cùng và **cách mép phải 0px**;
- ô tap nhỏ nhất **≥32px**;
- chữ trong `<select>` **không được chạy xuống dưới mũi tên dropdown** — đo bằng cách dựng một span
  ẩn cùng font, so bề rộng chữ với bề rộng lòng ô.

Phép kiểm cuối bắt được một lỗi thật: ở 390px chữ "Part 1" bị mũi tên đè thành "Part ]". Đã nới
`padding-right` của select trên mobile.

Kết quả: **8/8 khổ màn hình đạt.**
## Kiểm tra

Ngoài 21 hạng mục jsdom cũ, v83 thêm 7 hạng mục cho trang mới, và thêm một bộ kiểm chạy thật:

`scripts/e2e-speaking.js` mở Chromium với **mic giả** (`--use-fake-device-for-media-stream`), ghi âm
thật qua `MediaRecorder`, dừng, giải mã bằng `AudioContext`, chạy bộ đo im lặng/ngắt dài, rồi chấm
với `fetch` thay bằng phản hồi Gemini mẫu. Kiểm nút đổi trạng thái, đồng hồ chạy, 4 chỉ số cục bộ,
nguồn phát lại, 8 ô điểm, 9 khối nhận xét, transcript, bản band 9, và lịch sử tăng đúng một dòng.

| Hạng mục | Kết quả |
|---|---|
| Số từ / số đoạn / kết bài | 0 lỗi |
| Bảng cụm từ khớp hai chiều | 0 lỗi (4.379/4.379) |
| Trùng lặp giữa các bài | 0 |
| Chính tả, lỗi gõ, ngoặc, tên nguồn | 0 |
| Trường dữ liệu trống | 0 |
| Đánh số hiển thị chạy 1..n | 0 lỗi |
| Ngân hàng Speaking Practice | 1.000 câu, 0 câu trùng |
| Hai màu + không font ngoài | PASS |
| Ghi âm → đo → chấm (Chromium, mic giả) | PASS, 0 lỗi trang |
| Test dựng giao diện | **28/28**, 0 lỗi console |

Tổng số mục: **881** (Task 2: 376 · Academic: 68 · General: 29 · Part 1: 90 · Part 2: 222 · Part 3: 96)
cộng **1.000 câu** trong Speaking Practice.

## Ghi thẳng: ngân hàng câu hỏi luyện nói thiếu đa dạng

0 câu trùng trong 1.000 câu, nhưng phần lớn sinh từ khuôn:

| Bộ | Số câu | Dạng câu thật sự khác nhau |
|---|---|---|
| Random / Topics | 400 | **10 khuôn × 40 chủ đề** |
| IELTS Part 1 | 150 | **5 khuôn × 30 chủ đề** |
| IELTS Part 3 | 150 | **5 khuôn × 30 chủ đề** |
| IELTS Part 2 | 100 | 57 kiểu mở đầu — ổn |
| Thought → Speech | 200 | 112 kiểu mở đầu — ổn |

Mở chủ đề nào cũng thấy đúng 10 câu đó, chỉ thay danh từ. Luyện lâu thành quen khuôn chứ không phải
quen phản xạ. Chưa sửa vì lần này chỉ yêu cầu gộp trang.

## Triển khai
Giải nén ghi đè vào thư mục gốc repository, mở `index.html?v=84` và tải lại mạnh một lần.
