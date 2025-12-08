import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SliderProps {
  children: React.ReactNode;
  className?: string;
}

export const Slider = ({ children, className }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    drag: true,
    rubberband: false,
    slides: {
      perView: "auto",
      spacing: 12,
    },
    initial: 0,
    created(s) {
      setLoaded(true);
      setDotCount(s.track.details.maxIdx + 1);
      setCurrentSlide(s.track.details.rel);
    },
    updated(s) {
      setDotCount(s.track.details.maxIdx + 1);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className={clsx("w-full flex flex-col items-center", className)}>
      <div ref={sliderRef} className="keen-slider w-full">
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="keen-slider__slide flex-shrink-0 !w-auto !min-w-auto"
          >
            {child}
          </div>
        ))}
      </div>

      {loaded && slider.current && dotCount > 1 && (
        <div className="flex gap-2 mt-2 justify-center">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => slider.current?.moveToIdx(i)}
              className="focus:outline-none"
            >
              <motion.div
                className={clsx(
                  "h-2 rounded-full transition-all duration-200",
                  i === currentSlide ? "bg-accent-blue w-6" : "bg-dark-blue w-2"
                )}
                animate={{
                  width: i === currentSlide ? 24 : 8,
                  backgroundColor: i === currentSlide ? "#507CFF" : "#B9CBFF",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
