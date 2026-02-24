"use client";

const links = {
  App: ["Features", "How It Works", "Prayer Types", "Family Circles"],
  Company: ["About Us", "Blog", "Press Kit", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Support: ["Help Center", "Contact Us", "Community Forum", "Report a Bug"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #001A1A 0%, #000D0D 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
                style={{ background: "linear-gradient(135deg, #006B6B, #008A8A)" }}
              >
                🤲
              </div>
              <div>
                <div className="text-white font-bold text-xl">DuaCircle</div>
                <div className="text-xs" style={{ color: "#C9A55A", fontFamily: "serif" }}>
                  دعا حلقہ
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Turn grief into continuous blessings. A global Muslim community
              united through the power of heartfelt duas and collective prayer.
            </p>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                background: "rgba(76,175,80,0.15)",
                border: "1px solid rgba(76,175,80,0.25)",
                color: "#4CAF50",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4CAF50", boxShadow: "0 0 6px #4CAF50" }}
              />
              All Systems Operational
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {category}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A55A")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} DuaCircle. All rights reserved. Made with 🤲 for the Ummah.
          </div>

          <div className="flex items-center gap-2">
            {[
              { label: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", style: { color: "rgba(201,165,90,0.5)", fontFamily: "serif", fontSize: "12px" } },
            ].map((item) => (
              <span key={item.label} style={item.style}>{item.label}</span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {["App Store", "Google Play"].map((store) => (
              <a
                key={store}
                href="#"
                className="text-xs px-3 py-1.5 rounded-lg transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                {store}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
