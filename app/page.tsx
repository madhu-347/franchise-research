import Header from "@/components/header/Header";
import { trendingData } from "@/data/trendingData";
import TrendingStrip from "@/components/trending/TrendingStrip";
import FranchiseNewsSection from "@/components/news/FranchiseNewsSection";

export default function HeaderPage() {
  return (
    <>
      <Header />
      <TrendingStrip items={trendingData} />;
      <FranchiseNewsSection />
    </>
  );
}