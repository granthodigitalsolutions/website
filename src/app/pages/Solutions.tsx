import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Code2, Globe, Smartphone, Brain, Cpu, TrendingUp, CheckCircle2 } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../components/ScrollReveal";

const SECTIONS = [
  {
    id: "custom-software",
    icon: Code2,
    number: "01",
    title: "Custom Software Development",
    tagline: "Built exactly for your operations.",
    problem: "Generic software forces organizations to adapt their processes to rigid tools—creating inefficiencies, data gaps, and limitations that slow growth.",
    solution: "Grantho Technologies engineers purpose-built systems tailored to your exact operational requirements, workflows, and team structure.",
    capabilities: ["Business Management Systems", "CRM & Customer Management", "ERP Systems", "Inventory Management", "Booking & Reservation Systems", "Customer & Client Portals", "Admin Dashboards", "Internal Business Tools"],
    benefits: ["Precision fit to your workflows", "Scales as you grow", "Full ownership of your data", "No licensing fees for generic software"],
    accentColor: "#1565c0",
  },
  {
    id: "web",
    icon: Globe,
    number: "02",
    title: "Business & Branding Websites",
    tagline: "Your brand, engineered online.",
    problem: "Template websites fail to represent the true quality and positioning of serious organizations—leading to missed opportunities and weak first impressions.",
    solution: "We design and develop high-performance, SEO-optimized websites that accurately represent your brand and convert visitors into clients.",
    capabilities: ["Corporate Websites", "Marketing Websites", "Landing Pages & Campaigns", "Portfolio Websites", "Service Websites", "SEO-Optimized Architecture"],
    benefits: ["Designed for conversion", "SEO-ready from the start", "Fast, performant, accessible", "Brand-aligned design"],
    accentColor: "#2eb88a",
  },
  {
    id: "mobile",
    icon: Smartphone,
    number: "03",
    title: "Mobile Application Development",
    tagline: "Technology in your customers' hands.",
    problem: "Organizations without mobile presence miss the growing segment of users who expect immediate, on-the-go access to services.",
    solution: "We develop cross-platform and native mobile applications that deliver smooth, intuitive experiences for customers and internal teams alike.",
    capabilities: ["Android Application Development", "iOS Application Development", "Cross-Platform (React Native)", "Customer-Facing Apps", "Employee & Team Apps", "Sports & Event Apps"],
    benefits: ["Single codebase, multiple platforms", "Native-quality performance", "App Store & Play Store deployment", "Long-term support"],
    accentColor: "#1565c0",
  },
  {
    id: "ai",
    icon: Brain,
    number: "04",
    title: "AI & Business Automation",
    tagline: "Work smarter. Scale faster.",
    problem: "Repetitive manual processes consume time, increase errors, and prevent teams from focusing on higher-value work.",
    solution: "Grantho builds intelligent automation workflows and AI-powered systems that reduce manual effort, improve accuracy, and enable scale.",
    capabilities: ["Workflow Automation", "WhatsApp Business Automation", "AI-Powered Decision Workflows", "Business Process Automation", "API & Third-Party Integrations", "Cloud Service Integrations"],
    benefits: ["Reduce operational overhead", "Eliminate manual errors", "Scale without proportional headcount", "Actionable data and insights"],
    accentColor: "#2eb88a",
  },
  {
    id: "iot",
    icon: Cpu,
    number: "05",
    title: "IoT Systems & Connected Solutions",
    tagline: "Connect your operations. See everything.",
    problem: "Organizations managing physical assets, equipment, or environments operate blind without real-time data from their infrastructure.",
    solution: "We design and deploy IoT solutions that connect devices, collect sensor data, and surface actionable insights through real-time dashboards.",
    capabilities: ["Connected Device Architecture", "Sensor-Based Monitoring Systems", "Real-Time Data Dashboards", "Remote Monitoring & Alerts", "Sports IoT Systems", "Smart Automation Systems", "Data Collection & Analysis"],
    benefits: ["Real-time operational visibility", "Proactive issue detection", "Data-driven decision making", "Reduced downtime and waste"],
    accentColor: "#1565c0",
  },
  {
    id: "marketing",
    icon: TrendingUp,
    number: "06",
    title: "Digital Marketing & Brand Growth",
    tagline: "Grow your brand with strategy.",
    problem: "Organizations with strong products struggle to reach the right audience without a coherent digital marketing strategy.",
    solution: "We create and execute targeted digital marketing programs that build brand authority, drive qualified traffic, and generate growth.",
    capabilities: ["Brand Strategy & Positioning", "Social Media Marketing", "Content Strategy & Creation", "Digital Advertising Campaigns", "Search Engine Optimization (SEO)", "Online Growth Consulting"],
    benefits: ["Measurable growth outcomes", "Audience-aligned strategy", "Integrated digital presence", "Long-term brand equity"],
    accentColor: "#2eb88a",
  },
];

