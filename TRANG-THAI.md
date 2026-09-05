# Trạng thái nội dung — v83

## Kiểm tra tự động

| Hạng mục | Số lượng | Tiêu chuẩn | Kết quả |
|---|---|---|---|
| Writing Task 2 | 376 | 250–340 từ, 4–5 đoạn | ✅ 376/376 (250–337 từ) |
| Writing Task 1 | 97 | ≥150 từ | ✅ 97/97 (thấp nhất 158) |
| Speaking Part 2 | 222 | ≥190 từ | ✅ 222/222 (208–339 từ) |
| Speaking Part 3 | 96 | mọi câu trả lời ≥70 từ | ✅ 96/96 |
| Bảng cụm từ | 4.379 | khớp hai chiều với chữ in đậm | ✅ 4.379/4.379 |
| Bài trùng lặp | — | 0 cặp trùng >50% | ✅ 0 (đã gỡ 5 bài trùng, xem bên dưới) |
| Kết bài | — | có, và nằm ở đoạn cuối | ✅ 0 lỗi |
| Chính tả Anh-Anh | — | thống nhất | ✅ 0 lỗi |
| Lỗi gõ / ngoặc đơn | — | — | ✅ 0 lỗi |
| Tên nguồn / tác giả | — | không xuất hiện ở đâu | ✅ 0 (cả trong chữ **và trong ảnh**) |
| Từ nối bị cấm | — | moreover / furthermore / whilst / notwithstanding | ✅ 0 |
| Lặp từ chuyển ý trong một bài | — | — | ✅ 0 |
| Đánh số hiển thị | 881 mục | chạy 1..n đúng thứ tự nhìn thấy | ✅ 0 lỗi |
| Ngân hàng Speaking Practice | 1.000 câu | không trùng câu nào | ✅ 0 câu trùng |

## Test dựng giao diện (jsdom)

**28/28 hạng mục đạt, 0 lỗi console.** v82 thêm hai phép kiểm về đánh số; v83 thêm bảy phép kiểm cho
trang Speaking Practice:

- *"Dòng danh sách hiện tên bài, không phải tên chủ đề"* — kiểm có tiêu đề nhóm, mọi dòng có tên
  riêng, không dòng nào trùng tên nhau và không dòng nào lấy tên chủ đề làm tiêu đề.
- *"Số thứ tự chạy 1..n theo đúng thứ tự hiển thị"* — đi hết 5 mục, kiểm số liền mạch từ trên xuống.
- Speaking Practice **nằm đúng ngay sau Speaking Part 3** trong thanh điều hướng, đúng nhãn.
- Trang **mount được**: đủ 1.000 câu, 4 chế độ, 40 thẻ chủ đề, có sẵn đề và nút ghi âm.
- **Đổi chế độ là đổi đề**; riêng IELTS Part 2 phải kèm cue card và tự đặt đồng hồ 2 phút.
- **Bấm 1 câu trong chủ đề thì đúng câu đó hiện ra** ở khung luyện, và ô tìm chủ đề lọc đúng.
- **Rời trang là dọn sạch**: mic tắt, đồng hồ dừng, mount lại vẫn sạch (router render lại `#app`
  mỗi lần chuyển trang, nếu không dọn thì mic vẫn chạy ngầm sau lưng trang khác).
- **Panel đang ẩn phải thật sự ẩn**: kiểm `computed style`, không chỉ kiểm thuộc tính `hidden`.
- **Trang không mang màu riêng**: quét CSS của trang, không được có một mã màu cứng nào, không
  được nạp font ngoài.

Thêm hai bộ kiểm ngoài jsdom:

- `scripts/audit-colours.js` — đổi mọi mã màu trong stylesheet sang HSL và kiểm sắc độ: theme sáng
  chỉ được nằm trong dải xanh dương, theme tối chỉ trong dải mint, ngoài hai khối token thì không
  rule nào được mang sắc độ. **Đạt: 21 màu, 0 màu lạc, 0 font ngoài.**
- `scripts/e2e-speaking.js` — chạy Chromium với **mic giả**, ghi âm thật qua `MediaRecorder`, dừng,
  giải mã, đo chỉ số, rồi chấm với `fetch` được thay bằng phản hồi mẫu. Kiểm nút đổi trạng thái,
  đồng hồ chạy, 4 chỉ số cục bộ hiện ra, có nguồn phát lại, 8 ô điểm, 9 khối nhận xét, transcript,
  bản band 9, và lịch sử tăng đúng 1 dòng. **Đạt, 0 lỗi trang.**

## v83 — gộp Speaking Practice vào app

