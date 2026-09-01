# Trạng thái nội dung — v77

## Kiểm tra tự động

| Hạng mục | Số lượng | Tiêu chuẩn | Kết quả |
|---|---|---|---|
| Writing Task 2 | 214 | 250–340 từ, 4–5 đoạn | ✅ 214/214 (250–337 từ) |
| Writing Task 1 | 98 | ≥150 từ | ✅ 98/98 |
| Speaking Part 2 | 222 | ≥190 từ | ✅ 222/222 (207–334 từ) |
| Speaking Part 3 | 96 | mọi câu trả lời ≥70 từ | ✅ 96/96 |
| Bảng cụm từ | 720 | khớp hai chiều với chữ in đậm | ✅ 720/720 |
| Bài trùng lặp | — | 0 cặp trùng >50% | ✅ 0 |
| Kết bài | — | có, và nằm ở đoạn cuối | ✅ 0 lỗi |
| Chính tả Anh-Anh | — | thống nhất | ✅ 0 lỗi |
| Lỗi gõ / ngoặc đơn | — | — | ✅ 0 lỗi |
| Tên nguồn / tác giả | — | không xuất hiện ở đâu | ✅ 0 (cả trong chữ **và trong ảnh**) |

## Test dựng giao diện (jsdom)

18/18 hạng mục đạt, 0 lỗi console: dựng danh sách cả 6 mục, mở bài chi tiết, hiện ảnh biểu đồ,
nhãn đếm từ, đổi theme hai chiều, tìm kiếm lọc danh sách, hai trang paraphrase.

## Giao diện

- **Theme sáng**: trắng `#fff` + xanh dương `#1565c0`.
- **Theme tối**: xám đen `#0b1311` + mint `#5eead4`.
- Đã kiểm bằng cách tính sắc độ từng mã màu trong stylesheet: theme sáng chỉ có trắng và họ xanh dương
  (hue 211–223), theme tối chỉ có đen xám và họ mint (hue 159–171). **Không có sắc độ thứ ba nào.**
  Các giá trị còn lại là sắc độ đậm nhạt của đúng hai tông đó, dùng cho chữ, chữ mờ, viền và nền thẻ.
- Hệ màu `PALETTES` (6 mã màu cứng mỗi theme, gán theo chủ đề) đã bị gỡ bỏ — nay dùng `var(--accent)`.
- Hai mã màu cứng còn lại trong JS là giá trị `<meta name="theme-color">`: thẻ meta không nhận `var()`,
  và hai giá trị đó trùng khớp accent của hai theme.

## Ảnh đề bài

- 41/75 ảnh từng có logo và dòng ghi nguồn của đơn vị phát hành in chìm trong ảnh → đã xoá sạch.
- 30 ảnh từng lộ bài mẫu và bảng từ vựng ở phía dưới biểu đồ → đã cắt bỏ.
- 5 ảnh hỏng dữ liệu (`#007`, `#013`, `#035`, `#048`, `#067`) → đã dựng lại từ số liệu có sẵn trong bài.
- Các dòng ghi nguồn dữ liệu hợp lệ nằm trong biểu đồ gốc được **giữ nguyên** (ví dụ "SOURCE: Defra,
  2004", "Source: The Department for Transport, UK") vì đó là một phần của đề thi thật.

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
  chương trình TV và khóa học
- `Elisha Gray` — tên riêng, không phải lỗi `grey`/`gray`
- 5 cặp câu hỏi Part 3 bị báo trùng — cùng chủ đề nhưng hỏi hai khía cạnh khác nhau, đúng dạng câu
  hỏi nối tiếp của Part 3
- 29 bài Task 2 bị báo "không rõ lập trường" — đều nêu quan điểm rõ, chỉ là không dùng đúng cụm mà
  regex tìm (ví dụ `#020`: "I do not believe that hitting a child is an acceptable form of discipline")
- `however` + tính từ, `thus` + V-ing — không phải comma splice
- Thư tín kết bằng chữ ký nên không có dấu chấm cuối
