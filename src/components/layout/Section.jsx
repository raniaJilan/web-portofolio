import { useEffect, useRef } from 'react'
import { useActiveSection } from '../../context/ActiveSectionContext'
import { cn } from '../../lib/utils'

const Section = ({ id, className, children, ...props }) => {
  const ref = useRef(null)
  const { setActiveSection } = useActiveSection()

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.2,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [id, setActiveSection])

  return (
    <section id={id} ref={ref} className={cn('py-20 lg:py-28', className)} {...props}>
      {children}
    </section>
  )
}

export default Section
