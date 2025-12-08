import clsx from "clsx";
import { InputFieldProps } from "../types/InputField";

export const InputField = ({
  value,
  setValueAction,
  className,
  placeholder,
	background = "white",
	type = "text",
}: InputFieldProps) => {
  return (
    <input
      value={value}
      onChange={(e) => setValueAction(e.target.value)}
			placeholder={placeholder}
      className={clsx(
				"w-full p-3 rounded-[8px] placeholder:text-dark-gray text-text-primary placeholder:text-[16px] text-[16px] outline-none",
				className,
				background,
			)}
      type={type}
    />
  );
};
