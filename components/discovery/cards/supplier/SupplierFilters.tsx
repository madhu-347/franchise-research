import { supplierCardData } from "@/data/discovery/supplierData";

export default function SupplierFilters() {
  const { filters } = supplierCardData;

  return (
    <div className="rounded-md bg-blue-800 p-6">
      <h4 className="mb-4 font-semibold text-white">
        {filters.title}
      </h4>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Category */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-300">
            Category
          </label>
          <select className="w-full rounded px-3 py-2 text-sm text-black">
            {filters.categoryOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-300">
            Sort
          </label>
          <select className="w-full rounded px-3 py-2 text-sm text-black">
            {filters.sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* CTA */}
        <div className="flex items-end">
          <button className="w-full rounded-md bg-pink-500 px-4 py-2 text-sm font-semibold text-white">
            {filters.searchCta.label}
          </button>
        </div>
      </div>
    </div>
  );
}
