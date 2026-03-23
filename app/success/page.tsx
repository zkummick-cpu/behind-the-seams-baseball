import Link from 'next/link'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = { title: 'Purchase Complete | Behind the Seams Baseball' }

export default function Success() {
  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap">
        <section style={{ background: '#F5F2ED', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '4rem', maxWidth: '540px', width: '100%', textAlign: 'center' }}>
            <div style={{ width: '4rem', height: '4rem', background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1 }}>
              You're In.
            </h1>
            <p style={{ color: 'var(--mid)', fontWeight: 300, lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Payment confirmed. Check your email — you'll get a welcome message with everything you need to access your program.
            </p>
            <p style={{ color: 'var(--mid)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2rem' }}>
              Create your account using the <strong style={{ color: 'var(--dark)' }}>same email you purchased with</strong> so your programs are linked automatically.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/sign-up" className="btn-primary" style={{ textAlign: 'center' }}>Create Your Account</Link>
              <Link href="/dashboard" className="btn-ghost" style={{ textAlign: 'center' }}>Go to Dashboard</Link>
            </div>
            <p style={{ marginTop: '2rem', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Questions? DM @behind.the.seams.baseball
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
