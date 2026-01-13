import { growthClubData } from "@/data/rankings/growthClubData";
import RankingItem from "./RankingItem";
import Image from "next/image";
import { robotoCondensed } from "@/fonts/robotoCondensed";

export default function GrowthClubRankings() {
  const { title, items, primaryCta, secondaryCta } = growthClubData;

  return (
    <div>
       {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <Image
          src="/images/rankings/1851-growth-club.png"
          alt="1851 Growth Club"
          width={48}
          height={32}
          className="object-contain"
          priority
        />

        <h3 className={`${robotoCondensed.className} text-2xl text-white font-semibold leading-tight`}>
          {title}
        </h3>
      </div>

      <ul className="space-y-3 text-white">
        {items.map((item) => (
          <RankingItem key={item.rank} item={item} />
        ))}
      </ul>

      <div className="mt-5 flex justify-center gap-3">
        <a
          href={primaryCta.href}
          className="rounded bg-[#F33FDE] px-6 py-2 text-sm font-semibold text-white"
        >
          {primaryCta.label}
        </a>

        {secondaryCta && (
          <a
            href={secondaryCta.href}
            className="rounded border  bg-[#CEE8F3] text-[#0F3460] border-white px-4 py-2 text-sm font-semibold"
          >
            {secondaryCta.label}
          </a>
        )}
      </div>
    </div>
  );
}
