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
    margin: 0 auto;

    header {
        width: 100%;
        margin-bottom: .5rem;

        h2 {
            background: rgba(0, 0, 0, .05);
            margin: 0;
            margin-bottom: .5rem;
            padding: 1rem;
            border-bottom: thin solid green;
            position: relative;
            color: #eee;
            font-weight: normal;

            font-size: 2rem;
            text-align: left;
            @media screen and (max-width: 780px) {
                text-align: center;
                flex-direction: row;
            }
        }
    }

    ul {
        padding: 0;
    }
    li {
        list-style: none;
    }
    > section {
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        justify-content: center;
        > div {
            display: flex;
            justify-content: flex-start;
            &.quick-stats-wrapper {
                flex-direction: column;
                > *:nth-child(2) {
                    flex-basis: 100%;
                }
                @media screen and (max-width: 780px) {
                    flex-direction: row;
                }
            }
            &.cultural-detail-wrapper {
                align-items: flex-start;
                @media screen and (max-width: 780px) {
                    flex-direction: column;
                }
            }
            &.staff-wrapper {
                display: flex;
                flex-direction: column;
                @media screen and (max-width: 780px) {
                    flex-flow: row wrap;
                    justify-content: center;
                }
            }
            .ratings {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                li {
                    background: transparent;
                }
            }
            > section {
                margin: 0 1rem 1rem;
                border: thin solid #282c34;
                h3 {
                    margin: 0;
                    padding: .5rem;
                }
                @media screen and (max-width: 780px) {
                    margin: 0 .25rem .25rem;
                    padding: 1rem;
                }
                header {
                    background: rgba(255, 255, 255, 1);
                }
                ul {
                    display: flex;
                    justify-content: center;
                    @media screen and (max-width: 780px) {
                        flex-direction: column;
                    }
                }
                li {
                    padding: .5rem 1rem;
                    background: #282c34;
                    border: thin solid #eee;
                    color: white;
                    font-weight: bold;
                    margin: 0 .5rem;
                    @media screen and (max-width: 780px) {
                        margin: .5rem 0;
                        &:first-child { margin-top: 0; }
                        &:last-child { margin-bottom: 0; }
                    }
                }
            }
        }
    }
`;

export default function Body() {
  const data                                                          = useMovieContext();
  const {actors, country, genres, directors, language, writers, type} = data;

  return (
    <MovieDetailWrapper>
      <header>
        <h2>About the {type}</h2>
      </header>
      <section>
        <div className="quick-stats-wrapper">
          <Genres genres={genres}/>
          <Ratings ratings={data.ratings}/>
        </div>
        <div className="staff-wrapper">
          <Directors directors={directors}/>
          <Actors actors={actors}/>
          <Writers writers={writers}/>
        </div>
        <div className="cultural-detail-wrapper">
          <Languages languages={language}/>
          <Countries countries={country}/>
        </div>
      </section>
    </MovieDetailWrapper>
  );
}