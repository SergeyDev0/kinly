"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container/ui/Container";
import { RateCard } from "@/components/rateCard/ui/RateCard";
import Link from "next/link";
import { Button } from "@/components/button/ui/Button";
import { tariffs } from "../model/tariffs";
import { AiPostcardClientProps } from "../types/AiPostcardClient";
import { photoExamples, videoExamples } from "../model/examples";
import { Slider } from "@/components/slider/ui/Slider";
import { Slide } from "@/components/slide/ui/Slide";
import React from "react";

const contentVariants = {
	hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
	visible: { opacity: 1, y: 0, filter: "blur(0)" },
};

export const AiPostcardClient = ({ variant }: AiPostcardClientProps) => (
	<motion.div
		key={variant}
		className="flex flex-col h-full flex-1 min-h-0"
		variants={contentVariants}
		initial="hidden"
		animate="visible"
		transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
	>
		<div className="overflow-y-auto flex-1">
			{variant === "photo" ? (
				<Container className="mb-6 bg-[url('/hearts.png')] bg-no-repeat bg-[right_16px_center] bg-[length:400px_190px] max-lg:bg-none max-lg:min-h-[auto] max-ssm:mb-4">
					<h2 className="text-[24px] font-semibold mb-2 max-ssm:text-[16px]">Добро пожаловать, Анастасия!</h2>
					<p className="text-[20px] font-medium w-[60%] mb-6 max-xl:w-[50%] max-lg:w-full max-ssm:mb-5 max-ssm:text-[14px]">Создай свою открытку или обратись за помощью к нашему  менеджеру! Мы всегда на связи и готовы помочь</p>
					<Button
						variant="solid"
						className="py-4 text-[20px] font-medium max-md:w-full max-ssm:text-[18px]"
					>
						Связаться с менеджером
					</Button>
				</Container>
			) : (
				<Container className="mb-6 flex items-center justify-between max-lg:shrink-0 max-lg:min-h-[auto]">
					<div className="grow">
						<h2 className="text-[24px] font-semibold mb-2 max-ssm:text-[16px] max-ssm:font-medium">Видеооткрытка</h2>
						<p className="text-[20px] font-medium w-[60%] mb-6 max-lg:w-full max-md:w-[100%] max-ssm:text-[14px] max-ssm:mb-5">Полная генерация видеооткрытки <br /> по готовому пресету (до 16 секунд)</p>
						<Button
							variant="solid"
							className="py-4 text-[20px] font-medium block w-fit max-md:w-full max-md:text-center max-ssm:py-3 max-ssm:text-[18px]"
							href="/video-postcard/create"
						>
							Создать за 990₽
						</Button>
					</div>
					<div className="shrink-0 max-lg:hidden">
						<Image
							src="/video-postcard.png"
							alt="Иллюстрация видеооткрытки"
							width={230}
							height={180}
							className="w-[230px]"
						/>
					</div>
				</Container>
			)}
			{variant === "photo" && (
				<Container className="flex flex-col mb-6">
					<h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center shrink-0 max-xl:text-left max-xl:pb-2">Тарифы</h2>
					<div className="grid grid-cols-3 w-full gap-4 grow max-xl:flex max-xl:flex-col">
						{tariffs.map((tariff, i) => (
							<Link key={i} href={tariff.path}>
								<RateCard
									title={tariff.title}
									features={tariff.features}
									price={tariff.price}
									gradient={tariff.gradient}
									selected={tariff.selected}
								/>
							</Link>
						))}
					</div>
				</Container>
			)}
			<Container>
			<h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center shrink-0 max-lg:text-left max-lg:pb-2">
				{variant === "photo" ? "Примеры открыток" : "Примеры видеооткрыток"}
			</h2>
			<div className="bg-white rounded-[40px] p-4 flex flex-wrap gap-3 max-lg:p-0 max-lg:rounded-none max-lg:bg-transparent">
				{(variant === "photo" ? photoExamples : videoExamples).map((src, i) => (
					<div
						key={i}
						className="block h-[135px] w-auto max-lg:hidden"
					>
						<Image 
							width={200}
							height={135}
							src={src}
							alt={`Пример №${i}`}
							className="block h-full w-auto"
						/>
					</div>
				))}
				<Slider className="lg:hidden">
					{(variant === "photo" ? photoExamples : videoExamples).map((src, i) => (
						<Slide key={i}>
							<Image 
								width={200}
								height={135}
								src={src}
								alt={`Пример №${i}`}
								className="block h-full w-auto pointer-events-none"
							/>
						</Slide>
					))}
				</Slider>
			</div>
		</Container>

		</div>
	</motion.div>
);
