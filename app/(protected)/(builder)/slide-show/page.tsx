import { videoExamples } from "@/components/aiPostcardClient/model/examples";
import { Button } from "@/components/button/ui/Button";
import { Container } from "@/components/container/ui/Container";
import { SlideShowSlider } from "@/components/slideShowSlider/ui/SldieShowSlider";
import Image from "next/image";

export default function SlideShowPage() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <Container className="mb-6 flex items-center justify-between min-h-[auto] max-md:flex-col-reverse max-md:justify-start">
        <div className="grow max-lg:grow-0 max-lg:w-full">
          <h2 className="text-[24px] font-semibold mb-2">Слайд-шоу</h2>
          <p className="text-[20px] font-medium w-[60%] mb-6 max-lg:w-full">
            слайд-шоу под вашу песню <br />
            (до 50 фото)
          </p>
          <Button
            variant="solid"
            className="py-4 text-[20px] font-medium w-fit max-md:w-full max-md:text-center"
            href="/slide-show/create"
          >
            Создать за 300₽
          </Button>
        </div>
        <div className="shrink-0 max-md:shrink max-md:w-full max-md:max-w-[350px]">
          <Image
            src="/video-postcard.png"
            alt="Иллюстрация видеооткрытки"
            width={400}
            height={350}
            className="w-[230px] max-md:w-[100%] max-md:block"
          />
        </div>
      </Container>
      <Container className="min-h-[auto]">
        <h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center shrink-0 max-xl:text-left max-xl:pb-2">
					Примеры слайд-шоу
        </h2>
        <div className="bg-white rounded-[40px] p-4 flex flex-wrap gap-3 max-lg:bg-transparent max-lg:p-0 max-lg:rounded-none">
          {videoExamples.map(
            (src, i) => (
              <div key={i} className="block h-[135px] w-auto max-lg:hidden">
                <Image
                  width={200}
                  height={135}
                  src={src}
                  alt={`Пример №${i}`}
                  className="block h-full w-auto"
                />
              </div>
            )
          )}
					<SlideShowSlider />
        </div>
      </Container>
    </div>
  );
}
