export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  score: number;
  episodes: number;
  url: string;
}

export const API_BASE = 'https://api.jikan.moe/v4';