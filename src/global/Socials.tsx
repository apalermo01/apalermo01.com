import React from 'react';

const Socials: React.FC = () => {
  return (
    <div className="socialContainer boxStyle">
      <a href="https://github.com/apalermo01" target="_blank" rel="noreferrer">
        <img src={require("../assets/github-mark-white.svg").default}
          className="socials"
          alt="github link" />
      </a>

      <a href="https://www.linkedin.com/in/apalermo01/" target="_blank" rel="noreferrer">
        <img src={require("../assets/In-Blue-128.png")}
          className="socials"
          alt="github link" />
      </a>
    </div>
  )
}

export default Socials;
