import { ArrowRight, FileText, ImageOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Assignment } from "../data/assignments";

type AssignmentCardProps = {
  assignment: Assignment;
};

export function AssignmentCard({ assignment }: AssignmentCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);
  const activeImage = imageFailed ? assignment.coverFallbackImage : assignment.coverImage;
  const hasImage = activeImage && !fallbackFailed;

  return (
    <Link className="assignment-card" to={`/projects/${assignment.slug}`}>
      <div className="assignment-media">
        {hasImage ? (
          <img
            src={activeImage}
            alt={`Ảnh nghệ thuật thủy mặc cho ${assignment.title}`}
            data-generated-art={assignment.coverImageFileName}
            data-art-mode={imageFailed ? "fallback" : "primary"}
            loading="lazy"
            onError={() => {
              if (!imageFailed && assignment.coverFallbackImage) {
                setImageFailed(true);
                return;
              }

              setFallbackFailed(true);
            }}
          />
        ) : (
          <div className="ink-placeholder">
            <ImageOff size={30} strokeWidth={1.5} />
            <span>Ảnh nghệ thuật đang chờ thay thế</span>
          </div>
        )}
        <span className="assignment-number">Bài {assignment.number}</span>
      </div>

      <div className="assignment-body">
        <p className="assignment-chapter">{assignment.chapter}</p>
        <h2>{assignment.title}</h2>
        <p>{assignment.shortDescription}</p>
        <div className="skill-list" aria-label="Kỹ năng chính">
          {assignment.skills.slice(0, 4).map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <span className="card-action">
          <FileText size={18} />
          Xem bài làm
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  );
}
