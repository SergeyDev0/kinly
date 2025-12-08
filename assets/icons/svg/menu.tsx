import { IconProps } from "@/types/icon-props";

export const MenuIcon = ({
  width = 32,
  height = 32,
  fill = "#507CFF",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5H20M4 12H20M4 19H20"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
