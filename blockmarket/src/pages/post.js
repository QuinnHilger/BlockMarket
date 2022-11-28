import LegoStarWars from '../images/LegoStarWars.jpeg';
import {Card, ListGroup, Image, Button} from 'react-bootstrap';
import {useNavigate, Route, Routes} from 'react-router-dom';
import App from '../App.js';


//fetch the post and fill in these variables

function PostPreview({thisPost}){
  const navigate = useNavigate();
  
  function FullPost(){
    navigate('/fullPost');
  }

    //use index to get that post
    let image = LegoStarWars
    let title = "TEST TITLE";
    let price = 10;
    let description = "CHECK CHECK CHECK";
    let theme = "Star Wars";
    let peices = 100;
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
        <button onClick={FullPost}>View Full Post</button>
      </Card.Body>
    </Card>
    <Routes>
    <Route path='/fullPost' element={<Post displayPost={thisPost}/>}/>
    </Routes>
    </div>
    )
}
function Post(displayPost){
const navigate = useNavigate();
function checkout(){
  navigate('/checkout');
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
          <Card.Title>{displayPost.title}</Card.Title>
          <Card.Text>
          {displayPost.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <label className="form-title">Posted by: </label>
          <ListGroup.Item>{displayPost.user}</ListGroup.Item>
          <label className="form-title">Price: </label>
          <ListGroup.Item>${displayPost.price}</ListGroup.Item>
          <label className="form-title">Location: </label>
          <ListGroup.Item>{displayPost.location}</ListGroup.Item>
          <label className="form-title">Theme: </label>
          <ListGroup.Item> {displayPost.theme}</ListGroup.Item>
          <label className="form-title">Number of Pieces: </label>
          <ListGroup.Item> {displayPost.numPieces}</ListGroup.Item>
          <label className="form-title">Set Number: </label>
          <ListGroup.Item>#{displayPost.setNum}</ListGroup.Item>
          <label className="form-title">Condition: </label>
          <ListGroup.Item> {displayPost.condition}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <button onClick={checkout}>Checkout</button>
      </Card.Body>
      </Card>
      </div>
);
}

export {Post, PostPreview};