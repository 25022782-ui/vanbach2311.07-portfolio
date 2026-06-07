import { useState, type ImgHTMLAttributes } from "react";
import type { ArtAsset } from "../data/generatedArt";

type GeneratedArtImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  asset: ArtAsset;
};

export function GeneratedArtImage({ asset, ...imageProps }: GeneratedArtImageProps) {
  const [mode, setMode] = useState<"primary" | "fallback" | "missing">("primary");

  if (mode === "missing") {
    return null;
  }

  const src = mode === "fallback" ? asset.fallback : asset.src;

  return (
    <img
      {...imageProps}
      src={src}
      data-generated-art={asset.fileName}
      data-art-mode={mode}
      onError={() => setMode(mode === "primary" ? "fallback" : "missing")}
    />
  );
}
