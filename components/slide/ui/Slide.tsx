import clsx from "clsx";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export const Slide = ({ children, className }: SlideProps) => (
  <div
    className={clsx(
      "relative h-[135px] flex items-center justify-center rounded-[20px] overflow-hidden bg-white",
      className
    )}
  >
    {children}
  </div>
);
