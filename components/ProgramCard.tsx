'use client'
import { Program } from '@/lib/programs'
import { useState } from 'react'

const icons: Record<string, React.ReactNode> = {
  layers: <svg viewBox="0 0 24 24"><path d="M12 2L3 7v10l9 5 9-5V7z"/><path d="M12 22V12"/><path d="M3 7l9 5 9-5"/></svg>,
  clock: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  users: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  heart: <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  star: <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
}

export default function ProgramCard({ program }: { program: Program }) {
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: program.priceId, programName: program.name }),
      })
      const { url } = await res.json()
      if (url) window.location.href = url
    } catch (e) {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={`program-card ${program.featured ? 'featured' : ''}`}>
      {program.badge && (
        <span className={`program-badge ${program.badgeOutline ? 'outline' : ''}`}>
          {program.badge}
        </span>
      )}
      <div className="program-icon">{icons[program.icon]}</div>
      <div className="program-name">{program.name}</div>
      <p className="program-desc">{program.desc}</p>
      <div className="program-price">
        <span className="price-main">{program.priceDisplay}</span>
        {program.oldPrice && <span className="price-old">{program.oldPrice}</span>}
      </div>
      <div className="program-footer">
        <span className="program-includes">{program.includes}</span>
        <button
          className="program-btn"
          onClick={handleBuy}
          disabled={loading}
        >
          {loading ? 'Loading...' : program.id === 'elite-coaching' ? 'Apply Now' : 'Get This Program'}
        </button>
      </div>
    </div>
  )
}
