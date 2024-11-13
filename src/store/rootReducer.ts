import { combineReducers } from "@reduxjs/toolkit";
import MealSlice from "./mealSlice";
const rootReducer = combineReducers({
  meal: MealSlice.reducer,
});

export default rootReducer;
