"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, LogOut, User, Settings, ChevronDown } from "lucide-react";

export default function TopBar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      type: "report",
      message: "New scam report on prayer request #12345",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      type: "user",
      message: "Suspicious user activity detected",
      time: "10 min ago",
      unread: true,
    },
    {
      id: 3,
      type: "support",
      message: "New support ticket from user",
      time: "1 hour ago",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div
      className="sticky top-0 z-40 h-16 flex items-center justify-between px-6"
      style={{
        background: "white",
        borderBottom: "1px solid #EEEBE3",
      }}
    >
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search size={18} style={{ color: "#999" }} />
          </div>
          <input
            type="text"
            placeholder="Search users, requests, tickets... (Ctrl+K)"
            className="w-full pl-10 pr-4 py-2 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              background: "#F8F6F0",
              border: "1px solid #EEEBE3",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#006B6B";
              e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#EEEBE3";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            style={{
              background: showNotifications ? "#F8F6F0" : "transparent",
              color: "#666",
            }}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "#E53935" }}
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid #EEEBE3",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                }}
              >
                {/* Header */}
                <div
                  className="px-4 py-3"
                  style={{ borderBottom: "1px solid #EEEBE3" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm" style={{ color: "#1A1A1A" }}>
                      Notifications
                    </h3>
                    <button
                      className="text-xs font-medium"
                      style={{ color: "#006B6B" }}
                    >
                      Mark all as read
                    </button>
                  </div>
                </div>

                {/* Notifications list */}
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="px-4 py-3 transition-colors hover:bg-gray-50 cursor-pointer"
                      style={{
                        borderBottom: "1px solid #F8F6F0",
                        background: notif.unread ? "#F8F6F0" : "white",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{
                            background: notif.unread ? "#006B6B" : "transparent",
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm" style={{ color: "#1A1A1A" }}>
                            {notif.message}
                          </p>
                          <p className="text-xs mt-1" style={{ color: "#999" }}>
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="px-4 py-3 text-center"
                  style={{ borderTop: "1px solid #EEEBE3" }}
                >
                  <button
                    className="text-xs font-medium"
                    style={{ color: "#006B6B" }}
                  >
                    View all notifications →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div
          className="w-px h-8"
          style={{ background: "#EEEBE3" }}
        />

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors"
            style={{
              background: showUserMenu ? "#F8F6F0" : "transparent",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #006B6B, #008A8A)",
              }}
            >
              SA
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                Super Admin
              </div>
              <div className="text-xs" style={{ color: "#999" }}>
                admin@duacircle.com
              </div>
            </div>
            <ChevronDown size={16} style={{ color: "#999" }} />
          </button>

          {/* User dropdown */}
          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid #EEEBE3",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="p-2">
                  <button
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors hover:bg-gray-50"
                  >
                    <User size={16} style={{ color: "#666" }} />
                    <span className="text-sm" style={{ color: "#1A1A1A" }}>
                      Profile
                    </span>
                  </button>
                  <button
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors hover:bg-gray-50"
                  >
                    <Settings size={16} style={{ color: "#666" }} />
                    <span className="text-sm" style={{ color: "#1A1A1A" }}>
                      Settings
                    </span>
                  </button>
                </div>

                <div
                  className="p-2"
                  style={{ borderTop: "1px solid #EEEBE3" }}
                >
                  <button
                    onClick={() => (window.location.href = "/admin")}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors hover:bg-red-50"
                  >
                    <LogOut size={16} style={{ color: "#E53935" }} />
                    <span className="text-sm" style={{ color: "#E53935" }}>
                      Logout
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
