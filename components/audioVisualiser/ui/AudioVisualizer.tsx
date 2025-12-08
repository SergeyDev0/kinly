"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AudioVisualizerProps } from "../types/AudioVisualizer";
import { PauseIcon } from "@/assets/icons/svg/pause";
import { PlayIcon } from "@/assets/icons/svg/play";
import { LoaderIcon } from "@/assets/icons/svg/loader";

const BAR_WIDTH = 2;
const GAP = 5;
const DEFAULT_BARS = 200;

const waveformCache = new Map<string, number[]>();

export const AudioVisualizer = ({ src }: AudioVisualizerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [waveform, setWaveform] = useState<number[] | null>(() =>
    waveformCache.get(src) ?? Array(DEFAULT_BARS).fill(0.75),
  );
  const [playing, setPlaying] = useState(false);
  const [progressIndex, setProgressIndex] = useState(0);
  const [wasStarted, setWasStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const buildWaveform = useCallback(async (): Promise<number[]> => {
    if (waveformCache.has(src)) {
      return waveformCache.get(src)!;
    }

    const normalized = Array(DEFAULT_BARS).fill(0.75);
    waveformCache.set(src, normalized);
    return normalized;
  }, [src]);

  // ----------------------------
  // RESIZE CANVAS
  // ----------------------------
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, width, height);
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // ----------------------------
  // DRAW LOOP (БЕЗ setState ВНУТРИ!)
  // ----------------------------
  useEffect(() => {
    if (!waveform) return;

    const canvas = canvasRef.current;
    const audio = audioRef.current;
    if (!canvas || !audio) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      requestAnimationFrame(draw);

      const width = canvas.width;
      const height = canvas.height;

      if (width === 0 || height === 0) return;

      ctx.clearRect(0, 0, width, height);

      const totalBars = Math.max(
        1,
        Math.floor(width / (BAR_WIDTH + GAP)),
      );

      // ресэмплинг waveform под текущее кол-во столбиков
      const wf: number[] = [];
      for (let i = 0; i < totalBars; i++) {
        const idx = Math.floor((i / totalBars) * waveform.length);
        wf.push(waveform[idx]);
      }

      const center = height / 2;

      const EPS = 0.015;
      const softEnded =
        audio.duration > 0 &&
        audio.currentTime >= audio.duration - EPS;
      const ended = softEnded && !playing;

      // индекс прогресса:
      // - если играет — считаем по currentTime
      // - если на паузе / после seek — берём из стейта
      let currentIndex = progressIndex;
      if (playing && audio.duration > 0) {
        currentIndex = Math.floor(
          Math.min(audio.currentTime / audio.duration, 0.99) * totalBars,
        );
      }

      const clampedIndex = Math.max(
        0,
        Math.min(currentIndex, totalBars - 1),
      );

      for (let i = 0; i < totalBars; i++) {
        const h = wf[i];
        const barHeight = h * height;
        const x = i * (BAR_WIDTH + GAP);
        const y = center - barHeight / 2;

        // серый фон
        ctx.fillStyle = "#616A75";
        ctx.beginPath();
        ctx.roundRect(x, y, BAR_WIDTH, barHeight, 2);
        ctx.fill();

        if (ended) continue;
        if (!wasStarted) continue;

        // синий прогресс
        if (i <= clampedIndex) {
          ctx.fillStyle = "#5865F2";
          ctx.beginPath();
          ctx.roundRect(x, y, BAR_WIDTH, barHeight, 2);
          ctx.fill();
        }
      }
    };

    draw();
  }, [waveform, playing, progressIndex, wasStarted]);

  // ----------------------------
  // STOP OTHER PLAYERS + RESET
  // ----------------------------
  useEffect(() => {
    const handler = (e: any) => {
      const current = audioRef.current;
      const playingAudio = e.detail;

      if (current && current !== playingAudio) {
        current.pause();
        current.currentTime = 0;
        setPlaying(false);
        setProgressIndex(0);
        setWasStarted(false);
      }
    };

    window.addEventListener("AUDIO_VISUALIZER_PLAY", handler);
    return () => window.removeEventListener("AUDIO_VISUALIZER_PLAY", handler);
  }, []);

  const stopOthers = () => {
    const audio = audioRef.current!;
    window.dispatchEvent(
      new CustomEvent("AUDIO_VISUALIZER_PLAY", { detail: audio }),
    );
  };

  // ----------------------------
  // SEEK
  // ----------------------------
  const onSeek = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;
    if (!canvas || !audio || !waveform || loading) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / canvas.clientWidth);

    const totalBars = Math.max(
      1,
      Math.floor(canvas.width / (BAR_WIDTH + GAP)),
    );

    let idx = Math.floor(x / (BAR_WIDTH + GAP));
    idx = Math.max(0, Math.min(idx, totalBars - 1));

    setProgressIndex(idx);

    const progress = idx / totalBars;
    audio.currentTime = audio.duration * progress;

    if (!wasStarted) setWasStarted(true);
  };

  // ----------------------------
  // PLAY/PAUSE
  // ----------------------------
  const togglePlay = async () => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return;

    if (loading) return;

    let currentWaveform = waveform;

    if (!currentWaveform) {
      try {
        setLoading(true);
        currentWaveform = await buildWaveform();
        setWaveform(currentWaveform);
      } catch (error) {
        console.error("Failed to build waveform", error);
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    }

    const totalBars = Math.max(
      1,
      Math.floor(canvas.width / (BAR_WIDTH + GAP)),
    );

    if (!playing) {
      stopOthers();
      audio.play();
      if (!wasStarted) setWasStarted(true);
      setPlaying(true);
    } else {
      if (audio.duration > 0) {
        const idx = Math.floor(
          Math.min(audio.currentTime / audio.duration, 0.99) * totalBars,
        );
        setProgressIndex(idx);
      }
      audio.pause();
      setPlaying(false);
    }
  };

  // ----------------------------
  // END OF AUDIO
  // ----------------------------
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnd = () => {
      setPlaying(false);
      setProgressIndex(0);
      setWasStarted(false);
      audio.currentTime = 0;
    };

    audio.addEventListener("ended", handleEnd);
    return () => audio.removeEventListener("ended", handleEnd);
  }, []);

  return (
    <div className="flex items-center gap-3 bg-[#E8F0FF] px-2 py-2 rounded-full w-full">
      <button
        onClick={togglePlay}
        className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0"
        disabled={loading}
      >
        {loading ? (
          <div className="w-5 h-5 flex items-center justify-center animate-spin">
            <LoaderIcon width={20} height={20} />
          </div>
        ) : playing ? (
          <PauseIcon />
        ) : (
          <PlayIcon />
        )}
      </button>

      <canvas
        ref={canvasRef}
        className="flex-1 h-[20px] w-full cursor-pointer"
        onClick={onSeek}
      />

      <audio ref={audioRef} src={src} />
    </div>
  );
};
