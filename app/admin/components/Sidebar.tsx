"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  Image,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
    color: "#006B6B",
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    href: "/admin/users",
    color: "#7B68A6",
  },
  {
    id: "moderation",
    label: "Moderation",
    icon: AlertCircle,
    href: "/admin/moderation",
    color: "#E53935",
    badge: 23,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: TrendingUp,
    href: "/admin/analytics",
    color: "#4CAF50",
  },
  {
    id: "support",
    label: "Support",
    icon: MessageSquare,
    href: "/admin/support",
    color: "#C9A55A",
    badge: 5,
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Image,
    href: "/admin/marketing",
    color: "#7C3AED",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
    color: "#666",
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ width: 280 }}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #001A1A 0%, #003D3D 100%)",
        borderRight: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between p-6">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: "linear-gradient(135deg, #C9A55A, #F9C252)",
                }}
              >
                🤲
              </div>
              <div>
                <div className="text-white font-bold text-base">DuaCircle</div>
                <div className="text-white/50 text-xs">Admin Panel</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <Link key={item.id} href={item.href}>
              <motion.div
                whileHover={{ x: collapsed ? 0 : 4 }}
                className="relative flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all duration-200"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.1)"
                    : "transparent",
                  color: isActive ? "white" : "rgba(255,255,255,0.6)",
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{ background: item.color }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Icon */}
                <div
                  className="flex-shrink-0"
                  style={{ color: isActive ? item.color : "inherit" }}
                >
                  <Icon size={20} />
                </div>

                {/* Label */}
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      {item.badge && (
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-bold"
                          style={{
                            background: item.color,
                            color: "white",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Badge (collapsed) */}
                {collapsed && item.badge && (
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: item.color,
                      color: "white",
                    }}
                  >
                    {item.badge}
                  </div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="rounded-xl p-4"
              style={{
                background: "rgba(201,165,90,0.1)",
                border: "1px solid rgba(201,165,90,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-sm">💡</div>
                <div className="text-xs font-semibold" style={{ color: "#F9C252" }}>
                  Quick Tip
                </div>
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Press{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                  Ctrl+K
                </kbd>{" "}
                to search
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
