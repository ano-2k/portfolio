import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "anoaadhik@gmail.com", href: "mailto:anoaadhik@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 70 553 7781", href: "tel:+94705537781" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ano2k", href: "https://linkedin.com/in/ano2k" },
  { icon: Github, label: "GitHub", value: "github.com/ano-2k", href: "https://github.com/ano-2k" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]" />
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[700px] h-[400px] rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">05 — Contact</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Let's build <span className="text-gradient">something good.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Open to internships, junior roles, freelance and interesting collaborations.
            Drop a message — I usually reply within a day.
          </p>

          <a href="mailto:anoaadhik@gmail.com" className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all hover:-translate-y-0.5">
            anoaadhik@gmail.com <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-2xl p-5 text-left hover:border-primary/50 hover:-translate-y-1 transition-all"
              >
                <Icon className="w-5 h-5 text-primary mb-3" />
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="text-sm mt-1 truncate">{c.value}</div>
              </motion.a>
            );
          })}
        </div>

        <footer className="mt-20 border-t border-border/60">
  <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* LEFT SIDE */}
    <div className="flex flex-col items-center md:items-start gap-2">
      <h3 className="font-display text-lg font-semibold text-foreground">
        Anojan Uthayakumar
      </h3>

      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 text-primary" />
        Urumpirai, Jaffna · Sri Lanka
      </div>
    </div>

    {/* CENTER */}
    <div className="text-center">
      <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
        Passionate Software Engineering student focused on
        Full Stack Development, AI/ML, and creating modern
        digital experiences.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col items-center md:items-end gap-2">
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          GitHub
        </a>

        <span className="text-border">•</span>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          LinkedIn
        </a>

        <span className="text-border">•</span>

        <a
          href="mailto:yourmail@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          Email
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Anojan Uthayakumar
      </p>
    </div>
  </div>
</footer>
      </div>
    </section>
  );
}
