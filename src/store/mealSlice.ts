import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MealParamType } from "Interfaces/MealIntefaces";
import { MealType } from "pages/homePage/HomePage";
import { getMealByFilter } from "services/mealService";

type MealStateType = {
  meals: MealType[];
  loading: boolean;
  filters: MealParamType;
};
const initialState = {
  meals: [],
  loading: true,
  filters: {},
  error: "" as any,
};

const getListMealAsync = createAsyncThunk(
  "meal/getListMeal",
  async (filterParams: MealParamType) => {
    const res = await getMealByFilter({
      filterType: filterParams.filterType,
      category: filterParams.category,
      area: filterParams.area,
      ingredient: filterParams.ingredient,
    })
      .then((res) => {
        return res.meals;
      })
      .catch((error) => {
        return error.message || "Failed to fetch meals";
      });
    return res;
  }
);

const MealSlice = createSlice({
  name: "meal",
  initialState: initialState,
  reducers: {
    setParams: (state, action) => {
      state = { ...state, filters: { ...action.payload } };
    },
    resetParams: (state, action) => {
      state = { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListMealAsync.pending, (state, action) => {
        state = { ...state, loading: true, error: "" };
      })
      .addCase(getListMealAsync.fulfilled, (state, action) => {
        state = { ...state, loading: false, meals: action.payload, error: "" };
      })
      .addCase(getListMealAsync.rejected, (state, action) => {
        state = { ...state, loading: false, error: action.payload };
      });
  },
});

export default MealSlice;
