import { useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import { Anime, API_BASE } from '../types';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    
    setLoading(true);
    fetch(`${API_BASE}/anime?q=${query}&limit=12`)
      .then(res => res.json())
      .then(data => {
        setAnimes(data.data);
        setLoading(false);
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Buscar Animes</h2>
      <div className="mb-4">
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Digite o nome do anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
      
      {loading && (
        <div className="text-center">
          <h3>Carregando...</h3>
        </div>
      )}
      
      <div className="row">
        {animes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
