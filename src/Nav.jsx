import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () =>
  <nav>
    <ul>
      <li>
      	<NavLink to={'/hang'}>Hang</NavLink>
      </li>
      <li>
      	<NavLink to={'/coin'}>Coin</NavLink>
      </li>
      <li>
      	<NavLink to={'/auth'}>Auth</NavLink>
      </li>
    </ul>
  </nav>

export default Nav
