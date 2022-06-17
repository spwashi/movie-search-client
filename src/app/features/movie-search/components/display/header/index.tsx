import {useMemo} from 'react';
import {useMovieContext} from '../../../context/MovieContext';

export default function Header() {
  const data = useMovieContext();
  const date = useMemo(() => new Date(data.released), [data.released]);
  const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  return (
    <header>
      <div>
        <div className="title"><h1>{data.title}</h1></div>
        <time dateTime={time} className="date">{date.toLocaleDateString()}</time>
      </div>
      <img src={data.poster} alt={data.title}/>
      <p className="plot">{data.plot}</p>
    </header>
  );
}