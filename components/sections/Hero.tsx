// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-parallax", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Parallax Background */}
      <div className="hero-parallax absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-violet-500/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-lg font-medium mb-4 block">
              Hi, I&apos;m
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-4">
              <TypeAnimation
                sequence={["Owais Khan", 2000, "Full Stack Dev", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </h1>
            <div className="text-xl md:text-2xl text-text-muted mb-6 h-12">
              <TypeAnimation
                sequence={[
                  "PHP & Laravel Expert",
                  2000,
                  "MySQL Database Architect",
                  2000,
                  "Full Stack Web Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-text-muted text-lg mb-8 max-w-xl">
              Building robust, scalable web applications with modern technologies.
              Specialized in backend development with PHP/Laravel and database optimization.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Eye size={20} /> View My Work
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 border border-white/20 hover:border-accent rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Hero Image with responsive placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative w-full rounded-3xl overflow-hidden border-2 border-accent/20 shadow-2xl">
              <div className="relative w-full pb-[120%]">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-3xl" />
                )}
                <Image
                  src="/images/owaisdp.jpg"
                  alt="Owais Khan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover object-center transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadingComplete={() => setImageLoaded(true)}
                  priority
                />
              </div>
              {/* Animated border ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-accent/50 animate-pulse pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-text-muted">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={24} className="text-accent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;