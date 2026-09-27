import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Book" };

export default function BookPage() {
  return (
    <div className="page">
      <header className="bar">
        <Link className="logo" href="/">Northline</Link>
        <nav><Link href="/">Back</Link></nav>
      </header>
      <section className="book">
        <p className="eyebrow">Appointment</p>
        <h1>Hold a chair.</h1>
        <InquiryForm
          submitLabel="Request a time"
          fields={[
            { name: "name", label: "Name" },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "service", label: "Service", type: "select", options: ["Skin fade", "Scissor cut", "Beard sculpt", "Cut and beard", "Hot towel shave"] },
            { name: "when", label: "Preferred day", type: "text" },
          ]}
        />
      </section>
    </div>
  );
}
