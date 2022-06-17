import styled from 'styled-components';
import {useState} from 'react';
import {useMovieInputQueryParam} from './MovieSearchBar';
import {MovieApiQuery, MovieApiQueryResponse} from './MovieApiQuery';

const MovieDisplayWrapper =
        styled.div`
            background: aqua;
        `;

export function MovieDisplay() {
  const input                  = useMovieInputQueryParam();
  const [error, setError]      = useState();
  const [response, setSuccess] = useState<MovieApiQueryResponse>();

  return (
    <MovieDisplayWrapper>
      <MovieApiQuery
        input={input}
        onError={setError}
        onSuccess={setSuccess}
      />
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </MovieDisplayWrapper>
  );
}