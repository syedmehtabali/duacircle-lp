"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Shield, AlertCircle } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate login attempt
    setTimeout(() => {
      if (email === "admin@duacircle.com" && password === "demo") {
        // Successful login - redirect to dashboard
        window.location.href = "/admin/dashboard";
      } else {
        setError("Invalid email or password. Please try again.");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #001A1A 0%, #003D3D 30%, #006B6B 60%, #004D4D 80%, #001A1A 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-20 left-10 rounded-full"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(0,138,138,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(123,104,166,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo and Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{
                background: "linear-gradient(135deg, #C9A55A, #F9C252)",
                boxShadow: "0 8px 30px rgba(201,165,90,0.35)",
              }}
            >
              🤲
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-2">
            DuaCircle Admin
          </h1>
          <p className="text-white/60 text-sm">
            Secure access to admin dashboard
          </p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl p-8"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                }}
              >
                <AlertCircle size={20} style={{ color: "#EF4444", flexShrink: 0 }} />
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "#FCA5A5" }}>
                    {error}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail size={18} style={{ color: "rgba(255,255,255,0.4)" }} />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@duacircle.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#006B6B";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock size={18} style={{ color: "rgba(255,255,255,0.4)" }} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#006B6B";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-100"
                  style={{ opacity: 0.4 }}
                >
                  {showPassword ? (
                    <EyeOff size={18} style={{ color: "white" }} />
                  ) : (
                    <Eye size={18} style={{ color: "white" }} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded cursor-pointer"
                  style={{
                    accentColor: "#006B6B",
                  }}
                />
                <span className="text-white/60 group-hover:text-white/80 transition-colors">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 relative overflow-hidden"
              style={{
                background: isLoading
                  ? "rgba(0, 107, 107, 0.5)"
                  : "linear-gradient(135deg, #006B6B, #008A8A)",
                color: "white",
                boxShadow: "0 8px 24px rgba(0,107,107,0.35)",
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                  />
                  Signing in...
                </span>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          {/* Demo credentials hint */}
          <div
            className="mt-6 p-4 rounded-xl"
            style={{
              background: "rgba(201, 165, 90, 0.1)",
              border: "1px solid rgba(201, 165, 90, 0.2)",
            }}
          >
            <div className="flex items-start gap-2">
              <div className="text-lg">💡</div>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: "#F9C252" }}>
                  Demo Credentials
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Email: <code className="text-white/70">admin@duacircle.com</code>
                  <br />
                  Password: <code className="text-white/70">demo</code>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: <Shield size={14} />, text: "256-bit SSL" },
            { icon: <Lock size={14} />, text: "2FA Enabled" },
            { icon: "🔒", text: "GDPR Compliant" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span style={{ color: "#4CAF50" }}>{badge.icon}</span>
              <span className="text-xs font-medium text-white/60">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Back to home link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href="/"
            className="text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            ← Back to DuaCircle Home
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Admin access only. Unauthorized access is prohibited.
          <br />
          All activity is logged and monitored for security.
        </motion.div>
      </div>
    </div>
  );
}
