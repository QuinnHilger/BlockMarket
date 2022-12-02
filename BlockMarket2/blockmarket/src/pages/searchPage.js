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
        theme: "Super Heros",
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

function SearchBar({}){
    const navigate = useNavigate();
    const { searchInput, setSearchInput} = useContext(Globals);
    const handleSearch = (input) => {
    navigate('/searchPage');
      console.log(searchInput);
      let word = ""
      for (let i = 0; i < searchInput.length; i++){
        if(searchInput[i] === ' '){
          word = "";
          //check if database has post that contains word
          //if it does, add it to posts to return
          //find some way to return post to the post display page
        }
        else{
          word = word + searchInput[i];
        }
      }
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
    const [foundPosts, setFoundPosts] = useState(POSTS);
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