import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Layout';
import './Style/MainStyle.css';
import TodoDetails from './Pages/TodoDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="todo/:id" element={<TodoDetails />} />
          <Route index element={<Home />} />       
          <Route path="About" element={<About />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;