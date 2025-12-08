import { IconProps } from "@/types/icon-props";

export const SubtractIcon = ({
  width = 30,
  height = 70,
  fill = "#ffffff",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0341797 0C0.0124206 0.330553 0 0.663941 0 1C0 9.28427 6.71573 16 15 16C23.2843 16 30 9.28427 30 1C30 0.663941 29.9876 0.330553 29.9658 0H30V70C30 61.7157 23.2843 55 15 55C6.71573 55 0 61.7157 0 70V0H0.0341797Z"
        fill={fill}
      />
    </svg>
  );
};
