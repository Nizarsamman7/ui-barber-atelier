import type { Metadata } from "next";
export const metadata: Metadata = { title: "Products" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Shelf"}</p>
      <h1>{"A short shelf. We only sell what we use."}</h1>
      <p className="lede">{"Nothing is pushed at the chair. If you want the jar, it is by the till."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Clay"}</b><span>{"€16"}</span></div>
<div className="row"><b>{"Sea salt spray"}</b><span>{"€14"}</span></div>
<div className="row"><b>{"Beard oil"}</b><span>{"€18"}</span></div>
<div className="row"><b>{"Shave cream"}</b><span>{"€12"}</span></div>
</div>
      
      
    </article>
  );
}
