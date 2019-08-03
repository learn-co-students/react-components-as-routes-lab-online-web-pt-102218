import React from 'react';
import { NavLink } from 'react-router-dom';
import Directors from './Directors';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
    </div>
  );
};

export default NavBar;
