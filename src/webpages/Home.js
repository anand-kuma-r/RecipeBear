import React from "react";
import RecipeTile from "../components/RecipeTile";
import "./Home.css";


const src = "http://www.101cookbooks.com/mt-static/images/food/moroccan_carrot_salad_recipe.jpg"
const alt = "morrocan carrot salad" 
const ingredients = "Dressing \n1 tablespoon cumin seeds \n1/3 cup / 80 ml extra virgin olive oil\n2 tablespoons fresh lemon juice\n1 tablespoon honey\n1/2 teaspoon fine sea salt, plus more to taste\n1/8 teaspoon cayenne pepper\n10 ounces carrots, shredded on a box grater or sliced whisper thin on a mandolin\n2 cups cooked chickpeas (or one 15- ounce can, drained and rinsed)\n2/3 cup / 100 g  dried pluots, plums, or dates cut into chickpea-sized pieces\n1/3 cup / 30 g fresh mint, torn\nFor serving: lots of toasted almond slices, dried or fresh rose petals - all optional (but great additions!)";
const link = "http://www.101cookbooks.com/archives/moroccan-carrot-and-chickpea-salad-recipe.html";
function Home ({}) {

    return(
        <div className="home-wrapper">
            <RecipeTile imgUrl={src} title={alt} description={ingredients} link={link} />
            <RecipeTile imgUrl={src} title={alt} description={ingredients} link={link} />
        </div>
    );
}

export default Home;