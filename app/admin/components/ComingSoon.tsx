"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
  icon: LucideIcon | string;
  features?: string[];
}

export default function ComingSoon({
  title,
  description,
  icon: Icon,
  features = [],
}: ComingSoonProps) {
  return (
    <div className="p-8 flex items-center justify-center min-h-[calc(100vh-64px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full rounded-3xl p-12 text-center"
        style={{
          background: "white",
          border: "2px solid #EEEBE3",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        }}
      >
        <div className="text-6xl mb-6">
          {typeof Icon === "string" ? Icon : <Icon size={64} style={{ color: "#006B6B", margin: "0 auto" }} />}
        </div>
        <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#1A1A1A" }}>
          {title}
        </h2>
        <p className="text-lg mb-8" style={{ color: "#666" }}>
          {description}
        </p>

        {features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="px-4 py-3 rounded-xl text-sm font-medium text-left"
                style={{
                  background: "#F8F6F0",
                  border: "1px solid #EEEBE3",
                  color: "#1A1A1A",
                }}
              >
                ✓ {feature}
              </motion.div>
            ))}
          </div>
        )}

        <p className="mt-8 text-sm" style={{ color: "#999" }}>
          This feature is currently in development
        </p>
      </motion.div>
    </div>
  );
}
