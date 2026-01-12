import { growthClubCardData } from "@/data/discovery/growthClubData";
import { hostGrotesk } from "@/fonts/hostGrotesk";
import { passionOne } from "@/fonts/passionOne";

export default function GrowthClubFilters() {
  const { filters } = growthClubCardData;

  return (
    <div className="rounded-md border bg-white p-6">
      <h4 className={`mb-4 font-semibold text-[#0F3460] text-lg ${passionOne.className}`}>
        {filters.title}
      </h4>
       <h3 className={`${hostGrotesk.className}`}>Filter</h3>
      <div className={`${hostGrotesk.className} grid grid-cols-1 gap-4 sm:grid-cols-3`}>
        {/* Industry */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-500">
            Industry
          </label>
          <select className="w-full rounded border px-3 py-2 text-sm">
            {filters.industryOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Investment range */}
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-500">
            Investment Range
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="$1,000"
              className="w-full rounded border px-3 py-2 text-sm"
            />
            <span className="text-xs text-gray-500">to</span>
            <input
              type="number"
              placeholder="$100,000"
              className="w-full rounded border px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-end">
          <button className="w-full rounded-md bg-blue-900 px-4 py-2 text-md font-semibold text-white">
            {filters.applyCta.label}
          </button>
        </div>
      </div>
    </div>
  );
}
