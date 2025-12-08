import Link from "next/link";
import { ButtonGradientProps } from "../types/ButtonGradient";

export const ButtonGradient = ({
  className,
  children,
  href,
  onClickAction,
  variant = "white",
}: ButtonGradientProps) => {
  const variantClasses = {
    white: "bg-gradient-to-b to-[#C9E7FF] from-[#FFFFFF] text-black",
    blue: "bg-gradient-to-r from-[#507CFF] to-[#5E48DC] text-white",
  };

  const baseClasses = `py-[16px] px-[40px] flex justify-center items-center rounded-full 
                       text-[18px] font-medium ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href || "#"} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClickAction} className={baseClasses}>
      {children}
    </button>
  );
};
