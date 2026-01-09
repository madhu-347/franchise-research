import { NewsItem } from "@/types/newsTypes";
import NewsCard from "./NewsCard";

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
