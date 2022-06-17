interface GenresParams {genres: string[];}

export default function Genres({genres}: GenresParams) {
  if (!genres.filter(l => l !== 'N/A').length) return null;

  return (
    <section>
      <label><h3>Genres</h3></label>
      <ul className="genres">
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </section>
  );
}