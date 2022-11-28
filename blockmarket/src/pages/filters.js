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
  const [filterData, setFilterData] = useState({
        sortBy: "Date Added (newest)",
        theme: "All Themes",
        minPieces: "0",
        maxPieces: "10000",
        condition: "Any Condition",
        location: "Any Location"
  });
  
  const handleSelectSortBy=(selection)=>{
    setFilterData(prevData => ({
      ...prevData,
      sortBy: selection
    }));
  }

  const handleSelectTheme=(selection)=>{
    setFilterData(prevData => ({
      ...prevData,
      theme: selection
    }));
  }

  const handleSelectCondition=(selection)=>{
    setFilterData(prevData => ({
      ...prevData,
      condition: selection
    }));
  }

  const handleSelectLocation=(selection)=>{
    setFilterData(prevData => ({
      ...prevData,
      condition: selection
    }));
  }


  /**
   * event handler for some change to the form (entry of new data, changes, etc.)
   * @param {React.FormEvent<HTMLInputElement>} event 
   */
   function handleFormChange(event) {
    const { name, type, value, checked } = event.target;
    setFilterData(prevData => ({
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
    //initialize an account
  }

  function navigateToFilters(){
    navigate('/Filters');
  }

  return (
    <>
    <header>Filters</header>
    <label for="sortBy">Sort By </label>
    <DropdownButton
      title= {filterData.sortBy}
      name="sortBy"
      onSelect={handleSelectSortBy}
    >
      <Dropdown.Item eventKey="Date Added (newest)">Date Added (newest)</Dropdown.Item>
      <Dropdown.Item eventKey="Date Added (oldest)">Date Added (oldest)</Dropdown.Item>
      <Dropdown.Item eventKey="Price: Low to High">Price: Low to High</Dropdown.Item>
      <Dropdown.Item eventKey="Price: High to Low">Price: High to Low</Dropdown.Item>
    </DropdownButton>

    <label for="theme">Theme </label>
    <DropdownButton
      title= {filterData.theme}
      name="theme"
      onSelect={handleSelectTheme}
    >
      <Dropdown.Item eventKey="All Themes">All Themes</Dropdown.Item>
      <Dropdown.Item eventKey="Star Wars">Star Wars</Dropdown.Item>
      <Dropdown.Item eventKey="Ninjago">Ninjago</Dropdown.Item>
      <Dropdown.Item eventKey="City">City</Dropdown.Item>
      <Dropdown.Item eventKey="Lord of the Rings">Lord of the Rings</Dropdown.Item>
      <Dropdown.Item eventKey="Harry Potter">Harry Potter</Dropdown.Item>
      <Dropdown.Item eventKey="Superheroes">Superheroes</Dropdown.Item>
      <Dropdown.Item eventKey="Architecture">Architecture</Dropdown.Item>
      <Dropdown.Item eventKey="Space">Space</Dropdown.Item>
      <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
    </DropdownButton>
    
    <label for="condition">Condition </label>
    <DropdownButton
      title= {filterData.condition}
      name="condition"
      onSelect={handleSelectCondition}
    >
      <Dropdown.Item eventKey="Any Condition">Any Condition</Dropdown.Item>
      <Dropdown.Item eventKey="New">New</Dropdown.Item>
      <Dropdown.Item eventKey="Used">Used</Dropdown.Item>
    </DropdownButton>

    <label for="location">Location </label>
    <DropdownButton
      title= {filterData.location}
      name="location"
      onSelect={handleSelectLocation}
    >
      <Dropdown.Item eventKey="Any Location">Any Location</Dropdown.Item>
    </DropdownButton>
    
    <label for="minPieces">Number of Pieces: From </label>
    <input
        type="number"
        min="0"
        max="100000"
        step="500"
        name="minPieces"
        onChange={handleFormChange}
        placeholder="0"
        value={filterData.minPieces}
        className={styles["text-input"]}
      />
    <label for="maxPieces">To</label>
    <input
        type="number"
        min="0"
        max="100000"
        step="500"
        name="maxPieces"
        onChange={handleFormChange}
        placeholder="0"
        value={filterData.maxPieces}
        className={styles["text-input"]}
      />

    <Button variant="primary" onClick={handleSubmit}>Apply Filters</Button>
    </>
  );
}

export default Filters;