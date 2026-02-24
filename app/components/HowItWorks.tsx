"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: "📝",
    title: "Create a Memorial",
    description:
      "Add your deceased loved one's profile — their name, photo, date of birth and death in Hijri calendar, biography, and a cherished memory you hold dear.",
    color: "#006B6B",
    bg: "linear-gradient(135deg, #E0F2F2, #B3E0E0)",
  },
  {
    step: "02",
    icon: "🤲",
    title: "Post a Dua Request",
    description:
      "Select a Quranic surah — Al-Fatiha, Yaseen, or Al-Ikhlas — or write your own heartfelt dua. Set a prayer goal and share it with the community or your family circle.",
    color: "#7B68A6",
    bg: "linear-gradient(135deg, #F1EDF7, #DDD4EE)",
  },
  {
    step: "03",
    icon: "🌍",
    title: "Community Prays Together",
    description:
      "Muslims around the world see your request and pray in real-time. Watch the counter rise as Hasanat (spiritual rewards) flow to you and your loved one.",
    color: "#C9A55A",
    bg: "linear-gradient(135deg, #FFF8EC, #FEEECE)",
  },
  {
    step: "04",
    icon: "🏆",
    title: "Track & Celebrate",
    description:
      "Monitor your prayer streak, earn achievement badges, and see your global impact. Celebrate every milestone as you become a beacon of continuous charity.",
    color: "#4CAF50",
    bg: "linear-gradient(135deg, #E8F5E9, #C8E6C9)",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #F8F6F0 0%, #EEE9DC 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-sm font-medium"
            style={{ background: "#006B6B20", color: "#006B6B" }}
          >
            🕌 Simple & Meaningful
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            How DuaCircle Works
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#666666" }}>
            From creating a memorial to earning Hasanat — your journey of
            continuous blessings starts in four simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5"
            style={{
              background:
                "linear-gradient(90deg, #006B6B, #7B68A6, #C9A55A, #4CAF50)",
              opacity: 0.3,
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.15, duration: 0.7, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="relative w-20 h-20 rounded-3xl flex items-center justify-center text-3xl mb-6 card-shadow"
                  style={{ background: step.bg }}
                >
                  {step.icon}
                  {/* Step number */}
                  <div
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: step.color }}
                  >
                    {step.step}
                  </div>
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#1A1A1A" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20 text-center rounded-3xl p-10"
          style={{
            background: "linear-gradient(135deg, #003D3D, #006B6B)",
            boxShadow: "0 20px 60px rgba(0,107,107,0.2)",
          }}
        >
          <div className="text-4xl mb-4">📿</div>
          <blockquote
            className="text-xl lg:text-2xl font-semibold text-white mb-2 max-w-3xl mx-auto"
          >
            &ldquo;When a person dies, all their deeds end except three: a
            continuing charity, beneficial knowledge, or a child who prays for them.&rdquo;
          </blockquote>
          <cite className="text-sm" style={{ color: "#C9A55A" }}>
            — Sahih Muslim
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
