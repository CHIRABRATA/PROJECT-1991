import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year']

const Years = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const course = new URLSearchParams(search).get('course')
  const degree = new URLSearchParams(search).get('degree')
  return (
    <div className="pt-28 mx-auto max-w-7xl px-4">
      <PageTransition>
      <motion.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl font-bold">{course ? course.toUpperCase() : 'Course'} Years</motion.h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {years.map((y, idx) => (
          <motion.button
            key={y}
            initial={{opacity:0,y:16}}
            animate={{opacity:1,y:0}}
            transition={{delay:idx*0.06}}
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={()=>navigate(`/resources?course=${course}&degree=${degree}&year=${idx+1}`)}
            className="glass p-6 rounded-lg text-left"
          >
            <div className="text-lg font-semibold">{y}</div>
            <div className="text-white/70 text-sm">Open subjects</div>
          </motion.button>
        ))}
      </div>
      </PageTransition>
    </div>
  )
}

export default Years

