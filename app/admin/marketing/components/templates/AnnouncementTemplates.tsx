"use client";

import { Content, Customization } from "../../page";

interface TemplateProps {
  content: Content;
  customization: Customization;
  templateId: number;
}

export default function AnnouncementTemplates({
  content,
  customization,
  templateId,
}: TemplateProps) {
  const { heading, body } = content;
  const { backgroundColor, textColor, backgroundImage } = customization;

  // Template 0: Bold Headline
  if (templateId === 0) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center p-12 relative overflow-hidden"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        {backgroundImage && (
          <div
            className="absolute inset-0"
            style={{
              background: `${backgroundColor}cc`,
              backdropFilter: "blur(8px)",
            }}
          />
        )}

        {/* Logo */}
        <div className="absolute top-8 left-8 z-10 flex items-center gap-3">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            🤲
          </div>
          <span
            className="text-xl font-bold"
            style={{ color: textColor, opacity: 0.9 }}
          >
            DuaCircle
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl">
          {heading && (
            <h1
              className="text-6xl font-black leading-tight mb-6"
              style={{
                color: textColor,
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {heading}
            </h1>
          )}
          {body && (
            <p
              className="text-2xl font-medium leading-relaxed"
              style={{
                color: textColor,
                opacity: 0.95,
              }}
            >
              {body}
            </p>
          )}
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full"
          style={{
            background: "rgba(255,255,255,0.1)",
            transform: "translate(30%, 30%)",
            filter: "blur(40px)",
          }}
        />
      </div>
    );
  }

  // Template 1: Card Style
  if (templateId === 1) {
    return (
      <div
        className="w-full h-full flex items-center justify-center p-12"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage})`
            : `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}88)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Card */}
        <div
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-xl text-center"
          style={{
            transform: "rotate(-1deg)",
          }}
        >
          {/* Icon */}
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl"
            style={{
              background: `linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd)`,
            }}
          >
            📢
          </div>

          {/* Content */}
          {heading && (
            <h2
              className="text-4xl font-black mb-4"
              style={{ color: backgroundColor }}
            >
              {heading}
            </h2>
          )}
          {body && (
            <p className="text-xl text-gray-700 leading-relaxed">{body}</p>
          )}

          {/* Logo */}
          <div className="mt-8 pt-8 border-t-2 border-gray-100 flex items-center justify-center gap-2">
            <span className="text-2xl">🤲</span>
            <span className="text-sm font-bold text-gray-400">DuaCircle</span>
          </div>
        </div>
      </div>
    );
  }

  // Template 2: Split Layout
  if (templateId === 2) {
    return (
      <div className="w-full h-full flex">
        {/* Left Side - Text */}
        <div
          className="w-1/2 flex flex-col justify-center p-12"
          style={{
            background: backgroundColor,
          }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl">🤲</span>
            <span className="text-lg font-bold" style={{ color: textColor }}>
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

        {/* Right Side - Visual */}
        <div
          className="w-1/2 flex items-center justify-center"
          style={{
            background: backgroundImage
              ? `url(${backgroundImage})`
              : `linear-gradient(135deg, ${backgroundColor}33, ${backgroundColor}11)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!backgroundImage && (
            <div
              className="text-9xl opacity-20"
              style={{ color: backgroundColor }}
            >
              📱
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
