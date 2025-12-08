import type { Dispatch, SetStateAction } from "react";

export type GroupRadio = {
  options: string[];
  activeId: number;
  setActiveIdAction: Dispatch<SetStateAction<number>>;
	className?: string;
};
