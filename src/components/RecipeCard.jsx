import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = ({recipe}) => {

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt="" />
        <h1>{recipe.title}</h1>
        <Link  to={`/recipe/${recipe.id}`} className='view-recipe' > View Recipe </Link>
    </div>
  )
}

export default RecipeCard