export default function Solutions() {
  return (
    <main className="pt-24 bg-white">

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
            What We Build
          </motion.p>
          <motion.h1
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.08, letterSpacing: "-0.025em", maxWidth: "14ch" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Solutions Engineered Around Your Ambition.
          </motion.h1>
          <motion.p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            From sports technology to enterprise software, every solution is purpose-built around your organization's real-world requirements.
          </motion.p>

          {/* Solution nav pills */}
          <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {SECTIONS.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200" style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)" }}>
                <span className="font-mono opacity-50">{sec.number}</span>{" "}
                {sec.id === "ai" ? "AI & ML" : `${sec.title.split(" ")[0]} ${sec.title.split(" ")[1]}`}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Solution Sections ── */}
      {SECTIONS.map((sec, sIdx) => {
        const Icon = sec.icon;
        const isEven = sIdx % 2 === 0;
        return (
          <section
            key={sec.id}
            id={sec.id}
            className="py-24 px-6 relative overflow-hidden"
            style={{ backgroundColor: isEven ? "#ffffff" : "#f8faff" }}
          >
            {/* Subtle section accent */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${sec.accentColor}25, transparent)` }} />

            <div className="max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-16 items-start ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>

                <ScrollReveal direction={isEven ? "left" : "right"}>
                  {/* Number + Icon header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: `${sec.accentColor}15` }}
                      whileHover={{ scale: 1.08, background: `${sec.accentColor}25` }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={28} style={{ color: sec.accentColor }} />
                    </motion.div>
                    <div>
                      <div className="font-mono text-xs text-muted-foreground mb-0.5">{sec.number} / 06</div>
                      <div className="text-xs font-bold tracking-widest uppercase" style={{ color: sec.accentColor }}>Solution</div>
                    </div>
                  </div>

                  <h2 className="font-bold text-foreground mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
                    {sec.title}
                  </h2>
                  <p className="font-semibold text-lg mb-6" style={{ color: sec.accentColor }}>"{sec.tagline}"</p>

                  <div className="space-y-5 mb-8">
                    <div className="p-4 rounded-xl border-l-2" style={{ borderColor: `${sec.accentColor}60`, backgroundColor: `${sec.accentColor}06` }}>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">The Challenge</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">{sec.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl border-l-2" style={{ borderColor: sec.accentColor, backgroundColor: `${sec.accentColor}08` }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: sec.accentColor }}>Our Solution</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">{sec.solution}</p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-white transition-opacity hover:opacity-90 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${sec.accentColor}, ${sec.accentColor}cc)` }}
                  >
                    Discuss Your Project <ArrowRight size={16} />
                  </Link>
                </ScrollReveal>

                <ScrollReveal direction={isEven ? "right" : "left"} delay={0.12} className={!isEven ? "lg:col-start-1" : ""}>
                  <div className="space-y-5">
                    {/* Capabilities */}
                    <motion.div
                      className="p-6 rounded-2xl border border-border bg-white"
                      whileHover={{ boxShadow: `0 8px 30px ${sec.accentColor}18` }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: sec.accentColor }}>Capabilities</p>
                      <div className="grid grid-cols-2 gap-3">
                        {sec.capabilities.map((cap, i) => (
                          <motion.div
                            key={cap}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: sec.accentColor }} />
                            {cap}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                      className="p-6 rounded-2xl border-2"
                      style={{ borderColor: `${sec.accentColor}30`, background: `${sec.accentColor}06` }}
                      whileHover={{ boxShadow: `0 8px 30px ${sec.accentColor}15` }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: sec.accentColor }}>Key Benefits</p>
                      <div className="space-y-3">
                        {sec.benefits.map((b, i) => (
                          <motion.div
                            key={b}
                            className="flex items-center gap-3 text-sm text-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                          >
                            <CheckCircle2 size={15} style={{ color: sec.accentColor, flexShrink: 0 }} />
                            {b}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(5,19,43,0.90), rgba(5,19,43,0.90)), url("https://images.unsplash.com/photo-1762281429414-5ee5f2dbb243?w=1600&q=80")`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(21,101,192,0.55) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 85% 20%, rgba(46,184,138,0.2) 0%, transparent 55%)" }} />
        </div>
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 6, repeat: Infinity }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(46,184,138,0.2) 0%, transparent 60%)" }} />
        </motion.div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/60 mb-4">Get Started</p>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Not Sure Which Solution Fits?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Tell us about your organization and challenge. {"We'll"} guide you toward the right technology approach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-xl text-lg"
              style={{ color: "#1565c0" }}
            >
              Start a Conversation <ArrowUpRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
