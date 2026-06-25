import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import { hero } from '../../data/site'
import { socialLinks } from '../../data/social'
import Container from '../layout/Container'
import Section from '../layout/Section'
import Magnetic from '../shared/Magnetic'
import SocialLinks from '../shared/SocialLinks'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <Section id="home" className="pt-10 section-hero">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-2"
            >
              <Badge variant="primary">Available for select work</Badge>
              <Badge>2026 Portfolio</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl font-semibold text-[var(--text)] md:text-5xl lg:text-6xl"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]"
            >
              {hero.subheadline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-2xl text-base text-[var(--text-muted)] md:text-lg"
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Button asChild size="lg" variant="gradient">
                  <a href={hero.ctaPrimary.href}>
                    {hero.ctaPrimary.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button asChild size="lg" variant="outline">
                  <a href={hero.ctaSecondary.href}>
                    <Play className="h-4 w-4" />
                    {hero.ctaSecondary.label}
                  </a>
                </Button>
              </Magnetic>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <SocialLinks items={socialLinks} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {hero.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
                  <p className="text-xs text-[var(--text-muted)]">{metric.label}</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--text)]">{metric.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-br from-[rgba(52,211,153,0.18)] via-transparent to-[rgba(232,114,154,0.15)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--panel)] p-4 shadow-card">
              <img
                src={hero.image}
                alt="Rania Jilan portrait"
                className="h-[420px] w-full rounded-3xl object-cover"
                loading="eager"
              />
              <div className="mt-4 grid gap-3">
                {hero.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(148,163,184,0.08)] px-4 py-3 text-sm text-[var(--text)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
