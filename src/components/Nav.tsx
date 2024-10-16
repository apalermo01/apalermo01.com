import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

const Nav: React.FC = () => {
  return (
    <>
      <div className='navSection'>
      <nav>
        <ul className='navList'>
          <li className='navLink'>
            <Link to="/">About</Link>
          </li>
          <li className='navLink'>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default Nav
