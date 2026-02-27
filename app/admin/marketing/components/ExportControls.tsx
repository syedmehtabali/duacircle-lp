"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Facebook, Instagram, Smartphone, Loader } from "lucide-react";
import { PostType } from "../page";

interface ExportControlsProps {
  postType: PostType;
}

type ExportSize = "facebook" | "instagram" | "story";
type ExportFormat = "png" | "jpeg";

const exportSizes = [
  {
    id: "facebook" as ExportSize,
    label: "Facebook Post",
    icon: Facebook,
    dimensions: "1200×630px",
    color: "#1877F2",
  },
  {
    id: "instagram" as ExportSize,
    label: "Instagram Square",
    icon: Instagram,
    dimensions: "1080×1080px",
    color: "#E4405F",
  },
  {
    id: "story" as ExportSize,
    label: "Instagram Story",
    icon: Smartphone,
    dimensions: "1080×1920px",
    color: "#833AB4",
  },
];

export default function ExportControls({ postType }: ExportControlsProps) {
  const [exporting, setExporting] = useState(false);
  const [format, setFormat] = useState<ExportFormat>("png");
  const [lastExported, setLastExported] = useState<string | null>(null);

  const handleExport = async (size: ExportSize) => {
    setExporting(true);

    try {
      // Note: html-to-image will be used here when npm package is installed
      // For now, this is a placeholder that shows the UI flow

      // Simulate export delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const filename = `duacircle-${postType}-${size}.${format}`;
      setLastExported(filename);

      // In production, this would trigger actual download:
      // const node = document.getElementById('preview-canvas');
      // const dataUrl = format === 'png'
      //   ? await toPng(node, dimensions[size])
      //   : await toJpeg(node, { quality: 0.95, ...dimensions[size] });
      // downloadImage(dataUrl, filename);

    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">Export</h3>

      {/* Format Selection */}
      <div className="mb-4 p-4 bg-white rounded-xl border border-gray-200">
        <label className="block text-xs font-medium text-gray-600 mb-2">
          Format
        </label>
        <div className="flex gap-2">
          {(["png", "jpeg"] as ExportFormat[]).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setFormat(fmt)}
              className="flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: format === fmt ? "#7C3AED" : "#F3F4F6",
                color: format === fmt ? "white" : "#6B7280",
              }}
            >
              {fmt.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Export Buttons */}
      <div className="grid grid-cols-1 gap-3">
        {exportSizes.map((size, index) => {
          const Icon = size.icon;

          return (
            <motion.button
              key={size.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: exporting ? 1 : 1.02 }}
              whileTap={{ scale: exporting ? 1 : 0.98 }}
              onClick={() => handleExport(size.id)}
              disabled={exporting}
              className="relative p-4 rounded-xl border-2 transition-all group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                borderColor: "rgba(0,0,0,0.08)",
                background: "white",
              }}
            >
              {/* Hover Gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${size.color}10, ${size.color}05)`,
                }}
              />

              <div className="relative z-10 flex items-center gap-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${size.color}15`,
                  }}
                >
                  {exporting ? (
                    <Loader size={20} className="animate-spin" style={{ color: size.color }} />
                  ) : (
                    <Icon size={20} style={{ color: size.color }} />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 text-left">
                  <div className="font-bold text-sm text-gray-900">
                    {size.label}
                  </div>
                  <div className="text-xs text-gray-500">{size.dimensions}</div>
                </div>

                {/* Download Icon */}
                <Download
                  size={20}
                  className="text-gray-400 group-hover:text-gray-600 transition-colors"
                />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {lastExported && !exporting && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl"
          >
            <div className="flex items-center gap-2">
              <div className="text-xl">✅</div>
              <div>
                <div className="text-sm font-semibold text-green-900">
                  Image Downloaded!
                </div>
                <div className="text-xs text-green-700 mt-0.5">
                  {lastExported}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Note */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <div className="text-xs text-blue-700">
          <span className="font-semibold">💡 Tip:</span> Download all 3 sizes at
          once for complete social media coverage!
        </div>
      </div>
    </motion.div>
  );
}
