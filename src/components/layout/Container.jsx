import { cn } from '../../lib/utils'

const Container = ({ className, ...props }) => (
  <div className={cn('mx-auto w-full max-w-6xl px-6 lg:px-10', className)} {...props} />
)

export default Container
