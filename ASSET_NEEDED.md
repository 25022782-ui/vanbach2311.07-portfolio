# Asset cần bổ sung / kiểm tra

Website hiện được trình bày theo hướng công khai: nội dung project được viết trực tiếp trên web, không hiển thị đường dẫn tài liệu nội bộ hoặc file bài nộp trên máy.

## Còn thiếu

| Asset | Đường dẫn cần đặt | Mục đích | Tỉ lệ / kích thước gợi ý | Ghi chú |
| --- | --- | --- | --- | --- |
| Ảnh cá nhân dạng ảnh thẻ | `public/profile/photo-id.jpg` | Hiển thị trong trang Giới thiệu cá nhân | 3:4 hoặc 4:5, tối thiểu 900x1200px | Nền gọn, rõ mặt; nếu thiếu web dùng placeholder giấy cổ |
| Nhạc nền | `public/audio/background-music.mp3` | Music player dạng đĩa nhạc cạnh thanh cuộn | MP3, 1-3 phút, dung lượng tối ưu | Không autoplay; người dùng bấm play mới phát |
| Link video giữa kỳ | YouTube: `https://www.youtube.com/watch?v=WFfqowN201o&t=94s` | Section `#midterm-video`, minh chứng cột mốc giữa kỳ | Video nhúng 16:9 | Không cần lưu MP4 local trong repo |
| Nền section video giữa kỳ | `public/generated-art/midterm-video-bg.png` | Nền mờ cho section video giữa kỳ | 16:9 hoặc rộng hơn | Màu nhẹ, không làm rối chữ |
| Nhân vật cạnh video | `public/generated-art/video-guardian-character.png` | Học giả/tu sĩ nhỏ trang trí cạnh video | PNG nền trong suốt | Không che nội dung |

## Đã có trong `public/generated-art/`

| Asset | Đường dẫn | Mục đích |
| --- | --- | --- |
| Hero trang chủ | `public/generated-art/hero-home-ink-cultivation.png` | Hero giới thiệu hành trình tu luyện tri thức |
| Hero trang bài tập | `public/generated-art/hero-projects-six-gates.png` | Hero trang danh sách project |
| Hero trang tổng kết | `public/generated-art/hero-reflection-summit.png` | Hero reflection |
| Bài 1 cover | `public/generated-art/assignment-1-computer-peripherals.png` | Ảnh card/banner chi tiết bài 1 |
| Bài 2 cover | `public/generated-art/assignment-2-data-knowledge-scroll.png` | Ảnh card/banner chi tiết bài 2 |
| Bài 3 cover | `public/generated-art/assignment-3-ai-spirit-array.png` | Ảnh card/banner chi tiết bài 3 |
| Bài 4 cover | `public/generated-art/assignment-4-digital-collaboration.png` | Ảnh card/banner chi tiết bài 4 |
| Bài 5 cover | `public/generated-art/assignment-5-digital-creation-ink.png` | Ảnh card/banner chi tiết bài 5 |
| Bài 6 cover | `public/generated-art/assignment-6-academic-integrity-shield.png` | Ảnh card/banner chi tiết bài 6 |
| Tu sĩ trẻ | `public/generated-art/character-young-cultivator-transparent.png` | Trang trí hero trang chủ |
| Thần nữ tri thức | `public/generated-art/character-knowledge-goddess-transparent.png` | Trang trí trang tổng kết |
| Linh hạc | `public/generated-art/character-spirit-crane-transparent.png` | Trang trí trang chủ/tổng kết |
| Long ảnh mực | `public/generated-art/character-ink-dragon-transparent.png` | Trang trí trang bài tập |
| Học giả kiếm tiên | `public/generated-art/character-scholar-swordmaster-transparent.png` | Trang trí project/detail |
| Mây thủy mặc | `public/generated-art/decor-ink-clouds-transparent.png` | Lớp nền và hero |
| Núi xa | `public/generated-art/decor-distant-ink-mountains.png` | Asset nền dự phòng |
| Trăng/linh khí | `public/generated-art/decor-moon-spirit-particles-transparent.png` | Lớp nền |
| Mực loang | `public/generated-art/decor-ink-wash-transparent.png` | Lớp nền |
| Phù văn | `public/generated-art/decor-knowledge-rune-transparent.png` | Lớp nền xoay chậm |

## Thông tin cá nhân cần tự kiểm tra

- `src/data/profile.ts`: kiểm tra `school`, `email`, `studentClass` nếu cần thay đổi.
- Ảnh cá nhân: thêm file thật vào `public/profile/photo-id.jpg`.
- Nhạc nền: thêm file thật vào `public/audio/background-music.mp3`.
