'use client'
import clsx from "clsx";
import { GroupRadio as iGroupRadio } from "../types/GroupRadio";

export const GroupRadio = ({ className, activeId, setActiveIdAction, options }: iGroupRadio) => {
	return (
		<div className="flex items-center gap-3">
			{options.map((option, i) => (
				<button
					key={i}
					className={clsx("gap-2 flex items-center text-[14px] text-dark-gray", className)}
					onClick={() => setActiveIdAction(i)}
				>
					<div className={clsx(
						"size-[20px] rounded-full flex justify-center items-center border-2 transition-all duration-200",
						i === activeId ? "bg-accent-blue border-accent-blue" : "bg-transparent border-gray"
					)}>
						<div className={clsx(
							"size-2 rounded-full transition-all duration-200",
							i === activeId ? "bg-white" : "bg-transparent"
						)} />
					</div>
					<span>{option}</span>
				</button>
			))}
		</div>
	);
};