import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Questions"}</p>
      <h1>{"Before you walk in."}</h1>
      <p className="lede">{"If your question is not here, use the contact page."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Do you take walk-ins?"}</summary><p>{"Yes, until both chairs are full. Friday after 16:00 is usually booked."}</p></details>
<details className="panel"><summary>{"Do you cut curly hair?"}</summary><p>{"Yes. Say so when you book so we leave enough time."}</p></details>
<details className="panel"><summary>{"Card or cash?"}</summary><p>{"Both. We do not take American Express."}</p></details>
<details className="panel"><summary>{"Can I bring a friend?"}</summary><p>{"One person waiting is fine. A crowd is not."}</p></details>
</div>
      
    </article>
  );
}
