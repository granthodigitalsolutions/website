import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronRight, Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import MagneticButton from "../components/MagneticButton";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/download.png";
import clientLogo1 from "@/imports/WhatsApp_Image_2026-07-16_at_3.48.23_PM.jpeg";
import clientLogo2 from "@/imports/WhatsApp_Image_2026-07-16_at_3.48.41_PM.jpeg";
import clientLogo3 from "@/imports/banner.png";
import clientLogo4 from "@/imports/Screenshot_2026-04-21_222847-removebg-preview.png";
import clientLogo5 from "@/imports/Screenshot_2026-04-21_220152.png";
import clientLogo6 from "@/imports/3117bca68a8b252687000efeea5789935cca280d.png";
import { SOLUTIONS, SPORTS_CAPABILITIES, STATS, CLIENT_LOGOS, PROCESS_STEPS, WHY_GRANTHOR, FAQS, INDUSTRIES } from "../data";
import { Trophy, Code2, Globe, Smartphone, Brain, Cpu, TrendingUp, GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, Hotel, Rocket, Briefcase, Users, Wifi, Zap } from "lucide-react";
import SEO from "../components/SEO";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, React.ElementType> = {
  Trophy, Code2, Globe, Smartphone, Brain, Cpu, TrendingUp,
  GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, Hotel, Rocket, Briefcase, Users,
};

function PremiumHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 600], [0, 90]);
  const logoOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        minHeight: "68vh",
        paddingTop: "6rem",
        paddingBottom: "3.5rem",
        background: [
          "radial-gradient(ellipse 70% 55% at 0% 0%,    rgba(21,101,192,0.22) 0%, transparent 65%)",
          "radial-gradient(ellipse 60% 50% at 100% 0%,  rgba(0,188,212,0.20)  0%, transparent 60%)",
          "radial-gradient(ellipse 55% 50% at 0% 100%,  rgba(0,150,136,0.18)  0%, transparent 60%)",
          "radial-gradient(ellipse 65% 55% at 100% 100%,rgba(46,184,138,0.20) 0%, transparent 65%)",
          "radial-gradient(ellipse 80% 60% at 50% 50%,  rgba(100,210,220,0.14) 0%, transparent 70%)",
          "radial-gradient(ellipse 50% 40% at 50% 0%,   rgba(135,206,235,0.16) 0%, transparent 55%)",
          "radial-gradient(ellipse 40% 35% at 50% 100%, rgba(46,184,138,0.14) 0%, transparent 50%)",
          "#f0f7ff",
        ].join(", "),
      }}
    >
      {/* Slow drifting ambient wash across full hero */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            [
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(21,101,192,0.07) 0%, transparent 60%)",
              "radial-gradient(ellipse 70% 55% at 80% 70%, rgba(46,184,138,0.07) 0%, transparent 58%)",
              "radial-gradient(ellipse 60% 50% at 60% 10%, rgba(0,188,212,0.05) 0%, transparent 55%)",
            ].join(", "),
            [
              "radial-gradient(ellipse 80% 60% at 25% 35%, rgba(0,150,136,0.06) 0%, transparent 60%)",
              "radial-gradient(ellipse 70% 55% at 75% 65%, rgba(21,101,192,0.07) 0%, transparent 58%)",
              "radial-gradient(ellipse 60% 50% at 55% 15%, rgba(46,184,138,0.05) 0%, transparent 55%)",
            ].join(", "),
            [
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(21,101,192,0.07) 0%, transparent 60%)",
              "radial-gradient(ellipse 70% 55% at 80% 70%, rgba(46,184,138,0.07) 0%, transparent 58%)",
              "radial-gradient(ellipse 60% 50% at 60% 10%, rgba(0,188,212,0.05) 0%, transparent 55%)",
            ].join(", "),
          ],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Wave / contour lines spanning full height */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {[
            { d: "M-100,140 C260,100 500,200 780,140 C1060,80  1280,175 1540,130", c: "rgba(21,101,192,0.04)" },
            { d: "M-100,280 C200,240 440,330 730,265 C1020,200 1250,300 1540,255", c: "rgba(0,188,212,0.038)" },
            { d: "M-100,420 C180,385 430,470 720,408 C1010,346 1240,440 1540,395", c: "rgba(46,184,138,0.04)" },
            { d: "M-100,560 C220,525 460,605 745,548 C1030,491 1260,576 1540,535", c: "rgba(21,101,192,0.032)" },
            { d: "M-100,690 C200,660 450,730 740,678 C1030,626 1265,705 1540,665", c: "rgba(0,150,136,0.035)" },
            { d: "M-100,810 C240,782 470,845 760,800 C1050,755 1270,825 1540,793", c: "rgba(46,184,138,0.028)" },
          ].map(({ d, c }, i) => (
            <motion.path
              key={i}
              d={d}
              stroke={c}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2 + i * 0.35, delay: 0.6 + i * 0.18, ease: "easeOut" }}
            />
          ))}
        </svg>
      </div>

      {/* GT Logo watermark — parallax, slightly more visible */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ y: logoY, opacity: logoOpacity }}
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          style={{
            filter: "saturate(0.25) brightness(1.25) hue-rotate(10deg)",
            maskImage:
              "radial-gradient(ellipse 62% 62% at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.10) 50%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 62% 62% at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.10) 50%, transparent 78%)",
          }}
        >
          <ImageWithFallback
            src={logoSrc}
            alt=""
            className="w-[76vmin] h-[76vmin] object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <motion.p
          className="uppercase tracking-[0.28em] text-[11px] text-[#1565c0]/60 mb-10 mt-16"
          style={{ fontWeight: 500 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Grantho Technologies
        </motion.p>

        {/* Main headline — bolder, slightly larger */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            fontSize: "clamp(2.2rem, 4.5vw, 4.2rem)",
            color: "#0c1829",
          }}
        >
          Engineering Digital Solutions<br />
          <span style={{ color: "#1565c0", fontWeight: 600 }}>
            That Move Businesses Forward.
          </span>
        </motion.h1>

        {/* Supporting text — tight to headline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            fontWeight: 400,
            fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)",
            color: "#4a6280",
            letterSpacing: "0.01em",
            lineHeight: 1.65,
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          We build intelligent technology for sports organizations and modern businesses.
        </motion.p>

        {/* Divider accent */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-7"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        >
          <div className="h-px w-14" style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.28))" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(46,184,138,0.65)" }} />
          <div className="h-px w-14" style={{ background: "linear-gradient(90deg, rgba(21,101,192,0.28), transparent)" }} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          {/* Primary CTA */}
          <Link to="/solutions">
            <motion.button
              className="inline-flex items-center gap-2.5 px-8 py-[13px] text-white font-medium rounded-xl"
              style={{
                background: "linear-gradient(135deg, #1255a8 0%, #1565c0 45%, #0ea5d4 100%)",
                fontSize: "0.9rem",
                letterSpacing: "0.015em",
                boxShadow: "0 4px 20px rgba(21,101,192,0.25), 0 1px 4px rgba(21,101,192,0.15)",
              }}
              whileHover={{
                y: -2,
                boxShadow: "0 10px 32px rgba(21,101,192,0.32), 0 2px 8px rgba(21,101,192,0.18)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              Explore Our Solutions
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.button>
          </Link>

          {/* Secondary CTA */}
          <Link to="/contact">
            <motion.button
              className="inline-flex items-center gap-2.5 px-8 py-[13px] font-medium rounded-xl"
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(8px)",
                border: "1.5px solid rgba(21,101,192,0.28)",
                color: "#1565c0",
                fontSize: "0.9rem",
                letterSpacing: "0.015em",
                boxShadow: "0 2px 12px rgba(21,101,192,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
              whileHover={{
                y: -2,
                background: "rgba(255,255,255,0.9)",
                borderColor: "rgba(21,101,192,0.5)",
                boxShadow: "0 8px 24px rgba(21,101,192,0.14), inset 0 1px 0 rgba(255,255,255,1)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              Request Demo
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span
          className="uppercase tracking-[0.2em]"
          style={{ fontSize: "9px", color: "rgba(74,98,128,0.45)", fontWeight: 500 }}
        >
          Scroll
        </span>
        <div className="w-px h-10 overflow-hidden" style={{ background: "rgba(21,101,192,0.1)" }}>
          <motion.div
            className="w-full"
            style={{ background: "linear-gradient(180deg, #1565c0, #2eb88a)", height: "100%" }}
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

const SHOWCASE_ITEMS = [
  {
    id: "sports",
    name: "Sports Technology",
    label: "Flagship Specialization",
    description: "Custom platforms for sports organizations, academies, tournaments, coaches, athletes, registrations, results, and end-to-end event operations.",
    icon: Trophy,
    href: "/sports-technology",
    featured: true,
  },
  { id: "software", name: "Custom Software",    description: "Business applications designed around your unique operational requirements.", icon: Code2,    href: "/solutions#custom-software" },
  { id: "crm",      name: "CRM Systems",        description: "Centralized platforms for managing leads, customers, and business relationships.", icon: Users,    href: "/solutions#crm" },
  { id: "iot",      name: "IoT Solutions",       description: "Connected systems for real-time monitoring, automation, and sensor data.", icon: Wifi,    href: "/solutions#iot" },
  { id: "ai",       name: "AI & Automation",     description: "Intelligent workflows, WhatsApp automation, and AI-integrated business systems.", icon: Zap,     href: "/solutions#ai" },
  { id: "web",      name: "Web & Mobile",        description: "Professional websites, web applications, and cross-platform mobile apps.", icon: Globe,   href: "/solutions#web" },
  { id: "mktg",     name: "Digital Marketing",   description: "Brand visibility, audience engagement, and online business growth strategies.", icon: TrendingUp, href: "/solutions#marketing" },
];

function SolutionsShowcase() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-10 -mt-10 pb-0">
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(21,101,192,0.10)",
          boxShadow: "0 8px 60px rgba(21,101,192,0.09), 0 2px 16px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header */}
        <div className="flex items-end justify-between px-8 lg:px-12 pt-10 pb-8 border-b border-border/60">
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2eb88a] mb-2">What We Build</p>
            <h2
              className="text-foreground"
              style={{ fontWeight: 600, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Solutions Designed for<br className="hidden sm:block" /> Modern Organizations
            </h2>
          </div>
          <Link
            to="/solutions"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all shrink-0 mb-1"
          >
            Explore All Solutions <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="px-8 lg:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">
            {/* Featured — Sports Technology */}
            {(() => {
              const feat = SHOWCASE_ITEMS[0];
              const Icon = feat.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={feat.href}
                    className="group flex flex-col h-full min-h-[220px] p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(145deg, rgba(21,101,192,0.06) 0%, rgba(46,184,138,0.05) 60%, rgba(0,188,212,0.04) 100%)",
                      border: "1.5px solid rgba(21,101,192,0.18)",
                      boxShadow: "0 2px 16px rgba(21,101,192,0.07)",
                    }}
                  >
                    {/* Background accent */}
                    <div
                      className="absolute bottom-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                      style={{ background: "radial-gradient(circle, rgba(46,184,138,0.1), transparent 70%)", transform: "translate(30%, 30%)" }}
                    />
                    <span
                      className="inline-block text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full mb-6 self-start"
                      style={{ background: "rgba(21,101,192,0.08)", color: "#1565c0" }}
                    >
                      {feat.label}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(21,101,192,0.10)" }}
                    >
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-3">{feat.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{feat.description}</p>
                    <div
                      className="flex items-center gap-1.5 mt-6 text-primary text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                    >
                      Explore <ArrowRight size={13} />
                    </div>
                  </Link>
                </motion.div>
              );
            })()}

            {/* Regular cards — 2×3 grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SHOWCASE_ITEMS.slice(1).map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.href}
                      className="group flex flex-col h-full p-5 rounded-2xl bg-white transition-all duration-250 hover:-translate-y-1"
                      style={{
                        border: "1.5px solid rgba(21,101,192,0.10)",
                        boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(21,101,192,0.28)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(21,101,192,0.10)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(21,101,192,0.10)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)";
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "rgba(21,101,192,0.07)" }}
                      >
                        <Icon size={17} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1.5 leading-snug">{item.name}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed flex-1">{item.description}</p>
                      <div className="flex items-center gap-1 mt-4 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:gap-2">
                        Learn more <ArrowRight size={11} />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile "Explore All" link */}
          <div className="md:hidden text-center mt-6 pb-2">
            <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Explore All Solutions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const CLIENT_LOGO_IMAGES = [
  { src: clientLogo1, alt: "Team Shadow Kai – Martial Arts Academy International" },
  { src: clientLogo2, alt: "B – Client Logo" },
  { src: clientLogo3, alt: "CODISTA – Coimbatore District Sports Taekwondo Association" },
  { src: clientLogo4, alt: "Tamil Nadu Silambam Association" },
  { src: clientLogo5, alt: "Indian Silambam Federation" },
  { src: clientLogo6, alt: "Tholkalai Silambam – Body & Mind Sculpting" },
];

function Marquee() {
  const items = [...CLIENT_LOGO_IMAGES, ...CLIENT_LOGO_IMAGES];
  return (
    <section className="mt-16 py-14 border-y border-border overflow-hidden bg-white">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10">Trusted by Forward-Thinking Organizations</p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <ImageWithFallback
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SportsTechSpotlight() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1734361469806-690540d68edc?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(21,101,192,0.55) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 85% 20%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2eb88a] mb-3">Sports Technology</p>
            <h2 className="font-bold text-white mb-6">Built for the World of Sports.</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              From tournament operations and athlete management to connected IoT systems and intelligent automation, Grantho Technologies builds purpose-driven technology for the evolving sports ecosystem.
            </p>
            <Link to="/sports-technology">
              <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1565c0] font-bold rounded-2xl hover:bg-white/90 transition-opacity shadow-lg shadow-black/20">
                Explore Sports Technology <ArrowUpRight size={18} />
              </MagneticButton>
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SPORTS_CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap}
                  className="p-3 rounded-xl border text-sm font-medium text-center cursor-default"
                  style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{
                    scale: 1.06,
                    background: "rgba(46,184,138,0.18)",
                    borderColor: "#2eb88a",
                    color: "#ffffff",
                    boxShadow: "0 4px 20px rgba(46,184,138,0.25)",
                  }}
                >
                  {cap}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Ornament SVGs for each stacked panel ── */
