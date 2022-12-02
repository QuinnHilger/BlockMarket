import React, { useState,useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import {Globals} from '../App'

const USERS = [
    {
      email: "bobfryer@gmail.com",
      password: "bobby123",
      name: "Bob Fryer",
      address: "335 Main St, San Diego",
      state: "CA",
      phoneNumber: "332-559-3456",
    },
    {
      email: "johnsmith@gmail.com",
      password: "johnny123",
      name: "John Smith",
      address: "335 Main St, Austin",
      state: "TX",
      phoneNumber: "512-559-3456"
    },
    {
      email: "janedoe@gmail.com",
      password: "jane1234",
      name: "Jane Doe",
      address: "335 Main St, Minneapolis",
      state: "MN",
      phoneNumber: "356-432-4532"
    },
  ]
/**
 * Form used to create a user
 * @param {IProps} props an object containing props of type IProps
 */

function LoginForm({}) {
  const navigate = useNavigate();
  const {setUser, user} = useContext(Globals)
  const [formData, setFormData] = useState({
        email: "",
        password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');
  /**
   * event handler for some change to the form (entry of new data, changes, etc.)
   * @param {React.FormEvent<HTMLInputElement>} event 
   */
   function handleFormChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  /**
   * triggered when form is submitted
   * @param {React.MouseEvent<React.HTMLInputElement>} event 
   */
  async function handleSubmit(event) {
    event.preventDefault();
    for(let i = 0; i<USERS.length;i++)
    {
      if(formData.email === USERS[i].email && formData.password === USERS[i].password)
        setUser(USERS[i]);
    }
    if(user.email === "")
      setErrorMessage(<Alert variant="danger">Invalid Credentials</Alert>);
    //Check to make sure account exists, if it does, set current account to that account
    //if it doesn't, show message of account doesn't exist
    else
      navigate('/');
    //initialize an account
  }

  function navigateToUserForm(){
    navigate('/createuser');
  }

  return (
    <div className="Auth-form-container">
        <form className="Auth-form">
          {errorMessage}
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login to your account</h3>
            <div className="text-center">
              Don't have an account?{" "}
              <span className="link-primary" onClick={navigateToUserForm}>
                Create Account
              </span>
            </div>
              <div classname="form-group mt-3">
                <label>Email Address</label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleFormChange}
                    placeholder="Enter email"
                    value={formData.email}
                    className="form-control mt-1"
                    />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleFormChange}
                    placeholder="Enter Password"
                    value={formData.password}
                    className="form-control mt-1"
                  />
              </div>
              <div className="d-grip gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Login
                </button>
              </div>
          </div>
        </form>
        </div>
  );
}

export default LoginForm;