"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "124,847+", label: "Total Prayers Made", icon: "🤲", color: "#006B6B" },
  { value: "12,500+", label: "Community Members", icon: "🌍", color: "#C9A55A" },
  { value: "45,000+", label: "Loved Ones Honored", icon: "💚", color: "#7B68A6" },
  { value: "98%", label: "Daily Active Users", icon: "🔥", color: "#4CAF50" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16"
      style={{ background: "linear-gradient(135deg, #002929 0%, #003D3D 50%, #002929 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{
                  background: `${stat.color}20`,
                  border: `1px solid ${stat.color}40`,
                }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl lg:text-4xl font-extrabold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
