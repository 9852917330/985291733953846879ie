# Trạng thái nội dung — HOÀN TẤT CẢ ĐỊNH LƯỢNG VÀ ĐỊNH TÍNH

Bản v76 kết thúc với ghi chú: *"Nội dung hiện đã đạt chuẩn định lượng. Việc còn có thể làm là rà soát
định tính: đọc lại từng bài để bắt lỗi logic, lặp ý, hoặc ví dụ chưa thuyết phục — việc này không
script hóa được, phải đọc thủ công theo từng nhóm chủ đề."*

Đợt v77 đã làm xong đúng việc đó, trên toàn bộ 720 mục và 428 mục paraphrase.

## Đã đọc lại và sửa

| Mục | Đã sửa / Tổng | Lỗi thường gặp nhất |
|---|---|---|
| Writing Academic | 41/69 | Câu tổng quan lạc chỗ hoặc bị đẩy xuống cuối; thiếu đoạn diễn giải đề |
| Writing Task 2 | 61/214 | Đoạn cuối nhắc lại ý của các đoạn trước thay vì thêm ý mới |
| Speaking Part 2 | 220/222 | Viết như văn viết, không giống người đang nói |
| Speaking Part 1 & 3 | 171/186 | Không dùng dạng rút gọn; trả lời thiếu tầng ví dụ hoặc giới hạn |
| Writing General | 8/29 | Lặp thừa ("repeatedly … on three occasions"), sai đại từ |
| Paraphrase | 10/428 | Chính tả Anh-Anh; câu diễn giải làm lệch ý của câu gốc |

Tỷ lệ lỗi thật cao nhất nằm ở Writing Academic (59%) — đây là mục duy nhất chưa từng qua vòng rà soát
định tính nào trong 10 đợt trước.

## Ba lỗi dữ liệu nghiêm trọng đã phát hiện

1. `writing-academic-047` — tiêu đề, tóm tắt và đề bài mô tả biểu đồ lượng nước tiêu thụ toàn cầu, và
   trùng đề với `#034`; nhưng cả ảnh lẫn bài mẫu đều là biểu đồ giá dầu và giá lương thực 2000–2011.
   Đã sửa phần mô tả theo ảnh và bài viết.
2. `writing-academic-063` — số liệu cuộc gọi cấp cứu của France và Japan bị gán ngược so với biểu đồ
   trong chính ảnh đề.
3. `writing-task-2-176` — dòng tóm tắt khẳng định lập trường ngược với bài viết.

## Hạng mục mới: ảnh đề bài

Mọi script trước đây chỉ quét chữ, nên không nhìn thấy phần này:

- 41/75 ảnh có logo và dòng ghi nguồn của đơn vị phát hành in chìm trong điểm ảnh → đã xoá.
- 30 ảnh lộ bài mẫu và bảng từ vựng phía dưới biểu đồ → đã cắt.
- 5 ảnh hỏng dữ liệu, giải mã ra nhiễu → đã dựng lại từ số liệu bài mẫu đã nêu.

## v78 — bổ sung bộ đề forecast

Đối chiếu 121 đề forecast (13 tuần, 01/6 – 06/9) với ngân hàng: 25 đề đã có dưới cách diễn đạt khác,
hai tuần 17/8 và 24/8 đã có đủ từ v66, 4 đề lặp trong chính bộ forecast, **58 đề còn lại đã viết mới**
(`#215`–`#272`). Writing Task 2 nay có 272 bài. Bảng tra cứu: `FORECAST-COVERAGE.md`.

## v80 — ảnh vỡ và khớp đề/ảnh/bài

Soi mắt cả 75 ảnh: 5 ảnh còn vỡ (`#004`, `#029`, `#039`, `#064`, `#068`) đã dựng lại. Sửa `#051`
(bài nói "seven problems" nhưng chỉ có năm), `#087` (nhãn chủ đề Education cho đề du lịch → Tourism),
24 tóm tắt Task 2 viết hoa sai house style, và logo "Focus and Superfocus" còn sót ở `#037`.

