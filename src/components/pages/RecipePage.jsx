import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const RecipePage = ({recipes}) => {
  const {id} =  useParams()
    const recipe = recipes.find(r => r.id.toString() === id);
 return (
  <>
  <div className="title-div">
       <h2>{recipe.title}(Total Time : {recipe.time} , Servings : {recipe.serving})</h2>
       <h4><Link to="/" className='back-home'>← Back to Home</Link></h4>

  </div>

    <div className='recipe-page'>
      <div className="ingredients">
      <h2>Ingredients</h2>
      <ol>
        {recipe.ingredients?.map((ing, i) => (
          <li key={i}>{ing.products}</li>
        ))}
      </ol>
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
      <ol>
        {recipe.instructions?.map((ings, i) => (
          <li key={i}>{ings.do}</li>
        ))}
      </ol>
      </div>
    </div>
    </>
  );
}

export default RecipePage