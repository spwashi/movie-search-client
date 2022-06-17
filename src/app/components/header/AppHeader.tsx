import logo from '../../../assets/ABR-Logo-Horizontal.png';
import React from 'react';
import {MovieSearchBar} from '../../features/movie-search/components/search/MovieSearchBar';
import {useMovieInput} from '../../features/movie-search/hooks/useMovieInput';
import styled from 'styled-components';


const HeaderWrapper =
        styled.header`
        `;

export function AppHeader() {
  const input = useMovieInput();
  return (
    <HeaderWrapper>
      <a href="https://theabr.org" title="The American Board of Radiology">
        <img src={logo} className="logo" alt="ABR logo"/>
      </a>
      <MovieSearchBar location="header"/>
    </HeaderWrapper>
  );
}