import { AudioVisualizer } from "@/components/audioVisualiser/ui/AudioVisualizer";
import { Button } from "@/components/button/ui/Button";
import { Container } from "@/components/container/ui/Container";

export const VoiceSelection = () => {
	return (
		<>
			<div className="grid grid-cols-2 gap-6">
				<Container>
					<h2 className="text-[24px] font-semibold mb-[20px] text-center">Мужской  голос</h2>
					<div className="grid grid-cols-2 gap-2">
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
					</div>
				</Container>
				<Container>
					<h2 className="text-[24px] font-semibold mb-[20px] text-center">Женский  голос</h2>
					<div className="grid grid-cols-2 gap-2">
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
						<div className="p-4 rounded-[16px] bg-white flex flex-col gap-1">
							<span className="text-dark-gray text-[16px] font-medium">Голос №1</span>
							<AudioVisualizer src="/SoundHelix-Song-1.mp3" />
						</div>
					</div>
				</Container>
			</div>
			<div className="flex items-center w-full justify-center gap-6 mt-6">
				<Button
					variant="outline"
					className="py-4 text-[20px] w-[260px]"
				>
					Назад
				</Button>
				<Button
					variant="solid"
					className="py-4 text-[20px] w-[260px]"
				>
					Выбрать
				</Button>
			</div>
		</>
	);
};