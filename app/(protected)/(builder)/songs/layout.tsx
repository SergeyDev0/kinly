import { Header } from "@/components/header/ui/Header";
import { WrapperPage } from "@/components/wrapperPage/ui/WrapperPage";
import { ReactNode } from "react";

export default function SongsLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col grow min-h-0 gap-6 max-md:gap-0">
			<Header title="Создать песню" />
	    <WrapperPage>
				{children}
			</WrapperPage>
		</div>
	);
};