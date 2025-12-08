"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";

import { Modal } from "@/components/modal/ui/Modal";
import { Button } from "@/components/button/ui/Button";
import { CloseIcon } from "@/assets/icons/svg/close";

interface UploadZoneProps {
  children: React.ReactNode;
  className?: string;
  accept?: string[];
  maxSizeMb?: number;
  onFileSelect?: (file: File | null) => void;
  onFilesChange?: (files: File[]) => void;
  previewHeight?: number;
  previewWidth?: number;
  minHeight?: number;
  multiple?: boolean;
  maxFiles?: number;
  uploadedHint?: React.ReactNode;
  uploadMoreLabel?: string;
}

type SelectedFile = {
  file: File;
  preview: string;
};

const MAX_VISIBLE = 5;

const TrashIcon = ({ width = 18, height = 18 }: { width?: number; height?: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF383C"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const reorder = (list: SelectedFile[], from: number, to: number) => {
  if (from === to) return list;
  const next = [...list];
  const [moved] = next.splice(from, 1);
  if (!moved) return list;
  next.splice(to, 0, moved);
  return next;
};

export const UploadZone: React.FC<UploadZoneProps> = ({
  children,
  className,
  accept = ["image/png", "image/jpeg"],
  maxSizeMb = 32,
  onFileSelect,
  onFilesChange,
  previewHeight = 96,
  previewWidth = 84,
  minHeight = 200,
  multiple = false,
  maxFiles = 50,
  uploadedHint,
  uploadMoreLabel = "Загрузить еще",
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = useId();
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const initializedRef = useRef(false);
  const selectedFilesRef = useRef<SelectedFile[]>([]);
  const onFilesChangeRef = useRef(onFilesChange);
  const onFileSelectRef = useRef(onFileSelect);

  useEffect(() => {
    onFilesChangeRef.current = onFilesChange;
  }, [onFilesChange]);

  useEffect(() => {
    onFileSelectRef.current = onFileSelect;
  }, [onFileSelect]);

  useEffect(() => {
    selectedFilesRef.current = selectedFiles;
  }, [selectedFiles]);

  useEffect(() => {
    return () => {
      selectedFilesRef.current.forEach((item) => URL.revokeObjectURL(item.preview));
    };
  }, []);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      return;
    }

    onFilesChangeRef.current?.(selectedFiles.map((item) => item.file));
    onFileSelectRef.current?.(selectedFiles[0]?.file ?? null);
  }, [selectedFiles]);

  const defaultHint =
    uploadedHint ??
    (
      <p className="text-gray text-[14px] leading-[20px] text-center">
        Перенесите или загрузите с устройства от 2 до {maxFiles} изображений
        <br />
        (форматы jpeg или png, максимальный размер {maxSizeMb}MB)
      </p>
    );

  const validateFiles = (filesToValidate: File[]) => {
    const acceptedFiles: File[] = [];
    let hasTypeError = false;
    let hasSizeError = false;

    filesToValidate.forEach((file) => {
      const isAccepted = accept.includes(file.type);
      if (!isAccepted) {
        hasTypeError = true;
        return;
      }

      if (file.size > maxSizeMb * 1024 * 1024) {
        hasSizeError = true;
        return;
      }

      acceptedFiles.push(file);
    });

    if (hasTypeError) {
      alert(`Можно загружать только: ${accept.join(", ")}`);
    }

    if (hasSizeError) {
      alert(`Максимальный размер файла: ${maxSizeMb}MB`);
    }

    return acceptedFiles;
  };

  const addFiles = (incomingFiles?: FileList | File[]) => {
    if (!incomingFiles) return;

    const incomingArray = Array.from(incomingFiles);
    if (!incomingArray.length) return;

    const valid = validateFiles(incomingArray);
    if (!valid.length) return;

    if (!multiple) {
      selectedFilesRef.current.forEach((item) => URL.revokeObjectURL(item.preview));
      const file = valid[0];
      setSelectedFiles([{ file, preview: URL.createObjectURL(file) }]);
      return;
    }

    setSelectedFiles((prev) => {
      const availableSlots = Math.max(maxFiles - prev.length, 0);
      if (availableSlots <= 0) {
        alert(`Можно загрузить не более ${maxFiles} файлов`);
        return prev;
      }

      if (valid.length > availableSlots) {
        alert(`Будут добавлены только первые ${availableSlots} файлов`);
      }

      const nextItems = valid.slice(0, availableSlots).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      return [...prev, ...nextItems];
    });
  };

  const removeFileAt = (index: number) => {
    setSelectedFiles((prev) => {
      const next = [...prev];
      const [removed] = next.splice(index, 1);
      if (removed) URL.revokeObjectURL(removed.preview);
      return next;
    });
  };

  const clearFiles = () => {
    selectedFiles.forEach((item) => URL.revokeObjectURL(item.preview));
    setSelectedFiles([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files ?? undefined);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files ?? undefined);
  };

  const triggerSelect = () => {
    inputRef.current?.click();
  };

  const visibleFiles = multiple
    ? selectedFiles.slice(0, MAX_VISIBLE)
    : selectedFiles.slice(0, 1);
  const remainingCount = multiple
    ? Math.max(selectedFiles.length - MAX_VISIBLE, 0)
    : 0;
  const hasFiles = selectedFiles.length > 0;

  const handleDragStart = (index: number) => setDraggingIndex(index);

  const handleDragEnter = (index: number) => {
    if (draggingIndex === null || draggingIndex === index) return;
    setSelectedFiles((prev) => reorder(prev, draggingIndex, index));
    setDraggingIndex(index);
  };

  const handleDragEnd = () => setDraggingIndex(null);

  return (
    <div
      className={clsx(
        "w-full p-4 rounded-[20px] bg-white flex flex-col items-center",
        className
      )}
      style={{ minHeight }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept.join(",")}
        multiple={multiple}
        className="hidden"
        onChange={onInputChange}
      />

      {!multiple && !hasFiles && (
        <div
          className="flex flex-col items-center cursor-pointer w-full h-full"
          onClick={triggerSelect}
        >
          {children}
        </div>
      )}

      {!multiple && hasFiles && visibleFiles[0] && (
        <div className="flex flex-col items-center gap-3 w-full">
          <div
            className="relative rounded-[8px] overflow-hidden"
            style={{
              width: previewWidth,
              height: previewHeight,
            }}
          >
            <img
              src={visibleFiles[0].preview}
              alt="preview"
              className="w-full h-full object-cover"
            />

            <button
              onClick={clearFiles}
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <TrashIcon width={28} height={28} />
            </button>
          </div>

          <div
            onClick={triggerSelect}
            className="px-[40px] text-blue bg-accent-blue rounded-full cursor-pointer text-[12px] py-2"
          >
            Загрузить другое
          </div>
        </div>
      )}

      {multiple && !hasFiles && (
        <div
          className="flex flex-col items-center cursor-pointer w-full h-full"
          onClick={triggerSelect}
        >
          {children}
        </div>
      )}

      {multiple && hasFiles && (
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-wrap items-center gap-2 justify-start w-full">
            {visibleFiles.map((item, index) => (
              <div
                key={item.preview}
                className="group relative w-[72px] h-[82px] rounded-[8px] overflow-hidden bg-blue shrink-0 cursor-grab"
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
              >
                <img
                  src={item.preview}
                  alt={`Выбранное изображение ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#233874] to-[#0000004D]" />
                <span className="absolute left-0 bottom-0 h-fit w-fit right-0 top-0 m-auto text-white text-[28px] font-semibold transition-opacity duration-150 group-hover:opacity-0">
                  {index + 1}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFileAt(index);
                  }}
                  className="absolute left-0 top-0 w-full h-full flex justify-center items-center p-1 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                  aria-label="Удалить изображение"
                >
                  <TrashIcon width={16} height={16} />
                </button>
              </div>
            ))}

            {remainingCount > 0 && (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-[72px] h-[82px] rounded-[8px] bg-accent-blue text-white text-[20px] font-semibold flex items-center justify-center shrink-0"
              >
                {remainingCount}+
              </button>
            )}
          </div>

          <div className="w-full flex flex-col items-center gap-3">
            {defaultHint}
            <Button
              variant="solid"
              className="text-[12px] py-2 px-10"
              onClickAction={triggerSelect}
            >
              {uploadMoreLabel}
            </Button>
          </div>
        </div>
      )}

      {multiple && isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onCloseAction={() => setIsModalOpen(false)}
          className="p-6"
        >
					<div className="flex flex-col items-center relative pt-6">
						<button
	              className="absolute right-0 top-0"
	              onClick={() => setIsModalOpen(false)}
	              aria-label="Закрыть"
	            >
	            <CloseIcon />
	          </button>
						<h3 className="text-[24px] font-semibold text-center text-dark-gray mb-1">
							Загруженные изображения
						</h3>
	
	          <p className="text-[14px] text-dark-gray text-center mb-4 w-[390px]">
	            Чтобы изменить очередность фото в слайд-шоу, зажмите и перетащите
	            изображение в нужное место
	          </p>
	
	          <div className="grid grid-cols-7 gap-2 justify-items-center max-h-[420px] overflow-y-auto">
            {selectedFiles.map((item, index) => (
              <div
                key={item.preview}
                className={clsx(
                  "group relative w-[72px] aspect-[72/82] rounded-[8px] overflow-hidden bg-blue select-none cursor-grab",
                  draggingIndex === index && "ring-2 ring-accent-blue"
                )}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
	                onDragEnd={handleDragEnd}
	                onDragOver={(e) => e.preventDefault()}
                >
                  <img
                    src={item.preview}
                    alt={`Загруженное изображение ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#233874] to-[#0000004D]" />
                  <span className="absolute left-0 bottom-0 h-fit w-fit right-0 top-0 m-auto text-white text-[28px] font-semibold transition-opacity duration-150 group-hover:opacity-0">
                    {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFileAt(index);
                    }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                    aria-label="Удалить изображение"
                  >
                    <TrashIcon width={16} height={16} />
                  </button>
                </div>
              ))}
            </div>

          <div className="flex justify-center mt-6">
            <Button
              variant="solid"
              className="text-[18px] font-medium py-4"
              onClickAction={() => {
                triggerSelect();
              }}
            >
              {uploadMoreLabel}
            </Button>
          </div>
					</div>
        </Modal>
      )}
    </div>
  );
};
