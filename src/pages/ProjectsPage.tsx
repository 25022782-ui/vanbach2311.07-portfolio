import { Layers3, MapPinned, Sparkles } from "lucide-react";
import { AssignmentCard } from "../components/AssignmentCard";
import { FloatingDecor } from "../components/FloatingDecor";
import { GeneratedArtImage } from "../components/GeneratedArtImage";
import { ScrollReveal } from "../components/ScrollReveal";
import { assignments } from "../data/assignments";
import { heroArt } from "../data/generatedArt";

export function ProjectsPage() {
  return (
    <>
      <section className="page-hero compact-hero art-page-hero">
        <div className="page-hero-visual" aria-hidden="true">
          <GeneratedArtImage className="page-hero-image" asset={heroArt.projects} alt="" />
        </div>
        <FloatingDecor variant="projects" />
        <div className="section-inner">
          <span className="eyebrow">
            <Layers3 size={16} strokeWidth={1.8} />
            Trang trình bày bài tập / dự án
          </span>
          <h1>Sáu thử thách trên hành trình công nghệ số</h1>
          <p>
            Mỗi card dùng một ảnh nghệ thuật thủy mặc được tạo mới cho website. Ảnh
            trong `public/generated-art/` là ảnh minh họa chính; ảnh `bai_tap_*.png`
            trong CNS chỉ được đặt ở trang chi tiết như đề bài hoặc minh chứng gốc.
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
              Dữ liệu được quét từ `CNS/Tuan_*`. File gốc vẫn giữ nguyên; website chỉ tham
              chiếu để tạo bản trình bày thân thiện và có tính học thuật hơn.
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
