import { IconProps } from "@/types/icon-props";

export const ExitIcon = ({
  width = 24,
  height = 24,
  fill = "#FB7579",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9_154)">
        <g clipPath="url(#clip1_9_154)">
          <path
            d="M16.5 12H3M3 12L7.70123 7M3 12L7.70123 17"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V7C21 5.11438 21 4.17157 20.4142 3.58579C19.8284 3 18.8856 3 17 3H14"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_9_154">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 -1 24 24)"
          />
        </clipPath>
        <clipPath id="clip1_9_154">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(0 -1 1 0 0 24)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