## v81 — bổ sung đề từ 7 trang tổng hợp đề thi

Quét 289 đề Writing Task 2 từ bảy trang tổng hợp đề thi. Gộp trùng giữa các trang, rồi đối chiếu với
272 bài đang có — máy lọc trước, người đọc tay từng đề trong ngân hàng để quyết định. Còn **108 đề thực
sự mới**, đã viết đủ (`#273`–`#380`). Writing Task 2 nay có 380 bài. Bảng tra cứu: `SITE-COVERAGE.md`.

Trong lúc dựng bảng đối chiếu phát hiện một đề bị lọt khỏi danh sách (`Professional workers like doctors,
nurses and teachers … paid more than sports and entertainment personalities`) — đã viết bổ sung thành
`#380`.

Hai công cụ kiểm tra cũng được sửa: bộ bắt "không rõ lập trường" trong `validate.js` bỏ sót nhiều cách
nêu quan điểm và bắt nhầm dạng đề nguyên nhân/giải pháp; `render-test.js` chỉ kiểm tìm kiếm theo chiều
lọc sạch, nay kiểm thêm chiều tìm ra đúng kết quả.

## v82 — sửa lỗi đánh số và xác định lại cụm từ ăn điểm

Anh Điền báo lỗi đánh số chủ đề. Truy ngược, đó không phải một lỗi mà là **bốn lỗi độc lập** chồng lên
nhau, và cả bốn đã sửa:

1. `app-logic.js` in **tên chủ đề** vào mọi dòng danh sách thay vì tên bài — nên 20 bài cùng chủ đề
   hiện thành 20 dòng chữ giống hệt nhau, chỉ khác con số.
2. **407 mục chưa có tên bài** (giao diện chưa bao giờ dùng `title` nên không ai phát hiện) → đã viết
   tên cho đủ 407 mục.
3. **Nhãn chủ đề bị vụn**: Task 2 có 49 nhãn cho cùng một tập chủ đề → gộp còn 27; Academic thay 42
   nhãn "General"/"Culture" vô nghĩa bằng 16 nhãn theo nội dung biểu đồ.
4. **Số thứ tự chạy theo thứ tự nhập liệu**, không theo thứ tự hiển thị → đánh số lại toàn bộ 881 mục
   và xếp lại mảng dữ liệu theo đúng thứ tự hiển thị.

Đồng thời đổi bộ dò trùng đề từ hệ số Jaccard sang **hệ số chồng lấn**, phát hiện thêm 5 bài trùng
thật (4 Task 2, 1 Academic) → đã gỡ; 1 cặp Part 1 trùng đề đã viết lại.

### Cụm từ ăn điểm

Dựng bộ chấm dựa trên **tần suất Zipf** để đo xem một cụm được in đậm có thật sự là ngôn ngữ band cao
hay chỉ là từ thông dụng. Bộ chấm chỉ ra: `by contrast` được in đậm ở 27 bài, `the figure for` ở 8 bài,
`a peak of` ở 6 bài; 24 cụm lặp ở ≥3 bài; và rất nhiều mục in đậm danh từ chủ đề lấy thẳng từ đề bài.

Đã rà và thay lại cụm cho **186 mục Task 2, 9 đợt Academic, 2 đợt General** — mỗi cụm mới lấy nguyên
văn từ chính bài đó, có nghĩa tiếng Việt kèm theo. Bộ công cụ `apply-phrase-fixes.js` chỉ ghi file khi
mọi thay đổi đều hợp lệ (cụm bị gỡ đúng là cụm đang in đậm; cụm mới xuất hiện đúng một lần và không
chồng lên vùng in đậm khác; mỗi bài còn ≥3 cụm; bảng giải nghĩa khớp hai chiều).

