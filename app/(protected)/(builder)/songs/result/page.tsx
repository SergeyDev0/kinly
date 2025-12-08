import { AudioVisualizer } from "@/components/audioVisualiser/ui/AudioVisualizer";
import { Button } from "@/components/button/ui/Button";
import { Container } from "@/components/container/ui/Container";

export default function ResultPage() {
	
  return (
    <div className="grow flex flex-col overflow-auto gap-6">
      <Container className="flex flex-col items-center grow-0">
        <h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center">
          Поздравляем, ваша песня готова!
        </h2>
        <div className="bg-white rounded-[40px] h-[417px] flex flex-col items-center justify-center w-full">
          <p className="text-dark-gray font-medium mb-8 text-center">
            Мы подготовили для вас две версии вашей песни, вы можете скачать обе
            <br /> или выбрать ту, что вам больше нравится
          </p>
          <div className="flex flex-col gap-4 w-[350px] mb-[48px]">
            <AudioVisualizer src="/SoundHelix-Song-1.mp3" />
            <AudioVisualizer src="/SoundHelix-Song-1.mp3" />
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="py-4 text-[20px] font-medium w-[162px]"
            >
              Назад
            </Button>
            <Button
              variant="solid"
              className="py-4 text-[20px] font-medium w-[162px]"
            >
              Скачать
            </Button>
          </div>
        </div>
      </Container>
			<div className="grid grid-cols-2 gap-6">
				<Container>
					<h2 className="text-[24px] font-semibold mb-2">Спецпредложение</h2>
					<p className="font-medium text-[20px] mb-6">
						Создай свою песню или обратись за помощью к нашему  менеджеру! Мы всегда на связи и готовы помочь
					</p>
					<Button
						variant="solid"
						className="py-4 text-[20px]"
					>
						Создать песню
					</Button>
				</Container>
				<Container>
					<h2 className="text-[24px] font-semibold mb-2">Спецпредложение</h2>
					<p className="font-medium text-[20px] mb-6">
						Создай свою песню или обратись за помощью к нашему  менеджеру! Мы всегда на связи и готовы помочь
					</p>
					<Button
						variant="solid"
						className="py-4 text-[20px]"
					>
						Создать песню
					</Button>
				</Container>
			</div>
    </div>
  );
}
