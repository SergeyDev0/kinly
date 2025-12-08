import type { Dispatch, SetStateAction } from "react";

export type GroupTabs = {
  tabs: string[] | ReactNode[];
  activeTab: number;
  setActiveTabAction: Dispatch<SetStateAction<number>>;
	className?: string;
	background?: string;
};

export type Indicator = {
	width: number;
	height: number;
	left: number;
	top: number;
};
