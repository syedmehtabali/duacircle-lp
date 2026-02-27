"use client";

import { motion } from "framer-motion";
import { PostType, Content, Customization } from "../page";
import AnnouncementTemplates from "./templates/AnnouncementTemplates";
import QuoteTemplates from "./templates/QuoteTemplates";
import FeatureTemplates from "./templates/FeatureTemplates";
import TestimonialTemplates from "./templates/TestimonialTemplates";

interface LivePreviewProps {
  postType: PostType;
  selectedTemplate: number;
  content: Content;
  customization: Customization;
}

export default function LivePreview({
  postType,
  selectedTemplate,
  content,
  customization,
}: LivePreviewProps) {
  const renderTemplate = () => {
    const props = { content, customization, templateId: selectedTemplate };

    switch (postType) {
      case "announcement":
        return <AnnouncementTemplates {...props} />;
      case "quote":
        return <QuoteTemplates {...props} />;
      case "feature":
        return <FeatureTemplates {...props} />;
      case "testimonial":
        return <TestimonialTemplates {...props} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Live Preview</h3>

      {/* Preview Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        {/* Instagram Square Preview */}
        <div
          id="preview-canvas"
          className="mx-auto rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "540px",
            height: "540px",
            maxWidth: "100%",
          }}
        >
          {renderTemplate()}
        </div>

        {/* Format Label */}
        <div className="text-center mt-4">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
            Instagram Square (1080×1080px)
          </span>
        </div>
      </motion.div>

      {/* Helper Text */}
      {!content.heading && !content.body && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xl"
        >
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <div className="text-sm font-semibold text-purple-900 mb-1">
                Get Started
              </div>
              <div className="text-xs text-purple-700">
                Add your heading and body text on the left to see your design
                come to life. Try different templates and colors!
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
