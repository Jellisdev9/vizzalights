const STATS = [
  ['Invisible', 'by day, every install'],
  ['Weatherproof', 'built for year-round use'],
  ['App Controlled', 'change looks in seconds'],
  ['Nationwide', 'expansion underway'],
]

export default function StatBar() {
  return (
    <div className="wrap">
      <div className="stat-bar">
        {STATS.map(([b, s]) => (
          <div key={b}>
            <b>{b}</b>
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
