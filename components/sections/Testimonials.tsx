// components/sections/Testimonials.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "CEO, TechStart Solutions",
    content:
      "Owais is an exceptional developer. He rebuilt our entire backend in Laravel, improving performance by 40%. Highly recommended!",
    avatar: "",
  },
  {
    id: 2,
    name: "Sara Malik",
    role: "Product Manager, WebFlow Inc.",
    content:
      "Working with Owais was a pleasure. His expertise in PHP and MySQL helped us scale our application seamlessly.",
    avatar: "",
  },
  {
    id: 3,
    name: "Hassan Ali",
    role: "CTO, DevCraft",
    content:
      "Owais delivered a complex full-stack project ahead of schedule. His code quality and communication are top-notch.",
    avatar: "",
  },
  {
    id: 4,
    name: "Zara Khan",
    role: "Founder, CreativeMinds",
    content:
      "I'm impressed by Owais's problem-solving skills. He's a true full-stack developer with a keen eye for detail.",
    avatar: "",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-surface/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Client Testimonials</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            What people I&apos;ve worked with have to say.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass p-8 md:p-12 rounded-3xl text-center"
            >
              <Quote className="text-accent mx-auto mb-6" size={40} />
              <p className="text-lg md:text-xl mb-8 italic">
                {testimonials[current].content}
              </p>
              <div>
                <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                <p className="text-text-muted">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 glass rounded-full hover:bg-accent/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 glass rounded-full hover:bg-accent/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? "w-8 bg-accent" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;