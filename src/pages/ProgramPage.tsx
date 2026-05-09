import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

/* ── REVEAL ── */
function Reveal({ children, style = {}, delay = 0 }: { children: ReactNode; style?: CSSProperties; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(28px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ── STYLES ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;800;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0a0a0a; overflow-x: hidden; }

  .pp { font-family: 'Barlow', sans-serif; color: #fff; background: #0a0a0a; overflow-x: hidden; }

  /* ── NAVBAR ── */
  .pp-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: #000; display: flex; align-items: center; justify-content: center;
    padding: 14px 40px; gap: 20px;
    border-bottom: 2px solid #07b4ba;
  }
  .pp-nav-logo-circle {
    width: 36px; height: 36px; border-radius: 50%;
    background: #fff; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .pp-nav-logo-circle span { font-family: 'Bebas Neue', sans-serif; color: #000; font-size: 13px; letter-spacing: 1px; }
  .pp-nav-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(20px, 3vw, 28px); letter-spacing: 3px; color: #fff; }
  .pp-nav-back {
    position: absolute; left: 20px;
    background: none; border: none; color: rgba(255,255,255,0.5);
    font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 600;
    cursor: pointer; display: flex; align-items: center; gap: 6px;
    transition: color 0.2s;
  }
  .pp-nav-back:hover { color: #07b4ba; }

  /* ── HERO ── */
  .pp-hero {
    position: relative; min-height: 100vh;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; overflow: hidden; padding: 100px 20px 60px;
  }
  .pp-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background: url('https://images.unsplash.com/photo-1549476464-37392f717541?w=1400&q=80') center/cover no-repeat;
    filter: brightness(0.3);
  }
  .pp-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%);
  }
  .pp-hero-content { position: relative; z-index: 2; max-width: 860px; }
  .pp-hero-h1 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(42px,7vw,82px); letter-spacing: 3px; line-height: 1; color: #fff; margin-bottom: 12px; }
  .pp-hero-h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px,5vw,54px); letter-spacing: 2px; color: #07b4ba; margin-bottom: 28px; }
  .pp-hero-desc { font-family: 'Barlow', sans-serif; font-size: clamp(15px,2vw,18px); color: rgba(255,255,255,0.75); line-height: 1.7; max-width: 600px; margin: 0 auto 36px; }
  .pp-hero-desc strong { color: #07b4ba; }
  .pp-join-btn {
    display: inline-block; padding: 16px 52px; border-radius: 40px;
    background: #07b4ba; color: #000;
    font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 2px;
    border: none; cursor: pointer; transition: all 0.2s;
    box-shadow: 0 0 24px rgba(7,180,186,0.4);
  }
  .pp-join-btn:hover { background: #059a9f; box-shadow: 0 0 36px rgba(7,180,186,0.6); transform: translateY(-2px); }
  .pp-scarcity { margin-top: 20px; color: rgba(255,255,255,0.45); font-family: 'Barlow', sans-serif; font-size: 14px; letter-spacing: 1px; font-style: italic; }

  /* ── STATS BAND ── */
  .pp-stats { background: #07b4ba; padding: 0 40px; display: flex; align-items: center; gap: 0; flex-wrap: wrap; min-height: 110px; }
  .pp-stats-coach { flex-shrink: 0; width: 90px; height: 90px; border-radius: 50%; border: 3px solid #000; overflow: hidden; background: #1a1a1a; margin: 10px 32px 10px 0; display: flex; align-items: center; justify-content: center; }
  .pp-stats-coach img { width: 100%; height: 100%; object-fit: cover; }
  .pp-stats-coach-placeholder { color: rgba(0,0,0,0.3); font-size: 28px; }
  .pp-stats-divider { width: 1px; background: rgba(0,0,0,0.2); align-self: stretch; margin: 0 32px; }
  .pp-stat { flex: 1; min-width: 120px; text-align: center; padding: 20px 0; }
  .pp-stat h3 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px,4vw,42px); color: #000; letter-spacing: 2px; line-height: 1; }
  .pp-stat p { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(0,0,0,0.65); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

  /* ── PROBLEM ── */
  .pp-problem { background: #0a0a0a; }
  .pp-section { max-width: 1100px; margin: 0 auto; padding: 72px 40px; }
  .pp-problem-grid { display: flex; gap: 56px; align-items: center; flex-wrap: wrap; }
  .pp-problem-left { flex: 1; min-width: 260px; }
  .pp-problem-h { font-family: 'Bebas Neue', sans-serif; font-size: clamp(32px,4vw,48px); letter-spacing: 2px; color: #07b4ba; margin-bottom: 16px; }
  .pp-problem-intro { color: rgba(255,255,255,0.6); font-family: 'Barlow', sans-serif; font-size: 15px; line-height: 1.7; margin-bottom: 28px; }
  .pp-pain-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 14px; }
  .pp-pain-tag {
    background: #07b4ba; color: #000;
    font-family: 'Bebas Neue', sans-serif; font-size: 13px; letter-spacing: 1px;
    padding: 2px 8px; border-radius: 3px; flex-shrink: 0; margin-top: 2px;
  }
  .pp-pain-item p { color: rgba(255,255,255,0.8); font-family: 'Barlow', sans-serif; font-size: 15px; line-height: 1.55; font-weight: 600; }
  .pp-problem-right { flex: 0 0 460px; max-width: 100%; }
  .pp-video-card {
    border-radius: 16px; overflow: hidden;
    border: 2px solid #07b4ba;
    box-shadow: 0 0 40px rgba(7,180,186,0.15);
    background: #111;
    aspect-ratio: 16/9;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    position: relative;
  }
  .pp-video-card-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(18px,2.5vw,26px); letter-spacing: 2px; color: #fff; text-align: center; padding: 0 20px; margin-bottom: 6px; }
  .pp-video-card-sub { font-family: 'Barlow', sans-serif; font-size: 13px; color: #07b4ba; font-weight: 600; text-align: center; padding: 0 20px; margin-bottom: 20px; }
  .pp-play-btn {
    width: 56px; height: 56px; border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }
  .pp-play-icon { width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 18px solid #fff; margin-left: 4px; }

  /* ── FEATURES ── */
  .pp-features { background: #0d0d0d; position: relative; overflow: hidden; }
  .pp-features-bg {
    position: absolute; inset: 0;
    background: url('https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=1400&q=80') center/cover no-repeat;
    opacity: 0.08;
  }
  .pp-features-grid { position: relative; z-index: 2; display: flex; gap: 48px; align-items: stretch; flex-wrap: wrap; }
  .pp-features-left { flex: 1; min-width: 260px; }
  .pp-features-h { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px,4vw,44px); letter-spacing: 2px; color: #fff; margin-bottom: 32px; }
  .pp-feature-item { margin-bottom: 20px; }
  .pp-feature-tag {
    display: inline-block;
    background: #07b4ba; color: #000;
    font-family: 'Bebas Neue', sans-serif; font-size: 13px; letter-spacing: 1px;
    padding: 3px 10px; border-radius: 3px; margin-bottom: 4px;
  }
  .pp-feature-item p { color: rgba(255,255,255,0.6); font-family: 'Barlow', sans-serif; font-size: 14px; line-height: 1.5; padding-left: 4px; }
  .pp-features-right { flex: 0 0 340px; max-width: 100%; display: flex; align-items: center; justify-content: center; }
  .pp-features-img-frame {
    width: 100%; border-radius: 14px; overflow: hidden;
    border: 2px solid rgba(7,180,186,0.3);
    box-shadow: 0 0 40px rgba(7,180,186,0.1);
    aspect-ratio: 3/4; background: #111;
    display: flex; align-items: center; justify-content: center;
  }
  .pp-features-img-frame img { width: 100%; height: 100%; object-fit: cover; object-position: top; }

  /* ── CURRICULUM ── */
  .pp-curriculum { background: #0a0a0a; }
  .pp-curriculum-grid { display: flex; gap: 56px; flex-wrap: wrap; }
  .pp-curriculum-left { flex: 1; min-width: 260px; }
  .pp-curriculum-right { flex: 1; min-width: 260px; }
  .pp-section-label { font-family: 'Bebas Neue', sans-serif; font-size: clamp(22px,3vw,32px); letter-spacing: 2px; color: #07b4ba; margin-bottom: 28px; }

  /* Week cards */
  .pp-week { margin-bottom: 24px; border-left: 3px solid #07b4ba; padding-left: 18px; }
  .pp-week h4 { font-family: 'Barlow', sans-serif; font-weight: 800; font-size: 15px; color: #fff; margin-bottom: 8px; }
  .pp-week ul { list-style: none; }
  .pp-week ul li { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.7; }
  .pp-week ul li::before { content: "— "; color: #07b4ba; }

  /* Founder benefits */
  .pp-founders-h { font-family: 'Bebas Neue', sans-serif; font-size: clamp(22px,3vw,30px); letter-spacing: 2px; color: #fff; margin-bottom: 6px; }
  .pp-founders-sub { font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 1px; color: #07b4ba; margin-bottom: 16px; }
  .pp-founders-desc { font-family: 'Barlow', sans-serif; font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 20px; }
  .pp-benefit-item {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 12px; padding: 12px 14px; border-radius: 8px;
    background: rgba(7,180,186,0.05); border: 1px solid rgba(7,180,186,0.2);
  }
  .pp-benefit-tag { background: #07b4ba; color: #000; font-family: 'Bebas Neue', sans-serif; font-size: 11px; letter-spacing: 1px; padding: 2px 7px; border-radius: 3px; flex-shrink: 0; margin-top: 2px; }
  .pp-benefit-item p { font-family: 'Barlow', sans-serif; font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.5; }

  /* Bonuses */
  .pp-bonuses-h { font-family: 'Bebas Neue', sans-serif; font-size: clamp(22px,3vw,30px); letter-spacing: 2px; color: #07b4ba; margin: 32px 0 16px; }
  .pp-bonus-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .pp-bonus-tag { background: #07b4ba; color: #000; font-family: 'Bebas Neue', sans-serif; font-size: 12px; letter-spacing: 1px; padding: 3px 10px; border-radius: 3px; flex-shrink: 0; }
  .pp-bonus-price { font-family: 'Barlow', sans-serif; font-size: 14px; color: rgba(255,255,255,0.6); }
  .pp-bonus-free { font-family: 'Bebas Neue', sans-serif; font-size: 14px; color: #07b4ba; letter-spacing: 1px; margin-left: 4px; }
  .pp-bonus-strike { text-decoration: line-through; color: rgba(255,255,255,0.35); }

  /* ── FOOTER CTA ── */
  .pp-footer-cta { background: #080808; border-top: 1px solid rgba(255,255,255,0.06); }
  .pp-footer-grid { display: flex; gap: 56px; align-items: center; flex-wrap: wrap; }
  .pp-footer-left { flex: 1; min-width: 260px; }
  .pp-footer-right { flex: 0 0 360px; max-width: 100%; text-align: center; }

  /* Timer */
  .pp-offer-label { font-family: 'Bebas Neue', sans-serif; font-size: 14px; letter-spacing: 3px; color: #07b4ba; margin-bottom: 8px; }
  .pp-offer-h { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px,4vw,42px); letter-spacing: 2px; color: #fff; line-height: 1.1; margin-bottom: 24px; }
  .pp-timer { display: flex; gap: 12px; margin-bottom: 8px; }
  .pp-timer-block { text-align: center; }
  .pp-timer-block h3 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(36px,5vw,56px); letter-spacing: 2px; color: #07b4ba; line-height: 1; background: #111; border: 1px solid rgba(7,180,186,0.2); border-radius: 8px; padding: 10px 18px; min-width: 72px; }
  .pp-timer-block p { font-family: 'Barlow', sans-serif; font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; margin-top: 6px; }
  .pp-timer-sep { font-family: 'Bebas Neue', sans-serif; font-size: 40px; color: rgba(255,255,255,0.3); align-self: flex-start; padding-top: 10px; }
  .pp-last-day { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.35); letter-spacing: 1px; font-style: italic; }

  /* Pricing */
  .pp-price-box { background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 36px 32px; }
  .pp-price-old { font-family: 'Barlow', sans-serif; font-size: 22px; color: rgba(255,255,255,0.35); text-decoration: line-through; margin-bottom: 4px; }
  .pp-price-new { font-family: 'Bebas Neue', sans-serif; font-size: clamp(52px,7vw,80px); letter-spacing: 2px; color: #07b4ba; line-height: 1; margin-bottom: 4px; }
  .pp-price-tag { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.4); margin-bottom: 24px; }
  .pp-cta-btn {
    width: 100%; padding: 18px; border-radius: 10px;
    background: #07b4ba; color: #000;
    font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 2px;
    border: none; cursor: pointer; transition: all 0.2s;
    box-shadow: 0 0 24px rgba(7,180,186,0.35);
  }
  .pp-cta-btn:hover { background: #059a9f; box-shadow: 0 0 40px rgba(7,180,186,0.5); transform: translateY(-2px); }
  .pp-cta-note { font-family: 'Barlow', sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 12px; }

  /* Bottom bar */
  .pp-bottom-bar { background: #000; padding: 16px 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; border-top: 1px solid rgba(255,255,255,0.05); }
  .pp-bottom-bar span { font-family: 'Barlow', sans-serif; font-size: 12px; color: rgba(255,255,255,0.25); }
  .pp-bottom-logo { font-family: 'Bebas Neue', sans-serif; font-size: 18px; color: #07b4ba; letter-spacing: 3px; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .pp-nav { padding: 12px 16px; }
    .pp-nav-back { position: static; }
    .pp-section { padding: 48px 20px; }
    .pp-stats { padding: 0 20px; flex-direction: column; align-items: flex-start; gap: 0; min-height: auto; }
    .pp-stats-coach { margin: 16px 0 8px; }
    .pp-stats-divider { display: none; }
    .pp-stat { text-align: left; padding: 8px 0; }
    .pp-problem-grid { flex-direction: column; }
    .pp-problem-right { flex: unset; width: 100%; }
    .pp-features-grid { flex-direction: column; }
    .pp-features-right { flex: unset; width: 100%; }
    .pp-curriculum-grid { flex-direction: column; gap: 40px; }
    .pp-footer-grid { flex-direction: column; gap: 40px; }
    .pp-footer-right { flex: unset; width: 100%; }
    .pp-timer { justify-content: center; }
    .pp-bottom-bar { flex-direction: column; text-align: center; }
  }
`;

const features = [
  { tag: "# Made exclusively for beginners", desc: "Clear guidance from day one" },
  { tag: "# Structured progression", desc: "Stance → punches → kicks → combinations" },
  { tag: "# No equipment or partner needed", desc: "Train effectively from the comfort of your home." },
  { tag: "# Tamil-guided instruction", desc: "For better understanding" },
  { tag: "# Just 30-40 minutes a day Pre-recorded sessions", desc: "Built for busy schedules" },
  { tag: "# Organized in a Private Notion Dashboard", desc: "Easy to access using Email." },
];

const weeks = [
  { title: "Foundation & Striking Basics (Week 01)", items: ["Correct MMA stance and guard", "Basic movement and balance", "All 6 fundamental punches with proper mechanics"] },
  { title: "Punch Defenses & Combinations (Week 02)", items: ["Slip, Dodge, Pull Back, Block & Parry", "Basic punch combinations and counters", "Roundhouse kick fundamentals"] },
  { title: "Kicking & Integration (Week 03)", items: ["Switch kick and push kick mechanics", "Kick defenses: block, catch, miss, and sweep", "Punch-Kick Combinations"] },
  { title: "Advanced Striking Tools (Week 04)", items: ["Punch-kick counters", "Knees and elbows fundamentals", "Combinations using knees and elbows"] },
  { title: "Overall Strike Mix-ups (Last 2 Days)", items: ["Full combination drills", "Live flow practice", "Program completion assessment"] },
];

const benefits = [
  "Weekly Live doubt-clearing sessions with the coach",
  "Direct feedback on your progress and improvement",
  "Progress Tracking Framework",
  "A focused community of co-learners",
  "Exclusive bonus modules and progress check-ins",
];

const bonuses = [
  { name: "Movement Fundamentals", price: "₹999" },
  { name: "White Belt Mentality", price: "₹999" },
];

const painPoints = [
  "Don't know where to begin",
  "Have no access to an MMA gym",
  "Don't have a structure to follow",
  "Have a busy schedule",
  "Lack proper guidance",
];

export default function ProgramPage() {
  const navigate = useNavigate();
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollToFooter = () => footerRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{css}</style>
      <div className="pp">

        {/* ── NAVBAR ── */}
        <nav className="pp-nav">
          <button className="pp-nav-back" onClick={() => navigate("/")}>
            ← Home
          </button>
          <div className="pp-nav-logo-circle"><span>AOF</span></div>
          <span className="pp-nav-title">ART OF FIGHTING</span>
        </nav>

        {/* ── SECTION 2: HERO ── */}
        <section className="pp-hero">
          <div className="pp-hero-bg" />
          <div className="pp-hero-overlay" />
          <div className="pp-hero-content">
            <Reveal>
              <h1 className="pp-hero-h1">Build Real MMA Striking Fundamentals</h1>
              <h2 className="pp-hero-h2">AOF 30-Day Online Program</h2>
              <p className="pp-hero-desc">
                A <strong>structured system</strong> designed to create visible improvement in your first 30 days.
                Built for <strong>absolute beginners.</strong>
              </p>
              <button className="pp-join-btn" onClick={scrollToFooter}>Join Now</button>
              <p className="pp-scarcity">— Only 20 Slots available —</p>
            </Reveal>
          </div>
        </section>

        {/* ── SECTION 1: STATS BAND ── */}
        <div className="pp-stats">
          <div className="pp-stats-coach">
            <span className="pp-stats-coach-placeholder">👤</span>
          </div>
          <div className="pp-stats-divider" />
          <div className="pp-stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="pp-stats-divider" />
          <div className="pp-stat">
            <h3>500+</h3>
            <p>Clients Trained</p>
          </div>
          <div className="pp-stats-divider" />
          <div className="pp-stat">
            <h3>5K+</h3>
            <p>Audience Reached</p>
          </div>
          <div className="pp-stats-divider" />
          <div className="pp-stat">
            <h3>30</h3>
            <p>Days Program</p>
          </div>
        </div>

        {/* ── SECTION 3: THE PROBLEM ── */}
        <div className="pp-problem">
          <div className="pp-section">
            <div className="pp-problem-grid">
              <div className="pp-problem-left">
                <Reveal>
                  <h2 className="pp-problem-h">The Problem</h2>
                  <p className="pp-problem-intro">
                    Most people who want to learn MMA never start because they:
                  </p>
                  {painPoints.map((p, i) => (
                    <Reveal key={i} delay={i * 80}>
                      <div className="pp-pain-item">
                        <span className="pp-pain-tag">#</span>
                        <p>{p}</p>
                      </div>
                    </Reveal>
                  ))}
                </Reveal>
              </div>
              <div className="pp-problem-right">
                <Reveal delay={100}>
                  <div className="pp-video-card">
                    <p className="pp-video-card-title">AOF MMA Striking Program</p>
                    <p className="pp-video-card-sub">Build real MMA striking fundamentals — without a gym</p>
                    <div className="pp-play-btn">
                      <div className="pp-play-icon" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 4: PROGRAM FEATURES ── */}
        <div className="pp-features">
          <div className="pp-features-bg" />
          <div className="pp-section">
            <div className="pp-features-grid">
              <div className="pp-features-left">
                <Reveal>
                  <h2 className="pp-features-h">Our Program Features</h2>
                  {features.map((f, i) => (
                    <Reveal key={i} delay={i * 70}>
                      <div className="pp-feature-item">
                        <span className="pp-feature-tag">{f.tag}</span>
                        <p>— {f.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </Reveal>
              </div>
              <div className="pp-features-right">
                <Reveal delay={150}>
                  <div className="pp-features-img-frame">
                    <img
                      src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600&q=80"
                      alt="MMA Fighter"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 5: CURRICULUM + FOUNDERS ── */}
        <div className="pp-curriculum">
          <div className="pp-section">
            <div className="pp-curriculum-grid">

              {/* LEFT — What You'll Learn */}
              <div className="pp-curriculum-left">
                <Reveal>
                  <p className="pp-section-label">What You'll Learn</p>
                  {weeks.map((w, i) => (
                    <Reveal key={i} delay={i * 60}>
                      <div className="pp-week">
                        <h4>{w.title}</h4>
                        <ul>
                          {w.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </Reveal>
              </div>

              {/* RIGHT — Founders + Bonuses */}
              <div className="pp-curriculum-right">
                <Reveal>
                  <p className="pp-founders-h">Founder's Batch Benefits</p>
                  <p className="pp-founders-sub">(Jan 05 — Feb 03)</p>
                  <p className="pp-founders-desc">
                    Since this is the first-ever launch of the AOF 30-Day MMA Striking Program, we're opening a special Founder's Batch with added support and access.
                  </p>
                  {benefits.map((b, i) => (
                    <Reveal key={i} delay={i * 60}>
                      <div className="pp-benefit-item">
                        <span className="pp-benefit-tag">#</span>
                        <p>{b}</p>
                      </div>
                    </Reveal>
                  ))}
                </Reveal>

                <Reveal delay={100}>
                  <p className="pp-bonuses-h">Added Bonuses</p>
                  {bonuses.map((b, i) => (
                    <div className="pp-bonus-item" key={i}>
                      <span className="pp-bonus-tag">{b.name}</span>
                      <span className="pp-bonus-price pp-bonus-strike">{b.price}</span>
                      <span className="pp-bonus-free">[FREE]</span>
                    </div>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 6: FOOTER CTA ── */}
        <div className="pp-footer-cta" ref={footerRef}>
          <div className="pp-section">
            <div className="pp-footer-grid">

              {/* LEFT — Timer */}
              <div className="pp-footer-left">
                <Reveal>
                  <p className="pp-offer-label">New Year Extended Offer</p>
                  <h2 className="pp-offer-h">Last Day<br />To Join</h2>
                  <div className="pp-timer">
                    <div className="pp-timer-block">
                      <h3>02</h3>
                      <p>Days</p>
                    </div>
                    <span className="pp-timer-sep">:</span>
                    <div className="pp-timer-block">
                      <h3>14</h3>
                      <p>Hours</p>
                    </div>
                    <span className="pp-timer-sep">:</span>
                    <div className="pp-timer-block">
                      <h3>37</h3>
                      <p>Mins</p>
                    </div>
                    <span className="pp-timer-sep">:</span>
                    <div className="pp-timer-block">
                      <h3>59</h3>
                      <p>Secs</p>
                    </div>
                  </div>
                  <p className="pp-last-day">— Offer ends at midnight —</p>
                </Reveal>
              </div>

              {/* RIGHT — Price + CTA */}
              <div className="pp-footer-right">
                <Reveal delay={100}>
                  <div className="pp-price-box">
                    <p className="pp-price-old">₹2,999</p>
                    <p className="pp-price-new">₹999</p>
                    <p className="pp-price-tag">One-time payment · Lifetime access</p>
                    <button className="pp-cta-btn" onClick={scrollToFooter}>
                      Join Now — ₹999
                    </button>
                    <p className="pp-cta-note">Only 20 spots available · Secure checkout</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pp-bottom-bar">
          <span className="pp-bottom-logo">AOF</span>
          <span>© {new Date().getFullYear()} Art of Fight Academy. All rights reserved.</span>
          <span>Chennai, Tamil Nadu, India</span>
        </div>

      </div>
    </>
  );
}
