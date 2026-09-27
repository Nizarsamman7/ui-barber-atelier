import Link from "next/link";

const cuts = [
  ["Skin fade", "30"],
  ["Scissor cut", "28"],
  ["Beard sculpt", "18"],
  ["Cut and beard", "42"],
  ["Hot towel shave", "35"],
  ["Kids cut", "22"],
];

const chairs = [
  ["A.", "Amina", "Fades and clipper work"],
  ["J.", "Jonas", "Scissor cuts"],
  ["L.", "Leila", "Beards and shaves"],
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="bar">
        <span>Northline</span>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#chairs">Chairs</a>
          <Link href="/book">Book</Link>
        </nav>
      </header>
      <section className="hero">
        <div>
          <p className="eyebrow">Two chairs · Jordaan</p>
          <h1>Cut.<br />Shave.<br />Stay.</h1>
        </div>
        <div className="aside">
          <p>Walk-ins until the book fills. Tue–Fri 10–19, Sat 09–17. No franchise script, no upsell card.</p>
          <p>Haarlemmerdijk 18, Amsterdam</p>
        </div>
      </section>
      <section className="menu" id="menu">
        <h2>The card</h2>
        {cuts.map(([name, price]) => (
          <div className="row" key={name}>
            <b>{name}</b>
            <span className="price">€{price}</span>
          </div>
        ))}
      </section>
      <section className="chairs" id="chairs">
        {chairs.map(([mark, name, text]) => (
          <article className="chair" key={name}>
            <span className="mark">{mark}</span>
            <strong>{name}</strong>
            <span>{text}</span>
          </article>
        ))}
      </section>
      <footer className="foot">
        <span>Northline Barbers</span>
        <span>Book online or walk in</span>
      </footer>
    </div>
  );
}
