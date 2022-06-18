interface CountriesParams {countries: string[];}

export default function Countries({countries}: CountriesParams) {
  if (!countries.filter(l => l !== 'N/A').length) return null;

  return (
    <section className="category">
      <header><h3>Countries</h3></header>
      <ul className="countries">
        {countries.map(country => <li key={country}>{country}</li>)}
      </ul>
    </section>
  );
}