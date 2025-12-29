import { gridArticles } from "@/data/franchiseResearch";
import ArticleCard from "./ArticleCard";

export default function ArticleGridSection() {
  return (
    <section
      className="
        mt-12
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {gridArticles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
