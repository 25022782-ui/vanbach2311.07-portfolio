import { AnimatedCharacter } from "./AnimatedCharacter";

type FloatingDecorProps = {
  variant: "home" | "projects" | "reflection" | "detail";
};

export function FloatingDecor({ variant }: FloatingDecorProps) {
  return (
    <div className={`floating-decor floating-decor-${variant}`} aria-hidden="true">
      {variant === "home" && (
        <>
          <AnimatedCharacter kind="youngCultivator" className="decor-cultivator" />
          <AnimatedCharacter kind="spiritCrane" className="decor-crane" />
        </>
      )}
      {variant === "projects" && (
        <>
          <AnimatedCharacter kind="inkDragon" className="decor-dragon" />
          <AnimatedCharacter kind="scholarSword" className="decor-scholar" />
        </>
      )}
      {variant === "reflection" && (
        <>
          <AnimatedCharacter kind="goddessSilk" className="decor-goddess" />
          <AnimatedCharacter kind="spiritCrane" className="decor-crane reflection-crane" />
        </>
      )}
      {variant === "detail" && (
        <AnimatedCharacter kind="scholarSword" className="decor-detail-scholar" />
      )}
    </div>
  );
}
