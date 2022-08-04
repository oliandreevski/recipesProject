import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.sass";
import About from "./pages/About";
import AddRecipeForm from "./features/recipe/AddRecipeForm/AddRecipeForm";
import SingleRecipePage from "./features/recipe/SingleRecipePage/SingleRecipePage";
import RecipeList from "./features/recipe/RecipeList/RecipeList";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RecipeList />} />
        <Route path="recipe">
          <Route index element={<AddRecipeForm />} />
          <Route path=":id" element={<SingleRecipePage />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
