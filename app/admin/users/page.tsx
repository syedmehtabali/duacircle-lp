"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  User,
  Mail,
  Calendar,
  Activity,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  Ban,
  UserCheck,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mock user data with activity levels
const mockUsers = [
  {
    id: "1",
    name: "Ahmed Hassan",
    email: "ahmed.hassan@email.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "active",
    joinDate: "2024-01-15",
    lastActive: "2 hours ago",
    prayers: 1247,
    activityScore: 92,
    location: "Cairo, Egypt",
  },
  {
    id: "2",
    name: "Fatima Ali",
    email: "fatima.ali@email.com",
    avatar: "https://i.pravatar.cc/150?img=45",
    status: "active",
    joinDate: "2024-02-20",
    lastActive: "5 mins ago",
    prayers: 2103,
    activityScore: 98,
    location: "Dubai, UAE",
  },
  {
    id: "3",
    name: "Omar Ibrahim",
    email: "omar.ibrahim@email.com",
    avatar: "https://i.pravatar.cc/150?img=33",
    status: "suspended",
    joinDate: "2023-11-10",
    lastActive: "3 days ago",
    prayers: 456,
    activityScore: 35,
    location: "London, UK",
  },
  {
    id: "4",
    name: "Aisha Rahman",
    email: "aisha.rahman@email.com",
    avatar: "https://i.pravatar.cc/150?img=27",
    status: "active",
    joinDate: "2024-01-05",
    lastActive: "1 hour ago",
    prayers: 1876,
    activityScore: 87,
    location: "Kuala Lumpur, Malaysia",
  },
  {
    id: "5",
    name: "Yusuf Ahmed",
    email: "yusuf.ahmed@email.com",
    avatar: "https://i.pravatar.cc/150?img=51",
    status: "banned",
    joinDate: "2023-08-22",
    lastActive: "2 weeks ago",
    prayers: 89,
    activityScore: 12,
    location: "Istanbul, Turkey",
  },
  {
    id: "6",
    name: "Mariam Khan",
    email: "mariam.khan@email.com",
    avatar: "https://i.pravatar.cc/150?img=38",
    status: "active",
    joinDate: "2024-02-01",
    lastActive: "30 mins ago",
    prayers: 1534,
    activityScore: 94,
    location: "Lahore, Pakistan",
  },
  {
    id: "7",
    name: "Bilal Mansoor",
    email: "bilal.mansoor@email.com",
    avatar: "https://i.pravatar.cc/150?img=14",
    status: "active",
    joinDate: "2023-12-12",
    lastActive: "4 hours ago",
    prayers: 923,
    activityScore: 76,
    location: "Riyadh, Saudi Arabia",
  },
  {
    id: "8",
    name: "Zainab Malik",
    email: "zainab.malik@email.com",
    avatar: "https://i.pravatar.cc/150?img=29",
    status: "active",
    joinDate: "2024-01-28",
    lastActive: "15 mins ago",
    prayers: 1689,
    activityScore: 91,
    location: "Jakarta, Indonesia",
  },
];

