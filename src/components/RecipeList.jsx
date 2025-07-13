import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({recipe}) => {
  return (
    <div className="recipe-list">
        {
            recipe.map((recipes) => (
                <RecipeCard key={recipes.id} recipe ={recipes} />
            ))
        }
    </div>
  )
}

export default RecipeList