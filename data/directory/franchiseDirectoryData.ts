import { FranchiseItem } from "@/types/directoryTypes";

export const franchiseDirectoryData: FranchiseItem[] = [
  ...Array.from({ length: 40 }).map((_, i) => ({
    id: i + 1,
    brandName: `Franchise Brand ${i + 1}`,
    industry: ["Consumer Brands", "Services", "Food & Beverage", "Health & Fitness"][i % 4],
    units: 50 + i * 10,
    minInvestment: 10000 + i * 5000,
    maxInvestment: 100000 + i * 10000,
    cashRequired: 5000 + i * 2000,
    logo: "/images/default.png",
  })),
];
