import React from 'react';
import './home.css';
import Headline from "./Headline";
import Socials from "../global/Socials";

const Home: React.FC = () => {
  return (
    <div className="pageContainer">
      <Socials /> 
      <div className="pageTitle">Alex Palermo</div>
      <div className="contentContainer">
        <Headline />
      </div>
    </div>
  )
}

export default Home;
