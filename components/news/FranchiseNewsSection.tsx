"use client";

import { useState } from "react";
import { newsData } from "@/data/newsData";
import NewsTabs from "./NewsTabs";
import NewsGrid from "./NewsGrid";
import { robotoCondensed } from "@/fonts/robotoCondensed";


const TABS = [
  "Franchise News",
  "Buy a Franchise",
  "Grow a Franchise",
  "Franchisee Stories",
  "Franchise Your Business",
];

export default function FranchiseNewsSection() {
  const [activeTab, setActiveTab] = useState("Franchise News");

  const filteredData = newsData.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className={`${robotoCondensed.className} mb-6 text-4xl font-bold`}>
          Franchise Industry News
        </h2>

        <NewsTabs
          tabs={TABS}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="mt-8">
          <NewsGrid items={filteredData} />
        </div>
      </div>
    </section>
  );
}
