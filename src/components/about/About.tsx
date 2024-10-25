import React from 'react';
import MarkdownComponent from "../global/MarkdownComponent";
import "../global/styles.css";

const About: React.FC = () => {
  return (
   <div className="About boxStyle">
     <MarkdownComponent 
       fileName = "/content/home/about.md"
     />
    </div>
  )
}

export default About;
