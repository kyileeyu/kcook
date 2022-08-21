import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import './styles/reset.scss';
// import { PC,Mobile } from './MediaQuery';
import axios from "axios";

import Pages from './containers/index';
import LandingPage from './containers/LandingPage';
import Block from './containers/Block';
import isSession from './utils/isSession';

function App() {
  //로그인 여부
  const [session, setSession] = useState(false);
  const [auth, setAuth] = useState({
    accountId: 0,
    address: "",
    dateOfBirth: "",
    email: "",
    nickname: "",
    phoneNumber: "",
    signInId: "",
  });

  useEffect(()=> {
    var jwToken = undefined;
    if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
    else jwToken = sessionStorage.jwToken;
    isSession(
      jwToken,
      (s)=>{
        if (s) setSession(s);
      },
      (a)=>{
        setAuth(a);
      },
    );
  }, []);

	return (
    <div id='main'>
      {/* <PC> */}
      {/* <LandingPage/> */}
      {/* {session?
      <Pages/>:
      <LandingPage/>
      } */}
      <Pages/>
      {/* </PC>
      <Mobile>
      </Mobile> */}
    </div>
  )
};




export default App;

