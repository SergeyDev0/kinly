import { IconProps } from "@/types/icon-props";

export const ArrowLeftIcon = ({
  width = 32,
  height = 32,
  fill = "#507CFF",
  strokeWidth = 2,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0008 27.1998L4.80078 15.9998M4.80078 15.9998L16.0008 4.7998M4.80078 15.9998H27.2008"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
