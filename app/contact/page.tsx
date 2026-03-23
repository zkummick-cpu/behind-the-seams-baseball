'use client'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', level: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Ticker />
      <Navbar />
      <div className="page-wrap">
        <section style={{ background: '#F5F2ED' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <p className="section-tag">Get in touch</p>
              <h1 className="section-title">Ready to <em>Level Up?</em></h1>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--mid)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Have a question about a program, want to apply for 1-on-1 coaching, or just want to learn more? Send a message and <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>Joseph will get back to you personally.</strong>
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--mid)', lineHeight: 1.8 }}>
                Not sure which program is right for your athlete? Just describe where they are and where they want to go — I'll point you in the right direction.
              </p>
              <div className="credentials" style={{ marginTop: '2rem' }}>
                <div className="cred">DM on Instagram: @behind.the.seams.baseball</div>
                <div className="cred">Response within 24 hours guaranteed</div>
                <div className="cred">1-on-1 coaching spots are limited</div>
              </div>
            </div>

            <div>
              {status === 'success' ? (
                <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '3rem', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', color: 'var(--dark)', marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--mid)', fontWeight: 300 }}>Joseph will get back to you within 24 hours. Check your inbox.</p>
                </div>
              ) : (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input type="text" placeholder="First name" required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                    <input type="text" placeholder="Last name" required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                  </div>
                  <input type="email" placeholder="Email address" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  <input type="text" placeholder="Athlete's age + current level (e.g. 16, HS varsity)" value={form.level} onChange={e => setForm({ ...form, level: e.target.value })} />
                  <textarea placeholder="What are you looking to improve? What program are you interested in?" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  <button type="submit" className="form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'error' && <p style={{ color: '#C8102E', fontSize: '0.85rem', textAlign: 'center' }}>Something went wrong. Please try again or DM on Instagram.</p>}
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 300, textAlign: 'center' }}>No spam, ever. Joseph reads every message personally.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
