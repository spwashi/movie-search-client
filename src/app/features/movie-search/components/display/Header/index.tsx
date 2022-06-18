import styled from 'styled-components';
import {RunTime} from './components/RunTime';
import {CardImage} from './components/CardImage';
import {Heading} from './components/Heading';


const MovieHeader =
        styled.header`
            display: flex;
            flex-basis: 33%;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding: 3rem 3rem;
            border-right: thin solid var(--color-3);

            @media screen and (max-width: 780px) {
                border-right: none;
                flex-basis: auto;
                padding: 0
            }
        `;
export default function Header() {
  return (
    <MovieHeader>
      <Heading/>
      <CardImage/>
      <RunTime/>
    </MovieHeader>
  );
}