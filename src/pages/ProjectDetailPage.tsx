import {
  ArrowLeft,
  BookOpenCheck,
  Download,
  ExternalLink,
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
  const [imageFailed, setImageFailed] = useState(false);

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

  const hasImage = assignment.image && !imageFailed;

  return (
    <>
      <section className="detail-hero">
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
            {hasImage ? (
              <img
                src={assignment.image}
                alt={`Minh chứng bài ${assignment.number}: ${assignment.title}`}
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="ink-placeholder tall">
                <ImageOff size={34} strokeWidth={1.5} />
                <span>Chưa có ảnh minh chứng phù hợp</span>
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
          </aside>

          <div className="detail-sections">
            <DetailSection
              icon={<BookOpenCheck size={24} />}
              label="Linh phù nhiệm vụ"
              title="Mục tiêu bài tập"
              items={assignment.objectives}
            />
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
              title="Kiến thức rút ra"
              items={assignment.reflection}
            />

            <ScrollReveal className="source-panel">
              <div>
                <span className="detail-icon">
                  <ExternalLink size={24} />
                </span>
                <div>
                  <p>Minh chứng gốc</p>
                  <h2>Báo cáo PDF</h2>
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
                  TODO: Chưa map được file PDF cho bài này. Bổ sung đường dẫn trong
                  `src/data/assignments.ts`.
                </p>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
