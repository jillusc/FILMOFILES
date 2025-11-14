export interface Film {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  genre_ids: number[];
  vote_average: number;

  // fields that exist but prob won't be used:
  original_language: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  adult: boolean;
  video: false;
}
