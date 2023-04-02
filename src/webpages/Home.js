import React from "react";
import RecipeTile from "../components/RecipeTile";
import { useState, useEffect } from 'react';
import $ from 'jquery';
import RecipeGrid from '../components/RecipeGrid';
import "./Home.css";


function Home ({searchQuery, searchClicked, dessertClicked, breakfastClicked, lunchClicked, dinnerClicked}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let url;
     if (searchQuery.length > 0) {
      url = `http://localhost:3000/recipes/search/${searchQuery}`;
    }
    if (dessertClicked === true && searchQuery.length == 0) {
      url = 'http://localhost:3000/recipes/dessert';
    }
    if (breakfastClicked === true && searchQuery.length == 0) {
      url = 'http://localhost:3000/recipes/breakfast';
    }
    if (lunchClicked === true && searchQuery.length == 0) {
      url = 'http://localhost:3000/recipes/lunch';
    } 
    if (dinnerClicked === true) {
      url = 'http://localhost:3000/recipes/dinner';
    } if(searchQuery.length == 0 && dessertClicked === false && breakfastClicked === false && lunchClicked === false && dinnerClicked === false) {
      url = 'http://localhost:3000/recipes';
    }
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const recipes = data.map(recipe => ({
          key: recipe._id,
          id: recipe._id,
          imgUrl: recipe.image,
          title: recipe.name,
          ingredients: recipe.ingredients,
          link: recipe.url
        }));
        setData(recipes);
        if (searchClicked === true) {
          searchClicked(false);
        }
      });
  }, [dessertClicked, breakfastClicked, lunchClicked, dinnerClicked, searchQuery]);
  return (
    <div className="home-wrapper">
      <div className="recipe-tiles-container">
        {data ? <RecipeGrid recipes={data} /> : 'Loading...'}
      </div>
      <div className="my-fridge-container">
        <p>Search query: {searchQuery}</p>
        <p>Dessert clicked: {dessertClicked.toString()}</p>
        <p>Breakfast clicked: {breakfastClicked.toString()}</p>
        <p>Lunch clicked: {lunchClicked.toString()}</p>
        <p>Dinner clicked: {dinnerClicked.toString()}</p>
      </div>
    </div>
  );
}



export default Home;


