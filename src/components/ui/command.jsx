import * as CommandPrimitive from 'cmdk'
import { cn } from '../../lib/utils'

const Command = ({ className, ...props }) => (
  <CommandPrimitive.Command
    className={cn(
      'flex w-full flex-col overflow-hidden rounded-2xl bg-transparent text-[var(--text)]',
      className,
    )}
    {...props}
  />
)

const CommandInput = ({ className, ...props }) => (
  <div className="flex items-center border-b border-[var(--border)] px-3">
    <CommandPrimitive.Input
      className={cn(
        'h-11 w-full bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none',
        className,
      )}
      {...props}
    />
  </div>
)

const CommandList = ({ className, ...props }) => (
  <CommandPrimitive.List className={cn('max-h-72 overflow-y-auto p-2', className)} {...props} />
)

const CommandEmpty = (props) => (
  <CommandPrimitive.Empty className="py-6 text-center text-sm text-[var(--text-muted)]" {...props} />
)

const CommandGroup = ({ className, heading, children, ...props }) => (
  <CommandPrimitive.Group className={cn('px-1 py-1', className)} {...props}>
    {heading && (
      <div className="px-3 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
        {heading}
      </div>
    )}
    {children}
  </CommandPrimitive.Group>
)

const CommandItem = ({ className, ...props }) => (
  <CommandPrimitive.Item
    className={cn(
      'flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm text-[var(--text)] outline-none transition hover:bg-[rgba(148,163,184,0.15)] data-[selected=true]:bg-[rgba(148,163,184,0.2)]',
      className,
    )}
    {...props}
  />
)

const CommandSeparator = ({ className, ...props }) => (
  <CommandPrimitive.Separator className={cn('my-2 h-px bg-[var(--border)]', className)} {...props} />
)

export {
    Command, CommandEmpty,
    CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator
}

