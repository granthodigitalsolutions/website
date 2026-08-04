import SEO from "../components/SEO";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { X, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { FEATURED_PROJECT } from "../data";
import screen1 from "@/imports/Screenshot_2026-07-24_130750.png";
import screen2 from "@/imports/Screenshot_2026-07-24_130826.png";
import screen3 from "@/imports/Screenshot_2026-07-24_131117.png";
import screen4 from "@/imports/Screenshot_2026-07-24_131200.png";
import screen5 from "@/imports/Screenshot_2026-07-24_131333.png";
import screen6 from "@/imports/Screenshot_2026-07-24_131452.png";
import screen7 from "@/imports/Screenshot_2026-07-24_131635.png";
import screen8 from "@/imports/Screenshot_2026-07-24_131727.png";

const PLATFORM_SCREENS = [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8];

const PROJECT_GALLERY = [
  { id: 1, title: "Dashboard Overview", bg: "from-[#0d4b9c] to-[#1565c0]", label: "Admin Dashboard" },
  { id: 2, title: "Student Registration", bg: "from-[#1565c0] to-[#0d6e50]", label: "Registration Module" },
  { id: 3, title: "Tournament Bracket", bg: "from-[#0d6e50] to-[#1a7a5e]", label: "Tournament View" },
  { id: 4, title: "Payment Integration", bg: "from-[#0d4b9c] to-[#2eb88a]", label: "Payments" },
  { id: 5, title: "Mobile View", bg: "from-[#2eb88a] to-[#1565c0]", label: "Mobile App" },
  { id: 6, title: "Analytics Report", bg: "from-[#1565c0] to-[#0d4b9c]", label: "Analytics" },
];

const OTHER_PROJECTS = [
  { title: "Sports Academy CRM", category: "Custom Software", description: "A full-featured CRM and management platform for a regional sports academy managing 500+ students.", tech: ["React", "Node.js", "PostgreSQL"], accent: "#1565c0" },
  { title: "Tournament Registration Portal", category: "Web Platform", description: "Online registration and results portal for a state-level martial arts tournament with 1,200+ participants.", tech: ["Next.js", "Supabase", "WhatsApp API"], accent: "#2eb88a" },
  { title: "Athlete Performance Dashboard", category: "Analytics", description: "Real-time performance tracking dashboard for coaches to monitor athlete training progress and metrics.", tech: ["React", "Python", "IoT Sensors"], accent: "#1565c0" },
  { title: "Event Operations System", category: "Operations", description: "End-to-end event management platform handling draw systems, scheduling, and live results publication.", tech: ["React Native", "Firebase", "Node.js"], accent: "#2eb88a" },
  { title: "Digital Certificate Platform", category: "Automation", description: "Bulk certificate generation and WhatsApp delivery system for sports events with QR verification.", tech: ["Python", "WhatsApp API", "PDF Generation"], accent: "#1565c0" },
  { title: "Business Website Redesign", category: "Web Design", description: "Premium corporate website for an established B2B services firm with conversion-focused design.", tech: ["Next.js", "Tailwind CSS", "Framer Motion"], accent: "#2eb88a" },
];

function MockScreen({ title, bg, label }: { title: string; bg: string; label: string }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${bg} flex flex-col`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
        </div>
        <div className="flex-1 h-5 rounded bg-white/5 mx-4" />
      </div>
      <div className="flex-1 p-6 flex flex-col gap-4">
        <div className="text-[#2eb88a] font-bold text-sm">{label}</div>
        <div className="space-y-2">
          <div className="h-3 bg-white/10 rounded w-3/4" />
          <div className="h-3 bg-white/6 rounded w-1/2" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
              <div className="w-6 h-6 rounded bg-[#2eb88a]/20" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4">
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="w-6 h-6 rounded bg-white/10" />
                <div className="flex-1 h-2.5 bg-white/8 rounded" />
                <div className="w-12 h-2.5 bg-[#2eb88a]/20 rounded" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs text-white/30 text-center mt-auto">{title}</div>
      </div>
    </div>
  );
}

function Lightbox({ images, initialIndex, onClose }: { images: typeof PROJECT_GALLERY; initialIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(initialIndex);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
        <motion.div className="relative z-10 w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <AnimatePresence mode="wait">
            <motion.div key={current} className="w-full h-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
              <MockScreen {...images[current]} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><X size={18} /></button>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ArrowLeft size={18} /></button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ArrowRight size={18} /></button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "bg-[#2eb88a] w-6" : "bg-white/30 w-2"}`} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Work() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <main className="pt-24 bg-white">
      <SEO title="Our Work & Portfolio | Grantho Technologies" description="Explore our portfolio of successful software, web, and mobile app projects." url="https://grantho.com/work" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 px-6" style={{ minHeight: "58vh", display: "flex", alignItems: "center", backgroundColor: "#05132b" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(21,101,192,0.35) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 85% 40%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div
          className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(46,184,138,0.18) 0%, transparent 70%)", transform: "translate(30%, -20%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #1565c0, #2eb88a, transparent)" }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2 }} />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.p className="font-mono text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#2eb88a" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Work
          </motion.p>
          <motion.h1
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Built to Solve.{" "}
            <span style={{ color: "#2eb88a" }}>Designed to Perform.</span>
          </motion.h1>
          <motion.p className="text-lg max-w-xl mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Projects that represent our approach: purposeful engineering, clean design, and solutions that continue to deliver value long after launch.
          </motion.p>
        </div>
      </section>

      {/* ── Featured Case Study ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f8faff" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-2 rounded-full" style={{ background: "#1565c0" }} />
              <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "#1565c0" }}>Featured Case Study</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5" style={{ background: "rgba(21,101,192,0.1)", color: "#1565c0" }}>{FEATURED_PROJECT.category}</span>
              <h2 className="font-bold text-foreground mb-5" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>{FEATURED_PROJECT.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">{FEATURED_PROJECT.description}</p>

              <div className="space-y-6">
                {[
                  { label: "The Challenge", body: FEATURED_PROJECT.challenge },
                  { label: "The Solution", body: FEATURED_PROJECT.solution },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="p-5 rounded-xl border-l-2"
                    style={{ borderColor: i === 0 ? "rgba(21,101,192,0.4)" : "#2eb88a", background: i === 0 ? "rgba(21,101,192,0.04)" : "rgba(46,184,138,0.05)" }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: i === 0 ? "#1565c0" : "#2eb88a" }}>{item.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Technology Used</p>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_PROJECT.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-white">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.12}>
              <div className="space-y-5">
                <motion.div
                  className="aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl cursor-pointer"
                  onClick={() => openLightbox(0)}
                  whileHover={{ scale: 1.01, boxShadow: "0 24px 60px rgba(21,101,192,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <MockScreen title="Platform Dashboard" bg="from-[#0d4b9c] to-[#1565c0]" label="Admin Dashboard" />
                </motion.div>
                <motion.div
                  className="p-6 rounded-2xl border border-border bg-white"
                  whileHover={{ boxShadow: "0 8px 30px rgba(21,101,192,0.10)" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#1565c0" }}>Platform Features</p>
                  <div className="grid grid-cols-2 gap-2">
                    {FEATURED_PROJECT.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#1565c0" }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Project Gallery Marquee ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2eb88a" }}>Project Gallery</p>
            <h2 className="font-bold text-foreground mb-2" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Platform Screens</h2>
            <p className="text-muted-foreground text-sm">A look at the interfaces we build</p>
          </ScrollReveal>
        </div>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-5"
            style={{ width: "max-content" }}
            animate={{ x: [0, -(PLATFORM_SCREENS.length * 340 + PLATFORM_SCREENS.length * 20) / 2] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...PLATFORM_SCREENS, ...PLATFORM_SCREENS].map((src, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden border border-border shadow-lg cursor-pointer"
                style={{ width: 340, height: 210 }}
                whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(21,101,192,0.20)", borderColor: "rgba(21,101,192,0.4)" }}
                transition={{ duration: 0.25 }}
              >
                <img src={src} alt={`Platform screen ${(i % PLATFORM_SCREENS.length) + 1}`} className="w-full h-full object-cover object-top" />
              </motion.div>
            ))}
          </motion.div>
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />
        </div>
      </section>

      {/* ── Other Projects ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f8faff" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>More Projects</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Additional Work</h2>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OTHER_PROJECTS.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  className="p-7 rounded-2xl border border-border bg-white h-full"
                  whileHover={{ y: -6, boxShadow: `0 16px 40px ${project.accent}18`, borderColor: `${project.accent}40` }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4" style={{ background: `${project.accent}12`, color: project.accent }}>
                    {project.category}
                  </span>
                  <h3 className="font-bold text-foreground mb-3 text-lg">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1762278804842-24702a3fb783?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(21,101,192,0.55) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 85% 20%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 6, repeat: Infinity }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(46,184,138,0.2) 0%, transparent 60%)" }} />
        </motion.div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Have a Project in Mind?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              {"We're"} always interested in ambitious projects. Tell us what you want to build.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl text-lg"
              style={{ color: "#1565c0" }}
            >
              Start a Project <ArrowUpRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {lightboxOpen && <Lightbox images={PROJECT_GALLERY} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />}
    </main>
  );
}

