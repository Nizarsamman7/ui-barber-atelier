import type { Metadata } from "next";
export const metadata: Metadata = { title: "Gallery" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Look"}</p>
      <h1>{"Recent cuts, described instead of stock photos."}</h1>
      <p className="lede">{"Replace these panels with real photos when the shop has them. Until then the page shows the work in words."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Low skin fade"}</h2><p>{"Tight neck, longer on top, no hard line."}</p></article>
<article className="panel"><h2>{"Crop"}</h2><p>{"Textured top, scissor finish, natural fringe."}</p></article>
<article className="panel"><h2>{"Beard"}</h2><p>{"Cheeks cleaned, neckline kept soft."}</p></article>
<article className="panel"><h2>{"Shave"}</h2><p>{"Hot towel, two passes, cold rinse."}</p></article>
</div>
      
      
      
    </article>
  );
}
