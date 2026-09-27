import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Book" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Appointment"}</p>
      <h1>{"Hold a chair."}</h1>
      <p className="lede">{"We confirm by phone the same day. This form does not charge a card."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Request a time"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"service","label":"Service","type":"select","options":["Skin fade","Scissor cut","Beard sculpt","Cut and beard","Hot towel shave"]},{"name":"when","label":"Preferred day"}]} />
    </article>
  );
}
