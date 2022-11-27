import React, { useState } from 'react';
import styles from '../styles.module.css';
import LegoImage from '../images/LegoImage.jpg';
import {Form, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Card, ListGroup, Image} from 'react-bootstrap';
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
        pictures: null
  });
  const [picture, setPicture] = useState(null);

  /**
   * event handler for some change to the form (entry of new data, changes, etc.)
   * @param {React.FormEvent<HTMLInputElement>} event 
   */
  function handleFormChange(event) {
    console.log(picture)
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
  const handleSubmit = (event) =>{
    const form = event.currentTarget;
    event.preventDefault();
    //initialize post with variables
    navigate('/');
  }

  function navigateToLoginPage(){
    navigate('/login');
  }

  function ReturnImage({}){
    if (picture == null){
      return(
        <Image
            fluid
            src={LegoImage}
            rounded
            className=""/>
      )
    }
    else{
      return(
      <Image
            fluid
            src={URL.createObjectURL(picture)}
            rounded
            className=""/>
      )
    }
  }

  return (
  <Container>
    <Row>
      <Col>
      <div className="profile-form-container">
        <form className="profile-form">
          <div className="profile-form-content">
            <h3 className="Auth-form-title">Create a Post</h3>
            <div className="text-center">
              Not signed in?{" "}
              <span className="link-primary" onClick={navigateToLoginPage}>
                Login
              </span>
            </div>
              <div classname="form-group mt-3">
                <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleFormChange}
                    placeholder="Create Title"
                    value={formData.title}
                    className="form-control mt-1"
                    />
              </div>
              <div className="form-group mt-3">
                <label>Price</label>
                <input
                type="number"
                min="0.00"
                max="100000.00"
                step="0.01"
                name="price"
                onChange={handleFormChange}
                placeholder="Price: $"
                value={formData.price}
                className="form-control mt-1"
              />
              <div classname="form-group mt-3">
                <label>Description</label>
                  <textarea
                    name="description"
                    onChange={handleFormChange}
                    placeholder="Write Description"
                    value={formData.description}
                    className="form-control mt-1"
                    />
              </div>
              <label for="theme">Theme </label>
                <select id="theme" name="theme" onChange={handleFormChange} className="form-control mt-1">
                  <option value="Star Wars">Star Wars</option>
                  <option value="Ninjago">Ninjago</option>
                  <option value="City">City</option>
                  <option value="Lord of the Rings">Lord of the Rings</option>
                  <option value="Harry Potter">Harry Potter</option>
                  <option value="Superheroes">Superheroes</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Space">Space</option>
                  <option value="Other">Other</option>
                </select>
                <div classname="form-group mt-3">
                <label>Number of Pieces</label>
                  <input
                    type="number"
                    min="0"
                    max="100000"
                    step="50"
                    name="numPieces"
                    onChange={handleFormChange}
                    placeholder="Pieces"
                    value={formData.numPieces}
                    className="form-control mt-1"
                  />
                </div>
                <div classname="form-group mt-3">
                <label>Set Number</label>
                  <input
                    type="number"
                    min="0"
                    max="100000"
                    step="50"
                    name="setNum"
                    onChange={handleFormChange}
                    placeholder="Set Number"
                    value={formData.setNum}
                    className="form-control mt-1"
                  />
                </div>
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
              <div className="form-group mt-3">
              <label>Set Picture</label>
              <input
                type="file"
                class="form-control-file"
                name="picture"
                onChange={(event) => {
                  setPicture(event.target.files[0])
                }}
                placeholder="Picture Placeholder"
                value={formData.picture}
                className="form-control mt-1"
              />
              </div>
              </div>
              <div className="d-grip gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Post
                </button>
              </div>
          </div>
        </form>
        </div>
      </Col>
      <Col>
        <Card className="post-preview">
        <ReturnImage></ReturnImage>
        <Card.Body>
          <Card.Title>{formData.title}</Card.Title>
          <Card.Text>
          {formData.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <label className="form-title">Price: </label>
          <ListGroup.Item>${formData.price}</ListGroup.Item>
          <label className="form-title">Theme: </label>
          <ListGroup.Item> {formData.theme}</ListGroup.Item>
          <label className="form-title">Number of Pieces: </label>
          <ListGroup.Item> {formData.numPieces}</ListGroup.Item>
          <label className="form-title">Set Number: </label>
          <ListGroup.Item>#{formData.setNum}</ListGroup.Item>
          <label className="form-title">Condition: </label>
          <ListGroup.Item> {formData.condition}</ListGroup.Item>
        </ListGroup>
      </Card>
      </Col>
    </Row>
  </Container>
    
  );
}
export default PostForm;