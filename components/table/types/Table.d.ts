import { ColumnDef } from "@tanstack/react-table";

export type Row = {
  time: string;
  category: string;
  tokens: number;
};

export type TableProps<T extends object> = {
  columns: ColumnDef<T, any>[];
  data: T[];
};