import RecipeTile from "./RecipeTile";


function RecipeGrid({ recipes }) {
    const recipeTiles = recipes.map((recipe, index) => (
      <RecipeTile
        key={index}
        id={recipe._id}
        imgUrl={recipe.imgUrl}
        title={recipe.title}
        ingredients={recipe.ingredients}
        link={recipe.link}
      />
    ));
  
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem", marginLeft:"1rem" }}>
        {recipeTiles}
      </div>
    );
  }

export default RecipeGrid;