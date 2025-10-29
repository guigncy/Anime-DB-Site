import { Anime } from '../types';

interface AnimeCardProps {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img 
          src={anime.images.jpg.image_url} 
          className="card-img-top" 
          alt={anime.title}
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{anime.title}</h5>
          <p className="card-text">
            <strong>Nota:</strong> {anime.score || 'N/A'}<br/>
            <strong>Episódios:</strong> {anime.episodes || '?'}
          </p>
          <a 
            href={anime.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary w-100"
          >
            Ver no MyAnimeList
          </a>
        </div>
      </div>
    </div>
  );
}
