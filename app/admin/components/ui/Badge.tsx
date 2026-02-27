"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger" | "info" | "neutral";
  size?: "sm" | "md";
}

export default function Badge({
  children,
  variant = "neutral",
  size = "md",
}: BadgeProps) {
  const variants = {
    success: {
      background: "#E8F5E9",
      color: "#4CAF50",
    },
    warning: {
      background: "#FFF8EC",
      color: "#C9A55A",
    },
    danger: {
      background: "#FFEBEE",
      color: "#E53935",
    },
    info: {
      background: "#E0F2F2",
      color: "#006B6B",
    },
    neutral: {
      background: "#F8F6F0",
      color: "#666",
    },
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center ${sizes[size]} rounded-full font-semibold`}
      style={variants[variant]}
    >
      {children}
    </span>
  );
}
