import { Layers3, MapPinned, Sparkles } from "lucide-react";
import { AssignmentCard } from "../components/AssignmentCard";
import { ScrollReveal } from "../components/ScrollReveal";
import { assignments } from "../data/assignments";

export function ProjectsPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="section-inner">
          <span className="eyebrow">
            <Layers3 size={16} strokeWidth={1.8} />
            Trang trình bày bài tập / dự án
          </span>
          <h1>Sáu thử thách trên hành trình công nghệ số</h1>
          <p>
            Mỗi card là một sản phẩm học tập đã được biên tập lại thành nội dung web,
            có ảnh minh chứng và liên kết tới báo cáo PDF gốc ở trang chi tiết.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="section-inner project-summary">
          <ScrollReveal className="summary-item">
            <span>
              <Sparkles size={20} />
            </span>
            <strong>{assignments.length}</strong>
            <p>Bài tập thành phần</p>
          </ScrollReveal>
          <ScrollReveal className="summary-item" delay={90}>
            <span>
              <MapPinned size={20} />
            </span>
            <strong>6</strong>
            <p>Folder tuần đã map</p>
          </ScrollReveal>
          <ScrollReveal className="summary-note" delay={160}>
            <p>
              Dữ liệu được quét từ `CNS/Tuan_*`. Các file gốc vẫn được giữ nguyên,
              website chỉ tham chiếu để tạo bản trình bày thân thiện hơn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-band project-grid-band">
        <div className="section-inner">
          <div className="assignment-grid">
            {assignments.map((assignment, index) => (
              <ScrollReveal key={assignment.id} delay={index * 70}>
                <AssignmentCard assignment={assignment} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
