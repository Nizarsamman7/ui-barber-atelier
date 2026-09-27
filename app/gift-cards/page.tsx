import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Gift cards" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Give"}</p>
      <h1>{"A cut, paid for already."}</h1>
      <p className="lede">{"Cards are for any service up to the amount. They last a year from the day we write them."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"€30"}</h2><p>{"One skin fade or scissor cut."}</p></article>
<article className="panel"><h2>{"€42"}</h2><p>{"Cut and beard."}</p></article>
<article className="panel"><h2>{"€70"}</h2><p>{"Two visits, or a cut and a shave."}</p></article>
</div>
      
      
      <InquiryForm submitLabel={"Ask for a card"} fields={[{"name":"name","label":"Your name"},{"name":"email","label":"Email","type":"email"},{"name":"amount","label":"Amount","type":"select","options":["€30","€42","€70"]}]} />
    </article>
  );
}
