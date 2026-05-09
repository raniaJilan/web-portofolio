import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import { Button } from '../components/ui/button'

const NotFound = () => {
  return (
    <Container>
      <div className="mx-auto max-w-xl py-24 text-center">
        <p className="text-sm text-[var(--text-muted)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--text)]">Page not found</h1>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          The page you’re looking for doesn’t exist. Let’s get you back on track.
        </p>
        <Button asChild className="mt-6" variant="gradient">
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </Container>
  )
}

export default NotFound
