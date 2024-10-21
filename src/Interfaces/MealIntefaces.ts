export interface MealParamType {
  filterType: "category" | "area" | "ingredient";
  category?: string;
  area?: string;
  ingredient?: string;
}

export interface MealSearchParamType {
  isFirstLetter: boolean;
  searchKey: string;
}
