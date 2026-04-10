import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import MyList from './pages/MyList'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/tv-shows" element={<Home />} />
        <Route path="/my-list" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
