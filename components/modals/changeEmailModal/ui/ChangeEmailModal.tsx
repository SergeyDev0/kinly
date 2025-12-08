"use client";

import { ArrowLeftIcon } from "@/assets/icons/svg/arrow-left";
import { CloseIcon } from "@/assets/icons/svg/close";
import { EyeIcon } from "@/assets/icons/svg/eye";
import { EyeCloseIcon } from "@/assets/icons/svg/eye-close";
import { MailCheckIcon } from "@/assets/icons/svg/mail-check";
import { Button } from "@/components/button/ui/Button";
import { InputField } from "@/components/InputField/ui/InputField";
import { Modal } from "@/components/modal/ui/Modal";
import { useState } from "react";
import { stepModalProps } from "../types/ChangeEmailModal";

export const ChangeEmailModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<stepModalProps>("password");
  const [isShowPassword, setIsShowPassword] = useState(false);
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
        {step === "password" && (
          <>
            <h3 className="text-[28px] font-semibold mt-6 mb-4 text-dark-gray text-center">
              Новая почта
            </h3>
            <p className="text-[16px] text-[#353535] font-medium mb-4">
              Введите свой пароль, чтобы начать процесс смены почты вашего аккаунта
            </p>
            <span className="block text-[14px] mb-1">Пароль</span>
            <div className="relative w-full">
              <InputField
                placeholder="********"
                type={isShowPassword ? "text" : "password"}
                value={password}
                setValueAction={setPassword}
                background="bg-blue"
              />
              <button
                className="absolute top-3 right-3 bottom-3 my-auto"
                onClick={() => setIsShowPassword((prev) => !prev)}
              >
                {isShowPassword ? <EyeIcon /> : <EyeCloseIcon />}
              </button>
            </div>
						<button
							className="text-accent-blue text-[14px] mt-1"
							onClick={() => setIsOpen(false)}
						>
							Забыли пароль?
						</button>
            <Button
              variant="solid"
              className="py-4 text-[20px] mt-6 w-full"
              onClickAction={() => setStep("email")}
            >
              Продолжить
            </Button>
          </>
        )}
        {step === "email" && (
          <>
						<button
							className="absolute left-6 top-6"
							onClick={() => setStep("password")}
							aria-label="Назад"
						>
							<ArrowLeftIcon />
						</button>
            <h3 className="text-[28px] font-semibold mt-6 mb-4 text-dark-gray text-center">
              Новая почта
            </h3>
            <p className="text-[16px] text-[#353535] font-medium mb-4">
							Введите адрес новой почты. Мы отправим на него письмо с подтверждением
            </p>
            <span className="block text-[14px] mb-1">Почта</span>
						<InputField
							placeholder="example@gmail.com"
							value={email}
							setValueAction={setEmail}
							background="bg-blue"
						/>
            <Button
              variant="solid"
              className="py-4 text-[20px] mt-6 w-full"
              onClickAction={() => setStep("checkEmail")}
            >
              Продолжить
            </Button>
          </>
        )}
        {step === "checkEmail" && (
          <div className="flex flex-col items-center">
						<button
							className="absolute left-6 top-6"
							onClick={() => setStep("email")}
							aria-label="Назад"
						>
							<ArrowLeftIcon />
						</button>
            <h3 className="text-[28px] font-semibold mt-6 mb-4 text-dark-gray text-center">
              Проверьте почту
            </h3>
            <p className="text-[16px] text-[#353535] font-medium mb-6">
							На вашу почту {email} отправлено письмо. Если вам не пришло письмо, то вы можете отправить запрос еще раз
            </p>
            <MailCheckIcon />
						<p className="mt-6 font-medium text-[20px]">
							Не пришло письмо?&nbsp;
							<button 
								className="text-accent-blue"
								onClick={() => {}}
							>
								Отправить еще раз
							</button>
						</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
