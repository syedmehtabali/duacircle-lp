"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    id: "home",
    title: "Home Feed",
    description: "Browse prayer requests from the global community",
    color: "#006B6B",
    gradient: "linear-gradient(135deg, #006B6B, #008A8A)",
  },
  {
    id: "create",
    title: "Create Request",
    description: "Post a dua request in seconds with guided flow",
    color: "#7B68A6",
    gradient: "linear-gradient(135deg, #7B68A6, #9482BA)",
  },
  {
    id: "family",
    title: "Family Circle",
    description: "Private prayer space for your loved ones",
    color: "#C9A55A",
    gradient: "linear-gradient(135deg, #C9A55A, #F9C252)",
  },
  {
    id: "prayer",
    title: "Prayer Screen",
    description: "Beautiful dua text with timer and log button",
    color: "#4CAF50",
    gradient: "linear-gradient(135deg, #4CAF50, #66BB6A)",
  },
  {
    id: "profile",
    title: "Profile & Stats",
    description: "Track prayers, hasanat, streaks, and achievements",
    color: "#E53935",
    gradient: "linear-gradient(135deg, #E53935, #C62828)",
  },
];

export default function Screenshots() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const current = screenshots[currentIndex];

  return (
    <section
      id="screenshots"
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
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-sm font-medium"
            style={{ background: "#E0F2F2", color: "#006B6B" }}
          >
            📱 Beautiful Design
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Simple, Beautiful, Powerful
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
            Every screen is designed with care—clean interfaces, smooth
            animations, and meaningful interactions that make prayer feel special.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main display */}
          <div className="flex flex-col items-center">
            {/* Phone mockup */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative mb-8"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-[44px]"
                  style={{
                    background: `radial-gradient(circle, ${current.color}40 0%, transparent 70%)`,
                    filter: "blur(40px)",
                    transform: "scale(1.1)",
                  }}
                />

                {/* Phone frame */}
                <div
                  className="relative rounded-[44px] overflow-hidden"
                  style={{
                    width: 300,
                    height: 620,
                    background: "#0A1A1A",
                    border: "2px solid rgba(255,255,255,0.12)",
                    boxShadow:
                      "0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full z-10"
                    style={{ width: 100, height: 28, background: "#0A1A1A" }}
                  />

                  {/* Screen content placeholder */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: current.gradient,
                      paddingTop: 44,
                    }}
                  >
                    <div className="text-center px-8">
                      <div className="text-6xl mb-4">📱</div>
                      <div className="text-white text-xl font-bold mb-2">
                        {current.title}
                      </div>
                      <div className="text-white/70 text-sm">
                        {current.description}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Screen info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-8"
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: current.color }}
                >
                  {current.title}
                </h3>
                <p className="text-base" style={{ color: "#666" }}>
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-6 mb-8">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "white",
                  border: "1px solid #EEEBE3",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <ChevronLeft size={20} style={{ color: "#1A1A1A" }} />
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {screenshots.map((screenshot, i) => (
                  <button
                    key={screenshot.id}
                    onClick={() => setCurrentIndex(i)}
                    className="transition-all duration-300"
                    style={{
                      width: currentIndex === i ? 32 : 8,
                      height: 8,
                      borderRadius: 4,
                      background:
                        currentIndex === i ? current.color : "#EEEBE3",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "white",
                  border: "1px solid #EEEBE3",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <ChevronRight size={20} style={{ color: "#1A1A1A" }} />
              </button>
            </div>

            {/* Feature tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                "🎨 Beautiful UI",
                "🚀 Lightning Fast",
                "📱 iOS & Android",
                "🌙 Dark Mode",
                "🌍 50+ Languages",
              ].map((feature) => (
                <div
                  key={feature}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "white",
                    border: "1px solid #EEEBE3",
                    color: "#666",
                  }}
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Auto-slide hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12 text-xs"
          style={{ color: "#999" }}
        >
          Swipe or use arrows to explore more screens
        </motion.div>
      </div>
    </section>
  );
}
