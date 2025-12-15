import React from "react"
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050417]">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_60%)]" />

      {/* Vertical energy beam */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0.6 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute h-[120vh] w-[6px] rounded-full beam-core"
      />

      {/* Outer glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[120vh] w-[40px] beam-glow"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 mt-[35vh] text-center"
      >
        <div className="text-lg font-semibold tracking-wide">SRP</div>
        <div className="mt-1 text-sm text-white/70">
          Preparing your workspace…
        </div>
      </motion.div>
    </div>
  )
}

export default Loading
