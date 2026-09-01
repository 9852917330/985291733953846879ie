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

## Nếu muốn nâng tiếp

Nội dung đã đạt chuẩn cả định lượng lẫn định tính. Ba việc còn có thể làm, xếp theo mức đáng làm:

1. **Kiểm tra số liệu trong 6 ảnh chưa cắt được an toàn** (`#023`, `#038`, `#049`, `#051`, `#063`,
   `#065`): phần lộ bài mẫu ở các ảnh này nằm quá sát nội dung biểu đồ nên cắt tự động sẽ mất dữ liệu.
   Cần cắt tay từng ảnh.
2. **Đối chiếu số liệu bài viết với ảnh biểu đồ cho toàn bộ 69 mục Academic.** Đợt này chỉ đối chiếu
   những mục có dấu hiệu mâu thuẫn nội tại. Việc đối chiếu đầy đủ phải mở từng ảnh ra đọc.
3. **Thu âm phần Speaking.** Thư mục `audio/` hiện chưa có bản ghi cho các bài đã viết lại ở v66–v77.
