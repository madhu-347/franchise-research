import { Article } from "@/types/franchiseResearch";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="space-y-3">
      <div className="w-full aspect-video bg-gray-200" />

      <p className="text-sm text-gray-700 leading-relaxed">
        {article.excerpt}
      </p>

      <a
        href={article.link}
        className="text-xs underline hover:text-black"
      >
        Read more on 1851 →
      </a>
    </div>
  );
}
