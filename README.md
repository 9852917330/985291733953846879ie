# IELTS 9.0 PWA — v58

Đã bổ sung audio mẫu cho 8 Core Stories mới, từ CORE 13 đến CORE 20. Toàn bộ 20 Core Stories hiện đều có nút phát MP3 trực tiếp.

## Audio mới
- CORE 13: Building — The CN Tower in Toronto
- CORE 14: Book — The Spirit Hunter
- CORE 15: Famous person — Chris Bumstead
- CORE 16: Toy — A White Stuffed Dog from My Childhood
- CORE 17: Service — Acne Treatment at Thu Cuc Clinics
- CORE 18: Animal — Dogs
- CORE 19: Habit — Going to the Gym Early
- CORE 20: Technology — ChatGPT

## Cập nhật repo
1. Giải nén file ZIP.
2. Upload đè toàn bộ thư mục và tệp lên repository hiện tại, bắt buộc bao gồm thư mục `audio/core-stories/`.
3. Mở `index.html?v=58` hoặc tải lại mạnh để nhận Service Worker mới.

## Chi tiết kỹ thuật
- Audio được đặt theo cùng cấu trúc với 12 bài cũ.
- Dữ liệu CORE 13–20 đã được gắn trường `audio` tương ứng.
- Cache Service Worker đã đổi sang `ielts90-v58-20-core-stories-audio`.
- Các request MP3 tiếp tục được phát trực tiếp, không bị Service Worker chặn hoặc trả nhầm cache.
