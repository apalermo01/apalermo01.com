import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

const Nav: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            Projects 
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
