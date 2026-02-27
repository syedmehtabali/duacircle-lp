"use client";

import { LucideIcon } from "lucide-react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  label,
  error,
  disabled = false,
  className = "",
}: InputProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium mb-2" style={{ color: "#1A1A1A" }}>
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Icon size={18} style={{ color: "#999" }} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200`}
          style={{
            background: disabled ? "#F8F6F0" : "white",
            border: error ? "1px solid #E53935" : "1px solid #EEEBE3",
            color: disabled ? "#999" : "#1A1A1A",
            cursor: disabled ? "not-allowed" : "text",
          }}
          onFocus={(e) => {
            if (!disabled && !error) {
              e.target.style.borderColor = "#006B6B";
              e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.target.style.borderColor = "#EEEBE3";
              e.target.style.boxShadow = "none";
            }
          }}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#E53935" }}>
          {error}
        </p>
      )}
    </div>
  );
}
