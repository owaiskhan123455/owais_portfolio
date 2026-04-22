// components/sections/Contact.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formState);
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-text-muted mb-8">
                Feel free to reach out via email or phone. I&apos;ll get back to you
                as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-full">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <a
                    href="mailto:owais.khan@example.com"
                    className="hover:text-accent transition-colors"
                  >
                    owais.khan@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-full">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Phone</p>
                  <a
                    href="tel:+923001234567"
                    className="hover:text-accent transition-colors"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-full">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Location</p>
                  <p>Karachi, Pakistan 🇵🇰</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={20} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;