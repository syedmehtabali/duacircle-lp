"use client";

import { Content, Customization } from "../../page";

interface TemplateProps {
  content: Content;
  customization: Customization;
  templateId: number;
}

export default function QuoteTemplates({
  content,
  customization,
  templateId,
}: TemplateProps) {
  const { body, attribution } = content;
  const { backgroundColor, textColor, backgroundImage } = customization;

  // Template 0: Elegant Minimal
  if (templateId === 0) {
    return (
      <div
        className="w-full h-full flex items-center justify-center p-16 relative overflow-hidden"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Islamic Pattern Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${textColor} 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, ${textColor} 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Quote Content */}
        <div className="relative z-10 max-w-2xl text-center">
          {/* Opening Quote */}
          <div
            className="text-8xl font-serif mb-4 opacity-40"
            style={{ color: textColor }}
          >
            "
          </div>

          {body && (
            <p
              className="text-3xl font-light leading-relaxed italic mb-8"
              style={{ color: textColor }}
            >
              {body}
            </p>
          )}

          {attribution && (
            <p
              className="text-xl font-medium"
              style={{ color: textColor, opacity: 0.8 }}
            >
              {attribution}
            </p>
          )}

          {/* Logo */}
          <div className="mt-12 flex items-center justify-center gap-2 opacity-60">
            <span className="text-2xl">🤲</span>
            <span className="text-sm font-bold" style={{ color: textColor }}>
              DuaCircle
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Template 1: Ornate Frame
  if (templateId === 1) {
    return (
      <div
        className="w-full h-full flex items-center justify-center p-12"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}ee)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Ornate Border */}
        <div
          className="w-full h-full max-w-3xl border-8 rounded-3xl p-12 flex flex-col items-center justify-center relative"
          style={{
            borderColor: textColor,
            borderStyle: "double",
          }}
        >
          {/* Corner Decorations */}
          <div
            className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 rounded-tl-2xl"
            style={{ borderColor: `${textColor}80` }}
          />
          <div
            className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 rounded-tr-2xl"
            style={{ borderColor: `${textColor}80` }}
          />
          <div
            className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 rounded-bl-2xl"
            style={{ borderColor: `${textColor}80` }}
          />
          <div
            className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 rounded-br-2xl"
            style={{ borderColor: `${textColor}80` }}
          />

          {/* Content */}
          <div className="text-center max-w-xl">
            {/* Decorative Star */}
            <div className="text-5xl mb-6" style={{ color: textColor }}>
              ✦
            </div>

            {body && (
              <p
                className="text-3xl font-serif leading-relaxed mb-8"
                style={{ color: textColor }}
              >
                "{body}"
              </p>
            )}

            {attribution && (
              <div>
                <div
                  className="h-px w-24 mx-auto mb-4"
                  style={{ background: textColor, opacity: 0.5 }}
                />
                <p
                  className="text-xl font-medium"
                  style={{ color: textColor, opacity: 0.9 }}
                >
                  {attribution}
                </p>
              </div>
            )}

            {/* Logo */}
            <div className="mt-8 flex items-center justify-center gap-2 opacity-70">
              <span className="text-xl">🤲</span>
              <span className="text-xs font-bold" style={{ color: textColor }}>
                DUACIRCLE
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Template 2: Modern Clean
  if (templateId === 2) {
    return (
      <div
        className="w-full h-full flex items-center justify-center p-20"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : backgroundColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl">
          {/* Logo Top */}
          <div className="flex items-center gap-3 mb-12">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
              style={{
                background: `${textColor}20`,
              }}
            >
              🤲
            </div>
            <span
              className="text-sm font-bold tracking-wider"
              style={{ color: textColor, opacity: 0.7 }}
            >
              DUACIRCLE
            </span>
          </div>

          {/* Quote */}
          {body && (
            <h1
              className="text-5xl font-black leading-tight mb-8"
              style={{ color: textColor }}
            >
              "{body}"
            </h1>
          )}

          {/* Attribution */}
          {attribution && (
            <p
              className="text-xl font-medium"
              style={{ color: textColor, opacity: 0.7 }}
            >
              {attribution}
            </p>
          )}

          {/* Accent Line */}
          <div
            className="mt-12 h-2 w-32 rounded-full"
            style={{ background: textColor, opacity: 0.3 }}
          />
        </div>
      </div>
    );
  }

  return null;
}
