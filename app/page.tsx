import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProgramCard from '@/components/ProgramCard'
import Link from 'next/link'
import { programs } from '@/lib/programs'

export default function Home() {
  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap">

        {/* HERO */}
        <section style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#1A1818', position: 'relative', overflow: 'hidden' }}>
          {/* Seam watermark */}
          <svg style={{ position: 'absolute', right: '-5%', top: '5%', width: '55%', opacity: 0.05 }} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="195" fill="none" stroke="white" strokeWidth="8"/>
            <path d="M200 5 Q260 80 260 200 Q260 320 200 395" fill="none" stroke="white" strokeWidth="6"/>
            <path d="M200 5 Q140 80 140 200 Q140 320 200 395" fill="none" stroke="white" strokeWidth="6"/>
            <path d="M220 12 Q235 50 230 80" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M237 22 Q250 58 244 88" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M180 12 Q165 50 170 80" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M163 22 Q150 58 156 88" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <div style={{ position: 'relative', zIndex: 2, padding: '0 3rem' }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.72rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: '2.5rem', height: '1px', background: '#C8102E' }}></span>
              Elite Hitting Development
            </p>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4.5rem,10vw,9rem)', lineHeight: 0.92, letterSpacing: '0.02em', color: '#F2EDE4', marginBottom: '1.4rem' }}>
              Stop Guessing.<br />Start <span style={{ color: '#C8102E' }}>Hitting.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'rgba(242,237,228,0.55)', maxWidth: '36rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Data-driven programs by <strong style={{ color: '#F2EDE4', fontWeight: 500 }}>Joseph Kummick</strong> — B.S. Sports Performance, Former D2 player. Built to increase exit velo, power, and consistency.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
              <Link href="/programs" className="btn-primary">View All Programs</Link>
              <Link href="/about" className="btn-ghost" style={{ color: 'rgba(255,255,255,0.45)', borderColor: 'rgba(255,255,255,0.15)' }}>Meet the Coach</Link>
            </div>
            <div style={{ display: 'flex', gap: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { num: '38', sup: 'K+', label: 'Athletes Following' },
                { num: '6', sup: '', label: 'Programs Available' },
                { num: 'D', sup: '2', label: 'Former Player' },
                { num: '5.', sup: '0', label: 'Star Rating' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#F2EDE4', lineHeight: 1 }}>
                    {s.num}<span style={{ color: '#C8102E' }}>{s.sup}</span>
                  </span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DISCOUNT STRIP */}
        <div className="discount-strip">
          <p><span>🎁 Included with every program:</span> Lifetime 25% off Marucci + Victus — the gear the pros use.</p>
        </div>

        {/* PROGRAMS PREVIEW */}
        <section style={{ background: '#F5F2ED', paddingTop: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <p className="section-tag">Training programs</p>
              <h2 className="section-title">Choose Your <em>Path</em></h2>
            </div>
            <Link href="/programs" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mid)', textDecoration: 'none' }}>
              See all →
            </Link>
          </div>
          <div className="programs-grid">
            {programs.map(p => <ProgramCard key={p.id} program={p} />)}
          </div>
        </section>

        {/* TESTIMONIAL PULL QUOTE */}
        <section style={{ background: '#FFFFFF', textAlign: 'center' }}>
          <p className="section-tag" style={{ justifyContent: 'center' }}><span></span>Real results</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--dark)', marginBottom: '1rem' }}>
            "Point Park just offered me <em style={{ color: '#C8102E', fontStyle: 'normal' }}>$27K/year.</em>"
          </h2>
          <p style={{ color: 'var(--mid)', fontWeight: 300, maxWidth: '30rem', margin: '0 auto 2rem' }}>
            So happy I started working with you dude. Seriously bro you're the man.
          </p>
          <Link href="/results" className="btn-dark">See More Results</Link>
        </section>

      </div>
      <Footer />
    </>
  )
}
