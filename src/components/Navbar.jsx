import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navClass = ({ isActive }) =>
    `relative text-sm transition-all duration-300 ${
      isActive
        ? 'text-electric'
        : 'text-white/75 hover:text-white'
    }`

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 py-3">
        {/* Glass shell */}
        <div className="relative rounded-2xl glass px-4 py-2 flex items-center justify-between overflow-hidden">

          {/* Gradient edge (unique detail) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-electric/60 to-transparent" />

          {/* Logo */}
          <Link
            to="/"
            className="font-extrabold tracking-widest text-white"
          >
            SRP<span className="text-electric">•</span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/80 text-lg"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {[
              ['Degrees', '/degrees'],
              ['Resources', '/resources'],
              ['Labs', '/labs'],
              ['Infographics', '/infographics'],
              ['Quizzes', '/quizzes'],
              ['Instructors', '/instructors'],
              ['Success', '/success'],
              ['Campus', '/campus'],
              ['Forum', '/forum'],
              ['Feedback', '/feedback'],
              ['Login', '/auth']
            ].map(([label, path]) => (
              <NavLink key={path} to={path} className={navClass}>
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="active-dot"
                        className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_8px_#3b82f6]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* CTA */}
            <motion.a
              href="#"
              onClick={(e) => e.preventDefault()}
              whileHover={{
                y: -2,
                boxShadow: '0 0 22px rgba(59,130,246,0.55)'
              }}
              className="rounded-full border border-white/20 px-4 py-1 text-sm backdrop-blur-md"
            >
              ⭐ Star
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 glass rounded-2xl px-4 py-3"
            >
              <div className="flex flex-col gap-2">
                {[
                  ['Degrees', '/degrees'],
                  ['Resources', '/resources'],
                  ['Labs', '/labs'],
                  ['Infographics', '/infographics'],
                  ['Quizzes', '/quizzes'],
                  ['Instructors', '/instructors'],
                  ['Success', '/success'],
                  ['Campus', '/campus'],
                  ['Forum', '/forum'],
                  ['Feedback', '/feedback'],
                  ['Login', '/auth']
                ].map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm ${
                        isActive ? 'text-electric' : 'text-white/75'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
