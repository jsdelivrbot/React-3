import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
  <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
         Home
      </NavLink>
      <NavLink activeClassName='active' to='/battle'>
         Battle
      </NavLink>
      <NavLink activeClassName='active' to='/popular'>
         Popular
      </NavLink>
      {/*<NavLink activeClassName='active' to='/course'>*/}
        {/*Course*/}
      {/*</NavLink>*/}
      <NavLink activeClassName='active' to='/signup'>
        SignUp
      </NavLink>
    </li>
  </ul>
)

export default Nav;
