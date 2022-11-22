import React, { useState } from 'react';
import styles from '../styles.module.css';
import {useNavigate} from 'react-router-dom';
import {Button, Form, Dropdown, DropdownButton} from 'react-bootstrap';
/**
 * Form used to create a user
 * @param {IProps} props an object containing props of type IProps
 */

function Filters({}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        sortBy: "Date Added (newest)",
        theme: "",
        numPieces: "",
        condition: "",
        location: ""
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
    //Check to make sure account exists, if it does, set current account to that account
    //if it doesn't, show message of account doesn't exist
    navigate('/');
    //initialize an account
  }

  function navigateToFilters(){
    navigate('/Filters');
  }

  return (
    <>
    <header>Filters</header>
    <DropdownButton
      title= {formData.sortBy}
      name="sortBy"
      type="text"
      value={formData.sortBy}
      id="dropdown-sortby"
    >
      <Dropdown.Item eventKey="1">Date Added (newest)</Dropdown.Item>
      <Dropdown.Item eventKey="2">Date Added (oldest)</Dropdown.Item>
      <Dropdown.Item eventKey="3">Price: Low to High</Dropdown.Item>
      <Dropdown.Item eventKey="4">Price: High to Low</Dropdown.Item>
    </DropdownButton>
    <Button variant="primary" onClick={handleSubmit}>Apply Filters</Button>
    </>
  );
}

export default Filters;