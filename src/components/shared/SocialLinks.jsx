import * as Icons from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const SocialLinks = ({ items, className = '' }) => {
  return (
    <TooltipProvider>
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {items.map((item) => {
          const Icon = Icons[item.icon] || Icons.Link
          return (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(148,163,184,0.5)]"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </TooltipProvider>
  )
}

export default SocialLinks
