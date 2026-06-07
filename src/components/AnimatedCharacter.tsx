import { CharacterKind, characterArt } from "../data/generatedArt";
import { GeneratedArtImage } from "./GeneratedArtImage";

type AnimatedCharacterProps = {
  kind: CharacterKind;
  className?: string;
  label?: string;
};

const defaultLabels: Record<CharacterKind, string> = {
  youngCultivator: "Đạo sĩ trẻ trang trí",
  goddessSilk: "Thần nữ dải lụa trang trí",
  spiritCrane: "Linh hạc trang trí",
  inkDragon: "Long ảnh mực trang trí",
  scholarSword: "Học giả kiếm tiên trang trí",
};

export function AnimatedCharacter({ kind, className = "", label }: AnimatedCharacterProps) {
  return (
    <GeneratedArtImage
      className={`animated-character animated-character-${kind} ${className}`}
      asset={characterArt[kind]}
      alt={label ?? defaultLabels[kind]}
      loading="lazy"
      aria-hidden="true"
    />
  );
}
