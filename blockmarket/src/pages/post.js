import LegoStarWars from '../images/LegoStarWars.jpeg';
import {Card, ListGroup, Image} from 'react-bootstrap';


//fetch the post and fill in these variables

function PostPreview(){
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
        <Card className="post-preview">
      <Image 
          fluid src={image}
          rounded
          className=""/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>Theme: {theme}</ListGroup.Item>
        <ListGroup.Item>Conditions: {condition}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">View Full Post</Card.Link>
      </Card.Body>
    </Card>
    )
}
function Post(){
//use index to get that post
let image={LegoStarWars};
let title = "TEST TITLE";
let price = 10;
let description = "CHECK CHECK CHECK";
let theme = "Star Wars";
let peices = 100;
let setNumber = 655;
let condition = "New";
}

export {Post, PostPreview};