"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const members = [
  { name: "Ahmed", initials: "AK", role: "Admin", color: "#006B6B" },
  { name: "Fatima", initials: "FH", role: "Member", color: "#7B68A6" },
  { name: "Omar", initials: "OM", role: "Member", color: "#C9A55A" },
  { name: "Zainab", initials: "ZR", role: "Member", color: "#4CAF50" },
];

const familyFeatures = [
  {
    icon: "🔒",
    title: "Private & Secure",
    desc: "Only invited family members can see and pray on your family-only requests.",
  },
  {
    icon: "👥",
    title: "Invite by Email",
    desc: "Add family members instantly. Roles include admin and member permissions.",
  },
  {
    icon: "💝",
    title: "Shared Memorials",
    desc: "All family members can view and contribute to your loved one's memorial profile.",
  },
  {
    icon: "🔔",
    title: "Family Notifications",
    desc: "Get notified when a family member prays or a goal is reached together.",
  },
];

export default function FamilyCircle() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="family"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #EEE9DC 0%, #F8F6F0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Family circle card */}
            <div
              className="rounded-3xl p-8 card-shadow"
              style={{
                background: "white",
                border: "1px solid #EEEBE3",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#7B68A6" }}>
                    👨‍👩‍👧 Family Circle
                  </div>
                  <div className="text-xl font-bold" style={{ color: "#1A1A1A" }}>
                    Al-Rashidi Family
                  </div>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "#E0F2F2", color: "#006B6B" }}
                >
                  4 Members
                </div>
              </div>

              {/* Members */}
              <div className="space-y-3 mb-6">
                {members.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "#F8F6F0" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: m.color }}
                    >
                      {m.initials}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                        {m.name}
                      </div>
                      <div className="text-xs" style={{ color: "#999" }}>{m.role}</div>
                    </div>
                    <div
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: "#E0F2F260", color: "#006B6B" }}
                    >
                      Active ✓
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Family prayer request */}
              <div
                className="rounded-2xl p-4"
                style={{
                  border: "1.5px solid #7B68A640",
                  background: "#F1EDF780",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div
                      className="text-xs font-semibold mb-1"
                      style={{ color: "#7B68A6" }}
                    >
                      🔒 Family Only
                    </div>
                    <div className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
                      For Grandfather Ibrahim
                    </div>
                    <div
                      className="text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block"
                      style={{ background: "#7B68A620", color: "#7B68A6" }}
                    >
                      Yaseen
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: "#7B68A6" }}>67</div>
                    <div className="text-xs" style={{ color: "#999" }}>/ 100 prayers</div>
                  </div>
                </div>
                <div
                  className="w-full rounded-full h-2"
                  style={{ background: "#7B68A620" }}
                >
                  <div
                    className="h-2 rounded-full"
                    style={{ width: "67%", background: "linear-gradient(90deg, #7B68A6, #9482BA)" }}
                  />
                </div>
                <div
                  className="mt-3 text-center py-2.5 rounded-xl text-xs font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #7B68A6, #9482BA)" }}
                >
                  🤲 Pray Together as a Family
                </div>
              </div>
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
              style={{ background: "#7B68A620", color: "#7B68A6" }}
            >
              👨‍👩‍👧‍👦 Family Circles
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
              style={{ color: "#1A1A1A" }}
            >
              Pray Together
              <br />
              <span style={{ color: "#7B68A6" }}>as a Family</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#666" }}>
              Create a private family circle and invite your relatives. Share duas only
              your family can see, keep memorials private, and pray together across
              any distance in the world.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {familyFeatures.map((f, i) => (
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
                    style={{ background: "#F1EDF7" }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
