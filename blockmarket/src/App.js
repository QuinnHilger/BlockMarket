import React, { useEffect, useState } from 'react';
import Form from './demo/form.js';
import postform from './postForm.js';

import apiWrapper from './server/server.js';

function App() {
  const [orders, setOrders] = useState([]);

  // the empty dependency list is important!
  // if we don 't include it, we enter an infinite loop,
  //since useEffect callback is called every time the component reloads (i.e. state changes)
  useEffect(() => {
    async function getOrders() {
      const originalOrders = await apiWrapper.get("/pizza");
      setOrders(originalOrders);
    }

    getOrders();
  }, []);


  return (
    <div className="App">
      <Form offerPremium setOrders={setOrders} />
    </div>
  );
}

export default App;