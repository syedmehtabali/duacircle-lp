"use client";

import { motion } from "framer-motion";
import { Megaphone, Sparkles, Zap, Heart } from "lucide-react";
import { PostType } from "../page";

interface PostTypeSelectorProps {
  postType: PostType;
  setPostType: (type: PostType) => void;
  setSelectedTemplate: (template: number) => void;
}

const postTypes = [
  {
    type: "announcement" as PostType,
    label: "Announcement",
    icon: Megaphone,
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
    description: "App updates & milestones",
  },
  {
    type: "quote" as PostType,
    label: "Inspirational Quote",
    icon: Sparkles,
    color: "#14B8A6",
    gradient: "linear-gradient(135deg, #14B8A6, #5EEAD4)",
    description: "Islamic wisdom & verses",
  },
  {
    type: "feature" as PostType,
    label: "Feature Highlight",
    icon: Zap,
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)",
    description: "Showcase capabilities",
  },
  {
    type: "testimonial" as PostType,
    label: "User Testimonial",
    icon: Heart,
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899, #F472B6)",
    description: "Success stories",
  },
];

export default function PostTypeSelector({
  postType,
  setPostType,
  setSelectedTemplate,
}: PostTypeSelectorProps) {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">
        Post Type
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {postTypes.map((type, index) => {
          const Icon = type.icon;
          const isSelected = postType === type.type;

          return (
            <motion.button
              key={type.type}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: isSelected ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setPostType(type.type);
                setSelectedTemplate(0); // Reset to first template
              }}
              className="relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group overflow-hidden"
              style={{
                borderColor: isSelected ? type.color : "rgba(0,0,0,0.08)",
                background: isSelected ? `${type.color}08` : "white",
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: type.gradient,
                  opacity: 0.05,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: isSelected ? type.gradient : `${type.color}15`,
                    }}
                  >
                    <Icon
                      size={20}
                      style={{
                        color: isSelected ? "white" : type.color,
                      }}
                    />
                  </div>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: type.gradient }}
                    >
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M1 5L4.5 8.5L11 1.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
                <div
                  className="font-bold text-sm mb-1"
                  style={{
                    color: isSelected ? type.color : "#1F2937",
                  }}
                >
                  {type.label}
                </div>
                <div className="text-xs text-gray-500">{type.description}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
