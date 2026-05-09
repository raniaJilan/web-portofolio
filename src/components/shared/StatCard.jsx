const StatCard = ({ stat }) => {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-5 py-4 shadow-soft">
      <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
      <p className="mt-2 text-2xl font-semibold text-[var(--text)]">{stat.value}</p>
    </div>
  )
}

export default StatCard
