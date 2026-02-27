# Social Media Post Designer Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a browser-based social media post designer in the admin panel that creates branded Facebook/Instagram posts with 12 templates and multi-format export.

**Architecture:** React components with state management, html-to-image for export, zero backend. Templates as React components, real-time preview, client-side image generation.

**Tech Stack:** Next.js 14, React 19, TypeScript, html-to-image, Framer Motion, Lucide icons

---

## Task 1: Install Dependencies and Setup

**Files:**
- Modify: `package.json`
- Create: `app/admin/marketing/.gitkeep`

**Step 1: Install html-to-image library**

```bash
cd /Users/syedmehtab/development/PersonalProducts/duacircle/duacircle-lp
npm install html-to-image
```

Expected: Package added to package.json and node_modules

**Step 2: Create marketing directory structure**

```bash
mkdir -p app/admin/marketing/components/templates
touch app/admin/marketing/.gitkeep
```

Expected: Directory created

**Step 3: Verify installation**

```bash
npm list html-to-image
```

Expected: Shows html-to-image@1.x.x

**Step 4: Commit**

```bash
git add package.json package-lock.json app/admin/marketing/
git commit -m "feat: install html-to-image for social media designer"
```

---

## Task 2: Add Marketing Route to Sidebar

**Files:**
- Modify: `app/admin/components/Sidebar.tsx`

**Step 1: Read current sidebar navigation**

Read `app/admin/components/Sidebar.tsx` to find the navigation items array

**Step 2: Add Marketing navigation item**

Add after the Dashboard item in the navigation array:

```typescript
{
  label: "Marketing",
  icon: Image,
  href: "/admin/marketing",
  badge: null,
},
```

Also import Image from lucide-react at the top:

```typescript
import { ..., Image, ... } from "lucide-react";
```

**Step 3: Test navigation**

Run: `npm run dev`
Navigate to: http://localhost:3000/admin/dashboard
Expected: "Marketing" link visible in sidebar

**Step 4: Commit**

```bash
git add app/admin/components/Sidebar.tsx
git commit -m "feat: add Marketing nav item to admin sidebar"
```

---

## Task 3: Create Main Marketing Page Structure

**Files:**
- Create: `app/admin/marketing/page.tsx`

**Step 1: Create main page component with layout**

```typescript
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type PostType = "announcement" | "quote" | "feature" | "testimonial";

export default function MarketingPage() {
  const [postType, setPostType] = useState<PostType>("announcement");
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [content, setContent] = useState({
    heading: "",
    body: "",
    attribution: "",
  });
  const [customization, setCustomization] = useState({
    backgroundColor: "#7C3AED",
    textColor: "#FFFFFF",
    backgroundImage: null as string | null,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #FAFAFA, #F5F5F5)",
        padding: "2rem",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: "2rem" }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            background: "linear-gradient(135deg, #7C3AED, #14B8A6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem",
          }}
        >
          Social Media Designer
        </h1>
        <p style={{ color: "#666", fontSize: "0.95rem" }}>
          Create branded posts for Facebook and Instagram
        </p>
      </motion.div>

      {/* Main Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "2rem",
          minHeight: "70vh",
        }}
      >
        {/* Left Panel - Editor */}
        <div>
          <p style={{ color: "#666" }}>Editor Panel (Coming next)</p>
        </div>

        {/* Right Panel - Preview */}
        <div>
          <p style={{ color: "#666" }}>Preview Panel (Coming next)</p>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Test page loads**

Run: `npm run dev`
Navigate to: http://localhost:3000/admin/marketing
Expected: Page loads with header and two placeholder panels

**Step 3: Commit**

```bash
git add app/admin/marketing/page.tsx
git commit -m "feat: create marketing page structure with state"
```

---

## Task 4: Build PostTypeSelector Component

**Files:**
- Create: `app/admin/marketing/components/PostTypeSelector.tsx`
- Modify: `app/admin/marketing/page.tsx`

**Step 1: Create PostTypeSelector component**

```typescript
"use client";

import { motion } from "framer-motion";
import { Megaphone, Quote, Sparkles, MessageSquare } from "lucide-react";

type PostType = "announcement" | "quote" | "feature" | "testimonial";

interface PostTypeSelectorProps {
  selectedType: PostType;
  onSelectType: (type: PostType) => void;
}

