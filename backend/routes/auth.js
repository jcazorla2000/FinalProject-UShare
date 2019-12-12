const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const Profile = require('../models/Profile');
const Ride = require("../models/Ride")

//-----Auth-----

router.post('/signup', (req, res, next) => {
  if (req.body.role === "driver"){
    const {fullName, email, telephoneNumber, university, password, role, carModel, carColor, returnTime, departureTime} = req.body
    User.register({fullName, email, role}, password)
    .then((user) => {
      Profile.create({telephoneNumber, university, password, carModel, carColor, returnTime, departureTime})
        .then ( profile => {
          User.findByIdAndUpdate(user._id, {profile : profile._id})
          .populate('profile')
            .then(usr => {
              User.findById(user._id).populate('profile')
              .then(usr => res.status(201).json( { usr, profile} ))
            })
            .catch(err => console.log(err))
        })
        .catch ((err) =>  console.log(err))
      
    })
    .catch((err) =>  {
      console.log(err)
      res.status(500).json({ err })
    })  

  } else {
    const {fullName, email, telephoneNumber, university, password, role, departureTime, returnTime} = req.body
    User.register({fullName, email, role}, password)
    .then((user) => {
      Profile.create({telephoneNumber, university, password, departureTime, returnTime})
        .then ( profile => {
          User.findByIdAndUpdate(user._id, {profile : profile._id})
          .populate('profile')
            .then(usr => {
              User.findById(user._id).populate('profile')
              .then(usr => res.status(201).json( { usr, profile} ))
            })
            .catch(err => console.log(err))
        })
        .catch ((err) =>  console.log(err))
      
    })
    .catch((err) =>  {
      console.log(err)
      res.status(500).json({ err })
    }) 
  }
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  User.findById(user._id).populate("profile")
    .then(user => res.status(200).json({ user }))
    .catch(err => console.log(err))
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

//-----Create-----

router.post("/create", (req, res) => {
  console.log(req.body)
  const {departureTime, coords} = req.body
  // Ride.create({})
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
