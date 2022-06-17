import React from 'react';
import './styles/App.scss';
import {MovieSearchBar} from './features/movie-search/components/search/MovieSearchBar';
import {MovieDisplayWidget} from './features/movie-search/MovieDisplayWidget';
import {AppHeader} from './components/header/AppHeader';

function App() {
  return (
    <main>
      <AppHeader/>
      <MovieSearchBar/>
      <MovieDisplayWidget/>
    </main>
  );
}

export default App;
