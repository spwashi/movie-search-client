import styled from 'styled-components';
import {useMovieContext} from '../../../../context/MovieContext';

const MovieImageWrapper =
        styled.figure`
            display: inline-flex;
            flex-direction: column;
            margin: 0;
            max-width: 30rem;
            border: 3px solid hsl(300, 2%, 70%);
            @media screen and (max-width: 780px) {
                max-width: min(30rem, 85%);
            }

            path {
                stroke: #282c34;
                fill: url(#gradient);
            }

            figcaption {
                text-align: center;
                display: inline;
                padding: 1rem;
                background: ghostwhite;
                line-height: 1.3rem;
            }
        `
function randomColor() {
  return '#' + Array.from(Array(6)).map(() => [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',
  ][Math.floor(Math.random() * 16)]).join('');
}
export function CardImage() {
  const data      = useMovieContext();
  return (
    <MovieImageWrapper>
      {data.poster === 'N/A'
       ? (
         <div>
           <svg viewBox="0 0 500 150" preserveAspectRatio="none">
             <path d="M0.00,49.98 C216.98,182.06 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"/>
             <defs>
               <linearGradient id="gradient">
                 <stop offset="5%" stopColor={randomColor()}/>
                 <stop offset="95%" stopColor={randomColor()}/>
               </linearGradient>
             </defs>
           </svg>
         </div>
       )
       : <img src={data.poster} alt={data.title}/>}
      <figcaption className="plot">{data.plot}</figcaption>
    </MovieImageWrapper>
  );
}