import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import IconButton from '@mui/material/IconButton';
import HomeLogo from '../images/RecipeBearLogo.png';
import ImageIcon from '@mui/icons-material/Image';
import SearchIcon from '@mui/icons-material/Search';
import SortButton from './Sort';
 
const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];


function Navbar ({onSearch, onSearchClick, onDessertClick, onBreakfastClick, onLunchClick, onDinnerClick}){
    const [query, setQuery] = useState('');
    const [dessertActive, setDessertActive] = useState(false);
    const [breakfastActive, setBreakfastActive] = useState(false);
    const [lunchActive, setLunchActive] = useState(false);
    const [dinnerActive, setDinnerActive] = useState(false);
    const handleInputChange = (event) => {
      setQuery(event.target.value);
      onSearch(event.target.value);
    }
    const handleSearchClick = () => {
        onSearchClick(true);
        onDessertClick(false);
        onBreakfastClick(false);
        onLunchClick(false);
        onDinnerClick(false);

        setDessertActive(false);
        setBreakfastActive(false);
        setLunchActive(false)
        setDinnerActive(false)
    }
    const handleDessertClick = () => {
      onDessertClick(!dessertActive);
      onBreakfastClick(false);
      onLunchClick(false);
      onDinnerClick(false);
      setQuery('');
      onSearch('');
      setDessertActive(!dessertActive);
      setBreakfastActive(false);
      setLunchActive(false);
      setDinnerActive(false);
      
    }
    const handleBreakfastClick = () => {
        onBreakfastClick(!breakfastActive);
        onLunchClick(false);
        onDinnerClick(false);
        onDessertClick(false);
        setQuery('');
        onSearch('');
        setDessertActive(false);
        setBreakfastActive(!breakfastActive);
        setLunchActive(false);
        setDinnerActive(false);
    }
    const handleLunchClick = () => {
        onLunchClick(!lunchActive);
        onDinnerClick(false);
        onDessertClick(false);
        onBreakfastClick(false);
        setQuery('');
        onSearch('');
        setDessertActive(false);
        setBreakfastActive(false);
        setLunchActive(!lunchActive);
        setDinnerActive(false);
    }
    const handleDinnerClick = () => {
        onDinnerClick(!dinnerActive);
        onDessertClick(false);
        onBreakfastClick(false);
        onLunchClick(false);
        setQuery('');
        onSearch('');
        setDessertActive(false);
        setBreakfastActive(false);
        setLunchActive(false);
        setDinnerActive(!dinnerActive);
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
          handleSearchClick();
        }
      };
    const handleFocusChange = () => {
        onLunchClick(false);//this is for what is passed to home.js
        onDinnerClick(false);
        onDessertClick(false);
        onBreakfastClick(false);

        setDessertActive(false);//active is for display
        setBreakfastActive(false);// basically what this is for is for unselecting a quick search option before 
        setLunchActive(false); // searching using the search bar
        setDinnerActive(false);
    };
    return (
      <nav className='nav-container'>
        <div className='left-buttons'>
          <Link to="/">
            <button className='logo-button'>
              <img src={HomeLogo}/>
            </button>
          </Link>
        </div>
        <div className='right-buttons'>
          <IconButton onClick={handleSearchClick}><SearchIcon/></IconButton>
          <input type="text" id="search-input" placeholder="Search..." value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={handleFocusChange}/>
          <button className={`dessert-button ${dessertActive ? 'dessert-button-active' : ''}`}  onClick={handleDessertClick} onKeyDown={handleKeyDown}>Dessert</button>
          <button className={`breakfast-button ${breakfastActive ? 'breakfast-button-active' : ''}`} onClick={handleBreakfastClick} onKeyDown={handleKeyDown}>Breakfast</button>
          <button className={`lunch-button ${lunchActive ? 'lunch-button-active' : ''}`} onClick={handleLunchClick} onKeyDown={handleKeyDown}>Lunch</button>
          <button className={`dinner-button ${dinnerActive ? 'dinner-button-active' : ''}`} onClick={handleDinnerClick} onKeyDown={handleKeyDown}>Dinner</button>
        </div>
        <div className='sort'>
          <SortButton/>
        </div>
        <div className='login-buttons'>
          <Link to="/login">
            <button className='login-button'>Log In</button>
          </Link>
          <Link to="/signup">
            <button className='signup-button'>Sign Up</button>
          </Link>
        </div>
      </nav>
    );
  }
export default Navbar;