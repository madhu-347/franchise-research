"use client";

export default function ActiveFilterTags({
  appliedFilters,
  setAppliedFilters,
  setFilters,
}: any) {
  const tags = [];

  if (appliedFilters.industry !== "All") {
    tags.push({
      label: appliedFilters.industry,
      key: "industry",
    });
  }

  if (appliedFilters.minInvestment !== "" || appliedFilters.maxInvestment !== "") {
  tags.push({
    label: `$${Number(appliedFilters.minInvestment || 0).toLocaleString()} - $${Number(appliedFilters.maxInvestment || 0).toLocaleString()}`,
    key: "investment",
  });
}

  if (!tags.length) return null;

  function removeTag(key: string) {
    const updated = { ...appliedFilters };

    if (key === "industry") updated.industry = "All";

   if (key === "investment") {
    updated.minInvestment = "";
    updated.maxInvestment = "";
    }


    setFilters(updated);
    setAppliedFilters(updated);
  }

  return (
    <div className="mb-4 flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag.key}
          className="flex items-center gap-2 rounded-full bg-[#E7F2FA] px-3 py-1 text-sm text-[#0F3460]"
        >
          {tag.label}
          <button onClick={() => removeTag(tag.key)}>✕</button>
        </span>
      ))}
    </div>
  );
}
