import { RankingWidget } from "@/types/rankingsTypes";

export const powerRankingsData: RankingWidget = {
  title: "Hottest Franchises",
  items: [
    { rank: 1, brandName: "Brand Name", link: "/brands/1" },
    { rank: 2, brandName: "Brand Name", link: "/brands/2" },
    { rank: 3, brandName: "Brand Name", link: "/brands/3" },
    { rank: 4, brandName: "Brand Name", link: "/brands/4" },
    { rank: 5, brandName: "Brand Name", link: "/brands/5" },
    { rank: 6, brandName: "Brand Name", link: "/brands/6" },
    { rank: 7, brandName: "Brand Name", link: "/brands/7" },
    { rank: 8, brandName: "Brand Name", link: "/brands/8" },
    { rank: 9, brandName: "Brand Name", link: "/brands/9" },
    { rank: 10, brandName: "Brand Name", link: "/brands/10" },
  ],
  primaryCta: {
    label: "SEE ALL",
    href: "/rankings",
  },
  secondaryCta: {
    label: "GET A BRAND PAGE",
    href: "/brands",
  },
};
