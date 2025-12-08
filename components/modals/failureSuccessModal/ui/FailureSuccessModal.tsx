'use client'
import { FailureCircleIcon } from "@/assets/icons/svg/unsuccess-circle";
import { Button } from "@/components/button/ui/Button";
import { Modal } from "@/components/modal/ui/Modal";
import { useState } from "react";

export const FailureSuccessModal = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Modal
			isOpen={isOpen}
			onCloseAction={() => setIsOpen(false)}
		>
			<div className="flex flex-col items-center px-[80px] py-[40px]">
				<FailureCircleIcon />
				<h3 className="text-[24px] font-semibold mb-2 text-dark-gray text-center">
					Оплата не прошла
				</h3>
				<p className="leading-[24px] font-medium text-center mb-5">
					Попробуйте оплатить еще раз или
					<br /> проверьте баланс вашего счета
				</p>
				<Button 
					variant="solid"
					className="py-4 text-[20px] font-medium w-fit"
				>
					Повторить оплату
				</Button>
			</div>
		</Modal>
	);
};