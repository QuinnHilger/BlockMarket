import React, { useState } from 'react';
import styles from '../styles.module.css';
import {useNavigate} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
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
    navigate('/');
    //initialize an account
  }

  function navigateToUserForm(){
    navigate('/createuser');
  }

  return (
    <>
    <header>Login to your account</header>
    <Form>
      <input
        type="text"
        name="email"
        onChange={handleFormChange}
        placeholder="Email"
        value={formData.email}
        className={styles["text-input"]}
      />
      <input
        type="text"
        name="password"
        onChange={handleFormChange}
        placeholder="Password"
        value={formData.password}
        className={styles["text-input"]}
      />
    <Button variant="primary" onClick={handleSubmit}>Login</Button>
    </Form>
    <Button variant="outline-danger" onClick={navigateToUserForm}>Don't have an account? Create one here.</Button>
    </>
  );
}

export default LoginForm;