type FilterType = "all" | "active" | "suspended" | "banned";

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  // Filter and search logic
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || user.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return { bg: "#E8F5E9", color: "#4CAF50", border: "#4CAF50" };
      case "suspended":
        return { bg: "#FFF3E0", color: "#FF9800", border: "#FF9800" };
      case "banned":
        return { bg: "#FFEBEE", color: "#E53935", border: "#E53935" };
      default:
        return { bg: "#F5F5F5", color: "#757575", border: "#757575" };
    }
  };

  const getActivityGradient = (score: number) => {
    if (score >= 90) {
      return "linear-gradient(135deg, rgba(0,107,107,0.15), rgba(201,165,90,0.15))";
    } else if (score >= 70) {
      return "linear-gradient(135deg, rgba(76,175,80,0.1), rgba(0,107,107,0.1))";
    } else if (score >= 50) {
      return "linear-gradient(135deg, rgba(255,152,0,0.1), rgba(255,193,7,0.1))";
    } else {
      return "linear-gradient(135deg, rgba(158,158,158,0.1), rgba(189,189,189,0.1))";
    }
  };

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #FAFAFA, #F5F5F5)",
        padding: "2rem",
      }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "2rem" }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            background: "linear-gradient(135deg, #006B6B, #008A8A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          User Management
        </h1>
        <p style={{ color: "#666", fontSize: "0.95rem" }}>
          Manage and moderate {mockUsers.length} users across the platform
        </p>
      </motion.div>

      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "1.5rem",
          marginBottom: "2rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          {/* Search Bar */}
          <div style={{ flex: "1", minWidth: "300px", position: "relative" }}>
            <Search
              size={20}
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#999",
              }}
            />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 3rem",
                border: "2px solid #E0E0E0",
                borderRadius: "12px",
                fontSize: "0.95rem",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#006B6B";
                e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#E0E0E0";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Action Buttons */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.75rem 1.5rem",
              background: "linear-gradient(135deg, #006B6B, #008A8A)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Download size={18} />
            Export
          </motion.button>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {(["all", "active", "suspended", "banned"] as FilterType[]).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.5rem 1.25rem",
                background: activeFilter === filter ? "#006B6B" : "white",
                color: activeFilter === filter ? "white" : "#666",
                border: `2px solid ${activeFilter === filter ? "#006B6B" : "#E0E0E0"}`,
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
              }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Bulk Actions Bar */}
      <AnimatePresence>
        {selectedUsers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              background: "linear-gradient(135deg, #006B6B, #008A8A)",
              color: "white",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 4px 20px rgba(0,107,107,0.3)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontWeight: 600 }}>
                {selectedUsers.length} user{selectedUsers.length > 1 ? "s" : ""} selected
              </span>
              <button
                onClick={() => setSelectedUsers([])}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "white",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                Clear
              </button>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "rgba(255,255,255,0.9)",
                  color: "#006B6B",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                Suspend
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "#E53935",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                Ban
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Cards Grid */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <AnimatePresence mode="popLayout">
          {paginatedUsers.map((user, index) => {
            const statusColors = getStatusColor(user.status);
            const isSelected = selectedUsers.includes(user.id);

            return (
              <motion.div
                key={user.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => toggleUserSelection(user.id)}
                style={{
                  background: getActivityGradient(user.activityScore),
                  backdropFilter: "blur(10px)",
                  border: `3px solid ${isSelected ? "#006B6B" : "white"}`,
                  borderRadius: "20px",
                  padding: "1.5rem",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: isSelected
                    ? "0 8px 32px rgba(0,107,107,0.25)"
                    : "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Selection Indicator */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "#006B6B",
                        borderRadius: "50%",
                        width: "28px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckCircle size={18} color="white" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* User Info */}
                <div style={{ display: "flex", alignItems: "start", gap: "1rem", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid white",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#212121",
                        marginBottom: "0.25rem",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {user.name}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.5rem" }}>
                      {user.email}
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.25rem 0.75rem",
                        background: statusColors.bg,
                        color: statusColors.color,
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      {user.status === "active" && <CheckCircle size={14} />}
                      {user.status === "suspended" && <AlertCircle size={14} />}
                      {user.status === "banned" && <XCircle size={14} />}
                      {user.status}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                    padding: "1rem",
                    background: "rgba(255,255,255,0.6)",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>
                      Total Prayers
                    </p>
                    <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#006B6B" }}>
                      {user.prayers.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>
                      Activity Score
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#006B6B" }}>
                        {user.activityScore}%
                      </p>
                      <div
                        style={{
                          width: "40px",
                          height: "6px",
                          background: "#E0E0E0",
                          borderRadius: "3px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${user.activityScore}%`,
                            height: "100%",
                            background: "linear-gradient(90deg, #006B6B, #C9A55A)",
                            borderRadius: "3px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meta Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#666" }}>
                    <Calendar size={14} />
                    Joined {new Date(user.joinDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#666" }}>
                    <Activity size={14} />
                    Last active {user.lastActive}
                  </div>
                </div>

                {/* Quick Actions */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedUser(user)}
                    style={{
                      flex: 1,
                      padding: "0.6rem",
                      background: "white",
                      border: "2px solid #006B6B",
                      color: "#006B6B",
                      borderRadius: "10px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Eye size={16} />
                    View
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "0.6rem",
                      background: "white",
                      border: "2px solid #E0E0E0",
                      color: "#666",
                      borderRadius: "10px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MoreVertical size={16} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            style={{
              padding: "0.75rem",
              background: currentPage === 1 ? "#F5F5F5" : "white",
              border: "2px solid #E0E0E0",
              borderRadius: "10px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              opacity: currentPage === 1 ? 0.5 : 1,
            }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(page)}
              style={{
                padding: "0.75rem 1rem",
                background: currentPage === page ? "linear-gradient(135deg, #006B6B, #008A8A)" : "white",
                color: currentPage === page ? "white" : "#666",
                border: `2px solid ${currentPage === page ? "#006B6B" : "#E0E0E0"}`,
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 600,
                minWidth: "44px",
              }}
            >
              {page}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            style={{
              padding: "0.75rem",
              background: currentPage === totalPages ? "#F5F5F5" : "white",
              border: "2px solid #E0E0E0",
              borderRadius: "10px",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              opacity: currentPage === totalPages ? 0.5 : 1,
            }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      )}

      {/* User Detail Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedUser(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "2rem",
                maxWidth: "600px",
                width: "100%",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedUser(null)}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "#F5F5F5",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>

              {/* User Header */}
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 1rem",
                    border: "4px solid #006B6B",
                    boxShadow: "0 8px 24px rgba(0,107,107,0.2)",
                  }}
                >
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#212121",
                    marginBottom: "0.5rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {selectedUser.name}
                </h2>
                <p style={{ color: "#666", marginBottom: "1rem" }}>{selectedUser.email}</p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1.25rem",
                    background: getStatusColor(selectedUser.status).bg,
                    color: getStatusColor(selectedUser.status).color,
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  {selectedUser.status === "active" && <CheckCircle size={18} />}
                  {selectedUser.status === "suspended" && <AlertCircle size={18} />}
                  {selectedUser.status === "banned" && <XCircle size={18} />}
                  {selectedUser.status}
                </div>
              </div>

              {/* Detailed Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    background: "linear-gradient(135deg, rgba(0,107,107,0.1), rgba(0,138,138,0.05))",
                    borderRadius: "16px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.5rem" }}>
                    Total Prayers
                  </p>
                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#006B6B",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {selectedUser.prayers.toLocaleString()}
                  </p>
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    background: "linear-gradient(135deg, rgba(201,165,90,0.1), rgba(201,165,90,0.05))",
                    borderRadius: "16px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.5rem" }}>
                    Activity Score
                  </p>
                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#C9A55A",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {selectedUser.activityScore}%
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div
                style={{
                  background: "#FAFAFA",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "#006B6B",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Mail size={20} color="white" />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.8rem", color: "#999" }}>Email</p>
                      <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#212121" }}>
                        {selectedUser.email}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "#C9A55A",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Calendar size={20} color="white" />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.8rem", color: "#999" }}>Join Date</p>
                      <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#212121" }}>
                        {new Date(selectedUser.joinDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "#7B68A6",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Activity size={20} color="white" />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.8rem", color: "#999" }}>Last Active</p>
                      <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#212121" }}>
                        {selectedUser.lastActive}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    flex: 1,
                    padding: "1rem",
                    background: "linear-gradient(135deg, #006B6B, #008A8A)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <UserCheck size={20} />
                  Send Message
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    flex: 1,
                    padding: "1rem",
                    background: "#E53935",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Ban size={20} />
                  Suspend User
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
}
