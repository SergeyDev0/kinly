import { IconProps } from "@/types/icon-props";

export const AudioLinesIcon = ({
  width = 24,
  height = 24,
  fill = "#465067",
	strokeWidth = 2,
}: IconProps & {strokeWidth?: number}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10V13M6 6V17M10 3V21M14 8V15M18 5V18M22 10V13"
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
