import { Button } from "@/components/button/ui/Button";
import { Container } from "@/components/container/ui/Container";
import { Header } from "@/components/header/ui/Header";
import { ProfileClient } from "@/components/profileClient/ui/ProfileClient";
import { WrapperPage } from "@/components/wrapperPage/ui/WrapperPage";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <>
      <Header title="Профиль" />
      <WrapperPage>
				<ProfileClient />
        <Container className="flex flex-col grow-0 relative bg-[url('/gift-illustration.png')] bg-no-repeat bg-[right_2px_center] bg-[length:380px_223px]">
          <h2 className="text-[24px] font-semibold mb-2">Бесплатные токены</h2>
          <p className="text-[16px] font-medium mb-6">
            Отправь пригласительную ссылку друзьям <br /> и получи 10 токенов за
            их регистрацию
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
      </WrapperPage>
    </>
  );
}
