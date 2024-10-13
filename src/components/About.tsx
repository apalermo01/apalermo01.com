import React from 'react';
import MarkdownComponent from "./MarkdownComponent";
import "./styles.css";

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
