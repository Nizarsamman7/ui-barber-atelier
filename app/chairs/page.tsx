import type { Metadata } from "next";
export const metadata: Metadata = { title: "Chairs" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"People"}</p>
      <h1>{"Three barbers. Tell us who you want."}</h1>
      <p className="lede">{"You can request a chair when you book. Walk-ins sit with whoever is free."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Amina"}</h2><p>{"Fades, clipper work, and sharp lines. Works Tue–Sat."}</p></article>
<article className="panel"><h2>{"Jonas"}</h2><p>{"Scissor cuts and longer hair. Works Tue–Fri."}</p></article>
<article className="panel"><h2>{"Leila"}</h2><p>{"Beards, hot towels, and straight-razor shaves. Works Wed–Sat."}</p></article>
</div>
      
      
      
    </article>
  );
}
