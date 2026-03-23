export default function Ticker() {
  const items = [
    'Every program includes a lifetime 25% discount on Marucci & Victus equipment',
    'Exit velo · power · consistency — built on sports science, not guesswork',
    'Lifetime 25% off Marucci + Victus with any program purchase',
    'Former D2 player · B.S. Sports Performance · 38K+ athletes',
  ]
  const doubled = [...items, ...items]
  return (
    <div className="ticker-bar">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