Trang **Speaking Practice** (bản rời tên SpeakSharp) nay là một mục trong `index.html`, **nằm ngay
sau Speaking Part 3**. Không còn file rời, không còn service worker riêng, không còn nút cài đặt
riêng — dùng chung vỏ app, chung theme, chung cơ chế cập nhật.

**Nội dung mang sang:** 1.000 câu hỏi (400 Random dùng chung cho 40 chủ đề · 200 Thought → Speech ·
150 Part 1 · 100 Part 2 có cue card · 150 Part 3), ghi âm bằng `MediaRecorder`, đo phản xạ / ngắt dài
/ tỷ lệ im lặng **ngay trên máy**, và chấm bằng Gemini theo 8 tiêu chí (4 tiêu chí IELTS + 4 tiêu chí
giao tiếp), kèm transcript, điểm mạnh, lỗi cần sửa, bản viết lại và bản mẫu band 9.

**Những gì bị gỡ hoặc viết lại khi gộp:**

| Của bản rời | Sau khi gộp |
|---|---|
| Bảng màu riêng: nền đen `#080a0a`, xanh neon `#00ff99`, đỏ `#ff5964`, vàng `#ffc85a` | Dùng đúng hai màu của app. Trạng thái **đang ghi** trước dùng màu đỏ, nay dùng accent + chấm tròn biến thành hình vuông + vòng nhấp nháy — đổi hình, không đổi màu |
| Font Poppins tải từ Google Fonts | Bỏ hẳn, dùng font hệ thống của app (offline vẫn chạy) |
| Khung `100dvh`, khoá `overflow:hidden` trên `body` | Trang cuộn bình thường như mọi trang khác |
| Service worker + nút Install riêng | Dùng của app |
| Bảng lịch sử bị giấu trong `hidden-maintenance` | Đưa ra thành mục **Tiến độ** ở cuối trang (số lượt, band TB, điểm TB, phản xạ TB) |
| `encodeWav16()` — hàm chết, không ai gọi | Bỏ |
| Chạy một lần lúc tải trang | Thành `mount()` / `unmount()`: rời trang là **tắt mic, dừng đồng hồ, thu hồi object URL** |
| Class `.prompt`, `.empty`, `.topic`, `.brand`, `.count` | Đổi hết sang tiền tố `sp-` vì app đã dùng những tên đó cho việc khác |

**Chữ trên giao diện đã dịch sang tiếng Việt**, riêng câu hỏi luyện tập giữ nguyên tiếng Anh. Prompt
gửi cho Gemini giữ nguyên tiếng Anh và được thêm một dòng: **dùng chính tả Anh-Anh**, cho khớp
phần còn lại của app.

**Dữ liệu cũ không theo sang.** Khoá lưu vẫn giữ nguyên tên (`speaksharp_history_v1`,
`speaksharp_gemini_api_key_v1`) nhưng bản rời nằm ở domain khác, nên lịch sử và API key bên đó
không sang được. Vào trang mới phải nhập lại API key một lần.

### Ghi thẳng: ngân hàng câu hỏi có vấn đề về độ đa dạng

Không trùng câu nào (0/1.000), nhưng phần lớn được sinh từ khuôn:

| Bộ | Số câu | Số dạng câu thật sự khác nhau |
|---|---|---|
| Random / Topics | 400 | **10 khuôn × 40 chủ đề** |
| IELTS Part 1 | 150 | **5 khuôn × 30 chủ đề** |
| IELTS Part 3 | 150 | **5 khuôn × 30 chủ đề** |
| IELTS Part 2 | 100 | 57 kiểu mở đầu khác nhau — ổn |
| Thought → Speech | 200 | 112 kiểu mở đầu khác nhau — ổn |

Nghĩa là mở chủ đề "Daily routines" hay "Music" ra thì 10 câu y hệt nhau, chỉ thay danh từ. Luyện
lâu sẽ quen khuôn chứ không quen phản xạ. Part 2 và Thought → Speech thì không bị. **Tao chưa sửa
vì mày chỉ yêu cầu gộp trang** — cần thì nói, tao viết lại 700 câu của ba bộ kia.

## v82 — sửa lỗi đánh số và rà soát lại cụm từ ăn điểm

### Lỗi đánh số: bốn lỗi độc lập, đã sửa cả bốn

Triệu chứng anh thấy — các dòng giống hệt nhau, số nhảy cóc trong cùng một chủ đề — thực ra là bốn
lỗi chồng lên nhau:

