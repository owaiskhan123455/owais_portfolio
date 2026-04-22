// components/sections/Skills.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../../data/skills";
import { cn } from "../../lib/utils";

// ... rest unchanged

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Tech Stack & Skills</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Technologies I work with daily to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                        transition={{ duration: 1, delay: idx * 0.1 + i * 0.1 }}
                        className={cn(
                          "h-full rounded-full",
                          skill.name === "PHP" || skill.name === "Laravel"
                            ? "bg-accent"
                            : "bg-gradient-to-r from-accent to-violet-400"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;