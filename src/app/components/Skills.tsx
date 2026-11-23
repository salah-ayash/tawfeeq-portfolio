
"use client";

import { motion } from "motion/react";
import {
  Cpu,
  Bot,
  Code2,
  Database,
  ArrowUpRight,
} from "lucide-react";

type Props = {
  language: "en" | "ar";
};

const content = {
  en: {
    eyebrow: "TECHNICAL EXPERTISE",
    title: "Engineering & Technical Skills",
    description:
      "A multidisciplinary skill set combining industrial automation, robotics, software development, CAD design, and information technology.",

    categories: [
      {
        title: "Automation & Control",
        description:
          "Developing and working with intelligent industrial control systems.",
        icon: Cpu,
        skills: [
          "PLC Programming",
          "Siemens TIA Portal",
          "PID Controllers",
          "Sensors & Actuators",
          "Industrial Automation",
        ],
      },
      {
        title: "Robotics & CNC",
        description:
          "Robotics engineering, mechanical movement, and computer-controlled machinery.",
        icon: Bot,
        skills: [
          "6-DOF Robotic Arms",
          "Forward Kinematics",
          "Inverse Kinematics",
          "Transformation Matrices",
          "CNC Laser Machining",
        ],
      },
      {
        title: "Software & CAD",
        description:
          "Programming, engineering design, and technical modeling.",
        icon: Code2,
        skills: [
          "SolidWorks",
          "3D Modeling",
          "AutoCAD",
          "Python",
          "C++",
          "Microsoft Excel",
          "Microsoft Word",
        ],
      },
      {
        title: "IT & Systems",
        description:
          "Managing digital information, databases, and technical infrastructure.",
        icon: Database,
        skills: [
          "Electronic Archiving",
          "Database Administration",
          "Network Connectivity",
          "Website Content Management",
          "IT Infrastructure",
        ],
      },
    ],
  },

  ar: {
    eyebrow: "الخبرات التقنية",
    title: "المهارات الهندسية والتقنية",
    description:
      "مجموعة متنوعة من المهارات تجمع بين الأتمتة الصناعية والروبوتات والبرمجة والتصميم الهندسي وتقنية المعلومات.",

    categories: [
      {
        title: "الأتمتة وأنظمة التحكم",
        description:
          "تطوير الأنظمة الصناعية الذكية والعمل على تقنيات التحكم الآلي.",
        icon: Cpu,
        skills: [
          "برمجة PLC",
          "Siemens TIA Portal",
          "متحكمات PID",
          "المستشعرات والمشغلات",
          "الأتمتة الصناعية",
        ],
      },
      {
        title: "الروبوتات وأنظمة CNC",
        description:
          "هندسة الروبوتات والحركة الميكانيكية والآلات التي يتم التحكم بها حاسوبياً.",
        icon: Bot,
        skills: [
          "الذراع الروبوتية بست درجات حرية",
          "الحركة الأمامية",
          "الحركة العكسية",
          "مصفوفات التحويل",
          "النقش بالليزر CNC",
        ],
      },
      {
        title: "البرمجة والتصميم الهندسي",
        description:
          "البرمجة والتصميم الهندسي والنمذجة التقنية.",
        icon: Code2,
        skills: [
          "SolidWorks",
          "النمذجة ثلاثية الأبعاد",
          "AutoCAD",
          "Python",
          "C++",
          "Microsoft Excel",
          "Microsoft Word",
        ],
      },
      {
        title: "تقنية المعلومات والأنظمة",
        description:
          "إدارة المعلومات الرقمية وقواعد البيانات والبنية التحتية التقنية.",
        icon: Database,
        skills: [
          "الأرشفة الإلكترونية",
          "إدارة قواعد البيانات",
          "شبكات الحاسوب",
          "إدارة محتوى المواقع",
          "البنية التحتية لتقنية المعلومات",
        ],
      },
    ],
  },
};

export default function Skills({ language }: Props) {
  const t = content[language];

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/10 bg-[#080B14] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-400">
            {t.eyebrow}
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
            {t.title}
          </h2>

          <p className="mb-12 max-w-2xl text-base leading-8 text-gray-400">
            {t.description}
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {t.categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1425] p-7 transition-colors duration-300 hover:border-blue-500/40 hover:shadow-[0_15px_60px_rgba(37,99,235,0.1)] sm:p-8"
              >
                {/* BACKGROUND GLOW */}
                <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-blue-600/10 blur-[70px] transition group-hover:bg-blue-600/20" />

                <div className="relative">
                  {/* ICON */}
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                    <Icon
                      size={27}
                      className="text-blue-400"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* CATEGORY TITLE */}
                  <h3 className="mb-3 text-2xl font-bold">
                    {category.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mb-7 min-h-12 text-sm leading-7 text-gray-400">
                    {category.description}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-blue-400/15 bg-blue-500/[0.07] px-4 py-2.5 text-sm text-blue-100 transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* DECORATIVE ICON */}
                  <div className="mt-8 flex justify-end border-t border-white/10 pt-5 text-blue-400/50">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
