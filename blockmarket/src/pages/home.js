import PostForm from './postForm.js';
import UserForm from './userForm.js';
import LoginForm from './loginForm.js';
import Filters from './filters.js';
import LegoImage from '../images/LegoImage.jpg';
import LegoStarWars from '../images/LegoStarWars.jpeg';
import LegoBatman from '../images/LegoBatman.jpeg';
import LegoCity from '../images/LegoCity.jpg';
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../App.css";
import {Button, Image, Container, Row, Col, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

function Home() {
  const navigate = useNavigate();

  function SearchBar({}){
    const [searchInput, setSearchInput] = useState("");
    const handleSearch = (input) => {
      input.preventDefault();
      setSearchInput(input.target.value);
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

  return(
    <div className="App">
      <header>
      <SearchBar></SearchBar>
      </header>
      <main>
      <Container>
        <Row className="px-4 my-5">
          <Col>
          <Image 
          fluid src={LegoImage}
          rounded
          className=""/>
          </Col>
          <Col>
          <h1 className="header-intro">Welcome to BlockMarket</h1>
          <p className='mt=4'>
            Thank you for shopping on BlockMarket.
            This is the best place online to purchase 
            used lego sets! Create an account to begin 
            selling and purchasing sets. The nav bar at 
            the top should assist in navigating the site. 
            Goodluck buying and building! Have fun!
          </p>
          </Col>
        </Row>
        <Row>
          <Card className="test-center bg-warning text-white mt-3 py-2">
            <Card.Body className="header-a">
              Shop Popular Themes
            </Card.Body>
          </Card>
        </Row>
        <Row className="px-4 my-5">
          <Col class="col-lg-4 d-flex align-items-stretch">
          <Card style={{ width: '18rem' }}>
            <Card.Img fluid variant="top" src={LegoStarWars} />
            <Card.Body>
              <Card.Title>LEGO Star Wars</Card.Title>
              <Card.Text>
              One of the most popular franchises in the world, Star Wars, 
              has been one with the Force since 1977 - and LEGO® Star Wars
              sets bring the "galaxy far, far away" a whole lot closer. 
              With your favourite LEGO® Star Wars™ sets, you can join 
              the Jedi or the Sith and battle between the light and dark 
              side of The Force whilst re-creating scenes from the movies 
              with all your favorite characters such as Luke Skywalker, 
              Yoda, Grogu, Darth Vader, Emperor Palpatine, Princess Leia, 
              Han Solo, Chewbacca, R2-D2, C-3PO and more.
              </Card.Text>
            <Button variant="primary">Shop Star Wars</Button>
          </Card.Body>
          </Card>
          </Col>
          <Col class="col-lg-4 d-flex align-items-stretch">
          <Card style={{ width: '18rem' }}>
            <Card.Img fluid variant="top" src={LegoBatman} />
            <Card.Body>
              <Card.Title>LEGO Batman</Card.Title>
              <Card.Text>
              DC Batman has been a beloved superhero for generations, 
              and our LEGO® Batman™ sets let you bring the Dark Knight's 
              world to life while creating your own adventures. The best 
              gift choice for DC superhero lovers and Batman™ fans of 
              all ages - with your favorite LEGO® Batman™ sets, you can 
              build and battle against the The Joker™, Bane™ and Gotham 
              City's most notorious villains for the ultimate victory.
              </Card.Text>
            <Button variant="primary">Shop Super Heros</Button>
          </Card.Body>
          </Card>
          </Col>
          <Col class="col-lg-4 d-flex align-items-stretch">
          <Card fluid style={{ width: '18rem' }}>
            <Card.Img variant="top" src={LegoCity} />
            <Card.Body>
              <Card.Title>LEGO City</Card.Title>
              <Card.Text>
              Playtime hits the big city with LEGO® City sets,
              the best gifts for birthdays and holidays. 
              Organize emergency services like the LEGO® City 
              police and firefighter teams to arrest crooks and 
              put out fires, then relax downtown with pizza 
              parlours and hot dog stands.
              Or explore the world on a whole new frontier with 
              sets that take to the ocean or the air.
              There are loads of ways to connect and style 
              your own personal LEGO® City. 
              </Card.Text>
            <Button variant="primary">Shop City</Button>
          </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </main>
      <Routes>
          <Route path="/createpost" element={<PostForm />} />
          <Route path="/createuser" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/homeTest" element={<Home />} />
          <Route path="/filters" element={<Filters />} />
        </Routes>
    </div>
  );
}
export default Home;