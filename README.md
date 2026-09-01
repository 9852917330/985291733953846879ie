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
