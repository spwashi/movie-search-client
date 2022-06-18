import {MovieData} from '../../../../query/MovieApiQuery';
import {useMemo} from 'react';
import styled from 'styled-components';

const Time = styled.time`
    display: inline-flex;
    background: #282c34;
    position: absolute;
    bottom: 0;
    transform: translate(0%, 50%);
    
    color: whitesmoke;
    font-size: 1.2rem;
    padding: .5rem;
    font-weight: bold;
    z-index: 10;
    border: 3px solid hsl(300, 2%, 70%);
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
`

export function ReleaseDate(data: { released: MovieData['released'] }) {
  const date  = useMemo(() => new Date(data.released), [data.released]);
  const year  = date.getFullYear();
  const month = date.getMonth();
  const day   = date.getDate();
  const time  = `${year}-${month}-${day}`;
  return (
    <Time dateTime={time} className="date">
      {year > 0 && <div data-value={year} className="year">{year}</div>}
      {month > 0 && <div data-value={month} className="month">{month}</div>}
      {day > 0 && month > 0 && <div data-value={day} className="day">{day}</div>}
    </Time>
  );
}