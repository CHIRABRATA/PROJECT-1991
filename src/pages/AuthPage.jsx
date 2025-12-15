import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase.js'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

const AuthPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const signIn = async () => {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) setError(error.message)
    else navigate(-1)
  }
  const signUp = async () => {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) setError(error.message)
    else navigate('/degrees')
  }
  const signOut = async () => {
    await supabase.auth.signOut()
  }
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin + '/degrees' } })
  }

  return (
    <div className="pt-28 mx-auto max-w-md px-4">
      <PageTransition>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="glass p-6">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <p className="mt-1 text-white/70">Login to access resource links</p>
        <div className="mt-6 space-y-3">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <div className="flex items-center gap-3">
            <button onClick={signIn} disabled={loading} className="cta-hover rounded-lg border border-white/20 bg-electric/10 px-3 py-2">Login</button>
            <button onClick={signUp} disabled={loading} className="cta-hover rounded-lg border border-white/20 bg-violet/10 px-3 py-2">Signup</button>
          </div>
          <button onClick={signInWithGoogle} className="cta-hover w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2">Continue with Google</button>
          <button onClick={signOut} className="cta-hover w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2">Sign out</button>
        </div>
      </motion.div>
      </PageTransition>
    </div>
  )
}

export default AuthPage

