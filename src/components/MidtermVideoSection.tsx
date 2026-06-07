import { Film, Sparkles, Youtube } from "lucide-react";
import { decorArt, videoArt } from "../data/generatedArt";
import { GeneratedArtImage } from "./GeneratedArtImage";
import { ScrollReveal } from "./ScrollReveal";

const youtubeWatchUrl = "https://www.youtube.com/watch?v=WFfqowN201o&t=94s";
const youtubeEmbedSrc =
  "https://www.youtube-nocookie.com/embed/WFfqowN201o?start=94&rel=0&modestbranding=1";

const videoSkills = [
  "Giữa kỳ",
  "Minh chứng học tập",
  "Sáng tạo nội dung",
  "Trình bày số",
  "AI hỗ trợ học tập",
];

export function MidtermVideoSection() {
  return (
    <section className="section-band midterm-video-band" id="midterm-video">
      <GeneratedArtImage className="midterm-bg-art" asset={videoArt.background} alt="" aria-hidden="true" />
      <GeneratedArtImage className="video-nearby-decor video-cloud-decoration" asset={decorArt.clouds} alt="" aria-hidden="true" />
      <GeneratedArtImage className="video-nearby-decor video-rune-decoration" asset={decorArt.knowledgeRune} alt="" aria-hidden="true" />
      <GeneratedArtImage className="video-nearby-decor video-orbit-decoration" asset={decorArt.orbitA} alt="" aria-hidden="true" />
      <div className="section-inner midterm-video-grid">
        <ScrollReveal className="midterm-video-frame">
          <iframe
            className="midterm-youtube-frame"
            title="Hành Trình Khám Phá AI & Công Nghệ Số Trong Kỹ Thuật - Công Nghệ"
            src={youtubeEmbedSrc}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
          <GeneratedArtImage className="midterm-guardian" asset={videoArt.guardian} alt="" aria-hidden="true" />
        </ScrollReveal>

        <ScrollReveal className="midterm-video-copy" delay={120}>
          <span className="eyebrow">
            <Film size={16} />
            Cột mốc giữa kỳ
          </span>
          <h2>Video giữa kỳ</h2>
          <p>
            Video này là một điểm dừng giữa quá trình học. Khi làm video, tôi phải chọn
            nội dung chính, sắp xếp lại ý và trình bày sao cho người xem hiểu được mình
            đã làm gì. Đây không phải sản phẩm hoàn hảo, nhưng giúp tôi nhìn rõ hơn cách
            mình dùng công cụ số và AI để hỗ trợ việc học.
          </p>

          <div className="midterm-info-list">
            <div>
              <span>Tên video</span>
              <strong>Hành Trình Khám Phá AI & Công Nghệ Số Trong Kỹ Thuật - Công Nghệ | Nhóm 14 [VNU1001_E252001]📺🔥</strong>
            </div>
            <div>
              <span>Link video</span>
              <strong>
                <a className="youtube-inline-link" href={youtubeWatchUrl} target="_blank" rel="noreferrer">
                  <Youtube size={18} fill="currentColor" strokeWidth={1.8} />
                  Click vào để xem video trên Youtube
                </a>
              </strong>
            </div>
            <div>
              <span>Mục đích</span>
              <strong>Ghi lại tiến độ học tập và cách tôi trình bày một sản phẩm số ở giai đoạn giữa môn.</strong>
            </div>
            <div>
              <span>Nội dung chính</span>
              <strong>Tóm tắt một phần hành trình học, cách dùng công cụ số, vai trò của AI và những điều cần tự chỉnh sửa.</strong>
            </div>
            <div>
              <span>Cảm nhận</span>
              <strong>Tôi nhận ra rằng trình bày sản phẩm không chỉ là làm cho đẹp, mà còn là biết chọn ý và giải thích rõ ràng.</strong>
            </div>
          </div>

          <div className="timeline-summary-badges midterm-badges" aria-label="Kỹ năng video giữa kỳ">
            {videoSkills.map((skill) => (
              <span key={skill}>
                <Sparkles size={13} />
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
