import React, { useState, useContext } from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import LegoImage from '../images/LegoImage.jpg';
import { PostPreview } from './post';
import {Globals} from '../App.js'

const POSTS = [
    {
        image: {LegoImage},
        title: "TESTING TITLE",
        price: 99,
        description: "BBBBBB",
        theme: "Superheros",
        numPieces: 1,
        setNumber: 1000,
        condition: "Old",
        user: "Bob Doctor",
        location: "New Hampshire"
      },
      {
        image: {LegoImage},
        title: "TESTING TITLE",
        price: 99,
        description: "BBBBBB",
        theme: "Star Wars",
        numPieces: 1,
        setNumber: 1000,
        condition: "Old",
        user: "Bob Doctor",
        location: "New Hampshire"
      },
      {
        image: {LegoImage},
        title: "TESTING TITLE",
        price: 99,
        description: "BBBBBB",
        theme: "Lord of the Rings",
        numPieces: 1,
        setNumber: 1000,
        condition: "Old",
        user: "Bob Doctor",
        location: "New Hampshire"
      }
    ]
let foundPosts = [];
function SearchBar({}){
    const navigate = useNavigate();
    const { searchInput, setSearchInput} = useContext(Globals);
    const {filterData} = useContext(Globals);
    const handleSearch = (input) => {
    navigate('/searchPage');
      console.log(searchInput);
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
        console.log(filterData);
        console.log(POSTS[i].theme);
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
      console.log(foundPosts);
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