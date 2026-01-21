"use client";

import { useState, useEffect} from "react";
import Header from "@/components/header/Header";
import DirectoryIntro from "@/components/directory/DirectoryIntro";
import DirectoryFilters from "@/components/directory/DirectoryFilters";
import FranchiseTable from "@/components/directory/FranchiseTable";
import { franchiseDirectoryData } from "@/data/directory/franchiseDirectoryData";
import ActiveFilterTags from "@/components/directory/ActiveFilterTags";
import { FranchiseItem } from "@/types/directoryTypes";
import { robotoCondensed } from "@/fonts/robotoCondensed";
import Footer from "@/components/footer/Footer";


export default function FindFranchisePage() {
    
  const [filters, setFilters] = useState({
    search: "",
    industry: "All",
    minInvestment: "",
    maxInvestment: "",
  });
  const [sortConfig, setSortConfig] = useState<{
  field: keyof FranchiseItem;
  direction: "asc" | "desc";
}>({
  field: "brandName",
  direction: "asc",
});

    const ITEMS_PER_LOAD = 10;

const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

    
  const [appliedFilters, setAppliedFilters] = useState(filters);

  const filteredData = franchiseDirectoryData.filter((item) => {
        const min = appliedFilters.minInvestment
        ? Number(appliedFilters.minInvestment)
        : 0;

        const max = appliedFilters.maxInvestment
        ? Number(appliedFilters.maxInvestment)
        : Infinity;

        return (
        item.brandName.toLowerCase().includes(appliedFilters.search.toLowerCase()) &&
        (appliedFilters.industry === "All" || item.industry === appliedFilters.industry) &&
        item.maxInvestment >= min &&
        item.minInvestment <= max
);

  });

  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
    }, [appliedFilters, sortConfig]);

   const sortedData = [...filteredData].sort((a, b) => {
    const { field, direction } = sortConfig;

    if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
    if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
    return 0;
    });
    const visibleData = sortedData.slice(0, visibleCount);
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <DirectoryIntro
          breadcrumb={["1851 Franchise", "Franchise Opportunities"]}
          title="Franchise Opportunities"
          description="Explore our comprehensive franchise directory to find the right business opportunity for your goals. Browse hundreds of brands across industries, compare investment levels, and use our filters to quickly narrow your search. Whether you're just starting your research or ready to take the next step, our directory makes it easy to discover the franchise that fits your future."
        />

        <DirectoryFilters
          filters={filters}
          setFilters={setFilters}
          onApply={() => setAppliedFilters(filters)}
          onClear={() => {
            const reset = {
                search: "",
                industry: "All",
                minInvestment: "",
                maxInvestment: "",
            };

            setFilters(reset);
            setAppliedFilters(reset);
            }}

        />        
        <p className="mb-1 text-xl"
        style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
          >
            {filteredData.length} Franchises
        </p>
        <ActiveFilterTags
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        setFilters={setFilters}
        />
        <FranchiseTable
            data={visibleData}
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
            />
        {visibleCount < sortedData.length && (
        <div className="flex justify-center mt-6">
            <button
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
            className={`${robotoCondensed.className} uppercase bg-[#CEE8F3] px-6 py-2 text-md font-semibold text-[#0F3460]`}
            >
            + Show More
            </button>
        </div>
        )}
      </main>
    <Footer />
    </>
  );
}
