function MyRecipesComponent ({label, image, calories,weight, ingredients, digestFat, digestCarb, digestProt }) {

  return (
    <div>
      <div className="container name">
        <h2>{label}</h2>
      </div>
      <div className="container">
        <img className="photoFood" src={image} alt="im"/>
      </div>
      <div className="container">
        <p>{calories.toFixed()} calories</p>
      </div>
      <div className="container">
        <p>{weight.toFixed()} g</p>
      </div>
      <div className="container">
        <ul className="list">
           {ingredients.map(ingredient => (
            <li>{ingredient}</li>
        ))}
      </ul>
      </div>
      <div className="container">
        <p>Fat: {digestFat.toFixed()} g</p>
      </div>
      <div className="container">
        <p>Carbs: {digestCarb.toFixed()} g</p>
      </div>
      <div className="container">
        <p>Protein: {digestProt.toFixed()} g</p>
      </div>
    </div>
  )
}

export default MyRecipesComponent;
