import React, { useState, useContext } from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import LegoImage from '../images/LegoImage.jpg';
import City1 from '../images/City1.jpg';
import City2 from '../images/City2.jpg';
import City3 from '../images/City3.jpg';
import City4 from '../images/City4.jpg';
import City5 from '../images/City5.jpeg';
import Other1 from '../images/other1.jpg';
import Other2 from '../images/other2.jpg';
import Star2 from '../images/StarWars2.jpg';
import Star3 from '../images/StarWars3.jpg';
import Star4 from '../images/StarWars4.jpg';
import Star5 from '../images/StarWars5.jpg';
import Star6 from '../images/StarWars6.jpg';
import Super1 from '../images/Superheros1.jpg';
import Super2 from '../images/Superheros2.jpg';
import Super3 from '../images/Superheros3.jpg';
import Super4 from '../images/Superheros4.jpg';
import Super5 from '../images/Superheros5.jpg';
import { PostPreview } from './post';
import {Globals} from '../App.js'

const POSTS = [
  {
    image: 0,
    title: "Space ship",
    price: 25,
    description: "Elon Musk is saving the planet",
    theme: "City",
    numPieces: 200,
    setNumber: 34534,
    condition: "New",
    user: "Jeff Hogan",
    location: "New Hampshire"
  },
  {
    image: 7,
    title: "Mando Bando",
    price: 50,
    description: "Just like on TV",
    theme: "Star Wars",
    numPieces: 333,
    setNumber: 1002340,
    condition: "Old",
    user: "John jacobs",
    location: "California",
  },
  {
    image: 8,
    title: "bad guy set",
    price: 99,
    description: "oouuuuu scary",
    theme: "Star Wars",
    numPieces: 120,
    setNumber: 1002340,
    condition: "Old",
    user: "Jeffy Poo",
    location: "Texas"
  },
  {
  image: 9,
    title: "Luke Skywalker",
    price: 25,
    description: "BEEP BOOP IM A SHEEP",
    theme: "Star Wars",
    numPieces: 200,
    setNumber: 34534,
    condition: "New",
    user: "Bob Fryer",
    location: "Utah"
  },
  {
    image: 10,
    title: "Scary Ship",
    price: 500,
    description: "BUY ME NOW",
    theme: "Star Wars",
    numPieces: 3330,
    setNumber: 100234,
    condition: "New",
    user: "Bob Fryer",
    location: "Utah"
  },
  {
    image: 12,
    title: "Captain Captain",
    price: 25,
    description: "Come save the day",
    theme: "Superheros",
    numPieces: 200,
    setNumber: 34534,
    condition: "New",
    user: "Bob Fryer",
    location: "Utah"
  },
  {
    image: 13,
    title: "Ultron set",
    price: 50,
    description: "Great movie, better LEGOS",
    theme: "Superheros",
    numPieces: 333,
    setNumber: 1002340,
    condition: "Old",
    user: "John jacobs",
    location: "California"
  },
  {
    image: 14,
    title: "Spoderman",
    price: 99,
    description: "With great power comes great responsiblity",
    theme: "Superheros",
    numPieces: 120,
    setNumber: 1002340,
    condition: "Used",
    user: "Jeffy Poo",
    location: "Texas"
  },
  {
  image: 15,
    title: "Water guy",
    price: 25,
    description: "Buy this be a hero",
    theme: "Superheros",
    numPieces: 200,
    setNumber: 34534,
    condition: "New",
    user: "Jeff Hogan",
    location: "New Hampshire"
  },
    {
        image: 1,
        title: "LEGO CITY",
        price: 25,
        description: "come buy this lego set of a family serving up dogs",
        theme: "City",
        numPieces: 200,
        setNumber: 34534,
        condition: "New",
        user: "Jeff Hogan",
        location: "New Hampshire"
      },
      {
        image: 2,
        title: "Barn Time",
        price: 50,
        description: "I like fish and chips",
        theme: "City",
        numPieces: 333,
        setNumber: 1002340,
        condition: "Old",
        user: "John jacobs",
        location: "California"
      },
      {
        image: 3,
        title: "Food Truck",
        price: 99,
        description: "i eat dinosaurs",
        theme: "City",
        numPieces: 120,
        setNumber: 1002340,
        condition: "Old",
        user: "Jeffy Poo",
        location: "Texas"
      },
      {
      image: 4,
        title: "Big Building",
        price: 25,
        description: "I like New York",
        theme: "City",
        numPieces: 200,
        setNumber: 34534,
        condition: "New",
        user: "Jeff Hogan",
        location: "New Hampshire"
      },
      {
        image: 5,
        title: "Creeper",
        price: 500,
        description: "I like mines",
        theme: "Other",
        numPieces: 3330,
        setNumber: 100234,
        condition: "New",
        user: "John Cena",
        location: "Maine"
      },
      {
        image: 6,
        title: "Little Fox",
        price: 5,
        description: "Take it off my hands please",
        theme: "Other",
        numPieces: 12,
        setNumber: 100240,
        condition: "Old",
        user: "harold",
        location: "Texas"
      }
    ]
