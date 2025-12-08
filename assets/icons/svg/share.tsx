import { IconProps } from "@/types/icon-props";

export const ShareIcon = ({
  width = 32,
  height = 32,
  fill = "#465067",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4533 18.0134L20.56 23.32M20.5467 8.68002L11.4533 13.9867M28 6.66669C28 8.87583 26.2091 10.6667 24 10.6667C21.7909 10.6667 20 8.87583 20 6.66669C20 4.45755 21.7909 2.66669 24 2.66669C26.2091 2.66669 28 4.45755 28 6.66669ZM12 16C12 18.2092 10.2091 20 8 20C5.79086 20 4 18.2092 4 16C4 13.7909 5.79086 12 8 12C10.2091 12 12 13.7909 12 16ZM28 25.3334C28 27.5425 26.2091 29.3334 24 29.3334C21.7909 29.3334 20 27.5425 20 25.3334C20 23.1242 21.7909 21.3334 24 21.3334C26.2091 21.3334 28 23.1242 28 25.3334Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
