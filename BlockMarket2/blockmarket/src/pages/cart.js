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
        price: 100,
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
        price: 10,
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
        price: 55,
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
let profile = {name: "Bob Bob"}

function Cart() {
    const [storedPosts, setStoredPosts] = useState(POSTS);
    const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
        <Card className="test-center bg-warning text-white mt-3 py-2">
            <Card.Body className="header-a">
              {profile.name}'s Posts in Cart
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