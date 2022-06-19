import React from 'react';
import {MovieSearchBar} from '../../features/movie-search/components/search/MovieSearchBar';
import styled from 'styled-components';
import {AccessibilityMenu} from '../../features/accessibility';


const HeaderWrapper =
        styled.header`
        `;

export function AppHeader() {
  return (
    <HeaderWrapper>
      <a href="/">
        <img src="/logo512.png" className="logo" alt="logo"/>
      </a>
      <AccessibilityMenu/>
      <MovieSearchBar location="header"/>
    </HeaderWrapper>
  );
}