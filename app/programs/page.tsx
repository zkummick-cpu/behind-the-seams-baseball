import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProgramCard from '@/components/ProgramCard'
import Link from 'next/link'
import { programs } from '@/lib/programs'

export const metadata = { title: 'Programs | Behind the Seams Baseball' }

export default function Programs() {
  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap">
        <div style={{ padding: '5rem 3rem 3rem', background: '#1A1818', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.72rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: '#C8102E' }}></span>
            Training Programs
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem,7vw,6rem)', lineHeight: 0.92, color: '#F2EDE4' }}>
            Choose Your <span style={{ color: '#C8102E' }}>Path</span>
          </h1>
          <p style={{ color: 'rgba(242,237,228,0.5)', fontWeight: 300, maxWidth: '36rem', marginTop: '1rem' }}>
            Six programs built for serious athletes at every stage. Every single one comes with a lifetime 25% discount on Marucci + Victus.
          </p>
        </div>

        <div className="discount-strip">
          <p><span>🎁 Included with every program:</span> Lifetime 25% off Marucci + Victus equipment.</p>
        </div>

        <section style={{ background: '#F5F2ED' }}>
          <div className="programs-grid">
            {programs.map(p => <ProgramCard key={p.id} program={p} />)}
          </div>
        </section>

        <section style={{ background: '#FFFFFF', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
            Not sure which program is right?
          </p>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', color: 'var(--dark)', marginBottom: '1.5rem' }}>
            Talk to <span style={{ color: '#C8102E' }}>Joseph</span> Directly
          </h3>
          <Link href="/contact" className="btn-primary">Send a Message</Link>
        </section>
      </div>
      <Footer />
    </>
  )
}
