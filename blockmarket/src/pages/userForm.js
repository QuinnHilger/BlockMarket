import React, { useState } from 'react';
import styles from '../styles.module.css';
import {useNavigate} from 'react-router-dom';
/**
 * Form used to create a user
 * @param {IProps} props an object containing props of type IProps
 */

function UserForm({}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        phoneNumber: ""
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
    navigate('/');
    //initialize an account
  }

  return (
    <>
    <header>Create an account</header>
    <form>
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
      <input
        type="text"
        name="name"
        onChange={handleFormChange}
        placeholder="Full Name"
        value={formData.name}
        className={styles["text-input"]}
      />
      <input
        type="text"
        name="address"
        onChange={handleFormChange}
        placeholder="Address"
        value={formData.address}
        className={styles["text-input"]}
      />
      <input
        type="text"
        name="phoneNumber"
        onChange={handleFormChange}
        placeholder="Phone Number"
        value={formData.phoneNumber}
        className={styles["text-input"]}
      />
    <button className={styles["submit-button"]} onClick={handleSubmit}>Create Account</button>
    </form>
    </>
  );
}

export default UserForm;