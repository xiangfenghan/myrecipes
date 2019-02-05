import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderLink = ({ children, ...props }) => (
    <NavLink
      exact
      activeClassName="active"
      {...props}
    >
      {children}
    </NavLink>
  )

const Header = () => (
    <header>
        <h1>My Recipe</h1>
        <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/favorites">Favorites</HeaderLink>
        </nav>
    </header>
)

export default Header