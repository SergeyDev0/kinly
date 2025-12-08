'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/assets/icons/svg/logo";
import { HomeIcon } from "@/assets/icons/svg/home";
import { AudioLinesIcon } from "@/assets/icons/svg/audio-lines";
import { StickerIcon } from "@/assets/icons/svg/sticker";
import { ImagesIcon } from "@/assets/icons/svg/images";
import { ShirtIcon } from "@/assets/icons/svg/shirt";
import { LibraryIcon } from "@/assets/icons/svg/library-big";
import { WalletIcon } from "@/assets/icons/svg/wallet";
import { HelpIcon } from "@/assets/icons/svg/help";
import { ExitIcon } from "@/assets/icons/svg/exit";
import clsx from "clsx";

export const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { id: 1, title: "Главная", icon: HomeIcon, path: "/" },
    { id: 2, title: "Песни", icon: AudioLinesIcon, path: "/songs" },
    { id: 3, title: "AI-открытка", icon: StickerIcon, path: "/photo-postcard" },
    { id: 4, title: "Слайд-шоу", icon: ImagesIcon, path: "/slide-show" },
    // { id: 5, title: "Мерч", icon: ShirtIcon, path: "/merch" },
    { id: 6, title: "Библиотека", icon: LibraryIcon, path: "/library" },
    { id: 7, title: "Кошелёк", icon: WalletIcon, path: "/wallet" },
  ];

  const base = "flex items-center gap-2 px-2 py-3 rounded-[12px] transition-all duration-200 w-full";
  const active = "bg-accent-blue text-white";

  const isActive = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}

		if (href === "/photo-postcard") {
			if (pathname === "/video-postcard" || pathname.startsWith("/video-postcard/")) {
			 return true;
			}
		}

		return pathname === href || pathname.startsWith(`${href}/`);
	};

  const iconColor = (href: string) =>
    isActive(href) ? "white" : "var(--text-primary)";

  const renderLink = (
		id: number,
    title: string,
    Icon: React.ElementType,
    path?: string
  ) => (
    <li key={id}>
      {path ? (
				<Link
					href={path}
					className={clsx(
						base,
						isActive(path) ? active : "",
						"text-text-primary"
					)}
				>
					<Icon fill={iconColor(path)} />
					{title}
				</Link>
			) : (
				<button className={clsx(base, "text-red")}>
					<Icon />
					{title}
				</button>
			)}
    </li>
  );

  return (
    <aside className="bg-blue h-full flex pl-[40px] pt-6 pr-6 shrink-0 max-md:hidden">
      <div className="flex flex-col w-[180px] grow">
        <Logo />
        <nav className="flex flex-col grow justify-between mt-6">
          <ul className="flex flex-col gap-2">
            {links.map((link) => renderLink(link.id, link.title, link.icon, link.path))}
          </ul>
          <ul className="flex flex-col gap-2">
						{renderLink(1, "Поддержка", HelpIcon, "/help")}
						{renderLink(2, "Выйти", ExitIcon)}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
