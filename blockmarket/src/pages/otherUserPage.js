import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import {Post, PostPreview} from './post.js';
import LegoImage from '../images/LegoImage.jpg';
import {Globals} from '../App'
//test posts
const POSTS = [
  {
    image: 9,
      title: "Luke Skywalker",
      price: 25,
      description: "BEEP BOOP IM A SHEEP",
      theme: "Star Wars",
      numPieces: 200,
      setNumber: 34534,
      condition: "New",
      user: "Bob Fryer",
      location: "utah"
    },
    {
      image: 10,
      title: "Scary Ship",
      price: 500,
      description: "BUY ME NOW",
      theme: "Star Wars",
      numPieces: 3330,
      setNumber: 100234,
      condition: "New",
      user: "Bob Fryer",
      location: "Utah"
    },
    {
      image: 12,
      title: "Captain Captain",
      price: 25,
      description: "Come save the day",
      theme: "Superheros",
      numPieces: 200,
      setNumber: 34534,
      condition: "New",
      user: "Bob Fryer",
      location: "Utah"
    }
    ]
//creating a user to test data
let profile = {email: "bob_Doctor@gmail.com",
password: "Password123",
name: "Bob Bob",
address: "59 Canda St",
phoneNumber: "6038239393"}

let testPost = {
  image: 8,
  title: "TESTING TITLE",
  price: 99,
  description: "BBBBBB",
  theme: "Super Heros",
  peices: 1,
  setNumber: 1000,
  condition: "Old",
  user: "Bob Doctor",
  location: "New Hampshire"
};

const REVIEWS = [
{
    title: "I love buying from Bob",
    score: 9,
    body: "Purchased last week as gift for my child."
},

{title: "So happy",
score: 8,
body: "I've been looking for this set for years, thanks for the great deal"},

{title: "Disappointed in package",
score: 4,
body: "Wasn't shipped very well"},
]

function OtherUserPage(props) {
const [foundPosts, setFoundPosts] = useState(POSTS);
const [foundReviews, setFoundReviews] = useState(REVIEWS);
const navigate = useNavigate();
const {post} = useContext(Globals);
  const [userData, setFormData] = useState({
        email: "bobfryer@gmail.com",
        password: "bobby123",
        name: "Bob Fryer",
        address: "335 Main St, San Diego",
        phoneNumber: "332-559-3456"
  });
  
  function getReview(event){
    event.preventDefault()
    //fetch next review from profile
  }

  function DisplayReview({thisReview}){
    console.log(thisReview);
    console.log(thisReview.title);
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
        <Card className="test-center bg-warning text-white mt-3 py-2">
            <Card.Body className="header-a">
              {userData.name}'s Posts
            </Card.Body>
        </Card>
        <div>
            {foundPosts.length > 0 ? (foundPosts.map((post) => (
                <ul>
                <li key={post}>
                <span>
                    <div className="post-container2">
                    <PostPreview thisPost={post}></PostPreview>
                    </div>
                </span>
            </li>
            </ul>
            ))
            ) : (
                <h1 className="header-b">No Posts Found</h1>
            )}
        </div>
        </Col>
      <Col>
      <Card className="test-center bg-warning text-white mt-3 py-2">
            <Card.Body className="header-a">
              {userData.name}'s Reviews
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
    </Container>
  );
}

export default OtherUserPage;