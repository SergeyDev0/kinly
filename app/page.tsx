'use client'
import { BootPrintsIcon } from "@/assets/icons/svg/boot-prints";
import { CloseIcon } from "@/assets/icons/svg/close";
import { HeartNoteIcon } from "@/assets/icons/svg/heart-note";
import { Logo } from "@/assets/icons/svg/logo";
import { SubtractIcon } from "@/assets/icons/svg/subtract";
import { TelegramSolidIcon } from "@/assets/icons/svg/telegram-solid";
import { VkSolidIcon } from "@/assets/icons/svg/vk-solid";
import { AccordionGroup } from "@/components/accordionGroup/ui/AccordionGroup";
import { Button } from "@/components/button/ui/Button";
import { ButtonGradient } from "@/components/buttonGradient/ui/ButtonGradient";
import { Container } from "@/components/container/ui/Container";
import { InputField } from "@/components/InputField/ui/InputField";
import { LiquidGlassFilter } from "@/components/liquidGlass/ui/LiquidGlass";
import { MainExamples } from "@/components/mainExamples/ui/MainExamples";
import { Modal } from "@/components/modal/ui/Modal";
import { faq, features, gifts, steps } from "@/models/home-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
	const [isOpen, setIsOpen] = useState(false)
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
  return (		
		<>
	    <div className="mx-auto w-[1280px] pb-[80px]">
	      <header className="flex items-center justify-between py-4 sticky top-0 left-0 bg-white z-20">
	        <Logo />
	        <nav>
	          <ul className="flex items-center gap-[40px]">
	            <li>
	              <a href="#examples" className="font-medium text-text-primary">
	                Примеры
	              </a>
	            </li>
	            <li>
	              <a href="#gifts" className="font-medium text-text-primary">
	                Подарки
	              </a>
	            </li>
	            <li>
	              <a href="#how-it-works" className="font-medium text-text-primary">
	                Как это работает
	              </a>
	            </li>
	            <li>
	              <a href="#tokens" className="font-medium text-text-primary">
	                Токены
	              </a>
	            </li>
	            <li>
	              <a href="#faq" className="font-medium text-text-primary">
	                FAQ
	              </a>
	            </li>
	          </ul>
	        </nav>
	        <div className="flex items-center gap-8">
	          { /* <div></div> */ }
	          <ButtonGradient
							variant="blue"
							className="py-[12px] text-[16px]"
							href="/photo-postcard"
						>
	            Веб-приложение
	          </ButtonGradient>
	        </div>
	      </header>
	      <section className="aspect-[1280/720] flex bg-[url('/home-illustration.png')] w-full rounded-[24px] mb-[80px] py-[36px] px-[40px] flex-col justify-center">
					<LiquidGlassFilter />
					<div className="flex items-center gap-4 mb-4">
						{features.map((feature, i) => (
							<div className="relative" key={i}>
								<span className="glassBtn px-6 py-2 text-white font-medium text-[16px]">
									{feature}
								</span>
							</div>
						))}
					</div>
					<h1 className="text-[54px] text-white font-bold leading-[62px] mb-4">
						AI-подарок за пару кликов
					</h1>
					<p className="text-[24px] text-[#ECF6FF] font-medium leading-[28px] mb-8">
						Персональные музыкальные подарки с помощью ИИ — уникальность <br /> 
						за 15 минут без студии, музыкантов и лишних затрат
					</p>
					<ButtonGradient
						variant="blue"
						className="text-text-primary py-4 text-[18px] w-fit"
						onClickAction={() => setIsOpen(true)}
					>
						Купить подарок
					</ButtonGradient>
	      </section>
				<Modal
					isOpen={isOpen}
					onCloseAction={() => setIsOpen(false)}
				>
					<Container className="grow-0 relative">
						<button
	              className="absolute right-6 top-6"
	              onClick={() => setIsOpen(false)}
	              aria-label="Закрыть"
	            >
	            <CloseIcon />
	          </button>
						<h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-center">
							Оформите покупку
						</h2>
						<div className="bg-white rounded-[20px] p-6">
							<ul className="flex flex-col gap-5 mb-10 w-full">
								<li className="flex items-center justify-between">
									<span className="text-[20px] font-medium">- Фотооткрытка 1 шт</span>
									<span className="text-[20px] font-medium text-accent-blue">190₽</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="text-[20px] font-medium">- Перегенерация 10 раз</span>
									<span className="text-[20px] font-medium text-accent-blue">Бесплатно</span>
								</li>
							</ul>
							<div className="w-full flex items-center justify-between mb-6">
								<h2 className="text-[24px] font-semibold pb-4 max-ssm:text-[14px] max-ssm:font-medium text-left">
									Итого
								</h2>
								<span className="text-[28px] font-semibold bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [&_path]:fill-accent-blue">
									190₽
								</span>
							</div>
							<div className="mb-4">
								<span className="block text-[20px] font-medium mb-2">
									Укажите вашу почту
								</span>
								<InputField
									placeholder="example@gmail.com"
									setValueAction={setEmail}
									value={email}
									background="bg-blue"
								/>
							</div>
							<div className="mb-6">
								<span className="block text-[20px] font-medium mb-2">
									Укажите ваше имя
								</span>
								<InputField
									placeholder="example@gmail.com"
									setValueAction={setName}
									value={name}
									background="bg-blue"
								/>
							</div>
							<Button
								className="py-4 text-[20px] w-full"
								variant="solid"
							>
								Купить
							</Button>
							<div className="flex items-center gap-3 mt-8">
								<input className="size-[20px]" type="checkbox" id="policy" />
								<label className="text-[14px] leading-[20px]" htmlFor="policy">
									Я соглашаюсь с &nbsp;	
									<a className="text-accent-blue" href="/">политикой конфиденциальности</a> 
									&nbsp;и&nbsp; 
									<a className="text-accent-blue" href="/">обработкой персональных данных</a>
								</label>
							</div>
						</div>
					</Container>
				</Modal>
	      <section className="relative flex flex-col w-full items-center bg-blue rounded-[40px] p-6 mb-[80px]">
					<div className="bg-[#DCE5FF] py-2 px-4 flex justify-center items-center mb-2 rounded-full">
	        	<span className="inline-block w-fit bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-medium">
							просто посмотрите	
		        </span>
	        </div>
	        <h2 className="mb-4 text-[48px] font-bold text-center leading-[56px] bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
	          Как это будет
	        </h2>
					<div className="absolute left-[23px] top-[50%]"><HeartNoteIcon size={18} /></div>
					<div className="absolute left-[110px] top-[140px]"><HeartNoteIcon size={32} /></div>
					<div className="absolute right-[126px] top-[126px] rotate-[100deg]"><HeartNoteIcon size={32} /></div>
					<div className="absolute right-[80px] top-[40px]"><HeartNoteIcon size={50} /></div>
	        <MainExamples />
	      </section>
	      <section className="relative rounded-[40px] p-6 pb-8 bg-gradient-to-r from-[#507CFF] to-[#5E48DC] flex flex-col items-center mb-[80px]">
	        <div className="bg-white py-2 px-4 flex justify-center items-center mb-2 rounded-full">
	        	<span className="inline-block w-fit bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-medium">
		          попробуй бесплатно
		        </span>
	        </div>
	        <h2 className="mb-4 text-[48px] text-white font-bold text-center leading-[56px]">
						Демо-песня
	        </h2>
	        <p className="font-medium text-blue mb-6">
	          Минута восхитительного звука, чтобы покорить ваше сердце
	        </p>
	        <ButtonGradient href="/songs/create" className="px-[40px] w-fit">
	          Создать песню
	        </ButtonGradient>
					<Image 
						src="/heart-illustration.png"
						alt=""
						width={230}
						height={230}
						className="absolute left-0 top-0"
					/>
					<Image 
						src="/heart-illustration.png"
						alt=""
						width={230}
						height={230}
						className="absolute right-0 bottom-0 rotate-180"
					/>
	      </section>
	      <section id="gifts" className="mb-[80px] flex flex-col items-center">
					<div className="bg-blue py-2 px-4 flex justify-center items-center mb-2 rounded-full">
	        	<span className="inline-block w-fit bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-medium">
		          форматы
		        </span>
	        </div>
	        <h2 className="mb-[40px] text-[48px] font-bold text-center leading-[56px] bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
	          Подарки
	        </h2>
	        <div className="grid grid-cols-4 gap-4 w-full">
	          {gifts.map((gift, i) => (
							<Link 
								key={i}
								className="group p-6 rounded-[40px] relative w-full aspect-[300/370] bg-[url('/example.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
								href="/"
							>
								<div className="bg-white py-2 px-4 flex justify-center items-center mb-2 rounded-full w-fit">
									<span className="inline-block bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-medium">
										{gift.category}
									</span>
								</div>
								<div className="w-full h-[75%] flex flex-col justify-end absolute bottom-0 left-0 p-6 pt-0 rounded-b-[40px]
									bg-gradient-to-b to-[#507CFF] to-[50%] from-[#29469e00]
									opacity-0 group-hover:opacity-100
									transition-opacity duration-300 ease-in-out"
								>
									<p className="text-[14px] mb-4 font-medium text-white">
										{gift.text}
									</p>
	
									<ButtonGradient className="text-[18px] font-medium py-4 w-full">
										Выбрать
									</ButtonGradient>
								</div>
							</Link>
						))}
	        </div>
	      </section>
				<section id="history" className="bg-blue mb-[80px] pr-[40px] py-4	pl-3 rounded-[40px] flex items-center gap-[100px]">
					<Image 
						src="/home-history-illustration.png"
						alt="illustration"
						className="aspect-[675/381] block grow"
						width={1000}
						height={1000}
					/>
					<div className="flex flex-col shrink-0">
						<div className="bg-[#DCE5FF] py-2 px-4 flex justify-center items-center mb-2 rounded-full w-fit">
							<span className="inline-block w-fit bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-medium">
								складываем
							</span>
						</div>
						<h2 className="mb-4 text-[48px] font-bold text-left leading-[56px] bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
							Чувства в историю
						</h2>	
						<p className="text-[#6D829C] font-medium mb-[40px] text-left">
							Воспоминания — лучший подарок для ваших <br /> близких. В Neiro Gift мы знаем, как вызвать улыбку
						</p>
						<ButtonGradient
							variant="blue"
							className="w-fit py-4"
						>
							Создать свою 
						</ButtonGradient>
					</div>
				</section>
				<section id="how-it-works" className="bg-blue mb-[80px] p-6 pb-8 rounded-[40px] flex flex-col items-center">
					<div className="bg-[#DCE5FF] py-2 px-4 flex justify-center items-center mb-2 rounded-full">
	        	<span className="inline-block w-fit bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-medium">
							быстро и просто
		        </span>
	        </div>
					<h2 className="mb-4 text-[48px] font-bold text-center leading-[56px] bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
						Как это работает
	        </h2>
					<p className="text-[#6D829C] font-medium mb-6 text-center">3 шага превратят чувства в звук</p>
					<div className="grid grid-cols-3 gap-[30px] mb-6 w-full">
						{steps.map((step, i) => (
							<div className="relative rounded-[40px] p-6 flex flex-col gap-4 bg-white" key={i}>
								<div className="flex items-center justify-between">
									<span className="text-[24px] font-bold text-accent-blue">{step.title}</span>
									<BootPrintsIcon />
								</div>
								<p className="font-medium text-[#6D829C]">{step.text}</p>
								{(steps.length - 1) != i && (
									<div className="absolute top-0 bottom-0 my-auto -right-[30px] h-fit"><SubtractIcon /></div>
								)}
							</div>
						))}
					</div>
					<ButtonGradient
						variant="blue"
						className="py-4 w-fit text-[18px] font-medium"
					>
						Попробовать сейчас
					</ButtonGradient>
				</section>
	      <section className="flex flex-col w-full items-center">
					<div className="bg-[#DCE5FF] py-2 px-4 flex justify-center items-center mb-2 rounded-full">
	        	<span className="inline-block w-fit bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-medium">
							вопрос-ответ
		        </span>
	        </div>
	        <h2 className="mb-[40px] text-[48px] font-bold text-center leading-[56px] bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
	          Часто спрашивают
	        </h2>
	        <AccordionGroup items={faq} colorItem="bg-blue" />
	      </section>
	    </div>
			<footer className="w-full flex flex-col items-center text-white">
				<div className="w-full flex justify-center pt-[40px] pb-[32px] bg-[#192857] rounded-t-[40px]">
					<div className="w-[1280px] flex justify-between">
						<div>
							<div className="mb-8"><Logo /></div>
							<h3 className="mb-4 font-medium">kinlyinform@yandex.ru</h3>
							<h3 className="mb-4 font-medium">ИП Шкабарня Иван Станиславович</h3>
							<p className="text-dark-blue">ИНН/ОГРИНП  770201564515/318774600243278</p>
						</div>
						<div>
							<h3 className="mb-4 font-medium">Сервис</h3>
							<div className="flex flex-col gap-2">
								<Link className="text-dark-blue" href="/songs">Песни</Link>
								<Link className="text-dark-blue" href="/photo-postcard">AI-открытка</Link>
								<Link className="text-dark-blue" href="/slide-show">Слайд-шоу</Link>
								<Link className="text-dark-blue" href="/merch">Мерч</Link>
							</div>
						</div>
						<div>
							<h3 className="mb-4 font-medium">Партнерство</h3>
							<div className="flex flex-col gap-2">
								<Link className="text-dark-blue" href="/work">Заработать</Link>
							</div>
						</div>
						<div>
							<h3 className="mb-4 font-medium">Помощь</h3>
							<div className="flex items-center gap-4">
								<a href="/"><TelegramSolidIcon /></a>
							</div>
						</div>
						<div>
							<h3 className="mb-4 font-medium">Соцсети</h3>
							<div className="flex items-center gap-4">
								<a href="/"><VkSolidIcon /></a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center bg-[#131F45] py-6">
					<div className="w-[1280px] flex items-center justify-between">
						<span className="text-[12px]">© Neiro Gift. Все права защищены 2025</span>
						<div className="flex items-center gap-[100px]">
							<a className="text-[12px] text-white" href="/">Политика конфиденциальности</a>
							<a className="text-[12px] text-white" href="/">Обработка персональных данных</a>
						</div>
					</div>
				</div>
			</footer>
		</>
  );
}
