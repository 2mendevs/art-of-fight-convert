import React, { useEffect, useRef, useState, CSSProperties, ReactNode } from "react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }

    .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    .btn-teal {
      background: #07b4ba; color: #000; font-weight: 700;
      border: none; cursor: pointer; font-family: 'Barlow', sans-serif;
      transition: background 0.2s;
    }
    .btn-teal:hover { background: #059a9f; }

    .btn-outline {
      background: transparent; color: #fff; font-weight: 700;
      border: 2px solid #fff; cursor: pointer; font-family: 'Barlow', sans-serif;
      transition: background 0.2s, color 0.2s;
    }
    .btn-outline:hover { background: #fff; color: #000; }

    .coaching-input {
      width: 100%; padding: 18px 16px;
      background: #c8c8c8; border: none; border-radius: 6px;
      font-size: 16px; font-family: 'Barlow', sans-serif;
      color: #111; font-weight: 600; outline: none;
      margin-bottom: 14px; cursor: pointer;
    }
    .coaching-input::placeholder { color: #444; }

    .ticker-wrap {
      background: #07b4ba; padding: 10px 0; overflow: hidden; white-space: nowrap;
    }
    .ticker-inner {
      display: inline-block; animation: ticker 18s linear infinite;
    }
    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .ticker-item {
      display: inline-flex; align-items: center; gap: 8px;
      margin: 0 40px; font-weight: 700; font-size: 13px; letter-spacing: 1.5px;
      text-transform: uppercase; color: #000;
    }

    .method-item {
      display: flex; align-items: flex-start; gap: 16px; margin-bottom: 28px;
    }
    .method-icon {
      width: 42px; height: 42px; flex-shrink: 0;
      color: #07b4ba; display: flex; align-items: center; justify-content: center;
    }

    .what-card {
      background: #1e1e1e; border: 2px solid #07b4ba; border-radius: 12px;
      padding: 28px 20px; text-align: center; flex: 1; min-width: 150px;
    }
    .what-card .icon { font-size: 28px; margin-bottom: 12px; color: #07b4ba; }
    .what-card h4 { font-size: 14px; font-weight: 700; color: #fff; }

    .promise-box {
      background: #0d3d3d; border: 1px solid #07b4ba; border-radius: 10px;
      padding: 28px 32px; margin-top: 40px;
    }

    .stat-card {
      background: #1e1e1e; border-radius: 12px; padding: 20px 24px;
      text-align: center; flex: 1; min-width: 130px;
    }
    .stat-card h3 { font-size: 28px; font-weight: 800; color: #07b4ba; }
    .stat-card p { font-size: 13px; color: #aaa; margin-top: 4px; }

    .testimonial-main {
      display: flex; gap: 40px; align-items: flex-start; margin-bottom: 48px;
    }
    .testimonial-main img {
      width: 360px; border-radius: 10px; object-fit: cover; flex-shrink: 0;
    }

    .feedback-card {
      background: #1e1e1e; border-radius: 12px; padding: 28px;
      flex: 1; min-width: 200px;
    }
    .feedback-card p { color: #ccc; font-size: 15px; line-height: 1.6; }
    .feedback-card .author { margin-top: 14px; font-weight: 700; color: #fff; }

    .form-section {
      background: #1c1c1c; border-radius: 12px; padding: 36px 32px;
    }
    .form-section h3 {
      color: #07b4ba; font-size: 18px; font-weight: 700; margin-bottom: 24px;
    }

    .checklist-item {
      display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px;
    }
    .checklist-item .check { color: #07b4ba; font-size: 20px; margin-top: 2px; flex-shrink: 0; }
    .checklist-item p { color: #ddd; font-size: 15px; line-height: 1.5; }

    .whatsapp-btn {
      display: flex; align-items: center; justify-content: center; gap: 12px;
      background: #25d366; color: #fff; font-weight: 700; font-size: 16px;
      border: none; border-radius: 8px; padding: 16px 28px;
      cursor: pointer; width: 100%; margin-top: 32px;
      font-family: 'Barlow', sans-serif; transition: background 0.2s;
    }
    .whatsapp-btn:hover { background: #1fb855; }

    .coach-star-row {
      display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;
    }
    .coach-star-row .star { color: #07b4ba; font-size: 16px; flex-shrink: 0; }
    .coach-star-row p { color: #ccc; font-size: 15px; line-height: 1.45; }

    .back-link {
      color: #ccc; font-size: 15px; display: flex; align-items: center;
      gap: 8px; text-decoration: none;
    }
    .back-link:hover { color: #fff; }

    @media (max-width: 768px) {
      .testimonial-main { flex-direction: column; }
      .testimonial-main img { width: 100%; }
      .two-col { flex-direction: column; }
      nav { padding: 16px 20px !important; }
      section { padding: 60px 20px !important; }
    }
  `}</style>
);

interface RevealProps {
  children: ReactNode;
  style?: CSSProperties;
}

interface FormState {
  name: string;
  phone: string;
  goal: string;
  time: string;
}

function Reveal({ children, style = {} }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={style}>
      {children}
    </div>
  );
}

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const painPoints: string[] = [
  "You train 4-5 days a week but your technique isn't improving",
  "Your sparring partners are getting better — you feel stuck",
  "You have no structured plan, just random gym sessions",
  "Coaches at your gym don't give you personal attention",
  "You don't know what to fix or where to even start",
];

const methodItems = [
  { icon: "🎯", title: "Personalised Fight Plan", desc: "A roadmap built entirely around your body type, skill level, and competition goals." },
  { icon: "⚡", title: "High-Intensity Drilling", desc: "Focused repetition drills that embed proper technique into muscle memory fast." },
  { icon: "📈", title: "Progressive Overload", desc: "Structured intensity cycles to keep your body adapting and improving every week." },
  { icon: "👤", title: "1-on-1 Accountability", desc: "Your coach tracks every session, reviews footage, and adjusts the plan in real time." },
  { icon: "🏆", title: "Competition Preparation", desc: "Full camp-style peaking for tournaments — physically and mentally ready to win." },
];

const whatCards = [
  { icon: "📋", label: "Custom Training Plan" },
  { icon: "🎥", label: "Video Analysis" },
  { icon: "💬", label: "Daily Check-ins" },
  { icon: "📊", label: "Progress Tracking" },
  { icon: "🥊", label: "Sparring Strategy" },
];

const coachCredentials: string[] = [
  "Former Professional MMA Fighter — 12+ Years Ring Experience",
  "Trained athletes who compete at national and international level",
  "Specialist in striking, grappling transitions and mental conditioning",
  "Coaches remotely across 3 continents with proven results",
];

const stats = [
  { val: "1,000+", label: "Athletes Coached" },
  { val: "10+", label: "Years Experience" },
  { val: "50+", label: "Champions Trained" },
  { val: "3", label: "Continents" },
];

const feedbackCards = [
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

export default function CoachingPage() {
  const formRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", goal: "", time: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const scrollToForm = (): void => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (): void => {
    if (form.name && form.phone) setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", fontFamily: "'Barlow', sans-serif", color: "#fff" }}>
      <FontLoader />

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 48px", backgroundColor: "#1c1c1c", borderBottom: "1px solid #2a2a2a",
      }}>
        <span style={{ fontSize: 22, fontWeight: 900, color: "#07b4ba", letterSpacing: 1 }}>AOF</span>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a href="/" className="back-link">
            <ArrowLeftIcon />
            Back To Home
          </a>
          <button
            className="btn-teal"
            onClick={scrollToForm}
            style={{ padding: "12px 28px", borderRadius: 8, fontSize: 15 }}
          >
            Book A Call
          </button>
        </div>
      </nav>

    {/* SECTION 1 — HERO */}
<section style={{
  position: "relative",
  minHeight: "92vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden"
}}>
  
  {/* BACKGROUND */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(to right, rgba(0,0,0,0.95) 38%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.2) 100%),
      url('https://images.unsplash.com/photo-1549476464-37392f717541?w=1600&q=80') center/cover no-repeat
    `
  }} />

  {/* CONTENT */}
  <div style={{
    position: "relative",
    zIndex: 2,
    width: "100%",
    padding: "100px 0",
    marginLeft: "60px"   // 🔥 LEFT ALIGN CONTROL
  }}>
    
    <div style={{ maxWidth: 520 }}>
      
      {/* TAG */}
      <p style={{
        color: "#07b4ba",
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 18
      }}>
        AOF Academy–1 On 1 Coaching
      </p>

      {/* HEADLINE */}
      <h1 style={{
        fontSize: "clamp(44px,6vw,76px)",
        fontWeight: 900,
        lineHeight: 1.05,
        marginBottom: 24
      }}>
        TRAIN LIKE A <br />
        <span style={{ color: "#07b4ba" }}>CHAMPION.</span><br />
        FIGHT LIKE ONE
      </h1>

      {/* DESCRIPTION */}
      <p style={{
        fontSize: 17,
        color: "#ddd",
        lineHeight: 1.7,
        marginBottom: 36
      }}>
        Stop training in the crowd. Get a personalized coaching program built around your body, your goals, and your timeline — guided by coaches who have been in the ring.
      </p>

      {/* BUTTONS */}
      <div style={{
        display: "flex",
        gap: 10,
        alignItems: "center"
      }}>
        <button
          className="btn-teal"
          onClick={scrollToForm}
          style={{
            padding: "16px 34px",
            borderRadius: 8,
            fontSize: 16
          }}
        >
          Book A Call
        </button>

        <button
          className="btn-outline"
          onClick={() =>
            document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            padding: "16px 34px",
            borderRadius: 8,
            fontSize: 16
          }}
        >
          See Results
        </button>
      </div>

    </div>
  </div>
</section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              {[
                { icon: "🛡️", text: "PERSONALISED PROGRAM" },
                { icon: "🏆", text: "PROVEN FIGHT SYSTEM" },
                { icon: "👤", text: "DIRECT COACH ACCESS" },
              ].map((item, j) => (
                <span key={j} className="ticker-item">
                  <span>{item.icon}</span>
                  {item.text}
                  <span style={{ marginLeft: 40, color: "#0009" }}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SOUNDS FAMILIAR */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "80px 48px" }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 440px", maxWidth: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=700&q=80"
              alt="MMA fighters"
              style={{ width: "100%", borderRadius: 10, objectFit: "cover", maxHeight: 320 }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <Reveal>
              <p style={{ color: "#07b4ba", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Sound's Familiar?</p>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 28 }}>
                You're Putting In The Work, But Not Seeing The Results.
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {painPoints.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                    <span style={{ color: "#e53935", fontSize: 18, flexShrink: 0 }}>✕</span>
                    <span style={{ color: "#ccc", fontSize: 15 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — AOF METHOD */}
      <section style={{ backgroundColor: "#0f0f0f", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ color: "#07b4ba", fontSize: 16, fontWeight: 700 }}>The AOF Method</p>
              <h2 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 800, marginTop: 6 }}>
                A Proven System.<br />
                <span style={{ color: "#07b4ba" }}>Real Transformation.</span>
              </h2>
              <div style={{ width: 160, height: 2, background: "#07b4ba", margin: "20px auto 0" }} />
            </div>
          </Reveal>

          <div className="two-col" style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=700&q=80"
                alt="Boxing gloves"
                style={{ width: "100%", borderRadius: 10, border: "1px solid #333" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              {methodItems.map((item, i) => (
                <Reveal key={i}>
                  <div className="method-item">
                    <div className="method-icon" style={{ fontSize: 22 }}>{item.icon}</div>
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
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {whatCards.map((c, i) => (
                <div key={i} className="what-card">
                  <div className="icon">{c.icon}</div>
                  <h4>{c.label}</h4>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Our Promise */}
          <Reveal style={{ marginTop: 40 }}>
            <div className="promise-box">
              <h4 style={{ color: "#07b4ba", fontWeight: 800, fontSize: 17, marginBottom: 10 }}>Our Promise</h4>
              <p style={{ color: "#ddd", fontSize: 15, lineHeight: 1.65 }}>
                If you follow the program and don't see measurable improvement in your first 30 days, we'll extend your coaching at no extra cost. We succeed when you succeed — that's not a slogan, it's our commitment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — YOUR COACH */}
      <section style={{ backgroundColor: "#111111", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: "#07b4ba", borderRadius: 8, padding: "14px 0", textAlign: "center", marginBottom: 40 }}>
            <button
              onClick={scrollToForm}
              style={{ background: "none", border: "none", color: "#000", fontWeight: 800, fontSize: 18, letterSpacing: 1, cursor: "pointer", fontFamily: "'Barlow', sans-serif" }}
            >
              Book A Call
            </button>
          </div>

          <p style={{ fontSize: 14, color: "#aaa", fontWeight: 600, marginBottom: 20, letterSpacing: 0.5 }}>Your Coach</p>

          <div className="two-col" style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80"
              alt="Head Coach"
              style={{ width: 220, height: 280, objectFit: "cover", objectPosition: "top", borderRadius: 10, flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 6, color: "#fff" }}>Head Coach</h2>
              <div style={{ width: 60, height: 2, background: "#07b4ba", marginBottom: 24 }} />
              {coachCredentials.map((item, i) => (
                <div key={i} className="coach-star-row">
                  <span className="star">★</span>
                  <p>{item}</p>
                </div>
              ))}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
                {stats.map((s, i) => (
                  <div key={i} className="stat-card">
                    <h3>{s.val}</h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* SECTION 4 — TESTIMONIALS */}
<section id="testimonials" style={{ backgroundColor: "#05070a", padding: "100px 48px" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>

    {/* HEADER */}
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <p style={{ color: "#07b4ba", fontWeight: 700, fontSize: 16 }}>
        Real People , Real Results
      </p>

      <h2 style={{
        fontSize: "clamp(32px,4vw,46px)",
        fontWeight: 900,
        marginTop: 10,
        color: "#fff"
      }}>
        Trusted By Fighters,{" "}
        <span style={{ color: "#07b4ba" }}>Proven Results</span>
      </h2>

      <p style={{ color: "#aaa", marginTop: 10, fontSize: 14 }}>
        Here’s What Athletes Say About Their Transformation With AOF
      </p>
    </div>

    {/* MAIN TESTIMONIAL */}
    <div style={{
      display: "flex",
      gap: 40,
      alignItems: "center",
      marginBottom: 60,
      flexWrap: "wrap"
    }}>
      
      {/* LEFT IMAGE */}
      <div style={{ flex: "0 0 420px", maxWidth: "100%" }}>
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80"
          alt="fighter"
          style={{
            width: "100%",
            borderRadius: 4,
            objectFit: "cover"
          }}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ flex: 1, minWidth: 280 }}>
        <h3 style={{
          fontSize: "clamp(26px,3vw,38px)",
          fontWeight: 900,
          lineHeight: 1.3,
          marginBottom: 20,
          color: "#fff"
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

    {/* FEEDBACK CARDS */}
    <div style={{
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }}>
      {feedbackCards.map((item, i) => (
        <div key={i} style={{
          flex: "1 1 300px",
          background: "#d9d9d9",
          borderRadius: 20,
          padding: "50px 20px",
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
</section>

      {/* SECTION 5 — APPLY FORM */}
      <section ref={formRef} style={{ backgroundColor: "#111111", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 56, alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Left */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <Reveal>
              <p style={{ color: "#07b4ba", fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 10 }}>
                READY TO START?
              </p>
              <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 20, color: "#fff" }}>
                APPLY FOR YOUR<br />
                <span style={{ color: "#07b4ba" }}>1-ON-1 COACHING SPOT</span>
              </h2>
              <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.65, marginBottom: 32, maxWidth: 380 }}>
                Spots are limited. We only take on a small number of 1-on-1 students at a time to ensure every athlete gets the attention they deserve. Fill out the form and we'll reach out within 24 hours.
              </p>
              {checklistItems.map((item, i) => (
                <div key={i} className="checklist-item">
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
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                    <h4 style={{ color: "#fff", fontSize: 20, marginBottom: 8 }}>Application Received!</h4>
                    <p style={{ color: "#aaa" }}>We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <input
                      className="coaching-input"
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                    />
                    <input
                      className="coaching-input"
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                    />
                    <select
                      className="coaching-input"
                      value={form.goal}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setForm((f) => ({ ...f, goal: e.target.value }))
                      }
                    >
                      <option value="">Main Goal</option>
                      <option value="technique">Improve Technique</option>
                      <option value="competition">Competition Prep</option>
                      <option value="fitness">Fitness and Conditioning</option>
                      <option value="beginner">Learn MMA from Scratch</option>
                    </select>
                    <select
                      className="coaching-input"
                      value={form.time}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setForm((f) => ({ ...f, time: e.target.value }))
                      }
                    >
                      <option value="">Schedule A Time</option>
                      <option value="morning">Morning (6am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 9pm)</option>
                    </select>
                    <button
                      onClick={handleSubmit}
                      style={{
                        width: "100%", padding: "16px", borderRadius: 8,
                        background: "#e0e0e0", color: "#111", fontWeight: 700,
                        fontSize: 17, border: "none", cursor: "pointer",
                        fontFamily: "'Barlow', sans-serif", transition: "background 0.2s",
                      }}
                      onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) =>
                        (e.currentTarget.style.background = "#cacaca")
                      }
                      onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) =>
                        (e.currentTarget.style.background = "#e0e0e0")
                      }
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #1e1e1e", padding: "24px 48px", textAlign: "center" }}>
        <p style={{ color: "#555", fontSize: 13 }}>2025 AOF Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
