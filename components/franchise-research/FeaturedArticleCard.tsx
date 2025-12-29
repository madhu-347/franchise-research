import Image from "next/image";
import { featuredArticle } from "@/data/franchiseResearch";

export default function FeaturedArticleCard() {
  return (
    <div
      className="
        flex flex-col gap-6
        md:flex-row
      "
    >
      {/* Image */}
      <div
        className="
          relative w-full
          md:w-[401px]
          aspect-video
          overflow-hidden
          shrink-0
        "
      >
        <Image
          src={featuredArticle.image}
          alt={featuredArticle.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {featuredArticle.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            {featuredArticle.excerpt}
          </p>
        </div>

        <a
          href={featuredArticle.link}
          className="text-sm pb-10 underline mt-4 hover:text-black"
        >
          Read more on 1851 →
        </a>
      </div>
    </div>
  );
}
