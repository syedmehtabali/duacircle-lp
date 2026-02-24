"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const prayers = [
  {
    id: "fatiha",
    name: "Al-Fatiha",
    arabic: "الفاتحة",
    english: "The Opening",
    surah: "Surah 1",
    icon: "📖",
    color: "#006B6B",
    bg: "linear-gradient(135deg, #006B6B, #008A8A)",
    lightBg: "#E0F2F2",
    description:
      "The Opening chapter of the Quran — recited in every prayer. Sending Al-Fatiha for a deceased person is one of the most beloved acts of worship in Islam.",
    verse: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    verses: 7,
    benefits: ["Most recited surah", "Complete in meaning", "Opens all duas"],
  },
  {
    id: "ikhlas",
    name: "Al-Ikhlas",
    arabic: "الإخلاص",
    english: "The Sincerity",
    surah: "Surah 112",
    icon: "💎",
    color: "#C9A55A",
    bg: "linear-gradient(135deg, #C9A55A, #F9C252)",
    lightBg: "#FFF8EC",
    description:
      "Worth one-third of the Quran in reward. Three recitations of Al-Ikhlas equal a full Quran recitation — a beautiful and powerful gift for your loved ones.",
    verse: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    verses: 4,
    benefits: ["Equal to 1/3 Quran", "Profound in meaning", "Quick & powerful"],
  },
  {
    id: "yaseen",
    name: "Yaseen",
    arabic: "يٰسٓ",
    english: "The Heart of Quran",
    surah: "Surah 36",
    icon: "💜",
    color: "#7B68A6",
    bg: "linear-gradient(135deg, #7B68A6, #9482BA)",
    lightBg: "#F1EDF7",
    description:
      "Known as the 'Heart of the Quran'. Traditionally recited for the deceased, Yaseen brings peace to the departed soul and immense reward to the reader.",
    verse: "يٰسٓ وَالْقُرْاٰنِ الْحَكِيمِ",
    verses: 83,
    benefits: ["Heart of the Quran", "For the deceased", "Deep spiritual reward"],
  },
  {
    id: "custom",
    name: "Custom Dua",
    arabic: "دعاء خاص",
    english: "Your Own Words",
    surah: "Personal",
    icon: "✍️",
    color: "#4CAF50",
    bg: "linear-gradient(135deg, #4CAF50, #66BB6A)",
    lightBg: "#E8F5E9",
    description:
      "Write a personal dua in your own words — in any language. Sometimes the most heartfelt prayer is the one that comes straight from your own heart.",
    verse: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
    verses: 0,
    benefits: ["Your own language", "Personal connection", "Unlimited length"],
  },
];

export default function PrayerTypes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("fatiha");

  const activePrayer = prayers.find((p) => p.id === active)!;

  return (
    <section
      id="prayers"
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
            style={{ background: "#7B68A620", color: "#7B68A6" }}
          >
            📿 Authentic Duas
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Choose Your Prayer
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#666666" }}>
            Select from authentic Quranic surahs or write a personal dua. Each
            carries immense spiritual value for your loved ones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Selector tabs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-3"
          >
            {prayers.map((prayer) => (
              <button
                key={prayer.id}
                onClick={() => setActive(prayer.id)}
                className="w-full text-left rounded-2xl p-4 transition-all duration-300"
                style={{
                  background: active === prayer.id ? "white" : "transparent",
                  border: active === prayer.id
                    ? `2px solid ${prayer.color}`
                    : "2px solid #EEEBE3",
                  boxShadow: active === prayer.id
                    ? `0 8px 24px ${prayer.color}20`
                    : "none",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: prayer.lightBg }}
                  >
                    {prayer.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-bold text-base"
                        style={{ color: active === prayer.id ? prayer.color : "#1A1A1A" }}
                      >
                        {prayer.name}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: prayer.lightBg, color: prayer.color }}
                      >
                        {prayer.surah}
                      </span>
                    </div>
                    <div className="text-sm" style={{ color: "#666" }}>
                      {prayer.english}
                    </div>
                  </div>
                  <div
                    className="text-lg font-bold flex-shrink-0"
                    style={{ fontFamily: "serif", color: prayer.color, opacity: 0.7 }}
                  >
                    {prayer.arabic}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right: Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden"
            style={{
              boxShadow: `0 20px 60px ${activePrayer.color}25`,
            }}
          >
            {/* Gradient header */}
            <div
              className="p-8 text-white"
              style={{ background: activePrayer.bg }}
            >
              <div className="text-4xl mb-4">{activePrayer.icon}</div>
              <div
                className="text-3xl mb-2 text-right"
                style={{ fontFamily: "serif", direction: "rtl" }}
              >
                {activePrayer.verse}
              </div>
              <div className="text-white/70 text-sm">First verse of {activePrayer.name}</div>
            </div>

            {/* Content */}
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1A1A1A" }}>
                {activePrayer.name}
                <span className="text-base font-normal ml-2" style={{ color: "#999" }}>
                  — {activePrayer.english}
                </span>
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#555" }}>
                {activePrayer.description}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2">
                {activePrayer.benefits.map((b) => (
                  <span
                    key={b}
                    className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: activePrayer.lightBg,
                      color: activePrayer.color,
                    }}
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className="mt-6 p-4 rounded-2xl flex items-center gap-3"
                style={{ background: activePrayer.lightBg }}
              >
                <span className="text-2xl">🤲</span>
                <div>
                  <div className="font-semibold text-sm" style={{ color: activePrayer.color }}>
                    Send {activePrayer.name} for your loved one
                  </div>
                  <div className="text-xs" style={{ color: "#888" }}>
                    Join thousands praying together
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
