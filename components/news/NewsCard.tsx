import Image from "next/image";
import { NewsItem } from "@/types/newsTypes";
import NewsAuthor from "./NewsAuthor";
import { robotoCondensed } from "@/fonts/robotoCondensed";


export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <span className="rounded bg-[#CEE8F3] px-2 py-1 text-[#0F3460]">
          {item.category}
        </span>
        <span>
          {item.date} • {item.readTime}
        </span>
      </div>

      {/* Title */}
      <section className={robotoCondensed.className}>
        <h3 className="mt-3 text-2xl text-[#161B22] font-semibold leading-snug line-clamp-2">
        {item.title}
      </h3>
      </section>
      

      {/* Description */}
      <p className="mt-2 text-sm text-[#161B22] line-clamp-3"
       style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}>
        {item.description}
      </p>

      {/* Author */}
      <NewsAuthor author={item.author} />
    </article>
  );
}
