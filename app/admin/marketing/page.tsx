"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PostTypeSelector from "./components/PostTypeSelector";
import TemplateGallery from "./components/TemplateGallery";
import ContentEditor from "./components/ContentEditor";
import LivePreview from "./components/LivePreview";
import ExportControls from "./components/ExportControls";

export type PostType = "announcement" | "quote" | "feature" | "testimonial";

export interface Content {
  heading: string;
  body: string;
  attribution: string;
}

export interface Customization {
  backgroundColor: string;
  textColor: string;
  backgroundImage: string | null;
}

export default function MarketingPage() {
  const [postType, setPostType] = useState<PostType>("announcement");
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [content, setContent] = useState<Content>({
    heading: "",
    body: "",
    attribution: "",
  });
  const [customization, setCustomization] = useState<Customization>({
    backgroundColor: "#7C3AED",
    textColor: "#FFFFFF",
    backgroundImage: null,
  });

  return (
    <div className="min-h-screen" style={{ background: "#F5F7FA" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="px-8 py-6">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
              style={{
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              🎨
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Social Media Designer
              </h1>
              <p className="text-white/80 text-sm mt-1">
                Create stunning posts for Facebook & Instagram in seconds
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-130px)]">
        {/* Left Panel - Controls */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="w-[480px] border-r overflow-y-auto"
          style={{
            background: "white",
            borderColor: "rgba(0,0,0,0.06)",
          }}
        >
          <div className="p-6 space-y-6">
            {/* Post Type Selector */}
            <PostTypeSelector
              postType={postType}
              setPostType={setPostType}
              setSelectedTemplate={setSelectedTemplate}
            />

            {/* Template Gallery */}
            <TemplateGallery
              postType={postType}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />

            {/* Content Editor */}
            <ContentEditor
              postType={postType}
              content={content}
              setContent={setContent}
              customization={customization}
              setCustomization={setCustomization}
            />
          </div>
        </motion.div>

        {/* Right Panel - Preview & Export */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-6">
            {/* Live Preview */}
            <LivePreview
              postType={postType}
              selectedTemplate={selectedTemplate}
              content={content}
              customization={customization}
            />

            {/* Export Controls */}
            <ExportControls postType={postType} />
          </div>
        </div>
      </div>
    </div>
  );
}
