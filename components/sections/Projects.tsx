// components/sections/Projects.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { projects } from "../../data/projects";

const categories = ["All", "Full Stack", "Backend", "Frontend"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-surface/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full border transition-all",
                filter === cat
                  ? "bg-accent text-white border-accent"
                  : "border-white/20 hover:border-accent text-text-muted hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="project-card glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-violet-500/20 group-hover:opacity-75 transition-opacity" />
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Image
                      src={project.liveUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text-muted text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      <Github size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;