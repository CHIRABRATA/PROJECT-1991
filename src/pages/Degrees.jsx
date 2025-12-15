import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

const degrees = [
  { t: 'BTECH', p: '/courses?degree=btech' },
  { t: 'BTECH (TIU)', p: '/courses?degree=btech_tiu' },
  { t: 'BCA', p: '/courses?degree=bca' },
  { t: 'BBA', p: '/courses?degree=bba' },
]

const Degrees = () => {
  const navigate = useNavigate()
  return (
    <div className="pt-28 mx-auto max-w-7xl px-4">
      <PageTransition>
      <motion.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl font-bold">Choose Your Degree</motion.h2>
      <div className="mt-8 overflow-x-auto">
        <div className="flex gap-6 snap-x snap-mandatory pb-2">
          {degrees.map((d, idx) => (
            <motion.button
              key={d.t}
              initial={{opacity:0,y:12}}
              animate={{opacity:1,y:0}}
              transition={{delay:idx*0.06}}
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(59,130,246,0.35)' }}
              whileTap={{ scale: 0.98 }}
              onClick={()=>navigate(d.p)}
              className="glass snap-center min-w-[220px] p-6 rounded-lg text-left"
            >
              <div className="text-lg font-semibold">{d.t}</div>
              <div className="text-white/70 text-sm">Explore {d.t}</div>
            </motion.button>
          ))}
        </div>
      </div>
      </PageTransition>
    </div>
  )
}

export default Degrees

