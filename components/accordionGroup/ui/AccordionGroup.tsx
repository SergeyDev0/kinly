'use client'
import { FC, useState } from "react";
import { Accordion } from '../../accordion/ui/Accordion';
import { AccordionGroupProps } from "./types/AccordionGroup";

export const AccordionGroup: FC<AccordionGroupProps> = ({ items, colorItem = "bg-white" }) => {
  const [openId, setOpenId] = useState<string | number | null>(null);

  const toggle = (id: string | number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {items.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openId === item.id}
					color={colorItem}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
};