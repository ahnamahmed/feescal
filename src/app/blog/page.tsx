"use client";

import { useState } from "react";
import Link from "next/link";

const POSTS = [
  {
    id: 9,
    title: "eBay Seller Fees in 2026: The Complete Guide to Every Charge (Updated)",
    excerpt: "eBay's fee structure changed in 2026. Break down every charge — final value fees, insertion fees, Store subscriptions, and hidden costs — and learn how to keep more of every sale.",
    category: "Marketplace Strategies",
    author: "Feescal Editorial Team",
    date: "March 5, 2026",
    readTime: "10 min read",
    featured: true,
    image: null,
    color: "#6C47FF",
    href: "/blog/ebay-seller-fees-2026",
  },
  {
    id: 1,
    title: "Poshmark Seller Fees in 2026: How Much Does Poshmark Actually Take?",
    excerpt: "Poshmark's 20% commission is one of the highest in resale. Break down the full fee structure, the 2024 controversy, and how to protect your margins on every sale.",
    category: "Fee Comparisons",
    author: "Feescal Editorial Team",
    date: "March 3, 2026",
    readTime: "9 min read",
    featured: false,
    image: null,
    color: "#FF6B6B",
    href: "/blog/poshmark-seller-fees-2026",
  },
  {
    id: 2,
    title: "Poshmark vs Depop in 2026: Which Platform Pays Sellers More?",
    excerpt: "Poshmark charges 20% on every sale. Depop charges 0% for US sellers — just a 3.3% + $0.45 processing fee. On a $100 sale, Depop puts $16 more in your pocket. Here's the full comparison.",
    category: "Fee Comparisons",
    author: "Feescal Editorial Team",
    date: "March 19, 2026",
    readTime: "11 min read",
    featured: false,
    image: null,
    color: "#FFB830",
    href: "/blog/poshmark-vs-depop-2026",
  },
  {
    id: 3,
    title: "Grailed Seller Fees in 2026: The Complete Breakdown (Commission & Processing)",
    excerpt: "Grailed's 9% commission is only part of what you pay. Add Stripe processing fees and the real rate hits 12–16%. Here's everything you need to know to price for profit.",
    category: "Marketplace Strategies",
    author: "Feescal Editorial Team",
    date: "March 10, 2026",
    readTime: "10 min read",
    featured: false,
    image: null,
    color: "#00C896",
    href: "/blog/grailed-seller-fees-2026",
  },
  {
    id: 4,
    title: "Top 10 Items to Resell for Maximum Profit in 2026 — With Platform-by-Platform Fee Breakdowns",
    excerpt: "The 10 most profitable resale categories in 2026 with real sourcing prices, typical sale prices, and exact profit comparisons across eBay, Poshmark, Depop, Mercari, StockX, and Grailed after all fees.",
    category: "Reselling Tips",
    author: "Feescal Editorial Team",
    date: "March 19, 2026",
    readTime: "14 min read",
    featured: false,
    image: null,
    color: "#FFB830",
    href: "/blog/top-10-items-resell-profit-2026",
  },
  {
    id: 5,
    title: "Mercari Seller Fees in 2026: Complete Guide (Updated)",
    excerpt: "Mercari's flat 10% fee applies to item price AND shipping — a detail that catches most sellers off guard. Here's the full 2026 breakdown, the fee history, and how to price every listing for maximum profit.",
    category: "Marketplace Strategies",
    author: "Feescal Editorial Team",
    date: "March 19, 2026",
    readTime: "10 min read",
    featured: false,
    image: null,
    color: "#6C47FF",
    href: "/blog/mercari-seller-fees-2026",
  },
  {
    id: 6,
    title: "TikTok Shop Seller Fees in 2026: Every Charge Explained (Referral, Processing, FBT & Affiliate)",
    excerpt: "TikTok Shop's 6% fee is just the starting point. Add processing, FBT fulfillment, and affiliate commissions and your real cost hits 20%–30%+. Here's the complete 2026 breakdown.",
    category: "Marketplace Strategies",
    author: "Feescal Editorial Team",
    date: "March 19, 2026",
    readTime: "12 min read",
    featured: false,
    image: null,
    color: "#EE1D52",
    href: "/blog/tiktok-shop-seller-fees-2026",
  },
  {
    id: 7,
    title: "StockX Seller Fees in 2026: Complete Guide (Updated Seller Levels & Fee Changes)",
    excerpt: "StockX fees range from 10% to 12% depending on your seller level — plus the March 2026 Flex and shipping changes. Here's everything you need to know to price for profit.",
    category: "Marketplace Strategies",
    author: "Feescal Editorial Team",
    date: "March 15, 2026",
    readTime: "11 min read",
    featured: false,
    image: null,
    color: "#1A7F5A",
    href: "/blog/stockx-seller-fees-2026",
  },
  {
    id: 8,
    title: "Whatnot Seller Fees in 2026: Commission, Processing & Live Selling Costs Fully Explained",
    excerpt: "Whatnot's 8% commission is only part of what you pay. Add processing fees and the real rate is 11–12%. Plus: category discounts, the $1,500 cap, and how to price before you go live.",
    category: "Marketplace Strategies",
    author: "Feescal Editorial Team",
    date: "March 19, 2026",
    readTime: "10 min read",
    featured: false,
    image: null,
    color: "#FFB830",
    href: "/blog/whatnot-seller-fees-2026",
  },
];

