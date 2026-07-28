import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Trophy, Users, Calendar, CreditCard, BarChart3, Wifi, Award, ClipboardList } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import MagneticButton from "../components/MagneticButton";

const SPORTS_SECTIONS = [
  {
    title: "Tournament Management Systems",
    icon: Trophy,
    description: "Comprehensive digital platforms for managing tournaments from registration to final results. Handle multiple categories, brackets, scheduling, and real-time scoring.",
    features: ["Multi-category bracket management", "Automated scheduling & fixtures", "Real-time score entry", "Live results & rankings", "Public-facing results portals", "Export & share capabilities"],
    accent: "#1565c0",
  },
  {
    title: "Academy Management Systems",
    icon: ClipboardList,
    description: "End-to-end platforms for sports academies covering student management, fee collection, curriculum tracking, and coach administration.",
    features: ["Student enrollment & profiles", "Batch & class management", "Fee & payment tracking", "Attendance management", "Progress & performance tracking", "Parent communication"],
    accent: "#2eb88a",
  },
  {
    title: "Athlete & Registration Management",
    icon: Users,
    description: "Streamlined digital registration for athletes, students, and participants with profile management and document handling.",
    features: ["Online registration forms", "Document upload & verification", "Profile management", "Bulk athlete data management", "Category-based registration", "ID card generation"],
    accent: "#1565c0",
  },
  {
    title: "Event Operations",
    icon: Calendar,
    description: "Platforms to manage the full operational lifecycle of sports events—from participant management to on-site execution.",
    features: ["Hall ticket generation", "Check-in management", "Draw & seeding systems", "Schedule publishing", "Official communications", "Event reporting"],
    accent: "#2eb88a",
  },
  {
    title: "Payment & Financial Management",
    icon: CreditCard,
    description: "Secure, integrated payment processing for fees, registrations, and memberships with full financial reporting.",
    features: ["Online payment gateway integration", "Automated fee reminders", "Payment receipts & reports", "Refund management", "Multi-method payment support", "Financial dashboards"],
    accent: "#1565c0",
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
    description: "Data intelligence tools that surface meaningful insights from tournament, athlete, and operational data.",
    features: ["Custom reporting dashboards", "Performance analytics", "Participation trends", "Revenue reporting", "Export to PDF & Excel", "Historical data comparison"],
    accent: "#2eb88a",
  },
  {
    title: "Notifications & Communication",
    icon: Wifi,
    description: "Automated communication workflows that keep athletes, coaches, and administrators informed at every stage.",
    features: ["WhatsApp Business automation", "SMS notifications", "Email communications", "Push notifications (mobile)", "Broadcast messaging", "Event-triggered alerts"],
    accent: "#1565c0",
  },
  {
    title: "Certificates & Recognition",
    icon: Award,
    description: "Automated digital certificate generation for participation, achievement, and recognition.",
    features: ["Custom certificate templates", "Bulk PDF generation", "Digital delivery", "QR code verification", "Multi-category certificates", "Automated distribution"],
    accent: "#2eb88a",
  },
];

const ECOSYSTEM_NODES = ["Athletes", "Coaches", "Organizers", "Administrators", "Events", "Payments", "Results", "Analytics"];

const PROCESS_FLOW = [
  { step: "01", label: "Registration" },
  { step: "02", label: "Verification" },
  { step: "03", label: "Payment" },
  { step: "04", label: "Scheduling" },
  { step: "05", label: "Participation" },
  { step: "06", label: "Results" },
  { step: "07", label: "Certificates" },
  { step: "08", label: "Analytics" },
];

