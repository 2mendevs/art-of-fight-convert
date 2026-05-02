import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck, Trophy, Users, Target, Zap,
  BarChart3, Star, CheckCircle, XCircle, ArrowLeft
} from "lucide-react";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.39 14.417c-1.recursive 0-2.916-.768-3.96-2.04l-.28-.351-.868.245.268-.999-.307-.383C4.895 12.114 4.5 11.1 4.5 10c0-2.485 2.015-4.5 4.5-4.5.88 0 1.703.253 2.393.69l.32.207.32-.104c.51-.166 1.05-.254 1.607-.254 2.485 0 4.5 2.015 4.5 4.5 0 1.1-.395 2.114-1.048 2.906l-.307.383.268.999-.868-.245-.28.351c-1.044 1.272-2.61 2.04-3.795 2.04z"/>
  </svg>
);

const CoachingPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0a0a0a", fontFamily: "'Barlow', sans-serif" }}>

      {/* NAVBAR */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ backgroundColor: "#1c1c1c", borderBottom: "1px solid #2a2a2a" }}
      >
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#07b4ba", fontSize: "1.6rem", letterSpacing: "0.1em" }}>
          AOF
        </span>
        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            style={{ color: "#cccccc" }}
          >
            <ArrowLeft size={15} />
            Back To Home
          </button>
          <button
            onClick={scrollToForm}
            className="px-5 py-2 text-sm rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#07b4ba", color: "#000", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
          >
            Book A Call
          </button>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "88vh" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80')",
            filter: "brightness(0.28)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.2))" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-10">
          <Reveal delay={0}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#07b4ba" }}>
              AOF Academy — 1 On 1 Coaching
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1, color: "#fff" }}>
              Train Like A <span style={{ color: "#07b4ba" }}>Champion.</span>
              <br />Fight Like One
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 mb-8 text-sm md:text-base leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.65)" }}>
              Stop training in the crowd. Get a personalized coaching program built around your body, your goals, and your timeline — guided by coaches who have been in the ring.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToForm}
                className="px-7 py-3 rounded text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#07b4ba", color: "#000", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
              >
                Book A Call
              </button>
              <button
                className="px-7 py-3 rounded text-sm transition-colors"
                style={{ border: "1px solid #07b4ba", color: "#07b4ba", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em", background: "transparent" }}
              >
                See Results
              </button>
            </div>
          </Reveal>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 w-full py-3" style={{ backgroundColor: "#07b4ba" }}>
          <div className="max-w-4xl mx-auto flex justify-around items-center px-6">
            {[
              { icon: ShieldCheck, label: "Personalised Program" },
              { icon: Trophy, label: "Proven Fight System" },
              { icon: Users, label: "Direct Coach Access" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4" style={{ color: "#000" }} />
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#000", letterSpacing: "0.1em", fontSize: "0.8rem" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pain points */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-14 grid md:grid-cols-2 gap-10 items-center">
          <Reveal delay={0}>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
              <img
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=700&q=80"
                alt="MMA fighters"
                className="w-full object-cover"
                style={{ height: "280px" }}
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="text-lg font-semibold mb-1" style={{ color: "#07b4ba" }}>Sound's Familiar?</p>
              <p className="text-base font-semibold mb-6" style={{ color: "#fff" }}>
                You're Putting In The Work, But Not Seeing The Results.
              </p>
              <ul className="space-y-4">
                {[
                  "You train 4-5 days a week but your technique isn't improving",
                  "Your sparring partners are getting better — you feel stuck",
                  "You have no structured plan, just random gym sessions",
                  "Coaches at your gym don't give you personal attention",
                  "You're motivated but have no one to keep you accountable",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#e53e3e" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — AOF METHOD */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#0f0f0f" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-semibold mb-1" style={{ color: "#07b4ba" }}>The AOF Method</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", lineHeight: 1.1 }}>
                A Proven System. <span style={{ color: "#07b4ba" }}>Real Transformation.</span>
              </h2>
              <div className="mx-auto mt-4" style={{ width: "80px", borderTop: "2px dashed rgba(7,180,186,0.5)" }} />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <Reveal delay={0}>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
                <img
                  src="https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=700&q=80"
                  alt="Boxing gloves"
                  className="w-full object-cover"
                  style={{ height: "300px" }}
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <ul className="space-y-5">
                {[
                  { icon: Target, text: "Fully personalised training plan built around your goals and schedule" },
                  { icon: Zap, text: "High-intensity sessions designed by coaches with real ring experience" },
                  { icon: BarChart3, text: "Weekly progress tracking so you can see exactly how far you've come" },
                  { icon: Users, text: "Direct access to your head coach — anytime, any question" },
                  { icon: Trophy, text: "Proven system that has produced amateur and professional fighters" },
                ].map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ border: "1px solid rgba(7,180,186,0.5)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#07b4ba" }} />
                    </div>
                    <span className="text-sm leading-relaxed pt-1.5" style={{ color: "rgba(255,255,255,0.75)" }}>{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <p className="text-center font-semibold text-lg mb-6" style={{ color: "#fff" }}>What You Get</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {["Weekly 1-on-1 Sessions", "Custom Fight Plan", "Nutrition Guidance", "Video Analysis", "24/7 Coach Support"].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-xl p-5 flex items-center justify-center text-center"
                  style={{ border: "1.5px solid #07b4ba", backgroundColor: "rgba(7,180,186,0.06)", minHeight: "100px" }}
                >
                  <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.85)" }}>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div
              className="rounded-xl p-7 text-center max-w-2xl mx-auto"
              style={{ border: "1.5px solid #07b4ba", backgroundColor: "rgba(7,180,186,0.08)" }}
            >
              <p className="mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#07b4ba", letterSpacing: "0.1em", fontSize: "1.2rem" }}>
                Our Promise
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                If you show up, put in the work, and follow the system — you will improve. We don't just coach, we invest in your journey. Every session, every rep, every round is built around making you better.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — YOUR COACH */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <button
            onClick={scrollToForm}
            className="w-full py-3 rounded-lg mb-14 text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#07b4ba", color: "#000", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em" }}
          >
            Book A Call
          </button>

          <Reveal>
            <p className="text-sm uppercase tracking-widest mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              Your Coach
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
            <Reveal delay={0}>
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80"
                alt="Head Coach"
                className="rounded-xl object-cover object-top"
                style={{ width: "200px", height: "200px", border: "2px solid rgba(7,180,186,0.3)" }}
              />
            </Reveal>
            <Reveal delay={150}>
              <div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#fff" }}>Head Coach</h2>
                <div className="mt-2 mb-6" style={{ width: "60px", borderTop: "2px dashed rgba(7,180,186,0.6)" }} />
                <ul className="space-y-4">
                  {[
                    "10+ years of professional MMA coaching experience",
                    "Former regional champion with 30+ competitive fights",
                    "Certified strength and conditioning specialist",
                    "Trained over 200 amateur and professional fighters",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#07b4ba" }} fill="#07b4ba" />
                      <span className="text-sm" style={{ color: "#07b4ba" }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1,000+", label: "Athletes Trained" },
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Fight Camps Led" },
              { value: "95%", label: "Client Retention" },
            ].map(({ value, label }, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-xl p-5 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid #2a2a2a" }}
                >
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#07b4ba" }}>{value}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#0f0f0f" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#07b4ba" }}>Real People, Real Results</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff" }}>
                Trusted By Fighters, <span style={{ color: "#07b4ba" }}>Proven Results</span>
              </h2>
              <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
                Here's What Athletes Say About Their Transformation With AOF
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <Reveal delay={0}>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80"
                  alt="Athlete"
                  className="w-full object-cover object-top"
                  style={{ height: "300px" }}
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem,3vw,2.5rem)", color: "#fff", lineHeight: 1.2 }}>
                  AOF Changed The Way <span style={{ color: "#07b4ba" }}>I Train And Perform.</span>
                </h3>
                <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  The structure, the attention to detail, and the accountability took me to a level I never thought possible. I'm stronger, faster, and fight with more confidence than ever.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Arjun M.", role: "Amateur Fighter", text: "Best coaching decision I ever made. The personalised plan made all the difference — I finally feel like a real fighter." },
              { name: "Syed K.", role: "Fitness Enthusiast", text: "AOF transformed how I train. The discipline, technique, and the family vibe all in one. Nothing comes close." },
              { name: "Priya R.", role: "MMA Student", text: "As a beginner I was nervous, but the coach made it approachable and challenging at the same time. Incredible experience." },
            ].map(({ name, role, text }, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid #2a2a2a" }}
                >
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "#07b4ba" }}>{name}</p>
                  <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>{role}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — APPLY FORM */}
      <section ref={formRef} className="py-20 px-6 md:px-12" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          <Reveal delay={0}>
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#07b4ba" }}>Ready To Start?</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", lineHeight: 1.1 }}>
                Apply For Your<br />
                <span style={{ color: "#07b4ba" }}>1-On-1 Coaching Spot</span>
              </h2>
              <p className="text-sm leading-relaxed mt-4 mb-8" style={{ color: "rgba(255,255,255,0.58)" }}>
                Spots are limited. We only take on a small number of 1-on-1 students at a time to ensure every athlete gets the attention they deserve. Fill out the form and we'll reach out within 24 hours.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "No long-term contract — cancel anytime",
                  "First session is a full assessment of your current level",
                  "Custom roadmap built before your first training day",
                  "Dedicated coach assigned to you from day one",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#07b4ba" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{text}</span>
                  </li>
                ))}
              </ul>
              
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366", color: "#fff", textDecoration: "none" }}
              >
                <WhatsAppIcon />
                Contact Us on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
            >
              <p className="font-semibold text-sm mb-6" style={{ color: "#07b4ba" }}>
                Start Your Journey With AOF
              </p>
              <div className="space-y-4">
                {[
                  { placeholder: "Full Name", type: "text" },
                  { placeholder: "Phone Number", type: "tel" },
                  { placeholder: "Main Goal", type: "text" },
                ].map(({ placeholder, type }) => (
                  <input
                    key={placeholder}
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid #2a2a2a", color: "#fff" }}
                  />
                ))}
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid #2a2a2a", color: "rgba(255,255,255,0.5)" }}
                />
                <button
                  className="w-full py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90 mt-2"
                  style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#000", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
};

export default CoachingPage;
