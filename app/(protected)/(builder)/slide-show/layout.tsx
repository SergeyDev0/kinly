import { Header } from "@/components/header/ui/Header";
import { WrapperPage } from "@/components/wrapperPage/ui/WrapperPage";
import { ReactNode } from "react";

export default function SlideShowLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header title="Создать слайд-шоу" />
	    <WrapperPage>
				{children}
			</WrapperPage>
		</>
	);
};