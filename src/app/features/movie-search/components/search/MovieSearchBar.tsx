import React, {useState} from 'react';
import styled from 'styled-components'
import {useMovieInput} from '../../hooks/useMovieInput';

const MovieSearchWrapper =
        styled.section`
            display: flex;
            top: 0;
            right: 0;
            background: transparent;
            transition: background-color .2s;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
            &:focus-within {
                background: red;
            }
            &.inactive {
                opacity: 0;
            }
            header > & {
                display: inline-flex;
                width: auto;
                height: 3rem;
                position: absolute;
            }
            form {
                display: inline-flex;
                align-items: center;
                flex-direction: column;
                header & {
                    flex-direction: row;
                    justify-content: center;
                }
            }
        `;

const InputWrapper =
        styled.div`
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 2rem;
            input {
                font-size: 2rem;
                padding: .5em;
                header & {
                    padding: .25em;
                    font-size: 1rem;
                }
            }
            header & {
                flex-direction: row;
                font-size: 1rem;
            }
            label {
                color: white;
                padding: .5em;
            }
        `;

const SearchButton =
        styled.button`
            font-size: 1rem;
            padding: .25rem;
            margin-top: 2rem;
            header & {
                margin: 0 1rem 0;
            }
        `;

export function MovieSearchBar({
                                 active,
                                 location = 'body',
                               }: { active?: boolean, location?: 'body' | 'header' }) {
  let input               = useMovieInput();
  const [state, setState] = useState(input);
  active                  = active || ((location === 'body') !== !!input);
  return (
    <MovieSearchWrapper className={active ? 'active' : 'inactive'}>
      <form action={'/'}>
        <InputWrapper>
          <label htmlFor="movie-search">Search</label>
          <input
            autoFocus={active}
            name="q"
            id="movie-search"
            type="search"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </InputWrapper>
        <SearchButton disabled={input === state}>search</SearchButton>
      </form>
    </MovieSearchWrapper>
  );
}