import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";

interface SortableHeaderProps<T> {
  label: string;
  field: keyof T;
  sortConfig: { field: keyof T; direction: "asc" | "desc" };
  setSortConfig: (config: any) => void;
  className?: string;
}

export default function SortableHeader<T>({
  label,
  field,
  sortConfig,
  setSortConfig,
  className = "",
}: SortableHeaderProps<T>) {
  const isActive = sortConfig.field === field;

  function toggleSort() {
    setSortConfig({
      field,
      direction: isActive && sortConfig.direction === "asc" ? "desc" : "asc",
    });
  }

  return (
    <th
      onClick={toggleSort}
      className={`px-3 py-2 font-semibold cursor-pointer select-none ${className}`}
    >
      <div className="flex items-center justify-center gap-1">
        {label}
        <span className="text-xs">
          {isActive ? (sortConfig.direction === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />) : <ChevronsUpDown className="w-3 h-3" />}
        </span>
      </div>
    </th>
  );
}
