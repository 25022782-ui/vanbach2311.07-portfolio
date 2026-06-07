import { ArrowRight, BookOpen, Compass, Sparkles } from "lucide-react";
import { FloatingDecor } from "./FloatingDecor";
import { GeneratedArtImage } from "./GeneratedArtImage";
import { decorArt, heroArt } from "../data/generatedArt";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <span className="eyebrow">
          <Sparkles size={16} strokeWidth={1.8} />
          Portfolio môn Công nghệ số và AI
        </span>
        <h1>Hành trình học Công nghệ số</h1>
        <p className="hero-lead">
          Xin chào, tôi là {profile.fullName}, sinh viên ngành Trí tuệ nhân tạo tại
          Trường Đại học Công nghệ - ĐHQGHN. Portfolio này tổng hợp các sản phẩm học tập
          từ Bài 1 đến Bài 6 trong học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ
          nhân tạo. Tôi xem đây như một cách nhìn lại quá trình học từ tuần 1 đến tuần
          12: đã làm gì, gặp khó khăn ở đâu và rút ra điều gì cho những bài sau.
        </p>
        <div className="hero-actions" aria-label="Lối vào nhanh">
          <a className="primary-action" href="#projects">
            <BookOpen size={18} />
            Xem hành trình học
            <ArrowRight size={18} />
          </a>
          <a className="secondary-action" href="#summary">
            <Compass size={18} />
            Đọc tổng kết
          </a>
        </div>
      </div>

      <div className="hero-art mythic-hero-art">
        <GeneratedArtImage
          className="hero-art-image"
          asset={heroArt.home}
          alt=""
          aria-hidden="true"
        />
        <GeneratedArtImage className="hero-cloud-image cloud-a" asset={decorArt.clouds} alt="" />
        <GeneratedArtImage className="hero-cloud-image cloud-b" asset={decorArt.clouds} alt="" />
        <GeneratedArtImage className="hero-rune-sigil" asset={decorArt.knowledgeRune} alt="" aria-hidden="true" />
        <GeneratedArtImage className="hero-orbit orbit-a" asset={decorArt.orbitA} alt="" />
        <GeneratedArtImage className="hero-orbit orbit-b" asset={decorArt.orbitB} alt="" />
        <FloatingDecor variant="home" />
      </div>
    </section>
  );
}
