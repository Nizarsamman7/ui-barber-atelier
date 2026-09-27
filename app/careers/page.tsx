import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Careers" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Work"}</p>
      <h1>{"We hire slowly."}</h1>
      <p className="lede">{"A chair opens when someone leaves, not on a schedule. Write if you are already cutting and want a two-chair shop."}</p>
      <p>{"You keep your own book. The shop takes a chair rent, not a percentage of every cut. Ask for the current number."}</p>
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"email","label":"Email","type":"email"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
