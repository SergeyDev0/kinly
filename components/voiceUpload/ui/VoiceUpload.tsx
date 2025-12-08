"use client";

import { useState, type MouseEvent } from "react";
import { Container } from "@/components/container/ui/Container";
import { VoiceUploadZone } from "./VoiceUploadZone";
import { VoiceUploadStateProps } from "../types/VoiceUpload";
import { MicrophoneIcon } from "@/assets/icons/svg/mic";
import { PauseIcon } from "@/assets/icons/svg/pause";
import clsx from "clsx";
import { Button } from "@/components/button/ui/Button";
import { AudioVisualizer } from "@/components/audioVisualiser/ui/AudioVisualizer";

export const VoiceUpload = () => {
	const [currentStep, setCurrentStep] = useState<VoiceUploadStateProps>("verify");
	const [isRecording, setIsRecording] = useState<boolean>(false);

  const recordVoice = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

		setCurrentStep("record");
  };

  return (
    <Container className="grow-0 flex flex-col">
			{currentStep === "upload" && (
				<>
					<h2 className="text-[24px] font-semibold mb-3 text-center">
						Загрузите аудио или запишите голос
					</h2>
					<VoiceUploadZone onRecordVoiceAction={recordVoice} />
				</>
			)} 
			{currentStep === "record" && (
				<>
					<h2 className="text-[24px] font-semibold mb-3 text-center">
						Запишите свой голос
					</h2>
					<div className="h-[425px] bg-white rounded-[20px] flex flex-col items-center justify-center">
						<h3 className="text-[14px] mb-3 text-center">Максимальная длительность аудиозаписи не более 60 сек</h3>
						<div></div>
						<span className="text-[24px] font-semibold text-dark-gray mb-3">00:00</span>
						<button 
							className="size-[32px] flex justify-center items-center rounded-full bg-accent-blue mb-8"
							onClick={() => setIsRecording((prev) => !prev)}
						>
							{isRecording ? (
								<PauseIcon />
							) : (
								<MicrophoneIcon width={24} height={24} fill="white" strokeWidth={3} />
							)}
						</button>
						<p className={clsx(
							"mb-2 text-[16px] font-medium text-center",
							isRecording ? "text-gray" : "text-dark-gray"
						)}>
							Нажмите на кнопку записи голоса и прочтите текст снизу от 45 до 60 сек, без остановки. <br />
							Запись должна быть произведена в тишине и без постороннего шума.
						</p>
						<p className={clsx(
							"w-[552px] text-[16px] font-medium text-center",
							isRecording ? "text-dark-gray" : "text-gray"
						)}>
							Полноценный трек по твоему брифу. Укажи детали, стиль и эмоцию — и ИИ создаст уникальную песню с вокалом и аранжировкой. Персональный подарок, который останется навсегда
						</p>
					</div>
				</>
			)}
			{currentStep === "verify" && (
				<>
					<h2 className="text-[24px] font-semibold mb-3 text-center">
					Прослушайте свою запись голоса
					</h2>
					<div className="h-[425px] bg-white rounded-[20px] flex flex-col items-center justify-center">
						<p className="mb-8 text-[16px] font-medium text-center text-dark-gray w-[682px]">
							Прослушайте запись и убедитесь, что она сделана качественно и не имеет посторонних звуков. После начала генерации, изменить запись будет невозможно
						</p>
						<div className="w-[300px] mb-10">
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="flex items-center gap-4">
							<Button
								variant="outline"
								className="font-medium text-[20px] py-4 w-[263px] flex justify-center"
							>
								Перезаписать
							</Button>
							<Button
								variant="solid"
								className="font-medium text-[20px] py-4 w-[263px] flex justify-center"
							>
								Начать генерацию
							</Button>
						</div>
					</div>
				</>
			)}
    </Container>
  );
};
