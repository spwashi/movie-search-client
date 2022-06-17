import {useMovieContext} from '../../../context/MovieContext';
import styled from 'styled-components';
import {RunTime} from './components/RunTime';
import {ReleaseDate} from './components/ReleaseDate';
import {CardImage} from './components/CardImage';


const MovieHeader       =
        styled.header`
            display: flex;
            flex-basis: 33%;
            flex-direction: column;
            align-items: center;
            position: relative;
            background: thistle;
            padding: 2rem 0;
            @media screen and (max-width: 780px) {
                flex-basis: auto;
            }
        `;
const MovieHeading      =
        styled.div`
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            h1 {
                margin: 0;
                font-weight: normal;
                padding: .5rem 1rem .5rem;
                background: whitesmoke;
                font-size: 3rem;
                box-shadow: inset 0 0 1rem rgba(0, 0, 0, .3);
                border: 3px solid hsl(300, 2%, 70%);

                text-align: center;
            }
            time {
                display: inline-flex;
                background: white;
                position: absolute;
                bottom: 0;
                transform: translate(0%, 80%);
                height: 1rem;
                padding: .5rem;
                .year {
                    order: 3;
                }
                .month {
                    order: 1;
                    &:after {
                        content: '/';
                        padding: 0 .5rem;
                        opacity: 50%;
                        font-weight: bold;
                        font-size: .8em;
                    }
                }
                .day {
                    order: 2;
                    &:after {
                        opacity: 50%;
                        content: '/';
                        padding: 0 .5rem;
                        font-weight: bold;
                        font-size: .8em;
                    }
                }
            }
        `;
export default function Header() {
  const data = useMovieContext();
  return (
    <MovieHeader>
      <MovieHeading>
        <div className="title"><h1>{data.title}</h1></div>
        <ReleaseDate released={data.released}/>
      </MovieHeading>
      <CardImage/>
      <RunTime runtime={data.runtime}/>
    </MovieHeader>
  );
}