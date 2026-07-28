import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { COMPANY, SOCIAL_LINKS } from "../data";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/download.png";

const FOOTER_COLS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sports Technology", href: "/sports-technology" },
      { label: "Custom Software", href: "/solutions#custom-software" },
      { label: "Web Development", href: "/solutions#web" },
      { label: "Mobile Apps", href: "/solutions#mobile" },
      { label: "AI & Automation", href: "/solutions#ai" },
      { label: "IoT Solutions", href: "/solutions#iot" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Our Work", href: "/work" },
      { label: "Case Studies", href: "/work" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      {/* CTA Strip */}
      <div className="relative overflow-hidden py-16 px-6 text-center bg-white border-b border-border">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #1565c0, #2eb88a)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(21,101,192,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,192,0.04) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-8 pointer-events-none" style={{ background: "radial-gradient(circle, #2eb88a, transparent 70%)", transform: "translate(30%, -40%)" }} />
        <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-3 relative z-10">Ready to get started?</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 relative z-10">{"Let's Build What Comes Next."}</h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-opacity text-lg relative z-10 shadow-xl shadow-primary/20"
        >
          Start a Conversation <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ImageWithFallback src={logoSrc} alt="Grantho Technologies Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl text-foreground">Grantho Technologies</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building intelligent digital solutions for sports organizations and ambitious businesses.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: "Instagram" },
                { href: SOCIAL_LINKS.facebook, Icon: Facebook, label: "Facebook" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {year} Grantho Technologies. All Rights Reserved.</p>
          <p className="text-xs opacity-60">Technology Solutions for Ambitious Organizations.</p>
        </div>
      </div>
    </footer>
  );
}
