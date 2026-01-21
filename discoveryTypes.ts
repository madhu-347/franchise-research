export interface DiscoveryAction {
  label: string;
  href: string;
}

export interface DiscoveryIntroData {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface RangeFilter {
  min: number;
  max: number;
}
