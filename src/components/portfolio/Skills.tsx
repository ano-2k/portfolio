import { motion } from "motion/react";
import { Section } from "./Section";
import {
  Code2,
  Database,
  Smartphone,
  Brain,
  Wrench,
  Globe,
} from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "JavaScript", "Dart", "Java"],
  },

  {
    icon: Globe,
    title: "Web Development",
    items: [
      "Django",
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "REST APIs",
    ],
  },

  {
    icon: Smartphone,
    title: "Mobile Development",
    items: ["Flutter", "Firebase"],
  },

  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "Firebase Firestore"],
  },

  {
    icon: Brain,
    title: "AI & Computer Vision",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
    ],
  },

  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "PyCharm",
      "Android Studio",
      "Google Colab",
      "MySQL Workbench",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title={
        <>
          Technologies I work with{" "}
          <span className="text-gradient">
            to build modern solutions.
          </span>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g, i) => {
          const Icon = g.icon;

          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>

                <h3 className="font-display font-semibold mb-3">
                  {g.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}