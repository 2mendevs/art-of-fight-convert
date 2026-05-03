import React, { useEffect, useRef, useState, CSSProperties, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

/* ─── TYPES ─────────────────────────────────────────────────────────────────── */
interface RevealProps { children: ReactNode; style?: CSSProperties; }
interface FormState { name: string; phone: string; goal: string; time: string; }

/* ─── REVEAL ON SCROLL ───────────────────────────────────────────────────────── */
function Reveal({ children, style = {} }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.style.opacity = "1", el.style.transform = "translateY(0)"; },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── ICONS ──────────────────────────────────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.335-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.681-.513-5.21-1.408l-.374-.222-3.876.922.978-3.769-.244-.387A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

/* ─── DATA ───────────────────────────────────────────────────────────────────── */
const painPoints = [
  "You train 4–5 days a week but your technique isn't improving",
  "Your sparring partners are getting better — you feel stuck",
  "You have no structured plan, just random gym sessions",
  "Coaches at your gym don't give you personal attention",
  "You don't know what to fix or where to even start",
];

const methodItems = [
  { icon: "🎯", title: "Personalised Fight Plan",    desc: "A roadmap built entirely around your body type, skill level, and competition goals." },
  { icon: "⚡", title: "High-Intensity Drilling",    desc: "Focused repetition drills that embed proper technique into muscle memory fast." },
  { icon: "📈", title: "Progressive Overload",       desc: "Structured intensity cycles to keep your body adapting and improving every week." },
  { icon: "👤", title: "1-on-1 Accountability",      desc: "Your coach tracks every session, reviews footage, and adjusts the plan in real time." },
  { icon: "🏆", title: "Competition Preparation",    desc: "Full camp-style peaking for tournaments — physically and mentally ready to win." },
];

const whatCards = [
  { icon: "📋", label: "Custom Training Plan" },
  { icon: "🎥", label: "Video Analysis" },
  { icon: "💬", label: "Daily Check-ins" },
  { icon: "📊", label: "Progress Tracking" },
  { icon: "🥊", label: "Sparring Strategy" },
];

const coachCredentials = [
  "Former Professional MMA Fighter — 12+ Years Ring Experience",
  "Trained athletes who compete at national and international level",
  "Specialist in striking, grappling transitions and mental conditioning",
  "Coaches remotely across 3 continents with proven results",
];

const stats = [
  { val: "1,000+", label: "Athletes Coached" },
  { val: "10+",    label: "Years Experience" },
  { val: "50+",    label: "Champions Trained" },
  { val: "3",      label: "Continents" },
];

const feedbackCards = [
  { text: "In 8 weeks my footwork completely changed. My coach saw things I couldn't see myself and fixed them immediately.", author: "— Jordan K." },
  { text: "I was plateau'd for over a year. AOF broke that within the first month. The personalised approach is unlike anything else.", author: "— Priya S." },
  { text: "Best investment I've made in my fight career. The plan, the feedback, the accountability — it's all dialled in perfectly.", author: "— Carlos R." },
];

const checklistItems = [
  "Free 30-minute strategy call included",
  "No long-term contracts — cancel anytime",
  "Results guaranteed or coaching extended free",
  "Start within 48 hours of approval",
];

/* ─── STYLES ─────────────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800;900&family=Barlow+Condensed:wght@700;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: #0a0a0a; }

  .coaching-page {
    background: #0a0a0a;
    font-family: 'Barlow', sans-serif;
    color: #fff;
    overflow-x: hidden;
  }

  /* NAVBAR */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 40px;
    background: rgba(10,10,10,0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .navbar-logo { color: #07b4ba; font-weight: 900; font-size: 22px; letter-spacing: 3px; }
  .navbar-right { display: flex; align-items: center; gap: 24px; }
  .back-btn {
    display: flex; align-items: center; gap: 8px;
    background: none; border: none; color: rgba(255,255,255,0.7);
    font-family: 'Barlow', sans-serif; font-size: 14px; cursor: pointer;
    transition: color 0.2s;
  }
  .back-btn:hover { color: #fff; }
  .book-btn {
    padding: 10px 22px; border-radius: 6px;
    background: #07b4ba; color: #000;
    font-family: 'Barlow', sans-serif; font-weight: 800;
    font-size: 13px; letter-spacing: 1px; text-transform: uppercase;
    border: none; cursor: pointer; transition: background 0.2s;
  }
  .book-btn:hover { background: #059a9f; }

  /* HERO */
  .hero {
    position: relative; min-height: 100vh;
    display: flex; flex-direction: column;
    justify-content: center; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background: url('/hero-fighter.jpg') center right / cover no-repeat;
  }
  .hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(to right, #0a0a0a 42%, rgba(10,10,10,0.7) 65%, transparent 100%);
  }
  .hero-content {
    position: relative; z-index: 2;
    max-width: 1100px; margin: 0 auto; width: 100%;
    padding: 140px 40px 60px;
  }
  .hero-tag {
    color: #07b4ba; font-size: 13px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;
  }
  .hero-headline {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(48px, 7vw, 88px);
    font-weight: 900; line-height: 0.95;
    text-transform: uppercase; margin-bottom: 24px;
  }
  .hero-headline span { color: #07b4ba; }
  .hero-desc {
    color: rgba(255,255,255,0.65); font-size: 16px;
    line-height: 1.7; max-width: 500px; margin-bottom: 36px;
  }
  .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
  .btn-primary {
    padding: 15px 34px; border-radius: 8px;
    background: #07b4ba; color: #000;
    font-family: 'Barlow', sans-serif; font-weight: 800;
    font-size: 15px; text-transform: uppercase; letter-spacing: 1px;
    border: none; cursor: pointer; transition: background 0.2s;
  }
  .btn-primary:hover { background: #059a9f; }
  .btn-outline {
    padding: 15px 34px; border-radius: 8px;
    background: transparent; color: #fff;
    font-family: 'Barlow', sans-serif; font-weight: 800;
    font-size: 15px; text-transform: uppercase; letter-spacing: 1px;
    border: 2px solid #07b4ba; cursor: pointer; transition: all 0.2s;
  }
  .btn-outline:hover { background: rgba(7,180,186,0.1); }

  /* TICKER */
  .ticker {
    position: relative; z-index: 2;
    background: #07b4ba; padding: 12px 40px;
    display: flex; align-items: center; justify-content: space-around;
    flex-wrap: wrap; gap: 12px;
    margin-top: auto;
  }
  .ticker-item {
    display: flex; align-items: center; gap: 8px;
    color: #000; font-weight: 800; font-size: 12px;
    text-transform: uppercase; letter-spacing: 1.5px;
  }

  /* SOUNDS FAMILIAR */
  .section { max-width: 1100px; margin: 0 auto; padding: 80px 40px; }
  .two-col {
    display: flex; gap: 56px; align-items: flex-start; flex-wrap: wrap;
  }
  .pain-img {
    flex: 0 0 460px; max-width: 100%;
    border-radius: 12px; overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .pain-img img { width: 100%; display: block; }
  .pain-right { flex: 1; min-width: 260px; }
  .section-label { color: #07b4ba; font-weight: 700; font-size: 18px; margin-bottom: 6px; }
  .section-sub { color: #fff; font-weight: 800; font-size: 20px; margin-bottom: 28px; line-height: 1.4; }
  .pain-item {
    display: flex; align-items: flex-start; gap: 12px;
    margin-bottom: 18px;
  }
  .pain-x { color: #e53e3e; font-size: 18px; flex-shrink: 0; margin-top: 2px; }
  .pain-item p { color: rgba(255,255,255,0.65); font-size: 15px; line-height: 1.6; }

  /* METHOD SECTION */
  .method-section { background: #0d0d0d; }
  .section-heading { text-align: center; margin-bottom: 56px; }
  .section-heading .label { color: #07b4ba; font-weight: 700; font-size: 15px; margin-bottom: 6px; }
  .section-heading h2 { color: #fff; font-weight: 900; font-size: clamp(28px,4vw,44px); margin-bottom: 4px; }
  .section-heading .teal { color: #07b4ba; }
  .section-heading .divider { width: 56px; height: 2px; background: #07b4ba; margin: 16px auto 0; }
  .method-item {
    display: flex; align-items: flex-start; gap: 18px;
    margin-bottom: 28px; padding: 20px; border-radius: 10px;
    background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
    transition: border-color 0.2s;
  }
  .method-item:hover { border-color: rgba(7,180,186,0.3); }
  .method-icon {
    width: 44px; height: 44px; flex-shrink: 0;
    border-radius: 50%; background: rgba(7,180,186,0.1);
    border: 1px solid rgba(7,180,186,0.3);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }
  .what-cards { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 8px; }
  .what-card {
    flex: 1; min-width: 140px;
    border: 2px solid rgba(7,180,186,0.4);
    border-radius: 14px; background: rgba(7,180,186,0.05);
    padding: 28px 16px;
    display: flex; flex-direction: column; align-items: center;
    gap: 10px; text-align: center;
    transition: background 0.2s; cursor: default;
  }
  .what-card:hover { background: rgba(7,180,186,0.12); }
  .what-card .icon { font-size: 26px; }
  .what-card h4 { color: #fff; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
  .promise-box {
    border: 1px solid #07b4ba; border-radius: 14px;
    background: rgba(7,180,186,0.05); padding: 36px 40px;
    text-align: center; margin-top: 48px;
  }

  /* COACH */
  .coach-section { background: #0a0a0a; }
  .book-banner {
    background: #07b4ba; padding: 14px;
    text-align: center;
  }
  .book-banner a {
    color: #000; font-weight: 800; font-size: 14px;
    text-transform: uppercase; letter-spacing: 2px; text-decoration: none;
  }
  .coach-photo {
    width: 220px; height: 280px; object-fit: cover;
    object-position: top; border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0;
  }
  .coach-star-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 14px; }
  .coach-star-row .star { color: #07b4ba; font-size: 16px; flex-shrink: 0; margin-top: 2px; }
  .coach-star-row p { color: rgba(255,255,255,0.65); font-size: 14px; line-height: 1.55; }
  .stat-cards { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
  .stat-card {
    border-radius: 12px; background: #1a1a1a;
    border: 1px solid rgba(255,255,255,0.08);
    padding: 16px 24px; text-align: center; min-width: 100px;
  }
  .stat-card h3 { color: #07b4ba; font-weight: 900; font-size: 24px; }
  .stat-card p { color: rgba(255,255,255,0.5); font-size: 11px; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.5px; }

  /* TESTIMONIALS */
  .testimonials-section { background: #0d0d0d; }
  .featured-testimonial {
    display: flex; gap: 48px; align-items: center;
    flex-wrap: wrap; background: #111;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px; padding: 40px; margin-bottom: 32px;
  }
  .featured-testimonial img {
    width: 400px; max-width: 100%; border-radius: 12px;
    flex-shrink: 0; object-fit: cover;
  }
  .featured-quote h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(24px, 3vw, 36px); font-weight: 900;
    line-height: 1.1; margin-bottom: 16px; color: #fff;
  }
  .featured-quote h3 span { color: #07b4ba; }
  .feedback-cards { display: flex; gap: 16px; flex-wrap: wrap; }
  .feedback-card {
    flex: 1; min-width: 220px; border-radius: 14px;
    background: #161616; border: 1px solid rgba(255,255,255,0.08);
    padding: 24px;
  }
  .stars { color: #07b4ba; font-size: 14px; letter-spacing: 2px; margin-bottom: 12px; }
  .feedback-card p { color: rgba(255,255,255,0.65); font-size: 14px; line-height: 1.65; margin-bottom: 14px; }
  .feedback-card .author { color: #07b4ba; font-weight: 700; font-size: 13px; }

  /* APPLY */
  .apply-section { background: #0a0a0a; }
  .form-section {
    background: #161616; border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 40px;
  }
  .form-section h3 { color: #07b4ba; font-weight: 700; font-size: 15px; margin-bottom: 24px; }
  .coaching-input {
    width: 100%; padding: 14px 16px; border-radius: 8px;
    background: #222; border: 1px solid rgba(255,255,255,0.1);
    color: #fff; font-family: 'Barlow', sans-serif;
    font-size: 15px; margin-bottom: 14px; outline: none;
    transition: border-color 0.2s; appearance: none;
  }
  .coaching-input::placeholder { color: rgba(255,255,255,0.35); }
  .coaching-input:focus { border-color: #07b4ba; }
  .coaching-input option { background: #222; }
  .checklist-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 14px; }
  .checklist-item .check { color: #07b4ba; font-size: 16px; flex-shrink: 0; margin-top: 2px; }
  .checklist-item p { color: rgba(255,255,255,0.65); font-size: 14px; line-height: 1.55; }
  .whatsapp-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: #25D366; color: #fff;
    padding: 14px 28px; border-radius: 40px;
    font-family: 'Barlow', sans-serif; font-weight: 800;
    font-size: 15px; border: none; cursor: pointer;
    margin-top: 28px; transition: background 0.2s;
  }
  .whatsapp-btn:hover { background: #1ebe57; }
  .submit-btn {
    width: 100%; padding: 16px; border-radius: 8px;
    background: #e0e0e0; color: #111; font-weight: 700;
    font-size: 16px; border: none; cursor: pointer;
    font-family: 'Barlow', sans-serif; transition: background 0.2s;
  }
  .submit-btn:hover { background: #07b4ba; color: #fff; }

  /* FOOTER */
  .footer {
    background: #060606; border-top: 1px solid rgba(255,255,255,0.06);
    padding: 32px 40px; display: flex;
    align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  }
  .footer-logo { color: #07b4ba; font-weight: 900; font-size: 20px; letter-spacing: 3px; }
  .footer p { color: rgba(255,255,255,0.3); font-size: 13px; }

  /* DIVIDER */
  .teal-divider { width: 56px; height: 2px; background: #07b4ba; margin-bottom: 24px; }

  @media (max-width: 700px) {
    .navbar { padding: 14px 20px; }
    .section { padding: 56px 20px; }
    .hero-content { padding: 120px 20px 48px; }
    .ticker { padding: 12px 20px; }
    .two-col { flex-direction: column; gap: 32px; }
    .pain-img { flex: unset; width: 100%; }
    .featured-testimonial { flex-direction: column; }
    .featured-testimonial img { width: 100%; }
    .coach-photo { width: 100%; height: 240px; object-position: top; }
    .footer { flex-direction: column; text-align: center; }
    .promise-box { padding: 28px 20px; }
    .form-section { padding: 28px 20px; }
  }
`;

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────────────── */
export default function CoachingPage() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", goal: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });
  const handleSubmit = () => { if (form.name && form.phone) setSubmitted(true); };

  return (
    <>
      <style>{css}</style>
      <div className="coaching-page">

        {/* ── NAVBAR ── */}
        <nav className="navbar">
          <span className="navbar-logo">AOF</span>
          <div className="navbar-right">
            <button className="back-btn" onClick={() => navigate("/")}>
              ← Back To Home
            </button>
            <button className="book-btn" onClick={scrollToForm}>
              Book A Call
            </button>
          </div>
        </nav>

{/* ── SECTION 1: HERO ── */}
<section className="hero">
  
  {/* 🔥 CUSTOM BACKGROUND */}
  <div
    className="hero-bg"
    style={{
      background: `
        linear-gradient(to right, #0a0a0a 35%, rgba(10,10,10,0.6) 60%, transparent 100%),
        url("https://drive.google.com/uc?export=view&id=1CxBCfE_Kh9nBKWIPImAkd7Ujav_EU-mt") center right / cover no-repeat
      `
    }}
  />

  <div className="hero-overlay" />

  {/* 🔥 HARD LEFT ALIGN */}
  <div
    className="hero-content"
    style={{
      marginLeft: "0px",     // pushed fully left
      paddingLeft: "40px",   // controlled gutter like Figma
      maxWidth: "520px"      // keeps text tight
    }}
  >
    <Reveal>
      <p className="hero-tag">AOF Academy – 1 On 1 Coaching</p>

      <h1 className="hero-headline">
        Train Like A<br />
        <span>Champion.</span><br />
        Fight Like One
      </h1>

      <p className="hero-desc">
        Stop training in the crowd. Get a personalized coaching program built around your body, your goals, and your timeline — guided by coaches who have been in the ring.
      </p>

      <div className="hero-btns">
        <button className="btn-primary" onClick={scrollToForm}>
          Book A Call
        </button>

        <button
          className="btn-outline"
          onClick={() =>
            document
              .getElementById("testimonials")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          See Results
        </button>
      </div>
    </Reveal>
  </div>

  {/* Feature Ticker */}
  <div className="ticker">
    {[
      { icon: "🛡", label: "Personalised Program" },
      { icon: "🏆", label: "Proven Fight System" },
      { icon: "👤", label: "Direct Coach Access" },
    ].map(({ icon, label }) => (
      <div className="ticker-item" key={label}>
        <span>{icon}</span>
        {label}
      </div>
    ))}
  </div>
</section>

        {/* ── SOUNDS FAMILIAR ── */}
        <div style={{ background: "#111" }}>
          <div className="section">
            <Reveal>
              <div className="two-col">
                <div className="pain-img">
                  <img
                    src="/ufc-fight.jpg"
                    alt="UFC Training"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=700&q=80"; }}
                  />
                </div>
                <div className="pain-right">
                  <p className="section-label">Sound's Familiar?</p>
                  <p className="section-sub">You're Putting In The Work,<br />But Not Seeing The Results.</p>
                  {painPoints.map((item, i) => (
                    <div className="pain-item" key={i}>
                      <span className="pain-x">✗</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── SECTION 2: AOF METHOD ── */}
        <div className="method-section">
          <div className="section">
            <Reveal>
              <div className="section-heading">
                <p className="label">The AOF Method</p>
                <h2>A Proven System.</h2>
                <h2 className="teal">Real Transformation.</h2>
                <div className="divider" />
              </div>
            </Reveal>

            <div className="two-col">
              <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
                <img
                  src="/boxing-gloves.jpg"
                  alt="Boxing gloves"
                  style={{ width: "100%", borderRadius: 10, border: "1px solid #333" }}
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=700&q=80"; }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 260 }}>
                {methodItems.map((item, i) => (
                  <Reveal key={i}>
                    <div className="method-item">
                      <div className="method-icon">{item.icon}</div>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, color: "#fff" }}>{item.title}</h4>
                        <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.55 }}>{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <Reveal style={{ marginTop: 56 }}>
              <h3 style={{ textAlign: "center", fontSize: 22, fontWeight: 800, marginBottom: 28, color: "#fff" }}>
                What You Get
              </h3>
              <div className="what-cards">
                {whatCards.map((c, i) => (
                  <div className="what-card" key={i}>
                    <div className="icon">{c.icon}</div>
                    <h4>{c.label}</h4>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Our Promise */}
            <Reveal>
              <div className="promise-box">
                <h4 style={{ color: "#07b4ba", fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Our Promise</h4>
                <p style={{ color: "#ddd", fontSize: 15, lineHeight: 1.65 }}>
                  If you follow the program and don't see measurable improvement in your first 30 days, we'll extend your coaching at no extra cost. We succeed when you succeed — that's not a slogan, it's our commitment.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── SECTION 3: YOUR COACH ── */}
        <div className="coach-section">
          <div className="book-banner">
            <a href="#apply" onClick={(e) => { e.preventDefault(); scrollToForm(); }}>Book A Call</a>
          </div>
          <div className="section">
            <Reveal>
              <p style={{ fontSize: 13, color: "#aaa", fontWeight: 600, marginBottom: 24, letterSpacing: 1, textTransform: "uppercase" }}>
                Your Coach
              </p>
              <div className="two-col">
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <img
                    className="coach-photo"
                    src="/head-coach.jpg"
                    alt="Head Coach"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80"; }}
                  />
                  <div className="stat-cards">
                    {stats.map((s, i) => (
                      <div className="stat-card" key={i}>
                        <h3>{s.val}</h3>
                        <p>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, color: "#fff" }}>Head Coach</h2>
                  <div className="teal-divider" />
                  {coachCredentials.map((item, i) => (
                    <div className="coach-star-row" key={i}>
                      <span className="star">★</span>
                      <p>{item}</p>
                    </div>
                  ))}
                  <button
                    className="btn-primary"
                    style={{ marginTop: 32 }}
                    onClick={scrollToForm}
                  >
                    Train With This Coach
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

       {/* ── SECTION 4: TESTIMONIALS ── */}
<div id="testimonials" style={{ background: "#05070a" }}>
  <div className="section">

    {/* HEADER */}
    <Reveal>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p style={{ color: "#07b4ba", fontWeight: 700, fontSize: 16 }}>
          Real People , Real Results
        </p>

        <h2 style={{
          fontSize: "clamp(32px,4vw,46px)",
          fontWeight: 900,
          marginTop: 10
        }}>
          Trusted By Fighters,{" "}
          <span style={{ color: "#07b4ba" }}>Proven Results</span>
        </h2>

        <p style={{ color: "#aaa", marginTop: 10, fontSize: 14 }}>
          Here’s What Athletes Say About Their Transformation With AOF
        </p>
      </div>
    </Reveal>

    {/* MAIN TESTIMONIAL */}
    <Reveal>
      <div style={{
        display: "flex",
        gap: 48,
        alignItems: "center",
        marginBottom: 60,
        flexWrap: "wrap"
      }}>
        
        {/* IMAGE */}
        <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80"
            alt="fighter"
            style={{
              width: "100%",
              borderRadius: 6,
              objectFit: "cover"
            }}
          />
        </div>

        {/* TEXT */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <h3 style={{
            fontSize: "clamp(26px,3vw,38px)",
            fontWeight: 900,
            lineHeight: 1.25,
            marginBottom: 20
          }}>
            AOF Changed <br />
            The Way{" "}
            <span style={{ color: "#07b4ba" }}>
              I Train And Perform.
            </span>
          </h3>

          <p style={{
            color: "#ccc",
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 480
          }}>
            The structure, the attention to detail, and the accountability
            took me to a level I never thought possible. I'm stronger,
            faster, and fight with more confidence than ever.
          </p>
        </div>
      </div>
    </Reveal>

    {/* FEEDBACK CARDS */}
    <div style={{
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }}>
      {feedbackCards.map((_, i) => (
        <div key={i} style={{
          flex: "1 1 300px",
          background: "#d9d9d9",
          borderRadius: 20,
          padding: "60px 20px",
          textAlign: "center"
        }}>
          <p style={{
            color: "#07b4ba",
            fontWeight: 700,
            fontSize: 18
          }}>
            Feedback
          </p>
        </div>
      ))}
    </div>

  </div>
</div>
        {/* ── SECTION 5: APPLY FORM ── */}
        <div className="apply-section" id="apply" ref={formRef}>
          <div className="section">
            <div className="two-col" style={{ alignItems: "flex-start" }}>

              {/* Left */}
              <div style={{ flex: 1, minWidth: 260 }}>
                <Reveal>
                  <p style={{ color: "#07b4ba", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>
                    Ready To Start?
                  </p>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20, color: "#fff", textTransform: "uppercase" }}>
                    Apply For Your<br />
                    <span style={{ color: "#07b4ba" }}>1-On-1 Coaching Spot</span>
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, marginBottom: 32, maxWidth: 380 }}>
                    Spots are limited. We only take on a small number of 1-on-1 students at a time to ensure every athlete gets the attention they deserve. Fill out the form and we'll reach out within 24 hours.
                  </p>
                  {checklistItems.map((item, i) => (
                    <div className="checklist-item" key={i}>
                      <span className="check">✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                  <button className="whatsapp-btn">
                    <WhatsAppIcon />
                    Contact Us on WhatsApp
                  </button>
                </Reveal>
              </div>

              {/* Right — Form */}
              <div style={{ flex: 1, minWidth: 300 }}>
                <Reveal>
                  <div className="form-section">
                    <h3>Start Your Journey With AOF</h3>
                    {submitted ? (
                      <div style={{ textAlign: "center", padding: "48px 0" }}>
                        <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                        <h4 style={{ color: "#fff", fontSize: 22, marginBottom: 8 }}>Application Received!</h4>
                        <p style={{ color: "#aaa", fontSize: 15 }}>We'll be in touch within 24 hours.</p>
                      </div>
                    ) : (
                      <>
                        <input
                          className="coaching-input"
                          type="text"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                        />
                        <input
                          className="coaching-input"
                          type="tel"
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                        />
                        <select
                          className="coaching-input"
                          value={form.goal}
                          onChange={(e) => setForm(f => ({ ...f, goal: e.target.value }))}
                        >
                          <option value="">Main Goal</option>
                          <option value="technique">Improve Technique</option>
                          <option value="competition">Competition Prep</option>
                          <option value="fitness">Fitness & Conditioning</option>
                          <option value="beginner">Learn MMA from Scratch</option>
                        </select>
                        <select
                          className="coaching-input"
                          value={form.time}
                          onChange={(e) => setForm(f => ({ ...f, time: e.target.value }))}
                        >
                          <option value="">Schedule A Time</option>
                          <option value="morning">Morning (6am – 12pm)</option>
                          <option value="afternoon">Afternoon (12pm – 5pm)</option>
                          <option value="evening">Evening (5pm – 9pm)</option>
                        </select>
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                      </>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <span className="footer-logo">AOF</span>
          <p>© {new Date().getFullYear()} Art of Fight. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}
