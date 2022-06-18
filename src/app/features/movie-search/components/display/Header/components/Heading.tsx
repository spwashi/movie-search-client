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
                color: whitesmoke;
                font-size: 3rem;
                border: 3px solid hsl(300, 2%, 70%);
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