import React from 'react';
import MarkdownComponent from "../global/MarkdownComponent";
import "../global/globalStyles.css";

const About: React.FC = () => {
  return (
   <div className="About boxStyle">
     <MarkdownComponent 
       fileName = "/content/about/about.md"
     />
    </div>
  )
}

export default About;
