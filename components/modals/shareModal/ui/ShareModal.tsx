"use client";

import { useState } from "react";
import { Modal } from "@/components/modal/ui/Modal";
import { CloseIcon } from "@/assets/icons/svg/close";
import { CopyIcon } from "@/assets/icons/svg/copy";
import { SuccessCircleIcon } from "@/assets/icons/svg/success-circle";
import Image from "next/image";
import { Button } from "@/components/button/ui/Button";

export const ShareModal = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [isCopy, setIsCopy] = useState(false);
	const [shareLink, setShareLink] = useState("https://www.easemate.ai/ru/invitation-landing?invite_code=");

	const handleCopy = () => {
		navigator.clipboard && navigator.clipboard.writeText(shareLink)
		setIsCopy(true);
		const timeout = setTimeout(() => setIsCopy(false), 3000);

		return () => clearTimeout(timeout)
	};
  return (
    <Modal isOpen={isOpen} onCloseAction={() => setIsOpen(false)}>
      <div className="p-6 relative w-[480px]">
        <button
          className="absolute right-6 top-6"
          onClick={() => setIsOpen(false)}
          aria-label="Закрыть"
        >
          <CloseIcon />
        </button>
        <div className="flex flex-col items-center w-full">
        	<h3 className="text-[28px] font-semibold mt-6 mb-4 text-dark-gray text-center">
						Пригласи друзей
	        </h3>
	        <p className="text-[16px] text-[#353535] font-medium mb-4">
						Поделитесь реферальной ссылкой с друзьями и получите 10 бесплатных токенов за их регистрацию
	        </p>
					<div className="flex items-center gap-4 py-2 px-3 rounded-[8px] bg-blue mb-6">
						<button 
							onClick={handleCopy}
							disabled={isCopy}
						>
							{isCopy ? <SuccessCircleIcon width={24} height={24} /> : <CopyIcon />}
						</button>
						{shareLink}
					</div>
					<Image
						width={256}
						height={256}
						className="size-[256px]"
						src="/qr.png"
						alt="qr code"
					/>
					<div className="flex flex-col gap-4 mt-8 w-full">
						<Button
							variant="outline"
							className="py-4 text-[20px] font-medium w-full"
							onClickAction={() => {
								navigator.share ? navigator.share({ 
									title: "Kinly", 
									text: "Генерируй классные открытки, песни и слайд-шоу в Kinly!",
									url: shareLink,
								})
								: navigator.clipboard && navigator.clipboard.writeText(shareLink);
							}}
						>
							Поделиться
						</Button>
						<Button
							variant="solid"
							className="py-4 text-[20px] font-medium w-full"
						>
							Скачать
						</Button>
					</div>
        </div>
      </div>
    </Modal>
  );
};
