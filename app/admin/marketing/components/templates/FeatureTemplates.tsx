"use client";

import { Content, Customization } from "../../page";

interface TemplateProps {
  content: Content;
  customization: Customization;
  templateId: number;
}

export default function FeatureTemplates({
  content,
  customization,
  templateId,
}: TemplateProps) {
  const { heading, body } = content;
  const { backgroundColor, textColor, backgroundImage } = customization;

  // Template 0: App Mockup
  if (templateId === 0) {
    return (
      <div
        className="w-full h-full flex items-center p-12"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left - Phone Mockup */}
        <div className="w-1/2 flex items-center justify-center">
          <div
            className="w-64 h-96 rounded-3xl shadow-2xl flex items-center justify-center text-6xl"
            style={{
              background: "rgba(255,255,255,0.95)",
              border: "8px solid rgba(0,0,0,0.1)",
            }}
          >
            📱
          </div>
        </div>

        {/* Right - Description */}
        <div className="w-1/2 pr-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🤲</span>
            <span className="text-sm font-bold" style={{ color: textColor }}>
              DuaCircle
            </span>
          </div>

          {heading && (
            <h2
              className="text-5xl font-black leading-tight mb-6"
              style={{ color: textColor }}
            >
              {heading}
            </h2>
          )}

          {body && (
            <p
              className="text-xl leading-relaxed"
              style={{ color: textColor, opacity: 0.9 }}
            >
              {body}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Template 1: Icon + Text
  if (templateId === 1) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center p-12"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : backgroundColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Large Icon */}
        <div
          className="w-32 h-32 rounded-3xl flex items-center justify-center text-6xl mb-8 shadow-xl"
          style={{
            background: `${textColor}20`,
          }}
        >
          ⚡
        </div>

        {/* Content */}
        <div className="max-w-2xl text-center">
          {heading && (
            <h2
              className="text-5xl font-black mb-6"
              style={{ color: textColor }}
            >
              {heading}
            </h2>
          )}

          {body && (
            <p
              className="text-2xl leading-relaxed mb-8"
              style={{ color: textColor, opacity: 0.9 }}
            >
              {body}
            </p>
          )}

          {/* Bullet Points Placeholder */}
          <div className="flex flex-col gap-3 mt-8">
            {["Easy to use", "Powerful features", "Always free"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-3"
                  style={{ color: textColor, opacity: 0.8 }}
                >
                  <span className="text-xl">✓</span>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Logo */}
        <div className="mt-12 flex items-center gap-2 opacity-60">
          <span className="text-xl">🤲</span>
          <span className="text-xs font-bold" style={{ color: textColor }}>
            DUACIRCLE
          </span>
        </div>
      </div>
    );
  }

  // Template 2: Before/After
  if (templateId === 2) {
    return (
      <div className="w-full h-full flex flex-col">
        {/* Top Section - Heading */}
        <div
          className="p-8 text-center"
          style={{
            background: backgroundColor,
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">🤲</span>
            <span className="text-xs font-bold" style={{ color: textColor }}>
              DUACIRCLE
            </span>
          </div>
          {heading && (
            <h2 className="text-4xl font-black" style={{ color: textColor }}>
              {heading}
            </h2>
          )}
        </div>

        {/* Split - Before/After */}
        <div className="flex-1 flex">
          {/* Before */}
          <div
            className="w-1/2 flex flex-col items-center justify-center p-8 border-r-4"
            style={{
              background: "#F3F4F6",
              borderColor: backgroundColor,
            }}
          >
            <div className="text-5xl mb-4 opacity-30">😕</div>
            <div className="text-xl font-bold text-gray-600 mb-2">Before</div>
            <div className="text-sm text-gray-500 text-center max-w-xs">
              Without this feature
            </div>
          </div>

          {/* After */}
          <div
            className="w-1/2 flex flex-col items-center justify-center p-8"
            style={{
              background: backgroundImage
                ? `url(${backgroundImage})`
                : `linear-gradient(135deg, ${backgroundColor}22, ${backgroundColor}11)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-5xl mb-4">✨</div>
            <div
              className="text-xl font-bold mb-2"
              style={{ color: backgroundColor }}
            >
              After
            </div>
            {body && (
              <div
                className="text-sm text-center max-w-xs"
                style={{ color: "#4B5563" }}
              >
                {body}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
