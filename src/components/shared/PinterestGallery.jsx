import { motion } from 'framer-motion'

const PinterestGallery = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.slug || index}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-[var(--border)]"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={item.image}
              alt={item.title || ''}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </motion.div>
      ))}
    </div>
  )
}

export default PinterestGallery
