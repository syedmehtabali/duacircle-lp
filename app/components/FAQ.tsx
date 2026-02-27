"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is DuaCircle really free?",
    answer:
      "Yes! DuaCircle is 100% free with no ads, no subscriptions, and no hidden costs. We believe prayer should be accessible to everyone. The app is funded by voluntary donations from the community.",
  },
  {
    question: "How do I create a prayer request?",
    answer:
      "Creating a prayer request is simple: (1) Tap the '+' button in the app, (2) Choose who you're praying for (yourself, a loved one, or someone who has passed), (3) Select a dua type (Al-Fatiha, Yaseen, Al-Ikhlas, or write your own), (4) Set your prayer goal and visibility (community or family only), and (5) Share! The community will start praying within minutes.",
  },
  {
    question: "What are family circles and how do they work?",
    answer:
      "Family circles are private groups where you can share prayer requests with just your close family and friends. Create a circle, invite members via email or share link, and all prayers within that circle remain completely private. Perfect for sensitive matters you don't want to share publicly.",
  },
  {
    question: "How are Hasanat (rewards) calculated?",
    answer:
      "Hasanat are symbolic spiritual rewards earned for every prayer you offer. You receive Hasanat for: offering prayers for others, helping people reach their prayer goals, maintaining prayer streaks, and completing daily challenges. The exact calculation is meant to motivate consistent prayer, not replace actual spiritual rewards from Allah.",
  },
  {
    question: "Is my information private and secure?",
    answer:
      "Absolutely. We take privacy seriously. You control what you share—community requests are public, but family circles are completely private. We never sell your data. You can pray anonymously anytime. All data is encrypted and stored securely on Supabase servers. You can delete your account and all associated data anytime from settings.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, you can permanently delete your account anytime from the Profile > Settings menu. All your personal data will be removed. Note: Memorial profiles for deceased loved ones can optionally remain active so the community can continue praying for them, honoring their memory.",
  },
  {
    question: "What happens to memorial profiles for my loved ones?",
    answer:
      "Memorial profiles for deceased loved ones remain active even if you delete your account, allowing the community to continue offering prayers. This ensures continuous charity (sadaqah jariyah) for the departed soul. If you want to remove a memorial, you can do so before deleting your account.",
  },
  {
    question: "Do I need an account to use DuaCircle?",
    answer:
      "Yes, a free account is required to create prayer requests, offer prayers, join family circles, and track your spiritual journey. You can sign up quickly using your email, Google, Apple, or Facebook account—it takes less than a minute.",
  },
  {
    question: "Can I pray anonymously?",
    answer:
      "Yes! Every time you pray for someone, you can choose to remain anonymous. The person will still see the prayer count increase and receive Hasanat, but your name won't be shown. This allows you to pray purely for the sake of Allah without seeking recognition.",
  },
  {
    question: "Which countries is DuaCircle available in?",
    answer:
      "DuaCircle is available worldwide in 50+ countries on both iOS (App Store) and Android (Google Play). The app supports multiple languages and works anywhere with an internet connection.",
  },
  {
    question: "What types of prayers can I request?",
    answer:
      "You can request any type of prayer! Common options include: Al-Fatiha, Yaseen, and Al-Ikhlas from the Quran, or you can write a custom dua in your own words in any language. Popular categories include prayers for health & healing, guidance, success, forgiveness, and remembrance of deceased loved ones.",
  },
  {
    question: "How do I invite family members to my circle?",
    answer:
      "From your family circle, tap 'Invite Members', then either: (1) Enter their email addresses to send invitations directly, or (2) Share the unique circle link via WhatsApp, SMS, or any messaging app. They'll receive an invitation to join your private circle instantly.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #EEE9DC 0%, #F8F6F0 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-sm font-medium"
            style={{ background: "#E0F2F2", color: "#006B6B" }}
          >
            💬 Have Questions?
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666666" }}>
            Everything you need to know about DuaCircle. Can't find an answer?{" "}
            <a
              href="mailto:support@duacircle.com"
              className="font-semibold"
              style={{ color: "#006B6B" }}
            >
              Contact us
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "white",
                  border:
                    openIndex === i
                      ? "2px solid #006B6B"
                      : "1px solid #EEEBE3",
                  boxShadow:
                    openIndex === i
                      ? "0 8px 30px rgba(0,107,107,0.12)"
                      : "none",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="font-bold text-lg flex-1"
                    style={{ color: "#1A1A1A" }}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={24}
                      style={{
                        color: openIndex === i ? "#006B6B" : "#999",
                      }}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-base leading-relaxed mt-4 pt-4"
                        style={{
                          color: "#555",
                          borderTop: "1px solid #EEEBE3",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 text-center rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #E0F2F2, #C8E6E6)",
            border: "1px solid #B3E0E0",
          }}
        >
          <div className="text-3xl mb-3">🤝</div>
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: "#006B6B" }}
          >
            Still have questions?
          </h3>
          <p className="text-sm mb-4" style={{ color: "#555" }}>
            Our support team is here to help you get started
          </p>
          <a
            href="mailto:support@duacircle.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-transform duration-200 hover:scale-105"
            style={{ background: "#006B6B" }}
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
