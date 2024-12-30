import { configureStore } from "@reduxjs/toolkit";
import MealReducer from "./mealSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
