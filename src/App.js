
import './App.css';
import { useState, useEffect } from 'react';
import video from './video_food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "fecd55d5";
  const MY_KEY = "8faab61e426bce5091caa9b1945d2fcf";

  const [mySearch,setMySearch] = useState ('');
  const [myRecipes,setMyRecipes] = useState ([]);
  const [wordSubmitted,setWordSubmitted] = useState('');


useEffect(()=> {
  const findRecipe = async() => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }
  findRecipe();
},[wordSubmitted]);

const myRecipeSearch = (e) => {
setMySearch(e.target.value);
}

const finalSearch = (e) =>{
  e.preventDefault();
  setWordSubmitted(mySearch);
}


  return (
    <div className="App">

      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>
        <form onSubmit={finalSearch}>
          <button className='btn'>
            <img src = "https://img.icons8.com/pastel-glyph/512/refresh-love--v2.png" className='icons' alt="icon"/>
          </button>
         </form>
      </div>
      <div className='container'>
        <div className='base'>
        {myRecipes.map(element =>(
          <MyRecipesComponent
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          weight={element.recipe.totalWeight}
          ingredients={element.recipe.ingredientLines}
          digestFat={element.recipe.digest[0].total}
          digestCarb={element.recipe.digest[1].total}
          digestProt={element.recipe.digest[2].total}
          link={element.recipe.shareAs}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
