"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Home,
  FileText,
  Users,
  User,
  Plus,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function WebAppPage() {
  const [selectedTab, setSelectedTab] = useState<"rewards" | "prayers" | "people">("rewards");

  return (
    <div className="min-h-screen" style={{ background: "#F5F5F5" }}>
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #14B8A6, #0D9488)",
                }}
              >
                🤲
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">DuaCircle</span>
                <div className="text-xs text-gray-500" style={{ fontFamily: "serif" }}>
                  دعا حلقہ
                </div>
              </div>
            </div>

            {/* User & Notifications */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Bell size={20} className="text-gray-600" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="text-sm text-gray-500" style={{ fontFamily: "serif" }}>
            السلام عليكم
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Akhtar Ali Brohi</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
            <Calendar size={14} />
            <span>10 Ramadan 1447 AH</span>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-sm p-6 mb-6"
        >
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "🤲", label: "Prayers Offered", value: "808", color: "#14B8A6" },
              { icon: "💚", label: "People Helped", value: "1", color: "#10B981" },
              { icon: "🏆", label: "Rewards Earned", value: "7795.4B", color: "#A78BFA" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-sm"
                  style={{ background: `${stat.color}15` }}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {[
            { title: "Create Request", icon: "✏️", color: "linear-gradient(135deg, #14B8A6, #0D9488)" },
            { title: "Family Circle", icon: "👨‍👩‍👧", color: "linear-gradient(135deg, #F59E0B, #D97706)" },
            { title: "Invite Friends", icon: "✉️", color: "linear-gradient(135deg, #A78BFA, #8B5CF6)" },
            { title: "Community Prayers", icon: "❤️", color: "linear-gradient(135deg, #EC4899, #DB2777)" },
          ].map((card, index) => (
            <motion.button
              key={card.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl p-6 flex flex-col items-start shadow-sm transition-shadow hover:shadow-md"
              style={{
                background: card.color,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <span className="text-2xl">{card.icon}</span>
              </div>
              <div className="text-base font-bold text-white">{card.title}</div>
            </motion.button>
          ))}
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-sm p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Progress</h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {[
              { id: "rewards" as const, icon: "🏆", label: "Rewards" },
              { id: "prayers" as const, icon: "🤲", label: "Prayers" },
              { id: "people" as const, icon: "💚", label: "People" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: selectedTab === tab.id ? "#A78BFA" : "#F3F4F6",
                  color: selectedTab === tab.id ? "white" : "#6B7280",
                }}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-2xl">
            <div className="text-center">
              <TrendingUp size={48} className="text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Progress chart coming soon</p>
            </div>
          </div>
        </motion.div>

        {/* Hadith Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 rounded-3xl p-6 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #E9D5FF, #DDD6FE)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📖</span>
            <span className="text-sm font-semibold text-purple-900">Hadith</span>
          </div>
          <p className="text-base text-purple-900 italic leading-relaxed mb-4">
            "When a person dies, all their deeds end except three: a continuing charity,
            beneficial knowledge, or a righteous child who prays for them."
          </p>
          <p className="text-sm font-medium text-purple-700">— Sahih Muslim</p>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #14B8A6, #0D9488)",
        }}
      >
        <Plus size={28} className="text-white" />
      </motion.button>

      {/* Bottom Navigation (Mobile-like) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around py-3 px-4">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: FileText, label: "Requests" },
            { icon: null, label: "Pray", isFAB: true },
            { icon: Users, label: "Family" },
            { icon: User, label: "Profile" },
          ].map((item, i) => {
            if (item.isFAB) {
              return (
                <div key={i} className="relative -mt-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                    style={{ background: "linear-gradient(135deg, #14B8A6, #0D9488)" }}
                  >
                    <span className="text-2xl">🌿</span>
                  </div>
                </div>
              );
            }

            const Icon = item.icon!;
            return (
              <button key={i} className="flex flex-col items-center gap-1">
                <Icon
                  size={24}
                  style={{ color: item.active ? "#14B8A6" : "#9CA3AF" }}
                />
                {item.active && (
                  <div className="w-1 h-1 rounded-full bg-teal-500" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
