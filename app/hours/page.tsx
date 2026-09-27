import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hours" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Open"}</p>
      <h1>{"When the chairs are on."}</h1>
      <p className="lede">{"Last booking is 45 minutes before close. The door locks when the last cut is done, not at the minute on the sign."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Tuesday"}</b><span>{"10:00–19:00"}</span></div>
<div className="row"><b>{"Wednesday"}</b><span>{"10:00–19:00"}</span></div>
<div className="row"><b>{"Thursday"}</b><span>{"10:00–19:00"}</span></div>
<div className="row"><b>{"Friday"}</b><span>{"10:00–19:00"}</span></div>
<div className="row"><b>{"Saturday"}</b><span>{"09:00–17:00"}</span></div>
<div className="row"><b>{"Sunday and Monday"}</b><span>{"Closed"}</span></div>
</div>
      
      
    </article>
  );
}
