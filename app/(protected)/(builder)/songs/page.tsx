"use client";

import { Container } from "@/components/container/ui/Container";
import { examples } from "@/models/songs-examples";
import { AudioCard } from "@/components/audioCard/ui/AudioCard";
import { Button } from "@/components/button/ui/Button";
import { GroupTabs } from "@/components/groupTabs/ui/GroupTabs";
import { useState } from "react";
import { CrownIcon } from "@/assets/icons/svg/crown";
import { CartIcon } from "@/assets/icons/svg/cart";
import { LoaderIcon } from "@/assets/icons/svg/loader";
import clsx from "clsx";
import { Slider } from "@/components/slider/ui/Slider";
import Image from "next/image";
import { Slide } from "@/components/slide/ui/Slide";
import { AudioSlide } from "@/components/AudioSlide/ui/AudioSlide";
import { AudioSlider } from "@/components/AudioSlider/ui/AudioSlider";

const tabsItems = [
  "Демо-версия",
  <div className="flex items-center gap-2">
    <CrownIcon /> PRO-тариф
  </div>,
];

export default function SongsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (nextTab: number | ((prev: number) => number)) => {
    const index = typeof nextTab === "function" ? nextTab(activeTab) : nextTab;
    if (index === activeTab) return;
    setActiveTab(index);
  };
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <GroupTabs
          tabs={tabsItems}
          activeTab={activeTab}
          setActiveTabAction={handleTabChange}
        />
        <span className="py-[10px] px-6 text-[20px] font-medium rounded-full from-[#507CFF] to-[#5E48DC] bg-gradient-to-r text-white flex items-center gap-2">
          <CartIcon />
          1490₽
        </span>
      </div>
      <div className="flex flex-col overflow-y-auto">
        <Container
          className={clsx(
            activeTab === 0
              ? "bg-[url('/headphones-illustration.png')] bg-[right_20px_center] bg-[length:auto_96%]"
              : "bg-[url('/magnitophone-illustration.png')] bg-[right_24px_center] bg-[length:auto_96%]",
            "flex flex-col grow relative mb-6 bg-no-repeat max-lg:bg-none min-h-[auto]"
          )}
        >
          <h2 className="text-[24px] font-semibold mb-2">
            {activeTab === 0
              ? "Попробуйте бесплатно"
              : "Создайте песню со своим голосом!"}
          </h2>
          <p className="text-[20px] font-medium w-[60%] mb-6 max-lg:w-full">
            {activeTab === 0 ? (
              <>
                Вы можете создать свою первую демо-песню бесплатно.
                <br /> Протестируйте возможности Neiro Gift!
              </>
            ) : (
              <>
                Загрузите запись своего голоса и создайте уникальное
                <br /> аудиопоздравление
              </>
            )}
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="solid"
              className="py-4 text-[20px] font-medium max-md:w-full max-md:text-center"
              href="/songs/create"
            >
              Создать песню
            </Button>
          </div>
        </Container>
        <Container className="grow-0 min-h-[auto]">
          <h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[16px] max-ssm:font-medium text-center">
            Примеры песен
          </h2>

          <div className="bg-white rounded-[40px] p-4 w-full max-lg:bg-transparent max-lg:p-0 max-lg:rounded-none">
            <div className="grid grid-cols-5 max-xl:grid-cols-3 gap-3 w-full max-lg:hidden">
              {examples.map((example, i) => (
                <AudioCard key={i} src={example.src} audio={example.audio} />
              ))}
            </div>

            <AudioSlider className="lg:hidden max-lg:max-w-[calc(100vw-380px)] max-md:max-w-[calc(100vw-80px)] overflow-hidden">
              {examples.map((example, i) => (
                <AudioSlide key={i} src={example.src} audio={example.audio} />
              ))}
            </AudioSlider>
          </div>
        </Container>
      </div>
    </>
  );
}
