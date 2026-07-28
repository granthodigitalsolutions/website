import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { CORE_VALUES } from "../data";

const TIMELINE = [
  { year: "2025", event: "Grantho Technologies Founded", detail: "Established with a mission to engineer intelligent digital solutions for sports organizations and ambitious businesses." },
  { year: "Present", event: "Building Intelligent Technology", detail: "Delivering scalable, purpose-driven platforms across sports organizations, enterprises, and modern industries." },
  { year: "Future", event: "Expanding the Ecosystem", detail: "Growing connected, intelligent, and scalable technology ecosystems that power the next generation of organizations." },
];

const PILLARS = [
  { number: "01", title: "Our Mission", body: "To build technology that simplifies complexity, delivers measurable value, and creates lasting partnerships with the organizations we serve." },
  { number: "02", title: "Our Vision", body: "To be the technology partner of choice for sports organizations and ambitious businesses who want to lead through innovation." },
  { number: "03", title: "Our Approach", body: "Business-first. We start by understanding your organization deeply—then engineer solutions that fit your real-world context and growth ambitions." },
];

const PHILOSOPHY = [
  { label: "Development Philosophy", title: "Build for the long run.", body: "We engineer with scalability and maintainability in mind. Every system is designed to evolve as your organization grows—with clean architecture, modular code, and thoughtful infrastructure choices." },
  { label: "Technology Philosophy", title: "Technology as a means, not an end.", body: "We choose technology deliberately—selecting tools and platforms because they serve your needs, not because they are trending. Our goal is always clarity, reliability, and value delivery." },
  { label: "Partnership Philosophy", title: "Every client is a long-term partner.", body: "We don't disappear after delivery. We build relationships that evolve with your organization—providing ongoing support, iteration, and strategic guidance as your technology needs grow." },
];

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <main className="pt-24 bg-white">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative overflow-hidden py-28 px-6" style={{ minHeight: "60vh", display: "flex", alignItems: "center", backgroundColor: "#05132b" }}>
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(21,101,192,0.35) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 85% 40%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        {/* Animated pulsing orb */}
        <motion.div
          className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(46,184,138,0.18) 0%, transparent 70%)", transform: "translate(30%, -20%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Animated accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #1565c0, #2eb88a, transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: "#2eb88a" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Grantho Technologies
              </motion.p>
              <motion.h1
                className="font-bold text-white mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Technology with Purpose.{" "}
                <span style={{ color: "#2eb88a" }}>Partnership with Impact.</span>
              </motion.h1>
              <motion.p
                className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We are a technology solutions company founded to engineer digital systems that create real, lasting value for organizations that want to lead.
              </motion.p>
              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-2xl text-white transition-opacity hover:opacity-90 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #1565c0, #1a7de8)" }}>
                  Work With Us <ArrowRight size={16} />
                </Link>
                <Link to="/solutions" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-2xl transition-colors" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)" }}>
                  Our Solutions <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Animated stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2025", label: "Founded", accent: "#1565c0" },
                { value: "15+", label: "Projects Delivered", accent: "#2eb88a" },
                { value: "10+", label: "Clients Served", accent: "#1565c0" },
                { value: "4+", label: "Industries", accent: "#2eb88a" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl"
                    style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-black mb-1" style={{ color: stat.accent }}>{stat.value}</div>
                  <div className="text-xs font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f8faff" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>Who We Are</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              A Technology Partner Built for Ambitious Organizations.
            </h2>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                Founded in 2025, Grantho Technologies is a technology solutions company focused on building scalable, purpose-driven digital products. We work with sports organizations, businesses, startups, institutions, and enterprises to engineer solutions that simplify operations, strengthen brands, and unlock meaningful growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our strongest area of specialization is sports technology—where we build intelligent platforms, connected systems, and automation tools engineered for the real demands of the sports ecosystem.
              </p>
            </ScrollReveal>
            <div className="space-y-4">
              {PILLARS.map((pillar, i) => (
                <ScrollReveal key={pillar.number} delay={i * 0.1} direction="right">
                  <motion.div
                    className="p-6 rounded-2xl border border-border bg-white hover:-translate-y-1 transition-all duration-300"
                    style={{ borderLeft: "3px solid #1565c0" }}
                    whileHover={{ boxShadow: "0 8px 30px rgba(21,101,192,0.10)" }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-muted-foreground mt-1">{pillar.number}</span>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{pillar.body}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Banner ── */}
      <section className="py-28 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1729161769741-e7bbb82abc84?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(21,101,192,0.55) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 85% 20%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(46,184,138,0.2) 0%, transparent 60%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <motion.div
              className="text-7xl font-black mb-6 leading-none"
              style={{ color: "rgba(255,255,255,0.15)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >"</motion.div>
            <blockquote
              className="font-bold text-white leading-snug mb-8"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)", letterSpacing: "-0.015em" }}
            >
              Technology should simplify complexity, unlock possibilities, and create lasting value.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.3)" }} />
              <p className="text-white/70 font-semibold tracking-widest text-sm uppercase">Grantho Technologies</p>
              <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.3)" }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2eb88a" }}>What Drives Us</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Core Values</h2>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #2eb88a, #1565c0)" }} />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CORE_VALUES.map((val, i) => (
              <StaggerItem key={val.title}>
                <motion.div
                  className="p-6 rounded-2xl border border-border bg-white h-full cursor-default"
                  whileHover={{ y: -6, boxShadow: "0 12px 36px rgba(21,101,192,0.10)", borderColor: "rgba(21,101,192,0.35)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="w-8 h-0.5 mb-4 rounded-full" style={{ background: i % 2 === 0 ? "#1565c0" : "#2eb88a" }} />
                  <h3 className="font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1759210358926-4673cc44d35f?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(21,101,192,0.35) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2eb88a" }}>Our Journey</p>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Where We Come From. Where We Are Going.
            </h2>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>
          <div className="relative pl-10 space-y-14">
            {/* Animated timeline line */}
            <motion.div
              className="absolute left-0 top-0 w-0.5 origin-top"
              style={{ background: "linear-gradient(180deg, #1565c0, #2eb88a)" }}
              initial={{ scaleY: 0, height: "100%" }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.18}>
                <div className="relative">
                  {/* Dot */}
                  <motion.div
                    className="absolute -left-[2.65rem] w-5 h-5 rounded-full border-4 shadow-md"
                    style={{ background: i % 2 === 0 ? "#1565c0" : "#2eb88a", borderColor: "rgba(255,255,255,0.2)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.3, duration: 0.4, type: "spring" }}
                  />
                  <p className="font-black text-lg mb-1" style={{ color: i % 2 === 0 ? "#60a5fa" : "#2eb88a" }}>{item.year}</p>
                  <h3 className="font-bold text-white text-lg mb-2">{item.event}</h3>
                  <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }}>{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2eb88a" }}>How We Think</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Our Philosophy</h2>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #2eb88a, #1565c0)" }} />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {PHILOSOPHY.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 0.12} direction={i === 0 ? "left" : i === 2 ? "right" : undefined}>
                <motion.div
                  className="p-8 rounded-2xl border border-border bg-white h-full"
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(21,101,192,0.09)", borderColor: "rgba(21,101,192,0.3)" }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: i % 2 === 0 ? "#1565c0" : "#2eb88a" }}>{p.label}</p>
                  <h3 className="font-bold text-foreground mb-4 text-lg">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.body}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(2,18,16,0.90), rgba(2,18,16,0.90)), url("https://images.unsplash.com/photo-1758073519996-6d3c63b4922c?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(46,184,138,0.5) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 15% 20%, rgba(21,101,192,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 6, repeat: Infinity }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 80% 80%, rgba(21,101,192,0.18) 0%, transparent 55%)" }} />
        </motion.div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <motion.h2
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Work Together?
            </motion.h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your organization and what you want to build. {"We'll"} respond within one business day.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl text-lg"
              style={{ color: "#1565c0" }}
            >
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
