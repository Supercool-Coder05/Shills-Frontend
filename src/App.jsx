import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Consult from './pages/consult';
import Dashboard from './pages/dashboard';
import Support from './pages/support';
import Botlist from './pages/bot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/list" element={<Botlist />} />  
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
