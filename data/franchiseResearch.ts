import { Article } from "@/types/franchiseResearch";

export const featuredArticle: Article = {
  id: "featured-1",
  title: "How to Buy a Franchise",
  excerpt:
    "Buying a franchise can be a smart path to entrepreneurship. This guide walks you through what to evaluate before making a decision.",
  image: "/images/image-2.png",
  link: "#",
};

export const sidebarArticles: Article[] = Array.from(
  { length: 8 },
  (_, i) => ({
    id: `sidebar-${i}`,
    title: "How to Buy a Franchise: What Is an FDD?",
    excerpt: "",
    image: "",
    link: "#",
  })
);

export const gridArticles: Article[] = Array.from(
  { length: 12 },
  (_, i) => ({
    id: `grid-${i}`,
    title: "Franchise Insights",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "",
    link: "#",
  })
);
