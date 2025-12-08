import clsx from "clsx";
import { PostcardItemProps } from "../types/PostcardItem";
import Image from 'next/image';

export const PostcardItem = ({ selectedId, setSelectedId, id, img, title, width = 300, height = 300 }: PostcardItemProps) => {
	return (
		<div 
			onClick={() => setSelectedId(id)}
			className={clsx(
				"border border-white p-3 pb-2 rounded-[12px] cursor-pointer transition-all duration-200",
				selectedId === id ? "bg-accent-blue text-white" : "bg-white text-text-primary"
			)}
		>
			<Image width={width} height={height} src={img} alt={title} className="w-full pointer-events-none rounded-[8px]" />
			<p className="mt-1 font-medium">{title}</p>
		</div>
	);
};