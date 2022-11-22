import logo from '../logo.svg';
import PostForm from './postForm.js';
import UserForm from './userForm.js';
import LoginForm from './loginForm.js';
import {Routes, Route, useNavigate, link} from 'react-router-dom';
import "../App.css";
import {Navbar, Container, Nav, NavDropdown, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

function HomeTest() {
  const navigate = useNavigate();
  function navigateToPostForm(){
    navigate('/createpost');
  }
  return(
    <div className="App">
      <header>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="../">Block Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../">Home</Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>
            <Nav.Link href="./createpost">Create Post</Nav.Link>
            <Nav.Link href="./createuser">Create Account</Nav.Link>
            <Nav.Link href="./login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
        <Row>
          <Col>
          Welcome to Block Market
          </Col>
        </Row>
      </Container>
      </main>
      <Routes>
          <Route path="/createpost" element={<PostForm />} />
          <Route path="/createuser" element={<UserForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/homeTest" element={<HomeTest />} />
        </Routes>
    </div>
  );
}
export default HomeTest;
