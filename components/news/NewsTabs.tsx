"use client";

interface NewsTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function NewsTabs({
  tabs,
  activeTab,
  onChange,
}: NewsTabsProps) {
  return (
    <div
      className="
        -mx-4 px-4
        flex gap-6 border-b pb-3
        overflow-x-auto overflow-y-hidden
        whitespace-nowrap touch-pan-x
        lg:overflow-visible lg:whitespace-normal
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            relative pb-2 text-sm font-medium transition
            ${
              activeTab === tab
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }
          `}
        >
          {tab}

          {activeTab === tab && (
            <span className="absolute left-0 -bottom-3 h-0.5 w-full bg-black" />
          )}
        </button>
      ))}
    </div>
  );
}
