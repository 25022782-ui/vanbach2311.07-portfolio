import heroHomeFallback from "../assets/generated/hero-home.svg";
import heroProjectsFallback from "../assets/generated/hero-projects.svg";
import heroReflectionFallback from "../assets/generated/hero-reflection.svg";
import assignment1Fallback from "../assets/generated/assignment-1.svg";
import assignment2Fallback from "../assets/generated/assignment-2.svg";
import assignment3Fallback from "../assets/generated/assignment-3.svg";
import assignment4Fallback from "../assets/generated/assignment-4.svg";
import assignment5Fallback from "../assets/generated/assignment-5.svg";
import assignment6Fallback from "../assets/generated/assignment-6.svg";
import youngCultivatorFallback from "../assets/decorative/young-cultivator.svg";
import goddessSilkFallback from "../assets/decorative/goddess-silk.svg";
import spiritCraneFallback from "../assets/decorative/spirit-crane.svg";
import inkDragonFallback from "../assets/decorative/ink-dragon.svg";
import scholarSwordFallback from "../assets/decorative/scholar-sword.svg";

export type ArtAsset = {
  src: string;
  fallback: string;
  fileName: string;
};

const transparentFallback =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

const generatedArtPath = (fileName: string) =>
  `${import.meta.env.BASE_URL}generated-art/${fileName}`;

const createArtAsset = (fileName: string, fallback: string): ArtAsset => ({
  src: generatedArtPath(fileName),
  fallback,
  fileName,
});

export const heroArt = {
  home: createArtAsset("hero-home-ink-cultivation.png", heroHomeFallback),
  projects: createArtAsset("hero-projects-six-gates.png", heroProjectsFallback),
  reflection: createArtAsset("hero-reflection-summit.png", heroReflectionFallback),
} as const;

export const assignmentCoverArt = {
  bai1: createArtAsset("assignment-1-computer-peripherals.png", assignment1Fallback),
  bai2: createArtAsset("assignment-2-data-knowledge-scroll.png", assignment2Fallback),
  bai3: createArtAsset("assignment-3-ai-spirit-array.png", assignment3Fallback),
  bai4: createArtAsset("assignment-4-digital-collaboration.png", assignment4Fallback),
  bai5: createArtAsset("assignment-5-digital-creation-ink.png", assignment5Fallback),
  bai6: createArtAsset("assignment-6-academic-integrity-shield.png", assignment6Fallback),
} as const;

export const characterArt = {
  youngCultivator: createArtAsset(
    "character-young-cultivator-transparent.png",
    youngCultivatorFallback,
  ),
  goddessSilk: createArtAsset(
    "character-knowledge-goddess-transparent.png",
    goddessSilkFallback,
  ),
  spiritCrane: createArtAsset("character-spirit-crane-transparent.png", spiritCraneFallback),
  inkDragon: createArtAsset("character-ink-dragon-transparent.png", inkDragonFallback),
  scholarSword: createArtAsset(
    "character-scholar-swordmaster-transparent.png",
    scholarSwordFallback,
  ),
} as const;

export const decorArt = {
  clouds: createArtAsset("decor-ink-clouds-transparent.png", transparentFallback),
  distantMountains: createArtAsset("decor-distant-ink-mountains.png", transparentFallback),
  mountainsOne: createArtAsset("character-ink-mountains-1.png", transparentFallback),
  mountainsTwo: createArtAsset("character-ink-mountains-2.png", transparentFallback),
  orbitA: createArtAsset("character-ink-hero-orbit-a.png", transparentFallback),
  orbitB: createArtAsset("character-ink-hero-orbit-b.png", transparentFallback),
  moonParticles: createArtAsset(
    "decor-moon-spirit-particles-transparent.png",
    transparentFallback,
  ),
  inkWash: createArtAsset("decor-ink-wash-transparent.png", transparentFallback),
  knowledgeRune: createArtAsset("decor-knowledge-rune-transparent.png", transparentFallback),
} as const;

export const videoArt = {
  background: createArtAsset("midterm-video-bg.png", transparentFallback),
  playRune: createArtAsset("play-rune-icon.png", transparentFallback),
  guardian: createArtAsset("video-guardian-character.png", transparentFallback),
} as const;

export type CharacterKind = keyof typeof characterArt;
