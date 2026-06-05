# Hướng dẫn deploy GitHub Pages cho Portfolio CNS

Website này là website tĩnh HTML/CSS/JavaScript thuần, đặt trong thư mục `/docs` để có thể deploy bằng GitHub Pages.

## Đặc điểm quan trọng

- Website **không sử dụng file nhị phân** trong thư mục `/docs`.
- Không có ảnh `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.ico`, PDF, font hoặc file nén được tạo thêm cho website.
- Toàn bộ minh họa cổ trang/tu tiên như mây trôi, ánh trăng, kiếm quang, thư quyển, phù văn và linh khí được dựng bằng HTML/CSS/Unicode icon.
- Không sao chép, không di chuyển, không sửa thư mục `CNS`.

## Cấu trúc website

```text
docs/
├── index.html
├── projects.html
├── summary.html
├── README_DEPLOY.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

Trong đó:

- `index.html`: trang giới thiệu cá nhân.
- `projects.html`: trang trình bày 6 bài tập và báo cáo chi tiết bằng HTML.
- `summary.html`: trang tổng kết cá nhân.
- `assets/css/style.css`: giao diện cổ trang/tu tiên, responsive và animation nhẹ.
- `assets/js/main.js`: đánh dấu navbar hiện tại và tạo hiệu ứng scroll reveal.

## Cách bật GitHub Pages

1. Mở repository trên GitHub.
2. Vào **Settings** → **Pages**.
3. Ở mục **Build and deployment**, chọn:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/docs`
4. Nhấn **Save**.
5. Chờ GitHub Pages build xong, sau đó mở đường dẫn Pages do GitHub cung cấp.

## Kiểm tra sau deploy

- Mở được trang `index.html`.
- Navbar dẫn đúng đến `index.html`, `projects.html`, `summary.html`.
- Các nút “Xem báo cáo” trong `projects.html` nhảy đúng đến `#bai-1` đến `#bai-6`.
- Giao diện hiển thị tốt trên máy tính và điện thoại.

Không cần cài dependency, không cần build và không cần xử lý PDF/PNG để deploy website này.
