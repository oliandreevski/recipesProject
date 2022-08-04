import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
