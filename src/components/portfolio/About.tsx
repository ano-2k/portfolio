import { motion } from "motion/react";
import { Section } from "./Section";

const stats = [
  { value: "5+", label: "Major projects" },
  { value: "3×", label: "Dean's List" },
  { value: "96%", label: "ML accuracy" },
  { value: "6 mo", label: "Internship" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title={<>Engineer who likes shipping <span className="text-gradient">real things.</span></>}>
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
       <motion.p
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify"
>
  I am a Software Engineering graduate from{" "}
  <span className="text-foreground">SLIIT Northern Uni</span>, having
  completed a degree awarded by the{" "}
  <span className="text-foreground">University of Bedfordshire</span> and
  currently awaiting final results and graduation. I am passionate about
  leveraging technology to solve real-world problems. During my internship,
  I gained hands-on experience in{" "}
  <span className="text-foreground">Python Django development</span>,
  focusing on developing and managing scalable web applications. I also
  have practical experience in mobile application development using{" "}
  <span className="text-foreground">
    Flutter, Dart, Python, and Firebase
  </span>
  . Additionally, I have worked on{" "}
  <span className="text-foreground">
    AI-powered agricultural solutions
  </span>{" "}
  involving machine learning, deep learning, and computer vision
  technologies.
</motion.p>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl font-display font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
