'use client'
import { BellIcon } from "@/assets/icons/svg/bell";
import { useState } from "react";

export const Notifications = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<div className="relative">
			<button>
				<BellIcon />
			</button>
		</div>
	)
};