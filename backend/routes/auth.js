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
  User.findById(user._id).populate("profile").populate("ownedRides")
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
  const {rideDirection, universityDirection, departureTime, numberPlaces, driver, coords, placeName} = req.body
  
  const lat = coords.lat
  const lng = coords.long
  if (rideDirection === "fromUniversity" && universityDirection === "Tecnologico de Monterrey, Santa Fe"){
    const newRide = {rideDirection, numberPlaces, departureTime, universityDirection,  place:{coordinates:[-99.258731,19.359274]}, driver , placeName, coords}
    Ride.create(newRide)
    .then(result => {
      User.findByIdAndUpdate(result.driver, {$push : {"ownedRides": result._id}}, {new: true}).populate("profile").populate("ownedRides")
        .then(usr => res.status(200).json({ usr }))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  else if (rideDirection === "fromUniversity" && universityDirection === "Universidad Iberoamericana"){
    const newRide = {rideDirection, numberPlaces, departureTime, universityDirection,  place:{coordinates:[-99.2635995, 19.370993249999998]}, driver, placeName, coords }
    Ride.create(newRide)
    .then(result => {
      User.findByIdAndUpdate(result.driver, {$push : {"ownedRides" : result._id}}, {new: true}).populate("profile").populate("ownedRides")
        .then(usr => res.status(200).json({ usr }))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  else if (universityDirection === "Tecnologico de Monterrey, Santa Fe"){
    const newRide = {rideDirection, numberPlaces, departureTime, universityDirection,  place:{coordinates:[lat,lng]}, driver, placeName, coords: {lat: -99.258731,
      long: 19.359274} }
    Ride.create(newRide)
    .then(result => {
      User.findByIdAndUpdate(result.driver, {$push : {"ownedRides" : result._id}}, {new: true}).populate("profile").populate("ownedRides")
        .then(usr => res.status(200).json({ usr }))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  else {
    const newRide = {rideDirection, numberPlaces, departureTime, universityDirection,  place:{coordinates:[lat,lng]}, driver, placeName, coords: {lat: -99.2635995,
      long: 19.370993249999998} }
    Ride.create(newRide)
    .then(result => {
      User.findByIdAndUpdate(result.driver, {$push : {"ownedRides" : result._id}}, {new: true}).populate("profile").populate("ownedRides")
        .then(usr => res.status(200).json({ usr }))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
})

//-----Feed-----

router.post('/feed', async (req, res, next) => {
  console.log(req.body)
  if (req.body.userId){
    const { userId, elementId} = req.body

    const ride = await Ride.findByIdAndUpdate(elementId, {$push : {"passengers": userId}}, {new: true})
    const user = await User.findOne({_id: userId}).populate("profile")

    user.profile.actualRides.push(elementId);
    user.save();

    console.log('ride', ride)
    console.log('user', user)
    res.status(200).json({ user })


    // Ride.findByIdAndUpdate(elementId, {$push : {"passengers": userId}}, {new: true})
    //   .then(() => {
    //     User.findOne({_id: userId}).populate("profile")
    //       .then(usr => {
    //         User.findByIdAndUpdate(usr._id, {$push : {"profile.actualRides": elementId}},  {new: true})
    //           .then(newUser => res.status(200).json({ newUser }))
    //           .catch(err => console.log(err))
    //     })
    //       .catch(err => console.log(err))
    //     }
    //   )
    //   .catch(err => console.log(err))
  }
  else {
    const {userCoordinates} = req.body
    const {maxDistance} = req.body
    Ride.find({
        place: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: [userCoordinates[0], userCoordinates[1]]
            },
            $maxDistance: maxDistance
          }
        }
      }).populate({
        path: 'driver',
        model: 'User',
        populate: {
          path: 'profile',
          model: 'Profile'
        }
      }).then((ride) => {
        // console.log(ride)
        res.status(200).json({ ride })
      })
        .catch((err) => {
          console.log(err)
          res.status(500).json({ err })});
      // res.status(200).json({ foundRides })
  }
});


router.post("/myRides", async (req, res, next)=> {
  console.log(req.body)
  const {elementId, userId} = req.body
  Ride.findByIdAndRemove(elementId)
    .then( () => User.findByIdAndUpdate(userId, {$pull: {ownedRides: { $in: elementId }}}, {new: true}).populate("profile").populate("ownedRides")
            .then( usr => {
              console.log(usr)
              res.status(200).json({ usr })})
            .catch( err => console.error(err))
    )
    .catch(err => console.log(err))
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
