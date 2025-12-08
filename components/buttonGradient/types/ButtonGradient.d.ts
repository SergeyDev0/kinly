import { ReactNode } from "react";

export type ButtonGradientProps = {
	className?: string,
	children?: ReactNode,
	href?: string,
	onClickAction?: (event: React.MouseEvent<HTMLButtonElement>) => void,
	variant?: "white" | "blue"
};