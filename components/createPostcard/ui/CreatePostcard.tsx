"use client";

import { ImageUpIcon } from "@/assets/icons/svg/image-up";
import { Button } from "@/components/button/ui/Button";
import { Container } from "@/components/container/ui/Container";
import { GroupRadio } from "@/components/groupRadio/ui/GroupRadio";
import { PostcardItem } from "@/components/postcardItem/ui/PostcardItem";
import { Select } from "@/components/select/ui/Select";
import { UploadZone } from "@/components/uploadZone/ui/UploadZone";
import { ReasonModal } from "@/components/modals/reasonModal/ui/ReasonModal";
import { flattenedReasons } from "@/components/modals/reasonModal/model/reasons";
import { postcardStore } from "@/store/postcardStore";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { RefreshIcon } from "@/assets/icons/svg/refresh";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const items = [
  { id: 1, img: "/empty-card.jpg", title: "Без стиля" },
  { id: 2, img: "/example.png", title: "Акварель" },
  { id: 3, img: "/example.png", title: "Акварель" },
  { id: 4, img: "/example.png", title: "Акварель" },
  { id: 5, img: "/example.png", title: "Акварель" },
  { id: 6, img: "/example.png", title: "Акварель" },
  { id: 7, img: "/example.png", title: "Акварель" },
  { id: 8, img: "/example.png", title: "Акварель" },
  { id: 9, img: "/example.png", title: "Акварель" },
];

export default function CreatePostcard({ variant }: { variant: "photo" | "video" }) {
  const [selectedId, setSelectedId] = useState(1);
  const [selectedRatio, setSelectedRatio] = useState(1);
  const [selectedReasonId, setSelectedReasonId] = useState<string>(
    flattenedReasons[0]?.id ?? ""
  );
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);
  const router = useRouter();
  const selectedReasonTitle = useMemo(
    () =>
      flattenedReasons.find((item) => item.id === selectedReasonId)?.title ??
      "",
    [selectedReasonId]
  );

	const isMobile = useMediaQuery("(max-width: 1024px)");

	const featuredReasons = useMemo(() => {
		return isMobile ? flattenedReasons.slice(0, 3) : flattenedReasons.slice(0, 6);
	}, [isMobile]);

  const handleFileSelect = useCallback((file: File | null) => {
    if (!file) {
      postcardStore.setUploadedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        postcardStore.setUploadedImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const handleStartGeneration = useCallback(() => {
    const targetPath =
      variant === "photo"
        ? "/photo-postcard/generate"
        : "/video-postcard/generate";
    router.push(targetPath);
  }, [router, variant]);

  return (
    <>
      <div className="grid grid-cols-2 gap-6 flex-1 min-h-0 max-lg:grid-cols-1">
        <Container className="overflow-y-auto h-full max-lg:hidden">
          <h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center">
						{variant === "photo" ? "Выберите шаблон" : "Как это будет"}
          </h2>
          <div className="grid grid-cols-3 gap-2 max-xl:grid-cols-2">
            {items.map((card) => (
              <PostcardItem
                key={card.id}
                id={card.id}
                img={card.img}
                title={card.title}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            ))}
          </div>
        </Container>
        <Container className="h-full flex flex-col justify-between gap-6 overflow-y-auto">
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
              Загрузите фотографию
            </h3>
            <UploadZone onFileSelect={handleFileSelect} className="mb-6">
              <ImageUpIcon />

              <p className="mt-2 text-gray text-[14px] leading-[20px] w-fit text-center">
                Перенесите фото или загрузите с устройства
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
            {variant === "photo" && (
              <>
                <div className="mb-6">
                  <h3 className="text-left text-[20px] font-medium mb-2">
                    Повод для открытки
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredReasons.map((reason) => (
                      <button
                        key={reason.id}
                        type="button"
                        onClick={() => setSelectedReasonId(reason.id)}
                        className={clsx(
                          "py-2 px-4 rounded-full text-[14px] border border-accent-blue transition-all duration-200",
                          selectedReasonId === reason.id
                            ? "bg-accent-blue text-white"
                            : "bg-transparent text-text-primary"
                        )}
                      >
                        {reason.title}
                      </button>
                    ))}
                    <button
                      className="font-medium text-[14px] text-accent-blue flex items-center"
                      type="button"
                      onClick={() => setIsReasonModalOpen(true)}
                    >
                      ... все поводы
                    </button>
                  </div>
                  {selectedReasonTitle && (
                    <p className="text-[14px] text-gray">
                      Вы выбрали:{" "}
                      <span className="text-text-primary">
                        {selectedReasonTitle}
                      </span>
                    </p>
                  )}
                </div>
              </>
            )}
						<div className="w-full">
							<div className="w-full flex items-center justify-between">
								<h3 className="text-left text-[20px] font-medium mb-2">
									{variant === "photo" ? "Текст пожелания" : "Напишите или сгенерируйте текст"}
								</h3>
								<button onClick={() => {}}>
									<RefreshIcon width={24} height={24} fill="#507CFF" />
								</button>
							</div>
							<textarea
								placeholder="Напишите свой комментарий (не более 200 символов)"
								className="p-3 placeholder:text-gray placeholder:text-[14px] text-[14px] bg-white outline-none w-full min-h-[100px] h-[100px] rounded-[20px] resize-y max-h-[150px]"
								maxLength={200}
							/>
						</div>
          </div>
          {variant === "photo" ? (
            <div className="w-full">
              <Button
                variant="solid"
                className="py-4 text-[18px] w-full font-medium"
                onClickAction={handleStartGeneration}
              >
                Создать
              </Button>
            </div>
          ) : (
            <Button
              variant="solid"
              className="py-4 text-[18px] w-full font-medium"
              onClickAction={handleStartGeneration}
            >
              Продолжить
            </Button>
          )}
        </Container>
      </div>
      <ReasonModal
        isOpen={isReasonModalOpen}
        onCloseAction={() => setIsReasonModalOpen(false)}
        onSelectAction={(reasonId, _reasonTitle) => {
          setSelectedReasonId(reasonId);
          setIsReasonModalOpen(false);
        }}
        selectedReasonId={selectedReasonId}
      />
    </>
  );
}
