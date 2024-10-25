import React from 'react';
import './home.css';
import Headline from "./Headline";
import Socials from "../global/Socials";
import About from "./About";

const Home: React.FC = () => {
  return (
    <div className="pageContainer">
      <Socials /> 
      <div className="pageTitle">Alex Palermo</div>
      <div className="contentContainer">
        <Headline />
        <About />
      </div>
    </div>
  )
}

export default Home;
