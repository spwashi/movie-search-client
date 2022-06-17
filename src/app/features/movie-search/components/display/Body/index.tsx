import Directors from './Directors';
import Genres from './Genres';
import {useMovieContext} from '../../../context/MovieContext';

export default function Body() {
  const data = useMovieContext();
  return (
    <section>
      <header>
        <h2>About the {data.type}</h2>
      </header>
      <div>
        <Directors directors={data.directors}/>
        <Genres genres={data.genres}/>
      </div>
    </section>
  );
}