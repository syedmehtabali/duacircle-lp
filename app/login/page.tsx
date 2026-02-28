"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to web app after login
      window.location.href = "/app";
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
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
          background: "radial-gradient(circle, rgba(201,165,90,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div
          className="rounded-3xl p-8 shadow-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-4 shadow-xl"
              style={{
                background: "linear-gradient(135deg, #14B8A6, #0D9488)",
              }}
            >
              🤲
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome Back</h1>
            <p className="text-white/60 text-sm">Sign in to continue your journey</p>
            <p
              className="text-sm mt-2"
              style={{ color: "#C9A55A", fontFamily: "serif", direction: "rtl" }}
            >
              السلام عليكم
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-white/30 outline-none transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.12)";
                    e.target.style.borderColor = "#14B8A6";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.08)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-white placeholder-white/30 outline-none transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.12)";
                    e.target.style.borderColor = "#14B8A6";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.08)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-medium transition-colors"
                style={{ color: "#C9A55A" }}
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full py-4 rounded-xl font-bold text-base shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #14B8A6, #0D9488)",
                color: "white",
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
                "Sign In"
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-white/40 uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all hover:bg-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            >
              <span className="text-xl">🍎</span>
              Continue with Apple
            </button>
            <button
              className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all hover:bg-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            >
              <span className="text-xl">🔷</span>
              Continue with Google
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-white/60">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold transition-colors"
                style={{ color: "#C9A55A" }}
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/40">
            🔒 Your data is secure and encrypted
          </p>
        </div>
      </motion.div>
    </div>
  );
}
