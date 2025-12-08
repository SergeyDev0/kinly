import { WrapperPageProps } from "../types/WrapperPage";

export const WrapperPage = ({ children }: WrapperPageProps) => {
	return (
		<div className="bg-white flex flex-col rounded-[32px] grow min-h-0 p-6 overflow-hidden max-md:p-4 max-md:pb-0 max-md:rounded-none">
			{children}
		</div>
	)
};
