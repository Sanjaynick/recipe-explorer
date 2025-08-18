import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Navbar from './components/header/Navbar'
import Home from './components/pages/Home'
import RecipePage from './components/pages/RecipePage';
import MockRecipes from './mockRecipes.json'
import Footer from './components/Footer';
import '../public/assets/chicken_rice.jpeg'

function App() {

       const recipeApi = MockRecipes
       
  const [recipess, setRecipes] = useState(recipeApi.recipes);

  return (
    <>
    <Router>
        <Navbar />
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/recipe/:id' element={<RecipePage recipes={recipess} />} />
    </Routes>
        <Footer />
    
    </Router>

   
    </>
  )
}

export default App
