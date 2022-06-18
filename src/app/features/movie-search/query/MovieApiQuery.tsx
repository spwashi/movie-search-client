import {useEffect} from 'react';

export type MovieData = {
  title: string;
  year: number;
  runtime: string;
  released: string;
  rated: string;
  genres: string[];
  directors: string[];
  writers: string[];
  actors: string[];
  plot: string;
  country: string[];
  language: string[];
  awards: string;
  poster: string;
  ratings: { source: string; value: number; }[];
  metascore: number;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  type: string;
  dvd: number;
  boxOffice: string;
};

export type MovieApiQuerySuccessResponse = {
  data: MovieData;
  cached?: number;
};

export type MovieApiQueryFailResponse = { error: string };

interface MovieApiQueryParams {
  input: string;

  onSuccess: (response: MovieApiQuerySuccessResponse) => void;
  onError: (error: MovieApiQueryFailResponse) => void;
}

export function MovieApiQuery({input, onError, onSuccess}: MovieApiQueryParams) {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api`, {
      method:  'post',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify({title: input}),
    })
      .then(resp => resp.json())
      .then((o) => {
        if (o.error) {
          return onError(o);
        }
        onSuccess(o);
      })
      .catch(onError);
  }, [input]);

  return null;
}