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


function Navbar ({}){
    return (
        <nav className='nav-container'>
            <div className='left-buttons'>
                <Link to="/">
                        <button  className='logo-button'>
                            <img src={HomeLogo}/>
                        </button>
                </Link>
            </div>
            <div className='right-buttons'>
                <IconButton><SearchIcon/></IconButton>
                <input type="text" id="search-input" placeholder="Search..."/>
                <button className='dessert-button'>Dessert</button>
                <button className='breakfast-button'>Breakfast</button>
                <button className='lunch-button'>Lunch</button>
                <button className='dinner-button'>Dinner</button>

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