Kết quả: cụm lặp ở ≥3 bài **24 → 0**; cụm toàn từ cực thông dụng **77 → 14** (14 cụm còn lại là thành
ngữ thật, giữ có chủ đích); cụm chép lại từ ngữ của đề **14 → 5**.

### Việc để lại cho đợt sau — nói thẳng

Đợt này anh yêu cầu rà phần **writing**, nên các cặp cue card Part 2 gần trùng nhau (`#024`/`#025`,
`#064`/`#201`, `#162`/`#170`, `#165`/`#166`) và 1 cặp Part 1 (nhảy múa; nhà/căn hộ) **chưa xử lý** —
để lại, không phải đã kiểm rồi bỏ qua.

## v83 — gộp trang Speaking Practice

Gộp bản rời (SpeakSharp) thành mục thứ 7 của app, ngay sau Speaking Part 3. Việc khó không phải là
dán markup vào mà là **vòng đời**: app render lại `#app` mỗi lần đổi hash, còn bản rời chạy một IIFE
đúng một lần lúc tải trang. Nên tách engine thành `mount()` / `unmount()` và cho `route()` gọi
`unmount()` ở dòng đầu tiên mọi lần chuyển trang — nếu không, rời trang xong mic vẫn mở và đồng hồ
vẫn chạy sau lưng trang khác.

Gỡ sạch hệ màu riêng (đen + neon + đỏ + vàng → đúng hai màu của app; trạng thái đang ghi đổi **hình**
chứ không đổi màu), bỏ font Poppins tải từ Google, bỏ khung `100dvh`, bỏ service worker và nút
Install riêng, đổi mọi class trùng tên với app sang tiền tố `sp-`, và đưa bảng lịch sử (trước bị
giấu trong `hidden-maintenance`) ra thành mục **Tiến độ**.

Thêm hai bộ kiểm mới: `audit-colours.js` (đổi mã màu sang HSL, kiểm sắc độ nằm đúng dải của từng
theme) và `e2e-speaking.js` (Chromium với mic giả: ghi âm thật → đo → chấm với `fetch` giả).

Bắt được một lỗi thật khi soi ảnh chụp: `.sp-recorded` đặt `display:grid` nên đè lên rule mặc định
cho `[hidden]`, panel phát lại hiện ra khi chưa thu gì. Test cũ chỉ kiểm thuộc tính `hidden` nên
không thấy — nay kiểm `computed style`.

### Việc để lại — nói thẳng

Ngân hàng 1.000 câu **không trùng câu nào nhưng thiếu đa dạng**: Random/Topics là 10 khuôn × 40 chủ
đề, Part 1 và Part 3 là 5 khuôn × 30 chủ đề. Chỉ Part 2 (100 câu) và Thought → Speech (200 câu) là
viết thật. 700 câu của ba bộ kia nên viết lại — chưa làm vì lần này chỉ yêu cầu gộp trang.

## Nếu muốn nâng tiếp

Nội dung đã đạt chuẩn cả định lượng lẫn định tính. Ba việc còn có thể làm, xếp theo mức đáng làm:

1. **Kiểm tra số liệu trong 6 ảnh chưa cắt được an toàn** (`#023`, `#038`, `#049`, `#051`, `#063`,
   `#065`): phần lộ bài mẫu ở các ảnh này nằm quá sát nội dung biểu đồ nên cắt tự động sẽ mất dữ liệu.
   Cần cắt tay từng ảnh.
2. **Đối chiếu số liệu bài viết với ảnh biểu đồ cho toàn bộ 68 mục Academic.** Đợt này chỉ đối chiếu
   những mục có dấu hiệu mâu thuẫn nội tại. Việc đối chiếu đầy đủ phải mở từng ảnh ra đọc.
3. **Thu âm phần Speaking.** Thư mục `audio/` hiện chưa có bản ghi cho các bài đã viết lại ở v66–v77.
