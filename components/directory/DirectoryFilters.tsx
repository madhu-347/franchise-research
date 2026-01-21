"use client";

import { robotoCondensed } from "@/fonts/robotoCondensed";

export default function DirectoryFilters({
  filters,
  setFilters,
  onApply,
  onClear,
}: any) {
  return (
    <div className="flex flex-wrap gap-4 border-b pb-5 mb-6">
      <input
        placeholder="Search for brand"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="border rounded px-3 py-2"
      />

      <select
        value={filters.industry}
        onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
        className="border rounded px-3 py-2"
      >
        <option>All</option>
        <option>Consumer Brands</option>
        <option>Services</option>
      </select>

      <input
        type="number"
        placeholder="$1,000"
        value={filters.minInvestment}
        onChange={(e) =>
          setFilters({ ...filters, minInvestment: Number(e.target.value) })
        }
        className="border rounded px-3 py-2 w-28"
      />

      <input
        type="number"
        placeholder="$100,000"
        value={filters.maxInvestment}
        onChange={(e) =>
          setFilters({ ...filters, maxInvestment: Number(e.target.value) })
        }
        className="border rounded px-3 py-2 w-28"
      />
      <section className={`flex ${robotoCondensed.className} font-semibold gap-2`}>
        <button
        onClick={onApply}
        className="bg-[#F33FDE] uppercase text-white px-5 py-2 rounded"
      >
        Apply Filters
      </button>

      <button
        onClick={onClear}
        className="bg-gray-200 uppercase px-5 py-2 rounded text-[#0F3460]"
      >
        Clear Filters
      </button>
      </section>
      
    </div>
  );
}
