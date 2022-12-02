import React, { useState,useContext } from 'react';
import {Alert} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import LegoImage from '../images/LegoImage.jpg';
import {Globals} from '../App.js'

/**
 * Form used to create a user
 * @param {IProps} props an object containing props of type IProps
 */

function UserForm({}) {
  const navigate = useNavigate();
  //const {setUser} = useContext(Globals);
  const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        state: "",
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
    //setUser(formData);
    fetch("http://localhost:3001/user/Signup",
    {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(
        { 
          email: formData.email,
          password: formData.password,
          name: formData.name,
          address: formData.address,
          state: formData.state,
          phoneNumber:formData.phoneNumber
        })
    })
    .then(function(res){ 
      console.log("REQNOTERROR");
      console.log(res) })
    .catch(function(res){ 
      console.error("REQERROR");
      console.error(res); 
    })
    navigate('/home');
  }

  return (
    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
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
                type="password"
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
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              onChange={handleFormChange}
              placeholder="123 Park St, San Diego"
              value={formData.address}
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>State</label>
            <select
              type="text"
              name="state"
              onChange={handleFormChange}
              placeholder="CA"
              value={formData.state}
              class="form-control">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
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