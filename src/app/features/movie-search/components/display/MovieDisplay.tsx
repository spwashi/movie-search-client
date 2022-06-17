import {MovieData} from '../../query/MovieApiQuery';
import styled from 'styled-components';
import Header from './header';
import Body from './Body';
import {MovieContextProvider} from '../../context/MovieContext';

const MovieDisplayWrapper = styled.div`
    border: thick solid rebeccapurple;
    display: flex;
`;

export function MovieDisplay({data}: { data?: MovieData }) {
  if (!data) return null;
  return (
    <MovieDisplayWrapper>
      <MovieContextProvider data={data}>
        <Header/>
        <Body/>
      </MovieContextProvider>
    </MovieDisplayWrapper>
  );
}