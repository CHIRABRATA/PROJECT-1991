import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Breadcrumbs = () => {
  const location = useLocation()
  const parts = location.pathname.split('/').filter(Boolean)
  if (parts.length === 0) return null

  const buildPath = (idx) => '/' + parts.slice(0, idx + 1).join('/')

  return (
    <div className="fixed top-14 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4">
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="glass px-4 py-2 text-sm"
        >
          <div className="flex items-center flex-wrap gap-2">
            <NavLink to="/" className={({isActive}) => `${isActive? 'text-electric' : 'text-white/80'} hover:text-white`}>Home</NavLink>
            {parts.map((p, idx) => (
              <React.Fragment key={idx}>
                <span className="text-white/40">/</span>
                <NavLink to={buildPath(idx)} className={({isActive}) => `${isActive? 'text-electric' : 'text-white/80'} hover:text-white`}>
                  {decodeURIComponent(p)}
                </NavLink>
              </React.Fragment>
            ))}
          </div>
        </motion.nav>
      </div>
    </div>
  )
}

export default Breadcrumbs
