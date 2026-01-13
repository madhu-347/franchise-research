import { rankingsGridData } from "@/data/rankings/rankingsGridData";
import RankingsCard from "./RankingsCard";

export default function RankingsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {rankingsGridData.map((item) => (
        <RankingsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
