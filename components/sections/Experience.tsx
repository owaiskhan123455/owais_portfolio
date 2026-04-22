// components/sections/Experience.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../../data/experience";
import { Calendar, MapPin } from "lucide-react";

// ... rest unchanged

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Work Experience</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            My professional journey as a developer.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent/30" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

              <div className="md:w-1/2 pl-20 md:pl-0 md:pr-12 md:text-right">
                <div className={`${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-accent text-lg">{exp.company}</p>
                  <div className="flex items-center gap-2 text-text-muted text-sm mt-2 justify-start md:justify-end">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-sm justify-start md:justify-end">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 pl-20 md:pl-12">
                <ul className="space-y-2 text-text-muted">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;