const CATEGORIES = ["All", "Marketplace Strategies", "Fee Comparisons", "Reselling Tips", "Platform Updates"];

const IllustrationCard = ({ color, index }: { color: string; index: number }) => {
  const shapes = [
    <svg key="a" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill={color + "15"} />
      <circle cx="100" cy="70" r="40" fill={color + "25"} />
      <rect x="78" y="50" width="44" height="40" rx="6" fill={color + "40"} />
      <rect x="84" y="58" width="32" height="6" rx="3" fill={color} opacity="0.7" />
      <rect x="84" y="68" width="20" height="6" rx="3" fill={color} opacity="0.5" />
      <circle cx="100" cy="100" r="8" fill={color} opacity="0.8" />
      <text x="97" y="104" fontSize="10" fill="white" fontWeight="bold">$</text>
      <circle cx="140" cy="40" r="16" fill={color + "30"} />
      <circle cx="60" cy="100" r="12" fill={color + "20"} />
    </svg>,
    <svg key="b" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill={color + "15"} />
      <rect x="30" y="90" width="20" height="30" rx="4" fill={color} opacity="0.4" />
      <rect x="60" y="70" width="20" height="50" rx="4" fill={color} opacity="0.6" />
      <rect x="90" y="50" width="20" height="70" rx="4" fill={color} opacity="0.8" />
      <rect x="120" y="30" width="20" height="90" rx="4" fill={color} />
      <rect x="150" y="45" width="20" height="75" rx="4" fill={color} opacity="0.7" />
      <path d="M30 90 Q75 60 100 50 Q130 38 170 45" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="170" cy="45" r="5" fill={color} />
    </svg>,
    <svg key="c" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill={color + "15"} />
      <rect x="50" y="30" width="100" height="70" rx="8" fill={color + "20"} />
      <rect x="62" y="42" width="36" height="46" rx="5" fill={color + "40"} />
      <rect x="102" y="42" width="36" height="46" rx="5" fill={color + "60"} />
      <rect x="68" y="50" width="24" height="4" rx="2" fill={color} opacity="0.6" />
      <rect x="68" y="58" width="16" height="4" rx="2" fill={color} opacity="0.4" />
      <rect x="108" y="50" width="24" height="4" rx="2" fill={color} opacity="0.8" />
      <rect x="108" y="58" width="16" height="4" rx="2" fill={color} opacity="0.5" />
      <circle cx="80" cy="110" r="10" fill={color} opacity="0.8" />
      <circle cx="120" cy="110" r="10" fill={color} opacity="0.5" />
    </svg>,
    <svg key="d" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill={color + "15"} />
      <ellipse cx="80" cy="90" rx="30" ry="10" fill={color + "30"} />
      <rect x="50" y="55" width="60" height="35" rx="2" fill={color + "25"} />
      <ellipse cx="80" cy="55" rx="30" ry="10" fill={color + "50"} />
      <ellipse cx="80" cy="48" rx="30" ry="10" fill={color} opacity="0.7" />
      <circle cx="145" cy="60" r="25" fill={color + "30"} />
      <circle cx="145" cy="60" r="18" fill={color + "50"} />
      <text x="138" y="65" fontSize="14" fill={color} fontWeight="bold">$</text>
      <path d="M50 105 Q80 95 110 100" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
    </svg>,
  ];
  return shapes[index % shapes.length];
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest = filtered.filter(p => p.id !== featured?.id);

  return (
    <div style={{ background: "#F7F7FB", minHeight: "100vh" }}>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "60px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <span style={{ background: "#EDE8FF", color: "#6C47FF", padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>FEESCAL&apos;S BLOG</span>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 800, color: "#0D0D1A", margin: "16px 0 8px", letterSpacing: "-1px" }}>The Seller&apos;s Profit Playbook</h1>
          <p style={{ color: "#777", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>Strategies, fee guides, and marketplace insights to help you keep more of what you earn.</p>
        </div>

        {/* Featured Post */}
        {featured && (
          <Link href={featured.href || "#"} style={{ textDecoration: "none" }}>
            <div
              onMouseEnter={() => setHoveredId(featured.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: 48,
                boxShadow: hoveredId === featured.id ? "0 12px 40px rgba(108,71,255,0.15)" : "0 2px 12px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                transform: hoveredId === featured.id ? "translateY(-3px)" : "none",
                cursor: "pointer",
                border: "1px solid #EBEBF5",
              }}
            >
              <div style={{ background: featured.color + "12", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280 }}>
                <div style={{ width: "80%", maxWidth: 280 }}>
                  <IllustrationCard color={featured.color} index={0} />
                </div>
              </div>
              <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ background: featured.color + "20", color: featured.color, padding: "5px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600 }}>{featured.category}</span>
                  <span style={{ color: "#aaa", fontSize: 13 }}>✦ Featured</span>
                </div>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 800, color: "#0D0D1A", margin: "0 0 14px", lineHeight: 1.25, letterSpacing: "-0.5px" }}>{featured.title}</h2>
                <p style={{ color: "#666", lineHeight: 1.7, fontSize: 15, margin: "0 0 24px" }}>{featured.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: featured.color + "30", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: featured.color }}>
                    {featured.author[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#222", fontSize: 14 }}>{featured.author}</div>
                    <div style={{ color: "#aaa", fontSize: 13 }}>{featured.date} · {featured.readTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "9px 20px",
                borderRadius: 100,
                border: activeCategory === cat ? "none" : "1.5px solid #E0E0EF",
                background: activeCategory === cat ? "#6C47FF" : "white",
                color: activeCategory === cat ? "white" : "#555",
                fontWeight: activeCategory === cat ? 600 : 400,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {rest.map((post, i) => (
            <Link key={post.id} href={post.href || "#"} style={{ textDecoration: "none" }}>
              <article
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: "white",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: hoveredId === post.id ? "0 10px 32px rgba(108,71,255,0.12)" : "0 2px 8px rgba(0,0,0,0.05)",
                  transform: hoveredId === post.id ? "translateY(-4px)" : "none",
                  transition: "all 0.25s ease",
                  border: "1px solid #EBEBF5",
                  height: "100%",
                }}
              >
                <div style={{ height: 160, background: post.color + "12", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <div style={{ width: "75%", maxWidth: 220 }}>
                    <IllustrationCard color={post.color} index={(i + 1) % 4} />
                  </div>
                </div>
                <div style={{ padding: "22px 24px" }}>
                  <span style={{ background: post.color + "18", color: post.color, padding: "4px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: "0.03em" }}>
                    {post.category}
                  </span>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: "#0D0D1A", margin: "12px 0 10px", lineHeight: 1.3, letterSpacing: "-0.3px" }}>
                    {post.title}
                  </h3>
                  <p style={{ color: "#777", fontSize: 14, lineHeight: 1.65, margin: "0 0 20px" }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 16, borderTop: "1px solid #F0F0F8" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: post.color + "25", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: post.color }}>
                      {post.author[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#333", fontSize: 13 }}>{post.author}</div>
                      <div style={{ color: "#bbb", fontSize: 12 }}>{post.date} · {post.readTime}</div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter strip */}
        <div style={{ marginTop: 80, background: "linear-gradient(135deg, #6C47FF 0%, #9B7BFF 100%)", borderRadius: 20, padding: "48px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 8px" }}>Stay in the loop</h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, margin: 0 }}>Get fee updates, reselling tips, and marketplace insights — monthly.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{ padding: "12px 18px", borderRadius: 10, border: "none", fontSize: 14, width: 240, outline: "none", fontFamily: "'DM Sans', sans-serif" }}
            />
            <button style={{ background: "#0D0D1A", color: "white", border: "none", borderRadius: 10, padding: "12px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}