export default function PostTypeSelector({ selectedType, onSelectType }: PostTypeSelectorProps) {
  const postTypes = [
    { type: "announcement" as const, label: "Announcement", icon: Megaphone, color: "#7C3AED" },
    { type: "quote" as const, label: "Quote", icon: Quote, color: "#14B8A6" },
    { type: "feature" as const, label: "Feature", icon: Sparkles, color: "#F59E0B" },
    { type: "testimonial" as const, label: "Testimonial", icon: MessageSquare, color: "#10B981" },
  ];

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <p
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#666",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        Post Type
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
        {postTypes.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedType === item.type;

          return (
            <motion.button
              key={item.type}
              onClick={() => onSelectType(item.type)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "1rem",
                background: isSelected
                  ? `linear-gradient(135deg, ${item.color}, ${item.color}dd)`
                  : "white",
                color: isSelected ? "white" : "#333",
                border: `2px solid ${isSelected ? item.color : "#E0E0E0"}`,
                borderRadius: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "all 0.2s ease",
              }}
            >
              <Icon size={20} />
              {item.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
```

**Step 2: Integrate into main page**

In `app/admin/marketing/page.tsx`, import and add to left panel:

```typescript
import PostTypeSelector from "./components/PostTypeSelector";

// Inside left panel div:
<div>
  <PostTypeSelector selectedType={postType} onSelectType={setPostType} />
  <p style={{ color: "#666" }}>More controls coming...</p>
</div>
```

**Step 3: Test interaction**

Navigate to: http://localhost:3000/admin/marketing
Expected: 4 post type buttons, clicking changes selection visual state

**Step 4: Commit**

```bash
git add app/admin/marketing/components/PostTypeSelector.tsx app/admin/marketing/page.tsx
git commit -m "feat: add post type selector with 4 options"
```

---

## Task 5: Build TemplateGallery Component

**Files:**
- Create: `app/admin/marketing/components/TemplateGallery.tsx`
- Modify: `app/admin/marketing/page.tsx`

**Step 1: Create TemplateGallery component**

```typescript
"use client";

import { motion } from "framer-motion";

type PostType = "announcement" | "quote" | "feature" | "testimonial";

interface TemplateGalleryProps {
  postType: PostType;
  selectedTemplate: number;
  onSelectTemplate: (index: number) => void;
}

export default function TemplateGallery({
  postType,
  selectedTemplate,
  onSelectTemplate,
}: TemplateGalleryProps) {
  const templates = {
    announcement: ["Bold Headline", "Card Style", "Split Layout"],
    quote: ["Elegant Minimal", "Ornate Frame", "Modern Clean"],
    feature: ["App Mockup", "Icon + Text", "Before/After"],
    testimonial: ["User Card", "Social Post", "Stat + Quote"],
  };

  const currentTemplates = templates[postType];

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <p
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#666",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        Template
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
        {currentTemplates.map((name, index) => {
          const isSelected = selectedTemplate === index;

          return (
            <motion.button
              key={index}
              onClick={() => onSelectTemplate(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.75rem 0.5rem",
                background: isSelected ? "#7C3AED" : "white",
                color: isSelected ? "white" : "#333",
                border: `2px solid ${isSelected ? "#7C3AED" : "#E0E0E0"}`,
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.75rem",
                textAlign: "center",
                transition: "all 0.2s ease",
              }}
            >
              {name}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
```

**Step 2: Integrate into main page**

In `app/admin/marketing/page.tsx`, import and add after PostTypeSelector:

```typescript
import TemplateGallery from "./components/TemplateGallery";

// After PostTypeSelector in left panel:
<TemplateGallery
  postType={postType}
  selectedTemplate={selectedTemplate}
  onSelectTemplate={setSelectedTemplate}
/>
```

**Step 3: Test template selection**

Navigate to: http://localhost:3000/admin/marketing
Expected: 3 template buttons per post type, changing post type updates template options

**Step 4: Commit**

```bash
git add app/admin/marketing/components/TemplateGallery.tsx app/admin/marketing/page.tsx
git commit -m "feat: add template gallery with 3 options per type"
```

---

## Task 6: Build ContentEditor Component

**Files:**
- Create: `app/admin/marketing/components/ContentEditor.tsx`
- Modify: `app/admin/marketing/page.tsx`

**Step 1: Create ContentEditor component**

```typescript
"use client";

import { ChangeEvent } from "react";

interface Content {
  heading: string;
  body: string;
  attribution: string;
}

interface Customization {
  backgroundColor: string;
  textColor: string;
  backgroundImage: string | null;
}

interface ContentEditorProps {
  content: Content;
  customization: Customization;
  onContentChange: (content: Content) => void;
  onCustomizationChange: (customization: Customization) => void;
  postType: string;
}

export default function ContentEditor({
  content,
  customization,
  onContentChange,
  onCustomizationChange,
  postType,
}: ContentEditorProps) {
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image too large. Please use an image under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      onCustomizationChange({
        ...customization,
        backgroundImage: event.target?.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <p
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#666",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        Content
      </p>

      {/* Heading Input */}
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#333",
            marginBottom: "0.5rem",
          }}
        >
          {postType === "quote" ? "Quote Text" : "Heading"}
        </label>
        <input
          type="text"
          value={content.heading}
          onChange={(e) => onContentChange({ ...content, heading: e.target.value })}
          placeholder="Enter heading..."
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "2px solid #E0E0E0",
            borderRadius: "8px",
            fontSize: "0.9rem",
            outline: "none",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#7C3AED";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#E0E0E0";
          }}
        />
      </div>

      {/* Body Input */}
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#333",
            marginBottom: "0.5rem",
          }}
        >
          {postType === "quote" ? "Additional Text" : "Body Text"}
        </label>
        <textarea
          value={content.body}
          onChange={(e) => onContentChange({ ...content, body: e.target.value })}
          placeholder="Enter body text..."
          rows={3}
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "2px solid #E0E0E0",
            borderRadius: "8px",
            fontSize: "0.9rem",
            outline: "none",
            resize: "vertical",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#7C3AED";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#E0E0E0";
          }}
        />
        <p style={{ fontSize: "0.75rem", color: "#999", marginTop: "0.25rem" }}>
          {content.body.length} / 200 characters (recommended)
        </p>
      </div>

      {/* Attribution Input (for quotes and testimonials) */}
      {(postType === "quote" || postType === "testimonial") && (
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#333",
              marginBottom: "0.5rem",
            }}
          >
            {postType === "quote" ? "Author" : "Name"}
          </label>
          <input
            type="text"
            value={content.attribution}
            onChange={(e) => onContentChange({ ...content, attribution: e.target.value })}
            placeholder="Enter attribution..."
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              fontSize: "0.9rem",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#7C3AED";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#E0E0E0";
            }}
          />
        </div>
      )}

      {/* Color Pickers */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#333",
              marginBottom: "0.5rem",
            }}
          >
            Background Color
          </label>
          <input
            type="color"
            value={customization.backgroundColor}
            onChange={(e) =>
              onCustomizationChange({ ...customization, backgroundColor: e.target.value })
            }
            style={{
              width: "100%",
              height: "40px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#333",
              marginBottom: "0.5rem",
            }}
          >
            Text Color
          </label>
          <input
            type="color"
            value={customization.textColor}
            onChange={(e) =>
              onCustomizationChange({ ...customization, textColor: e.target.value })
            }
            style={{
              width: "100%",
              height: "40px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <label
          style={{
            display: "block",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#333",
            marginBottom: "0.5rem",
          }}
        >
          Background Image (Optional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "2px dashed #E0E0E0",
            borderRadius: "8px",
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        />
        {customization.backgroundImage && (
          <button
            onClick={() => onCustomizationChange({ ...customization, backgroundImage: null })}
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem 1rem",
              background: "#E53935",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            Remove Image
          </button>
        )}
      </div>
    </div>
  );
}
```

**Step 2: Integrate into main page**

In `app/admin/marketing/page.tsx`, import and add after TemplateGallery:

```typescript
import ContentEditor from "./components/ContentEditor";

// After TemplateGallery in left panel:
<ContentEditor
  content={content}
  customization={customization}
  onContentChange={setContent}
  onCustomizationChange={setCustomization}
  postType={postType}
/>
```

**Step 3: Test content editing**

Navigate to: http://localhost:3000/admin/marketing
Expected: Input fields update state, character counter works, image upload works

**Step 4: Commit**

```bash
git add app/admin/marketing/components/ContentEditor.tsx app/admin/marketing/page.tsx
git commit -m "feat: add content editor with inputs and image upload"
```

---

## Task 7: Build LivePreview Component (Initial)

**Files:**
- Create: `app/admin/marketing/components/LivePreview.tsx`
- Modify: `app/admin/marketing/page.tsx`

**Step 1: Create LivePreview component with placeholder**

```typescript
"use client";

import { motion } from "framer-motion";

interface Content {
  heading: string;
  body: string;
  attribution: string;
}

interface Customization {
  backgroundColor: string;
  textColor: string;
  backgroundImage: string | null;
}

interface LivePreviewProps {
  postType: string;
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
  return (
    <div>
      <p
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#666",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        Preview
      </p>

      {/* Preview Canvas */}
      <motion.div
        id="preview-canvas"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          aspectRatio: "1.9/1",
          background: customization.backgroundImage
            ? `url(${customization.backgroundImage}) center/cover`
            : customization.backgroundColor,
          borderRadius: "16px",
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        }}
      >
        {/* Simple preview - will be replaced with templates */}
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: customization.textColor,
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          {content.heading || "Your Heading Here"}
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            color: customization.textColor,
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          {content.body || "Your body text will appear here..."}
        </p>
        {content.attribution && (
          <p
            style={{
              fontSize: "1rem",
              color: customization.textColor,
              marginTop: "1rem",
              fontStyle: "italic",
              opacity: 0.8,
            }}
          >
            — {content.attribution}
          </p>
        )}

        {/* DuaCircle Logo watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: customization.textColor,
            opacity: 0.6,
          }}
        >
          DuaCircle
        </div>
      </motion.div>

      <p
        style={{
          fontSize: "0.75rem",
          color: "#999",
          marginTop: "0.75rem",
          textAlign: "center",
        }}
      >
        Preview updates in real-time. Template designs coming next.
      </p>
    </div>
  );
}
```

**Step 2: Integrate into main page**

In `app/admin/marketing/page.tsx`, import and add to right panel:

```typescript
import LivePreview from "./components/LivePreview";

// Replace right panel placeholder:
<div>
  <LivePreview
    postType={postType}
    selectedTemplate={selectedTemplate}
    content={content}
    customization={customization}
  />
</div>
```

**Step 3: Test live preview**

Navigate to: http://localhost:3000/admin/marketing
Expected: Typing in inputs updates preview in real-time, colors change preview

**Step 4: Commit**

```bash
git add app/admin/marketing/components/LivePreview.tsx app/admin/marketing/page.tsx
git commit -m "feat: add live preview with real-time updates"
```

---

## Task 8: Build ExportControls Component

**Files:**
- Create: `app/admin/marketing/components/ExportControls.tsx`
- Modify: `app/admin/marketing/page.tsx`

**Step 1: Create ExportControls component**

```typescript
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader } from "lucide-react";
import { toPng, toJpeg } from "html-to-image";

type ExportSize = "facebook" | "instagram" | "story";
type ExportFormat = "png" | "jpeg";

interface ExportControlsProps {
  postType: string;
}

export default function ExportControls({ postType }: ExportControlsProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<ExportFormat>("png");

  const sizes = {
    facebook: { width: 1200, height: 630, label: "Facebook" },
    instagram: { width: 1080, height: 1080, label: "Instagram" },
    story: { width: 1080, height: 1920, label: "Story" },
  };

  const exportImage = async (size: ExportSize) => {
    setIsExporting(true);
    try {
      const node = document.getElementById("preview-canvas");
      if (!node) throw new Error("Preview canvas not found");

      const dataUrl =
        exportFormat === "png"
          ? await toPng(node, {
              width: sizes[size].width,
              height: sizes[size].height,
              pixelRatio: 2,
            })
          : await toJpeg(node, {
              quality: 0.95,
              width: sizes[size].width,
              height: sizes[size].height,
              pixelRatio: 2,
            });

      // Download image
      const link = document.createElement("a");
      link.download = `duacircle-${postType}-${size}.${exportFormat}`;
      link.href = dataUrl;
      link.click();

      // Success feedback
      alert("Image downloaded successfully!");
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <p
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#666",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        Export Options
      </p>

      {/* Format Selector */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button
          onClick={() => setExportFormat("png")}
          style={{
            flex: 1,
            padding: "0.75rem",
            background: exportFormat === "png" ? "#7C3AED" : "white",
            color: exportFormat === "png" ? "white" : "#333",
            border: `2px solid ${exportFormat === "png" ? "#7C3AED" : "#E0E0E0"}`,
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          PNG
        </button>
        <button
          onClick={() => setExportFormat("jpeg")}
          style={{
            flex: 1,
            padding: "0.75rem",
            background: exportFormat === "jpeg" ? "#7C3AED" : "white",
            color: exportFormat === "jpeg" ? "white" : "#333",
            border: `2px solid ${exportFormat === "jpeg" ? "#7C3AED" : "#E0E0E0"}`,
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          JPG
        </button>
      </div>

      {/* Size Buttons */}
      <div style={{ display: "flex", gap: "0.75rem" }}>
        {(Object.keys(sizes) as ExportSize[]).map((sizeKey) => (
          <motion.button
            key={sizeKey}
            onClick={() => exportImage(sizeKey)}
            disabled={isExporting}
            whileHover={{ scale: isExporting ? 1 : 1.05 }}
            whileTap={{ scale: isExporting ? 1 : 0.95 }}
            style={{
              flex: 1,
              padding: "1rem",
              background: "linear-gradient(135deg, #7C3AED, #14B8A6)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: isExporting ? "not-allowed" : "pointer",
              opacity: isExporting ? 0.6 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            {isExporting ? <Loader size={18} className="spin" /> : <Download size={18} />}
            {sizes[sizeKey].label}
          </motion.button>
        ))}
      </div>

      <p
        style={{
          fontSize: "0.75rem",
          color: "#999",
          marginTop: "0.75rem",
          textAlign: "center",
        }}
      >
        Click a button to download the image in that size
      </p>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
```

**Step 2: Integrate into main page**

In `app/admin/marketing/page.tsx`, import and add after LivePreview:

```typescript
import ExportControls from "./components/ExportControls";

// After LivePreview in right panel:
<ExportControls postType={postType} />
```

**Step 3: Test export functionality**

Navigate to: http://localhost:3000/admin/marketing
Expected: Clicking export buttons downloads images in correct format/size

**Step 4: Commit**

```bash
git add app/admin/marketing/components/ExportControls.tsx app/admin/marketing/page.tsx
git commit -m "feat: add export controls with PNG/JPG and 3 sizes"
```

---

## Task 9: Create Announcement Templates

**Files:**
- Create: `app/admin/marketing/components/templates/AnnouncementTemplates.tsx`

**Step 1: Create AnnouncementTemplates component**

```typescript
"use client";

interface TemplateProps {
  content: { heading: string; body: string; attribution: string };
  customization: { backgroundColor: string; textColor: string; backgroundImage: string | null };
}

// Template 1: Bold Headline
export function BoldHeadline({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `linear-gradient(rgba(124,58,237,0.7), rgba(20,184,166,0.7)), url(${customization.backgroundImage}) center/cover`
          : `linear-gradient(135deg, ${customization.backgroundColor}, #14B8A6)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 900,
          color: customization.textColor,
          textAlign: "center",
          lineHeight: 1.2,
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
        }}
      >
        {content.heading || "BIG ANNOUNCEMENT"}
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          color: customization.textColor,
          textAlign: "center",
          marginTop: "1.5rem",
          opacity: 0.9,
          maxWidth: "600px",
        }}
      >
        {content.body || "Your announcement text goes here"}
      </p>
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          padding: "0.75rem 1.5rem",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "8px",
          fontWeight: 700,
          color: customization.textColor,
          fontSize: "1.25rem",
        }}
      >
        DuaCircle
      </div>
    </div>
  );
}

// Template 2: Card Style
export function CardStyle({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : `linear-gradient(135deg, ${customization.backgroundColor}, #9F7AEA)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "3rem",
          maxWidth: "700px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            background: `linear-gradient(135deg, ${customization.backgroundColor}, #14B8A6)`,
            borderRadius: "50%",
            margin: "0 auto 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
          }}
        >
          🎉
        </div>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#1F2937",
            marginBottom: "1rem",
          }}
        >
          {content.heading || "Exciting News"}
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#6B7280",
            lineHeight: 1.6,
          }}
        >
          {content.body || "We have something amazing to share with you"}
        </p>
        <div
          style={{
            marginTop: "2rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: customization.backgroundColor,
          }}
        >
          DuaCircle
        </div>
      </div>
    </div>
  );
}

// Template 3: Split Layout
export function SplitLayout({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* Left side - Text */}
      <div
        style={{
          background: customization.backgroundImage
            ? `linear-gradient(rgba(124,58,237,0.9), rgba(20,184,166,0.9)), url(${customization.backgroundImage}) center/cover`
            : `linear-gradient(135deg, ${customization.backgroundColor}, #14B8A6)`,
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            color: customization.textColor,
            marginBottom: "1.5rem",
            lineHeight: 1.2,
          }}
        >
          {content.heading || "Announcement"}
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            color: customization.textColor,
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          {content.body || "Details about the announcement"}
        </p>
        <div
          style={{
            marginTop: "2rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: customization.textColor,
            opacity: 0.8,
          }}
        >
          DuaCircle
        </div>
      </div>

      {/* Right side - Graphic placeholder */}
      <div
        style={{
          background: "linear-gradient(135deg, #F9FAFB, #E5E7EB)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "8rem",
        }}
      >
        📱
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/admin/marketing/components/templates/AnnouncementTemplates.tsx
git commit -m "feat: create 3 announcement templates"
```

---

## Task 10: Create Quote Templates

**Files:**
- Create: `app/admin/marketing/components/templates/QuoteTemplates.tsx`

**Step 1: Create QuoteTemplates component**

```typescript
"use client";

interface TemplateProps {
  content: { heading: string; body: string; attribution: string };
  customization: { backgroundColor: string; textColor: string; backgroundImage: string | null };
}

// Template 1: Elegant Minimal
export function ElegantMinimal({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : customization.backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem",
        position: "relative",
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 20px
          )`,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", textAlign: "center" }}>
        <div
          style={{
            fontSize: "4rem",
            color: customization.textColor,
            opacity: 0.3,
            marginBottom: "-1rem",
          }}
        >
          "
        </div>
        <p
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            color: customization.textColor,
            lineHeight: 1.4,
            fontStyle: "italic",
            marginBottom: "2rem",
          }}
        >
          {content.heading || "Your inspirational quote here"}
        </p>
        <p
          style={{
            fontSize: "1.25rem",
            color: customization.textColor,
            opacity: 0.8,
            marginBottom: "1.5rem",
          }}
        >
          {content.body}
        </p>
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: customization.textColor,
            opacity: 0.7,
          }}
        >
          — {content.attribution || "Author"}
        </p>
        <div
          style={{
            marginTop: "3rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: customization.textColor,
            opacity: 0.5,
          }}
        >
          DuaCircle
        </div>
      </div>
    </div>
  );
}

// Template 2: Ornate Frame
export function OrnateFrame({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : `linear-gradient(135deg, ${customization.backgroundColor}, #F59E0B)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <div
        style={{
          border: "6px solid",
          borderImage: "linear-gradient(135deg, #F59E0B, #FBBF24) 1",
          padding: "3rem",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: customization.textColor,
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✦</div>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              lineHeight: 1.4,
              marginBottom: "1.5rem",
            }}
          >
            {content.heading || "Beautiful Islamic Quote"}
          </p>
          {content.body && (
            <p style={{ fontSize: "1.25rem", opacity: 0.9, marginBottom: "1.5rem" }}>
              {content.body}
            </p>
          )}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#F59E0B",
              margin: "1.5rem auto",
            }}
          />
          <p style={{ fontSize: "1.1rem", fontWeight: 600, opacity: 0.9 }}>
            {content.attribution || "— Author"}
          </p>
          <div style={{ fontSize: "2rem", marginTop: "1rem" }}>✦</div>
        </div>
      </div>
    </div>
  );
}

// Template 3: Modern Clean
export function ModernClean({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : customization.backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "4rem 5rem",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "6px",
          background: "#F59E0B",
          marginBottom: "2rem",
        }}
      />
      <h2
        style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          color: customization.textColor,
          lineHeight: 1.2,
          marginBottom: "2rem",
          maxWidth: "90%",
        }}
      >
        {content.heading || "Powerful Quote"}
      </h2>
      {content.body && (
        <p
          style={{
            fontSize: "1.5rem",
            color: customization.textColor,
            opacity: 0.8,
            marginBottom: "2rem",
            maxWidth: "80%",
          }}
        >
          {content.body}
        </p>
      )}
      <p
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: customization.textColor,
          opacity: 0.7,
        }}
      >
        {content.attribution || "— Author"}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "3rem",
          fontSize: "1rem",
          fontWeight: 600,
          color: customization.textColor,
          opacity: 0.5,
        }}
      >
        DuaCircle
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/admin/marketing/components/templates/QuoteTemplates.tsx
git commit -m "feat: create 3 quote templates"
```

---

## Task 11: Create Feature and Testimonial Templates

**Files:**
- Create: `app/admin/marketing/components/templates/FeatureTemplates.tsx`
- Create: `app/admin/marketing/components/templates/TestimonialTemplates.tsx`

**Step 1: Create FeatureTemplates (simplified for MVP)**

```typescript
"use client";

