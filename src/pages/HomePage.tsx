import { Award, BookMarked, Goal, GraduationCap, UserRound } from "lucide-react";
import { Hero } from "../components/Hero";
import { ScrollReveal } from "../components/ScrollReveal";
import { profile } from "../data/profile";

const cultivationSteps = [
  {
    title: "Khai môn",
    text: "Làm quen máy tính, dữ liệu, thông tin và nền tảng làm việc số.",
  },
  {
    title: "Luyện pháp",
    text: "Ứng dụng AI, hợp tác trực tuyến và sáng tạo nội dung có kiểm chứng.",
  },
  {
    title: "Ngộ đạo",
    text: "Tổng hợp sản phẩm, phản tư quá trình học và định hướng phát triển sau môn học.",
  },
];

export function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-band intro-band">
        <div className="section-inner two-column">
          <ScrollReveal className="section-heading">
            <span className="eyebrow">
              <UserRound size={16} strokeWidth={1.8} />
              Trang giới thiệu cá nhân
            </span>
            <h2>Người học trên con đường công nghệ số</h2>
            <p>
              Phần mở đầu này giới thiệu ngắn gọn thông tin cá nhân, mục tiêu học tập
              và lý do portfolio được xây dựng như một hệ thống lưu trữ tri thức.
            </p>
          </ScrollReveal>

          <ScrollReveal className="profile-list" delay={120}>
            <div>
              <span>Họ tên</span>
              <strong>{profile.fullName}</strong>
            </div>
            <div>
              <span>MSSV</span>
              <strong>{profile.studentId}</strong>
            </div>
            <div>
              <span>Ngành học</span>
              <strong>{profile.major}</strong>
            </div>
            <div>
              <span>Lớp</span>
              <strong>{profile.className}</strong>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-band">
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
            <h3>Định hướng</h3>
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

      <section className="section-band portfolio-goal-band">
        <div className="section-inner two-column align-center">
          <ScrollReveal className="goal-copy">
            <span className="eyebrow">
              <Award size={16} strokeWidth={1.8} />
              Mục tiêu của Portfolio
            </span>
            <h2>Đạo thư số ghi lại cả sản phẩm lẫn quá trình</h2>
            <p>{profile.portfolioGoal}</p>
            <p>
              Portfolio không chỉ là nơi đặt link bài nộp. Nó là bản đồ học tập:
              mỗi bài được trình bày lại bằng ngôn ngữ web, có mục tiêu, quy trình,
              kết quả, minh chứng và phần tri thức rút ra.
            </p>
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
    </>
  );
}
