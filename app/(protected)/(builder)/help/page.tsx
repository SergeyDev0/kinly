import { Container } from "@/components/container/ui/Container";
import { Header } from "@/components/header/ui/Header";
import { WrapperPage } from "@/components/wrapperPage/ui/WrapperPage";
import Image from "next/image";
import { Button } from "@/components/button/ui/Button";
import { WhatsAppIcon } from "@/assets/icons/svg/whatsapp";
import { TelegramSolidIcon } from "@/assets/icons/svg/telegram-solid";
import { AccordionGroup } from "@/components/accordionGroup/ui/AccordionGroup";

const faq = [
  {
    id: 1,
    title: "Как мне создать песню?",
    content: "Для того, чтобы создать песню, вам нужно перейти в наш сервис...",
  },
  {
    id: 2,
    title: "Вы работаете только по России?",
    content: "Нет, мы работаем по всему миру.",
  },
  {
    id: 3,
    title: "А можно заказать песню под мой минус?",
    content: "Да, конечно!"
  },
];

export default function HelpPage() {
  return (
    <>
      <Header title="Помощь" />
      <WrapperPage>
        <Container className="mb-6 flex items-center justify-between grow-0">
          <div className="grow">
            <h2 className="text-[24px] font-semibold mb-2">Служба заботы</h2>
            <p className="text-[20px] font-medium w-[60%] mb-6">
							Остались вопросы? Свяжитесь с нашим менеджером <br /> 
							любым удобным способом, мы всегда рядом
            </p>
            <div className="flex items-center gap-4">
            	<Button
	              variant="solid"
	              className="py-4 text-[20px] font-medium flex items-start gap-2 justify-center"
	              href="/video-postcard/create"
	            >
	              Telegram
								<TelegramSolidIcon />
	            </Button>
							<Button
	              variant="outline"
	              className="py-4 text-[20px] font-medium flex items-start gap-2 justify-center"
	              href="/video-postcard/create"
	            >
	              WhatsApp
								<WhatsAppIcon />
	            </Button>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/support-illustration.png"
              alt="illustration 'help'"
              width={230}
              height={220}
              className="w-[208px]"
            />
          </div>
        </Container>
				<Container className="grow-0">
					<h2 className="text-[24px] font-semibold mb-4">Часто спрашивают</h2>
					<div className="w-full flex flex-col gap-2">
						<AccordionGroup 
							items={faq}
						/>
					</div>
				</Container>
      </WrapperPage>
    </>
  );
}
