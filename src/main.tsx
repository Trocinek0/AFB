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
    <Home />
    <About />
    <Maps />
    <Skins />
    <Tasks />
  </React.StrictMode>
)
