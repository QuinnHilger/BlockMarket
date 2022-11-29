import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {Globals} from '../App.js';
function Checkout()
{
    const {post} = useContext(Globals);
    const [review, setReview] = useState({
        title: "",
        rating: 0.0,
        reviewBody: "",
  });
  const navigate = useNavigate();

  function handleFormChange(event) {
    setReview(event.target.value);
  };
  /**
   * triggered when form is submitted
   * @param {React.MouseEvent<React.HTMLInputElement>} event 
   */
  const handleSubmit = (event) =>{
    const form = event.currentTarget;
    event.preventDefault();
    //initialize post with variables
    navigate('/');
  }
    return (
        <div className="checkout">
         <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your order</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 class="my-0">{post.title}</h6>
                        <small class="text-muted">{post.theme}</small>
                        </div>
                        <span class="text-muted">${post.price}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total</span>
                        <strong>${post.price}</strong>
                    </li>
                    </ul>
                    <form class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control me-2" placeholder="Promo code"/>
                        <div class="input-group-append">
                        <button type="button" class="btn btn-dark px-4 rounded-pill">Redeem</button>
                        </div>
                    </div>
                    </form>
                    <div className="Auth-form2">
                    <h4 className="Auth-form-content2">Leave a Review</h4>
                    <form className="Auth-form-content2">
                    <div classname="form-group mt-3">
                        <label>Review Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={handleFormChange}
                            placeholder="Create Review Title"
                            value={review.title}
                            className="form-control mt-1"
                            />
                    </div>
                        <div className="form-group mt-3">
                            <label>Rating</label>
                            <input
                            type="number"
                            min="0.00"
                            max="10"
                            step="0.1"
                            name="rating"
                            onChange={handleFormChange}
                            placeholder="xx / 10.0"
                            value={review.rating}
                            className="form-control mt-1"
                        />
                        </div>
                        <div classname="form-group mt-3">
                            <label>Review Description</label>
                            <textarea
                                name="description"
                                onChange={handleFormChange}
                                placeholder="Write Description"
                                value={review.reviewBody}
                                className="form-control mt-1"
                                />
                        </div>
                    </form>
                    </div>
                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                        <label for="firstName" class="form-label">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" required />
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>
                        <div class="col-md-6 mb-3">
                        <label for="lastName" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" required />
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                        <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                        <div class="invalid-feedback">
                        Please enter your shipping address.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                    </div>
                    <div class="row">
                        <div class="col-md-5 mb-3">
                        <label for="country" class="form-label">Country</label>
                        <select class="form-select d-block w-100" id="country" required>
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>
                        <div class="col-md-4 mb-3">
                        <label for="state" class="form-label">State</label>
                        <select class="form-select d-block w-100" id="state" required>
                            <option value="">Choose...</option>
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
                        <div class="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>
                        <div class="col-md-3 mb-3">
                        <label for="zip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required />
                        <div class="invalid-feedback">
                            Zip code required.
                        </div>
                        </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="same-address" />
                        <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <hr class="mb-4" />
                    <h4 class="mb-3">Payment</h4>
                    <div class="d-block my-3">
                        <div class="form-check">
                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                        <label class="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div class="form-check">
                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                        <label class="form-check-label" for="debit">Debit card</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                        <label for="cc-name" class="form-label">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required />
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                            Name on card is required
                        </div>
                        </div>
                        <div class="col-md-6 mb-3">
                        <label for="cc-number" class="form-label">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required />
                        <div class="invalid-feedback">
                            Credit card number is required
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                        <label for="cc-expiration" class="form-label">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                        <div class="invalid-feedback">
                            Expiration date required
                        </div>
                        </div>
                        <div class="col-md-3 mb-3">
                        <label for="cc-expiration" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                        <div class="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div>
                    <hr class="mb-4" />
                    <button class="btn btn-dark px-4 rounded-pill" type="button" onClick={handleSubmit}>Place Order</button>
                    </form>
                </div>
                </div>
            </div>
            </section>
         
        </div>
      
    )
  }

export default Checkout;