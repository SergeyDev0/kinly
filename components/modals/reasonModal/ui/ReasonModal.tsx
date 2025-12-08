"use client";

import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { Modal } from "@/components/modal/ui/Modal";
import { reasonCategories } from "../model/reasons";
import { CloseIcon } from "@/assets/icons/svg/close";
import { SearchIcon } from "@/assets/icons/svg/search";
import { SearchNoIcon } from "@/assets/icons/svg/search-no";

type ReasonModalProps = {
  isOpen: boolean;
  onCloseAction: () => void;
  onSelectAction: (reasonId: string, reasonTitle: string) => void;
  selectedReasonId?: string | null;
};

export const ReasonModal = ({
  isOpen,
  onCloseAction,
  onSelectAction,
  selectedReasonId = null,
}: ReasonModalProps) => {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  useEffect(() => {
    if (isOpen) setQuery("");
  }, [isOpen]);

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return reasonCategories;
    return reasonCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.title.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [normalizedQuery]);

  const hasResults = filteredCategories.some((category) => category.items.length > 0);

  return (
    <Modal
      isOpen={isOpen}
      onCloseAction={onCloseAction}
      className="p-6 h-[750px] w-[750px] flex flex-col max-md:w-[calc(100%-32px)] max-md:h-[calc(100%-32px)]"
    >
      <div className="shrink-0">
      	<div className="relative mb-4 flex items-start justify-center">
	        <h3 className="text-[24px] font-semibold text-center">Выберите повод</h3>
	        <button
	          className="absolute right-0 top-0"
	          onClick={onCloseAction}
	        >
	          <CloseIcon />
	        </button>
	      </div>
	
	      <div className="relative">
	        <input
	          value={query}
	          onChange={(event) => setQuery(event.target.value)}
	          placeholder="Повод для поздравления"
	          className="w-full bg-blue rounded-[12px] pl-[46px] font-medium pr-3 py-3 text-[16px] text-text-primary placeholder:font-medium placeholder:text-[16px] placeholder:text-gray outline-none"
	        />
	        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray text-[18px]">
						<SearchIcon />
					</span>
	      </div>
      </div>

      <div className="overflow-y-auto grow">
        {hasResults ? (
          <div className="flex flex-col gap-4 mt-4">
          	{filteredCategories.map((category) => (
	            <div key={category.id}>
	              <p className="text-[20px] font-medium mb-2 text-dark-gray">{category.title}</p>
	              <div className="flex flex-wrap gap-2">
	                {category.items.map((item) => (
	                  <button
	                    key={item.id}
	                    type="button"
	                    onClick={() => onSelectAction(item.id, item.title)}
	                    className={clsx(
	                      "px-4 py-2 rounded-full border text-[14px]",
	                      selectedReasonId === item.id
	                        ? "bg-accent-blue text-white border-accent-blue"
	                        : "border-accent-blue bg-blue text-text-primary"
	                    )}
	                  >
	                    {item.title}
	                  </button>
	                ))}
	              </div>
	            </div>
	          ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-[80px]">
            <div className="mb-4">
							<SearchNoIcon />
						</div>
            <p className="text-[20px] font-medium mb-2 text-dark-gray">Ничего не найдено</p>
            <p className="text-[16px] font-medium w-[600px] text-gray leading-[24px]">
              По запросу “{query}” ничего не найдено. Попробуйте переформулировать запрос или
              проверьте его на наличие ошибок.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};
