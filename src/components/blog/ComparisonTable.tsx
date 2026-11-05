import React from "react";
import { BlogTable } from "@/types";

interface ComparisonTableProps {
  table: BlogTable;
  className?: string;
}

export function ComparisonTable({ table, className = "" }: ComparisonTableProps) {
  if (!table || !table.headers || table.headers.length === 0) return null;

  return (
    <div className={`my-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs ${className}`}>
      {table.caption && (
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-200/80">
          <span className="text-xs sm:text-sm font-bold text-[#102B4E]">
            {table.caption}
          </span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-[#172B45] border-collapse min-w-[540px]">
          <thead className="bg-[#102B4E] text-white text-xs uppercase tracking-wider">
            <tr>
              {table.headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-5 py-3.5 font-bold border-r border-slate-700/60 last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80">
            {table.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`transition-colors hover:bg-blue-50/40 ${
                  rowIndex % 2 === 1 ? "bg-slate-50/60" : "bg-white"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-5 py-3.5 leading-relaxed border-r border-slate-200/60 last:border-r-0 ${
                      cellIndex === 0 ? "font-semibold text-[#102B4E]" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

