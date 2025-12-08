import { IconProps } from "@/types/icon-props";

export const SuccessCircleIcon = ({
  width = 60,
  height = 60,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_207_12571)">
        <path
          d="M42.7468 25.6873C43.0884 25.3337 43.2773 24.8601 43.2731 24.3685C43.2688 23.8769 43.0716 23.4066 42.724 23.0589C42.3763 22.7113 41.9061 22.5141 41.4144 22.5098C40.9228 22.5056 40.4492 22.6946 40.0956 23.0361L26.4081 36.7236L20.2206 30.5361C19.8669 30.1946 19.3933 30.0056 18.9017 30.0098C18.4101 30.0141 17.9398 30.2113 17.5921 30.5589C17.2445 30.9066 17.0473 31.3769 17.043 31.8685C17.0388 32.3601 17.2278 32.8337 17.5693 33.1874L25.0693 40.6874C25.4209 41.0389 25.8977 41.2363 26.3949 41.2363C26.8921 41.2363 27.3689 41.0389 27.7206 40.6874L42.7206 25.6873H42.7468Z"
          fill="url(#paint0_linear_207_12571)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 0C13.425 0 0 13.425 0 30C0 46.575 13.425 60 30 60C46.575 60 60 46.575 60 30C60 13.425 46.575 0 30 0ZM3.75 30C3.75 15.4875 15.4875 3.75 30 3.75C44.5125 3.75 56.25 15.4875 56.25 30C56.25 44.5125 44.5125 56.25 30 56.25C15.4875 56.25 3.75 44.5125 3.75 30Z"
          fill="url(#paint1_linear_207_12571)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_207_12571"
          x1="17.043"
          y1="31.873"
          x2="43.2731"
          y2="31.873"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#507CFF" />
          <stop offset="1" stopColor="#5E48DC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_207_12571"
          x1="0"
          y1="30"
          x2="60"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#507CFF" />
          <stop offset="1" stopColor="#5E48DC" />
        </linearGradient>
        <clipPath id="clip0_207_12571">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
