import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Feed from './components/feed/Feed';
import RideChoice from './components/rideChoice/RideChoice';
import Create from './components/Create';
import Profile from './components/profile/Profile';
import MyRides from './components/myRides/MyRides';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/rideChoice" component={RideChoice}/>
      <Route exact path="/feed" component={Feed}/>
      <Route exact path="/create" component={Create}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/myRides" component={MyRides}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