function OrnamentExcellence({ opacity = 0.18 }: { opacity?: number }) {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", opacity }}>
      <circle cx="480" cy="340" r="6" stroke="black" strokeWidth="1.8" />
      <circle cx="380" cy="280" r="4" stroke="black" strokeWidth="1.8" />
      <circle cx="520" cy="240" r="5" stroke="black" strokeWidth="1.8" />
      <circle cx="440" cy="180" r="3" stroke="black" strokeWidth="1.8" />
      <circle cx="560" cy="400" r="4" stroke="black" strokeWidth="1.8" />
      <circle cx="320" cy="360" r="5" stroke="black" strokeWidth="1.8" />
      <line x1="480" y1="340" x2="380" y2="280" stroke="black" strokeWidth="1.4" />
      <line x1="480" y1="340" x2="560" y2="400" stroke="black" strokeWidth="1.4" />
      <line x1="380" y1="280" x2="520" y2="240" stroke="black" strokeWidth="1.4" />
      <line x1="520" y1="240" x2="440" y2="180" stroke="black" strokeWidth="1.4" />
      <line x1="380" y1="280" x2="320" y2="360" stroke="black" strokeWidth="1.4" />
      <line x1="320" y1="360" x2="480" y2="340" stroke="black" strokeWidth="1" strokeDasharray="4 6" />
      <rect x="420" y="310" width="80" height="80" rx="4" stroke="black" strokeWidth="1.2" strokeDasharray="5 5" />
      <rect x="430" y="320" width="60" height="60" rx="2" stroke="black" strokeWidth="0.8" />
      <path d="M200,420 L240,380 L280,400 L340,350 L400,370 L450,320" stroke="black" strokeWidth="1.4" strokeDasharray="3 4" />
      <path d="M180,460 L230,420 L280,440 L340,390 L410,410 L470,360" stroke="black" strokeWidth="1" strokeDasharray="2 5" />
      <path d="M500,450 L520,450 L520,380 L510,380" stroke="black" strokeWidth="1.4" fill="none" />
      <path d="M540,160 L560,160 L560,220 L550,220" stroke="black" strokeWidth="1.4" fill="none" />
      <path d="M260,300 L280,288 L300,300 L300,324 L280,336 L260,324 Z" stroke="black" strokeWidth="1.2" />
      <path d="M300,300 L320,288 L340,300 L340,324 L320,336 L300,324 Z" stroke="black" strokeWidth="0.9" />
      <circle cx="420" cy="320" r="160" stroke="black" strokeWidth="0.9" strokeDasharray="8 12" />
    </svg>
  );
}

