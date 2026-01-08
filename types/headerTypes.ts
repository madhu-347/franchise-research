
export interface HeaderSubItem {
  label: string;
  href: string;
  icon?: string;
}

export interface HeaderNavItem {
  label: string;
  href?: string;
  children?: HeaderSubItem[];
}