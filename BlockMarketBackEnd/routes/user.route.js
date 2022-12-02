const express = require('express');
const router = express.Router();
router.use(express.json());
const crypto = require('crypto');
const User = require('../models/user.model');

router.post('/Signup', async function (req, res) {
  console.log("email: " + req.body.email);
  console.log("password: " + req.body.password);
  console.log("name: " + req.body.name);
  console.log("address: " + req.body.address);
  console.log("state: " + req.body.state);
  console.log("phoneNumber: " + req.body.phoneNumber);
  const { email, password, name, address, state, phoneNumber } = req.body;
  try {
    const response = await User.create({
      email,
      password,
      name,
      address,
      state,
      phoneNumber,
    });
    console.log("Worked");
    return res.status(201).json(response);
  } 
  catch (error) {
    console.log("catch: " + error);
    return res.status(500).json({ Error: error });
  }
});

router.get('/Display', async function (req, res) {
  try {
    const response = await User.findOne({}); 
    console.log("Workedget");
    if (response !== null) {
      return res.status(202).json(response);
    }
    return res.status(201);
  } 
  catch (error) {
    console.log("catch: " + error);
    return res.status(500).json({ Error: error });
  }
});

router.post('/Login', async function (req, res) {
  const { email, password } = req.body;
  try {
    let token = crypto.randomBytes(48).toString('hex');
    const response = await User.findOneAndUpdate(
      { email, password },
      { token: token },
      { new: true }
    );
    console.log(response);
    if (response !== null) {
      return res.status(200).json(response);
    }
    return res.status(400).json(response);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

router.post('/Logout', async function (req, res) {
  const { token } = req.body;
  try {
    const response = await User.findOneAndUpdate(
      { token },
      { token: null },
      { new: true }
    );
    console.log(response);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

router.post('/Update', async function (req, res) {
  const { email, password, name, address, state, phoneNumber } = req.body;
  try {
    const response = await User.findOneAndUpdate(
      {
        email,
      },
      {
        password,
        name,
        address,
        state,
        phoneNumber,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
});

module.exports = router;
