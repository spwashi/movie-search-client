import Directors from './components/Directors';
import {useMovieContext} from '../../../context/MovieContext';
import Actors from './components/Actors';
import Languages from './components/Language';
import Countries from './components/Countries';
import Writers from './components/Writers';
import Ratings from './components/Ratings';
import styled from 'styled-components';
import Genres from './components/Genres';


const MovieDetailWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0 3rem;
    @media screen and (max-width: 780px) {
        margin: 0 auto;
    }
    > header {
        width: 100%;
        margin-bottom: .5rem;

        h2 {
            margin: 0 0 .5rem;
            padding: 1rem;
            border-bottom: thin solid var(--color-3);
            position: relative;
            color: var(--color-2);
            font-weight: normal;
            font-size: 2rem;
            text-align: left;
            @media screen and (max-width: 780px) {
                text-align: center;
                flex-direction: row;
            }
        }
    }
    section.body {
        display: flex;
        flex-flow: row;
        align-items: stretch;
        justify-content: center;
        @media screen and (max-width: 1200px) {
            flex-flow: column wrap;
        }
        > .category-wrapper {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            @media screen and (max-width: 780px) {
                justify-content: center;
            }
        }
    }

    section.category {
        margin: 0 1rem 1rem;
        border: thin solid var(--color-1);

        @media screen and (max-width: 780px) {
            margin: 0 .25rem .25rem;
            padding: 1rem;
        }
        header {
            border-bottom: thin solid var(--color-3);
            @media screen and (max-width: 780px) {
                width: 80vw;
                display: flex;
                justify-content: center;
                align-content: flex-start;
                margin: 0 auto;
            }
            h3 {
                color: var(--color-2);
                margin: 0;
                padding: .5rem;
            }
        }
        ul {
            padding: 0;
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
            @media screen and (max-width: 780px) {
                flex-flow: row wrap;
                align-items: flex-start;
                justify-content: center;
            }
        }
        li {
            padding: .5rem 1rem;
            background: var(--color-1);
            border: thin solid var(--color-3);
            color: var(--color-2);
            font-weight: bold;
            margin: .5rem;
            list-style: none;
            @media screen and (max-width: 780px) {
                margin: .5rem;
            }
        }
    }
`;

export default function Body() {
  const {actors, country, genres, ratings, directors, language, writers, type} = useMovieContext();

  return (
    <MovieDetailWrapper>
      <header>
        <h2>About the {type}</h2>
      </header>
      <section className="body">
        <div className="category-wrapper">
          <Genres genres={genres}/>
          <Ratings ratings={ratings}/>
          <Languages languages={language}/>
          <Countries countries={country}/>
        </div>
        <div className="category-wrapper">
          <Directors directors={directors}/>
          <Actors actors={actors}/>
          <Writers writers={writers}/>
        </div>
      </section>
    </MovieDetailWrapper>
  );
}