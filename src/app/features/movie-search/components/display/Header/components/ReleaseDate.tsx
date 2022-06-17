import {MovieData} from '../../../../query/MovieApiQuery';
import {useMemo} from 'react';

export function ReleaseDate(data: { released: MovieData['released'] }) {
  const date  = useMemo(() => new Date(data.released), [data.released]);
  const year  = date.getFullYear();
  const month = date.getMonth();
  const day   = date.getDate();
  const time  = `${year}-${month}-${day}`;
  return (
    <time dateTime={time} className="date">
      {year > 0 && <div data-value={year} className="year">{year}</div>}
      {month > 0 && <div data-value={month} className="month">{month}</div>}
      {day > 0 && month > 0 && <div data-value={day} className="day">{day}</div>}
    </time>
  );
}