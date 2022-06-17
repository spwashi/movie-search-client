interface DirectorsParams {directors: string[];}

export default function Directors({directors}: DirectorsParams) {
  if (!directors.filter(l => l !== 'N/A').length) return null;
  return (
    <section>
      <header><h3>Directors</h3></header>
      <ul className="directors">
        {directors.map(director => <li key={director}>{director}</li>)}
      </ul>
    </section>
  );
}