import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '../../lib/utils'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = ({ className, ...props }) => (
  <DialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out',
      className,
    )}
    {...props}
  />
)

const DialogContent = ({ className, ...props }) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4 shadow-card',
        className,
      )}
      {...props}
    />
  </DialogPortal>
)

export { Dialog, DialogClose, DialogContent, DialogTrigger }

