import { ArrowRight, BookOpen, Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingDecor } from "./FloatingDecor";
import { GeneratedArtImage } from "./GeneratedArtImage";
import { heroArt } from "../data/generatedArt";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">
          <Sparkles size={16} strokeWidth={1.8} />
          Hành trình tu luyện tri thức số
        </span>
        <h1>{profile.fullName}</h1>
        <p className="hero-lead">
          Một portfolio học tập được thiết kế như cuốn đạo thư số: lưu giữ bài làm,
          minh chứng quá trình và những tri thức lĩnh ngộ trong môn Công nghệ số & AI.
        </p>
        <div className="hero-actions" aria-label="Lối vào nhanh">
          <Link className="primary-action" to="/projects">
            <BookOpen size={18} />
            Xem bài tập
            <ArrowRight size={18} />
          </Link>
          <Link className="secondary-action" to="/reflection">
            <Compass size={18} />
            Đọc tổng kết
          </Link>
        </div>
      </div>

      <div className="hero-art mythic-hero-art">
        <GeneratedArtImage
          className="hero-art-image"
          asset={heroArt.home}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-cloud cloud-a" />
        <div className="hero-cloud cloud-b" />
        <div className="hero-orbit orbit-a" />
        <div className="hero-orbit orbit-b" />
        <FloatingDecor variant="home" />
      </div>
    </section>
  );
}
