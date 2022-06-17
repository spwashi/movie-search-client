import {MovieData} from '../../../query/MovieApiQuery';
import {useMemo} from 'react';

export function ReleaseDate(data: { released: MovieData['released'] }) {
  const date = useMemo(() => new Date(data.released), [data.released]);
  const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  let year   = date.getFullYear();
  let month  = date.getMonth();
  let day    = date.getDate();
  return (
    <time dateTime={time} className="date">
      {year && <div data-value={year} className="year">{year}</div>}
      {month && <div data-value={month} className="month">{month}</div>}
      {day && <div data-value={day} className="day">{day}</div>}
    </time>
  );
}