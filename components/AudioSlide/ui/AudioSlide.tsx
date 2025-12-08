// AudioSlide.tsx
import clsx from "clsx";
import { AudioVisualizer } from "@/components/audioVisualiser/ui/AudioVisualizer";
import Image from "next/image";

interface SlideProps {
  src: string;
  audio: string;
  className?: string;
}

export const AudioSlide = ({ src, audio, className }: SlideProps) => {
  return (
    <div className={clsx("flex", className)}>
      <div className="p-3 rounded-[12px] bg-white min-w-[220px] max-w-[260px]">
        <Image
          className="mb-2 w-full h-auto"
          width={240}
          height={160}
          src={src}
          alt="Пример песни"
        />
        <AudioVisualizer src={audio} />
      </div>
    </div>
  );
};
