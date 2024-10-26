
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./globalStyles.css";

const Nav: React.FC = () => {
  const navItems = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/projects',
      name: 'Projects'
    }
  ];

  return (
    <nav className='navSection'>
      <ul className='navList'>
        {
          navItems.map((value) => (
              <NavLink
                to={value.path}
                className={({ isActive }) => (isActive ? 'navLink activeLink' : 'navLink inactiveLink')}
              >
              <li>
                {value.name}
              </li>
              </NavLink>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;
