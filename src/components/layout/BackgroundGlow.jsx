const BackgroundGlow = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 hero-grid grid-fade opacity-40" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[rgba(52,211,153,0.15)] blur-[120px] animated-orb" />
      <div className="absolute right-10 top-10 h-96 w-96 rounded-full bg-[rgba(232,114,154,0.12)] blur-[140px] animated-orb delay" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[rgba(251,191,36,0.08)] blur-[120px] animated-orb slow" />
      <div className="absolute inset-0 noise" />
    </div>
  )
}

export default BackgroundGlow
