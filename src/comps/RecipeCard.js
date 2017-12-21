import React from 'react';

const RecipeCard = props => {
  const { name, ingredients, onEdit, onDelete, recipeId } = props;
  return (
    <div className="recipe-card">
      <h1 className="recipe-card-title">{name}</h1>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => {
          return <li className="ingredient-item" key={ingredient}>{ingredient}</li>
          })}
      </ul>
      <button className="btn" onClick={onEdit} name={recipeId}>Edit</button>
      <button className="btn" onClick={onDelete} name={recipeId}>Delete</button>
    </div>
  );
}



export default RecipeCard;
