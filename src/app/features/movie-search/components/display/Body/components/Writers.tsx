interface WritersParams {writers: string[];}

export default function Writers({writers}: WritersParams) {
  if (!writers.filter(l => l !== 'N/A').length) return null;

  return (
    <section className="category">
      <header><h3>Writers</h3></header>
      <ul className="writers">
        {writers.map(writer => <li key={writer}>{writer}</li>)}
      </ul>
    </section>
  );
}