import React from "react";
import { useSelector } from "react-redux";
import { selectAllRecipes } from "../recipeSlice";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = () => {
  const recipes = useSelector(selectAllRecipes);

  const orededRecipes = recipes
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderRecipes = orededRecipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <section>
      <div className="row gap-2 justify-center">{renderRecipes}</div>
    </section>
  );
};

export default RecipeList;
