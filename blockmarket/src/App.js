import React, { useEffect, useState } from 'react';
import PostForm from './pages/postForm.js';
import UserForm from './pages/userForm.js';
import LoginForm from './pages/loginForm.js';
import Filters from './pages/filters.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import apiWrapper from './server.js';

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
  function navigateToFilters(){
    navigate('/filters');
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

  function handleSearch()
  {

  }

  function Home() {
    return (
      <>
      <h2>BlockMarket</h2>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            <Button onClick={navigateToFilters}>Filters</Button>
      </Form>
      </>
    );
  }

  return (
    <div>
      <div>
        <Button onClick={navigateHome}>Home</Button>
        <hr />
        <Button onClick={navigateToPostForm}>Create Post</Button>
        <Button onClick={navigateToUserForm}>Create Account</Button>
        <Button onClick={navigateToLoginForm}>Login</Button>
        <Routes>
          <Route path="/createpost" element={<PostForm />} />
          <Route path="/createuser" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
export function navigateHome() {}