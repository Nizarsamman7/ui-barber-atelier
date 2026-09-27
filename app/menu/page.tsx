import type { Metadata } from "next";
export const metadata: Metadata = { title: "Menu" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"The card"}</p>
      <h1>{"Cuts, shaves, and how long they take."}</h1>
      <p className="lede">{"Prices include a cut and a proper finish. Ask if you want it shorter on the sides than last time."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Skin fade"}</b><span>{"€30 · 40 min"}</span></div>
<div className="row"><b>{"Scissor cut"}</b><span>{"€28 · 45 min"}</span></div>
<div className="row"><b>{"Beard sculpt"}</b><span>{"€18 · 20 min"}</span></div>
<div className="row"><b>{"Cut and beard"}</b><span>{"€42 · 60 min"}</span></div>
<div className="row"><b>{"Hot towel shave"}</b><span>{"€35 · 35 min"}</span></div>
<div className="row"><b>{"Kids cut"}</b><span>{"€22 · 25 min"}</span></div>
<div className="row"><b>{"Neck tidy between cuts"}</b><span>{"€12 · 15 min"}</span></div>
</div>
      
      
    </article>
  );
}
