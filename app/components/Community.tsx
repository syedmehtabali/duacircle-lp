"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Aisha Rahman",
    location: "London, UK",
    initials: "AR",
    color: "#006B6B",
    text: "After losing my mother, I felt helpless. DuaCircle allowed thousands of Muslims to pray for her — the notifications of each prayer brought me immense comfort. SubhanAllah.",
    prayers: 847,
    streak: 32,
  },
  {
    name: "Omar Abdullah",
    location: "Toronto, Canada",
    initials: "OA",
    color: "#7B68A6",
    text: "Our family created a circle for my grandfather. Now my cousins in 4 different countries all pray together every day. This app has united us through grief.",
    prayers: 1203,
    streak: 58,
  },
  {
    name: "Fatima Al-Zahra",
    location: "Dubai, UAE",
    initials: "FZ",
    color: "#C9A55A",
    text: "The daily Hadiths and Hasanat tracking keep me motivated. I've prayed for over 200 strangers' loved ones. This is the sadaqah jariyah I never knew I needed.",
    prayers: 2156,
    streak: 91,
  },
];

const activityFeed = [
  { user: "Ahmad K.", action: "prayed Al-Fatiha for", target: "Yusuf Hassan", time: "2m ago", icon: "🤲", color: "#006B6B" },
  { user: "Sara M.", action: "reached prayer goal for", target: "Ibrahim Al-Rashidi", time: "5m ago", icon: "🎉", color: "#C9A55A" },
  { user: "Khalid R.", action: "prayed Yaseen for", target: "Maryam Hassan", time: "8m ago", icon: "📖", color: "#7B68A6" },
  { user: "Nour A.", action: "joined DuaCircle community", target: "", time: "12m ago", icon: "🌟", color: "#4CAF50" },
  { user: "Amina T.", action: "prayed Al-Ikhlas for", target: "Abdullah Khan", time: "15m ago", icon: "💎", color: "#C9A55A" },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="community"
      className="py-24"
      style={{ background: "#F8F6F0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-sm font-medium"
            style={{ background: "#E0F2F2", color: "#006B6B" }}
          >
            💬 Real Stories
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Stories From the
            <br />
            <span style={{ color: "#006B6B" }}>Ummah</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#666666" }}>
            Thousands of Muslims have found comfort and spiritual connection through DuaCircle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
              className="rounded-2xl p-6 flex flex-col gap-4 card-shadow-hover"
              style={{ background: "white", border: "1px solid #EEEBE3" }}
            >
              {/* Quote */}
              <div
                className="text-4xl font-serif leading-none"
                style={{ color: t.color, opacity: 0.3 }}
              >
                &#8220;
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#444" }}>
                {t.text}
              </p>

              {/* Stats */}
              <div
                className="flex gap-4 py-3 px-4 rounded-xl"
                style={{ background: "#F8F6F0" }}
              >
                <div className="text-center flex-1">
                  <div className="font-bold text-base" style={{ color: t.color }}>
                    {t.prayers.toLocaleString()}
                  </div>
                  <div className="text-[10px]" style={{ color: "#999" }}>Prayers</div>
                </div>
                <div className="w-px" style={{ background: "#EEE" }} />
                <div className="text-center flex-1">
                  <div className="font-bold text-base" style={{ color: t.color }}>
                    {t.streak}🔥
                  </div>
                  <div className="text-[10px]" style={{ color: "#999" }}>Day Streak</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1A1A1A" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#999" }}>{t.location}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm" style={{ color: "#C9A55A" }}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live activity feed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="rounded-3xl p-8"
          style={{
            background: "linear-gradient(135deg, #001A1A, #003D3D)",
            boxShadow: "0 20px 60px rgba(0,107,107,0.2)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(76,175,80,0.2)", border: "1px solid rgba(76,175,80,0.3)" }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#4CAF50", boxShadow: "0 0 6px #4CAF50" }}
              />
              <span style={{ color: "#4CAF50" }}>Live Community Activity</span>
            </div>
          </div>

          <div className="space-y-3">
            {activityFeed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="flex items-center gap-3 py-2.5 px-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: `${item.color}20` }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <span className="font-semibold" style={{ color: "white" }}>
                    {item.user}
                  </span>{" "}
                  {item.action}{" "}
                  {item.target && (
                    <span style={{ color: item.color }}>{item.target}</span>
                  )}
                </div>
                <div className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 text-center text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Updated in real-time via Supabase Realtime ✦ Join 12,500+ members
          </div>
        </motion.div>
      </div>
    </section>
  );
}
