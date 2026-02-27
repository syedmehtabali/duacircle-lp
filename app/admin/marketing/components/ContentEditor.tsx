"use client";

import { motion } from "framer-motion";
import { Type, Palette, Image, X } from "lucide-react";
import { PostType, Content, Customization } from "../page";
import { ChangeEvent, useRef } from "react";

interface ContentEditorProps {
  postType: PostType;
  content: Content;
  setContent: (content: Content) => void;
  customization: Customization;
  setCustomization: (customization: Customization) => void;
}

const brandColors = [
  { name: "Purple", value: "#7C3AED" },
  { name: "Teal", value: "#14B8A6" },
  { name: "Gold", value: "#F59E0B" },
  { name: "Pink", value: "#EC4899" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#10B981" },
];

export default function ContentEditor({
  postType,
  content,
  setContent,
  customization,
  setCustomization,
}: ContentEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      alert("Image too large. Please use an image under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setCustomization({
        ...customization,
        backgroundImage: e.target?.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setCustomization({
      ...customization,
      backgroundImage: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const showAttribution = postType === "quote" || postType === "testimonial";

  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Type size={16} className="text-gray-700" />
          <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase">
            Content
          </h3>
        </div>

        <div className="space-y-3">
          {/* Heading */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Heading
            </label>
            <input
              type="text"
              value={content.heading}
              onChange={(e) =>
                setContent({ ...content, heading: e.target.value })
              }
              placeholder="Enter your headline..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
            />
          </div>

          {/* Body */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Body Text
            </label>
            <textarea
              value={content.body}
              onChange={(e) => setContent({ ...content, body: e.target.value })}
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm resize-none"
            />
            <div className="text-xs text-gray-400 mt-1">
              {content.body.length} characters (recommended: under 200)
            </div>
          </div>

          {/* Attribution (for quotes & testimonials) */}
          {showAttribution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                {postType === "quote" ? "Attribution" : "User Name"}
              </label>
              <input
                type="text"
                value={content.attribution}
                onChange={(e) =>
                  setContent({ ...content, attribution: e.target.value })
                }
                placeholder={
                  postType === "quote" ? "— Prophet Muhammad ﷺ" : "John Doe"
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Customization Section */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Palette size={16} className="text-gray-700" />
          <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase">
            Customize
          </h3>
        </div>

        <div className="space-y-4">
          {/* Background Color */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">
              Background Color
            </label>
            <div className="flex gap-2">
              {brandColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() =>
                    setCustomization({
                      ...customization,
                      backgroundColor: color.value,
                    })
                  }
                  className="group relative"
                  title={color.name}
                >
                  <div
                    className="w-10 h-10 rounded-lg border-2 transition-all"
                    style={{
                      background: color.value,
                      borderColor:
                        customization.backgroundColor === color.value
                          ? color.value
                          : "transparent",
                      transform:
                        customization.backgroundColor === color.value
                          ? "scale(1.1)"
                          : "scale(1)",
                    }}
                  />
                  {customization.backgroundColor === color.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg
                        width="16"
                        height="14"
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
                </button>
              ))}
            </div>
          </div>

          {/* Background Image */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">
              Background Image (Optional)
            </label>

            {!customization.backgroundImage ? (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-purple-500 transition-colors group"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center transition-colors">
                    <Image size={20} className="text-purple-500" />
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Upload Image
                  </div>
                  <div className="text-xs text-gray-400">
                    PNG, JPG up to 5MB
                  </div>
                </div>
              </button>
            ) : (
              <div className="relative rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={customization.backgroundImage}
                  alt="Background"
                  className="w-full h-32 object-cover"
                />
                <button
                  onClick={removeImage}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-lg transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