1. **Bộ dựng giao diện in tên chủ đề vào từng dòng.** `app-logic.js` dòng 174 cũ render
   `<span class="topic">${g.topic}</span>` cho mọi mục, nên 20 bài EDUCATION hiện thành 20 dòng chữ
   "EDUCATION" giống nhau. Nay tên chủ đề nằm ở **tiêu đề nhóm** (kèm số lượng bài), còn mỗi dòng
   hiện **tên bài của chính nó**.
2. **407 mục không có tên riêng.** Vì giao diện chưa bao giờ dùng đến `title`, nhiều mục để trống
   hoặc lấy luôn tên chủ đề. Đã viết tên cho cả 407 mục (202 Speaking Part 2, 96 Part 3, 90 Part 1,
   19 Task 2 còn trống, 72 Task 2 lấy tên chủ đề làm tên bài, 24 mục có tên trùng nhãn chủ đề cũ).
   Số mục "tên bài chỉ là tên chủ đề" nay là **0**.
3. **Từ vựng chủ đề bị vụn.** Task 2 có 49 nhãn chủ đề, nhiều nhãn chỉ khác nhau cách gọi
   ("Media" / "News & Media" / "The Media") nên một chủ đề bị tách thành mấy khối rời — số nhìn như
   nhảy cóc. Gộp còn **27 nhãn**. Academic thay 21 nhãn "General" + 21 nhãn "Culture" vô nghĩa bằng
   **16 nhãn theo nội dung biểu đồ**.
4. **Số thứ tự chạy theo thứ tự nhập liệu, không theo thứ tự hiển thị.** Đã đánh số lại toàn bộ:
   sắp theo (chủ đề, số cũ), gán `#001..#n`, rồi **xếp lại mảng dữ liệu theo đúng thứ tự đó** để
   giao diện không cần tự sắp. Bộ Core Stories giữ nguyên nhãn `CORE nn`.

Bảng tra số cũ → số mới nằm ở `renumber-map.json` (trong bộ mã nguồn).

### Bài trùng: đã gỡ 5 bài

Bộ dò trùng đề cũ dùng hệ số Jaccard nên bỏ sót các cặp mà một đề viết ngắn, một đề viết dài. Đổi
sang **hệ số chồng lấn (overlap coefficient)**, riêng Part 2 chỉ so dòng đề trước "You should say".
Kết quả: **4 bài Task 2 và 1 bài Academic** hỏi đúng cùng một câu → đã gỡ. Một cặp Part 1 trùng đề đã
được **viết lại** thay vì gỡ. 55 cặp còn bị báo là dương tính giả, đã đọc tay từng cặp.

### Cụm từ ăn điểm: đã xác định lại toàn bộ phần Writing

Dựng bộ chấm điểm cụm từ dựa trên **tần suất Zipf** của từ nội dung hiếm nhất trong cụm (thang
`wordfreq`), kèm hai chỉ báo phụ: cụm có lặp lại nguyên văn từ ngữ của đề không, và cụm có phải là
**khung so sánh số liệu** của Task 1 không (ví dụ "nearly three times as high as" — toàn từ thông
dụng nhưng đúng là cấu trúc ăn điểm).

Bộ chấm chỉ ra đúng chỗ hỏng:

- `by contrast` được in đậm ở **27 bài** như thể là cụm ăn điểm;
- `the figure for` ở 8 bài, `a peak of` ở 6 bài;
- **24 cụm** lặp ở từ 3 bài trở lên;
- rất nhiều mục in đậm **danh từ chủ đề lấy thẳng từ đề** ("air pollution", "economic growth",
  "cultural diversity", "academic achievement") — không phải cụm ăn điểm, chỉ là chủ đề của bài.

Đã thay bằng ngôn ngữ lập luận / mô tả số liệu **của chính bài đó**, vốn nằm sẵn trong cùng đoạn văn
mà không được đánh dấu. Sau khi sửa:

| Chỉ số | Trước | Sau |
|---|---|---|
| Cụm lặp ở ≥3 bài Writing | 24 | **0** |
| Cụm lặp ở đúng 2 bài | — | 9 (đều hợp lệ: mẫu câu thư GT và động từ mô tả xu hướng Task 1) |
| Cụm toàn từ cực thông dụng | 77 | **14** (đều là thành ngữ thật: *get on really well*, *make yourself at home*, *call on*, *set back*, *have nothing in common with*) |
| Cụm chép lại từ ngữ của đề | 14 | **5** (đều là diễn giải hợp lệ, không phải chép) |

Tổng cộng **2.121 cụm in đậm trên 473 mục Writing**, khớp hai chiều 100% với bảng giải nghĩa.

## Giao diện

