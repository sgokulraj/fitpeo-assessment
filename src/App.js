import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Box from './Components/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BsSearch, BsEmojiSunglasses } from "react-icons/bs"
import Products from './Components/Products';
import { products } from "./Components/data"
import Charts from './Components/Charts';
import { useState, useReducer } from 'react';


function App() {
  return (
    <div>
      <Sidebar />
      <section className="home">
        <div className="text">
          <p className='fs-5 fw-bold'>Hello Evano <BsEmojiSunglasses style={{ backgroundColor: "gold", borderRadius: "50%", marginTop:"-3px"}} />,</p>
          <div className='searchBox'>
            <BsSearch className="searchIcon" />
            <input type="search" id="gsearch" name="gsearch" placeholder='Search' />
          </div>
        </div>
        <Box />
        <Charts />
        <Products />
      </section>
    </div>

  );
}

export default App;
