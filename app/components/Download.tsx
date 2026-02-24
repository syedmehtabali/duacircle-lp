"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Download() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="download"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #F8F6F0 0%, #EEE9DC 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden text-center"
          style={{
            background: "linear-gradient(160deg, #002929 0%, #006B6B 50%, #003D3D 100%)",
            padding: "80px 40px",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #C9A55A, transparent)",
              filter: "blur(60px)",
              transform: "translate(-40%, -40%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #7B68A6, transparent)",
              filter: "blur(60px)",
              transform: "translate(40%, 40%)",
            }}
          />

          {/* Content */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="text-6xl mb-6"
            >
              🤲
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.1)", color: "#C9A55A" }}
              >
                🎁 100% Free Forever · No Ads · No Subscriptions
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            >
              Start Sending Duas Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg mb-10 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Join 12,500+ Muslims worldwide who are honoring their loved ones
              through the power of collective prayer. Create your first dua request
              in under 2 minutes.
            </motion.p>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-4 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #C9A55A, #F9C252)",
                  boxShadow: "0 12px 40px rgba(201,165,90,0.4)",
                }}
              >
                <span className="text-3xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs font-medium opacity-70" style={{ color: "#1A1A1A" }}>
                    Download on the
                  </div>
                  <div className="text-lg font-bold" style={{ color: "#1A1A1A" }}>
                    App Store
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-4 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="text-3xl">▶</span>
                <div className="text-left">
                  <div className="text-xs font-medium text-white/60">Get it on</div>
                  <div className="text-lg font-bold text-white">Google Play</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {[
                { icon: "🔒", text: "Private & Secure" },
                { icon: "🆓", text: "No Hidden Costs" },
                { icon: "📵", text: "No Intrusive Ads" },
                { icon: "🌍", text: "Available Worldwide" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
