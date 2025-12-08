"use client";

import { videoExamples } from "@/components/aiPostcardClient/model/examples";
import { Slide } from "@/components/slide/ui/Slide";
import { Slider } from "@/components/slider/ui/Slider";
import Image from "next/image";

export const SlideShowSlider = () => {
  return (
    <Slider className="lg:hidden">
      {videoExamples.map((src, i) => (
        <Slide key={i}>
          <Image
            width={200}
            height={135}
            src={src}
            alt={`Пример №${i}`}
            className="block h-full w-auto pointer-events-none"
          />
        </Slide>
      ))}
    </Slider>
  );
};
