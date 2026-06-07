import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  FileImage,
  FileText,
  Gem,
  Leaf,
  ScrollText,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Assignment } from "../data/assignments";
import { decorArt } from "../data/generatedArt";
import { FloatingDecor } from "./FloatingDecor";
import { GeneratedArtImage } from "./GeneratedArtImage";
import { ScrollReveal } from "./ScrollReveal";

type LearningTimelineProps = {
  assignments: Assignment[];
};

const summarySkills = [
  "Máy tính cơ bản",
  "Khai thác dữ liệu",
  "Prompt Engineering",
  "Giao tiếp số",
  "Hợp tác trực tuyến",
  "Sáng tạo nội dung",
  "An toàn số",
  "Liêm chính học thuật",
];

function TimelineEvidenceButton({
  href,
  label,
  icon,
}: {
  href: string | null;
  label: string;
  icon: ReactNode;
}) {
  if (!href) {
    return <span className="timeline-muted-action">Chưa có minh chứng</span>;
  }

  return (
    <a className="timeline-ghost-action" href={href} target="_blank" rel="noreferrer">
      {icon}
      {label}
      <ArrowUpRight size={15} />
    </a>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="timeline-detail-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function TimelineDetailPanel({ assignment }: { assignment: Assignment }) {
  return (
    <div className="timeline-detail-panel">
      <section className="timeline-detail-block timeline-overview-block">
        <h3>Tổng quan bài tập</h3>
        <p>{assignment.overview}</p>
      </section>

      <DetailList title="Mục tiêu bài tập" items={assignment.objectives} />
      <DetailList title="Công cụ / tài liệu đã sử dụng" items={assignment.tools} />
      <DetailList title="Quá trình thực hiện" items={assignment.process} />
      <DetailList title="Nội dung / sản phẩm đã thực hiện" items={assignment.result} />

      <section className="timeline-detail-block">
        <h3>Tiêu chí nổi bật</h3>
        <div className="timeline-criteria-list">
          {assignment.highlightCriteria.map((criterion) => (
            <article key={criterion.title}>
              <strong>{criterion.title}</strong>
              <p>{criterion.description}</p>
              <small>Minh chứng: {criterion.expression}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-detail-block">
        <h3>Kiến thức rút ra</h3>
        <div className="timeline-skill-row compact">
          {assignment.competencies.map((competency) => (
            <span key={competency}>{competency}</span>
          ))}
        </div>
      </section>

      <DetailList title="Bài học rút ra" items={assignment.reflection} />

      <section className="timeline-detail-block">
        <h3>Cảm nhận cá nhân</h3>
        <p>{assignment.personalInsight}</p>
      </section>

      <section className="timeline-detail-block">
        <h3>Ứng dụng trong tương lai</h3>
        <p>{assignment.futureApplication}</p>
      </section>

      <section className="timeline-detail-block timeline-source-block">
        <div>
          <h3>Đề bài gốc</h3>
          <p>Ảnh PNG chỉ dùng làm tư liệu đề bài, không dùng làm ảnh cover hoặc banner chính.</p>
          <TimelineEvidenceButton
            href={assignment.promptImage}
            label="Mở ảnh đề bài gốc"
            icon={<FileImage size={17} />}
          />
        </div>
        {assignment.promptImage ? (
          <figure className="timeline-prompt-frame">
            <img src={assignment.promptImage} alt={`Đề bài gốc của ${assignment.week}`} loading="lazy" />
          </figure>
        ) : (
          <p className="missing-note">Chưa có ảnh đề bài gốc.</p>
        )}
      </section>

      <section className="timeline-detail-block timeline-source-block">
        <div>
          <h3>Minh chứng báo cáo PDF</h3>
          <p>PDF là tài liệu minh chứng, còn nội dung chính đã được trình bày trực tiếp trên web.</p>
          <ul className="timeline-evidence-notes">
            {assignment.evidenceNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <TimelineEvidenceButton
            href={assignment.reportPdf}
            label="Mở báo cáo PDF"
            icon={<FileText size={17} />}
          />
        </div>
        {assignment.reportPdf ? (
          <div className="timeline-pdf-preview">
            <object data={assignment.reportPdf} type="application/pdf" aria-label={`PDF báo cáo ${assignment.week}`}>
              <a href={assignment.reportPdf} target="_blank" rel="noreferrer">
                Mở báo cáo PDF
              </a>
            </object>
          </div>
        ) : (
          <p className="missing-note">Chưa có báo cáo PDF.</p>
        )}
      </section>
    </div>
  );
}

function TimelineItem({
  assignment,
  index,
  isExpanded,
  onToggle,
}: {
  assignment: Assignment;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <ScrollReveal className="learning-timeline-item" delay={index * 90}>
      <div className="timeline-marker" aria-hidden="true">
        <span className="timeline-marker-seal">
          <Gem size={19} />
          <small>Tuần</small>
          <strong>{assignment.timelineWeekLabel.replace("Tuần ", "")}</strong>
        </span>
      </div>

      <article className="timeline-card">
        <div className="timeline-card-head">
          <span className="timeline-week-badge">
            <Sparkles size={15} />
            {assignment.timelineWeekLabel}
          </span>
          <span className="timeline-date-range">{assignment.dateRange}</span>
          <span className="timeline-chapter">{assignment.chapter}</span>
        </div>

        <h2>{assignment.title}</h2>
        <p className="timeline-description">{assignment.shortDescription}</p>

        <div className="timeline-card-grid">
          <section>
            <h3>
              <ScrollText size={18} />
              Hoạt động chính
            </h3>
            <ul>
              {assignment.mainActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </section>

          <section className="core-lesson-panel">
            <h3>
              <CheckCircle2 size={18} />
              Bài học cốt lõi
            </h3>
            <p>{assignment.coreLesson}</p>
          </section>
        </div>

        <div className="timeline-skill-row" aria-label={`Kỹ năng của ${assignment.timelineWeekLabel}`}>
          {assignment.skills.slice(0, 5).map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="timeline-actions">
          <button
            className="timeline-primary-action"
            type="button"
            aria-expanded={isExpanded}
            aria-controls={`timeline-detail-${assignment.id}`}
            onClick={onToggle}
          >
            {isExpanded ? "Thu gọn" : "Xem chi tiết"}
            <ChevronDown className={isExpanded ? "is-rotated" : ""} size={17} />
          </button>
          <TimelineEvidenceButton
            href={assignment.promptImage}
            label="Xem đề bài gốc"
            icon={<FileImage size={17} />}
          />
          <TimelineEvidenceButton
            href={assignment.reportPdf}
            label="Mở báo cáo PDF"
            icon={<FileText size={17} />}
          />
        </div>

        <div id={`timeline-detail-${assignment.id}`} hidden={!isExpanded}>
          {isExpanded ? <TimelineDetailPanel assignment={assignment} /> : null}
        </div>
      </article>
    </ScrollReveal>
  );
}

function TimelineSummary() {
  return (
    <ScrollReveal className="learning-timeline-summary" delay={120}>
      <span className="summary-seal">
        <Leaf size={22} />
      </span>
      <div>
        <span className="eyebrow">Tổng kết timeline</span>
        <h2>Nhìn lại sau 6 bài tập</h2>
        <p>
          Sau 6 bài tập, tôi thấy mình tiến bộ rõ nhất ở cách tổ chức và trình bày.
          Tôi biết tìm thông tin có chọn lọc hơn, đặt prompt rõ hơn khi dùng AI và
          chú ý hơn đến việc ghi nguồn, bảo vệ dữ liệu, giữ liêm chính học thuật.
          Những kỹ năng này không chỉ dùng cho môn học này mà còn giúp tôi làm bài
          nhóm, đọc tài liệu và xây dựng sản phẩm cá nhân sau này.
        </p>
        <div className="timeline-summary-badges" aria-label="Kỹ năng tổng kết">
          {summarySkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function LearningTimeline({ assignments }: LearningTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="learning-timeline-section" aria-labelledby="learning-timeline-title">
      <GeneratedArtImage className="timeline-rune-decoration" asset={decorArt.knowledgeRune} alt="" aria-hidden="true" />
      <GeneratedArtImage className="timeline-cloud-decoration timeline-cloud-left" asset={decorArt.clouds} alt="" aria-hidden="true" />
      <GeneratedArtImage className="timeline-orbit-decoration timeline-orbit-a" asset={decorArt.orbitA} alt="" aria-hidden="true" />
      <GeneratedArtImage className="timeline-orbit-decoration timeline-orbit-b" asset={decorArt.orbitB} alt="" aria-hidden="true" />
      <FloatingDecor variant="projects" />
      <div className="timeline-section-heading">
        <span className="eyebrow">
          <Sparkles size={16} />
          Hành trình học tập
        </span>
        <h2 id="learning-timeline-title">Sáu bài tập, sáu cột mốc học tập</h2>
      </div>

      <div className="learning-timeline">
        {assignments.map((assignment, index) => (
          <TimelineItem
            assignment={assignment}
            index={index}
            isExpanded={expandedId === assignment.id}
            key={assignment.id}
            onToggle={() => setExpandedId((current) => (current === assignment.id ? null : assignment.id))}
          />
        ))}
        <TimelineSummary />
      </div>
    </section>
  );
}
