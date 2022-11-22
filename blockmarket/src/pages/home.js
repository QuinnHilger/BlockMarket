import PostForm from './postForm.js';
import UserForm from './userForm.js';
import LoginForm from './loginForm.js';
import Filters from './filters.js';
import MyImage from '../images/LegoImage.jpg';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../App.css";
import {Form, Button, Image, Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

function Home() {
  const navigate = useNavigate();

  function handleSearch()
  {

  }

  function navigateToFilters(){
    navigate('../filters');
  }

  return(
    <div className="App">
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
            <Button onClick={navigateToFilters}>Filters</Button>
      </Form>
      <main>
      <Container>
        <Row>
          <Col>
          <Image fluid src={MyImage}/>
          </Col>
        </Row>
      </Container>
      </main>
      <Routes>
          <Route path="/createpost" element={<PostForm />} />
          <Route path="/createuser" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/homeTest" element={<Home />} />
          <Route path="/filters" element={<Filters />} />
        </Routes>
    </div>
  );
}
export default Home;