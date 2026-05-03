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

    @media (max-width: 768px) {
      .testimonial-main { flex-direction: column; }
      .testimonial-main img { width: 100%; }
      .two-col { flex-direction: column; }
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
  { icon: "🎯", title: "Personalis
