import React from 'react';
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Nav from "./components/global/Nav"
import Socials from "./components/global/Socials"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <header className='pageHeader'>
        <Nav />
        <Socials />
      </header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
