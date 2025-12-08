import clsx from "clsx";
import { ContainerProps } from "../types/Container";

export const Container = ({ className, children }: ContainerProps) => {
	return (
		<div className={clsx("grow rounded-[40px] p-6 bg-blue min-h-0 max-ssm:p-4 max-ssm:rounded-[20px]", className)}>
			{children}
		</div>
	);
};