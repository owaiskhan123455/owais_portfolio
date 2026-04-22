// components/sections/About.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, Github, Instagram, Award, Users, Code } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";

const stats = [
  { id: 1, label: "Years Experience", value: 4, icon: Award },
  { id: 2, label: "Projects Completed", value: 60, icon: Code },
  { id: 3, label: "Happy Clients", value: 25, icon: Users },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="py-20 bg-surface/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">About Me</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in building end-to-end web solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 ring-4 ring-accent/10">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-full" />
              )}
              <Image
                src="/images/owaisdp.jpg"
                alt="Owais Khan Profile"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className={`object-cover object-center-top transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Full Stack Developer based in Karachi, PK 🇵🇰
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              I&apos;m Owais Khan, a results-driven Full Stack Web Developer with over 4 years of
              experience crafting high-performance web applications. My core expertise lies in PHP,
              Laravel, and MySQL, but I&apos;m equally proficient in modern frontend technologies
              like React and Next.js. I&apos;ve helped startups and enterprises build scalable
              platforms, optimize database performance, and deliver seamless user experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="text-accent" size={28} />
                  </div>
                  <div className="text-3xl font-bold">
                    {isInView && (
                      <CountUp start={0} end={stat.value} duration={2.5} />
                    )}
                    +
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Problem Solver", "Team Player", "Clean Code", "Agile", "Mentor"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/owaisskhann/"
                target="_blank"
                className="p-3 glass rounded-full hover:bg-accent/20 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com/owaiskhan123455"
                target="_blank"
                className="p-3 glass rounded-full hover:bg-accent/20 transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/uxelio_expert"
                target="_blank"
                className="p-3 glass rounded-full hover:bg-accent/20 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;