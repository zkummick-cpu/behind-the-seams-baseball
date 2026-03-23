import { auth, currentUser } from '@clerk/nextjs/server'
import { supabaseAdmin } from '@/lib/supabase'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'My Programs | Behind the Seams Baseball' }

export default async function Dashboard() {
  const { userId } = auth()
  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress

  // Fetch purchases for this user's email
  const { data: purchases } = await supabaseAdmin
    .from('purchases')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false })

  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap">
        <section style={{ background: '#F5F2ED', minHeight: '80vh' }}>
          <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
            <p className="section-tag">My Account</p>
            <h1 className="section-title">Your <em>Programs</em></h1>
            <p style={{ color: 'var(--mid)', fontWeight: 300 }}>Logged in as <strong style={{ color: 'var(--dark)' }}>{email}</strong></p>
          </div>

          {!purchases || purchases.length === 0 ? (
            <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '4rem', textAlign: 'center' }}>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'var(--dark)', marginBottom: '1rem' }}>No Programs Yet</h3>
              <p style={{ color: 'var(--mid)', fontWeight: 300, marginBottom: '2rem' }}>
                You haven't purchased any programs yet. Browse the full catalog below.
              </p>
              <Link href="/programs" className="btn-primary">Browse Programs</Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {purchases.map((purchase: any) => (
                <div key={purchase.id} style={{ background: '#fff', border: '1px solid var(--border)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--dark)', lineHeight: 1.2, flex: 1 }}>
                      {purchase.product_name}
                    </div>
                    <span style={{ background: '#C8102E', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.2rem 0.5rem', flexShrink: 0, marginLeft: '1rem' }}>
                      Active
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    Purchased {new Date(purchase.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ background: 'rgba(200,16,46,0.06)', border: '1px solid rgba(200,16,46,0.15)', padding: '0.75rem 1rem' }}>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E' }}>
                        🎁 Your lifetime 25% Marucci + Victus discount is active
                      </p>
                    </div>
                    <a
                      href="https://www.instagram.com/behind.the.seams.baseball/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dark)', background: 'transparent', border: '1px solid var(--border)', padding: '0.75rem', cursor: 'pointer', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'all 0.2s' }}
                    >
                      Access Materials via DM →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '3rem', background: '#fff', border: '1px solid var(--border)', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dark)', marginBottom: '0.25rem' }}>Want to add more programs?</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 300 }}>All programs include your lifetime 25% Marucci + Victus discount.</p>
            </div>
            <Link href="/programs" className="btn-primary">Browse Programs</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
