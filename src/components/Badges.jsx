import React, { useMemo } from 'react'

const Badges = ({ course, year, subjects }) => {
  const totalTasks = subjects.length * 2
  const completedTasks = useMemo(() => {
    const raw = localStorage.getItem(`progress:${course}:${year}`)
    const state = raw ? JSON.parse(raw) : {}
    return subjects.reduce((acc, s) => {
      const st = state[s.name] || {}
      return acc + (st.notes ? 1 : 0) + (st.pyqs ? 1 : 0)
    }, 0)
  }, [course, year, subjects])

  const badges = []
  if (completedTasks >= Math.ceil(totalTasks * 0.25)) badges.push({ name: 'Starter', emoji: '🌱' })
  if (completedTasks >= Math.ceil(totalTasks * 0.5)) badges.push({ name: 'Learner', emoji: '📘' })
  if (completedTasks >= Math.ceil(totalTasks * 0.75)) badges.push({ name: 'Achiever', emoji: '🏅' })
  if (completedTasks >= totalTasks) badges.push({ name: 'Master', emoji: '🎓' })

  return (
    <div className="glass p-4">
      <div className="font-semibold">Achievement Badges</div>
      <div className="mt-3 flex flex-wrap gap-3">
        {badges.length === 0 ? (
          <div className="text-sm text-white/70">Complete resources to unlock badges</div>
        ) : (
          badges.map((b) => (
            <div key={b.name} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">{b.emoji} {b.name}</div>
          ))
        )}
      </div>
    </div>
  )
}

export default Badges
