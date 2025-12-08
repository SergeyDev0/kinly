import { ReactNode } from "react";

export type ButtonProps = {
  variant?: "solid" | "outline" | "file";
  className?: string;
  onClickAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  htmlFor?: string;
  href?: string;
  type?: string;
};