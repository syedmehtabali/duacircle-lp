"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const memorialFeatures = [
  {
    icon: "📸",
    title: "Beautiful Profiles",
    desc: "Add photos, dates, and cherished memories for each loved one.",
  },
  {
    icon: "📅",
    title: "Hijri Calendar",
    desc: "Record birth and death dates in Islamic calendar format.",
  },
  {
    icon: "🤲",
    title: "Continuous Prayers",
    desc: "Track total prayers offered—watch the blessings accumulate.",
  },
  {
    icon: "🌟",
    title: "Sadaqah Jariyah",
    desc: "Every prayer is ongoing charity that benefits you and them.",
  },
];

export default function MemorialShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="memorial"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #F8F6F0 0%, #EEE9DC 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-sm font-medium"
              style={{ background: "#FFEBEE", color: "#E53935" }}
            >
              🕊️ Honor Their Memory
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
              style={{ color: "#1A1A1A" }}
            >
              Keep Their Legacy
              <br />
              <span style={{ color: "#E53935" }}>Alive Forever</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#666" }}>
              Create beautiful digital memorials for your departed loved ones.
              The Prophet ﷺ said: <em>"When a person dies, all their deeds end except
              three—a continuing charity, beneficial knowledge, or a child who prays
              for them."</em>
            </p>

            <div className="grid grid-cols-1 gap-4">
              {memorialFeatures.map((f, i) => (
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
                    style={{ background: "#FFEBEE" }}
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

            {/* Hadith quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #E53935, #C62828)",
                boxShadow: "0 12px 40px rgba(229,57,53,0.2)",
              }}
            >
              <div className="text-2xl mb-2">📿</div>
              <blockquote className="text-white text-sm leading-relaxed italic">
                "The best of what a man leaves behind are three: a righteous child who
                supplicates for him, ongoing charity whose reward reaches him, and
                knowledge that is acted upon after him."
              </blockquote>
              <cite className="text-xs mt-2 block" style={{ color: "#FFB3B3" }}>
                — Sunan Ibn Majah
              </cite>
            </motion.div>
          </motion.div>

          {/* Right: Visual Memorial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="rounded-3xl p-8 w-full max-w-md"
              style={{
                background: "white",
                border: "2px solid #EEEBE3",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}
            >
              {/* Memorial header */}
              <div className="text-center mb-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                  style={{ background: "#FFEBEE", color: "#E53935" }}
                >
                  🕊️ Memorial Profile
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center mb-6">
                <div
                  className="relative w-32 h-32 rounded-full overflow-hidden"
                  style={{
                    border: "4px solid #E53935",
                    boxShadow: "0 8px 24px rgba(229,57,53,0.2)",
                  }}
                >
                  {/* Placeholder photo with gradient */}
                  <div
                    className="w-full h-full flex items-center justify-center text-5xl font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #E53935, #C62828)",
                    }}
                  >
                    F
                  </div>
                </div>
              </div>

              {/* Name and dates */}
              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#1A1A1A" }}
                >
                  Fatima Hassan
                </h3>
                <div
                  className="text-sm mb-1"
                  style={{ color: "#666", fontFamily: "serif" }}
                >
                  فاطمة حسن
                </div>
                <div className="text-xs" style={{ color: "#999" }}>
                  1948 - 2023 (75 years)
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "#999", direction: "rtl" }}
                >
                  إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                </div>
              </div>

              {/* Prayer stats */}
              <div
                className="rounded-2xl p-4 mb-4"
                style={{ background: "#F8F6F0" }}
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#E53935" }}
                    >
                      1,847
                    </div>
                    <div className="text-xs" style={{ color: "#999" }}>
                      Total Prayers
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#C9A55A" }}
                    >
                      127
                    </div>
                    <div className="text-xs" style={{ color: "#999" }}>
                      This Week
                    </div>
                  </div>
                </div>
              </div>

              {/* Memory snippet */}
              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: "#FFEBEE",
                  border: "1px solid #FFCDD2",
                }}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-sm">💭</span>
                  <div className="text-xs font-semibold" style={{ color: "#E53935" }}>
                    Cherished Memory
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                  "She always had a smile for everyone and her home was open to all.
                  May Allah grant her Jannah al-Firdaus."
                </p>
              </div>

              {/* Prayer button */}
              <button
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-transform duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #E53935, #C62828)",
                  boxShadow: "0 4px 16px rgba(229,57,53,0.3)",
                }}
              >
                🤲 Pray for Fatima
              </button>

              {/* Community prayers indicator */}
              <div className="mt-4 text-center">
                <div className="flex justify-center items-center gap-1 mb-2">
                  {/* Overlapping avatars */}
                  {["#006B6B", "#7B68A6", "#C9A55A", "#4CAF50"].map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{
                        background: color,
                        marginLeft: i > 0 ? "-8px" : "0",
                        border: "2px solid white",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold"
                    style={{
                      background: "#EEE",
                      color: "#999",
                      marginLeft: "-8px",
                      border: "2px solid white",
                    }}
                  >
                    +40
                  </div>
                </div>
                <div className="text-xs" style={{ color: "#999" }}>
                  44 people prayed today
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
