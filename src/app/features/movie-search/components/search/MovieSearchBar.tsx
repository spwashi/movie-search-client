import React, {useRef, useState} from 'react';
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
                border: thin solid var(--color-3);
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
            position: relative;
            input {
                opacity: 1;
                transition: opacity .3s;
                font-size: 2rem;
                padding: .5em;
                header .search-wrapper:not(:focus-within) & {
                    opacity: 0;
                }
                @media screen and (max-width: 780px) {
                    font-size: 1rem;
                    flex-flow: column wrap;
                }
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
                header .search-wrapper:not(:focus-within) & {
                    position: absolute;
                    right: 0;
                }
                color: var(--color-2);
                padding: .5em;
            }
        `;

const SearchButton =
        styled.button`
            font-size: 1rem;
            background: transparent;
            padding: .25rem;
            margin-top: 2rem;
            position: relative;
            span {
                position: absolute;
                visibility: hidden;
            }
            i {
                color: var(--color-2);
                font-size: 2rem;
            }
            header & {
                margin: 0 1rem 0;
            }
        `;

type Created = { active?: boolean, location?: 'body' | 'header' };
export function MovieSearchBar({active, location = 'body'}: Created) {
  const input             = useMovieInput();
  const [state, setState] = useState(input);
  const isFullMode        = location === 'body';
  active                  = active || (isFullMode !== !!input);
  const inputIsUnchanged  = input === state;
  const inputRef          = useRef<HTMLInputElement | null>(null);
  return (
    <MovieSearchWrapper className={'search-wrapper ' + (active ? 'active' : 'inactive')}>
      <form action={'/'}>
        <InputWrapper>
          <label htmlFor="movie-search">Search</label>
          <input
            autoFocus={active && !state.length}
            name="q"
            ref={inputRef}
            id="movie-search"
            type="search"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </InputWrapper>
        <SearchButton
          disabled={isFullMode ? inputIsUnchanged : false}
          type={inputIsUnchanged ? 'button' : 'submit'}
          onClick={() => {inputRef.current?.focus()}}
        >
          <span>search</span>
          <i className="fa fa-search"/>
        </SearchButton>
      </form>
    </MovieSearchWrapper>
  );
}