import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import mongoose from 'mongoose'; 
import { app, User } from './server.js';
import express from 'express';

require("dotenv").config(); 
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

/**
 * Form used to create a user
 * @param {IProps} props an object containing props of type IProps
 */

function LoginForm({}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        email: "",
        password: ""
  });

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
    //Check to make sure account exists, if it does, set current account to that account
    //if it doesn't, show message of account doesn't exist
    app.get('/', (req, res) => {
      User.find({email: formData.email, passowrd: formData.password}, (err, found) => {
          if (!err) {
              res.send(found);
          }
          console.log(err);
          res.send("Some error occured!")
      }).catch(err => console.log("Error occured, " + err));
    });

    if (res.text === "") {
      console.log("The account doesn't exist.\n");
    }
    else{
      
    }
    navigate('/');
    //initialize an account
  }

  function navigateToUserForm(){
    navigate('/createuser');
  }

  return (
    <div className="Auth-form-container">
        <form className="Auth-form">
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