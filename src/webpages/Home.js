import React from "react";
import RecipeTile from "../components/RecipeTile";
import { useState, useEffect } from 'react';
import $ from 'jquery';
import RecipeGrid from '../components/RecipeGrid';
import "./Home.css";


function Home ({}) {
    const [data, setData] = useState(null);
    const [mealTypes, setMealTypes] = useState({
      dessert: false,
      breakfast: false,
      lunch: false,
      dinner: false
    });
    
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then(response => response.json())
      .then(data => {
        const recipes = data.map(recipe => ({
          key: recipe._id,
          imgUrl: recipe.image,
          title: recipe.name,
          ingredients: recipe.ingredients,
          link: recipe.url
        }));
        setData(recipes);
      });
  }, []);
    return(
        <div className="home-wrapper">
          <div className="recipe-tiles-container">
            {data ? <RecipeGrid recipes={data} /> : 'Loading...'}
          </div>
          <div className="my-fridge-container">
          
          </div>
        </div>
    );
}




export default Home;


