import {
  Award,
  BookMarked,
  Building2,
  Goal,
  GraduationCap,
  IdCard,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { LearningTimeline } from "../components/LearningTimeline";
import { MidtermVideoSection } from "../components/MidtermVideoSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SummarySection } from "../components/SummarySection";
import { assignments } from "../data/assignments";
import { decorArt } from "../data/generatedArt";
import { profile } from "../data/profile";
import { GeneratedArtImage } from "../components/GeneratedArtImage";

const cultivationSteps = [
  {
    title: "Bắt đầu",
    text: "Làm quen với cách tổ chức file, quản lý dữ liệu và những thao tác cơ bản trong môi trường số.",
  },
  {
    title: "Thử nghiệm",
    text: "Tập tìm kiếm thông tin có chiến lược, dùng AI có kiểm chứng và phối hợp với nhóm bằng công cụ trực tuyến.",
  },
  {
    title: "Nhìn lại",
    text: "Tổng hợp sản phẩm thành một website để tự đánh giá quá trình học, điểm đã làm được và điều cần cải thiện.",
  },
];

function ProfilePhoto() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <figure className="profile-photo-card">
      {!imageFailed ? (
        <img
          src={profile.photoPath}
          alt={`Ảnh cá nhân của ${profile.fullName}`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="profile-photo-placeholder" role="img" aria-label="Ảnh cá nhân chưa được bổ sung">
          <UserRound size={44} strokeWidth={1.4} />
          <span>Ảnh cá nhân</span>
          <small>Thêm file vào /public/profile/photo-id.jpg</small>
        </div>
      )}
      <figcaption>Chân dung sinh viên</figcaption>
    </figure>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-band intro-band decorated-section" id="about">
        <GeneratedArtImage className="section-nearby-decor nearby-cloud about-cloud" asset={decorArt.clouds} alt="" aria-hidden="true" />
        <GeneratedArtImage className="section-nearby-decor nearby-orbit about-orbit" asset={decorArt.orbitA} alt="" aria-hidden="true" />
        <GeneratedArtImage className="section-nearby-decor nearby-rune about-rune" asset={decorArt.knowledgeRune} alt="" aria-hidden="true" />
        <div className="section-inner identity-grid">
          <ScrollReveal>
            <ProfilePhoto />
          </ScrollReveal>

          <ScrollReveal className="identity-copy" delay={120}>
            <div className="section-heading">
              <span className="eyebrow">
                <UserRound size={16} strokeWidth={1.8} />
                Giới thiệu cá nhân
              </span>
              <h2>Một vài thông tin về tôi</h2>
            </div>

            <div className="profile-list">
              <div>
                <span>Họ tên</span>
                <strong>{profile.fullName}</strong>
              </div>
              <div>
                <span>MSSV</span>
                <strong>{profile.studentId}</strong>
              </div>
              <div>
                <span>Quan tâm</span>
                <strong>{profile.className}</strong>
              </div>
              <div>
                <span>Lớp sinh viên</span>
                <strong>{profile.studentClass}</strong>
              </div>
              <div>
                <span>Ngành học</span>
                <strong>{profile.major}</strong>
              </div>
              <div>
                <span>Trường</span>
                <strong>{profile.school}</strong>
              </div>
            </div>

            <div className="identity-meta">
              <span>
                <Mail size={17} />
                {profile.email}
              </span>
              <span>
                <Building2 size={17} />
                {profile.school}
              </span>
              <span>
                <IdCard size={17} />
                {profile.studentId}
              </span>
            </div>

            <div className="topic-tags" aria-label="Chủ đề quan tâm">
              {profile.topics.map((topic) => (
                <span key={topic}>
                  <Sparkles size={14} />
                  {topic}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-band study-info-band decorated-section">
        <GeneratedArtImage className="section-nearby-decor nearby-orbit study-orbit" asset={decorArt.orbitB} alt="" aria-hidden="true" />
        <GeneratedArtImage className="section-nearby-decor nearby-cloud study-cloud" asset={decorArt.clouds} alt="" aria-hidden="true" />
        <div className="section-inner three-column">
          <ScrollReveal className="info-block">
            <span className="block-icon">
              <BookMarked size={22} />
            </span>
            <h3>Sở thích học tập</h3>
            <ul className="clean-list">
              {profile.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="info-block" delay={100}>
            <span className="block-icon">
              <GraduationCap size={22} />
            </span>
            <h3>Định hướng học tập</h3>
            <p>{profile.learningDirection}</p>
          </ScrollReveal>

          <ScrollReveal className="info-block" delay={200}>
            <span className="block-icon">
              <Goal size={22} />
            </span>
            <h3>Mục tiêu cá nhân</h3>
            <p>{profile.personalGoal}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-band portfolio-goal-band decorated-section">
        <GeneratedArtImage className="section-nearby-decor nearby-rune goal-rune" asset={decorArt.knowledgeRune} alt="" aria-hidden="true" />
        <GeneratedArtImage className="section-nearby-decor nearby-cloud goal-cloud" asset={decorArt.clouds} alt="" aria-hidden="true" />
        <div className="section-inner two-column align-center">
          <ScrollReveal className="goal-copy">
            <span className="eyebrow">
              <Award size={16} strokeWidth={1.8} />
              Mục tiêu portfolio
            </span>
            <h2>Sắp xếp lại quá trình học thành một câu chuyện dễ theo dõi</h2>
            <p>{profile.portfolioGoal}</p>
          </ScrollReveal>

          <ScrollReveal className="cultivation-track" delay={120}>
            {cultivationSteps.map((step, index) => (
              <div className="track-step" key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section-band project-timeline-band" id="projects">
        <div className="section-inner">
          <LearningTimeline assignments={assignments} />
        </div>
      </section>

      <MidtermVideoSection />

      <SummarySection />
    </>
  );
}
