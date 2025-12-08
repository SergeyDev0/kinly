import { IconProps } from "@/types/icon-props";

export const MarkerIcon = ({ width = 12, height = 12, fill = "#507CFF" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill={fill} fillOpacity="0.2" />
      <circle cx="6" cy="6" r="4" fill={fill} fillOpacity="0.4" />
      <circle cx="6" cy="6" r="2" fill={fill} />
    </svg>
  );
};
