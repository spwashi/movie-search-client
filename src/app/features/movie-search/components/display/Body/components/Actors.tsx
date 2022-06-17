interface ActorsParams {actors: string[];}

export default function Actors({actors}: ActorsParams) {
  if (!actors.filter(l => l !== 'N/A').length) return null;

  return (
    <section>
      <header><h3>Actors</h3></header>
      <ul className="actors">
        {actors.map(actor => <li key={actor}>{actor}</li>)}
      </ul>
    </section>
  );
}