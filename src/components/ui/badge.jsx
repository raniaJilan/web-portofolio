import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--text)]',
  {
    variants: {
      variant: {
        default: 'bg-[rgba(148,163,184,0.12)]',
        primary: 'bg-[var(--primary)] text-[var(--primary-foreground)] border-transparent',
        ghost: 'border-transparent bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
