import React from "react";
import TimeAgo from "../TimeAgo";
import FormatDuration from "../FormatDuration";
import { Link } from "react-router-dom";
import "../../../components/Layout/layout.sass";
import "./recipeCard.sass";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="col-12-xs col-6-md col-4-xl">
      <div className="card card2">
        <div className="image-box">
          <img src={`./icons/${recipe.imageName}.jpg`} alt={recipe.imageName} />
        </div>
        <div className="card-info">
          <Link to={`recipe/${recipe.id}`}>
            <h3 className="recipe-name">{recipe.name.toUpperCase()}</h3>
          </Link>
          <div className="card-info-2">
            <span>Ingredients: {recipe.inputfields.length}</span>
            {" | "}
            <FormatDuration val={recipe.prepTime} />
          </div>
          <span className="content-1">
            Instructions: {recipe.content.substring(0, 75)}...
          </span>
          <TimeAgo timestamp={recipe.date} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
