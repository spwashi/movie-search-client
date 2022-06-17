import {MovieData} from '../../query/MovieApiQuery';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import {MovieContextProvider} from '../../context/MovieContext';

const MovieDisplayWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    max-width: 95vw;
    @media screen and (max-width: 780px) {
        align-items: center;
        flex-direction: column;
    }
`;

export function MovieDisplay({data}: { data?: MovieData }) {
  if (!data) return null;
  return (
    <MovieContextProvider data={data}>
      <MovieDisplayWrapper>
        <Header/>
        <Body/>
      </MovieDisplayWrapper>
    </MovieContextProvider>
  );
}