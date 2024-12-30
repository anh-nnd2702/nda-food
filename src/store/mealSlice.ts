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

export const getListMealAsync = createAsyncThunk(
  "meal/getListMeal",
  async (filterParams: MealParamType) => {
    const res = await getMealByFilter({
      filterType: filterParams.filterType,
      category: filterParams.category,
      area: filterParams.area,
      ingredient: filterParams.ingredient,
    });
    return res;
  }
);

const MealSlice = createSlice({
  name: "meal",
  initialState: initialState,
  reducers: {
    setParams: (state, action) => {
      state.filters = { ...action.payload };
    },
    resetParams: (state, action) => {
      state.filters = { ...initialState.filters };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListMealAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getListMealAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload.meals;
        state.error = "";
      })
      .addCase(getListMealAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

const { actions, reducer } = MealSlice;
export const { setParams, resetParams } = actions;
export default MealSlice;
