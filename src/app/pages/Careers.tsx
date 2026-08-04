import SEO from "../components/SEO";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Send, Briefcase } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { OPEN_POSITIONS } from "../data";

const CULTURE_POINTS = [
  { title: "Meaningful Work", desc: "We focus on real problems—technology that makes organizations operate better and people's lives simpler.", accent: "#1565c0" },
  { title: "Collaborative Environment", desc: "We work closely together, share context openly, and treat each perspective as valuable to the outcome.", accent: "#2eb88a" },
  { title: "Continuous Learning", desc: "We encourage curiosity, support skill development, and invest in growing our team's technical and professional capabilities.", accent: "#1565c0" },
  { title: "Ownership & Accountability", desc: "Every team member takes full ownership of their work—with the autonomy and trust to execute independently.", accent: "#2eb88a" },
  { title: "Quality Over Speed", desc: "We take pride in building things right. We move fast but never compromise on engineering quality.", accent: "#1565c0" },
  { title: "Long-Term Thinking", desc: "We build for the long run—both in the technology we create and in the team we are building.", accent: "#2eb88a" },
];

const PERKS = [
  { label: "Remote Friendly", desc: "Work from anywhere with flexible arrangements." },
  { label: "Real Ownership", desc: "Take full responsibility for impactful systems." },
  { label: "Learning Budget", desc: "Invest in your skills with our support." },
  { label: "Direct Access", desc: "Work directly with founders and decision-makers." },
  { label: "Diverse Projects", desc: "Exposure across sports tech, web, AI, IoT and more." },
  { label: "Growth Path", desc: "Early-stage opportunity to grow with the company." },
];

