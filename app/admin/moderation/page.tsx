"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Flag,
  Shield,
  Trash2,
  X,
  Check,
  Ban,
  AlertCircle,
  MessageSquare,
  Clock,
  ChevronRight,
  Search,
} from "lucide-react";

// Mock report data
const mockReports = [
  {
    id: "R001",
    severity: "high" as const,
    category: "harassment",
    status: "pending",
    reportedAt: "2024-02-28T10:30:00",
    reporter: {
      id: "U123",
      name: "Fatima Ali",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    reportedUser: {
      id: "U456",
      name: "Omar Ibrahim",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    content: {
      type: "comment",
      text: "This is completely inappropriate and offensive content that violates our community guidelines.",
    },
    reason: "Contains harassment and offensive language targeting another user",
    history: [
      { action: "Reported", timestamp: "2024-02-28T10:30:00", by: "Fatima Ali" },
    ],
  },
  {
    id: "R002",
    severity: "medium" as const,
    category: "spam",
    status: "pending",
    reportedAt: "2024-02-28T09:15:00",
    reporter: {
      id: "U789",
      name: "Ahmed Hassan",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    reportedUser: {
      id: "U321",
      name: "Yusuf Ahmed",
      avatar: "https://i.pravatar.cc/150?img=51",
    },
    content: {
      type: "post",
      text: "🎉 CLICK HERE FOR FREE REWARDS! 💰 Limited time offer! Visit our website now!!!",
    },
    reason: "Spam content promoting external links",
    history: [
      { action: "Reported", timestamp: "2024-02-28T09:15:00", by: "Ahmed Hassan" },
    ],
  },
  {
    id: "R003",
    severity: "low" as const,
    category: "inappropriate",
    status: "pending",
    reportedAt: "2024-02-28T08:45:00",
    reporter: {
      id: "U555",
      name: "Aisha Rahman",
      avatar: "https://i.pravatar.cc/150?img=27",
    },
    reportedUser: {
      id: "U666",
      name: "Bilal Mansoor",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    content: {
      type: "comment",
      text: "I don't think this is the right place for this kind of discussion.",
    },
    reason: "Slightly off-topic content",
    history: [
      { action: "Reported", timestamp: "2024-02-28T08:45:00", by: "Aisha Rahman" },
    ],
  },
  {
    id: "R004",
    severity: "high" as const,
    category: "violence",
    status: "pending",
    reportedAt: "2024-02-28T11:00:00",
    reporter: {
      id: "U777",
      name: "Mariam Khan",
      avatar: "https://i.pravatar.cc/150?img=38",
    },
    reportedUser: {
      id: "U888",
      name: "Unknown User",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
    content: {
      type: "post",
      text: "Threatening language and violent imagery shared in the community.",
    },
    reason: "Contains violent threats and inappropriate imagery",
    history: [
      { action: "Reported", timestamp: "2024-02-28T11:00:00", by: "Mariam Khan" },
    ],
  },
  {
    id: "R005",
    severity: "medium" as const,
    category: "misinformation",
    status: "pending",
    reportedAt: "2024-02-28T07:30:00",
    reporter: {
      id: "U999",
      name: "Zainab Malik",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    reportedUser: {
      id: "U111",
      name: "Ali Rahman",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
    content: {
      type: "post",
      text: "Sharing false information about religious practices without proper sources.",
    },
    reason: "Spreading misinformation",
    history: [
      { action: "Reported", timestamp: "2024-02-28T07:30:00", by: "Zainab Malik" },
    ],
  },
];

type Severity = "high" | "medium" | "low";
type Category = "all" | "harassment" | "spam" | "inappropriate" | "violence" | "misinformation";

export default function ModerationPage() {
  const [selectedReport, setSelectedReport] = useState<typeof mockReports[0] | null>(null);
  const [filterCategory, setFilterCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getSeverityConfig = (severity: Severity) => {
    switch (severity) {
      case "high":
        return {
          color: "#E53935",
          bg: "#FFEBEE",
          label: "High Priority",
          borderColor: "#E53935",
        };
      case "medium":
        return {
          color: "#FF9800",
          bg: "#FFF3E0",
          label: "Medium Priority",
          borderColor: "#FF9800",
        };
      case "low":
        return {
          color: "#FFC107",
          bg: "#FFFDE7",
          label: "Low Priority",
          borderColor: "#FFC107",
        };
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "harassment":
        return AlertTriangle;
      case "spam":
        return MessageSquare;
      case "violence":
        return Shield;
      case "inappropriate":
        return Flag;
      case "misinformation":
        return AlertCircle;
      default:
        return Flag;
    }
  };

  const filteredReports = mockReports.filter((report) => {
    const matchesCategory = filterCategory === "all" || report.category === filterCategory;
    const matchesSearch =
      report.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.reportedUser.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now.getTime() - then.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0E27",
        padding: "2rem",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: "2rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #E53935, #C62828)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Shield size={28} color="white" />
          </div>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "white",
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Content Moderation
          </h1>
        </div>
        <p style={{ color: "#8892B2", fontSize: "0.95rem", marginLeft: "64px" }}>
          {filteredReports.length} pending reports require review
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {[
          { label: "High Priority", count: mockReports.filter((r) => r.severity === "high").length, color: "#E53935" },
          { label: "Medium Priority", count: mockReports.filter((r) => r.severity === "medium").length, color: "#FF9800" },
          { label: "Low Priority", count: mockReports.filter((r) => r.severity === "low").length, color: "#FFC107" },
          { label: "Total Pending", count: mockReports.length, color: "#006B6B" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.5rem",
            }}
          >
            <p style={{ color: "#8892B2", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
              {stat.label}
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: stat.color,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {stat.count}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {/* Search */}
          <div style={{ flex: "1", minWidth: "300px", position: "relative" }}>
            <Search
              size={20}
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#8892B2",
              }}
            />
            <input
              type="text"
              placeholder="Search by report ID or user name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 3rem",
                background: "rgba(255,255,255,0.05)",
                border: "2px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "white",
                fontSize: "0.95rem",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#006B6B";
                e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.1)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {(["all", "harassment", "spam", "inappropriate", "violence", "misinformation"] as Category[]).map(
            (category) => (
              <motion.button
                key={category}
                onClick={() => setFilterCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "0.5rem 1.25rem",
                  background: filterCategory === category
                    ? "linear-gradient(135deg, #006B6B, #008A8A)"
                    : "rgba(255,255,255,0.05)",
                  color: filterCategory === category ? "white" : "#8892B2",
                  border: `2px solid ${
                    filterCategory === category ? "#006B6B" : "rgba(255,255,255,0.1)"
                  }`,
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {category}
              </motion.button>
            )
          )}
        </div>
      </motion.div>

      {/* Main Content - Split View */}
      <div style={{ display: "grid", gridTemplateColumns: selectedReport ? "400px 1fr" : "1fr", gap: "1.5rem" }}>
        {/* Reports Queue */}
        <motion.div
          layout
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxHeight: "calc(100vh - 450px)",
            overflowY: "auto",
            paddingRight: "0.5rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredReports.map((report, index) => {
              const severityConfig = getSeverityConfig(report.severity);
              const CategoryIcon = getCategoryIcon(report.category);
              const isSelected = selectedReport?.id === report.id;

              return (
                <motion.div
                  key={report.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedReport(report)}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: isSelected
                      ? "rgba(0,107,107,0.2)"
                      : "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: `2px solid ${
                      isSelected ? "#006B6B" : severityConfig.borderColor
                    }`,
                    borderRadius: "16px",
                    padding: "1.25rem",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Severity Indicator */}
                  {report.severity === "high" && (
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: severityConfig.color,
                      }}
                    />
                  )}

                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          background: severityConfig.bg,
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CategoryIcon size={22} color={severityConfig.color} />
                      </div>
                      <div>
                        <p
                          style={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {report.id}
                        </p>
                        <p
                          style={{
                            color: severityConfig.color,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                          }}
                        >
                          {severityConfig.label}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={20} color="#8892B2" />
                  </div>

                  {/* User Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <img
                      src={report.reportedUser.avatar}
                      alt={report.reportedUser.name}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.2)",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ color: "white", fontSize: "0.9rem", fontWeight: 600 }}>
                        {report.reportedUser.name}
                      </p>
                      <p style={{ color: "#8892B2", fontSize: "0.75rem", textTransform: "capitalize" }}>
                        {report.category}
                      </p>
                    </div>
                  </div>

                  {/* Reason */}
                  <p
                    style={{
                      color: "#8892B2",
                      fontSize: "0.85rem",
                      marginBottom: "0.75rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {report.reason}
                  </p>

                  {/* Timestamp */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Clock size={14} color="#8892B2" />
                    <p style={{ color: "#8892B2", fontSize: "0.75rem" }}>
                      {getTimeAgo(report.reportedAt)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Detail Panel */}
        <AnimatePresence>
          {selectedReport && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "2rem",
                maxHeight: "calc(100vh - 450px)",
                overflowY: "auto",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReport(null)}
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1.25rem",
                    background: getSeverityConfig(selectedReport.severity as Severity).bg,
                    borderRadius: "12px",
                    marginBottom: "1rem",
                  }}
                >
                  {(() => {
                    const IconComponent = getCategoryIcon(selectedReport.category);
                    const severityConfig = getSeverityConfig(selectedReport.severity as Severity);
                    return <IconComponent size={24} color={severityConfig.color} />;
                  })()}
                  <div>
                    <p
                      style={{
                        color: getSeverityConfig(selectedReport.severity as Severity).color,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      {selectedReport.id}
                    </p>
                    <p
                      style={{
                        color: getSeverityConfig(selectedReport.severity as Severity).color,
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {getSeverityConfig(selectedReport.severity as Severity).label}
                    </p>
                  </div>
                </div>

                <h2
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Report Details
                </h2>
                <p style={{ color: "#8892B2", fontSize: "0.9rem" }}>
                  Review the context and take appropriate action
                </p>
              </div>

              {/* Reported Content */}
              <div
                style={{
                  background: "rgba(229,57,53,0.1)",
                  border: "2px solid rgba(229,57,53,0.3)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <AlertTriangle size={18} color="#E53935" />
                  <p
                    style={{
                      color: "#E53935",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Reported Content
                  </p>
                </div>
                <p style={{ color: "white", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {selectedReport.content.text}
                </p>
              </div>

              {/* Reason */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p
                  style={{
                    color: "#8892B2",
                    fontSize: "0.8rem",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Report Reason
                </p>
                <p style={{ color: "white", fontSize: "0.95rem" }}>{selectedReport.reason}</p>
              </div>

              {/* Users Involved */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                {/* Reporter */}
                <div
                  style={{
                    background: "rgba(76,175,80,0.1)",
                    border: "2px solid rgba(76,175,80,0.3)",
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      color: "#4CAF50",
                      fontSize: "0.75rem",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Reporter
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <img
                      src={selectedReport.reporter.avatar}
                      alt={selectedReport.reporter.name}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        border: "2px solid #4CAF50",
                      }}
                    />
                    <div>
                      <p style={{ color: "white", fontWeight: 600, fontSize: "0.95rem" }}>
                        {selectedReport.reporter.name}
                      </p>
                      <p style={{ color: "#8892B2", fontSize: "0.8rem" }}>
                        {selectedReport.reporter.id}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reported User */}
                <div
                  style={{
                    background: "rgba(229,57,53,0.1)",
                    border: "2px solid rgba(229,57,53,0.3)",
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      color: "#E53935",
                      fontSize: "0.75rem",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Reported User
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <img
                      src={selectedReport.reportedUser.avatar}
                      alt={selectedReport.reportedUser.name}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        border: "2px solid #E53935",
                      }}
                    />
                    <div>
                      <p style={{ color: "white", fontWeight: 600, fontSize: "0.95rem" }}>
                        {selectedReport.reportedUser.name}
                      </p>
                      <p style={{ color: "#8892B2", fontSize: "0.8rem" }}>
                        {selectedReport.reportedUser.id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                  }}
                >
                  Take Action
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "1rem",
                      background: "#E53935",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Trash2 size={18} />
                    Delete Content
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "1rem",
                      background: "#FF9800",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <AlertCircle size={18} />
                    Warn User
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "1rem",
                      background: "#C62828",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Ban size={18} />
                    Ban User
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "1rem",
                      background: "rgba(76,175,80,0.2)",
                      color: "#4CAF50",
                      border: "2px solid #4CAF50",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Check size={18} />
                    Dismiss Report
                  </motion.button>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <p
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                  }}
                >
                  History
                </p>
                <div style={{ position: "relative", paddingLeft: "2rem" }}>
                  {/* Timeline Line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "0.75rem",
                      top: "0.5rem",
                      bottom: "0.5rem",
                      width: "2px",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  />

                  {selectedReport.history.map((event, i) => (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        marginBottom: i === selectedReport.history.length - 1 ? 0 : "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: "-1.35rem",
                          top: "0.25rem",
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#006B6B",
                          border: "2px solid #0A0E27",
                        }}
                      />
                      <div
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          borderRadius: "8px",
                          padding: "1rem",
                        }}
                      >
                        <p style={{ color: "white", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                          {event.action}
                        </p>
                        <p style={{ color: "#8892B2", fontSize: "0.8rem" }}>
                          {event.by} • {getTimeAgo(event.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap');

        /* Custom Scrollbar */
        *::-webkit-scrollbar {
          width: 8px;
        }
        *::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(0,107,107,0.5);
          border-radius: 4px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: rgba(0,107,107,0.7);
        }
      `}</style>
    </div>
  );
}
