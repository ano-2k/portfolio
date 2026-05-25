import { motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
   { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
   { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
 
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between ${scrolled ? "glass rounded-full mx-4 md:mx-auto px-6" : ""}`}>
        <a href="#top" className="font-display font-bold tracking-tight text-lg">
          <span className="text-gradient">Anojan</span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-shadow">
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
