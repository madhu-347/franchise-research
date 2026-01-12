export interface RankingsGridItem {
  id: string;
  title: string;
  image: string;
  tag: string; // BUY, GROW, FEATURE, etc.
}

export interface RankingListItem {
  rank: number;
  brandName: string;
  link: string;
}

export interface RankingWidget {
  title: string;
  subtitle?: string;
  items: RankingListItem[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}
