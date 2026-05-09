import { Outlet } from 'react-router-dom'
import BackgroundGlow from './BackgroundGlow'
import CommandPalette from './CommandPalette'
import Cursor from './Cursor'
import Footer from './Footer'
import Navbar from './Navbar'
import PageTransition from './PageTransition'
import Preloader from './Preloader'
import ScrollProgress from './ScrollProgress'
import SkipLink from './SkipLink'

const AppLayout = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <SkipLink />
      <BackgroundGlow />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <CommandPalette />
      <Preloader />
      <main id="main-content" className="relative pt-28">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
