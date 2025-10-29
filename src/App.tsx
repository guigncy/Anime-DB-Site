import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TopPage from './pages/TopPage';
import SearchPage from './pages/SearchPage';
import './App.scss';

export default function App() {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setRoute(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {route === 'home' && <HomePage />}
        {route === 'top' && <TopPage />}
        {route === 'search' && <SearchPage />}
      </main>
      <Footer />
    </div>
  );
}
