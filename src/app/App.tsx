import React from 'react';
import './styles/App.scss';
import {MovieSearchBar} from './features/movie-search/MovieSearchBar';
import {MovieDisplay} from './features/movie-search/MovieDisplay';
import {AppHeader} from './components/header/AppHeader';

function App() {
  return (
    <main>
      <AppHeader/>
      <MovieSearchBar/>
      <MovieDisplay/>
    </main>
  );
}

export default App;
