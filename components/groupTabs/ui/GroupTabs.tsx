"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { GroupTabs as iGroupTabs, Indicator } from "../types/GroupTabs";


const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const GroupTabs = ({
  tabs,
  activeTab,
  setActiveTabAction,
	className = "",
	background = "blue"
}: iGroupTabs) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
	const [indicator, setIndicator] = useState<Indicator>();

	tabsRef.current = tabsRef.current.slice(0, tabs.length);

	const updateIndicator = useCallback(() => {
		const container = containerRef.current;
		const activeEl = tabsRef.current[activeTab];

		if (!container || !activeEl) {
			return;
		}

		const containerRect = container.getBoundingClientRect();
		const activeRect = activeEl.getBoundingClientRect();

		setIndicator({
			width: activeRect.width,
			height: activeRect.height,
			left: activeRect.left - containerRect.left,
			top: activeRect.top - containerRect.top,
		});
	}, [activeTab, tabs.length]);

	useIsomorphicLayoutEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		const id = window.requestAnimationFrame(updateIndicator);
		return () => window.cancelAnimationFrame(id);
	}, [updateIndicator]);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		const onResize = () => updateIndicator();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [updateIndicator]);

  return (
		<div
			ref={containerRef}
			className={clsx(
				"relative flex items-center gap-1 rounded-full w-fit",
				`bg-${background}`,
				className,
			)}
		>
			{indicator && (
				<motion.span
					className="absolute rounded-full bg-accent-blue"
					initial={false}
					animate={{
						width: indicator.width,
						height: indicator.height,
						left: indicator.left,
						top: indicator.top,
					}}
					transition={{ type: "spring", stiffness: 480, damping: 40 }}
				/>
			)}
      {tabs.map((tab, i) => {
				const isActive = activeTab === i;
				return (
					<button
						key={`${tab}-${i}`}
						ref={(el) => {tabsRef.current[i] = el}}
						onClick={() => setActiveTabAction(i)}
						className={clsx(
							"relative z-1	0 py-3 px-6 text-[18px] font-medium rounded-full transition-colors duration-200 max-ssm:text-[14px]",
							isActive ? "text-white [&_path]:fill-white" : "bg-gradient-to-r from-[#507CFF] to-[#5E48DC] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [&_path]:fill-accent-blue"
						)}
						aria-pressed={isActive}
					>
						{tab}
					</button>
				);
			})}
    </div>
  );
};
