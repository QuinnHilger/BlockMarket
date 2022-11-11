import React, { useEffect, useState } from 'react';
//import Form from './demo/form.js';
import Form from './pages/postForm.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import apiWrapper from './server.js';

function App() {
  const navigate = useNavigate();
  function navigateToPostForm(){
    navigate('/createpost');
  }
  function navigateHome(){
    navigate('/');
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

        <Routes>
          <Route path="/createpost" element={<Form />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
export function navigateHome() {}