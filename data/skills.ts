export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "PHP", icon: "🐘", proficiency: 95 },
      { name: "Laravel", icon: "🔴", proficiency: 92 },
      { name: "REST APIs", icon: "🔗", proficiency: 88 },
      { name: "Node.js", icon: "🟢", proficiency: 70 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: "🟨", proficiency: 85 },
      { name: "TypeScript", icon: "🔷", proficiency: 78 },
      { name: "React", icon: "⚛️", proficiency: 80 },
      { name: "Tailwind CSS", icon: "🎨", proficiency: 88 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: "🐬", proficiency: 90 },
      { name: "PostgreSQL", icon: "🐘", proficiency: 72 },
      { name: "Redis", icon: "🔴", proficiency: 68 },
      { name: "SQLite", icon: "💾", proficiency: 75 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "🌿", proficiency: 85 },
      { name: "Docker", icon: "🐳", proficiency: 65 },
      { name: "Linux", icon: "🐧", proficiency: 70 },
      { name: "GitHub", icon: "🐙", proficiency: 85 },
    ],
  },
];