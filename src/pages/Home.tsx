import React from 'react';
import './home.css';
import Headline from "../components/Headline"
import Socials from "../components/Socials"
import About from "../components/About"

const Home: React.FC = () => {
  return (
    <>
    <div className="homepage">
      <Socials /> 
      <div className="siteTitle">Alex Palermo</div>
      <div className="contentContainer">
        <Headline />
        <About />
      </div>
    </div>
    </>
  )
}

export default Home;
