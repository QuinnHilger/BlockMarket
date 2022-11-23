import React, { useEffect, useState } from 'react';
import PostForm from './pages/postForm.js';
import UserForm from './pages/userForm.js';
import LoginForm from './pages/loginForm.js';
import Home from './pages/home.js';
import Filters from './pages/filters.js';
import UserPage from './pages/userPage.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import apiWrapper from './server.js';
import "./App.css"
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const navigate = useNavigate();
  function navigateToLoginForm(){
    navigate('/login');
  }
  function navigateToUserPage(){
    navigate('/userPage');
  }
  const [orders, setOrders] = useState([]);

  // the empty dependency list is important!
  // if we don 't include it, we enter an infinite loop,
  //since useEffect callback is called every time the component reloads (i.e. state changes)
  useEffect(() => {
    async function getOrders() {
      const originalOrders = await apiWrapper.get("/post");
      setOrders(originalOrders);
    }

    getOrders();
  }, []);

  function PersonIcon({}){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
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
    </Navbar>
      </header>
      <Routes>
          <Route path="/createpost" element={<PostForm />} />
          <Route path="/createuser" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/userPage" element={<UserPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}
export default App;
export function navigateHome() {}