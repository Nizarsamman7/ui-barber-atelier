import type { Metadata } from "next";
export const metadata: Metadata = { title: "The shop" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Room"}</p>
      <h1>{"Two chairs, one bench, no TV."}</h1>
      <p className="lede">{"Northline is a ground-floor shop on Haarlemmerdijk. You can wait inside. Coffee is filter, not a menu."}</p>
      <p>{"There is space for a pushchair by the door and a hook for a coat. We do not take groups larger than three at once."}</p>
<p>{"The shop is one step up from the street. Call ahead if you need the side entrance."}</p>
      
      
      
      
    </article>
  );
}
