import React from 'react';
import MarkdownComponent from "../global/MarkdownComponent";
import "../global/globalStyles.css";
import Headline from "../home/Headline";

const About: React.FC = () => {
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Alex Palermo</h1>
      <div className="contentContainer">
        <Headline />
      </div>
      <div className="About boxStyle">
        <MarkdownComponent
          fileName="/content/about/about.md"
        />
      </div>
    </div>
  )
}

export default About;
