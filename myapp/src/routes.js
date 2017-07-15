import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './components/homePage.js';
import About from './components/aboutPage.js';
import Author from './components/authorPage.js';

const Main =() => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/author' component={Author}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/author'>Author</Link></li>
      </ul>
    </nav>
  </header>
 )

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;

