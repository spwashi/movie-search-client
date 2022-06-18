import {MovieData} from '../../../../query/MovieApiQuery';
import styled from 'styled-components';

interface RatingsParams {ratings: MovieData['ratings'];}

const RatingSection = styled.section`
`;

const Rating = styled.div`
    width: 12rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .ratings {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
            background: transparent;
        }
    }
    meter {
        margin: 0;
        width: 100%;
    }
`;

export default function Ratings({ratings}: RatingsParams) {
  if (!ratings.length) return null;

  return (
    <RatingSection className="category">
      <header><h3>Ratings</h3></header>
      <ul className="ratings">
        {ratings.map(
          rating => {
            const value = rating.value * 100;
            const color = value > 50 ? 'green' : 'red';
            return (
              <li key={rating.source}>
                <span className="source">{rating.source}</span>
                <Rating className={'rating ' + color}>
                  <meter min={0} max={100} optimum={50} value={value}>{value}</meter>
                </Rating>
              </li>
            );
          },
        )}
      </ul>
    </RatingSection>
  );
}