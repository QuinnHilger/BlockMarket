import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import {Post, PostPreview} from './post.js';
import LegoImage from '../images/LegoImage.jpg';
import {Globals} from '../App'

//test posts
const POSTS = [
  {
    image: 13,
    title: "Ultron set",
    price: 50,
    description: "Great movie, better LEGOS",
    theme: "Superheros",
    numPieces: 333,
    setNumber: 1002340,
    condition: "Old",
    user: "John jacobs",
    location: "California"
  },
  {
    image: 14,
    title: "Spoderman",
    price: 99,
    description: "With great power comes great responsiblity",
    theme: "Superheros",
    numPieces: 120,
    setNumber: 1002340,
    condition: "Old",
    user: "Jeffy Poo",
    location: "Texas"
  },
  {
  image: 15,
    title: "Water guy",
    price: 25,
    description: "Buy this be a hero",
    theme: "Superheros",
    numPieces: 200,
    setNumber: 34534,
    condition: "New",
    user: "Jeff Hogan",
    location: "New Hampshire"
  }
    ]
//creating a user to test data
let profile = {name: "Bob Bob"}

function Cart() {
  const {user} = useContext(Globals);
    const [storedPosts, setStoredPosts] = useState(POSTS);
    const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
        <Card className="test-center bg-warning text-white mt-3 py-2">
            <Card.Body className="header-a">
              {user.name}'s Posts in Cart
            </Card.Body>
        </Card>
        <div>
            {storedPosts.length > 0 ? (storedPosts.map((post) => (
                <ul>
                <li key={post}>
                <span>
                    <div className="post-container">
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
      </Row>
    </Container>
  );
}

export default Cart;