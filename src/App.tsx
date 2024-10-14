import React from 'react';
import './App.css';
import Home from './pages/Home'
import Nav from "./components/Nav"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



const App: React.FC = () => {
  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
