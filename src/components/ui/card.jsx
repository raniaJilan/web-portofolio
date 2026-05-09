import { cn } from '../../lib/utils'

function Card({ className, ...props }) {
  return (
    <div
      className={cn('rounded-3xl border border-[var(--border)] bg-[var(--panel)]', className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return <div className={cn('flex flex-col gap-2 p-6', className)} {...props} />
}

function CardTitle({ className, ...props }) {
  return (
    <h3 className={cn('text-lg font-semibold text-[var(--text)]', className)} {...props} />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <p className={cn('text-sm text-[var(--text-muted)]', className)} {...props} />
  )
}

function CardContent({ className, ...props }) {
  return <div className={cn('px-6 pb-6', className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return <div className={cn('px-6 pb-6', className)} {...props} />
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

