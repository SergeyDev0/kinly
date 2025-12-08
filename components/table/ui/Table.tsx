import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import clsx from "clsx";
import { TableProps } from "../types/Table";

export function Table<T extends object>({ columns, data }: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto rounded-[20px] bg-[#EAF2FF] p-1">
      <table className="w-full min-w-max border-collapse rounded-[20px] overflow-hidden">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-[#4A7CFF]">
              {headerGroup.headers.map((header) => (
                <th
								key={header.id}
								onClick={header.column.getToggleSortingHandler()}
								className={clsx(
									"text-left text-white font-medium text-[16px] px-6 py-5 cursor-pointer select-none"
								)}
							>
								<div className="flex items-center gap-1">
									{flexRender(header.column.columnDef.header, header.getContext())}
							
									<span
										className={clsx(
											"transition-opacity duration-200 inline-block w-3",
											header.column.getIsSorted() ? "opacity-100" : "opacity-0"
										)}
									>
										{header.column.getIsSorted() === "asc" && "↑"}
										{header.column.getIsSorted() === "desc" && "↓"}
									</span>
								</div>
							</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-[#EEF2FB] last:border-0">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-5 text-[16px] text-[#353535] whitespace-nowrap"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
