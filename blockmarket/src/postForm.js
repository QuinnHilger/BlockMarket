import React, { useState } from 'react';
import apiWrapper from './server/server.js';
import styles from './demo/styles.module.css';

/** @typedef {{ offerPremium: boolean, setOrders: React.Dispatch<React.SetStateAction<any[]>> }} IProps */

/**
 * Form used to create a pizza order
 * @param {IProps} props an object containing props of type IProps
 */

function PostForm({setOrders}) {
  const [formData, setFormData] = useState({
        title: "",
        price: 0,
        description: "", 
        //profile to create later
        time: "",
        theme: "",
        numPieces: 0,
        condition: "",
        serialNum: "",
        pictures: []
  });

  /**
   * event handler for some change to the form (entry of new data, changes, etc.)
   * @param {React.FormEvent<HTMLInputElement>} event 
   */
  function handleFormChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
    }));
  };

  /**
   * triggered when form is submitted
   * @param {React.MouseEvent<React.HTMLInputElement>} event 
   */
  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await apiWrapper.post("/create");
    setOrders(oldOrders => [...oldOrders, response.data]);
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleFormChange}
        placeholder="Title"
        value={formData.title}
        className={styles["text-input"]}
      />
      <input
        type="number"
        min="0.00"
        max="100000.00"
        step="0.01"
        name="price"
        onChange={handleFormChange}
        placeholder="Price"
        value={formData.price}
        className={styles["text-input"]}
      />
      <textarea
        value={formData.description}
        name="description"
        placeholder="Description"
        onChange={handleFormChange}
        className={styles["comments"]}
      />

      <fieldset className={styles["selection-box"]}>
        <legend>Condition</legend>
        <input 
          type="radio"
          name="condition"
          value="New"
          checked={formData.condition === "New"}
          onChange={handleFormChange}
          className={styles["radio-input"]}
        />
        <label htmlFor="new">New</label>
        <br />
        
        <input 
          type="radio"
          name="condiiton"
          value="Used"
          checked={formData.type === "Used"}
          onChange={handleFormChange}
          className={styles["radio-input"]}
        />
        <label htmlFor="Used">Used</label>
        <br />
    </fieldset>
    <br />
    <button className={styles["submit-button"]} onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default PostForm;