- **Theme sáng**: trắng `#fff` + xanh dương `#1565c0`.
- **Theme tối**: xám đen `#0b1311` + mint `#5eead4`.
- Đã kiểm bằng cách tính sắc độ từng mã màu trong stylesheet: theme sáng chỉ có trắng và họ xanh dương
  (hue 211–223), theme tối chỉ có đen xám và họ mint (hue 159–171). **Không có sắc độ thứ ba nào.**
- Danh sách nay chia cột (`column-width: 330px`) trên màn rộng, **1 cột trên điện thoại**; mỗi nhóm
  chủ đề có tiêu đề riêng kèm số lượng bài.

## Ảnh đề bài

- **Đã soi mắt toàn bộ ảnh** (bộ dò tự động vừa báo nhầm vừa bỏ sót nên không dùng được).
- 10 ảnh gốc bị hỏng dữ liệu → đã dựng lại hết (v77 và v80).
- 42 ảnh từng có logo và dòng ghi nguồn của đơn vị phát hành in chìm trong ảnh → đã xoá sạch.
- 30 ảnh từng lộ bài mẫu và bảng từ vựng ở phía dưới biểu đồ → đã cắt bỏ.
- v82: ảnh `writing-academic-056-1` bị cắt lại (bỏ 330px phần đầu trang đề) và ảnh mồ côi
  `writing-academic-045-1` đã xoá theo bài trùng → còn **74 ảnh**.
- Các dòng ghi nguồn dữ liệu hợp lệ nằm trong biểu đồ gốc được **giữ nguyên** (ví dụ "SOURCE: Defra,
  2004") vì đó là một phần của đề thi thật.

## Bộ đề

- 121/121 đề forecast 13 tuần (01/6 – 06/9) đối chiếu đủ — xem `FORECAST-COVERAGE.md`.
- 289 đề Writing Task 2 từ bảy trang tổng hợp (dolenglish, ielts-fighter, talkfirst, zim 2025 và 2026,
  onthiielts, ieltscity): **288/289 đối chiếu được**, 1 đề còn lại chỉ khác cách diễn đạt so với
  `#149` — xem `SITE-COVERAGE.md`.
- Hai bảng tra này nay khoá theo **id cố định của mục**, không theo số hiển thị, nên đánh số lại
  không làm hỏng bảng.

## Ghi chú số từ

Cuối mỗi bài có nhãn số từ kèm mốc chuẩn:

- Task 2 → `286 từ · tối thiểu 250`
- Task 1 → `... · tối thiểu 150`
- Part 2 → `302 từ · nói ~2 phút`
- Part 1 / Part 3 → chỉ hiện số từ (không có mốc bắt buộc)

Nếu bài dưới mốc, nhãn đổi sang màu nhấn của theme để cảnh báo.

## Cảnh báo đã kiểm tra và xác nhận KHÔNG phải lỗi

- `laboratory` — regex bắt nhầm chuỗi `labor`, đây là chính tả Anh-Anh đúng
- `computer program` / `drawing programs` — Anh-Anh dùng `program` cho phần mềm, `programme` cho
  chương trình TV và khoá học
- `to license it` — Anh-Anh: danh từ `licence`, động từ `license`
- `Elisha Gray` — tên riêng, không phải lỗi `grey`/`gray`
- 5 cặp câu hỏi Part 3 bị báo trùng — cùng chủ đề nhưng hỏi hai khía cạnh khác nhau, đúng dạng câu
  hỏi nối tiếp của Part 3
- 24 bài Task 2 bị báo "không rõ lập trường" — đều nêu quan điểm rõ, chỉ là không dùng đúng cụm mà
  regex tìm
- 14 cụm in đậm bị bộ chấm Zipf báo "toàn từ thông dụng" — đều là thành ngữ hoặc cấu trúc tương phản
  có chủ đích, giữ nguyên
- `however` + tính từ, `thus` + V-ing — không phải comma splice
- Thư tín kết bằng chữ ký nên không có dấu chấm cuối

## Việc còn tồn — nói thẳng

- **Vài cặp cue card Part 2 gần trùng nhau** (`#024`/`#025` ngày nghỉ, `#064`/`#201` dịch vụ của một
  công ty, `#162`/`#170` một thay đổi trong đời, `#165`/`#166` lựa chọn khó khăn) và **1 cặp Part 1**
  (nhảy múa; nhà/căn hộ). Đợt này anh yêu cầu rà phần **writing**, nên phần Speaking để lại cho đợt
  sau — không phải đã kiểm rồi bỏ qua.
- Ba việc nâng cấp còn lại (cắt tay 6 ảnh, đối chiếu số liệu toàn bộ Academic, thu âm Speaking) xem
  `CAN-VIET-LAI.md`.
