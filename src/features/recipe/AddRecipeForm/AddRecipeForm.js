import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeAdded } from "../recipeSlice";
import "./recipeForm.sass";

import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [content, setContent] = useState("");
  const [inputfields, setInputFields] = useState([
    {
      name: "",
      measure: "",
    },
  ]);

  const handleChange = (event, index) => {
    let values = [...inputfields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setInputFields([
      ...inputfields,
      {
        name: "",
        measure: "",
      },
    ]);
  };

  console.log(inputfields.length);
  const onSaveRecipeClick = () => {
    if (
      name &&
      source &&
      prepTime &&
      content &&
      inputfields.name !== "" &&
      inputfields.measure !== ""
    ) {
      dispatch(
        recipeAdded(name, source, prepTime, content, inputfields.slice(-1))
      );
      setInputFields([{ name: "", measure: "" }]);
      setName("");
      setSource("");
      setPrepTime("");
      setContent("");
      navigate("/");
    }
  };
  return (
    <section className="container">
      <h1>Submit a New Recipe Form</h1>
      <form className="form">
        <label htmlFor="recipeName">Recipe Title</label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="source">Source</label>
        <input
          type="text"
          id="source"
          name="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        {inputfields.map((item, index) => (
          <div key={index} className="ingredients">
            <label htmlFor="name">Ingredient </label>
            <input
              list="pos-name"
              name="name"
              type="text"
              value={item.name}
              onChange={(event) => handleChange(event, index)}
            />
            <datalist id="pos-name">
              <option value="Flour" />
              <option value="Milk" />
              <option value="Oli" />
              <option value="Salt" />
              <option value="Sugar" />
              <option value="Eggs" />
              <option value="Tomatoes" />
              <option value="Cheese" />
              <option value="Potatoes" />
              <option value="Chicken Meat" />
            </datalist>
            <label htmlFor="measure" className="value">
              Value
            </label>
            <input
              name="measure"
              type="number"
              value={item.measure}
              onChange={(event) => handleChange(event, index)}
            />
            <button onClick={handleAdd}>+</button>
          </div>
        ))}
        <label htmlFor="prepTime">Preperation Time (HHmm)</label>
        <input
          type="text"
          id="prepTime"
          name="prepTime"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
        />
        <label htmlFor="content">Instruction:</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" className="button" onClick={onSaveRecipeClick}>
          Save Recipe
        </button>
      </form>
    </section>
  );
};

export default AddRecipeForm;
