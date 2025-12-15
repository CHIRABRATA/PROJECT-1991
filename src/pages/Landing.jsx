import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import HeroScene from '../components/HeroScene.jsx'
import PageTransition from '../components/PageTransition.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black via-[#0b1220] to-[#0b1f3a]" />

        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_65%)]" />

        {/* Vertical beam core */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.6 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[140vh] w-[6px] beam-core"
        />

        {/* Beam glow */}
        <motion.div
          animate={{ opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[140vh] w-[44px] beam-glow"
        />
      </div>

      {/* ================= HERO SCENE ================= */}
      <HeroScene />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 pt-28">
        <div className="mx-auto max-w-7xl px-4">
          <PageTransition>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Your Ultimate Student Resource Hub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
              className="mt-4 max-w-2xl text-white/80"
            >
              Calm, immersive, cinematic experience with notes, PYQs, smart
              navigation, and structured learning paths.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.4 }}
              whileHover={{
                boxShadow: '0 0 28px rgba(59,130,246,0.45)',
                scale: 1.04
              }}
              onClick={() => navigate('/degrees')}
              className="cta-hover mt-8 rounded-full bg-electric/20 border border-electric/40 px-6 py-3 font-semibold"
            >
              Explore Resources
            </motion.button>
          </PageTransition>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60"
      >
        ↓ Scroll to explore
      </motion.div>

      {/* ================= FEATURES ================= */}
      <section className="relative z-20 mt-40 px-4">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Organized by Degree & Year',
              desc: 'Structured academic content mapped exactly to your curriculum.'
            },
            {
              title: 'Notes + PYQs in One Place',
              desc: 'No chaos. Just clean access to verified study resources.'
            },
            {
              title: 'Fast, Minimal, Distraction-Free',
              desc: 'Designed for focus with smooth animations and zero clutter.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative z-20 mt-32 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-4xl font-bold"
          >
            How SRP Works
          </motion.h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {['Choose Degree', 'Select Year', 'Access Resources'].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-2 text-xl font-bold text-electric">
                  0{i + 1}
                </div>
                <div className="font-medium">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative z-20 mt-40 mb-32 px-4 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Learning Without Friction
          </h2>
          <p className="mt-4 text-white/70">
            Built by students, for students — simple, fast and reliable.
          </p>
          <button
            onClick={() => navigate('/degrees')}
            className="mt-8 rounded-full bg-electric px-8 py-3 font-semibold text-black transition hover:scale-105"
          >
            Get Started
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default Landing
