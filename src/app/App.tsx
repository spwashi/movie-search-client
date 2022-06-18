import React from 'react';
import './styles/App.scss';
import {MovieDisplayWidget} from './features/movie-search/MovieDisplayWidget';
import {AppHeader} from './components/header/AppHeader';

function App() {
  return (
    <React.Fragment>
      <AppHeader/>
      <main>
        <MovieDisplayWidget/>
      </main>
    </React.Fragment>
  );
}

export default App;
