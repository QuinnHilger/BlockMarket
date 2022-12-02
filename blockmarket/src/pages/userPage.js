import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import {Post, PostPreview} from './post.js';
import LegoImage from '../images/LegoImage.jpg';
import {Globals} from '../App.js'
/**
 * Form used to create a user
 * @param {IProps} props an object containing props of type IProps
 */


let testPost = {
  image: {LegoImage},
  title: "Lego Star Wars Millenium Falcon",
  price: 99,
  description: "Great LEGO set to gift to any LEGO or Star Wars enthusiast",
  theme: "Star Wars",
  peices: 1000,
  setNumber: 1000,
  condition: "New",
  user: "Bob Doctor",
  location: "New Hampshire"
};

const REVIEWS = [
  {
      title: "Great product",
      score: 9,
      body: "Purchased last week as gift for my child."
  },
  
  {title: "Mid product",
  score: 8,
  body: "Purchased last week as gift for my child."},
  
  {title: "Great product",
  score: 7,
  body: "Purchased last week as gift for my child."},
  ]

function UserPage() {
  const navigate = useNavigate();
  const [foundReviews, setFoundReviews] = useState(REVIEWS);
  const {user, setUser} = useContext(Globals);
  const [formData, setFormData] = useState({
        email: user.email,
        password: user.password,
        name: user.name,
        address: user.address,
        state: user.state,
        phoneNumber: user.phoneNumber
  });
  /**
   * event handler for some change to the form (entry of new data, changes, etc.)
   * @param {React.FormEvent<HTMLInputElement>} event 
   */
   const handleFormChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  /**
   * triggered when form is submitted
   * @param {React.MouseEvent<React.HTMLInputElement>} event 
   */
  function handleSubmit(event) {
    console.log(formData);
    event.preventDefault();
    setUser(formData);
    console.log(user);
  }
  
  function getReview(event){
    event.preventDefault()
    //fetch next review from profile
  }

  function DisplayReview({thisReview}){
    return(<Card className="review-display2">
    <Card.Body>
      <Card.Title>{thisReview.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{thisReview.score} / 10.0</Card.Subtitle>
      <Card.Text>
        {thisReview.body}
      </Card.Text>
    </Card.Body>
  </Card>);
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="profile-container">
        <form className="profile-form">
          <div className="profile-form-content">
            <h3 className="Auth-form-title">Update Profile</h3>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                onChange={handleFormChange}
                placeholder="e.g johnsmith@gmail.com"
                value={formData.email}
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="text"
                name="password"
                onChange={handleFormChange}
                placeholder="Password"
                value={formData.password}
                className="form-control mt-1"
              />
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleFormChange}
              placeholder="John Smith"
              value={formData.name}
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              onChange={handleFormChange}
              placeholder="123 Park St, San Diego"
              value={formData.address}
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>State</label>
            <select
              type="text"
              name="state"
              onChange={handleFormChange}
              placeholder="CA"
              value={formData.state}
              class="form-control">
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
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleFormChange}
              placeholder="1234567890"
              value={formData.phoneNumber}
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Update Account
            </button>
          </div>
          </div>
        </form>
          </div>
        </Col>
      <Col>
      <Card className="test-center bg-warning text-white mt-3 py-2">
            <Card.Body className="header-a">
              {formData.name}'s Reviews
            </Card.Body>
        </Card>
        <div>
            {foundReviews.length > 0 ? (foundReviews.map((review) => (
                <ul>
                <li key={review}>
                <span>
                    <DisplayReview thisReview={review}></DisplayReview>
                </span>
            </li>
            </ul>
            ))
            ) : (
                <h1 className="header-b">No Reviews Found</h1>
            )}
        </div>
      </Col>
      </Row>
      <Card className="test-center bg-warning text-white mt-3 py-2">
            <Card.Body className="header-a">
              {formData.name}'s Posts
            </Card.Body>
          </Card>
      <Row>
      <Col sm='6'>
      <PostPreview thisPost={testPost}></PostPreview>
      </Col>
      <Col sm='6'>
      <PostPreview thisPost={testPost}/>
      </Col>
      </Row>
    </Container>
  );
}

export default UserPage;