"use client";

import { ImageUpIcon } from "@/assets/icons/svg/image-up";
import { LoaderIcon } from "@/assets/icons/svg/loader";
import { RefreshIcon } from "@/assets/icons/svg/refresh";
import { ShareIcon } from "@/assets/icons/svg/share";
import { Button } from "@/components/button/ui/Button";
import { Container } from "@/components/container/ui/Container";
import { postcardStore } from "@/store/postcardStore";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useState } from "react";

const GeneratePostcard = observer(() => {
  const preview = postcardStore.uploadedImage;
	const [isGenerate, setIsGenerate] = useState(false)

  return (
    <Container className="flex grow relative">
      <div className={clsx(
				"flex flex-col w-full justify-center items-center",
				isGenerate && "blur-[15px]"
			)}>
        <Image
          src="/example-h.png"
          alt=""
          width={2000}
          height={2000}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full max-h-[60vh] object-contain rounded-[20px] brightness-110"
        />
				{!isGenerate && (
					<div className="flex items-center justify-between mt-6 w-full">
						<div className="flex items-center gap-6">
							<button>
								<RefreshIcon />
							</button>
							<button>
								<ImageUpIcon 
									width={32} 
									height={32} 
									strokeWidth={3}
								/>
							</button>
							<button>
								<ShareIcon />
							</button>
						</div>
						<div className="flex items-center gap-4">
							<Button
								variant="outline"
								className="w-[260px] py-4"
							>
								Оживить открытку
							</Button>
							<Button
								variant="solid"
								className="w-[260px] py-4"
							>
								Скачать
							</Button>
						</div>
					</div>
				)}
      </div>
			{isGenerate && (
				<div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-6 z-[2]">
					<div className="spinner">
						<LoaderIcon />
					</div>
					<h3 className="text-[20px] font-medium">Собираем магию по кусочкам…</h3>
				</div>
			)}
    </Container>
  );
});

export default GeneratePostcard;
