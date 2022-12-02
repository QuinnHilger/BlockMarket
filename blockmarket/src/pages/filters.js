import React, { useContext, useState } from 'react';
import styles from '../styles.module.css';
import {useNavigate} from 'react-router-dom';
import { Globals } from '../App.js';
import {Button, Dropdown, DropdownButton, Card, ListGroupItem, Container, Row, Col} from 'react-bootstrap';

function Filters({}) {
  const navigate = useNavigate();
  const {filterData, setFilterData} = useContext(Globals);


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
      location: selection
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
    console.log(filterData);
    navigate('/');
  }

  return (
    <Card className="filter-container">
          <Card.Body className="header-c">
              Filters
          </Card.Body>
        <ListGroupItem className="filter-body">
          <label for="theme" className="filter-title">Theme </label>
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
        </ListGroupItem>
        <ListGroupItem className="filter-body">
          <label for="condition" className="filter-title">Condition </label>
          <DropdownButton
            title= {filterData.condition}
            name="condition"
            onSelect={handleSelectCondition}
          >
            <Dropdown.Item eventKey="Any Condition">Any Condition</Dropdown.Item>
            <Dropdown.Item eventKey="New">New</Dropdown.Item>
            <Dropdown.Item eventKey="Used">Used</Dropdown.Item>
          </DropdownButton>
        </ListGroupItem>
        <ListGroupItem className="filter-body">
          <label for="location" className="filter-title">Location </label>
          <select
            title= {filterData.location}
            name="location"
            onSelect={handleSelectLocation}
            class="form-control">
            <option value="Any Location">Any Location</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </ListGroupItem>
        <ListGroupItem className="filter-body">
        <label for="minPieces" className="filter-title">Number of Pieces:</label>
        <Container>
          <Row>
          <Col>
          <label for="maxPieces">From</label>
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
          </Col>
          <Col>
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
          </Col>
          </Row>
          </Container>
        </ListGroupItem>
      <Button className="filter-body" variant="primary" onClick={handleSubmit}>Apply Filters</Button>
    </Card>
  );
}

export default Filters;