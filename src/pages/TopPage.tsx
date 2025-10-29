import { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard';
import { Anime, API_BASE } from '../types';

export default function TopPage() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/top/anime?limit=12`)
      .then(res => res.json())
      .then(data => {
        setAnimes(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <h3>Carregando...</h3>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Top Animes de Todos os Tempos</h2>
      <div className="row">
        {animes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}