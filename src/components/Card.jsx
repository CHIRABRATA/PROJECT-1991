import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ title, onClick, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(59,130,246,0.35)' }}
    whileTap={{ scale: 0.98 }}
    className="glass w-full p-6 text-left"
  >
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  </motion.button>
)

export default Card
