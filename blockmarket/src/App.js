import React, { useEffect, useState } from 'react';
import PostForm from './pages/postForm.js';
import UserForm from './pages/userForm.js';
import LoginForm from './pages/loginForm.js';
import HomeTest from './pages/homeTest.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import apiWrapper from './server.js';
import "./App.css"

import {Image, Navbar, Container, Nav, NavDropdown, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyImage from './images/LegoImage.jpg';

function App() {
  const navigate = useNavigate();
  function navigateToPostForm(){
    navigate('/createpost');
  }
  function navigateHome(){
    navigate('/');
  }
  function navigateToUserForm(){
    navigate('/createuser');
  }
  function navigateToLoginForm(){
    navigate('/login');
  }
  function navigateToHomeTest(){
    navigate('/homeTest');
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

  function Home() {
    return (
      <h2>BlockMarket</h2>
    );
  }

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Home</button>
        <hr />
        <button onClick={navigateToPostForm}>Create Post</button>
        <button onClick={navigateToUserForm}>Create Account</button>
        <button onClick={navigateToLoginForm}>Login</button>
        <button onClick={navigateToHomeTest}>Home Test</button>
        <Routes>
          <Route path="/createpost" element={<PostForm />} />
          <Route path="/createuser" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/homeTest" element={<HomeTest />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
export function navigateHome() {}