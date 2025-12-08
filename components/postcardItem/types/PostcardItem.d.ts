import { Dispatch, SetStateAction } from "react";

export type PostcardItemProps = {
	selectedId: number,
	setSelectedId: Dispatch<SetStateAction<number>>,
	id: number,
	img: string,
	title: string,
	width?: number,
	height?: number,
};