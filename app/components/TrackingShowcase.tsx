"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  { icon: "🙏", title: "First Prayer", color: "#006B6B", earned: true },
  { icon: "💯", title: "Century Club", color: "#7B68A6", earned: true },
  { icon: "🔥", title: "7-Day Streak", color: "#E53935", earned: true },
  { icon: "🌟", title: "Community Hero", color: "#C9A55A", earned: false },
  { icon: "👑", title: "Prayer Master", color: "#4CAF50", earned: false },
  { icon: "💎", title: "1000 Prayers", color: "#006B6B", earned: false },
];

const trackingFeatures = [
  {
    icon: "📊",
    title: "Prayer Analytics",
    desc: "Track prayers offered, requests created, and Hasanat earned over time.",
  },
  {
    icon: "🔥",
    title: "Streak Tracking",
    desc: "Build daily prayer habits and watch your streak grow day by day.",
  },
  {
    icon: "🏆",
    title: "Achievement Badges",
    desc: "Unlock special badges for reaching milestones and helping others.",
  },
  {
    icon: "📈",
    title: "Impact Metrics",
    desc: "See your global impact—people helped, communities reached, lives touched.",
  },
];

export default function TrackingShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tracking"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #EEE9DC 0%, #F8F6F0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Tracking UI */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="rounded-3xl p-8 w-full max-w-md"
              style={{
                background: "white",
                border: "2px solid #EEEBE3",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#4CAF50" }}>
                    👤 Your Profile
                  </div>
                  <div className="text-xl font-bold" style={{ color: "#1A1A1A" }}>
                    Ahmed Khan
                  </div>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #006B6B, #008A8A)" }}
                >
                  AK
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: "847", label: "Prayers", icon: "🤲", color: "#006B6B" },
                  { value: "12,450", label: "Hasanat", icon: "✨", color: "#C9A55A" },
                  { value: "42🔥", label: "Streak", icon: "🔥", color: "#E53935" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="rounded-2xl p-3 text-center"
                    style={{ background: "#F8F6F0" }}
                  >
                    <div className="text-xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-[10px]" style={{ color: "#999" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress circles */}
              <div className="space-y-4 mb-6">
                {[
                  { label: "Daily Goal", value: 85, max: 100, color: "#006B6B" },
                  { label: "Weekly Target", value: 67, max: 100, color: "#7B68A6" },
                ].map((progress, i) => (
                  <motion.div
                    key={progress.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold" style={{ color: "#1A1A1A" }}>
                        {progress.label}
                      </span>
                      <span className="text-xs font-bold" style={{ color: progress.color }}>
                        {progress.value}/{progress.max}
                      </span>
                    </div>
                    <div
                      className="w-full rounded-full h-2"
                      style={{ background: "#EEEBE3" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${progress.value}%` } : {}}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-2 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${progress.color}, ${progress.color}dd)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
                    🏆 Achievements
                  </h4>
                  <span className="text-xs" style={{ color: "#999" }}>
                    3/6 Unlocked
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {achievements.map((achievement, i) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                      className="relative group"
                    >
                      <div
                        className="aspect-square rounded-xl flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110"
                        style={{
                          background: achievement.earned
                            ? `linear-gradient(135deg, ${achievement.color}, ${achievement.color}dd)`
                            : "#EEEBE3",
                          opacity: achievement.earned ? 1 : 0.4,
                          boxShadow: achievement.earned
                            ? `0 4px 16px ${achievement.color}30`
                            : "none",
                        }}
                      >
                        {achievement.icon}
                      </div>
                      {achievement.earned && (
                        <div
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                          style={{ background: "#4CAF50", color: "white" }}
                        >
                          ✓
                        </div>
                      )}
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-lg text-[9px] font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{ background: "#1A1A1A" }}
                      >
                        {achievement.title}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Impact summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-6 rounded-2xl p-4 text-center"
                style={{
                  background: "linear-gradient(135deg, #E8F5E9, #C8E6C9)",
                }}
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-sm font-bold mb-1" style={{ color: "#4CAF50" }}>
                  Global Impact
                </div>
                <div className="text-xs" style={{ color: "#555" }}>
                  Your prayers reached <strong>124 people</strong> across{" "}
                  <strong>15 countries</strong>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-sm font-medium"
              style={{ background: "#E8F5E9", color: "#4CAF50" }}
            >
              📈 Track Your Growth
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
              style={{ color: "#1A1A1A" }}
            >
              Watch Your
              <br />
              <span style={{ color: "#4CAF50" }}>Spiritual Impact</span> Grow
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#666" }}>
              Every prayer you offer is tracked and rewarded. Build streaks, unlock
              achievements, and see the real-world impact of your spiritual journey.
              Gamification meets meaningful worship.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {trackingFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{ background: "white", border: "1px solid #EEEBE3" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: "#E8F5E9" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: "#1A1A1A" }}>
                      {f.title}
                    </div>
                    <div className="text-sm" style={{ color: "#666" }}>
                      {f.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-6 rounded-2xl"
              style={{
                background: "#F8F6F0",
                border: "2px solid #EEEBE3",
              }}
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "#555" }}>
                    <em>"I've logged over 500 prayers. Seeing my impact keeps me motivated
                    to do more. This app makes spiritual growth measurable."</em>
                  </p>
                  <div className="text-xs font-semibold" style={{ color: "#4CAF50" }}>
                    — Ibrahim, Australia
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
