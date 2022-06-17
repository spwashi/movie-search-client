import {useEffect} from 'react';

export type MovieApiQueryResponse = {
  data: {
    title: string;
    year: number;
    runtime: string;
    rated: string;
    genres: string[];
    directors: string[];
    writers: string[];
    actors: string[];
    plot: string;
    language: string[];
    awards: string;
    poster: string;
    ratings: { source: string; value: number; };
    metascore: number;
    imdbRating: number;
    imdbVotes: number;
    imdbID: string;
    type: string;
    dvd: string;
    boxOffice: string;
    cached?: number;
  }
};

interface MovieApiQueryParams {
  input: string;

  onSuccess: (response: MovieApiQueryResponse) => void;
  onError: (error: any) => void;
}

export function MovieApiQuery({input, onError, onSuccess}: MovieApiQueryParams) {
  useEffect(() => {
    fetch('http://localhost:8001/api', {
      method:  'post',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify({title: input}),
    })
      .then(resp => resp.json())
      .then(onSuccess)
      .catch(onError);
  }, [input]);

  return null;
}