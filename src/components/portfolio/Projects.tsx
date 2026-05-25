import { motion } from "motion/react";
import { Section } from "./Section";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Multi-Modal Intelligent System for Chilli Farming",
    tag: "Final Year Project",
    desc: "AI-based agricultural system combining ML, Computer Vision and IoT. 96% accuracy in aflatoxin risk prediction with hybrid ML models, YOLO segmentation for fruit analysis, and a novel Robotic Pickability Index.",
    stack: ["Python", "YOLO", "Flask", "Flutter", "IoT"],
    accent: "from-primary/30 to-accent/20",
    featured: true,
  },
  {
  title: "Internship Management System",
  tag: "Industry Project · Internship",
  desc: "Contributed to both frontend and backend development of an internship management platform during my internship at Vulture Lines. Built responsive React interfaces, developed Django backend features, implemented REST APIs, handled database operations, and integrated frontend workflows with production systems.",
  stack: ["Django", "React", "REST API", "MySQL"],
  accent: "from-accent/30 to-primary/20",
},
  {
    title: "SLIITNU Panel",
    tag: "Group Project · 2nd Yr",
    desc: "Comprehensive web-based admin portal digitising university processes — being adopted by SLIIT Northern University.",
    stack: ["Django", "HTML", "CSS", "Bootstrap", "SQLite"],
    link: "https://nupannel.zentrixon.com",
    accent: "from-accent/30 to-primary/20",
  },
  {
    title: "Learn Quick",
    tag: "Mobile · 2nd Yr",
    desc: "Mobile app that auto-generates quiz questions from any user-input topic for fast revision.",
    stack: ["Java", "Firebase"],
    accent: "from-primary/20 to-accent/30",
  },
  {
    title: "Book World",
    tag: "E-Commerce · 1st Yr",
    desc: "Full-stack book selling platform with custom frontend and backend implementation.",
    stack: ["PHP", "JavaScript", "HTML", "CSS"],
    accent: "from-accent/20 to-primary/30",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="05 — Selected work" title={<>Projects I'm <span className="text-gradient">proud of.</span></>}>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link ?? "#"}
            target={p.link ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`group relative glass rounded-3xl p-6 md:p-8 overflow-hidden hover:-translate-y-1 transition-all hover:shadow-card ${p.featured ? "md:col-span-2" : ""}`}
          >
            <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary mb-2">
                    {p.featured && <Sparkles className="w-3 h-3" />}
                    {p.tag}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">{p.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
