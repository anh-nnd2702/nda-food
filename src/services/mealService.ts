import { makeGet } from "./apiService";
import { MealParamType, MealSearchParamType } from "Interfaces/MealIntefaces";
const MEAL_FILTERS = {
  category: "c",
  area: "a",
  ingredient: "i",
};

export const getMealByFilter = async (params: MealParamType) => {
  const { filterType, category, area, ingredient } = params;
  const filterValue = category ? category : area ? area : ingredient;
  const result = await makeGet("/filter.php", {
    [MEAL_FILTERS[filterType]]: filterValue,
  });
  return result.data;
};

export const getMealBySearchKey = async (params: MealSearchParamType) => {
  const { isFirstLetter, searchKey } = params;
  const searchType = isFirstLetter ? "f" : "s";
  const result = await makeGet("/search.php", {
    [searchType]: searchKey,
  });
  return result.data;
};

export const getListCategory = async () => {
  const result = await makeGet("/list.php", {
    c: "list",
  });
  return result.data;
};

export const getListArea = async () => {
  const result = await makeGet("/list.php", {
    a: "list",
  });
  return result.data;
};

export const getListIngredient = async () => {
  const result = await makeGet("/list.php", {
    i: "list",
  });
  return result.data;
};
