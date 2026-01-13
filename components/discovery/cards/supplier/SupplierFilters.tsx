import { supplierCardData } from "@/data/discovery/supplierData";
import { hostGrotesk } from "@/fonts/hostGrotesk";
import { passionOne } from "@/fonts/passionOne";

export default function SupplierFilters() {
  const { filters } = supplierCardData;

  return (
    <div className="border p-6">
      <h4
        className={`text-3xl font-bold leading-snug ${passionOne.className}`}
      >
        {filters.title}
      </h4>

      <div
        className={`mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 ${hostGrotesk.className}`}
      >
        {/* Category */}
        <div>
          <label className=" block text-xs font-medium text-[#F8F9FA]">
            Category
          </label>
          <select className="w-full rounded px-3 py-2 text-sm bg-white text-black">
            {filters.categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-xs font-medium text-[#F8F9FA]">
            Sort
          </label>
          <select className="w-full rounded px-3 py-2 text-sm bg-white text-black">
            {filters.sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* CTA */}
        <div className="flex items-end">
          <button className="w-full rounded-md bg-[#E5CAFA] text-[#0F3460]  py-2 text-md font-semibold">
            {filters.searchCta.label}
          </button>
        </div>
      </div>
    </div>
  );
}
