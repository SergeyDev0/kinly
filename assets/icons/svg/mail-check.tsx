import { IconProps } from "@/types/icon-props";

export const MailCheckIcon = ({
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
        d="M110 65V30C110 27.3478 108.946 24.8043 107.071 22.9289C105.196 21.0536 102.652 20 100 20H20C17.3478 20 14.8043 21.0536 12.9289 22.9289C11.0536 24.8043 10 27.3478 10 30V90C10 95.5 14.5 100 20 100H60M110 35L65.15 63.5C63.6064 64.4671 61.8216 64.9801 60 64.9801C58.1784 64.9801 56.3936 64.4671 54.85 63.5L10 35M80 95L90 105L110 85"
        stroke={fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
