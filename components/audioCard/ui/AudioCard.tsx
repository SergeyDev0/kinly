import { AudioVisualizer } from "@/components/audioVisualiser/ui/AudioVisualizer";
import Image from "next/image";
import { AudioCardProps } from "../types/AudioCard";
import clsx from "clsx";

export const AudioCard = ({
  src,
  audio,
  background = "bg-blue",
  className,
}: AudioCardProps) => {
  return (
    <div className={clsx("p-3 rounded-[12px] bg-blue", background, className)}>
      <Image
        className="mb-2 w-full h-auto"
        width={240}
        height={160}
        src={src}
        alt="Пример песни"
      />
      <AudioVisualizer src={audio} />
    </div>
  );
};
