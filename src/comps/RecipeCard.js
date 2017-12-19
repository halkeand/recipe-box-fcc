import React from 'react';

const RecipeCard = props => {
  return (
    <div className="recipe-card">
      <h1>{props.name}</h1>
      <ul className="ingredient-list">
        {props.ingredients.map(ingredient => {
          return <li className="ingredient-item" key={ingredient}>{ingredient}</li>
          })}
      </ul>
      <button onClick={props.onEdit} name={props.recipeId}>Edit</button>
      <button onClick={props.onDelete} name={props.recipeId}>Delete</button>
    </div>
  );
}



export default RecipeCard;
