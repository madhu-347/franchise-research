export type TrendingVariant = "trending" | "latest" | "hot";

export interface TrendingItem {
  id: string;
  label: string;
  text: string;
  variant: TrendingVariant;
}
