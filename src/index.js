import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './constants/data';
import './index.css';
import Project from './components/Project'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Project data={data}/>,
//   document.getElementById('root')
// );
