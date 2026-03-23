import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'Results | Behind the Seams Baseball' }

const testimonials = [
  { quote: '"Point Park just offered me $27k/year bro. So happy I started working with you dude. Seriously bro you\'re the man."', name: 'Client Result', detail: 'Recruited to Division II — $27K Scholarship' },
  { quote: '"Bought in — paid off. The program completely changed how I approach training. My exit velo went up 6 mph in 8 weeks."', name: 'Client Result', detail: '+6 MPH Exit Velocity · 8 Weeks' },
  { quote: '"Young Slugger System is the best youth baseball development program I\'ve come across. My son is a completely different hitter."', name: 'Parent Review', detail: 'Young Slugger System · ⭐ 5.0' },
  { quote: '"I\'d scrap 90% of standard baseball training advice. What Joseph teaches is actually backed by data and it shows in results."', name: 'Client Result', detail: 'Full-Year Performance System' },
  { quote: '"The in-season program kept me performing at my best all the way through the playoffs. I didn\'t lose any power at all."', name: 'Client Result', detail: 'In-Season Training Program' },
  { quote: '"My daughter\'s energy levels are completely different since starting the nutrition blueprint. She\'s performing better and recovering faster."', name: 'Parent Review', detail: 'Youth Female Nutrition Blueprint' },
]

export default function Results() {
  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap">
        <section style={{ background: '#F5F2ED' }}>
          <p className="section-tag">Client results</p>
          <h1 className="section-title">Players Who <em>Did the Work</em></h1>

          {/* Big quote */}
          <div style={{ background: '#fff', borderLeft: '3px solid #C8102E', padding: '2.5rem 3rem', marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--dark)', lineHeight: 1.1, marginBottom: '1rem' }}>
              "Point Park just offered me $27K/year. So happy I started working with you."
            </p>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8102E' }}>
              Client — Recruited to Division II · $27K Scholarship
            </span>
          </div>

          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">
                  {[...Array(5)].map((_, j) => <div key={j} className="star" />)}
                </div>
                <p className="testi-quote">{t.quote}</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-detail">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#FFFFFF', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', color: 'var(--dark)', marginBottom: '1.5rem' }}>
            Ready to Write Your <span style={{ color: '#C8102E' }}>Own Story?</span>
          </h3>
          <Link href="/programs" className="btn-primary">View Programs</Link>
        </section>
      </div>
      <Footer />
    </>
  )
}
