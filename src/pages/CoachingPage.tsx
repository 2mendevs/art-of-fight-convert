import React, { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
interface RevealProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface FormState {
  name: string;
  phone: string;
  goal: string;
  time: string;
}

interface MethodItem {
  icon: string;
  title: string;
  desc: string;
}

interface CardItem {
  icon: string;
  label: string;
}

interface StatItem {
  val: string;
  label: string;
}

interface FeedbackItem {
  text: string;
  author: string;
}

/* ─────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────── */
const painPoints: string[] = [
  "You train 4-5 days a week but your technique isn't improving",
  "Your sparring partners are getting better — you feel stuck",
  "You have no structured plan, just random gym sessions",
  "Coaches at your gym don't give you personal attention",
  "You don't know what to fix or where to even start",
];

const methodItems: MethodItem[] = [
  { icon: "🎯", title: "Personalised Fight Plan", desc: "A roadmap built entirely around your body type, skill level, and competition goals." },
  { icon: "⚡", title: "High-Intensity Drilling", desc: "Focused repetition drills that embed proper technique into muscle memory fast." },
  { icon: "📈", title: "Progressive Overload", desc: "Structured intensity cycles to keep your body adapting and improving every week." },
  { icon: "👤", title: "1-on-1 Accountability", desc: "Your coach tracks every session, reviews footage, and adjusts the plan in real time." },
  { icon: "🏆", title: "Competition Preparation", desc: "Full camp-style peaking for tournaments — physically and mentally ready to win." },
];

const whatCards: CardItem[] = [
  { icon: "📋", label: "Custom Training Plan" },
  { icon: "🎥", label: "Video Analysis" },
  { icon: "💬", label: "Daily Check-ins" },
  { icon: "📊", label: "Progress Tracking" },
  { icon: "🥊", label: "Sparring Strategy" },
];

const coachCredentials: string[] = [
  "Former Professional MMA Fighter — 12+ Years Ring Experience",
  "Trained athletes who compete at national & international level",
  "Specialist in striking, grappling transitions & mental conditioning",
  "Coaches remotely across 3 continents with proven results",
];

const stats: StatItem[] = [
  { val: "1,000+", label: "Athletes Coached" },
  { val: "10+", label: "Years Experience" },
  { val: "50+", label: "Champions Trained" },
  { val: "3", label: "Continents" },
];

const feedbackCards: FeedbackItem[] = [
  { text: "In 8 weeks my footwork completely changed. My coach saw things I couldn't see myself and fixed them immediately.", author: "— Jordan K." },
  { text: "I was plateau'd for over a year. AOF broke that within the first month. The personalised approach is unlike anything else.", author: "— Priya S." },
  { text: "Best investment I've made in my fight career. The plan, the feedback, the accountability — it's all dialled in perfectly.", author: "— Carlos R." },
];

const checklistItems: string[] = [
  "Free 30-minute strategy call included",
  "No long-term contracts — cancel anytime",
  "Results guaranteed or coaching extended free",
  "Start within 48 hours of approval",
];

/* ─────────────────────────────────────────
   GLOBAL STYLES
   Using dangerouslySetInnerHTML avoids all
   TSX type errors from raw CSS in <style>
───────────────────────────────────────── */
const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Barlow',sans-serif;}

.aof-reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.aof-reveal.visible{opacity:1;transform:translateY(0);}

.aof-btn-teal{background:#00bcd4;color:#000;font-weight:800;border:none;cursor:pointer;
  font-family:'Barlow',sans-serif;padding:13px 30px;border-radius:8px;font-size:15px;
  transition:background .2s;}
.aof-btn-teal:hover{background:#00a8be;}

.aof-btn-outline{background:transparent;color:#fff;font-weight:800;
  border:2px solid #fff;cursor:pointer;font-family:'Barlow',sans-serif;
  padding:13px 30px;border-radius:8px;font-size:15px;transition:all .2s;}
.aof-btn-outline:hover{background:#fff;color:#000;}

.aof-ticker-wrap{background:#00bcd4;padding:10px 0;overflow:hidden;white-space:nowrap;}
.aof-ticker-inner{display:inline-block;animation:aofTick 18s linear infinite;}
@keyframes aofTick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.aof-ticker-item{display:inline-flex;align-items:center;gap:8px;margin:0 36px;
  font-weight:800;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#000;}

.aof-method-row{display:flex;align-items:flex-start;gap:15px;margin-bottom:24px;}
.aof-what-card{background:#1e1e1e;border:2px solid #00bcd4;border-radius:12px;
  padding:24px 16px;text-align:center;flex:1;min-width:140px;}
.aof-promise{background:#0d4040;border:1px solid #00bcd4;border-radius:10px;padding:26px 30px;margin-top:36px;}
.aof-stat-card{background:#1e1e1e;border-radius:10px;padding:18px 20px;text-align:center;flex:1;min-width:110px;}
.aof-feed-card{background:#1e1e1e;border-radius:12px;padding:24px;flex:1;min-width:200px;}
.aof-form-box{background:#1c1c1c;border-radius:12px;padding:32px 28px;}
.aof-check-item{display:flex;align-items:flex-start;gap:10px;margin-bottom:16px;}
.aof-whatsapp-btn{display:flex;align-items:center;justify-content:center;gap:10px;
  background:#25d366;color:#fff;font-weight:800;font-size:15px;border:none;
  border-radius:8px;padding:14px 24px;cursor:pointer;width:100%;max-width:360px;
  margin-top:28px;font-family:'Barlow',sans-serif;transition:background .2s;}
.aof-whatsapp-btn:hover{background:#1fb855;}
.aof-ribbon{background:#00bcd4;border-radius:8px;padding:13px 0;text-align:center;margin-bottom:36px;}
.aof-star-row{display:flex;align-items:flex-start;gap:10px;margin-bottom:11px;}

.aof-input{width:100%;padding:16px 14px;background:#c0c0c0;border:none;border-radius:6px;
  font-size:15px;font-family:'Barlow',sans-serif;color:#111;font-weight:700;
  outline:none;margin-bottom:12px;cursor:pointer;}
.aof-select{width:100%;padding:16px 14px;background:#c0c0c0;border:none;border-radius:6px;
  font-size:15px;font-family:'Barlow',sans-serif;color:#111;font-weight:700;
  outline:none;margin-bottom:12px;cursor:pointer;-webkit-appearance:none;appearance:none;}
.aof-submit{width:100%;padding:15px;border-radius:8px;background:#d8d8d8;color:#111;
  font-weight:800;font-size:16px;border:none;cursor:pointer;
  font-family:'Barlow',sans-serif;margin-top:6px;transition:background .2s;}
.aof-submit:hover{background:#c0c0c0;}

@media(max-width:768px){
  .aof-two-col{flex-direction:column!important;}
  .aof-testi-img{width:100%!important;}
}
`;

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */
function GlobalStyles(): React.ReactElement {
  return <style dangerouslySetInnerHTML={{ __html: globalCSS }} />;
}

function Reveal({ children, style }: RevealProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="aof-reveal" style={style}>
      {children}
    </div>
  );
}

function WhatsAppIcon(): React.ReactElement {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────── */
export default function CoachingPage(): React.ReactElement {
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", goal: "", time: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const scrollToForm = (): void => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (): void => {
    if (form.name.trim() && form.phone.trim()) setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fff", fontFamily: "'Barlow', sans-serif" }}>
      <GlobalStyles />

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 48px",
          backgroundColor: "#1c1c1c",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <span style={{ fontSize: 22, fontWeight: 900, color: "#00bcd4", letterSpacing: 1 }}>AOF</span>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span style={{ color: "#ccc", fontSize: 14, display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
            ← Back To Home
          </span>
          <button className="aof-btn-teal" onClick={scrollToForm}>
            Book A Call
          </button>
        </div>
      </nav>

      {/* ══ SECTION 1 — HERO ══ */}
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right,rgba(0,0,0,.9) 48%,rgba(0,0,0,.2) 100%), url('https://images.unsplash.com/photo-1549476464-37392f717541?w=1400&q=80') center/cover no-repeat",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 48px", maxWidth: 600 }}>
          <p style={{ color: "#00bcd4", fontSize: 14, fontWeight: 700, marginBottom: 14 }}>
            AOF Academy-1 On 1 Coaching
          </p>
          <h1 style={{ fontSize: "clamp(38px,6vw,70px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 22 }}>
            TRAIN LIKE A<br />
            <span style={{ color: "#00bcd4" }}>CHAMPION.</span>
            <br />
            FIGHT LIKE ONE
          </h1>
          <p style={{ fontSize: 16, color: "#ccc", maxWidth: 460, lineHeight: 1.65, marginBottom: 34 }}>
            Stop training in the crowd. Get a personalized coaching program built around your body, your goals, and your
            timeline — guided by coaches who have been in the ring.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="aof-btn-teal" onClick={scrollToForm}>
              Book A Call
            </button>
            <button
              className="aof-btn-outline"
              onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
            >
              See Results
            </button>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="aof-ticker-wrap">
        <div className="aof-ticker-inner">
          {[0, 1, 2].map((i) => (
            <React.Fragment key={i}>
              <span className="aof-ticker-item">🛡 PERSONALISED PROGRAM</span>
              <span className="aof-ticker-item">🏆 PROVEN FIGHT SYSTEM</span>
              <span className="aof-ticker-item">👤 DIRECT COACH ACCESS</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── PAIN POINTS ── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "80px 48px" }}>
        <div
          className="aof-two-col"
          style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}
        >
          <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=700&q=80"
              alt="MMA fighters"
              style={{ width: "100%", borderRadius: 10, objectFit: "cover", maxHeight: 320, display: "block" }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <Reveal>
              <p style={{ color: "#00bcd4", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Sound's Familiar ?</p>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 26 }}>
                You're Putting In The Work,
                <br />
                But Not Seeing The Results.
              </h2>
              {painPoints.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 11, marginBottom: 13 }}>
                  <span style={{ color: "#e53935", fontSize: 17, flexShrink: 0, marginTop: 1 }}>✕</span>
                  <span style={{ color: "#ccc", fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — AOF METHOD ══ */}
      <section style={{ backgroundColor: "#0f0f0f", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ color: "#00bcd4", fontSize: 15, fontWeight: 700 }}>The AOF Method</p>
              <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 900, marginTop: 6 }}>
                A Proven System.
                <br />
                <span style={{ color: "#00bcd4" }}>Real Transformation.</span>
              </h2>
              <div style={{ width: 140, height: 2, background: "#00bcd4", margin: "18px auto 0" }} />
            </div>
          </Reveal>

          <div
            className="aof-two-col"
            style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}
          >
            <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=700&q=80"
                alt="Boxing gloves"
                style={{ width: "100%", borderRadius: 10, border: "1px solid #333", display: "block" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              {methodItems.map((item, i) => (
                <Reveal key={i}>
                  <div className="aof-method-row">
                    <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <h4 style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ color: "#999", fontSize: 13, lineHeight: 1.55 }}>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* What You Get */}
          <Reveal style={{ marginTop: 52 }}>
            <h3 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, marginBottom: 24 }}>What You Get</h3>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {whatCards.map((c, i) => (
                <div key={i} className="aof-what-card">
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{c.label}</h4>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Our Promise */}
          <Reveal>
            <div className="aof-promise">
              <h4 style={{ color: "#00bcd4", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>Our Promise</h4>
              <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.65 }}>
                If you follow the program and don't see measurable improvement in your first 30 days, we'll extend your
                coaching at no extra cost. We succeed when you succeed — that's not a slogan, it's our commitment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ SECTION 3 — YOUR COACH ══ */}
      <section style={{ backgroundColor: "#111111", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="aof-ribbon">
            <span style={{ color: "#000", fontWeight: 900, fontSize: 17, letterSpacing: 1 }}>Book A Call</span>
          </div>
          <p style={{ fontSize: 13, color: "#888", fontWeight: 600, marginBottom: 18, letterSpacing: 0.5 }}>
            Your Coach
          </p>
          <div
            className="aof-two-col"
            style={{ display: "flex", gap: 44, alignItems: "flex-start", flexWrap: "wrap" }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              alt="Head Coach"
              style={{
                width: 210,
                height: 270,
                objectFit: "cover",
                borderRadius: 10,
                flexShrink: 0,
                display: "block",
              }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 30, fontWeight: 900, marginBottom: 6 }}>Head Coach</h2>
              <div style={{ width: 56, height: 2, background: "#00bcd4", marginBottom: 22 }} />
              {coachCredentials.map((item, i) => (
                <div key={i} className="aof-star-row">
                  <span style={{ color: "#fff", fontSize: 15, flexShrink: 0 }}>★</span>
                  <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.45 }}>{item}</p>
                </div>
              ))}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
                {stats.map((s, i) => (
                  <div key={i} className="aof-stat-card">
                    <h3 style={{ fontSize: 26, fontWeight: 900, color: "#00bcd4" }}>{s.val}</h3>
                    <p style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — TESTIMONIALS ══ */}
      <section id="testimonials" style={{ backgroundColor: "#0f0f0f", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ color: "#00bcd4", fontWeight: 700, fontSize: 14 }}>Real People , Real Results</p>
              <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 900, marginTop: 8 }}>
                Trusted By Fighters,{" "}
                <span style={{ color: "#00bcd4" }}>Proven Results</span>
              </h2>
              <p style={{ color: "#888", marginTop: 10, fontSize: 13 }}>
                Here's What Athletes Say About Their Transformation With AOF
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="aof-two-col"
              style={{
                display: "flex",
                gap: 36,
                alignItems: "flex-start",
                marginBottom: 44,
                flexWrap: "wrap",
              }}
            >
              <img
                className="aof-testi-img"
                src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&q=80"
                alt="Featured athlete"
                style={{ width: 340, borderRadius: 10, objectFit: "cover", flexShrink: 0, display: "block" }}
              />
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "clamp(20px,3vw,32px)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: 18,
                  }}
                >
                  AOF Changed
                  <br />
                  The Way <span style={{ color: "#00bcd4" }}>I Train And Perform.</span>
                </h3>
                <p style={{ color: "#ccc", fontSize: 15, lineHeight: 1.68 }}>
                  The structure, the attention to detail, and the accountability took me to a level I never thought
                  possible. I'm stronger, faster, and fight with more confidence than ever.
                </p>
                <p style={{ marginTop: 14, color: "#00bcd4", fontWeight: 700 }}>— Alex M., Amateur MMA Fighter</p>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {feedbackCards.map((t, i) => (
              <Reveal key={i}>
                <div className="aof-feed-card">
                  <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6 }}>{t.text}</p>
                  <p style={{ marginTop: 12, fontWeight: 700, color: "#fff", fontSize: 14 }}>{t.author}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — APPLY FORM ══ */}
      <section style={{ backgroundColor: "#111111", padding: "80px 48px" }}>
        <div
          ref={formRef}
          className="aof-two-col"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: 52,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <Reveal>
              <p style={{ color: "#00bcd4", fontSize: 12, fontWeight: 800, letterSpacing: 1, marginBottom: 10 }}>
                READY TO START?
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px,4vw,44px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: 18,
                }}
              >
                APPLY FOR YOUR
                <br />
                <span style={{ color: "#00bcd4" }}>1-ON-1 COACHING SPOT</span>
              </h2>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.65, marginBottom: 28, maxWidth: 360 }}>
                Spots are limited. We only take on a small number of 1-on-1 students at a time to ensure every athlete
                gets the attention they deserve. Fill out the form and we'll reach out within 24 hours.
              </p>
              {checklistItems.map((item, i) => (
                <div key={i} className="aof-check-item">
                  <span style={{ color: "#00bcd4", fontSize: 17, flexShrink: 0 }}>✓</span>
                  <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
              <button className="aof-whatsapp-btn">
                <WhatsAppIcon />
                Contact Us
              </button>
            </Reveal>
          </div>

          {/* Right — Form */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <Reveal>
              <div className="aof-form-box">
                <h3 style={{ color: "#00bcd4", fontSize: 17, fontWeight: 800, marginBottom: 22 }}>
                  Start Your Journey With AOF
                </h3>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: 48, marginBottom: 14 }}>✅</div>
                    <h4 style={{ color: "#fff", fontSize: 19, marginBottom: 8 }}>Application Received!</h4>
                    <p style={{ color: "#aaa", fontSize: 14 }}>We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <input
                      className="aof-input"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleInputChange}
                    />
                    <input
                      className="aof-input"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleInputChange}
                    />
                    <select
                      className="aof-select"
                      name="goal"
                      value={form.goal}
                      onChange={handleSelectChange}
                    >
                      <option value="">Main Goal</option>
                      <option value="technique">Improve Technique</option>
                      <option value="competition">Competition Prep</option>
                      <option value="fitness">Fitness &amp; Conditioning</option>
                      <option value="beginner">Learn MMA from Scratch</option>
                    </select>
                    <select
                      className="aof-select"
                      name="time"
                      value={form.time}
                      onChange={handleSelectChange}
                    >
                      <option value="">Schedule A Time</option>
                      <option value="morning">Morning (6am – 12pm)</option>
                      <option value="afternoon">Afternoon (12pm – 5pm)</option>
                      <option value="evening">Evening (5pm – 9pm)</option>
                    </select>
                    <button className="aof-submit" onClick={handleSubmit}>
                      Submit
                    </button>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0a0a0a",
          borderTop: "1px solid #1e1e1e",
          padding: "22px 48px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#444", fontSize: 13 }}>© 2025 AOF Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
