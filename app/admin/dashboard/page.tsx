"use client";

import { motion } from "framer-motion";
import { Users, AlertCircle, TrendingUp, Clock } from "lucide-react";
import StatCard from "../components/ui/StatCard";
import Badge from "../components/ui/Badge";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Users",
      value: "12,500",
      change: "+127 today",
      icon: Users,
      color: "#006B6B",
      trend: "up" as const,
    },
    {
      label: "Total Prayers",
      value: "124,847",
      change: "+894 today",
      icon: "🤲",
      color: "#7B68A6",
      trend: "up" as const,
    },
    {
      label: "Pending Reports",
      value: "23",
      change: "5 urgent",
      icon: AlertCircle,
      color: "#E53935",
      trend: "neutral" as const,
    },
    {
      label: "Active Now",
      value: "1,247",
      change: "Last 15 min",
      icon: TrendingUp,
      color: "#4CAF50",
      trend: "up" as const,
    },
  ];

  const pendingReports = [
    {
      id: 1,
      type: "Scam",
      content: "Donate $100 to my sick child (suspicious link)",
      reporter: "Ahmed Khan",
      reports: 5,
      time: "2 min ago",
      priority: "urgent",
    },
    {
      id: 2,
      type: "Inappropriate",
      content: "Request contains offensive language",
      reporter: "Fatima Ali",
      reports: 3,
      time: "15 min ago",
      priority: "high",
    },
    {
      id: 3,
      type: "Incorrect Info",
      content: "Wrong person's information",
      reporter: "Omar Hassan",
      reports: 1,
      time: "1 hour ago",
      priority: "medium",
    },
  ];

  const recentActivity = [
    { action: "User signup", user: "Ahmad K.", time: "2 min ago", type: "user" },
    { action: "Report filed", user: "Sara M.", time: "5 min ago", type: "report" },
    { action: "Prayer goal reached", user: "Khalid R.", time: "8 min ago", type: "success" },
    { action: "New support ticket", user: "Nour A.", time: "12 min ago", type: "support" },
    { action: "User banned", user: "Spam User", time: "15 min ago", type: "warning" },
  ];

  return (
    <div className="p-8">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#1A1A1A" }}>
          Welcome back, Admin 👋
        </h1>
        <p className="text-base" style={{ color: "#666" }}>
          Here's what's happening with DuaCircle today
        </p>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            {...stat}
            delay={i * 0.1}
          />
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Pending Reports Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="rounded-2xl p-6"
          style={{
            background: "white",
            border: "1px solid #EEEBE3",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold" style={{ color: "#1A1A1A" }}>
              🚨 Pending Reports
            </h3>
            <Badge variant="danger">{pendingReports.length} pending</Badge>
          </div>

          <div className="space-y-4">
            {pendingReports.map((report) => (
              <div
                key={report.id}
                className="p-4 rounded-xl transition-colors hover:bg-gray-50 cursor-pointer"
                style={{ border: "1px solid #EEEBE3" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        report.priority === "urgent"
                          ? "danger"
                          : report.priority === "high"
                          ? "warning"
                          : "neutral"
                      }
                    >
                      {report.type}
                    </Badge>
                    <span className="text-xs" style={{ color: "#999" }}>
                      {report.reports} reports
                    </span>
                  </div>
                  <span className="text-xs" style={{ color: "#999" }}>
                    {report.time}
                  </span>
                </div>
                <p className="text-sm mb-2" style={{ color: "#1A1A1A" }}>
                  {report.content}
                </p>
                <p className="text-xs" style={{ color: "#666" }}>
                  Reported by: {report.reporter}
                </p>
              </div>
            ))}
          </div>

          <button
            className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            style={{
              background: "#F8F6F0",
              color: "#006B6B",
            }}
          >
            View All Reports →
          </button>
        </motion.div>

        {/* Recent Activity Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="rounded-2xl p-6"
          style={{
            background: "white",
            border: "1px solid #EEEBE3",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold" style={{ color: "#1A1A1A" }}>
              📋 Recent Activity
            </h3>
            <Clock size={16} style={{ color: "#999" }} />
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity, i) => {
              const typeColors: Record<string, string> = {
                user: "#006B6B",
                report: "#E53935",
                success: "#4CAF50",
                support: "#C9A55A",
                warning: "#F59E0B",
              };

              return (
                <div
                  key={i}
                  className="flex items-start gap-3 pb-3"
                  style={{
                    borderBottom:
                      i < recentActivity.length - 1
                        ? "1px solid #F8F6F0"
                        : "none",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: typeColors[activity.type] }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm" style={{ color: "#1A1A1A" }}>
                      <span className="font-semibold">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#999" }}>
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            style={{
              background: "#F8F6F0",
              color: "#006B6B",
            }}
          >
            View All Activity →
          </button>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="rounded-2xl p-8 text-center"
        style={{
          background: "linear-gradient(135deg, #E0F2F2, #C8E6E6)",
          border: "2px solid #B3E0E0",
        }}
      >
        <h3 className="text-xl font-bold mb-3" style={{ color: "#006B6B" }}>
          🚀 Quick Actions
        </h3>
        <p className="text-sm mb-6 max-w-2xl mx-auto" style={{ color: "#555" }}>
          Common admin tasks at your fingertips
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: "👥", label: "View All Users", href: "/admin/users" },
            { icon: "🚨", label: "Moderate Content", href: "/admin/moderation" },
            { icon: "💬", label: "Support Tickets", href: "/admin/support" },
            { icon: "📧", label: "Send Notification", href: "/admin/communication" },
          ].map((action) => (
            <button
              key={action.label}
              className="px-4 py-4 rounded-xl text-sm font-medium transition-all hover:scale-105"
              style={{
                background: "white",
                border: "1px solid #B3E0E0",
                color: "#006B6B",
              }}
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              {action.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
