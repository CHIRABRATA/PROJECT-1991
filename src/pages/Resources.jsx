import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import { supabase } from '../lib/supabase.js'
import Loading from '../components/Loading.jsx'

const sampleSubjects = {
  cse: [
    { name: 'Data Structures', notes: 'https://drive.google.com', pyqs: 'https://drive.google.com' },
    { name: 'Operating Systems', notes: 'https://drive.google.com', pyqs: 'https://drive.google.com' },
  ],
  it: [
    { name: 'Networks', notes: 'https://drive.google.com', pyqs: 'https://drive.google.com' },
    { name: 'DBMS', notes: 'https://drive.google.com', pyqs: 'https://drive.google.com' },
  ],
}

const Resources = () => {
  const { search } = useLocation()
  const navigate = useNavigate()
  const course = new URLSearchParams(search).get('course') || 'cse'
  const subjects = useMemo(() => sampleSubjects[course] || [], [course])

  const openLink = async (url) => {
    const { data } = await supabase.auth.getSession()
    if (!data.session) {
      navigate('/auth')
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (!subjects.length) return <Loading />

  return (
    <div className="pt-28 mx-auto max-w-7xl px-4">
      <PageTransition>
      <motion.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-3xl font-bold">Subjects & Resources</motion.h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((s, idx) => (
          <motion.div key={s.name} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:idx*0.06}} className="glass p-4">
            <div className="text-lg font-semibold">{s.name}</div>
            <div className="mt-3 flex gap-3">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={()=>openLink(s.notes)} className="cta-hover rounded-lg border border-white/20 bg-white/10 px-3 py-2">Notes</motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={()=>openLink(s.pyqs)} className="cta-hover rounded-lg border border-white/20 bg-white/10 px-3 py-2">PYQs</motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      </PageTransition>
    </div>
  )
}

export default Resources

