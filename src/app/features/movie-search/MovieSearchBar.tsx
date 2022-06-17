import React, {useState} from 'react';
import styled from 'styled-components'
import {useQuery} from '../../useQuery';

const MovieSearchWrapper =
        styled.section`
            background: red;
            display: inline-flex;
            form {
                display: inline-flex;
                flex-direction: column;
            }
        `;

const InputWrapper =
        styled.div`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 1rem;
        `;

const SearchButton =
        styled.button`
            margin: 1rem 1rem 0;
        `;

export function useMovieInputQueryParam() {
  const {q: input} = useQuery();
  return input;
}

export function MovieSearchBar() {
  const [state, setState] = useState(useMovieInputQueryParam());
  return (
    <MovieSearchWrapper id="movie-search">
      <form action="/">
        <InputWrapper>
          <label htmlFor="movie-search">Search</label>
          <input
            name="q"
            id="movie-search"
            type="search"
            tabIndex={1}
            value={state}
            onChange={e => setState(e.target.value)}
            onFocus={e => e.target.tabIndex = 0}
          />
        </InputWrapper>
        <SearchButton>search</SearchButton>
      </form>
    </MovieSearchWrapper>
  );
}