export default function Careers() {
  return (
    <main className="pt-24 bg-white">
      <SEO title="Careers | Grantho Technologies" description="Join Grantho Technologies in Coimbatore. We are hiring talented developers, designers, and engineers." url="https://grantho.com/careers" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 px-6" style={{ minHeight: "60vh", display: "flex", alignItems: "center", backgroundColor: "#05132b" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(21,101,192,0.35) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 85% 40%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #1565c0, #2eb88a, transparent)" }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2 }} />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p className="font-mono text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#2eb88a" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                Join the Team
              </motion.p>
              <motion.h1
                className="font-bold text-white mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.08, letterSpacing: "-0.025em" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Build Technology.{" "}
                <span style={{ color: "#2eb88a" }}>Build Your Future.</span>
              </motion.h1>
              <motion.p className="text-lg mb-10 leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                Join a team focused on solving meaningful problems through technology, creativity, and collaboration.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <a href="#openings" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl" style={{ color: "#1565c0" }}>
                  View Openings <ArrowRight size={16} />
                </a>
                <a href={`mailto:contact@granthoit.com?subject=Profile Submission — Grantho Technologies`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold border transition-colors" style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)" }}>
                  Send Your Profile <Send size={16} />
                </a>
              </motion.div>
            </div>

            {/* Perk pills */}
            <div className="grid grid-cols-2 gap-3">
              {PERKS.map((perk, i) => (
                <motion.div
                  key={perk.label}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  whileHover={{ background: "rgba(255,255,255,0.10)", borderColor: "rgba(46,184,138,0.5)" }}
                >
                  <div className="text-xs font-bold text-white mb-1">{perk.label}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{perk.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>Why Grantho</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Why Join Grantho Technologies</h2>
            <p className="text-muted-foreground max-w-xl mb-4">We are an early-stage technology company building real products for real organizations. If you want ownership, craft, and meaningful work—this is the right environment.</p>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CULTURE_POINTS.map((point) => (
              <StaggerItem key={point.title}>
                <motion.div
                  className="p-7 rounded-2xl border border-border bg-white h-full"
                  whileHover={{ y: -6, boxShadow: `0 16px 40px ${point.accent}18`, borderColor: `${point.accent}40` }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="w-8 h-0.5 rounded-full mb-5" style={{ background: point.accent }} />
                  <h3 className="font-bold text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1782338937804-e6b9e0c683f0?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(21,101,192,0.35) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#2eb88a" }}>The Environment</p>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>How We Work</h2>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #2eb88a, #1565c0)" }} />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Our Culture",
                title: "Ambitious, grounded, and collaborative.",
                body: "We are a small team building serious technology. We move quickly, communicate directly, and trust each other to deliver. There is no bureaucracy—just clear goals, shared accountability, and the satisfaction of building things that work.",
                accent: "#60a5fa",
              },
              {
                label: "Learning & Growth",
                title: "Grow through the work you do.",
                body: "At Grantho, growth comes from real ownership and real challenges. You will work across the full scope of building technology products—from architecture decisions to deployment, from design discussions to client context.",
                accent: "#2eb88a",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.12} direction={i === 0 ? "left" : "right"}>
                <motion.div
                  className="p-8 rounded-2xl h-full"
                  style={{ border: `1px solid rgba(255,255,255,0.12)`, borderLeft: `3px solid ${item.accent}`, background: "rgba(255,255,255,0.07)" }}
                  whileHover={{ y: -4, background: "rgba(255,255,255,0.11)" }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: item.accent }}>{item.label}</p>
                  <h3 className="font-bold text-white mb-4 text-xl">{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item.body}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section id="openings" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>Open Positions</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Current Openings</h2>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>

          {OPEN_POSITIONS.length === 0 ? (
            <ScrollReveal>
              <motion.div
                className="p-14 rounded-2xl border border-border bg-white text-center"
                whileHover={{ boxShadow: "0 12px 40px rgba(21,101,192,0.08)" }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Briefcase size={44} style={{ color: "rgba(21,101,192,0.3)" }} className="mx-auto mb-5" />
                </motion.div>
                <h3 className="font-bold text-foreground mb-3 text-xl">No Open Positions Right Now</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
                  {"We don't have an open role that matches your profile right now—but we're always interested in meeting talented people."}
                </p>
                <a
                  href="mailto:contact@granthoit.com?subject=Profile Submission — Grantho Technologies"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-2xl text-white hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: "linear-gradient(135deg, #1565c0, #1a7de8)" }}
                >
                  Send Your Profile <Send size={16} />
                </a>
              </motion.div>
            </ScrollReveal>
          ) : (
            <div className="space-y-4">
              {OPEN_POSITIONS.map((job, i) => (
                <ScrollReveal key={job.title} delay={i * 0.06}>
                  <motion.div
                    className="p-6 rounded-2xl border border-border bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    whileHover={{ y: -2, borderColor: "rgba(21,101,192,0.4)", boxShadow: "0 8px 24px rgba(21,101,192,0.10)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{job.title}</h3>
                      <div className="flex gap-3 mt-1.5">
                        <span className="text-xs text-muted-foreground">{job.type}</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{job.location}</span>
                      </div>
                    </div>
                    <button className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity" style={{ background: "rgba(21,101,192,0.1)", color: "#1565c0" }}>
                      Apply Now <ArrowRight size={14} />
                    </button>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(2,18,16,0.90), rgba(2,18,16,0.90)), url("https://images.unsplash.com/photo-1759771963624-0f62023c4c80?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(46,184,138,0.5) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 15% 20%, rgba(21,101,192,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 6, repeat: Infinity }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(21,101,192,0.15) 0%, transparent 60%)" }} />
        </motion.div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              {"Don't"} Wait for the Right Opening.
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              If you are a talented technologist, designer, or builder who cares about quality work—we want to hear from you.
            </p>
            <a
              href="mailto:contact@granthoit.com?subject=Profile Submission — Grantho Technologies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl text-lg"
              style={{ color: "#1565c0" }}
            >
              Send Your Profile <Send size={20} />
            </a>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}