export default function SportsTech() {
  return (
    <main className="pt-24 bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 px-6" style={{ minHeight: "65vh", display: "flex", alignItems: "center", backgroundColor: "#05132b" }}>
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(21,101,192,0.35) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 85% 40%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #1565c0, #2eb88a, transparent)" }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2 }} />

        {/* Animated pulsing orb */}
        <motion.div
          className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(46,184,138,0.18) 0%, transparent 70%)", transform: "translate(30%, -20%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.p className="font-mono text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#2eb88a" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Sports Technology — Flagship Capability
          </motion.p>
          <motion.h1
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", lineHeight: 1.06, letterSpacing: "-0.03em", maxWidth: "16ch" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Technology Built to Move Sports Forward.
          </motion.h1>
          <motion.p className="text-lg mb-10 leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            Digital platforms, automation, and connected systems engineered for sports organizations, academies, tournaments, athletes, and events.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Link to="/contact">
              <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl text-base" style={{ color: "#1565c0" }}>
                Discuss a Project <ArrowRight size={18} />
              </MagneticButton>
            </Link>
            <a href="#capabilities" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base border transition-colors" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
              Explore Capabilities <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section id="capabilities" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>What We Build for Sports</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Platform Capabilities</h2>
            <p className="text-muted-foreground max-w-xl mb-4">Every capability represents a system or module that Grantho Technologies engineers for sports organizations.</p>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPORTS_SECTIONS.map((sec) => {
              const Icon = sec.icon;
              return (
                <StaggerItem key={sec.title}>
                  <motion.div
                    className="p-8 rounded-2xl border border-border bg-white h-full"
                    whileHover={{ y: -6, boxShadow: `0 16px 40px ${sec.accent}18`, borderColor: `${sec.accent}40` }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${sec.accent}15` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon size={22} style={{ color: sec.accent }} />
                      </motion.div>
                      <h3 className="font-bold text-foreground text-lg pt-1">{sec.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{sec.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {sec.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-foreground/70">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: sec.accent }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Ecosystem Diagram ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1746470427617-91e8dd28298d?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(46,184,138,0.25) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2eb88a" }}>The Platform Ecosystem</p>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Everything Connected. Everything Managed.</h2>
            <p className="mb-16 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>All roles, events, data, and processes—unified through the Grantho Sports Technology platform.</p>
          </ScrollReveal>
          <div className="relative flex items-center justify-center" style={{ height: 460 }}>
            {/* Center node */}
            <motion.div
              className="relative z-10 w-44 h-44 rounded-3xl flex items-center justify-center border-2 text-center bg-white shadow-2xl"
              style={{ borderColor: "#1565c0" }}
              animate={{ boxShadow: ["0 0 20px rgba(21,101,192,0.12)", "0 0 50px rgba(21,101,192,0.28)", "0 0 20px rgba(21,101,192,0.12)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div>
                <Trophy size={32} className="mx-auto mb-2" style={{ color: "#2eb88a" }} />
                <div className="text-foreground font-bold text-sm leading-tight">Grantho Sports<br />Technology</div>
              </div>
            </motion.div>

            {/* Connecting lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {ECOSYSTEM_NODES.map((_, i) => {
                const angle = (i / ECOSYSTEM_NODES.length) * Math.PI * 2 - Math.PI / 2;
                const r = 185;
                const cx = 50 + (Math.cos(angle) * r / 5);
                const cy = 50 + (Math.sin(angle) * r / 4.6);
                return (
                  <motion.line
                    key={i}
                    x1="50%" y1="50%"
                    x2={`${cx}%`} y2={`${cy}%`}
                    stroke={i % 2 === 0 ? "#1565c0" : "#2eb88a"}
                    strokeWidth="0.8"
                    strokeDasharray="4 6"
                    strokeOpacity="0.35"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                  />
                );
              })}
            </svg>

            {/* Surrounding nodes */}
            {ECOSYSTEM_NODES.map((node, i) => {
              const angle = (i / ECOSYSTEM_NODES.length) * Math.PI * 2 - Math.PI / 2;
              const r = 185;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <motion.div
                  key={node}
                  className="absolute flex items-center justify-center text-xs font-bold text-foreground text-center border-2 bg-white rounded-2xl shadow-sm"
                  style={{ width: 82, height: 82, left: `calc(50% + ${x}px - 41px)`, top: `calc(50% + ${y}px - 41px)`, borderColor: i % 2 === 0 ? "rgba(21,101,192,0.3)" : "rgba(46,184,138,0.3)", zIndex: 2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, borderColor: i % 2 === 0 ? "#1565c0" : "#2eb88a" }}
                >
                  {node}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Registration to Results Flow ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>End-to-End Flow</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>From Registration to Results</h2>
            <p className="text-muted-foreground max-w-xl mb-16">A complete, automated journey for athletes and organizers.</p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3 items-center">
            {PROCESS_FLOW.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 0.07}>
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex flex-col items-center gap-1 p-5 rounded-2xl border border-border bg-white min-w-[100px] text-center"
                    whileHover={{ y: -4, borderColor: "#1565c0", boxShadow: "0 8px 24px rgba(21,101,192,0.12)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="font-mono font-black text-lg" style={{ color: "#1565c0" }}>{step.step}</div>
                    <div className="text-foreground font-semibold text-sm">{step.label}</div>
                  </motion.div>
                  {i < PROCESS_FLOW.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 + 0.3 }}
                    >
                      <ArrowRight size={16} style={{ color: "#1565c0", opacity: 0.4 }} className="hidden sm:block" />
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sports IoT ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1782330300444-4acba20c673e?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(46,184,138,0.25) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <ScrollReveal direction="left">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2eb88a" }}>Connected Technology</p>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Sports IoT Solutions</h2>
            <p className="leading-relaxed mb-5 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              Grantho Technologies engineers IoT systems designed for the unique demands of sports environments—connecting sensors, equipment, and data platforms to deliver real-time insights and automation.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              These are capabilities we engineer to specification—tailored connected systems for sports academies, training centers, and event facilities.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-white hover:opacity-90 transition-opacity shadow-md" style={{ background: "linear-gradient(135deg, #2eb88a, #25a07a)" }}>
              Discuss a Sports IoT Project <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {[
              { title: "Sensor-Based Monitoring", desc: "Real-time data from connected sensors in training environments." },
              { title: "Connected Equipment", desc: "Smart equipment integration for performance data collection." },
              { title: "Performance Data", desc: "Athlete performance metrics captured and analyzed automatically." },
              { title: "Real-Time Dashboards", desc: "Live visualization of operational and performance data." },
              { title: "Automation Triggers", desc: "Condition-based automation powered by live IoT data." },
              { title: "Data Reporting", desc: "Historical trend analysis and performance reporting." },
            ].map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-5 rounded-xl h-full"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)" }}
                  whileHover={{ background: "rgba(255,255,255,0.12)", borderColor: i % 2 === 0 ? "rgba(46,184,138,0.5)" : "rgba(96,165,250,0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: i % 2 === 0 ? "#2eb88a" : "#60a5fa" }} />
                  <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(2,18,16,0.90), rgba(2,18,16,0.90)), url("https://images.unsplash.com/photo-1762281429312-77566d0ad182?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
        </div>
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 6, repeat: Infinity }}>
        </motion.div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/60 mb-4">Get Started</p>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Ready to Build Your Sports Platform?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your sports organization, event, or academy. {"We'll"} engineer the right solution.
            </p>
            <Link to="/contact">
              <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl text-lg" style={{ color: "#1565c0" }}>
                Start a Sports Technology Project <ArrowRight size={20} />
              </MagneticButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
