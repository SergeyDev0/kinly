"use client";

import { ImageUpIcon } from "@/assets/icons/svg/image-up";
import clsx from "clsx";
import { Container } from "@/components/container/ui/Container";
import { Button } from "@/components/button/ui/Button";
import { UploadZone } from "@/components/uploadZone/ui/UploadZone";
import { VoiceUploadZone } from "@/components/voiceUpload/ui/VoiceUploadZone";
import { useState } from "react";
import { PostcardItem } from "@/components/postcardItem/ui/PostcardItem";
import { AudioLinesIcon } from "@/assets/icons/svg/audio-lines";

const styles = [
  { src: "/example-h.png", title: "С Новым годом" },
  { src: "/example-h.png", title: "День рождения" },
  { src: "/example-h.png", title: "На свадьбу" },
  { src: "/example-h.png", title: "8 марта" },
  { src: "/example-h.png", title: "Признание" },
  { src: "/example-h.png", title: "23 февраля" },
];

export const CreateSlideShow = () => {
  const [selectedRatio, setSelectedRatio] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState(1);
  const [, setPhotoFiles] = useState<File[]>([]);
  return (
    <div className="grid grid-cols-2 gap-6">
      <Container>
        <h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center shrink-0">
					Выберите праздник
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {styles.map((style, i) => (
            <PostcardItem
              key={i}
              id={i}
              img={style.src}
              title={style.title}
              selectedId={selectedStyle}
              setSelectedId={setSelectedStyle}
              width={400}
              height={400}
            />
          ))}
        </div>
      </Container>
      <Container className="h-full flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-left text-[20px] font-medium mb-2">
            Соотношение сторон
          </h3>
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setSelectedRatio(1)}
              className={clsx(
                "flex justify-center items-center aspect-[3/4] w-[28px] text-[12px] transition-all duration-200",
                selectedRatio === 1
                  ? "bg-accent-blue text-white"
                  : "bg-dark-blue text-text-primary"
              )}
            >
              <span>3:4</span>
            </button>
            <button
              onClick={() => setSelectedRatio(2)}
              className={clsx(
                "flex justify-center items-center aspect-[9/16] w-[28px] text-[12px] transition-all duration-200",
                selectedRatio === 2
                  ? "bg-accent-blue text-white"
                  : "bg-dark-blue text-text-primary"
              )}
            >
              <span>9:16</span>
            </button>
          </div>
          <h3 className="text-left text-[20px] font-medium mb-2">
            Загрузите фотографии
          </h3>
          <UploadZone
            multiple
            maxFiles={50}
            uploadMoreLabel="Загрузить еще"
            onFilesChange={(files) => setPhotoFiles(files)}
            className="mb-6"
            minHeight={200}
            uploadedHint={
              <p className="text-gray text-[14px] leading-[20px] text-center">
                Перенесите или загрузите с устройства от 2 до 50 изображений
                <br />
                (форматы jpeg или png, максимальный размер 32Мб)
              </p>
            }
          >
            <ImageUpIcon />

            <p className="mt-2 text-gray text-[14px] leading-[20px] w-fit text-center">
              Перенесите или загрузите с устройства от 2 до 50 изображений
              <br />
              (форматы jpeg или png, максимальный размер 32Мб)
            </p>

            <Button
              variant="solid"
              type="file"
              htmlFor="image"
              className="text-[12px] mt-3 py-2"
            >
              Загрузить
            </Button>
          </UploadZone>
          <h3 className="text-left text-[20px] font-medium mb-2">
            Загрузите аудио или создайте песню
          </h3>
          {/*
            До загрузки используем кастомный пустой стейт (как было раньше на странице),
            после загрузки — пилюля из VoiceUploadZone.
          */}
          <div className="mb-6">
            <VoiceUploadZone
              inputId="slideshow-audio-upload"
              filePreviewVariant="pill"
              minHeight={176}
              emptyStateSlot={
                <>
                  <AudioLinesIcon width={48} height={48} strokeWidth={1} />
                  <p className="mt-2 text-gray text-[14px] leading-[20px] w-fit text-center">
                    Перенесите аудиозапись или загрузите с устройства
                    <br />
                    (форматы mp3 или wav, максимальный размер 32Мб)
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Button variant="solid" className="text-[12px] py-2">
                      Создать песню
                    </Button>
                    <Button
                      variant="solid"
                      htmlFor="slideshow-audio-upload"
                      className="text-[12px] py-2"
                      onClickAction={(e) => e.preventDefault()}
                    >
                      Загрузить
                    </Button>
                  </div>
                </>
              }
              uploadedHint={
                <p className="text-gray text-[14px] leading-[20px] text-center mt-2">
                  Перенесите аудиозапись или загрузите с устройства
                  <br />
                  (форматы mp3 или wav, максимальный размер 32Мб)
                </p>
              }
              showHintWhenUploaded
              uploadedActionsSlot={
                <div className="w-full flex justify-center items-center gap-4 mt-3">
                  <Button variant="solid" className="text-[12px] py-2 px-6">
                    Создать песню
                  </Button>
                  <Button
                    variant="solid"
                    type="file"
                    htmlFor="slideshow-audio-upload"
                    className="text-[12px] py-2 px-6"
                  >
                    Загрузить
                  </Button>
                </div>
              }
            />
          </div>
        </div>
        <div className="w-full">
          <Button
            variant="solid"
            className="py-4 text-[18px] font-medium w-[100%]"
          >
            Выбрать голос
          </Button>
        </div>
      </Container>
    </div>
  );
};
