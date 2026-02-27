"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  className = "",
}: ButtonProps) {
  const variants = {
    primary: {
      background: "linear-gradient(135deg, #006B6B, #008A8A)",
      color: "white",
      border: "none",
    },
    secondary: {
      background: "white",
      color: "#006B6B",
      border: "1px solid #006B6B",
    },
    danger: {
      background: "#E53935",
      color: "white",
      border: "none",
    },
    ghost: {
      background: "transparent",
      color: "#666",
      border: "1px solid #EEEBE3",
    },
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${sizes[size]} rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${className}`}
      style={{
        ...variants[variant],
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </motion.button>
  );
}
