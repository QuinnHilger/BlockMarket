import React, { useEffect, useState } from 'react';
import PostForm from './pages/postForm.js';
import UserForm from './pages/userForm.js';
import LoginForm from './pages/loginForm.js';
import CheckoutForm from './pages/checkoutForm.js';
import Home from './pages/home.js';
import Filters from './pages/filters.js';
import UserPage from './pages/userPage.js';
import OtherUserPage from './pages/otherUserPage.js';
import Cart from './pages/cart.js';
import { SearchBar, SearchPage } from './pages/searchPage.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "./App.css"
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Post, PostPreview } from './pages/post.js';


export const Globals = React.createContext({});

function App() {
  const navigate = useNavigate();
  function navigateToUserPage(){
    navigate('/userPage');
  }
  function navigateToCart(){
    navigate('/cart');
  }
  const [post, setPost] = useState({
    title: "",
    description: "",
    user: null,
    price: "",
    location: "",
    theme: "",
    numPieces: "",
    setNum: "",
    condition: "",
  });
  
  const [user, setUser] = useState({
    email: "bobdoctor@gmail.com",
    password: "bobologist1",
    name: "Bob Doctor",
    address: "8008135 Main St, Los Angeles",
    state: "CA",
    phoneNumber: "1234567890",
    cart: [],
    posts: [],
    reviews: []
  });

  const [filterData, setFilterData] = useState({
    sortBy: "Date Added (newest)",
    theme: "All Themes",
    minPieces: "0",
    maxPieces: "10000",
    condition: "Any Condition",
    location: "Any Location"
  });
  
  const [searchInput, setSearchInput] = useState("");

  function PersonIcon({}){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>
    )
  }
  function CartIcon({}){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
    )
  }
  

  return (
    <div className="App">
      <header>
      <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="./home" className="navbar-a"><b>Block Market</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="./createpost">Create Post</Nav.Link>
            <Nav.Link href="./createuser">Create Account</Nav.Link>
            <Nav.Link href="./login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button onClick={navigateToUserPage}><PersonIcon></PersonIcon></Button>
      <Button onClick={navigateToCart}><CartIcon></CartIcon></Button>
    </Navbar>
      </header>
      <Routes>
          <Route path="/createpost" element={<Globals.Provider value = {{user}}><PostForm /></Globals.Provider>} />
          <Route path="/createuser" element={<Globals.Provider value = {{setUser}}><UserForm /></Globals.Provider>} />
          <Route path="/login" element={<Globals.Provider value = {{setUser}}><LoginForm /></Globals.Provider>} />
          <Route path="/home" element={<Globals.Provider value = {{searchInput, setSearchInput, filterData, setFilterData}}><Home /></Globals.Provider>} />
          <Route path="/filters" element={<Globals.Provider value = {{ filterData, setFilterData}}><Filters /></Globals.Provider>} />
          <Route path="/userPage" element={<Globals.Provider value = {{setPost, user, setUser}}><UserPage /></Globals.Provider>} />
          <Route path="/otherUserPage" element={<Globals.Provider value = {{setPost, post}}><OtherUserPage /></Globals.Provider>} />
          <Route path='/fullPost' element={<Globals.Provider value = {{post, user}}><Post /></Globals.Provider>}/>
          <Route path="/checkout" element={<Globals.Provider value = {{post}}><CheckoutForm /></Globals.Provider>} />
          <Route path="/searchPage" element={<Globals.Provider value = {{searchInput, setSearchInput, filterData, setPost}}><SearchPage /></Globals.Provider>} />
          <Route path="/cart" element={<Globals.Provider value = {{setPost, user}}> <Cart /></Globals.Provider>} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}
export default App;
export function navigateHome() {}