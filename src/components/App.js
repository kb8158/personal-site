import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Root">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 about">
              <h1> Hi, I'm Kate! </h1>
              <p>I am a recent graduate of Launch Academy, a Boston based programming bootcamp with a background in Applied Economics.
              I love to solve problems and increase efficiency through code ands streamlining processes. When I'm not coding I can be found
              hiking, at the dog park or new local brewery.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
