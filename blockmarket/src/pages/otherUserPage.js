import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import {Post, PostPreview} from './post.js';
import LegoImage from '../images/LegoImage.jpg';

//test posts
const POSTS = [
    {
        image: {LegoImage},
        title: "TESTING TITLE",
        price: 99,
        description: "BBBBBB",
        theme: "Super Heros",
        peices: 1,
        setNumber: 1000,
        condition: "Old",
        user: "Bob Doctor",
        location: "New Hampshire"
      },
      {
        image: {LegoImage},
        title: "TESTING TITLE",
        price: 99,
        description: "BBBBBB",
        theme: "Super Heros",
        peices: 1,
        setNumber: 1000,
        condition: "Old",
        user: "Bob Doctor",
        location: "New Hampshire"
      },
      {
        image: {LegoImage},
        title: "TESTING TITLE",
        price: 99,
        description: "BBBBBB",
        theme: "Super Heros",
        peices: 1,
        setNumber: 1000,
        condition: "Old",
        user: "Bob Doctor",
        location: "New Hampshire"
      }
    ]
//creating a user to test data
let profile = {email: "bob_Doctor@gmail.com",
password: "Password123",
name: "Bob Bob",
address: "59 Canda St",
phoneNumber: "6038239393"}

let testPost = {
  image: {LegoImage},
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
    title: "Great product",
    score: 9,
    body: "Purchased last week as gift for my child."
},

{title: "Great product",
score: 9,
body: "Purchased last week as gift for my child."},

{title: "Great product",
score: 9,
body: "Purchased last week as gift for my child."},
]

function OtherUserPage(props) {
const [foundPosts, setFoundPosts] = useState(POSTS);
const [foundReviews, setFoundReviews] = useState(REVIEWS);
  const navigate = useNavigate();
  const [userData, setFormData] = useState({
        email: profile.email,
        password: profile.password,
        name: profile.name,
        address: profile.address,
        phoneNumber: profile.phoneNumber
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