"use client";

import { Content, Customization } from "../../page";

interface TemplateProps {
  content: Content;
  customization: Customization;
  templateId: number;
}

export default function TestimonialTemplates({
  content,
  customization,
  templateId,
}: TemplateProps) {
  const { body, attribution } = content;
  const { backgroundColor, textColor, backgroundImage } = customization;

  // Template 0: User Card
  if (templateId === 0) {
    return (
      <div
        className="w-full h-full flex items-center justify-center p-12"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-xl">
          {/* Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{
                background: `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd)`,
              }}
            >
              👤
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900">
                {attribution || "User Name"}
              </div>
              <div className="text-sm text-gray-500">DuaCircle User</div>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-2xl" style={{ color: "#F59E0B" }}>
                ★
              </span>
            ))}
          </div>

          {/* Quote */}
          {body && (
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              "{body}"
            </p>
          )}

          {/* Logo */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤲</span>
              <span className="text-xs font-bold text-gray-400">
                DuaCircle
              </span>
            </div>
            <div className="text-xs text-gray-400">Verified Review</div>
          </div>
        </div>
      </div>
    );
  }

  // Template 1: Social Post Style
  if (templateId === 1) {
    return (
      <div
        className="w-full h-full flex items-center justify-center p-12"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : "#F9FAFB",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Instagram-style card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md w-full">
          {/* Header */}
          <div
            className="p-4 flex items-center gap-3"
            style={{ background: backgroundColor }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{
                background: `${textColor}30`,
              }}
            >
              👤
            </div>
            <div>
              <div className="font-bold text-sm" style={{ color: textColor }}>
                {attribution || "duacircle_user"}
              </div>
              <div className="text-xs" style={{ color: textColor, opacity: 0.7 }}>
                DuaCircle Community
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {body && (
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                {body}
              </p>
            )}

            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 text-sm">
              <span style={{ color: backgroundColor }}>#DuaCircle</span>
              <span style={{ color: backgroundColor }}>#Faith</span>
              <span style={{ color: backgroundColor }}>#Community</span>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 flex items-center justify-between text-gray-500 text-xs">
            <div className="flex gap-4">
              <span>❤️ 1.2K</span>
              <span>💬 48</span>
            </div>
            <span>2 days ago</span>
          </div>
        </div>
      </div>
    );
  }

  // Template 2: Stat + Quote
  if (templateId === 2) {
    return (
      <div
        className="w-full h-full flex flex-col"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : backgroundColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top - Big Stat */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4 opacity-70">
            <span className="text-2xl">🤲</span>
            <span className="text-sm font-bold" style={{ color: textColor }}>
              DUACIRCLE
            </span>
          </div>

          <div
            className="text-8xl font-black mb-4"
            style={{ color: textColor }}
          >
            10,000+
          </div>
          <div
            className="text-2xl font-medium"
            style={{ color: textColor, opacity: 0.8 }}
          >
            Happy Users
          </div>
        </div>

        {/* Bottom - Quote */}
        <div
          className="p-12"
          style={{
            background: `${textColor}15`,
            backdropFilter: "blur(10px)",
          }}
        >
          {body && (
            <p
              className="text-2xl font-medium text-center mb-4"
              style={{ color: textColor }}
            >
              "{body}"
            </p>
          )}
          {attribution && (
            <p
              className="text-lg text-center"
              style={{ color: textColor, opacity: 0.7 }}
            >
              — {attribution}
            </p>
          )}
        </div>
      </div>
    );
  }

  return null;
}
