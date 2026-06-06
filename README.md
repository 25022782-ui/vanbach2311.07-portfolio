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
