import React from 'react';

const RecipeCard = props => {
  const { name, ingredients, onEdit, onDelete, recipeId } = props;
  return (
    <div className="recipe-card animated bounceIn">
      <h1 className="recipe-card-title">{name}</h1>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => {
          return <li className="ingredient-item" key={ingredient}>{ingredient}</li>
          })}
      </ul>
      <div className="card-footer">
        <a href="#Edit"> <button className="btn btn-edit" onClick={onEdit} name={recipeId}>Edit</button></a>
        <button className="btn btn-delete" onClick={onDelete} name={recipeId}>Delete</button>
      </div>
    </div>
  );
}



export default RecipeCard;
