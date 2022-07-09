import React from 'react'
import ReactDOM from 'react-dom/client'
import './tailwind.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/index'
import Maps from './pages/Maps'
import Skins from './pages/Skins'
import Tasks from './pages/Tasks'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/AFB/" element={<Home />} />
        <Route path="/AFB/about" element={<About />} />
        <Route path="/AFB/maps" element={<Maps />} />
        <Route path="/AFB/skins" element={<Skins />} />
        <Route path="/AFB/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
