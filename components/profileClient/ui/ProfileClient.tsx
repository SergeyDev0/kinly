'use client'
import { CameraIcon } from "@/assets/icons/svg/camera";
import { EditIcon } from "@/assets/icons/svg/edit";
import { Button } from "@/components/button/ui/Button";
import { Container } from "@/components/container/ui/Container";
import { InputField } from "@/components/InputField/ui/InputField";
import Image from "next/image";
import { useState } from "react";

export const ProfileClient = () => {
	const [name, setName] = useState("");
	return (
		<div className="flex gap-4 w-full mb-6">
			<Container className="shrink-0 p-6 grow-0">
				<div className="relative">
					<Image 
						src="/example.png"
						alt="avatar"
						width={200}
						height={200}
						className="w-[180px] h-[180px] rounded-full"
					/>
					<label 
						className="right-[17px] bottom-2 size-[34px] rounded-full bg-dark-blue 
							flex justify-center items-center cursor-pointer absolute" 
						htmlFor="photo"
					>
						<CameraIcon />
					</label>
					<input id="photo" type="file" className="hidden size-0 invisible" />
				</div>
			</Container>
			<Container className="p-6">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-[28px] font-semibold text-left">
						Основная информация
					</h2>
					<Button 
						variant="solid"
						className="text-[14px] py-2"
					>
						Сохранить
					</Button>
				</div>
				<div className="w-[270px] mb-4">
					<span className="block text-[14px] mb-1">Имя получателя</span>
					<InputField 
						placeholder="Введите имя"
						value={name}
						setValueAction={setName}
					/>
				</div>
				<div className="w-[270px]">
					<span className="block text-[14px] mb-1">Имя получателя</span>
					<div className="w-full flex items-center justify-between">
						<p className="grow inline-block text-ellipsis overflow-hidden text-dark-gray font-medium">
							nastena@mail.ru
						</p>
						<button className="">
							<EditIcon />
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};