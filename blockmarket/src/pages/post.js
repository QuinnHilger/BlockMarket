import LegoStarWars from '../images/LegoStarWars.jpeg';
import {Card, ListGroup, Image, Button} from 'react-bootstrap';
import {useNavigate, Route, Routes} from 'react-router-dom';
import {Globals} from '../App'
import { useContext } from 'react';


//fetch the post and fill in these variables

function PostPreview({thisPost}){
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
          fluid src={image}
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
const {post} = useContext(Globals);
const navigate = useNavigate();
function checkout(){
  navigate('/checkout');
}
function addToCart(){
  //add to list for user
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
            src={LegoStarWars}
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
          <ListGroup.Item>#{post.setNum}</ListGroup.Item>
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