import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopAnimes from './pages/TopAnimes';
import SearchAnime from './pages/SearchAnime';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-animes" element={<TopAnimes />} />
        <Route path="/search" element={<SearchAnime />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
