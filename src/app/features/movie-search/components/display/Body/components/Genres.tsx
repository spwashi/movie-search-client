interface GenresParams {genres: string[];}

export default function Genres({genres}: GenresParams) {
  if (!genres.filter(l => l !== 'N/A').length) return null;

  return (
    <section className="category">
      <header><h3>Genres</h3></header>
      <ul className="genres">
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </section>
  );
}