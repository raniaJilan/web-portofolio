import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import { siteMeta } from './data/site.js'
import { useLenis } from './hooks/useLenis.js'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'

function App() {
  const location = useLocation()
  useLenis()

  useEffect(() => {
    document.title = siteMeta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', siteMeta.description)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="project/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
