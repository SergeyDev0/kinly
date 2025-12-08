"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

type ModalProps = {
  isOpen: boolean;
  onCloseAction: () => void;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export const Modal = ({ isOpen, onCloseAction, children, className }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseAction();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onCloseAction]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onCloseAction}
    >
      <div
        className={clsx(
          "bg-white rounded-[28px] overflow-hidden",
          className
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
