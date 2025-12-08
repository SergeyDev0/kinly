import { IconProps } from "@/types/icon-props";

export const PauseIcon = ({
  width = 10,
  height = 12,
  fill = "#ffffff",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3" height="12" rx="1.5" fill={fill} />
      <rect x="7" width="3" height="12" rx="1.5" fill={fill} />
    </svg>
  );
};
