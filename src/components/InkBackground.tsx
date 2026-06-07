import type { CSSProperties } from "react";
import { decorArt } from "../data/generatedArt";
import { GeneratedArtImage } from "./GeneratedArtImage";

export function InkBackground() {
  return (
    <div className="ink-background" aria-hidden="true">
      <div className="paper-grain" />
      <GeneratedArtImage className="decor-moon-glow" asset={decorArt.moonParticles} alt="" />
      <GeneratedArtImage className="decor-cloud-strip decor-cloud-strip-one" asset={decorArt.clouds} alt="" />
      <GeneratedArtImage className="decor-cloud-strip decor-cloud-strip-two" asset={decorArt.clouds} alt="" />
      <GeneratedArtImage className="decor-ink-wash decor-ink-wash-one" asset={decorArt.inkWash} alt="" />
      <GeneratedArtImage className="decor-knowledge-rune" asset={decorArt.knowledgeRune} alt="" />
      <GeneratedArtImage className="decor-distant-mountains" asset={decorArt.distantMountains} alt="" />
      <GeneratedArtImage className="mountain-range mountain-back" asset={decorArt.mountainsOne} alt="" />
      <GeneratedArtImage className="mountain-range mountain-front" asset={decorArt.mountainsTwo} alt="" />
      <div className="spirit-particles">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} style={{ "--particle-index": index } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
