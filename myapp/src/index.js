import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app.js';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));

// list={[
// {name:'Tyler',friend:true},
// {name:'Ryan',friend:true},
// {name:'Michale',friend:false},
// {name:'Mikenzi',friend:true},
// {name:'Jessica',friend:false},
// {name:'Dan',friend:false},
// {name:'John',friend:true},
// {name:'Carry',friend:false}
// ]}
