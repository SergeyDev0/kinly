import { IconProps } from "@/types/icon-props";

export const PlayIcon = ({
  width = 24,
  height = 24,
  fill = "#ffffff",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="12" height="12" rx="2" fill={fill} />
    </svg>
  );
};
