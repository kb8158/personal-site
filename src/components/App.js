import React, { Component } from 'react';
import './App.css';
import {data} from "../constants/data";

class App extends Component {
  render() {
    return (
      <div className="Root">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 about">
              <h1> Hi, I'm Kate! </h1>
              <p>I'm a recent graduate of Launch Academy, a Boston based programming bootcamp. I have a B.S. in Applied Economics and worked in
              Financial Services for 5 years before switching to coding. I love to solve problems and increase efficiency through code and streamlining processes.
              When I am not working I can be found hiking, at the dog park or new local brewery.</p>
            </div>
          </div>
        </div>
        <div className="container project">
          <h1 className="text-center">Projects</h1>
         <div className="row">
           <div className="col-lg-10 col-lg-offset-1">
             <h1>GearX</h1>
             <p>An gear exchange platform to match borrowers and lenders of outdoor equipment. I find the shareing economy very interesting
             and thought why not apply it to one of my interests. Many people purchase expensive gear just to have it sit in storage. So instead pf buying
             why not get it from your neighbor.</p>
             <a href="http://gear-x.herokuapp.com/">Check it out!</a>
           </div>
         </div>
         <div className="row">
           <div className="col-lg-10 col-lg-offset-1">
             <h1>SoleMate</h1>
             <p>A Basketball shoe review site. Built as a group project to practice creating a site from start to finish, pair programming,
             Agile practices and Git workflow.</p>
             <a href="http://solemate.herokuapp.com/">Check it out!</a>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
