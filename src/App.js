import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './webpages/Home';
import React, { useState } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [dessertClicked, setDessertClicked] = useState(false);
  const [breakfastClicked, setBreakfastClicked] = useState(false);
  const [lunchClicked, setLunchClicked] = useState(false);
  const [dinnerClicked, setDinnerClicked] = useState(false);
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  const handleSearchClick = (bool) => {
    setSearchClicked(bool);
  }
  const handleDessertClick = (bool) => {
    setDessertClicked(bool);
  }
  const handleBreakfastClick = (bool) => {
    setBreakfastClicked(bool);
  }
  const handleLunchClick = (bool) => {
    setLunchClicked(bool);
  }
  const handleDinnerClick = (bool) => {
    setDinnerClicked(bool);
  }
  return (
    <BrowserRouter>
      <Navbar onSearch={handleSearch} 
      onSearchClick={handleSearchClick}
      onDessertClick={handleDessertClick}
      onBreakfastClick={handleBreakfastClick}
      onLunchClick={handleLunchClick}
      onDinnerClick={handleDinnerClick}
      />
      <Home searchQuery={searchQuery} 
      searchClicked={searchClicked}
      dessertClicked={dessertClicked}
      breakfastClicked={breakfastClicked}
      lunchClicked={lunchClicked}
      dinnerClicked={dinnerClicked}
      />
    </BrowserRouter>
  );
}

export default App;
