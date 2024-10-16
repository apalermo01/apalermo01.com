import React from 'react';
import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Nav from "./components/Nav"


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
