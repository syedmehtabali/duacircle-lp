"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon: LucideIcon | string;
  color: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
}

export default function StatCard({
  label,
  value,
  change,
  icon: Icon,
  color,
  trend = "neutral",
  delay = 0,
}: StatCardProps) {
  const trendColors = {
    up: "#4CAF50",
    down: "#E53935",
    neutral: "#999",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="rounded-2xl p-6"
      style={{
        background: "white",
        border: "1px solid #EEEBE3",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${color}15` }}
        >
          {typeof Icon === "string" ? (
            Icon
          ) : (
            <Icon size={24} style={{ color }} />
          )}
        </div>
      </div>

      <div className="text-3xl font-extrabold mb-2" style={{ color }}>
        {value}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm font-medium" style={{ color: "#1A1A1A" }}>
          {label}
        </div>
        {change && (
          <div
            className="text-xs font-medium"
            style={{ color: trendColors[trend] }}
          >
            {change}
          </div>
        )}
      </div>
    </motion.div>
  );
}
