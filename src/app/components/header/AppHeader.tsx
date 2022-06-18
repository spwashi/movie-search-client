import logo from '../../../assets/ABR-Logo-Horizontal.png';
import React from 'react';
import {MovieSearchBar} from '../../features/movie-search/components/search/MovieSearchBar';
import styled from 'styled-components';
import {AccessibilityMenu} from './features/accessibility';


const HeaderWrapper =
        styled.header`
        `;

export function AppHeader() {
  return (
    <HeaderWrapper>
      <a href="https://theabr.org" title="The American Board of Radiology">
        <img src={logo} className="logo" alt="ABR logo"/>
      </a>
      <AccessibilityMenu/>
      <MovieSearchBar location="header"/>
    </HeaderWrapper>
  );
}