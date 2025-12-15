import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

const courses = [
  { t: 'CSE', p: '/years?course=cse' },
  { t: 'IT', p: '/years?course=it' },
]

const Courses = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const degree = new URLSearchParams(search).get('degree')
  return (
    <div className="pt-28 mx-auto max-w-7xl px-4">
      <PageTransition>
      <motion.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl font-bold">{degree ? degree.toUpperCase() : 'Degree'} Courses</motion.h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c, idx) => (
          <motion.button
            key={c.t}
            initial={{opacity:0,y:12}}
            animate={{opacity:1,y:0}}
            transition={{delay:idx*0.06}}
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(59,130,246,0.35)' }}
            whileTap={{ scale: 0.98 }}
            onClick={()=>navigate(c.p + (degree? `&degree=${degree}` : ''))}
            className="glass p-6 rounded-lg text-left"
          >
            <div className="text-lg font-semibold">{c.t}</div>
            <div className="text-white/70 text-sm">Open {c.t}</div>
          </motion.button>
        ))}
      </div>
      </PageTransition>
    </div>
  )
}

export default Courses

