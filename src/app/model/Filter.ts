export interface Filter {
  name: string;
  completed: boolean;
  subFilters?: Filter[];
}
