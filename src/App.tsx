import React from 'react';
import Home from './home/Home'
import Projects from './projects/Projects'
import Nav from "./global/Nav"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
