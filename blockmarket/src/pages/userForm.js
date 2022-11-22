import React, { useState } from 'react';
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
  function navigateToLoginForm(){
    navigate('/login');
  }
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
    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 calssName="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already have an account?{" "}
              <span className="link-primary" onClick={navigateToLoginForm}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                onChange={handleFormChange}
                placeholder="e.g johnsmith@gmail.com"
                value={formData.email}
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="text"
                name="password"
                onChange={handleFormChange}
                placeholder="Password"
                value={formData.password}
                className="form-control mt-1"
              />
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleFormChange}
              placeholder="John Smith"
              value={formData.name}
              className="form-group mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              onChange={handleFormChange}
              placeholder="123 Park St, San Diego, CA"
              value={formData.address}
              className="form-group mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleFormChange}
              placeholder="1234567890"
              value={formData.phoneNumber}
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Create Account
            </button>
          </div>
          </div>
        </form>
      </div>
  );
}

export default UserForm;