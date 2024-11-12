import { configureStore } from "@reduxjs/toolkit";
import MealSlice from "./mealSlice";

export const store = configureStore({
  reducer: {
    meal: MealSlice.reducer,
  },
});
