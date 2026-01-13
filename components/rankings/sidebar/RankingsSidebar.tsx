import Image from "next/image";
import PowerRankings from "./PowerRankings";
import GrowthClubRankings from "./GrowthClubRankings";
import { robotoCondensed } from "@/fonts/robotoCondensed";
export default function RankingsSidebar() {
  return (
    <div className={robotoCondensed.className}>
        <h3 className="mb-4 text-3xl text-black font-semibold">
        Franchise Power Rankings
      </h3>

        <aside className="relative overflow-hidden rounded-lg">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                src="/images/rankings/background-image.png"
                alt=""
                fill
                className="object-cover"
                />
                <div className="absolute" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8 p-6">
                <PowerRankings />
                <GrowthClubRankings />
            </div>
            </aside>
    </div>
    
  );
}
