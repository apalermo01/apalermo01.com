import React from 'react';
import MarkdownComponent  from "./components/MarkdownComponent";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="Test">
    <MarkdownComponent 
      fileName = "/content/home.md"
      sectionName = "Headline"
      delimiter = "h1"
    />
    </div>
  )
}

export default App;
