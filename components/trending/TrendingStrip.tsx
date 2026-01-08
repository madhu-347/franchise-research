"use client";

import { TrendingItem } from "@/types/trendingTypes";
import { Flame } from "lucide-react";

interface TrendingStripProps {
  items: TrendingItem[];
}

export default function TrendingStrip({ items }: TrendingStripProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="grid gap-3 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-2 min-w-0 rounded-lg border border-gray-500 bg-white px-3 py-2 text-xs text-gray-800

                ${index === 2 ? "hidden lg:flex" : ""}
                ${index === 1 ? "hidden sm:flex" : "flex"}
              `}
            >
              {/* Badge */}
              <span
                className=" flex shrink-0 items-center gap-1 px-2 py-0.5 font-semibold text-[#F33FDE] whitespace-nowrap
                "
              >
                {item.label}
                <Flame size={12} />
              </span>

              {/* Text */}
              <p
                className="min-w-0 truncate leading-snug"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
