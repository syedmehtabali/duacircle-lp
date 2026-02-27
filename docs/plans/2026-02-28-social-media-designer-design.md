# Social Media Post Designer - Design Document

**Date:** 2026-02-28
**Author:** Claude (Sonnet 4.5)
**Status:** Approved

---

## Executive Summary

A browser-based social media post designer integrated into the DuaCircle admin panel that allows marketing team to create branded Facebook and Instagram posts from text content. The tool provides pre-designed templates, real-time preview, and multi-format export (PNG/JPG for Facebook, Instagram Square, Instagram Story).

**Key Decision:** Browser-based canvas rendering using `html-to-image` library - no backend infrastructure, no storage, zero ongoing costs.

---

## Requirements

### Functional Requirements

1. **Post Types** (4 categories):
   - Announcements (app updates, milestones)
   - Inspirational Quotes (Islamic quotes, Hadith, Quranic verses)
   - Feature Highlights (showcasing app capabilities)
   - User Testimonials (success stories, community impact)

2. **Customization Levels**:
   - Quick auto-design with brand defaults (fastest)
   - Template selection (3 options per post type)
   - Basic customization (colors, backgrounds, text)
   - Custom image uploads (photos, screenshots, graphics)

3. **Export Formats**:
   - PNG and JPG formats
   - Multiple platform sizes:
     - Facebook Post: 1200×630px
     - Instagram Square: 1080×1080px
     - Instagram Story: 1080×1920px

### Non-Functional Requirements

- **Performance**: Image generation in <2 seconds
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **No Backend**: Client-side only, no server/database requirements
- **Brand Consistency**: All templates use DuaCircle color palette and design system

---

## Architecture

### Technical Approach

**Browser-Based Canvas Renderer** (Approach 1 - Selected)

- Build post designs as React components
- Use `html-to-image` library to convert DOM to PNG/JPG
- Generate multiple sizes by rendering different aspect ratio components
- Store user uploads temporarily in browser memory (FileReader API)

**Why this approach:**
- ✅ Zero infrastructure - integrates with existing Next.js admin panel
- ✅ Fast development - MVP in 1-2 days
- ✅ No ongoing costs - one-time implementation
- ✅ Full brand control - custom templates
- ✅ Instant generation - no network latency

### Page Structure

```
Admin Panel Route: /admin/marketing

┌─────────────────────────────────────────────────────┐
│  Left Panel (40%)          │  Right Panel (60%)     │
│  ─────────────────         │  ──────────────────    │
│  1. Post Type Selector     │  Live Preview Canvas   │
│  2. Template Gallery       │  ┌──────────────────┐  │
│  3. Content Editor         │  │                  │  │
│     • Text input           │  │  [Your design    │  │
│     • Background picker    │  │   renders here]  │  │
│     • Color customizer     │  │                  │  │
│     • Image uploader       │  │                  │  │
│  4. Export Controls        │  └──────────────────┘  │
│     • Size selector        │                        │
│     • Format (PNG/JPG)     │  Download Buttons:     │
│     • Download button      │  [FB] [IG] [Story]     │
└─────────────────────────────────────────────────────┘
```

### User Workflow

1. **Select post type** → Auto-selects first template
2. **Choose template** → Optional, 3 variants per type
3. **Edit content** → Real-time preview updates
4. **Customize** → Optional colors, background, image upload
5. **Export** → Click size button → Instant download

---

## Component Structure

### File Organization

```
app/admin/marketing/
├── page.tsx                    # Main page component
├── components/
│   ├── PostTypeSelector.tsx    # 4 buttons: Announcement, Quote, Feature, Testimonial
│   ├── TemplateGallery.tsx     # 3 template thumbnails per type
│   ├── ContentEditor.tsx       # Text inputs, color pickers, image uploader
│   ├── LivePreview.tsx         # Rendered design preview
│   ├── ExportControls.tsx      # Size/format buttons, download logic
│   └── templates/
│       ├── AnnouncementTemplates.tsx    # 3 announcement designs
│       ├── QuoteTemplates.tsx           # 3 quote designs
│       ├── FeatureTemplates.tsx         # 3 feature designs
│       └── TestimonialTemplates.tsx     # 3 testimonial designs
```

### State Management

Using React `useState` for simplicity:

```typescript
const [postType, setPostType] = useState<'announcement' | 'quote' | 'feature' | 'testimonial'>('announcement');
const [selectedTemplate, setSelectedTemplate] = useState(0); // 0-2
const [content, setContent] = useState({
  heading: '',
  body: '',
  attribution: '', // for quotes/testimonials
});
const [customization, setCustomization] = useState({
  backgroundColor: '#7C3AED', // Purple default
  textColor: '#FFFFFF',
  backgroundImage: null as File | null,
});
```

---

## Template System

### Template Categories (12 total = 4 types × 3 variants)

**1. Announcement Templates:**
- **"Bold Headline"** - Large text on gradient background, app logo in corner
- **"Card Style"** - Centered white card on colorful background, icon at top
- **"Split Layout"** - Text on left, app screenshot/graphic on right

**2. Inspirational Quote Templates:**
- **"Elegant Minimal"** - Quote in center, subtle Islamic pattern background
- **"Ornate Frame"** - Decorative border around quote, gold accents
- **"Modern Clean"** - Large quote, small attribution, solid color

**3. Feature Highlight Templates:**
- **"App Mockup"** - Phone mockup showing feature, description beside
- **"Icon + Text"** - Large feature icon, headline, bullet points
- **"Before/After"** - Split screen showing problem → solution

