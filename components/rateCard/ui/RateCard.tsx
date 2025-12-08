"use client";

import clsx from "clsx";
import { MarkerIcon } from "@/assets/icons/svg/marker";
import { RateCardProps } from "../types/RateCard";

export const RateCard = ({
  title,
  features,
  price,
  gradient = false,
  selected = false,
  big = false,
}: RateCardProps) => {
  if (big) {
    return (
      <div
        className={clsx(
          "w-full h-full flex flex-col gap-3 rounded-[16px] px-6 py-5 cursor-pointer transition-all duration-200",
          gradient
            ? "bg-gradient-to-r from-[#507CFF] to-[#5E48DC] text-white"
            : "bg-white text-text-primary"
        )}
      >
				<div className="flex items-center justify-between">
					<h3
						className={clsx(
							"text-[20px] font-medium max-ssm:text-[16px] max-ssm:font-medium",
							gradient ? 
							"text-white" : 
							"bg-gradient-to-r from-[#507CFF] to-[#5E48DC] inline-block bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
						)}
					>
						{title}
					</h3>
					<div className="shrink-0 flex items-center gap-3">
						
						<span
							className={clsx(
								"text-[32px] font-medium inline-block bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-ssm:font-semibold max-ssm:text-[28px]",
								gradient
									? "bg-gradient-to-b from-[#FFFFFF] to-[#C9E7FF]"
									: "bg-gradient-to-r from-[#507CFF] to-[#5E48DC]"
							)}
						>
							{price}
						</span>
						<div
							className={clsx(
								"rounded-full size-[20px] flex justify-center items-center border transition-all duration-200",
								gradient
									? "border-white bg-white"
									: "border-gray bg-white",
							)}
						>
							<div
								className={clsx(
									"size-2 rounded-full transition-all duration-200",
									selected
										? gradient
											? "bg-accent-blue"
											: "bg-accent-blue"
										: "bg-transparent"
								)}
							></div>
						</div>
					</div>
				</div>
        <div className="grow flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-[16px] max-ssm:text-[14px]">
                <MarkerIcon fill={gradient ? "#FFFFFF" : "#507CFF"} />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={clsx(
          "w-full h-full flex justify-center items-center gap-3 rounded-[16px] px-6 py-5 cursor-pointer transition-all duration-200",
          gradient
            ? "bg-gradient-to-r from-[#507CFF] to-[#5E48DC] text-white"
            : "bg-white text-text-primary"
        )}
      >
        <div className="grow flex flex-col gap-3">
          <h3
            className={clsx(
              "text-[20px] font-semibold max-ssm:text-[16px] max-ssm:font-medium",
              gradient && "text-white"
            )}
          >
            {title}
          </h3>
          <div className="flex flex-col gap-1">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-[16px] max-ssm:text-[14px]">
                <MarkerIcon fill={gradient ? "#FFFFFF" : "#465067"} />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <span
            className={clsx(
              "inline-block text-[32px] font-medium bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-ssm:font-semibold max-ssm:text-[28px]",
              gradient
                ? "bg-gradient-to-b from-[#FFFFFF] to-[#C9E7FF]"
                : "bg-gradient-to-r from-[#507CFF] to-[#5E48DC]"
            )}
          >
            {price}
          </span>

          <div
            className={clsx(
              "rounded-full size-[20px] flex justify-center items-center border transition-all duration-200",
              gradient ? "border-white bg-white" : "border-gray bg-white"
            )}
          >
            <div
              className={clsx(
                "size-2 rounded-full transition-all duration-200",
                selected
                  ? gradient
                    ? "bg-accent-blue"
                    : "bg-accent-blue"
                  : "bg-transparent"
              )}
            ></div>
          </div>
        </div>
      </div>
    );
  }
};
