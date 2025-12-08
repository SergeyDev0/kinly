import { Container } from "@/components/container/ui/Container";
import { Header } from "@/components/header/ui/Header";
import { WrapperPage } from "@/components/wrapperPage/ui/WrapperPage";
import Image from "next/image";
import { Button } from "@/components/button/ui/Button";
import { CoinIcon } from "@/assets/icons/svg/coin";
import { WalletTable } from "@/components/walletTable/ui/WalletTable";

export default function WalletPage() {
  return (
    <>
      <Header title="Кошелёк" />
      <WrapperPage>
        <div className="flex gap-4 mb-6">
          <Container className="flex flex-col grow relative bg-[url('/gift-illustration.png')] bg-no-repeat bg-[right_2px_center] bg-[length:auto_100%]">
            <h2 className="text-[24px] font-semibold mb-2">
              Бесплатные токены
            </h2>
            <p className="text-[16px] font-medium mb-6">
              Отправь пригласительную ссылку друзьям <br /> и получи 10 токенов
              за их регистрацию
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="solid"
                className="py-4 text-[16px] font-medium"
                href="/wallet"
              >
                Получить ссылку
              </Button>
            </div>
          </Container>
          <div className="shrink-0 min-w-[280px] text-white flex flex-col justify-center p-6 rounded-[20px] bg-accent-blue">
            <div className="flex items-center gap-2 mb-4">
              <CoinIcon />
              <span className="text-[28px] font-semibold">Баланс</span>
            </div>
            <div className="flex items-end justify-end text-right gap-1">
              <span className="font-semibold text-[44px]">14 467</span>
              <span className="text-[16px] font-medium">токенов</span>
            </div>
            <div className="flex justify-end mb-2">
              <p className="text-dark-blue text-right">~ 14 467 рублей</p>
            </div>
            <Button className="w-full rounded-full cursor-pointer text-text-primary py-4 bg-gradient-to-b from-[#FFFFFF] to-[#C9E7FF]">
              Пополнить
            </Button>
          </div>
        </div>
        <Container className="grow-0">
          <WalletTable />
        </Container>
      </WrapperPage>
    </>
  );
}
