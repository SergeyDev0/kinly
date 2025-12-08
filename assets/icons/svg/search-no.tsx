import { IconProps } from "@/types/icon-props";

export const SearchNoIcon = ({
  width = 120,
  height = 120,
  fill = "#A8B0C0",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.5 42.5L42.5 67.5M42.5 42.5L67.5 67.5M105 105L83.5 83.5M95 55C95 77.0914 77.0914 95 55 95C32.9086 95 15 77.0914 15 55C15 32.9086 32.9086 15 55 15C77.0914 15 95 32.9086 95 55Z"
        stroke={fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
