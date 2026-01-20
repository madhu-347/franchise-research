import FranchiseRow from "./FranchiseRow";
import SortableHeader from "./SortableHeader";
import { FranchiseItem } from "@/types/directoryTypes";

export default function FranchiseTable({
  data,
  sortConfig,
  setSortConfig,
}: {
  data: FranchiseItem[];
  sortConfig: { field: keyof FranchiseItem; direction: "asc" | "desc" };
  setSortConfig: (config: any) => void;
}) {
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
            <tr>
                {/* Always visible */}
                <SortableHeader<FranchiseItem>
                label="Brand"
                field="brandName"
                sortConfig={sortConfig}
                setSortConfig={setSortConfig}
                />

                <SortableHeader<FranchiseItem>
                label="Category"
                field="industry"
                sortConfig={sortConfig}
                setSortConfig={setSortConfig}
                />

                <SortableHeader<FranchiseItem>
                label="Investment Range"
                field="minInvestment"
                sortConfig={sortConfig}
                setSortConfig={setSortConfig}
                />

                {/* Desktop only */}
                <SortableHeader<FranchiseItem>
                label="Units"
                field="units"
                sortConfig={sortConfig}
                setSortConfig={setSortConfig}
                className="hidden lg:table-cell"
                />

                <SortableHeader<FranchiseItem>
                label="Cash Required"
                field="cashRequired"
                sortConfig={sortConfig}
                setSortConfig={setSortConfig}
                className="hidden lg:table-cell"
                />

                <th className="hidden lg:table-cell px-3 py-2 font-semibold">
                Latest Story
                </th>
            </tr>
            </thead>


        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <FranchiseRow key={item.id} {...item} />
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="px-4 py-8 text-center text-sm text-gray-500"
              >
                No franchises match your current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
