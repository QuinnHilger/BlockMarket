import React, { useState } from 'react';
import styles from '../styles.module.css';
import {useNavigate} from 'react-router-dom';
/**
 * Form used to create a post
 * @param {IProps} props an object containing props of type IProps
 */

function PostForm({}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "", 
        //profile to create later
        time: "",
        theme: "",
        numPieces: "",
        condition: "",
        setNum: "",
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
      [name]: type === "checkbox" ? checked : value
    }));
  };

  /**
   * triggered when form is submitted
   * @param {React.MouseEvent<React.HTMLInputElement>} event 
   */
  async function handleSubmit(event) {
    event.preventDefault();
    navigate('/');
    //initialize post with variables
  }

  return (
    <>
    <header>Create a Post</header>
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
        placeholder="Price: $"
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
      <label for="theme">Theme </label>
      <select id="theme" name="theme">
        <option value="starWars">Star Wars</option>
        <option value="ninjago">Ninjago</option>
        <option value="city">City</option>
        <option value="lotr">Lord of the Rings</option>
        <option value="harryPotter">Harry Potter</option>
        <option value="superheroes">Superheroes</option>
        <option value="architecture">Architecture</option>
        <option value="space">Space</option>
      </select>
      <input
        type="number"
        min="0"
        max="100000"
        step="50"
        name="numPieces"
        onChange={handleFormChange}
        placeholder="Pieces"
        value={formData.numPieces}
        className={styles["text-input"]}
      />
      <input
        type="number"
        name="setNum"
        onChange={handleFormChange}
        placeholder="Set Number"
        value={formData.setNum}
        className={styles["text-input"]}
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
          name="condition"
          value="Used"
          checked={formData.condition === "Used"}
          onChange={handleFormChange}
          className={styles["radio-input"]}
        />
        <label htmlFor="used">Used</label>
        <br />
    </fieldset> 
    
    <input
        type="file"
        class="form-control-file"
        multiple
        name="pictures"
        onChange={handleFormChange}
        placeholder="Pictures Placeholder"
        value={formData.pictures}
        className={styles["text-input"]}
      />
    <br />
    <button className={styles["submit-button"]} onClick={handleSubmit}>Submit</button>
    </form>
    </>
  );
}

export default PostForm;