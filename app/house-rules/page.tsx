import type { Metadata } from "next";
export const metadata: Metadata = { title: "House rules" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Shop"}</p>
      <h1>{"A few things that keep the room calm."}</h1>
      <p className="lede">{"We would rather say them here than at the chair."}</p>
      <p>{"Phones on silent. One drink from our filter pot, not a takeaway meal."}</p>
<p>{"Children are welcome for a cut. They are not a waiting room for a long adult appointment."}</p>
<p>{"If you are more than 15 minutes late, the chair may have moved on. Call and we will try to fit you later."}</p>
      
      
      
      
    </article>
  );
}
