interface LanguagesParams {languages: string[];}

export default function Languages({languages}: LanguagesParams) {
  if (!languages.filter(l => l !== 'N/A').length) return null;

  return (
    <section>
      <header><h3>Languages</h3></header>
      <ul className="languages">
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
    </section>
  );
}