let foundPosts = [];
function SearchBar({}){
    const navigate = useNavigate();
    const { searchInput, setSearchInput} = useContext(Globals);
    const {filterData} = useContext(Globals);
    const handleSearch = (input) => {
    navigate('/searchPage');
      let word = ""
      let words = [];
      foundPosts = [];
      if(searchInput.length === 0){
        for(let i=0; i<POSTS.length; i++){
          if((filterData.theme === "All Themes" || filterData.theme === POSTS[i].theme) && (filterData.condition === "Any Condition" || filterData.condition === POSTS[i].condition) 
        && (filterData.location === "Any Location" || filterData.location === POSTS[i].location) && (filterData.minPieces <= POSTS[i].numPieces && filterData.maxPieces >= POSTS[i].numPieces)){
          foundPosts.push(POSTS[i]);
        }
        }
      }
      for (let i = 0; i < searchInput.length; i++){
        if(searchInput[i] === ' ' || i === searchInput.length - 1){
          words.push(word);
          word = "";
        }
        else{
          word = word + searchInput[i];
        }
      }
      for(let i=0; i<POSTS.length; i++){
        if((filterData.theme === "All Themes" || filterData.theme === POSTS[i].theme) && (filterData.condition === "Any Condition" || filterData.condition === POSTS[i].condition) 
        && (filterData.location === "Any Location" || filterData.location === POSTS[i].location) && (filterData.minPieces <= POSTS[i].numPieces && filterData.maxPieces >= POSTS[i].numPieces)){
        for(let j=0; j<words.length; j++){
        word = words[j];
        if(POSTS[i].title.includes(word) || POSTS[i].description.includes(word)){
          //test filters
          foundPosts.push(POSTS[i]);
        }
      }
      }
      }
      setSearchInput("");
      input.preventDefault();
    };

    
  function navigateToFilters(){
    navigate('../filters');
  }
    return(
      <div class="wrapper">
            <input
              className="search"
              type="text"
              placeholder="Search for legos"
              aria-label="Search"
              value={searchInput}
              onChange={(event) => {
              setSearchInput(event.target.value)
              }}
            />
            <div class="input-group-append">
            <button class="btn btn-success" onClick={handleSearch}>Search</button>
            </div>
            <div class="input-group-append">
            <Button onClick={navigateToFilters}>Filters</Button>
            </div>
      </div>
    )
  }
  function SearchPage({searchInput}){
    const navigate = useNavigate();
      return(
        <>
        <SearchBar></SearchBar>
        <div>
            {foundPosts.length > 0 ? (foundPosts.map((post) => (
                <ul>
                <li key={post}>
                <span>
                    <div className="post-container">
                    <PostPreview thisPost={post}></PostPreview>
                    </div>
                </span>
            </li>
            </ul>
            ))
            ) : (
                <h1 className="header-b">No Posts Found</h1>
            )}
        </div>
        </>
      );
  }

export {SearchPage, SearchBar};