import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-soft hover:translate-y-[-1px]',
        secondary: 'bg-[var(--bg-muted)] text-[var(--text)] hover:bg-[rgba(148,163,184,0.2)]',
        outline: 'border border-[var(--border)] text-[var(--text)] hover:bg-[rgba(148,163,184,0.12)]',
        ghost: 'text-[var(--text)] hover:bg-[rgba(148,163,184,0.12)]',
        gradient:
          'bg-gradient-to-r from-[var(--primary)] via-[#6366f1] to-[var(--accent)] text-white shadow-soft hover:translate-y-[-1px]',
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-7 py-3.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button, buttonVariants }
