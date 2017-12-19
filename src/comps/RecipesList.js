import React from 'react';
import RecipeCard from './RecipeCard';

const RecipesList = props => {
  return (
    <section className="recipes-list">
      {
        props.recipesList.map(recipe => {
          return (
            <RecipeCard
              onEdit={props.onEdit}
              onDelete= {props.onDelete}
              key={recipe.id}
              recipeId={recipe.id}
              name={recipe.nameValue}
              ingredients={recipe.ingredientsArr}
            />
          )})
      }
    </section>
  )
}

export default RecipesList
