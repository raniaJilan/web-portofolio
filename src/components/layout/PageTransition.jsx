import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { pageTransition } from '../../lib/motion'

const PageTransition = ({ children }) => {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
