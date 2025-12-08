import { FC } from "react";
import { AccordionProps } from "../types/Accordion";
import { AnimatePresence, motion } from "framer-motion";
import { ToggleIcon } from "./ToggleIcon";
import clsx from "clsx";

export const Accordion: FC<AccordionProps> = ({
  title,
  content,
  isOpen,
	color,
  onToggle,
}) => {
  return (
    <div className={clsx(
			"rounded-[20px] overflow-hidden transition-colors duration-200",
			isOpen ? "bg-gradient-to-r from-[#507CFF] to-[#5E48DC]" : color,
		)}>
      <motion.button
				key="header"
				initial="collapsed"
				animate={isOpen ? "open" : "collapsed"}
				exit="collapsed"
        onClick={onToggle}
				variants={{
					open: {
						paddingBottom: 12,
						transition: { duration: 0, ease: "easeOut" },
					},
					collapsed: {
						paddingBottom: 16,
						transition: { duration: 0, ease: "easeIn", delay: 0.2 },
					},
				}}
        className="w-full px-4 pt-4 flex justify-between items-center text-left"
      >
        <span className={clsx(
					"font-medium text-[20px] transition-all duration-150",
					isOpen ? "text-white" : "text-dark-gray"
				)}>{title}</span>
        <ToggleIcon isOpen={isOpen} />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                height: "auto",
                opacity: 1,
								marginBottom: 16,
                transition: { duration: 0.25, ease: "easeOut" },
              },
              collapsed: {
                height: 0,
                opacity: 0,
                marginTop: 0,
								marginBottom: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              },
            }}
            className="overflow-hidden px-4"
          >
            <div className={clsx(
							"text-[16px] transition-all duration-200",
							isOpen ? "text-white" : "text-dark-gray"
						)}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
