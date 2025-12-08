import { Sidebar } from "@/components/sidebar/ui/Sidebar";

export default function ConstructorLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-blue h-full min-h-0 flex pr-[40px] pb-6 max-md:pr-0 max-md:pb-0">
			<Sidebar />
			<div className="flex flex-col grow min-h-0">
				{children}
			</div>
		</div>
	);
}