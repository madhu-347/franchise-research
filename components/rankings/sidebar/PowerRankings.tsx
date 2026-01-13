import { powerRankingsData } from "@/data/rankings/powerRankingsData";
import RankingItem from "./RankingItem";
import { Flame } from "lucide-react";

export default function PowerRankings() {
  const { title, items, primaryCta, secondaryCta } = powerRankingsData;

  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-sm font-medium">
        <span className="text-pink-400"><Flame className="w-5" /></span>
        <span className="text-white font-bold text-2xl">{title}</span>
      </div>

      <ul className="space-y-3 text-white">
        {items.map((item) => (
          <RankingItem key={item.rank} item={item} />
        ))}
      </ul>

      <div className="mt-5 flex justify-center gap-3">
        <a
          href={primaryCta.href}
          className="rounded bg-[#F33FDE] px-6 py-2 text-sm font-bold text-white"
        >
          {primaryCta.label}
        </a>

        {secondaryCta && (
          <a
            href={secondaryCta.href}
            className="rounded border bg-[#CEE8F3] text-[#0F3460] border-white px-4 py-2 text-sm font-semibold "
          >
            {secondaryCta.label}
          </a>
        )}
      </div>
    </div>
  );
}
