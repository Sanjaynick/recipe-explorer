 import React from 'react'
 import { useState,useEffect } from 'react';
import SearchBar from '../SearchBar'
import Recipes from '../../mockRecipes.json'
import RecipeList from '../RecipeList';
 
 const Home = () => {

     const recipeApi = Recipes
       
  const [recipess, setRecipes] = useState(Recipes.recipes);
  const [searchTerms, setSearchTerms] = useState('')

  const handleSearch = (query) => {
    setSearchTerms(query.toLowerCase())
    const filtered = recipeApi.recipes.filter(recipes => {
     return recipes.title.toLowerCase().includes(query.toLowerCase())
    })
    setRecipes(filtered)
  }

   return (
    <>
    <section className="section-1">
        <div className="section-1-div-1">
            <h1 className="section-1-h1">Welcome to Tasty Recipe</h1>
             <SearchBar onSearch={handleSearch}  />
        </div>
    </section>
    <section className="section-2">
        <div className="section-2-div">
      <RecipeList recipe = {recipess}/>
        </div>
      </section>
    </>
   )
 }
 
 export default Home