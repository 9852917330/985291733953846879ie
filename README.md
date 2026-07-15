# IELTS 9.0 PWA — v56

Đã tích hợp 12 file MP3 vào 12 Core Stories của Speaking Part 2. Khi mở từng Core Story, trình phát audio xuất hiện ngay dưới tiêu đề; người học bấm Play để nghe trực tiếp trên web.

## Cập nhật repo
1. Giải nén file ZIP.
2. Upload đè toàn bộ file và thư mục lên repository hiện tại, bao gồm thư mục `audio`.
3. Mở `index.html?v=56` hoặc tải lại mạnh để nhận Service Worker mới.

## Chi tiết kỹ thuật
- Audio được lưu tại `audio/core-stories/`.
- Trình phát dùng HTML5 `<audio controls preload="metadata">`.
- Service Worker bỏ qua yêu cầu MP3 để trình duyệt hỗ trợ phát và tua bằng byte-range ổn định.
- Đóng cửa sổ bài học sẽ tự tạm dừng audio.
