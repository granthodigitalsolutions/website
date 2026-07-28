import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "../data";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/download.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto max-w-7xl mt-3 px-6 h-16 flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border border-border shadow-lg shadow-black/5"
              : "bg-white/70 backdrop-blur-sm border border-border/60"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <ImageWithFallback src={logoSrc} alt="Grantho Technologies Logo" className="w-9 h-9 object-contain" />
            <span className="font-bold text-foreground text-base tracking-tight hidden sm:block">
              Granthor<span className="text-primary"> Technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div className="h-0.5 bg-primary mt-0.5 rounded-full" layoutId="nav-underline" />
                )}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              Start a Project <ArrowRight size={14} />
            </Link>
            <button
              className="lg:hidden w-9 h-9 rounded-lg border border-border bg-white flex items-center justify-center text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-white" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="relative h-full flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={item.href}
                      className={`block py-4 text-2xl font-bold border-b border-border transition-colors ${
                        isActive(item.href) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="block w-full text-center py-4 bg-primary text-primary-foreground font-bold rounded-2xl text-lg"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
