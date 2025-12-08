import { Row } from "@/components/table/types/Table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Row>[] = [
  {
    accessorKey: "time",
    header: "Время",
  },
  {
    accessorKey: "category",
    header: "Категория",
  },
  {
    accessorKey: "tokens",
    header: "Токены",
  },
];

export const dataUseTokens: Row[] = [
  { time: "2025/11/19 20:46:41", category: "Создание открытки", tokens: 50 },
  { time: "2025/11/19 20:46:41", category: "Создание открытки", tokens: 50 },
  { time: "2025/11/19 20:46:41", category: "Создание открытки", tokens: 50 },
];

export const dataReplenishments: Row[] = [
  {
    time: "2025/11/19 20:46:41",
    category: "Бесплатные токены",
    tokens: 50,
  },
  {
    time: "2025/11/19 20:46:41",
    category: "Приглашение",
    tokens: 50,
  },
  {
    time: "2025/11/19 20:46:41",
    category: "Приглашение",
    tokens: 50,
  },
  {
    time: "2025/11/19 20:46:41",
    category: "Покупка токенов",
    tokens: 50,
  },
  {
    time: "2025/11/19 20:46:41",
    category: "Покупка токенов",
    tokens: 50,
  },
  {
    time: "2025/11/19 20:46:41",
    category: "Покупка токенов",
    tokens: 50,
  },
];
