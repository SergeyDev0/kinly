// components/audioSlider/AudioSlider.tsx
"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SliderProps {
  children: React.ReactNode;
  className?: string;
}

export const AudioSlider = ({ children, className }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [ready, setReady] = useState(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    renderMode: "performance",
    drag: true,
    rubberband: false,
    slides: {
      perView: "auto",
      spacing: 12,
    },
    initial: 0,
    created(s) {
      setReady(true);
      setSnapCount(s.track.details.maxIdx + 1);
      setCurrent(s.track.details.rel);
    },
    updated(s) {
      setSnapCount(s.track.details.maxIdx + 1);
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
  });

  const arrayChildren = React.Children.toArray(children);

  return (
    <div className={clsx("w-full min-w-0 flex flex-col items-center", className)}>
      <div ref={sliderRef} className="keen-slider w-full">
        {arrayChildren.map((child, i) => (
          <div key={i} className="keen-slider__slide !w-auto !min-w-max flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {ready && slider.current && snapCount > 1 && (
        <div className="flex gap-2 mt-3 justify-center">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => slider.current?.moveToIdx(i)}
              className="focus:outline-none"
            >
              <motion.div
                animate={{
                  width: i === current ? 24 : 8,
                  backgroundColor: i === current ? "#507CFF" : "#B9CBFF",
                }}
                className="h-2 rounded-full transition-all"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
