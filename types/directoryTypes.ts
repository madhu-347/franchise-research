export interface FranchiseItem {
  id: number;
  brandName: string;
  industry: string;
  units: number;
  minInvestment: number;
  maxInvestment: number;
  cashRequired: number;
  logo: string;
}

export interface DirectoryFiltersState {
  search: string;
  industry: string;
  minInvestment: number;
  maxInvestment: number;
}