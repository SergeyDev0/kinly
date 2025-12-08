import { ChevronRightIcon } from "@/assets/icons/svg/chevron-right";
import { SelectProps } from "../types/Select";

export const Select = ({ options, setValue, value }: SelectProps) => {
	return (
		<div className="h-[48px] relative">
			<select
				className="w-full h-full font-medium bg-white text-text-primary rounded-lg appearance-none outline-none px-3 cursor-pointer"
				onChange={(e) => setValue(e.target.value)}
				value={value}
			>
				{options.map((option, i) => (
					<option key={i}>{option}</option>
				))}
			</select>
			<div className="rotate-[270deg] absolute right-3 top-0 bottom-0 m-auto size-[24px]">
				<ChevronRightIcon />
			</div>
		</div>
	);
};