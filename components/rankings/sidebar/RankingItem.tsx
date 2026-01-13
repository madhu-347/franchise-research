import { RankingListItem } from "@/types/rankingsTypes";
import { robotoCondensed } from "@/fonts/robotoCondensed";
import { ChevronRight } from "lucide-react";

export default function RankingItem({
  item,
}: {
  item: RankingListItem;
}) {
  return (
    <li className="border-b border-white/40 pb-4 last:border-b-0">
      <div className="flex items-start gap-3">
        <span className="shrink-0 text-right text-3xl font-bold">
          #{item.rank}
        </span>

        <div>
          <p
            className={`${robotoCondensed.className} text-md font-medium`}
          >
            {item.brandName}
          </p>

          <a
            href={item.link}
            className="flex items-center gap-1 text-xs text-gray-300 hover:underline"
          >
            Visit Newsroom
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </li>
  );
}
