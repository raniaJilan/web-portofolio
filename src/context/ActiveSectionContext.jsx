import { createContext, useContext, useMemo, useState } from 'react'

const ActiveSectionContext = createContext(null)

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home')

  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection],
  )

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error('useActiveSection must be used within ActiveSectionProvider')
  }
  return context
}
