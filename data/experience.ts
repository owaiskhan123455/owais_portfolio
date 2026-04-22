export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Freelance / Self-Employed",
    role: "Full Stack Web Developer",
    duration: "2022 – Present",
    location: "Karachi, Pakistan",
    responsibilities: [
      "Developed 50+ custom web applications for clients across Pakistan and internationally.",
      "Built scalable Laravel backends with RESTful APIs consumed by React and Vue frontends.",
      "Managed MySQL databases, wrote optimized queries, and designed normalized schemas.",
      "Delivered projects on time with clean, documented, maintainable code.",
    ],
  },
  {
    id: 2,
    company: "Digital Agency (Contract)",
    role: "Laravel Backend Developer",
    duration: "2021 – 2022",
    location: "Karachi, Pakistan",
    responsibilities: [
      "Built and maintained Laravel-based web platforms for e-commerce and SaaS clients.",
      "Integrated third-party APIs including payment gateways (Stripe, JazzCash, EasyPaisa).",
      "Optimized slow database queries reducing page load times by up to 60%.",
      "Collaborated with frontend developers to deliver pixel-perfect implementations.",
    ],
  },
  {
    id: 3,
    company: "Tech Startup",
    role: "Junior PHP Developer",
    duration: "2020 – 2021",
    location: "Karachi, Pakistan",
    responsibilities: [
      "Developed and maintained PHP/MySQL web applications from scratch.",
      "Implemented authentication systems, CRUD operations, and admin panels.",
      "Assisted in migrating legacy PHP codebases to modern Laravel framework.",
      "Participated in code reviews and adopted agile development practices.",
    ],
  },
];