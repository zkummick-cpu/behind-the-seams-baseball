import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'About | Behind the Seams Baseball' }

export default function About() {
  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap">
        <section style={{ background: '#F5F2ED' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* PHOTO */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <Image
                  src="/joe.jpg"
                  alt="Joseph Kummick"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="400px"
                />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: '#C8102E', padding: '0.5rem 1rem' }}>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
                    Joseph Kummick · Head Coach
                  </p>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-1.5rem', right: '-1.5rem', width: '5rem', height: '5rem', borderTop: '2px solid #C8102E', borderRight: '2px solid #C8102E' }} />
            </div>

            {/* BODY */}
            <div>
              <p className="section-tag">About the coach</p>
              <h1 className="section-title">Built From The <em>Inside</em> Out</h1>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--mid)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                I spent years playing and studying the game at the Division II level, and what I found was that most hitting instruction is built on feel, not facts. Parents were spending thousands on lessons that didn't move the needle.
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--mid)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                So I built something different. Every program I create is grounded in <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>sports science, biomechanics, and real exit velo data</strong> — not just what looked good in the cage.
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--mid)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Whether your athlete is trying to hit .400 in high school or earn a college offer, <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>the gap between good and elite is smaller than you think</strong> — and it's measurable.
              </p>
              <div className="credentials">
                <div className="cred">B.S. in Sports Performance</div>
                <div className="cred">Former Division II Baseball Player</div>
                <div className="cred">38,000+ Athletes Reached on Instagram</div>
                <div className="cred">Specialist in Exit Velocity &amp; Rotational Power</div>
                <div className="cred">Online + In-Person Coaching Available</div>
              </div>
              <Link href="/programs" className="btn-primary">See All Programs</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
