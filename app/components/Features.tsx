"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🕌",
    title: "Create Prayer Requests",
    description:
      "Post a dua request for your deceased loved ones in seconds. Choose from authentic Quranic surahs like Al-Fatiha, Yaseen, and Al-Ikhlas — or write a custom heartfelt dua.",
    color: "#006B6B",
    bg: "#E0F2F2",
    tag: "Core Feature",
  },
  {
    icon: "🌍",
    title: "Global Community Prays",
    description:
      "Thousands of Muslims worldwide see your request and pray in real-time. Watch your prayer counter grow and receive live Hasanat as the community rallies around your loved one.",
    color: "#7B68A6",
    bg: "#F1EDF7",
    tag: "Live Updates",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Private Family Circles",
    description:
      "Create a family circle and invite your relatives. Share private prayer requests only your family can see — keeping your most intimate duas within your loved ones.",
    color: "#C9A55A",
    bg: "#FFF8EC",
    tag: "Family Privacy",
  },
  {
    icon: "🏆",
    title: "Track Spiritual Progress",
    description:
      "Monitor your prayer streak, Hasanat earned, and people helped. Daily goals keep you engaged and motivated on your spiritual journey.",
    color: "#4CAF50",
    bg: "#E8F5E9",
    tag: "Gamification",
  },
  {
    icon: "📖",
    title: "Memorial Profiles",
    description:
      "Create a beautiful digital memorial for each loved one — with their photo, biography, birth and death dates in Hijri calendar, and favourite memories.",
    color: "#E53935",
    bg: "#FFEBEE",
    tag: "Memorials",
  },
  {
    icon: "✨",
    title: "Daily Hadith & Wisdom",
    description:
      "Start each day with authentic Islamic wisdom from Sahih Muslim and other sources. Rotating hadiths keep your spiritual connection alive and growing.",
    color: "#006B6B",
    bg: "#E0F2F2",
    tag: "Daily Inspiration",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24" style={{ background: "#F8F6F0" }}>
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
            ✨ Everything You Need
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Powerful Features for Your
            <br />
            <span style={{ color: "#006B6B" }}>Spiritual Journey</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
            Everything you need to honor your loved ones, connect with the ummah,
            and earn continuous blessings — all in one beautiful app.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group rounded-2xl p-6 card-shadow-hover"
              style={{
                background: "white",
                border: "1px solid #EEEBE3",
              }}
            >
              {/* Tag */}
              <div
                className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
                style={{ background: feature.bg, color: feature.color }}
              >
                {feature.tag}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: feature.bg }}
              >
                {feature.icon}
              </div>

              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#1A1A1A" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                {feature.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-0.5 rounded-full w-12 transition-all duration-300 group-hover:w-full"
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
