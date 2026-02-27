"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

function PhoneMockup() {
  return (
    <div className="relative float-animation" style={{ width: 280, margin: "0 auto" }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[44px]"
        style={{
          background: "radial-gradient(circle, rgba(0,107,107,0.4) 0%, transparent 70%)",
          filter: "blur(30px)",
          transform: "scale(1.2)",
        }}
      />
      {/* Phone frame */}
      <div
        className="relative rounded-[44px] overflow-hidden"
        style={{
          width: 280,
          height: 580,
          background: "#F5F5F5",
          border: "2px solid rgba(0,0,0,0.08)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full z-10"
          style={{ width: 100, height: 28, background: "#000000" }}
        />

        {/* App UI simulation */}
        <div className="absolute inset-0 flex flex-col" style={{ paddingTop: 44 }}>
          {/* Header */}
          <div className="px-5 py-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-gray-400" style={{ fontFamily: "serif" }}>السلام عليكم</div>
                <div className="text-lg font-bold text-gray-900 mt-0.5">Akhtar Ali Brohi</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] text-gray-400">📅</span>
                  <span className="text-[10px] text-gray-400">10 Ramadan 1447 AH</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  <span className="text-gray-600">🔔</span>
                </div>
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                  style={{ background: "#EF4444" }}
                />
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div
            className="mx-4 mt-2 rounded-3xl p-4 grid grid-cols-3 gap-2 shadow-sm"
            style={{ background: "white" }}
          >
            {[
              { icon: "🤲", label: "Prayers\nOffered", value: "808", color: "#14B8A6" },
              { icon: "💚", label: "People\nHelped", value: "1", color: "#10B981" },
              { icon: "🏆", label: "Rewards\nEarned", value: "7795.4B", color: "#A78BFA" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-10 h-10 rounded-2xl mx-auto mb-1 flex items-center justify-center" style={{ background: `${s.color}15` }}>
                  <span className="text-base">{s.icon}</span>
                </div>
                <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[8px] text-gray-400 leading-tight whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Action cards grid */}
          <div className="flex-1 overflow-hidden px-4 mt-4 grid grid-cols-2 gap-2">
            {[
              { title: "Create\nRequest", icon: "✏️", color: "linear-gradient(135deg, #14B8A6, #0D9488)" },
              { title: "Family\nCircle", icon: "👨‍👩‍👧", color: "linear-gradient(135deg, #F59E0B, #D97706)" },
              { title: "Invite\nFriends", icon: "✉️", color: "linear-gradient(135deg, #A78BFA, #8B5CF6)" },
              { title: "Community\nPrayers", icon: "❤️", color: "linear-gradient(135deg, #EC4899, #DB2777)" },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-3 flex flex-col justify-between shadow-sm"
                style={{
                  background: card.color,
                  minHeight: "80px",
                }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <span className="text-base">{card.icon}</span>
                </div>
                <div className="text-xs font-bold text-white leading-tight whitespace-pre-line mt-2">
                  {card.title}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="px-4 pb-3 pt-2 flex justify-around items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-lg" style={{ color: "#14B8A6" }}>🏠</span>
              <div className="absolute bottom-2 w-1 h-1 rounded-full" style={{ background: "#14B8A6" }} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-lg text-gray-400">📋</span>
            </div>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg -mt-6"
              style={{ background: "linear-gradient(135deg, #14B8A6, #0D9488)" }}
            >
              <span className="text-xl">🌿</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-lg text-gray-400">👨‍👩‍👧</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-lg text-gray-400">👤</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -left-16 top-24 rounded-xl px-3 py-2 flex items-center gap-2"
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <span className="text-lg">🤲</span>
        <div>
          <div className="text-xs font-semibold text-white">+1 Prayer</div>
          <div className="text-[10px] text-white/60">Hasanat earned</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -right-16 bottom-32 rounded-xl px-3 py-2"
        style={{
          background: "rgba(201, 165, 90, 0.2)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(201, 165, 90, 0.3)",
        }}
      >
        <div className="text-xs font-semibold" style={{ color: "#F9C252" }}>Goal Reached! 🎉</div>
        <div className="text-[10px] text-white/60">100 prayers done</div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #001A1A 0%, #003D3D 30%, #006B6B 60%, #004D4D 80%, #001A1A 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-20 left-10 rounded-full"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(0,138,138,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(123,104,166,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(201,165,90,0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Arabic pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#4CAF50", boxShadow: "0 0 8px #4CAF50" }}
            />
            <span className="text-sm text-white/80">100% Free Forever · No Ads</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Turn Grief Into{" "}
            <span className="shimmer-text">Continuous</span>
            <br />
            Blessings
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg text-white/70 leading-relaxed mb-4 max-w-lg"
          >
            DuaCircle connects you with a global Muslim community to pray for your
            deceased loved ones. Post a dua request, and thousands of hearts unite
            in prayer — earning you and them continuous blessings.
          </motion.p>

          {/* Arabic subtitle */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base mb-10"
            style={{ color: "#C9A55A", fontFamily: "serif", direction: "rtl" }}
          >
            إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #C9A55A, #F9C252)",
                color: "#1A1A1A",
                boxShadow: "0 8px 30px rgba(201,165,90,0.35)",
              }}
            >
              <span className="text-xl">🍎</span>
              <div className="text-left">
                <div className="text-[10px] font-normal opacity-70">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-base"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              <span className="text-xl">▶</span>
              <div className="text-left">
                <div className="text-[10px] font-normal opacity-70">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-6"
          >
            {[
              { icon: "🤲", text: "124K+ Prayers Made" },
              { icon: "🌍", text: "50+ Countries" },
              { icon: "⭐", text: "4.9 Rating" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm text-white/60">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Phone */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
