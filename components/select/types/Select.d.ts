import { Dispatch, SetStateAction } from "react";

export type SelectProps = {
	options: string[];
	value: string,
	setValue: Dispatch<SetStateAction<string>>,
}