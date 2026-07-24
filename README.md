# IELTS 9.0 PWA — v59 Audio Fix

Đã sửa lỗi audio CORE 13–20 hiển thị `0:00 / 0:00` và không phát được.

## Cách sửa
- Nhúng trực tiếp dữ liệu MP3 của CORE 13–20 vào `index.html`.
- Vẫn giữ 8 tệp MP3 trong `audio/core-stories/` làm phương án dự phòng.
- Tự động chuyển sang tệp dự phòng nếu trình duyệt không đọc được audio nhúng.
- Thêm cache-busting `v59` và đổi Service Worker cache.
- ZIP được đóng gói phẳng: giải nén là thấy ngay `index.html`, `audio/`, `sw.js`... để ghi đè repo.

## Cập nhật GitHub
1. Giải nén ZIP.
2. Ghi đè toàn bộ nội dung trong ZIP vào thư mục gốc repository.
3. Chờ GitHub Pages deploy xong.
4. Mở `index.html?v=59`, sau đó tải lại mạnh một lần.
