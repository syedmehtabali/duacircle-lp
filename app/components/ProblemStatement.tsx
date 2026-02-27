"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const painPoints = [
  {
    icon: "💔",
    title: "Feeling Alone in Hardship",
    description:
      "Grief and loss can be isolating. When you're hurting, it's hard to know where to turn for spiritual support.",
    color: "#006B6B",
    bg: "#E0F2F2",
  },
  {
    icon: "🤷",
    title: "Don't Know Who to Ask",
    description:
      "You want prayers for your loved ones, but reaching out individually feels overwhelming and uncertain.",
    color: "#C9A55A",
    bg: "#FFF8EC",
  },
  {
    icon: "🙏",
    title: "Hard to Ask Repeatedly",
    description:
      "Asking the same people for continued prayers feels like a burden, even when the need is ongoing.",
    color: "#7B68A6",
    bg: "#F1EDF7",
  },
];

export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #F8F6F0 0%, #E8F0EE 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
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
            💭 We Understand
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            We All Need Prayers
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#666666" }}
          >
            Life brings challenges — illness, loss, uncertainty, hardship. In
            these moments, the power of collective prayer from the Ummah can
            bring comfort and hope.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center rounded-3xl p-8"
              style={{
                background: "white",
                border: "1px solid #EEEBE3",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: point.bg }}
              >
                {point.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#1A1A1A" }}
              >
                {point.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#666666" }}>
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
