import type { CSSProperties } from "react";

export function InkBackground() {
  return (
    <div className="ink-background" aria-hidden="true">
      <div className="paper-grain" />
      <div className="moon-glow" />
      <div className="mist mist-one" />
      <div className="mist mist-two" />
      <div className="mountain-range mountain-back" />
      <div className="mountain-range mountain-front" />
      <div className="spirit-particles">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ "--particle-index": index } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
