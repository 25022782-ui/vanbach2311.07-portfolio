import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-mark">
          <Sparkles size={18} strokeWidth={1.8} />
        </span>
        <p>
          Portfolio học tập môn Nhập môn Công nghệ số và Ứng dụng trí tuệ nhân tạo.
        </p>
      </div>
    </footer>
  );
}
