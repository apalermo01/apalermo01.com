import React from 'react';
import './homeStyles.css';
import Headline from "./Headline";
import WhatIDo from "./WhatIDo";

const Home: React.FC = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Alex Palermo</h1>
      <div className="contentContainer">
        <Headline />
      </div>

      <div className='whatIDoSection'>
      <h1 className="pageTitle">What I Do</h1>
      <WhatIDo />
      </div>
    </div>
  )
}

export default Home;