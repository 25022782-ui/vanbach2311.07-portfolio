import { Mail, Sparkles, UserRound } from "lucide-react";
import type { CSSProperties } from "react";
import { profile } from "../data/profile";

const facebookUrl = "https://www.facebook.com/bachvan2224";
const zaloUrl = "https://zalo.me/0914675105";
const facebookLogo = `${import.meta.env.BASE_URL}generated-art/contact-facebook.png`;
const zaloLogo = `${import.meta.env.BASE_URL}generated-art/contact-zalo.png`;

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-heading">
          <span className="footer-mark">
            <Sparkles size={18} strokeWidth={1.8} />
          </span>
          <div>
            <span className="eyebrow">Liên hệ</span>
            <h2>Thông tin cá nhân</h2>
            <p>
              Nếu cần đối chiếu thông tin học phần hoặc trao đổi về portfolio, có thể
              liên hệ với tôi qua các thông tin dưới đây.
            </p>
          </div>
        </div>

        <div className="footer-contact-grid" aria-label="Thông tin liên hệ">
          <div className="footer-contact-card">
            <span>
              <UserRound size={16} />
              Họ tên
            </span>
            <strong>{profile.fullName}</strong>
          </div>
          <div className="footer-contact-card">
            <span>
              <Mail size={16} />
              Email
            </span>
            <strong>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </strong>
          </div>
          <a
            className="footer-contact-card social-contact-card facebook-contact-card"
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            style={{ "--contact-logo": `url(${facebookLogo})` } as CSSProperties}
            aria-label="Mở Facebook của Nông Văn Bách"
          >
            <span>
              <img className="contact-social-logo" src={facebookLogo} alt="" aria-hidden="true" />
              Facebook
            </span>
            <strong>facebook.com/bachvan2224</strong>
          </a>
          <a
            className="footer-contact-card social-contact-card zalo-contact-card"
            href={zaloUrl}
            target="_blank"
            rel="noreferrer"
            style={{ "--contact-logo": `url(${zaloLogo})` } as CSSProperties}
            aria-label="Mở Zalo của Nông Văn Bách"
          >
            <span>
              <img className="contact-social-logo" src={zaloLogo} alt="" aria-hidden="true" />
              Zalo
            </span>
            <strong>zalo.me/0914675105</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
