'use client'
import { AudioVisualizer } from "@/components/audioVisualiser/ui/AudioVisualizer";
import { GroupTabs } from "@/components/groupTabs/ui/GroupTabs";
import { examples } from "@/models/home-data";
import Image from "next/image";
import { useState } from "react";

const tabs = ["Крутые песни", "Живые открытки", "Яркие слайд-шоу", "Открытки по фото"];

export const MainExamples = () => {
  const [selectedTab, setSelectedTab] = useState(0);
	return (
		<>
			<GroupTabs 
				tabs={tabs} 
				setActiveTabAction={setSelectedTab}
				activeTab={selectedTab}
				background="white"
				className="mb-4"
			/>	
	    <div className="grid grid-cols-3 gap-6 w-full px-[80px]">
	      {examples.map((example, i) => (
	        <div className="p-3 rounded-[20px] bg-white" key={i}>
	          <Image
	            width={350}
	            height={270}
	            src={example.src}
	            alt="image"
	            className="w-full h-auto rounded-[20px] mb-2"
	          />
	          <h3 className="text-[16px] font-medium mb-2 text-left">
	            {example.title}
	          </h3>
	          <AudioVisualizer src={example.audio} />
	        </div>
	      ))}
	    </div>
		</>
  );
};
