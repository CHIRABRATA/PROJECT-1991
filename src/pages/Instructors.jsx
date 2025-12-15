import React from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

const instructors = [
  { name: 'Dr. A. Sharma', photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0?q=80&w=600&auto=format&fit=crop', title: 'Computer Science' },
  { name: 'Prof. L. Gupta', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', title: 'Information Technology' },
  { name: 'Dr. R. Das', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop', title: 'Mathematics' },
]

const Instructors = () => (
  <div className="pt-28 mx-auto max-w-7xl px-4">
    <PageTransition>
    <motion.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl font-bold">Instructor Profiles</motion.h2>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {instructors.map((i, idx) => (
        <motion.div key={i.name} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:idx*0.06}} className="glass p-4">
          <img src={i.photo} alt={i.name} loading="lazy" className="h-40 w-full object-cover rounded" />
          <div className="mt-3 text-lg font-semibold">{i.name}</div>
          <div className="text-white/70 text-sm">{i.title}</div>
        </motion.div>
      ))}
    </div>
    </PageTransition>
  </div>
)

export default Instructors
