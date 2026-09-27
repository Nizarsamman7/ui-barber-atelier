import type { Metadata } from "next";
export const metadata: Metadata = { title: "First visit" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"New"}</p>
      <h1>{"What happens the first time you sit down."}</h1>
      <p className="lede">{"We ask how you wear it, not how a photo wears it. Bring one picture if you have one. We will say if we can get there in one visit."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Arrive"}</h2><p>{"Five minutes early is enough. Tell us your name."}</p></article>
<article className="panel"><h2>{"Consult"}</h2><p>{"Length, neckline, beard line. We repeat it back."}</p></article>
<article className="panel"><h2>{"Cut"}</h2><p>{"You can stop us if the fringe is going too short."}</p></article>
<article className="panel"><h2>{"Finish"}</h2><p>{"You see the back. Then you pay at the chair."}</p></article>
</div>
      
      
      
    </article>
  );
}
