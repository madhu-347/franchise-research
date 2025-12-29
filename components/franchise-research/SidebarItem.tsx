import { Article } from "@/types/franchiseResearch";

interface Props {
  article: Article;
}

export default function SidebarItem({ article }: Props) {
  return (
    <div className="flex gap-3 pb-4 border-b-2 last:border-b">
      <div className="w-24 aspect-video bg-gray-200 shrink-0" />

      <p className="text-sm leading-snug">
        {article.title}
      </p>
    </div>
  );
}