interface TemplateProps {
  content: { heading: string; body: string; attribution: string };
  customization: { backgroundColor: string; textColor: string; backgroundImage: string | null };
}

export function AppMockup({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : `linear-gradient(135deg, ${customization.backgroundColor}, #14B8A6)`,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "3rem",
        gap: "2rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            color: customization.textColor,
            marginBottom: "1.5rem",
          }}
        >
          {content.heading || "New Feature"}
        </h2>
        <p
          style={{
            fontSize: "1.5rem",
            color: customization.textColor,
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          {content.body || "Feature description goes here"}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10rem",
        }}
      >
        📱
      </div>
    </div>
  );
}

export function IconText({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : customization.backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem",
      }}
    >
      <div style={{ fontSize: "6rem", marginBottom: "2rem" }}>✨</div>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          color: customization.textColor,
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        {content.heading || "Feature Name"}
      </h2>
      <p
        style={{
          fontSize: "1.5rem",
          color: customization.textColor,
          textAlign: "center",
          opacity: 0.9,
          maxWidth: "600px",
        }}
      >
        {content.body || "Feature description"}
      </p>
    </div>
  );
}

export function BeforeAfter({ content, customization }: TemplateProps) {
  return (
    <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div
        style={{
          background: "#E5E7EB",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#6B7280", marginBottom: "2rem" }}>
          BEFORE
        </p>
        <p style={{ fontSize: "5rem" }}>😔</p>
      </div>
      <div
        style={{
          background: customization.backgroundColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: customization.textColor,
            marginBottom: "2rem",
          }}
        >
          AFTER
        </p>
        <p style={{ fontSize: "5rem" }}>😊</p>
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: customization.textColor,
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          {content.heading || "Better Experience"}
        </h3>
      </div>
    </div>
  );
}
```

**Step 2: Create TestimonialTemplates**

```typescript
"use client";

interface TemplateProps {
  content: { heading: string; body: string; attribution: string };
  customization: { backgroundColor: string; textColor: string; backgroundImage: string | null };
}

export function UserCard({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : `linear-gradient(135deg, ${customization.backgroundColor}, #9F7AEA)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "3rem",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C3AED, #14B8A6)",
            margin: "0 auto 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
          }}
        >
          👤
        </div>
        <div style={{ fontSize: "2rem", color: "#F59E0B", marginBottom: "1rem" }}>⭐⭐⭐⭐⭐</div>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#1F2937",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}
        >
          "{content.heading || "Amazing experience with DuaCircle!"}"
        </p>
        {content.body && (
          <p style={{ fontSize: "1.1rem", color: "#6B7280", marginBottom: "1.5rem" }}>
            {content.body}
          </p>
        )}
        <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1F2937" }}>
          {content.attribution || "User Name"}
        </p>
      </div>
    </div>
  );
}

export function SocialPost({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `url(${customization.backgroundImage}) center/cover`
          : "#F9FAFB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "2rem",
          maxWidth: "600px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #14B8A6)",
            }}
          />
          <div>
            <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1F2937" }}>
              {content.attribution || "User Name"}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#6B7280" }}>DuaCircle User</p>
          </div>
        </div>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#1F2937",
            lineHeight: 1.6,
            marginBottom: "1rem",
          }}
        >
          {content.heading || "Testimonial text goes here"}
        </p>
        {content.body && (
          <p style={{ fontSize: "1.1rem", color: "#6B7280" }}>{content.body}</p>
        )}
        <div style={{ marginTop: "1.5rem", fontSize: "1.5rem", color: "#F59E0B" }}>⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  );
}

export function StatQuote({ content, customization }: TemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: customization.backgroundImage
          ? `linear-gradient(rgba(124,58,237,0.9), rgba(20,184,166,0.9)), url(${customization.backgroundImage}) center/cover`
          : `linear-gradient(135deg, ${customization.backgroundColor}, #14B8A6)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem",
      }}
    >
      <div
        style={{
          fontSize: "8rem",
          fontWeight: 900,
          color: customization.textColor,
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        10,000+
      </div>
      <p
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: customization.textColor,
          opacity: 0.9,
          marginBottom: "3rem",
        }}
      >
        HAPPY USERS
      </p>
      <p
        style={{
          fontSize: "2rem",
          color: customization.textColor,
          textAlign: "center",
          fontStyle: "italic",
          maxWidth: "700px",
          lineHeight: 1.4,
        }}
      >
        "{content.heading || "Best Islamic app I've ever used"}"
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: customization.textColor,
          marginTop: "2rem",
          opacity: 0.8,
        }}
      >
        — {content.attribution || "User"}
      </p>
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add app/admin/marketing/components/templates/FeatureTemplates.tsx app/admin/marketing/components/templates/TestimonialTemplates.tsx
git commit -m "feat: create feature and testimonial templates"
```

---

## Task 12: Integrate Templates into LivePreview

**Files:**
- Modify: `app/admin/marketing/components/LivePreview.tsx`

**Step 1: Import all templates**

Add imports at top of LivePreview.tsx:

```typescript
import * as AnnouncementTemplates from "./templates/AnnouncementTemplates";
import * as QuoteTemplates from "./templates/QuoteTemplates";
import * as FeatureTemplates from "./templates/FeatureTemplates";
import * as TestimonialTemplates from "./templates/TestimonialTemplates";
```

**Step 2: Replace preview rendering with template selection**

Replace the preview canvas content div with:

```typescript
{/* Preview Canvas */}
<motion.div
  id="preview-canvas"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  style={{
    aspectRatio: "1.9/1",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    background: "#F5F5F5",
  }}
>
  {(() => {
    const templateProps = { content, customization };

    // Announcement templates
    if (postType === "announcement") {
      if (selectedTemplate === 0) return <AnnouncementTemplates.BoldHeadline {...templateProps} />;
      if (selectedTemplate === 1) return <AnnouncementTemplates.CardStyle {...templateProps} />;
      if (selectedTemplate === 2) return <AnnouncementTemplates.SplitLayout {...templateProps} />;
    }

    // Quote templates
    if (postType === "quote") {
      if (selectedTemplate === 0) return <QuoteTemplates.ElegantMinimal {...templateProps} />;
      if (selectedTemplate === 1) return <QuoteTemplates.OrnateFrame {...templateProps} />;
      if (selectedTemplate === 2) return <QuoteTemplates.ModernClean {...templateProps} />;
    }

    // Feature templates
    if (postType === "feature") {
      if (selectedTemplate === 0) return <FeatureTemplates.AppMockup {...templateProps} />;
      if (selectedTemplate === 1) return <FeatureTemplates.IconText {...templateProps} />;
      if (selectedTemplate === 2) return <FeatureTemplates.BeforeAfter {...templateProps} />;
    }

    // Testimonial templates
    if (postType === "testimonial") {
      if (selectedTemplate === 0) return <TestimonialTemplates.UserCard {...templateProps} />;
      if (selectedTemplate === 1) return <TestimonialTemplates.SocialPost {...templateProps} />;
      if (selectedTemplate === 2) return <TestimonialTemplates.StatQuote {...templateProps} />;
    }

    return <div>Template not found</div>;
  })()}
</motion.div>
```

**Step 3: Test all templates**

Navigate to: http://localhost:3000/admin/marketing
Expected: Switching post types and templates shows different designs

**Step 4: Commit**

```bash
git add app/admin/marketing/components/LivePreview.tsx
git commit -m "feat: integrate all 12 templates into preview"
```

---

## Task 13: Final Testing and Polish

**Step 1: Test complete workflow**

1. Navigate to http://localhost:3000/admin/marketing
2. Test each post type with each template (12 combinations)
3. Test content editing updates preview
4. Test color pickers change design
5. Test image upload works
6. Test export in all 3 sizes
7. Verify downloaded images are correct

**Step 2: Add final polish - loading states**

No code changes needed if ExportControls already has spinner

**Step 3: Test error scenarios**

1. Upload image >5MB - should show error
2. Try export with no content - should still work with placeholders
3. Test in different browsers if possible

**Step 4: Final commit**

```bash
git add .
git commit -m "feat: complete social media designer MVP with 12 templates"
```

---

## Completion Checklist

- [x] Dependencies installed (html-to-image)
- [x] Marketing route in sidebar navigation
- [x] Main page structure with state management
- [x] PostTypeSelector (4 options)
- [x] TemplateGallery (3 per type)
- [x] ContentEditor (inputs, colors, image upload)
- [x] LivePreview with real-time updates
- [x] ExportControls (PNG/JPG, 3 sizes)
- [x] 12 templates (3 × 4 post types)
- [x] Template integration
- [x] End-to-end testing

---

## Notes

- All templates use inline styles for consistent export
- html-to-image captures exact visual rendering
- No backend/database - purely client-side
- Images generate in ~1-2 seconds
- Future: Add more templates, save drafts, direct social posting