function OrnamentCulture({ opacity = 0.18 }: { opacity?: number }) {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", opacity }}>
      <circle cx="300" cy="180" r="30" stroke="black" strokeWidth="1.6" />
      <circle cx="420" cy="240" r="24" stroke="black" strokeWidth="1.6" />
      <circle cx="200" cy="250" r="20" stroke="black" strokeWidth="1.6" />
      <circle cx="360" cy="320" r="18" stroke="black" strokeWidth="1.4" />
      <circle cx="240" cy="340" r="14" stroke="black" strokeWidth="1.4" />
      <path d="M300,210 Q360,200 420,240" stroke="black" strokeWidth="1.4" fill="none" />
      <path d="M200,250 Q250,220 300,210" stroke="black" strokeWidth="1.4" fill="none" />
      <path d="M300,210 Q330,270 360,320" stroke="black" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
      <path d="M200,250 Q220,300 240,340" stroke="black" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
      <path d="M420,264 Q400,300 360,320" stroke="black" strokeWidth="1.2" fill="none" />
      <path d="M240,340 Q300,360 360,320" stroke="black" strokeWidth="1.1" fill="none" />
      <rect x="440" y="180" width="80" height="40" rx="20" stroke="black" strokeWidth="1.2" />
      <path d="M444,220 L438,234 L460,220" stroke="black" strokeWidth="1.2" fill="none" />
      <rect x="130" y="290" width="60" height="30" rx="15" stroke="black" strokeWidth="1.2" />
      <path d="M134,320 L128,332 L148,320" stroke="black" strokeWidth="1.2" fill="none" />
      <ellipse cx="300" cy="270" rx="180" ry="120" stroke="black" strokeWidth="0.9" strokeDasharray="6 10" />
      <ellipse cx="300" cy="270" rx="240" ry="160" stroke="black" strokeWidth="0.6" strokeDasharray="4 14" />
      {[...Array(10)].map((_, i) => (
        <circle key={i} cx={160 + i * 30} cy={420 + (i % 3) * 12} r="2.5" fill="black" opacity="0.7" />
      ))}
    </svg>
  );
}

