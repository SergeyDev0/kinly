import { CloseIcon } from "@/assets/icons/svg/close";
import { EyeIcon } from "@/assets/icons/svg/eye";
import { EyeCloseIcon } from "@/assets/icons/svg/eye-close";
import { VkIcon } from "@/assets/icons/svg/vk";
import { YandexIcon } from "@/assets/icons/svg/yandex";
import { Button } from "@/components/button/ui/Button";
import { InputField } from "@/components/InputField/ui/InputField";
import { Modal } from "@/components/modal/ui/Modal";
import { useState } from "react";

export const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
	const [isReg, setIsReg] = useState(false);

  return (
    <Modal isOpen={isOpen} onCloseAction={() => setIsOpen(false)}>
      <div className="p-6 relative w-[480px] flex flex-col items-center">
        <button
          className="absolute right-6 top-6"
          onClick={() => setIsOpen(false)}
          aria-label="Закрыть"
        >
          <CloseIcon />
        </button>
        <h3 className="text-[28px] font-semibold mt-6 mb-4 text-dark-gray text-center">
					{isReg ? "Зарегистрироваться" : "Войти в аккаунт"}
        </h3>
        <div className="w-full flex flex-col gap-4 mb-8">
          <div>
            <span className="block text-[14px] mb-1">Почта</span>
            <InputField
              placeholder="example@gmail.com"
              value={email}
              setValueAction={setEmail}
              background="bg-blue"
            />
          </div>
          <div>
            <span className="block text-[14px] mb-1">Пароль</span>
	          <div className="relative w-full">
							<InputField
								placeholder="********"
								type={isShowPassword ? "text" : "password"}
								value={password}
								setValueAction={setPassword}
								background="bg-blue"
							/>
							{password.length > 0 && (
								<button
									className="absolute top-3 right-3 bottom-3 my-auto"
									onClick={() => setIsShowPassword((prev) => !prev)}
								>
									{isShowPassword ? <EyeIcon /> : <EyeCloseIcon />}
								</button>
							)}
            </div>
          </div>
        </div>
        <div className="mb-4 flex items-center gap-4 w-full">
          <div className="h-[1px] grow bg-dark-blue" />
          <span className="text-[18px] font-medium">или</span>
          <div className="h-[1px] grow bg-dark-blue" />
        </div>
        <div className="grid grid-cols-2 items-center gap-4 mb-8 w-full">
          <a
            href="/"
            className="flex justify-center items-center py-3 w-full gap-2 text-[14px] rounded-[10px] bg-blue"
          >
						<YandexIcon />
            Яндекс
          </a>
          <a
            href="/"
            className="flex justify-center items-center py-3 w-full gap-2 text-[14px] rounded-[10px] bg-blue"
          >
						<VkIcon />
            ВКонтакте
          </a>
        </div>
        <Button variant="solid" className="py-4 text-[20px] mb-6 w-full">
          Войти
        </Button>
        <p className="text-[16px] font-medium">
          {isReg ? "Уже есть аккаунт?" : "Нет аккаунта?"}&nbsp;
          <button 
						className="text-accent-blue" 
						onClick={() => setIsReg((prev) => !prev)}
					>
            {isReg ? "Войти" : "Зарегистрироваться"}
          </button>
        </p>
      </div>
    </Modal>
  );
};
