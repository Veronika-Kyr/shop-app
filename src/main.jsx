import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Advice from './components/Advice.jsx';
import Table from './components/Table.jsx';
import Consultation from './components/Consultation.jsx';
import Registration from './components/Registration.jsx';
import App from './App.jsx'
import server from './server.js';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<Navigate to="/about" replace />} />
        <Route path='about' element={<About />} />
        <Route path='consultation' element={<Consultation />} />
        <Route path='contact' element={<Contact />} />
        <Route path='plant' element={<Table />} />
        <Route path='advice' element={<Advice />} />
        <Route path='registration' element={<Registration />} />

      </Route>

    </Routes>

  </BrowserRouter>,
);

server();
