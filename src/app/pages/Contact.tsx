import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Plus, Minus } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import MagneticButton from "../components/MagneticButton";
import { COMPANY, FAQS } from "../data";
import SEO from "../components/SEO";

const SERVICES = [
  "Sports Technology", "Custom Software", "Website Development",
  "Mobile Application", "AI & Automation", "IoT Solution", "Digital Marketing", "Other",
];

const BUDGETS = [
  "Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹15,00,000", "₹15,00,000+", "Prefer to discuss",
];

const NEXT_STEPS = [
  "We review your inquiry within 24 hours",
  "We schedule a discovery call",
  "We propose a tailored approach",
  "We start building together",
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", service: "", budget: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all text-sm";

  return (
    <main className="pt-24 bg-white">
      <SEO 
        title="Contact Us | Grantho Technologies" 
        description="Get in touch with Grantho Technologies in Coimbatore to discuss custom software development, mobile apps, or enterprise solutions for your business."
        url="https://grantho.com/contact"
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Grantho Technologies",
          "image": "https://grantho.com/favicon.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          }
        })}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 px-6" style={{ minHeight: "50vh", display: "flex", alignItems: "center", backgroundColor: "#05132b" }}>
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
            Get In Touch
          </motion.p>
          <motion.h1
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.08, letterSpacing: "-0.025em", maxWidth: "14ch" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {"Let's Build Something"} <span style={{ color: "#2eb88a" }}>Meaningful.</span>
          </motion.h1>
          <motion.p className="text-lg max-w-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            Tell us about your organization and what you want to build. {"We'll"} respond within one business day.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-12 pb-24 px-6" style={{ backgroundColor: "#f8faff" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* ─ Contact Info Sidebar ─ */}
          <ScrollReveal direction="left" className="lg:col-span-1">
            <div className="space-y-5">

              {/* Contact Details */}
              <motion.div
                className="p-6 rounded-2xl border border-border bg-white"
                whileHover={{ boxShadow: "0 8px 30px rgba(21,101,192,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { Icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                    { Icon: Phone, label: "Phone", value: COMPANY.phone, href: "tel:+919345531533" },
                    { Icon: MapPin, label: "Location", value: COMPANY.location, href: undefined },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(21,101,192,0.1)" }}>
                        <Icon size={16} style={{ color: "#1565c0" }} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-foreground font-semibold hover:text-primary transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm text-foreground font-semibold">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Response */}
              <motion.div
                className="p-6 rounded-2xl border-2"
                style={{ borderColor: "rgba(46,184,138,0.3)", background: "rgba(46,184,138,0.06)" }}
                whileHover={{ boxShadow: "0 8px 30px rgba(46,184,138,0.12)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#2eb88a" }} />
                  <h4 className="font-bold text-foreground">Response Commitment</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We respond to every inquiry within one business day. For urgent matters, reach us directly via email.
                </p>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                className="p-6 rounded-2xl border border-border bg-white"
                whileHover={{ boxShadow: "0 8px 30px rgba(21,101,192,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-bold text-foreground mb-5">What happens next?</h4>
                <div className="space-y-4">
                  {NEXT_STEPS.map((step, i) => (
                    <motion.div
                      key={step}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: i % 2 === 0 ? "#1565c0" : "#2eb88a" }}>
                        {i + 1}
                      </div>
                      {step}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ─ Form ─ */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="p-14 rounded-2xl border-2 text-center flex flex-col items-center justify-center gap-6 min-h-[500px]"
                  style={{ borderColor: "rgba(46,184,138,0.4)", background: "rgba(46,184,138,0.06)" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle2 size={60} style={{ color: "#2eb88a" }} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-2xl mb-3">{"We've received your inquiry."}</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      {"We'll review your project details and get back to you within one business day."}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl border border-border bg-white space-y-5"
                  whileHover={{ boxShadow: "0 12px 40px rgba(21,101,192,0.08)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-6">
                    <h3 className="font-bold text-foreground text-xl mb-1">Project Inquiry</h3>
                    <div className="h-px mt-3" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a, transparent)" }} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Full Name *</label>
                      <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Company / Organization</label>
                      <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your organization" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Email *</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Service Interested In</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass}>
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Project Budget</label>
                      <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={inputClass}>
                        <option value="">Select budget range</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Project Description *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about your organization, the problem you want to solve, and what you are looking to build..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 font-bold rounded-xl text-white hover:opacity-90 transition-opacity shadow-lg text-base"
                    style={{ background: "linear-gradient(135deg, #1565c0, #1a7de8)" }}
                  >
                    Submit Project Inquiry <Send size={18} />
                  </MagneticButton>

                  <p className="text-xs text-muted-foreground text-center">
                    Your information is kept confidential and never shared with third parties.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#1565c0" }}>FAQ</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Frequently Asked Questions</h2>
            <div className="w-16 h-px mb-12" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
          </ScrollReveal>
          <div className="space-y-3">
            {FAQS.slice(0, 6).map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <motion.div
                  className="rounded-2xl border border-border bg-white overflow-hidden"
                  whileHover={{ borderColor: "rgba(21,101,192,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/20 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-foreground pr-4 text-sm">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                      {openFaq === i
                        ? <Minus size={16} style={{ color: "#1565c0", flexShrink: 0 }} />
                        : <Plus size={16} className="text-muted-foreground flex-shrink-0" />}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
