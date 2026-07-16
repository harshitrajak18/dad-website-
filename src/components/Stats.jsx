export default function Stats() {
  const stats = [
    { number: '14+', label: 'Years in Practice' },
    { number: '2', label: 'Courts of Regular Appearance' },
    { number: '8', label: 'Core Practice Areas' },
    { number: '1:1', label: 'Direct Advocate Access' },
  ]

  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid reveal-stagger">
          {stats.map((stat, i) => (
            <div className="stat-item reveal" key={i}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
