import { Header } from "@/components/header/ui/Header";
import { LibraryClient } from "@/components/libraryClient/ui/LibraryClient";
import { WrapperPage } from "@/components/wrapperPage/ui/WrapperPage";

export default function LibraryPage() {
	return (
		<>
			<Header title="Библиотека" />
			<WrapperPage>
				<LibraryClient />
			</WrapperPage>
		</>
	);
}