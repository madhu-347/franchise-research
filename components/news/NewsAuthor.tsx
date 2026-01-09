import Image from "next/image";
import { NewsAuthor as Author } from "@/types/newsTypes";

export default function NewsAuthor({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-3 pt-4">
      <Image
        src={author.avatar}
        alt={author.name}
        width={32}
        height={32}
        className="rounded-md"
      />

      <div className="text-xs">
        <p className="font-medium text-gray-900">{author.name}</p>
        <p className="text-gray-500">{author.role}</p>
      </div>
    </div>
  );
}
