import Header from "@/components/header/Header";
import { trendingData } from "@/data/trendingData";
import TrendingStrip from "@/components/trending/TrendingStrip";
export default function HeaderPage() {
  return (
    <>
      <Header />
      <TrendingStrip items={trendingData} />;
      
    </>
  );
}