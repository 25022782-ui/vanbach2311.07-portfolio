# portfolio-cns

Website portfolio cá nhân cho môn **Nhập môn Công nghệ số và Ứng dụng trí tuệ nhân tạo**.

## Chạy local

```bash
npm install
npm run dev
```

## Kiểm tra build

```bash
npm run build
```

## Deploy GitHub Pages

Workflow `.github/workflows/deploy.yml` sẽ tự build và deploy thư mục `dist` khi push lên branch `main`.

Nếu repo GitHub không tên là `portfolio-cns`, chỉnh `base` trong `vite.config.ts` hoặc đặt biến môi trường `VITE_BASE_PATH` khi build.

## Chỉnh thông tin cá nhân

Thông tin cá nhân nằm trong `src/data/profile.ts`. Trường `major` đang để placeholder `[Điền ngành học]` vì chưa thấy ngành học trong các tài liệu đã quét.

## Ảnh trong website

- `public/generated-art/`: nơi đặt ảnh PNG tạo mới cho hero, card bài tập và nhân vật trang trí. Website ưu tiên tải ảnh trong thư mục này.
- `src/assets/generated/`: SVG placeholder tạm cho hero và card bài tập khi ảnh PNG trong `public/generated-art/` chưa tồn tại.
- `src/assets/decorative/`: SVG placeholder tạm cho nhân vật trang trí có animation.
- `CNS/Tuan_*/Bai_tap_*.png`: chỉ được map vào `promptImage` trong `src/data/assignments.ts` và hiển thị ở phần “Đề bài gốc / minh chứng ảnh”.
- `IMAGE_PROMPTS.md`: prompt chi tiết để tạo ảnh bitmap bằng ChatGPT/DALL-E. Khi có ảnh thật, lưu đúng tên file trong `public/generated-art/`; không cần sửa code.

Danh sách tên file cần đặt trong `public/generated-art/` nằm ở `public/generated-art/README.md`.
