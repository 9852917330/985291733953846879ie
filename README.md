

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

## Kiểm tra

| Hạng mục | Kết quả |
|---|---|
| Số từ / số đoạn / kết bài | 0 lỗi |
| Bảng cụm từ khớp hai chiều | 0 lỗi (4.379/4.379) |
| Trùng lặp giữa các bài | 0 |
| Chính tả, lỗi gõ, ngoặc, tên nguồn | 0 |
| Trường dữ liệu trống | 0 |
| Đánh số hiển thị chạy 1..n | 0 lỗi |
| Test dựng giao diện | **21/21**, 0 lỗi console |

Tổng số mục: **881** (Task 2: 376 · Academic: 68 · General: 29 · Part 1: 90 · Part 2: 222 · Part 3: 96).

## Triển khai
Giải nén ghi đè vào thư mục gốc repository, mở `index.html?v=82` và tải lại mạnh một lần.