function OrnamentFuture({ opacity = 0.18 }: { opacity?: number }) {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", opacity }}>
      {[
        [480, 200], [420, 280], [540, 320], [380, 360], [500, 400], [320, 300], [560, 240],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 7 : 5} stroke="black" strokeWidth="1.6" />
      ))}
      <line x1="480" y1="200" x2="420" y2="280" stroke="black" strokeWidth="1.4" />
      <line x1="480" y1="200" x2="540" y2="320" stroke="black" strokeWidth="1.4" />
      <line x1="420" y1="280" x2="380" y2="360" stroke="black" strokeWidth="1.4" />
      <line x1="540" y1="320" x2="500" y2="400" stroke="black" strokeWidth="1.4" />
      <line x1="420" y1="280" x2="320" y2="300" stroke="black" strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1="560" y1="240" x2="480" y2="200" stroke="black" strokeWidth="1.2" />
      <line x1="380" y1="360" x2="500" y2="400" stroke="black" strokeWidth="1" strokeDasharray="3 5" />
      <rect x="200" y="340" width="50" height="36" rx="6" stroke="black" strokeWidth="1.4" />
      <rect x="205" y="345" width="40" height="20" rx="2" stroke="black" strokeWidth="0.8" />
      <rect x="260" y="350" width="30" height="22" rx="4" stroke="black" strokeWidth="1.2" />
      <path d="M160,240 Q170,220 195,225 Q200,205 225,210 Q240,195 260,210 Q280,198 290,215 Q310,210 315,230 Q320,248 305,255 L165,255 Q148,250 160,240Z" stroke="black" strokeWidth="1.2" />
      <line x1="225" y1="340" x2="220" y2="256" stroke="black" strokeWidth="1" strokeDasharray="2 4" />
      <line x1="275" y1="350" x2="260" y2="256" stroke="black" strokeWidth="1" strokeDasharray="2 4" />
      <path d="M340,180 Q360,160 380,180" stroke="black" strokeWidth="1.4" fill="none" />
      <path d="M330,168 Q360,140 390,168" stroke="black" strokeWidth="1.1" fill="none" />
      <path d="M320,156 Q360,120 400,156" stroke="black" strokeWidth="0.8" fill="none" />
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={300 + i * 60} y1="460" x2={420 + i * 20} y2="320" stroke="black" strokeWidth="0.8" />
      ))}
      {[0,1,2,3].map(i => (
        <line key={i} x1="300" y1={330 + i * 32} x2="600" y2={340 + i * 28} stroke="black" strokeWidth="0.6" />
      ))}
    </svg>
  );
}

