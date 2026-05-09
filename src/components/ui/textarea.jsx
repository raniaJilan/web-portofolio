import { cn } from '../../lib/utils'

const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        'min-h-[140px] w-full rounded-2xl border border-[var(--border)] bg-[rgba(15,23,42,0.02)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
