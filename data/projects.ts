export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, payments, and admin dashboard built with Laravel & MySQL.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/owaiskhan123455",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description:
      "POS and order management system for restaurants with real-time updates and reporting.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "https://github.com/owaiskhan123455",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: 3,
    title: "Real Estate Listing Portal",
    description:
      "Property listing platform with advanced search, filters, and agent management.",
    tech: ["Laravel", "PHP", "MySQL", "Alpine.js"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/owaiskhan123455",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "Stock tracking and inventory control system with barcode scanning and reporting.",
    tech: ["Laravel", "PHP", "MySQL", "jQuery"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "https://github.com/owaiskhan123455",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    id: 5,
    title: "School Management Portal",
    description:
      "Complete school ERP with student records, attendance, grades, and fee management.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/owaiskhan123455",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description:
      "Custom content management system for creatives to manage their portfolio and blog.",
    tech: ["Laravel", "PHP", "MySQL", "Vue.js"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/owaiskhan123455",
    gradient: "from-sky-600 to-blue-500",
  },
];