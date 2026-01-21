import Image from "next/image";
import { RankingsGridItem } from "@/types/rankingsTypes";
import { robotoCondensed } from "@/fonts/robotoCondensed";
export default function RankingsCard({
  item,
}: {
  item: RankingsGridItem;
}) {
  return (
    <article className={`${robotoCondensed.className}  flex-col gap-3`}>
         <span className="text-sm font-semibold uppercase tracking-wide text-[#F33FDE]">
        {item.tag}
       </span>
      <div className="relative aspect-video overflow-hidden rounded-md">
       <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg text-black font-semibold leading-snug">
        {item.title}
      </h3>
    </article>
  );
}
