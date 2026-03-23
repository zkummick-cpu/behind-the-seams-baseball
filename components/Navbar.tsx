'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { label: 'Programs', href: '/programs' },
    { label: 'About', href: '/about' },
    { label: 'Results', href: '/results' },
    { label: 'Contact', href: '/contact' },
  ]
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <span className="top">Behind the Seams</span>
        <span className="sub">Baseball</span>
      </Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
        <SignedIn>
          <li><Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>My Programs</Link></li>
        </SignedIn>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="btn-ghost" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)' }}>Sign In</Link>
        </SignedOut>
        <Link href="/programs" className="btn-primary">Start Training</Link>
      </div>
    </nav>
  )
}
