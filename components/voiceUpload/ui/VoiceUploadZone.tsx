"use client";

import {
	Dispatch,
  SetStateAction,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import clsx from "clsx";

import { MicrophoneIcon } from "@/assets/icons/svg/mic";
import { CloseIcon } from "@/assets/icons/svg/close";
import { Button } from "@/components/button/ui/Button";
import { FileVolumeIcon } from "@/assets/icons/svg/file-volume";
import { VoiceUploadStateProps } from "../types/VoiceUpload";

type VoiceUploadZoneProps = {
  className?: string;
  onFileChangeAction?: (file: File | null, durationSeconds?: number) => void;
  onRecordVoiceAction?: (event: MouseEvent<HTMLButtonElement>) => void;
  minDurationSeconds?: number;
  maxDurationSeconds?: number;
  filePreviewVariant?: "default" | "pill";
  uploadedActionsSlot?: ReactNode;
  uploadedHint?: ReactNode;
  showHintWhenUploaded?: boolean;
  inputId?: string;
  minHeight?: number;
  emptyStateSlot?: ReactNode;
};

const ACCEPTED_TYPES = new Set([
  "audio/mpeg",
  "audio/mp3",
  "audio/wav",
  "audio/x-wav",
  "audio/wave",
  "audio/vnd.wave",
]);

const EXTENSION_REGEXP = /\.(mp3|wav|waw)$/i;
const DURATION_TOLERANCE = 0.5; // some files may be off by ~0.2-0.3s

const formatDuration = (seconds: number) => {
  const rounded = Math.round(seconds);
  const minutes = Math.floor(rounded / 60);
  const secs = rounded % 60;
  const paddedSecs = secs < 10 ? `0${secs}` : `${secs}`;
  return `${minutes}:${paddedSecs}`;
};

export const VoiceUploadZone = ({
  className,
  onFileChangeAction,
  onRecordVoiceAction,
  minDurationSeconds = 45,
  maxDurationSeconds = 550,
  filePreviewVariant = "default",
  uploadedActionsSlot,
  uploadedHint,
  showHintWhenUploaded = false,
  inputId,
  minHeight = 425,
  emptyStateSlot,
}: VoiceUploadZoneProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const audioLabelId = inputId ?? useId();

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  const reset = () => {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      setObjectUrl(null);
    }
    setFile(null);
    setDuration(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onFileChangeAction?.(null, undefined);
  };

  const validateType = (f: File) => {
    return ACCEPTED_TYPES.has(f.type) || EXTENSION_REGEXP.test(f.name);
  };

  const handleDurationValidation = (
    seconds: number,
    candidateUrl: string,
    f: File
  ) => {
    if (!isFinite(seconds) || seconds <= 0) {
      alert("Не удалось определить длительность аудио файла");
      if (inputRef.current) inputRef.current.value = "";
      URL.revokeObjectURL(candidateUrl);
      return;
    }

    const tooShort = seconds < minDurationSeconds - DURATION_TOLERANCE;
    const tooLong = seconds > maxDurationSeconds + DURATION_TOLERANCE;

    if (tooShort || tooLong) {
      alert(
        `Длительность аудио должна быть от ${minDurationSeconds} до ${maxDurationSeconds} секунд`
      );
      if (inputRef.current) inputRef.current.value = "";
      URL.revokeObjectURL(candidateUrl);
      return;
    }

    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
    }

    setObjectUrl(candidateUrl);
    setFile(f);
    setDuration(seconds);
    onFileChangeAction?.(f, seconds);
  };

  const handleFile = (f: File) => {
    if (!validateType(f)) {
      alert("Можно загружать только аудио в формате mp3 или wav");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    const candidateUrl = URL.createObjectURL(f);
    const audio = new Audio(candidateUrl);

    const onLoaded = () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("error", onError);
      handleDurationValidation(audio.duration, candidateUrl, f);
    };

    const onError = () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("error", onError);
      alert("Не удалось загрузить аудио файл");
      if (inputRef.current) inputRef.current.value = "";
      URL.revokeObjectURL(candidateUrl);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("error", onError);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const triggerSelect = () => {
    inputRef.current?.click();
  };

  const hintContent =
    uploadedHint ??
    (
      <p className="text-gray text-[14px] mt-3 text-center">
        Перенесите аудиозапись или загрузите с устройства <br />
        (форматы mp3 или wav, длина аудио дорожки от 45 до 60с)
      </p>
    );

  const defaultUploadedActions = (
    <div
      className="w-full flex justify-center items-center gap-4 mt-6"
      onClick={(e) => e.stopPropagation()}
    >
      <Button
        variant="outline"
        className="font-medium text-[20px] py-4 w-[235px] flex justify-center"
        onClickAction={(e) => {
          onRecordVoiceAction?.(e);
        }}
      >
        Записать голос
      </Button>
      <Button
        href="/"
        variant="solid"
        className="font-medium text-[20px] py-4 w-[235px] flex justify-center"
      >
        Продолжить
      </Button>
    </div>
  );

  const uploadedActions = uploadedActionsSlot ?? defaultUploadedActions;

  const renderUploadedCard = () => {
    if (!file || duration === null) return null;

    if (filePreviewVariant === "pill") {
      return (
        <div className="relative flex items-center gap-3 bg-blue rounded-[12px] px-4 py-3 min-w-[240px] max-w-full shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <button
            onClick={reset}
            className="absolute -right-2 -top-2 p-[6px] rounded-full bg-white shadow-sm border border-blue text-gray"
            aria-label="Удалить аудио"
            type="button"
          >
            <CloseIcon width={12} height={12} fill="#A8B0C0" />
          </button>
          <FileVolumeIcon />
          <div className="flex flex-col gap-0.5 min-w-0">
            <span
              className="text-[16px] font-medium text-text-primary max-w-[180px] truncate"
              title={file.name}
            >
              {file.name}
            </span>
            <span className="text-[14px] text-gray">{formatDuration(duration)}</span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full flex items-center gap-2 max-w-[230px] rounded-[20px] bg-blue px-6 py-4">
        <button
          onClick={reset}
          className="absolute right-0 top-[-7.5px] p-[3px] rounded-full border border-white bg-blue"
          aria-label="Удалить аудио"
          type="button"
        >
          <CloseIcon width={16} height={16} fill="#A8B0C0" />
        </button>
        <FileVolumeIcon />
        <div className="flex flex-col gap-1">
          <span
            className="text-[16px] font-medium text-text-primary max-w-[120px] truncate"
            title={file.name}
          >
            {file.name}
          </span>
          <span className="text-[14px] text-gray">
            {formatDuration(duration)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "w-full p-4 rounded-[20px] bg-white flex flex-col justify-center items-center",
        className
      )}
      style={{ minHeight }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <input
        ref={inputRef}
        id={audioLabelId}
        type="file"
        accept=".mp3,.wav,.waw,audio/mpeg,audio/wav,audio/x-wav,audio/wave,audio/waw"
        className="hidden"
        onChange={onInputChange}
      />

      {!file &&
        (emptyStateSlot ? (
          <div
            className="flex flex-col items-center justify-center w-full h-full text-center cursor-pointer grow"
            onClick={triggerSelect}
          >
            {emptyStateSlot}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center w-full h-full text-center cursor-pointer grow"
            onClick={triggerSelect}
          >
            <MicrophoneIcon />
            {hintContent}
            <div
              className="w-full flex justify-center items-center gap-4 mt-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="outline"
                className="font-medium text-[20px] py-4 w-[235px] flex justify-center"
                onClickAction={(e) => {
                  onRecordVoiceAction?.(e);
                }}
              >
                Записать голос
              </Button>
              <Button
                variant="solid"
                type="file"
                htmlFor={audioLabelId}
                className="font-medium text-[20px] py-4 w-[235px] flex justify-center"
              >
                Загрузить
              </Button>
            </div>
          </div>
        ))}

      {file && duration !== null && (
        <>
          {renderUploadedCard()}
          {showHintWhenUploaded && hintContent}
          {uploadedActions}
        </>
      )}
    </div>
  );
};
