"use client";

import { motion } from "framer-motion";
import { PostType } from "../page";

interface TemplateGalleryProps {
  postType: PostType;
  selectedTemplate: number;
  setSelectedTemplate: (template: number) => void;
}

const templates = {
  announcement: [
    { id: 0, name: "Bold Headline", preview: "Large text, gradient bg" },
    { id: 1, name: "Card Style", preview: "Centered white card" },
    { id: 2, name: "Split Layout", preview: "Text + screenshot" },
  ],
  quote: [
    { id: 0, name: "Elegant Minimal", preview: "Center quote, pattern" },
    { id: 1, name: "Ornate Frame", preview: "Decorative border" },
    { id: 2, name: "Modern Clean", preview: "Large quote, solid color" },
  ],
  feature: [
    { id: 0, name: "App Mockup", preview: "Phone + description" },
    { id: 1, name: "Icon + Text", preview: "Icon, headline, bullets" },
    { id: 2, name: "Before/After", preview: "Split screen" },
  ],
  testimonial: [
    { id: 0, name: "User Card", preview: "Avatar, quote, rating" },
    { id: 1, name: "Social Post", preview: "Instagram-style" },
    { id: 2, name: "Stat + Quote", preview: "Big number + quote" },
  ],
};

const colors = {
  announcement: "#7C3AED",
  quote: "#14B8A6",
  feature: "#F59E0B",
  testimonial: "#EC4899",
};

export default function TemplateGallery({
  postType,
  selectedTemplate,
  setSelectedTemplate,
}: TemplateGalleryProps) {
  const currentTemplates = templates[postType];
  const accentColor = colors[postType];

  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">
        Choose Template
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {currentTemplates.map((template) => {
          const isSelected = selectedTemplate === template.id;

          return (
            <motion.button
              key={template.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: template.id * 0.05 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTemplate(template.id)}
              className="relative group text-left"
            >
              {/* Preview Card */}
              <div
                className="aspect-square rounded-xl border-2 transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: isSelected ? accentColor : "rgba(0,0,0,0.08)",
                  boxShadow: isSelected
                    ? `0 4px 20px ${accentColor}40`
                    : "none",
                }}
              >
                {/* Thumbnail Preview */}
                <div
                  className="w-full h-full flex items-center justify-center text-xs text-center p-3"
                  style={{
                    background: isSelected
                      ? `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`
                      : "#F9FAFB",
                    color: "#6B7280",
                  }}
                >
                  {template.preview}
                </div>

                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: accentColor }}
                  >
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
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

              {/* Template Name */}
              <div
                className="mt-2 text-xs font-medium text-center"
                style={{
                  color: isSelected ? accentColor : "#6B7280",
                }}
              >
                {template.name}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
