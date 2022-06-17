import styled from 'styled-components';
import {useState} from 'react';
import {MovieApiQuery, MovieApiQueryFailResponse, MovieApiQuerySuccessResponse} from './query/MovieApiQuery';
import {MovieDisplay} from './components/display/MovieDisplay';
import {useMovieInputQueryParam} from './hooks/useMovieInputQueryParam';

const MovieDisplayWidgetWrapper =
        styled.div`
            background: aqua;
        `;

export function MovieDisplayWidget() {
  const input                  = useMovieInputQueryParam();
  const [response, setSuccess] = useState<MovieApiQuerySuccessResponse>();
  const [error, setError]      = useState<MovieApiQueryFailResponse>();
  const data                   = response?.data;
  return (
    <MovieDisplayWidgetWrapper>
      <MovieApiQuery input={input} onError={setError} onSuccess={setSuccess}/>
      <MovieDisplay data={data}/>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </MovieDisplayWidgetWrapper>
  );
}