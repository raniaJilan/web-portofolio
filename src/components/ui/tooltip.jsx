import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '../../lib/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = ({ className, sideOffset = 6, ...props }) => (
  <TooltipPrimitive.Content
    sideOffset={sideOffset}
    className={cn(
      'z-50 rounded-xl border border-[var(--border)] bg-[var(--panel-strong)] px-3 py-2 text-xs text-[var(--text)] shadow-card',
      className,
    )}
    {...props}
  />
)

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }

