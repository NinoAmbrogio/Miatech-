import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Layout';
import './Style/MainStyle.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />       
          <Route path="About" element={<About />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;