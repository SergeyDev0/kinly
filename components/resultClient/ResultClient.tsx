'use client'
import { useState } from "react";
import { Container } from "../container/ui/Container";
import { InputField } from "../InputField/ui/InputField";
import Link from "next/link";
import { Button } from "../button/ui/Button";
import Image from "next/image";

export const ResultClient = () => {
	const [email, setEmail] = useState("");
	return (
		<>
			<Container className="grow-0 shrink">
				<h3 className="text-left text-[20px] font-medium mb-3">
					Ваша генерация готова! Она будет отправлена на почту и сохранена в Библиотеке
        </h3>
				<span className="block text-[14px] mb-1">Укажите вашу почту</span>
				<InputField
					setValueAction={setEmail}
					value={email}
					placeholder="example@gmail.com"
					className="w-[320px] mb-4"
				/>
				<div className="flex items-center gap-3">

					<p className="font-medium">
						Я соглашаюсь с <Link href="#" className="text-accent-blue">политикой конфиденциальности</Link> и созданием личного кабинета
					</p>
				</div>
			</Container>
			<div className="flex grow flex-col items-center pt-6 min-h-0 overflow-hidden">
				<Button
					variant="solid"
					className="py-4 text-[20px] font-medium mb-6"
				>
					Оплатить и скачать
				</Button>
				<Image 
					src="/example.png"
          alt=""
          width={2000}
          height={2000}
					className="max-h-full grow w-auto max-w-full object-contain"
				/>
			</div>
		</>
	);
};