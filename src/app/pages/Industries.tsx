import SEO from "../components/SEO";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, Hotel, Rocket, Briefcase, Users } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";
import { INDUSTRIES } from "../data";

const ICON_MAP: Record<string, React.ElementType> = {
  Trophy, GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, Hotel, Rocket, Briefcase, Users,
};

export default function Industries() {
  const sports = INDUSTRIES[0];
  const SportsIcon = ICON_MAP[sports.icon];
  const rest = INDUSTRIES.slice(1);

  return (
    <main className="pt-24 bg-white">
      <SEO title="Industries We Serve | Grantho Technologies" description="Custom technology solutions for sports, retail, healthcare, manufacturing, and more." url="https://grantho.com/industries" />

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
            Industries We Serve
          </motion.p>
          <motion.h1
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.08, letterSpacing: "-0.025em", maxWidth: "16ch" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Technology That Adapts to Your Industry.
          </motion.h1>
          <motion.p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Our expertise spans sports and beyond. We build technology that fits the specific demands of each industry we serve.
          </motion.p>
          <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {INDUSTRIES.map((ind) => {
              const Icon = ICON_MAP[ind.icon];
              return (
                <div key={ind.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)" }}>
                  {Icon && <Icon size={12} />}
                  {ind.name}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Featured: Sports ── */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(21,101,192,0.55) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 85% 20%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 7, repeat: Infinity }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(46,184,138,0.2) 0%, transparent 60%)" }} />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/15"
                whileHover={{ scale: 1.08 }}
              >
                {SportsIcon && <SportsIcon size={28} className="text-white" />}
              </motion.div>
              <div>
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/60 block mb-1">Featured Industry</span>
                <h2 className="font-bold text-white text-2xl">{sports.name}</h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { label: "The Challenge", body: sports.challenge, accent: "rgba(255,255,255,0.15)" },
              { label: "Technology Opportunity", body: sports.opportunity, accent: "rgba(255,255,255,0.2)" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1} direction={i === 0 ? "left" : undefined}>
                <motion.div
                  className="p-6 rounded-2xl border h-full"
                  style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)" }}
                  whileHover={{ background: "rgba(255,255,255,0.12)" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase text-white/60 mb-3">{item.label}</p>
                  <p className="text-white/80 leading-relaxed text-sm">{item.body}</p>
                </motion.div>
              </ScrollReveal>
            ))}

            <ScrollReveal direction="right">
              <motion.div
                className="p-6 rounded-2xl border-2 h-full"
                style={{ borderColor: "#2eb88a", background: "rgba(46,184,138,0.12)" }}
                whileHover={{ background: "rgba(46,184,138,0.18)" }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#2eb88a" }}>Grantho Solutions</p>
                <div className="space-y-2 mb-6">
                  {sports.solutions.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-white">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2eb88a" }} />
                      {s}
                    </div>
                  ))}
                </div>
                <Link to="/sports-technology" className="inline-flex items-center gap-2 text-white text-sm font-bold hover:gap-3 transition-all">
                  Explore Sports Tech <ArrowRight size={14} />
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── All Industries ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>All Industries</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Across Every Sector</h2>
            <p className="text-muted-foreground mb-4 max-w-xl">We bring relevant technology experience to every sector we serve—adapting our approach to each industry's unique dynamics.</p>
            <div className="w-16 h-px mb-16" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((ind, i) => {
              const Icon = ICON_MAP[ind.icon];
              return (
                <StaggerItem key={ind.name}>
                  <motion.div
                    className="p-8 rounded-2xl border border-border bg-white h-full"
                    whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(21,101,192,0.10)", borderColor: "rgba(21,101,192,0.35)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: i % 2 === 0 ? "rgba(21,101,192,0.1)" : "rgba(46,184,138,0.1)" }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {Icon && <Icon size={22} style={{ color: i % 2 === 0 ? "#1565c0" : "#2eb88a" }} />}
                    </motion.div>
                    <h3 className="font-bold text-foreground mb-4 text-lg">{ind.name}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Challenge</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{ind.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Opportunity</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{ind.opportunity}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {ind.solutions.map((s) => (
                          <span key={s} className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: i % 2 === 0 ? "rgba(21,101,192,0.08)" : "rgba(46,184,138,0.08)", color: i % 2 === 0 ? "#1565c0" : "#2eb88a" }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(2,18,16,0.90), rgba(2,18,16,0.90)), url("https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
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
              {"Don't"} See Your Industry?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              We work with organizations across many verticals. Tell us about your context and {"we'll"} guide you on the right technology approach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl text-lg"
              style={{ color: "#1565c0" }}
            >
              Talk to Us <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}

