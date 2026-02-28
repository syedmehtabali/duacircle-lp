"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsLoading(true);

    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to web app after signup
      window.location.href = "/app";
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative"
      style={{ background: "#F5F5F5" }}
    >
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div
          className="rounded-3xl p-8 shadow-lg"
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-4 shadow-sm"
              style={{
                background: "linear-gradient(135deg, #14B8A6, #0D9488)",
              }}
            >
              🤲
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Create Account</h1>
            <p className="text-gray-500 text-sm">Join the DuaCircle community</p>
            <p
              className="text-sm mt-2 text-gray-400"
              style={{ fontFamily: "serif", direction: "rtl" }}
            >
              السلام عليكم
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Akhtar Ali Brohi"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 outline-none transition-all"
                  style={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "white";
                    e.target.style.borderColor = "#14B8A6";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "#F9FAFB";
                    e.target.style.borderColor = "#E5E7EB";
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 outline-none transition-all"
                  style={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "white";
                    e.target.style.borderColor = "#14B8A6";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "#F9FAFB";
                    e.target.style.borderColor = "#E5E7EB";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a strong password"
                  required
                  minLength={8}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 outline-none transition-all"
                  style={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "white";
                    e.target.style.borderColor = "#14B8A6";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "#F9FAFB";
                    e.target.style.borderColor = "#E5E7EB";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Re-enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 outline-none transition-all"
                  style={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "white";
                    e.target.style.borderColor = "#14B8A6";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "#F9FAFB";
                    e.target.style.borderColor = "#E5E7EB";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded accent-teal-500"
              />
              <p className="text-xs text-gray-600 leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-teal-600 hover:underline font-medium">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-teal-600 hover:underline font-medium">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Signup Button */}
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
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Signup */}
          <div className="space-y-3">
            <button
              className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all hover:bg-gray-50"
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                color: "#374151",
              }}
            >
              <span className="text-xl">🍎</span>
              Continue with Apple
            </button>
            <button
              className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all hover:bg-gray-50"
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                color: "#374151",
              }}
            >
              <span className="text-xl">🔷</span>
              Continue with Google
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            🔒 Your data is secure and encrypted
          </p>
        </div>
      </motion.div>
    </div>
  );
}
