'use client'

import { useState } from "react";
import { GroupTabs } from "@/components/groupTabs/ui/GroupTabs";
import { AudioCard } from "@/components/audioCard/ui/AudioCard";
import { FileSmileIcon } from "@/assets/icons/svg/file-smile";
import { Button } from "@/components/button/ui/Button";

const tabs = ["Все", "Песни", "Фотооткрытки", "Видеооткрытки", "Слайд-шоу"];

export const LibraryClient = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [data, setData] = useState([]);
	
	return (
		<div className="flex flex-col overflow-y-auto grow">
			<GroupTabs 
				activeTab={selectedTab}
				setActiveTabAction={setSelectedTab}
				tabs={tabs}
				className="mb-8"
			/>

			{data.length > 0 ? (
				<div className="mb-8">
					<h2 className="text-[28px] font-semibold pb-4 text-left">
						Песни
					</h2>
					<div className="grid grid-cols-5 gap-4">
						{[].map((song) => (
							<AudioCard src="" audio="" />
						))}
					</div>
				</div>
			) : (
				<div className="grow w-full flex flex-col items-center justify-center">
					<FileSmileIcon />
					<h3 className="font-semibold text-[24px] mt-5 mb-1 text-dark-gray">
						Тишина и пустота...
					</h3>
					<p className="font-medium text-[16px] text-dark-gray mb-6">
						Добавь хоть что-нибудь: музыку, картинку, мем — что угодно!
					</p>
					<Button
					variant="solid"
					className="py-4 text-[20px] font-medium w-fit"
					href="/songs"
					>
						Создать подарок
					</Button>
				</div>
			)}
		</div>
	);
};