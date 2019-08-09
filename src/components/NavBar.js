import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navProps = {
    style: {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      background: 'blue',
      textDecoration: 'none',
      color: 'white',
    },
    activeStyle: {
      background: 'darkblue'
    }
  }

  return (
    <div className="navbar">
      <NavLink to="/" exact {...navProps} >Home</NavLink>
      <NavLink to="/movies" {...navProps} >Movies</NavLink>
      <NavLink to="/actors" {...navProps} >Actors</NavLink>
      <NavLink to="/directors" {...navProps} >Directors</NavLink>
    </div>
  );
};

export default NavBar;
