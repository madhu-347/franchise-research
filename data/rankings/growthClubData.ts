import { RankingWidget } from "@/types/rankingsTypes";

export const growthClubData: RankingWidget = {
  title: "Top 5 Growth Club Brands",
  items: [
    { rank: 1, brandName: "Brand Name", link: "/brands/101" },
    { rank: 2, brandName: "Brand Name", link: "/brands/102" },
    { rank: 3, brandName: "Brand Name", link: "/brands/103" },
    { rank: 4, brandName: "Brand Name", link: "/brands/104" },
    { rank: 5, brandName: "Brand Name", link: "/brands/105" },
  ],
  primaryCta: {
    label: "SEE ALL",
    href: "/growth-club",
  },
  secondaryCta: {
    label: "GET A PROFILE",
    href: "/brands",
  },
};
