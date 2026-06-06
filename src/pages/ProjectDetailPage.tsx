import {
  ArrowLeft,
  BookOpenCheck,
  Download,
  ExternalLink,
  FileImage,
  FileText,
  ImageOff,
  Mountain,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FloatingDecor } from "../components/FloatingDecor";
import { ScrollReveal } from "../components/ScrollReveal";
import { getAssignmentById } from "../data/assignments";

type DetailSectionProps = {
  icon: ReactNode;
  label: string;
  title: string;
  items: string[];
};

function DetailSection({ icon, label, title, items }: DetailSectionProps) {
  return (
    <ScrollReveal className="detail-section">
      <div className="detail-section-heading">
        <span className="detail-icon">{icon}</span>
        <div>
          <p>{label}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

export function ProjectDetailPage() {
  const { id } = useParams();
  const assignment = getAssignmentById(id);
  const [coverPrimaryFailed, setCoverPrimaryFailed] = useState(false);
  const [coverFallbackFailed, setCoverFallbackFailed] = useState(false);
  const [promptImageFailed, setPromptImageFailed] = useState(false);

  if (!assignment) {
    return (
      <section className="page-hero compact-hero">
        <div className="section-inner not-found">
          <span className="eyebrow">
            <ScrollText size={16} strokeWidth={1.8} />
            Không tìm thấy
          </span>
          <h1>Bài tập này chưa có trong đạo thư</h1>
          <p>Đường dẫn hiện tại không khớp với danh sách 6 bài đã map từ thư mục CNS.</p>
          <Link className="primary-action" to="/projects">
            <ArrowLeft size={18} />
            Quay lại danh sách
          </Link>
        </div>
      </section>
    );
  }

  const coverImage = coverPrimaryFailed ? assignment.coverFallbackImage : assignment.coverImage;
  const hasCoverImage = coverImage && !coverFallbackFailed;
  const hasPromptImage = assignment.promptImage && !promptImageFailed;

  return (
    <>
      <section className="detail-hero art-page-hero">
        <FloatingDecor variant="detail" />
        <div className="section-inner detail-hero-grid">
          <div className="detail-copy">
            <Link className="back-link" to="/projects">
              <ArrowLeft size={18} />
              Trở về trang bài tập
            </Link>
            <span className="eyebrow">
              <Sparkles size={16} strokeWidth={1.8} />
              Bài {assignment.number}
            </span>
            <h1>{assignment.title}</h1>
            <p>{assignment.shortDescription}</p>
            <div className="skill-list large" aria-label="Kỹ năng chính">
              {assignment.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="detail-art">
            {hasCoverImage ? (
              <img
                src={coverImage}
                alt={`Ảnh nghệ thuật thủy mặc cho bài ${assignment.number}: ${assignment.title}`}
                data-generated-art={assignment.coverImageFileName}
                data-art-mode={coverPrimaryFailed ? "fallback" : "primary"}
                onError={() => {
                  if (!coverPrimaryFailed && assignment.coverFallbackImage) {
                    setCoverPrimaryFailed(true);
                    return;
                  }

                  setCoverFallbackFailed(true);
                }}
              />
            ) : (
              <div className="ink-placeholder tall">
                <ImageOff size={34} strokeWidth={1.5} />
                <span>Ảnh nghệ thuật đang chờ thay thế</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-band detail-content-band">
        <div className="section-inner detail-layout">
          <aside className="detail-meta">
            <p>Chương / nhiệm vụ</p>
            <strong>{assignment.chapter}</strong>
            <p>Nguồn đã map</p>
            <strong>{assignment.sourceFolder}</strong>
            <p>Phân biệt ảnh</p>
            <strong>Cover là ảnh nghệ thuật mới; PNG gốc chỉ là đề bài/minh chứng.</strong>
          </aside>

          <div className="detail-sections">
            <DetailSection
              icon={<BookOpenCheck size={24} />}
              label="Linh phù nhiệm vụ"
              title="Mục tiêu bài tập"
              items={assignment.objectives}
            />

            <ScrollReveal className="source-panel prompt-source-panel">
              <div>
                <span className="detail-icon">
                  <FileImage size={24} />
                </span>
                <div>
                  <p>Đề bài gốc / minh chứng ảnh</p>
                  <h2>Ảnh PNG từ thư mục CNS</h2>
                  <p>
                    Khu vực này hiển thị ảnh `bai_tap_*.png` như tư liệu nguồn. Ảnh này
                    không được dùng làm banner hoặc ảnh đại diện chính của giao diện web.
                  </p>
                </div>
              </div>
              {hasPromptImage ? (
                <>
                  <figure className="prompt-image-frame">
                    <img
                      src={assignment.promptImage}
                      alt={`Ảnh đề bài hoặc minh chứng gốc của bài ${assignment.number}`}
                      loading="lazy"
                      onError={() => setPromptImageFailed(true)}
                    />
                  </figure>
                  <div className="source-actions">
                    <a
                      className="secondary-action"
                      href={assignment.promptImage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                      Mở ảnh gốc
                    </a>
                  </div>
                </>
              ) : (
                <p className="missing-note">
                  TODO: Chưa map được ảnh đề bài gốc cho bài này trong `src/data/assignments.ts`.
                </p>
              )}
            </ScrollReveal>

            <DetailSection
              icon={<Mountain size={24} />}
              label="Quá trình tu luyện"
              title="Quá trình thực hiện"
              items={assignment.process}
            />
            <DetailSection
              icon={<FileText size={24} />}
              label="Pháp bảo / sản phẩm"
              title="Sản phẩm và kết quả"
              items={assignment.result}
            />
            <DetailSection
              icon={<ShieldCheck size={24} />}
              label="Tri thức lĩnh ngộ"
              title="Kiến thức và kỹ năng đạt được"
              items={assignment.reflection}
            />

            <ScrollReveal className="source-panel">
              <div>
                <span className="detail-icon">
                  <ExternalLink size={24} />
                </span>
                <div>
                  <p>Minh chứng PDF</p>
                  <h2>Báo cáo gốc</h2>
                  <p>
                    Nội dung phía trên đã được trình bày lại trực tiếp bằng web. PDF gốc
                    được đặt tại đây như tài liệu tham khảo và minh chứng bài nộp.
                  </p>
                </div>
              </div>
              {assignment.pdf ? (
                <div className="source-actions">
                  <a className="primary-action" href={assignment.pdf} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} />
                    Mở báo cáo PDF
                  </a>
                  <a className="secondary-action" href={assignment.pdf} download>
                    <Download size={18} />
                    Tải PDF
                  </a>
                </div>
              ) : (
                <p className="missing-note">
                  TODO: Chưa map được file PDF cho bài này trong `src/data/assignments.ts`.
                </p>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
