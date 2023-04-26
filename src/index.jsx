import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import App2 from './app2.jsx';
import "./scss/main.scss";

var mountNode = document.getElementById('app');
var mountNode2 = document.getElementById('app2');

ReactDOM.render(<App />, mountNode); 
ReactDOM.render(<App2 />, mountNode2); 
