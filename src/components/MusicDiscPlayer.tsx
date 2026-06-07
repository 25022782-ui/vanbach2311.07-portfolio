import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { videoArt } from "../data/generatedArt";
import { GeneratedArtImage } from "./GeneratedArtImage";

const audioSrc = `${import.meta.env.BASE_URL}audio/background-music.mp3`;
const missingAudioMessage =
  "Chưa có file nhạc nền. Hãy thêm file vào /public/audio/background-music.mp3";

export function MusicDiscPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasRandomizedStartRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("Nhạc nền");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const startAtRandomPosition = () => {
    const audio = audioRef.current;

    if (!audio || hasRandomizedStartRef.current) {
      return;
    }

    hasRandomizedStartRef.current = true;
    const { duration } = audio;

    if (Number.isFinite(duration) && duration > 20) {
      const min = 5;
      const max = duration - 10;
      audio.currentTime = Math.random() * (max - min) + min;
    }
  };

  const waitForMetadata = () => {
    const audio = audioRef.current;

    if (!audio || audio.readyState >= HTMLMediaElement.HAVE_METADATA) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const cleanup = () => {
        audio.removeEventListener("loadedmetadata", handleMetadata);
        audio.removeEventListener("error", handleError);
        window.clearTimeout(timer);
        resolve();
      };

      const handleMetadata = () => cleanup();
      const handleError = () => cleanup();
      const timer = window.setTimeout(cleanup, 1500);

      audio.addEventListener("loadedmetadata", handleMetadata, { once: true });
      audio.addEventListener("error", handleError, { once: true });
      audio.load();
    });
  };

  const handleToggle = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setMessage("Đã tạm dừng nhạc nền");
      return;
    }

    try {
      if (!hasRandomizedStartRef.current) {
        await waitForMetadata();
        startAtRandomPosition();
      }

      await audio.play();
      setIsPlaying(true);
      setMessage("Đang phát nhạc nền");
    } catch {
      setIsPlaying(false);
      setMessage(missingAudioMessage);
    }
  };

  return (
    <aside className="music-player" aria-label="Nhạc nền">
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        loop
        onPlay={() => {
          setIsPlaying(true);
          setMessage("Đang phát nhạc nền");
        }}
        onPause={() => {
          setIsPlaying(false);
          setMessage("Đã tạm dừng nhạc nền");
        }}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setMessage(missingAudioMessage);
        }}
      />
      <button
        className={`music-disc ${isPlaying ? "is-playing" : ""}`}
        type="button"
        onClick={handleToggle}
        aria-label={isPlaying ? "Tạm dừng nhạc nền" : "Phát nhạc nền"}
        title={message}
      >
        <span className="disc-plate" aria-hidden="true">
          <GeneratedArtImage className="music-rune-art" asset={videoArt.playRune} alt="" aria-hidden="true" />
          <span className="disc-ring" />
        </span>
        <span className="disc-core">{isPlaying ? <Pause size={18} /> : <Play size={18} />}</span>
      </button>
      <span className="music-label">
        <Volume2 size={14} />
        {message}
      </span>
    </aside>
  );
}