**4. Testimonial Templates:**
- **"User Card"** - Avatar, name, quote, star rating
- **"Social Post Style"** - Looks like Instagram/Twitter post
- **"Stat + Quote"** - Big number (e.g., "10,000+ users"), quote below

### Pre-designed Backgrounds

Stored as React component styles:

- Gradient Purple → Teal (brand primary)
- Gradient Gold → Purple (warm)
- Islamic Geometric Pattern (subtle, SVG)
- Soft Bokeh (blurred circles, peaceful)
- Solid Colors (purple, teal, gold, white)
- Custom uploaded image (user provides)

### Brand Colors

```
Primary Purple: #7C3AED
Secondary Teal: #14B8A6
Accent Gold: #F59E0B
White: #FFFFFF
Text Dark: #1F2937
Text Light: #F9FAFB
```

### Export Sizes

```
Facebook Post: 1200×630px (1.9:1 ratio)
Instagram Square: 1080×1080px (1:1 ratio)
Instagram Story: 1080×1920px (9:16 ratio)
```

---

## Technical Implementation

### Image Generation Flow

1. **User edits** → State updates → Preview re-renders instantly
2. **User clicks export button** → Triggers conversion:

```typescript
import { toPng, toJpeg } from 'html-to-image';

const exportImage = async (
  format: 'png' | 'jpeg',
  size: 'facebook' | 'instagram' | 'story'
) => {
  const node = document.getElementById('preview-canvas');
  const dimensions = {
    facebook: { width: 1200, height: 630 },
    instagram: { width: 1080, height: 1080 },
    story: { width: 1080, height: 1920 },
  };

  const dataUrl = format === 'png'
    ? await toPng(node, dimensions[size])
    : await toJpeg(node, { quality: 0.95, ...dimensions[size] });

  downloadImage(dataUrl, `duacircle-${postType}-${size}.${format}`);
};
```

3. **Browser downloads** file instantly (no server round-trip)

### Dependencies

```bash
npm install html-to-image
```

### Image Upload Handling

```typescript
const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;

  // Validate size
  if (file.size > 5 * 1024 * 1024) { // 5MB limit
    showError('Image too large. Please use an image under 5MB.');
    return;
  }

  // Read and preview
  const reader = new FileReader();
  reader.onload = (e) => {
    setCustomization(prev => ({
      ...prev,
      backgroundImage: e.target?.result as string
    }));
  };
  reader.readAsDataURL(file);
};
```

---

## Error Handling

### Error Scenarios

**1. Image Generation Fails**
- Display toast: "Failed to generate image. Please try again."
- Fallback: Offer manual screenshot instructions
- Log error to console for debugging

**2. Uploaded Image Too Large (>5MB)**
- Show warning: "Image too large. Please use an image under 5MB."
- Reject upload, keep previous image

**3. Text Overflow**
- Preview shows actual rendering (may be cut off)
- Display character count: "Recommended: under 200 characters"
- Let user decide if acceptable

**4. Browser Compatibility**
- Detect unsupported browsers (IE, old versions)
- Show warning: "Please use Chrome, Firefox, Safari, or Edge for best results."

### User Experience

**Loading States:**
- Show spinner overlay during image generation (~1-2 seconds)
- Disable download button while processing
- Display "Generating image..." message

**Success Feedback:**
- Toast notification: "Image downloaded successfully!"
- Show filename: `duacircle-announcement-facebook.png`

**Preview Accuracy:**
- Preview canvas uses exact export dimensions (scaled to fit screen)
- "What you see is what you get" guarantee
- Responsive preview scaling

### Known Limitations

Communicate these to users:

- No undo/redo (refresh page to reset)
- No save/load drafts (future enhancement)
- Custom fonts not supported initially (uses system fonts)
- Web fonts may not render in export (future: embed fonts)

---

## Future Enhancements

Phase 2 considerations (not in MVP):

1. **Save/Load Drafts** - Store designs in localStorage or database
2. **Template Library** - More templates, user-created templates
3. **Advanced Editor** - Text positioning, layers, filters
4. **Scheduled Posting** - Direct Facebook/Instagram API integration
5. **Analytics Integration** - Track which designs perform best
6. **Team Collaboration** - Share templates across team members
7. **Custom Fonts** - Upload and use brand-specific fonts
8. **Animation Support** - Animated GIFs or short video formats

---

## Success Metrics

### MVP Success Criteria

- Generate branded social media posts in <5 minutes
- Export images in 3 sizes with 1 click
- Zero infrastructure costs
- Works offline after initial page load

### Performance Targets

- Image generation: <2 seconds
- Page load: <1 second
- Preview updates: <100ms (instant feel)

### User Adoption

- Marketing team creates ≥5 posts per week
- Posts maintain consistent brand identity
- Positive feedback on ease of use

---

## Appendix

### Sidebar Navigation Addition

Add to `app/admin/components/Sidebar.tsx`:

```typescript
{
  label: "Marketing",
  icon: Image, // from lucide-react
  href: "/admin/marketing",
  badge: null,
}
```

### Color Reference

```css
--primary-purple: #7C3AED;
--secondary-teal: #14B8A6;
--accent-gold: #F59E0B;
--bg-light: #F9FAFB;
--bg-dark: #1F2937;
--text-light: #FFFFFF;
--text-dark: #1F2937;
```

---

## Conclusion

This design provides a fast, zero-cost solution for creating branded social media posts directly in the admin panel. The browser-based approach eliminates infrastructure complexity while maintaining full control over design and brand consistency. Implementation estimated at 1-2 days for MVP with all 12 templates.
