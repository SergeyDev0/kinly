import { Dispatch, SetStateAction } from "react";

export type InputFieldProps = {
	value: string | number,
  setValueAction: Dispatch<SetStateAction<string>>,
  className?: string,
  placeholder: string,
	background?: string,
	type?: string,
};