"use client";

import clsx from "clsx";
import Link from "next/link";
import { ButtonProps } from "../types/Button";

export const Button = ({
  type,
  variant = "solid",
  className,
  onClickAction,
  children,
  htmlFor,
  href,
}: ButtonProps) => {

  const baseClasses = clsx(
    "px-[40px] rounded-full cursor-pointer",
    variant === "solid" && "text-blue bg-accent-blue",
    variant === "outline" && "bg-transparent text-accent-blue border-2 border-accent-blue",
    className
  );

  if (type === "file") {
    return (
      <label htmlFor={htmlFor} className={baseClasses}>
        {children}
      </label>
    );
  }

  if (href) {
    return (
      <Link href={href} className={clsx("block w-fit", baseClasses)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClickAction}>
      {children}
    </button>
  );
};
