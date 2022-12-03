import LegoStarWars from '../images/LegoStarWars.jpeg';
import {Card, ListGroup, Image, Button} from 'react-bootstrap';
import {useNavigate, Route, Routes} from 'react-router-dom';
import {Globals} from '../App'
import { useContext } from 'react';
import City1 from '../images/City1.jpg';
import City2 from '../images/City2.jpg';
import City3 from '../images/City3.jpg';
import City4 from '../images/City4.jpg';
import City5 from '../images/City5.jpeg';
import Other1 from '../images/other1.jpg';
import Other2 from '../images/other2.jpg';
import Star2 from '../images/StarWars2.jpg';
import Star3 from '../images/StarWars3.jpg';
import Star4 from '../images/StarWars4.jpg';
import Star5 from '../images/StarWars5.jpg';
import Star6 from '../images/StarWars6.jpg';
import Super1 from '../images/Superheros1.jpg';
import Super2 from '../images/Superheros2.jpg';
import Super3 from '../images/Superheros3.jpg';
import Super4 from '../images/Superheros4.jpg';
import Super5 from '../images/Superheros5.jpg';
//fetch the post and fill in these variables

function PostPreview({thisPost}){
  const pics = [City1, City2, City3, City4, City5, Other1, Other2, Star2, 
    Star3, Star4, Star5, Star6, Super1, Super2, Super3, Super4, Super5];
  const { setPost } = useContext(Globals);
  const navigate = useNavigate();
  function checkout(){
    setPost(thisPost);
    navigate('/checkout');
  }
  function FullPost(){
    setPost(thisPost);
    navigate('/fullPost');
  }

    //use index to get that post
    let image = LegoStarWars
    let title = "TEST TITLE";
    let price = 10;
    let description = "CHECK CHECK CHECK";
    let theme = "Star Wars";
    let numPieces = 100;
    let setNumber = 655;
    let condition = "New";
    return(
      <div>
        <Card className="post-preview">
      <Image 
          fluid src={pics[thisPost.image]}
          rounded
          className=""/>
      <Card.Body>
        <Card.Title>{thisPost.title}</Card.Title>
        <Card.Text>
        {thisPost.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${thisPost.price}</ListGroup.Item>
        <ListGroup.Item>Theme: {thisPost.theme}</ListGroup.Item>
        <ListGroup.Item>Condition: {thisPost.condition}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={FullPost}>View Full Post</Button>
        <Button onClick={checkout} className="shop-button">Purchase Post</Button>
      </Card.Body>
    </Card>
    <Routes>
    <Route path='/fullPost' element={<Post/>}/>
    </Routes>
    </div>
    )
}
function Post(){
const pics = [City1, City2, City3, City4, City5, Other1, Other2, Star2, 
Star3, Star4, Star5, Star6, Super1, Super2, Super3, Super4, Super5];
const {post, user} = useContext(Globals);
const navigate = useNavigate();
function checkout(){
  navigate('/checkout');
}
function addToCart(){
  //add to list for user on backend
  navigate('/cart');
}
function goToUser(){
  navigate('/otherUserPage');
}
return(
  <div className="post-box">
  <Card className="post">
        <Image
            fluid
            src={pics[post.image]}
            rounded
            className=""/>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
          {post.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <label className="form-title">Posted by: </label>
          <ListGroup.Item><Button onClick={goToUser}>{post.user}</Button></ListGroup.Item>
          <label className="form-title">Price: </label>
          <ListGroup.Item>${post.price}</ListGroup.Item>
          <label className="form-title">Location: </label>
          <ListGroup.Item>{post.location}</ListGroup.Item>
          <label className="form-title">Theme: </label>
          <ListGroup.Item> {post.theme}</ListGroup.Item>
          <label className="form-title">Number of Pieces: </label>
          <ListGroup.Item> {post.numPieces}</ListGroup.Item>
          <label className="form-title">Set Number: </label>
          <ListGroup.Item>#{post.setNumber}</ListGroup.Item>
          <label className="form-title">Condition: </label>
          <ListGroup.Item> {post.condition}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Button onClick={checkout} className="shop-button">Checkout</Button>
        <Button onClick={addToCart} className="shop-button">Add to Cart</Button>
      </Card.Body>
      </Card>
      </div>
);
}

export {Post, PostPreview};