import { motion } from "framer-motion";
import { FC } from "react";
import { ToggleIconProps } from "../types/ToggleIcon";
import clsx from "clsx";

export const ToggleIcon: FC<ToggleIconProps> = ({ isOpen }) => {
  return (
    <div className={clsx(
			"size-[44px] rounded-full border-[2px] border-accent-blue flex items-center justify-center transition-colors duration-200",
			isOpen ? "bg-white" : "bg-transparent"
		)}>
      <div className="relative w-3 h-3 flex items-center justify-center">
        <motion.span
          animate={{
            width: 12,
            height: 2, 
            borderRadius: 2,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bg-accent-blue"
        />
        <motion.span
          animate={{
            scaleY: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute w-[2px] h-[12px] bg-accent-blue rounded"
        />
      </div>
    </div>
  );
};
