import styled from 'styled-components';
import React, {useState} from 'react';
import {MovieApiQuery, MovieApiQueryFailResponse, MovieApiQuerySuccessResponse} from './query/MovieApiQuery';
import {MovieDisplay} from './components/display/MovieDisplay';
import {useMovieInput} from './hooks/useMovieInput';
import {MovieSearchBar} from './components/search/MovieSearchBar';
import {MovieSearchErrorDisplay} from './components/error/MovieSearchErrorDisplay';

const MovieDisplayWidgetWrapper =
        styled.div`
            background: var(--color-1);
            flex-basis: 100%;
        `;

export function MovieDisplayWidget() {
  const input                  = useMovieInput();
  const [response, setSuccess] = useState<MovieApiQuerySuccessResponse>();
  const [error, setError]      = useState<MovieApiQueryFailResponse>();
  const data                   = response?.data;
  return (
    <MovieDisplayWidgetWrapper className={(data ? 'search-mode' : 'display-mode') + ' movie-display-widget'}>
      <MovieApiQuery input={input} onError={setError} onSuccess={setSuccess}/>
      {error && <MovieSearchErrorDisplay error={error}/>}
      {(error || !data) && <MovieSearchBar active={error ? true : undefined}/>}
      <MovieDisplay data={data}/>
    </MovieDisplayWidgetWrapper>
  );
}