function StickyStacked() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);

  const panels = [
    {
      number: "01",
      label: "EXCELLENCE",
      title: "Engineering with Purpose.",
      body: "We combine thoughtful design, modern technology, and disciplined engineering to build reliable solutions that solve meaningful problems.",
      bg: "#ffffff",
      accentColor: "#1565c0",
      darkBg: false,
      Ornament: OrnamentExcellence,
    },
    {
      number: "02",
      label: "CULTURE",
      title: "Built on Collaboration.",
      body: "Great technology starts with understanding. We work closely with our clients, communicate transparently, and treat every project as a shared journey.",
      bg: "#2eb88a",
      accentColor: "#ffffff",
      darkBg: true,
      Ornament: OrnamentCulture,
    },
    {
      number: "03",
      label: "FUTURE",
      title: "Designed for What Comes Next.",
      body: "Our solutions are built to evolve—scalable, adaptable, and ready to support organizations as their ambitions grow.",
      bg: "#1565c0",
      accentColor: "#ffffff",
      darkBg: true,
      Ornament: OrnamentFuture,
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      panelRefs.current.forEach((panel, i) => {
        if (i === panels.length - 1) return;
        ScrollTrigger.create({ trigger: panel, start: "top top", end: `+=${window.innerHeight}`, pin: true, pinSpacing: false });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative">
      {panels.map((panel, i) => {
        const { Ornament } = panel;
        return (
          <div
            key={panel.label}
            ref={(el) => { if (el) panelRefs.current[i] = el; }}
            className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden"
            style={{ background: panel.bg, zIndex: i + 1, position: "relative" }}
          >
            {/* Subtle radial tint */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 30% 50%, ${panel.accentColor}12 0%, transparent 65%)`,
              }}
            />

            {/* Ornament — bottom-right */}
            <motion.div
              className="absolute bottom-0 right-0 w-[80%] h-[70%] md:w-[55%] md:h-[75%] pointer-events-none"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Ornament opacity={0.55} />
            </motion.div>

            {/* Thin top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${panel.accentColor}40, transparent)` }} />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-left pl-0 md:pl-8">
              <motion.p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: panel.accentColor }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {panel.number} / {panel.label}
              </motion.p>

              <motion.h2
                className="font-bold mb-8"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                  color: panel.darkBg ? "#ffffff" : "#0c1829",
                }}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {panel.title}
              </motion.h2>

              {/* Accent line */}
              <motion.div
                className="h-px w-24 mb-8"
                style={{ background: `linear-gradient(90deg, ${panel.accentColor}, transparent)`, transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              />

              <motion.p
                className="text-lg md:text-xl max-w-xl leading-relaxed"
                style={{ color: panel.darkBg ? "rgba(255,255,255,0.75)" : "#4a6280", fontWeight: 400 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {panel.body}
              </motion.p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-primary mb-3">By the Numbers</p>
          <h2 className="text-center font-bold text-foreground mb-16">Growing Through Technology and Trust.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl border-2 border-border bg-white hover:border-primary/40 hover:shadow-xl hover:shadow-primary/6 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}{stat.suffix}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                <p className="text-xs text-muted-foreground/50 mt-1 italic">Placeholder</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  return (
    <section className="py-24 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">What We Build</p>
          <h2 className="font-bold text-foreground max-w-2xl mb-4">Technology Solutions Built for What Comes Next.</h2>
          <p className="text-muted-foreground max-w-xl mb-16">From sports platforms to enterprise software, we engineer solutions that deliver real-world results.</p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SOLUTIONS.map((sol) => {
            const Icon = ICON_MAP[sol.icon];
            return (
              <StaggerItem key={sol.id}>
                <Link to={sol.href} className="group block p-6 rounded-2xl border-2 border-border bg-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/18 transition-colors">
                    {Icon && <Icon size={22} className="text-primary" />}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">{sol.number}</div>
                  <h3 className="font-bold text-foreground text-base mb-2">{sol.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{sol.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 text-center">How We Work</p>
          <h2 className="font-bold text-foreground text-center mb-16">Our Development Process</h2>
        </ScrollReveal>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" style={{ transform: "translateX(-50%)" }}>
            <motion.div className="w-full bg-primary" initial={{ height: "0%" }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} />
          </div>
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.number} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                <div className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="p-6 rounded-2xl border-2 border-border bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300">
                      <div className="text-xs text-primary font-mono font-bold mb-1">{step.number}</div>
                      <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-primary border-4 border-white items-center justify-center flex-shrink-0 z-10 shadow-md">
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const handleMouseDown = (e: React.MouseEvent) => { setIsDragging(true); startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0); scrollLeft.current = scrollRef.current?.scrollLeft ?? 0; };
  const handleMouseMove = (e: React.MouseEvent) => { if (!isDragging || !scrollRef.current) return; scrollRef.current.scrollLeft = scrollLeft.current - (e.pageX - scrollRef.current.offsetLeft - startX.current); };
  const handleMouseUp = () => setIsDragging(false);

  const marqueeItems = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="py-24 overflow-hidden relative" style={{ backgroundImage: `linear-gradient(rgba(2,18,16,0.90), rgba(2,18,16,0.90)), url("https://images.unsplash.com/photo-1757466762489-52fea38071ad?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(46,184,138,0.5) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 15% 20%, rgba(21,101,192,0.2) 0%, transparent 55%)" }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-3">Industries We Serve</p>
          <h2 className="font-bold text-white mb-4">Specialized in Sports.<br />Built for Every Ambition.</h2>
          <p className="text-white/70 mb-12 max-w-xl">Technology solutions tailored to every sector we serve.</p>
        </ScrollReveal>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, rgba(2,18,16,0.95), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, rgba(2,18,16,0.95), transparent)" }} />
        <motion.div
          className="flex gap-4 pb-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {marqueeItems.map((ind, i) => {
            const Icon = ICON_MAP[ind.icon];
            return (
              <div key={i} className="flex-shrink-0 w-60 p-6 rounded-2xl bg-white border-2 border-white/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${ind.featured ? "bg-primary/10" : "bg-muted/40"}`}>
                  {Icon && <Icon size={20} className={ind.featured ? "text-primary" : "text-muted-foreground"} />}
                </div>
                {ind.featured && <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">Featured</span>}
                <h3 className="font-bold text-foreground text-base mb-2">{ind.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{ind.challenge.slice(0, 80)}…</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhyGranthor() {
  return (
    <section className="py-24 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Why Choose Us</p>
          <h2 className="font-bold text-foreground mb-16">Why Grantho Technologies</h2>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_GRANTHOR.map((item) => (
            <StaggerItem key={item.title}>
              <div className="p-6 rounded-2xl border-2 border-border bg-white hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/6 transition-all duration-300 h-full">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 text-center">FAQ</p>
          <h2 className="font-bold text-foreground text-center mb-12">Common Questions</h2>
        </ScrollReveal>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="border-2 border-border rounded-2xl bg-white overflow-hidden hover:border-primary/30 transition-colors">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/3 transition-colors" onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    {openIndex === i ? <Minus size={18} className="text-primary flex-shrink-0" /> : <Plus size={18} className="text-muted-foreground flex-shrink-0" />}
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-white border-t-2 border-primary/20">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #2eb88a, transparent 70%)" }} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-black text-foreground mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Have an Idea?<br /><span className="text-primary">{"Let's Build What Comes Next."}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Tell us about your organization and what you want to build. {"We'll"} take it from there.
          </p>
          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-opacity text-lg shadow-xl shadow-primary/25">
              Start a Conversation <ArrowUpRight size={22} />
            </MagneticButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-white">
      <SEO 
        title="Grantho Technologies | Custom Software & Web Development Company" 
        description="Grantho Technologies is a premier custom software and web development agency based in Coimbatore, Tamil Nadu, delivering scalable digital solutions globally."
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Grantho Technologies",
          "url": "https://grantho.com",
          "logo": "https://grantho.com/favicon.png",
          "sameAs": []
        })}
      />
      <PremiumHero />
      <SolutionsShowcase />

      <Marquee />

      {/* Company Intro */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(2,18,16,0.90), rgba(2,18,16,0.90)), url("https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(46,184,138,0.5) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 85% 80%, rgba(21,101,192,0.2) 0%, transparent 55%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-3">Who We Are</p>
              <h2 className="font-bold text-white mb-6">Technology Built Around Real-World Challenges.</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Founded in 2025, Grantho Technologies is a technology solutions company focused on building scalable digital products that simplify operations, strengthen brands, and create meaningful business impact.
              </p>
              <p className="text-white/75 leading-relaxed mb-8">
                While our expertise extends across industries, we have a strong specialization in sports technology—building intelligent platforms and connected systems that help sports organizations manage, automate, and grow their operations.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                Discover Granthor <ChevronRight size={18} />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "10+ Solutions", desc: "Across software, web, mobile, AI, IoT, and marketing", color: "primary" },
                  { title: "Sports-First", desc: "Deep specialization in sports technology", color: "accent" },
                  { title: "Custom Built", desc: "No templates. Every solution is purpose-engineered.", color: "primary" },
                  { title: "Long-Term", desc: "Partners for growth, not just project delivery.", color: "accent" },
                ].map((card) => (
                  <div key={card.title} className="p-5 rounded-2xl border-2 border-border bg-white hover:border-primary/40 transition-colors">
                    <div className="font-bold text-foreground mb-1">{card.title}</div>
                    <p className="text-muted-foreground text-sm">{card.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SolutionsGrid />
      <SportsTechSpotlight />
      <StickyStacked />
      <StatsSection />
      <IndustriesStrip />
      <WhyGranthor />
    </main>
  );
}
