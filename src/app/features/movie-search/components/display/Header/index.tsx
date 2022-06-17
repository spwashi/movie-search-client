import {useMemo} from 'react';
import {useMovieContext} from '../../../context/MovieContext';
import styled from 'styled-components';


const MovieHeader       =
        styled.header`
            border: thick solid yellow;
            display: flex;
            flex-direction: column;
            align-items: center;
        `;
const MovieHeading      =
        styled.div`
            border: thick solid pink;
            position: relative;
            display: flex;
            align-items: flex-start;
            .title {
                border: thick solid crimson;
            }
            h1 {
                margin: 0;
                color: white;
                text-shadow: 3px 3px rgba(40, 44, 52, .3);
                padding: .5rem 1rem .5rem;
                background: #8da2b6;
            }
            time {
                display: inline-flex;
                background: white;
                position: absolute;
                top: -1.75rem;
                right: -5%;
                height: 1rem;
                padding: .5rem;
                bottom: 0;
                border: thick solid blue;
            }
        `;
const MovieImageWrapper =
        styled.figure`
            border: thick solid rebeccapurple;
            display: inline-flex;
            flex-direction: column;
            margin: 0;
            figcaption {
                text-align: center;
                display: inline;
                max-width: 20rem;
                padding: 1rem;
                background: ghostwhite;
                font-weight: 700;
                line-height: 1.3rem;
                border: thick solid thistle;
            }
        `
export default function Header() {
  const data = useMovieContext();
  const date = useMemo(() => new Date(data.released), [data.released]);
  const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  return (
    <MovieHeader>
      <MovieHeading>
        <div className="title"><h1>{data.title}</h1></div>
        <time dateTime={time} className="date">{date.toLocaleDateString()}</time>
      </MovieHeading>
      <MovieImageWrapper>
        <img src={data.poster} alt={data.title}/>
        <figcaption className="plot">{data.plot}</figcaption>
      </MovieImageWrapper>
    </MovieHeader>
  );
}