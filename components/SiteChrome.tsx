import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <header className="bar">
        <Link className="logo" href="/">Northline</Link>
        <Link href="/book">Book</Link>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/chairs">Chairs</Link>
        <Link href="/the-shop">The shop</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/hours">Hours</Link>
        <Link href="/products">Products</Link>
        <Link href="/gift-cards">Gift cards</Link>
        <Link href="/first-visit">First visit</Link>
        <Link href="/house-rules">House rules</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/book">Book</Link>
      </nav>
      <main>{children}</main>
      <footer className="foot"><span>Northline Barbers</span><span>Haarlemmerdijk 18, Amsterdam</span></footer>
    </div>
  );
}
