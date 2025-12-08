'use client'
import { SuccessCircleIcon } from "@/assets/icons/svg/success-circle";
import { Button } from "@/components/button/ui/Button";
import { Modal } from "@/components/modal/ui/Modal";
import Link from "next/link";
import { useState } from "react";

export const PaymentSuccessModal = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Modal
			isOpen={isOpen}
			onCloseAction={() => setIsOpen(false)}
		>
			<div className="flex flex-col items-center px-[60px] py-[40px]">
				<SuccessCircleIcon />
				<h3 className="text-[24px] font-semibold mb-2 text-dark-gray text-center">
					Оплата прошла успешно
				</h3>
				<p className="leading-[24px] font-medium text-center mb-5">
					Результат сохранен на ваше устройство 
					<br /> и в разделе <Link className="text-accent-blue" href="/library">Библиотека</Link>
				</p>
				<Button 
					variant="solid"
					className="py-4 text-[20px] font-medium w-fit"
					href="/songs"
				>
					Вернуться на главную
				</Button>
			</div>
		</Modal>
	);
};