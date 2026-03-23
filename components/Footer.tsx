import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo">
        <span className="top">Behind the Seams</span>
        <span className="sub">Baseball</span>
      </Link>
      <span className="footer-copy">© 2026 Behind the Seams Baseball · Joseph Kummick</span>
      <div className="footer-links">
        <a href="https://www.instagram.com/behind.the.seams.baseball/" target="_blank" rel="noreferrer">Instagram</a>
        <Link href="/programs">Programs</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  )
}
