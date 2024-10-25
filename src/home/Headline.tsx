import React from 'react';
import MarkdownComponent  from "../global/MarkdownComponent";

const Headline: React.FC = () => {
  return (
  <div className="headlineContainer boxStyle">

    <img src={require("../assets/headshot_202105.jpg")}
         className="headshot"
         alt="headshot"
    />

    <div className="headline">
      <MarkdownComponent 
        fileName = "/content/home/headline.md"
      />
    </div>
  </div>
  )
}

export default Headline;
