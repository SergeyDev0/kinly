"use client";
import clsx from "clsx";
import { Container } from "../../container/ui/Container";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Select } from "../../select/ui/Select";
import { InputField } from "@/components/InputField/ui/InputField";
import { Button } from "@/components/button/ui/Button";
import { ReasonModal } from "@/components/modals/reasonModal/ui/ReasonModal";
import { flattenedReasons } from "@/components/modals/reasonModal/model/reasons";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const genres = [
  { src: "/example.png", title: "Поп" },
  { src: "/example.png", title: "Рок" },
  { src: "/example.png", title: "Диско" },
  { src: "/example.png", title: "Джаз" },
  { src: "/example.png", title: "Ретро" },
  { src: "/example.png", title: "Шансон" },
];

const recipients = ["Жена"];

const moods = ["Лирический"];

export const CreateSong = () => {
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [recipient, setRecipient] = useState("Жена");
  const [mood, setMood] = useState("Жена");
  const [name, setName] = useState("Лирический");
  const [selectedReasonId, setSelectedReasonId] = useState<string>(
    flattenedReasons[0]?.id ?? ""
  );
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);
	const selectedReasonTitle = useMemo(
    () => flattenedReasons.find((item) => item.id === selectedReasonId)?.title ?? "",
    [selectedReasonId]
  );

	const isMobile = useMediaQuery("(max-width: 1024px)");

	const featuredReasons = useMemo(() => {
		return isMobile ? flattenedReasons.slice(0, 3) : flattenedReasons.slice(0, 6);
	}, [isMobile]);

  return (
    <div className="grid grid-cols-2 gap-6 grow">
      <Container className="max-h-100% overflow-y-auto">
        <h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center shrink-0">
          Выберите жанр
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {genres.map((genre, i) => (
            <button
              key={i}
              className={clsx(
                "p-3 pb-2 rounded-[12px] transition-all duration-200 w-full text-[16px] font-medium",
                selectedGenre === i
                  ? "bg-accent-blue text-white"
                  : "bg-white text-text-primary"
              )}
              onClick={() => setSelectedGenre(i)}
            >
              <Image
                className="w-full rounded-[8px] mb-1 pointer-events-none"
                src={genre.src}
                alt={genre.title}
                width={250}
                height={250}
              />
              {genre.title}
            </button>
          ))}
        </div>
      </Container>
      <Container>
        <h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center shrink-0">
          Информация о песне и получателе
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-[50%]">
            <span className="block text-[20px] font-medium mb-2">
              Имя получателя
            </span>
            <InputField
              value={name}
              setValueAction={setName}
              placeholder="Катя"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <span className="block text-[20px] font-medium mb-2">
              Получатель подарка
            </span>
            <Select
              options={recipients}
              value={recipient}
              setValue={setRecipient}
            />
          </div>
        </div>
        <div className="w-full mt-6">
          <span className="block text-[20px] font-medium mb-2">
            Пожелания / воспоминания
          </span>
          <textarea
            placeholder="Напишите свой комментарий (не более 200 символов)"
            className="p-3 placeholder:text-gray placeholder:text-[14px] text-[14px] bg-white outline-none w-full min-h-[100px] h-[100px] rounded-[20px] resize-y max-h-[250px]"
            maxLength={200}
          />
        </div>
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
              <span className="text-text-primary">{selectedReasonTitle}</span>
            </p>
          )}
        </div>
        <div className="mb-4">
          <span className="block text-[20px] font-medium mb-2">
            Тон, настроение песни
          </span>
          <Select options={moods} value={mood} setValue={setMood} />
        </div>
        <Button variant="solid" className="py-4 text-[18px] w-full font-medium">
					Продолжить
        </Button>
				
        <ReasonModal
          isOpen={isReasonModalOpen}
          onCloseAction={() => setIsReasonModalOpen(false)}
          onSelectAction={(reasonId, _reasonTitle) => {
            setSelectedReasonId(reasonId);
            setIsReasonModalOpen(false);
          }}
          selectedReasonId={selectedReasonId}
        />
      </Container>
    </div>
  );
};
