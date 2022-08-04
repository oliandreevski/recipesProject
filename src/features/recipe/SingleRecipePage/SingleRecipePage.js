import React, { useState } from "react";
import { useRef } from "react";

import { useNavigate, useParams } from "react-router-dom";
import FormatDuration from "../FormatDuration";
import TimeAgo from "../TimeAgo";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectRecipeById, deleteSingleReicpe } from "../recipeSlice";
import "./singleRecipePage.sass";
import Dialog from "../../../components/Dialog/Dialog";

const DetailsPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const recipe = useSelector((state) => selectRecipeById(state, id));
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState({ message: "", isLoading: false });
  const idProductRef = useRef;

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };

  const deleteRecipe = (id) => {
    handleDialog("Are yousure you want to delete this recipe?", true);
    idProductRef.current = id;
  };

  const areYouSureDelete = (choose) => {
    if (choose) {
      dispatch(deleteSingleReicpe(id));
      navigate("/");
    } else {
      handleDialog("", false);
    }
  };

  if (!recipe) {
    return (
      <section>
        <h2>Recipe Not Found</h2>
      </section>
    );
  }
  return (
    <div className="row">
      <div className="col-12-xs col-8-md col-6-xl">
        <p>{recipe.id}</p>
        <h2>{recipe.name}</h2>
        <p>{recipe.source}</p>
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          {recipe.inputfields.map((ingredient) => (
            <tbody key={ingredient.name}>
              <tr>
                <td>{ingredient.name}</td>
                <td>{ingredient.measure}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <FormatDuration val={recipe.prepTime} />
        <div>
          <button className="deleteButton" onClick={deleteRecipe}>
            Delete Recipe
          </button>
          <TimeAgo timestamp={recipe.date} />
        </div>
      </div>
      <div className="col-12-xs col-8-md col-6-xl">
        <h4>Instructions</h4>
        <p className="content">{recipe.content}</p>
      </div>
      {dialog.isLoading && (
        <Dialog onDialog={areYouSureDelete} message={dialog.message} />
      )}
    </div>
  );
};

export default DetailsPage;
