import { cn } from '../../lib/utils'

const Input = ({ className, type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        'h-11 w-full rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.02)] px-4 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
