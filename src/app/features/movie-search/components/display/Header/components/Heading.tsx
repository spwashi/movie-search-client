import {useMovieContext} from '../../../../context/MovieContext';
import {ReleaseDate} from './ReleaseDate';
import styled from 'styled-components';

const MovieHeading =
        styled.div`
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            .title {
                padding: 1rem 1rem 1.5rem;
            }
            h1 {
                margin: 0 0 2rem;
                font-weight: normal;
                padding: .5rem 1rem .5rem;
                color: var(--color-2);
                font-size: 3rem;
                border-bottom: thin solid var(--color-3);
                text-align: center;
            }

        `;
export function Heading() {
  const data = useMovieContext();
  return (
    <MovieHeading>
      <div className="title"><h1>{data.title}</h1></div>
      <ReleaseDate released={data.released}/>
    </MovieHeading>
  );
}