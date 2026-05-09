import { cn } from '../../lib/utils'

const Separator = ({ className, ...props }) => (
  <div className={cn('h-px w-full bg-[var(--border)]', className)} {...props} />
)

export { Separator }
