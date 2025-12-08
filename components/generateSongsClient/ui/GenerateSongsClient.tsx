import { LoaderIcon } from "@/assets/icons/svg/loader";
import { Container } from "@/components/container/ui/Container";

export const GenerateSongsClient = () => {
  return (
    <Container className="flex grow relative">
      <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-6 z-[2]">
        <div className="spinner">
          <LoaderIcon />
        </div>
        <h3 className="text-[20px] font-medium">Собираем магию по кусочкам…</h3>
      </div>
    </Container>
  );
};
