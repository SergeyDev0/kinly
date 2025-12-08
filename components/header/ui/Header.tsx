import Image from "next/image";
import { Notifications } from "@/components/notifications/Notifications";
import { CoinIcon } from "@/assets/icons/svg/coin";
import { HeaderProps } from "./types/Header";
import Link from "next/link";
import { MenuIcon } from "@/assets/icons/svg/menu";

export const Header = ({ title }: HeaderProps) => {
	return (
		<>
			<header className="py-[24px] pl-[24px] max-md:hidden">
				<div className="w-full flex justify-between">
					<h1 className="text-[32px] font-semibold">{title}</h1>
					<div className="flex items-center gap-12">
						<Link 
							href="/wallet" 
							className="items-center gap-2 hidden"
						>
							<CoinIcon />
							<span className="font-medium text-dark-gray max-lg:hidden">Баланс</span>
							<span className="inline-block font-medium bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">0.00</span>
						</Link>
						<Notifications /> 
						<Link href="/profile" className="flex items-center gap-[10px]">
							<div className="flex flex-col max-lg:hidden">
								<span className="text-[14px] font-semibold text-right">Анастасия</span>
								<span className="text-[14px] text-right">nastena@mail.ru</span>
							</div>
							<Image src="/example.png" alt="" width={48} height={48} className="rounded-full size-[48px]" />
						</Link>
					</div>
				</div>
			</header>
			<header className="pt-2 pb-4 px-4 w-full flex flex-col md:hidden">
				<div className="flex items-center justify-between w-full">
					<Link
						href="/profile"
						className="block"
					>
						<Image src="/example.png" alt="Аватар" width={48} height={48} className="rounded-full size-[40px]" />
					</Link>
					<button>
						<MenuIcon />
					</button>
				</div>
				<h1 className="text-[20px] font-medium text-center">{title}</h1>
			</header>
		</>
	)
};