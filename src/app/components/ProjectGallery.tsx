
"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  X,
  Cpu,
  Radio,
  Settings2,
  Sun,
  Zap,
} from "lucide-react";

type Language = "en" | "ar";

type Project = {
  title: string;
  category: string;
  description: string;
};

type Props = {
  language: Language;
  projects: Project[];
};

const projectDetails = [
  {
    icon: Cpu,
    color: "from-blue-600/30 via-cyan-500/15 to-[#0B1428]",
    stage: {
      en: "Fourth-Year Project",
      ar: "مشروع السنة الرابعة",
    },
    tags: ["6-DOF", "Robotics", "Kinematics"],
    en: [
      "Designed and programmed an industrial robotic arm with six degrees of freedom.",
      "Calculated homogeneous transformation matrices for forward and inverse kinematics.",
      "Focused on precise robotic trajectory control.",
    ],
    ar: [
      "تصميم وبرمجة ذراع روبوت صناعي بست درجات حرية.",
      "حساب مصفوفات التحويل المتجانس للحركة الأمامية والعكسية.",
      "التركيز على التحكم الدقيق في مسار حركة الروبوت.",
    ],
  },
  {
    icon: Radio,
    color: "from-cyan-600/25 via-blue-500/10 to-[#0B1428]",
    stage: {
      en: "Third-Year Project",
      ar: "مشروع السنة الثالثة",
    },
    tags: ["Sensors", "Microcontroller", "Detection"],
    en: [
      "Developed an autonomous smart metal and underground-object detection prototype.",
      "Integrated high-sensitivity sensor arrays with a microcontroller.",
      "Implemented real-time detection signaling.",
    ],
    ar: [
      "تطوير نموذج أولي ذكي للكشف عن المعادن والأجسام تحت الأرض.",
      "دمج مجموعة من المستشعرات عالية الحساسية مع متحكم دقيق.",
      "تنفيذ نظام إشارات للتنبيه عند الكشف في الوقت الفعلي.",
    ],
  },
  {
    icon: Settings2,
    color: "from-indigo-600/30 via-blue-500/10 to-[#0B1428]",
    stage: {
      en: "Third-Year Project",
      ar: "مشروع السنة الثالثة",
    },
    tags: ["CNC", "G-code", "Stepper Motors"],
    en: [
      "Built and calibrated a CNC laser engraving and drawing machine.",
      "Configured G-code interpretation for machine operation.",
      "Calibrated stepper motors for accurate X-Y axis movement.",
    ],
    ar: [
      "بناء ومعايرة آلة نقش ورسم بالليزر تعمل بنظام CNC.",
      "إعداد تفسير أوامر G-code لتشغيل الآلة.",
      "معايرة المحركات الخطوية لتحقيق حركة دقيقة على المحورين X وY.",
    ],
  },
  {
    icon: Sun,
    color: "from-sky-600/25 via-cyan-500/10 to-[#0B1428]",
    stage: {
      en: "Second-Year Project",
      ar: "مشروع السنة الثانية",
    },
    tags: ["Solar Energy", "LDR Sensors", "Servo Motors"],
    en: [
      "Created an automated dual-axis solar tracking prototype.",
      "Used LDR sensors to detect the direction of available sunlight.",
      "Controlled servo motors to adjust solar panel orientation.",
    ],
    ar: [
      "إنشاء نموذج أولي آلي لتتبع الشمس على محورين.",
      "استخدام مستشعرات LDR لتحديد اتجاه ضوء الشمس.",
      "التحكم بمحركات السيرفو لضبط اتجاه اللوح الشمسي.",
    ],
  },
  {
    icon: Zap,
    color: "from-blue-500/25 via-violet-500/10 to-[#0B1428]",
    stage: {
      en: "First-Year Project",
      ar: "مشروع السنة الأولى",
    },
    tags: ["Energy Harvesting", "Mechanical Energy", "Prototype"],
    en: [
      "Designed a prototype for harvesting mechanical kinetic energy.",
      "Explored converting captured mechanical movement into electrical energy.",
      "Demonstrated the principle of energy harvesting through a practical engineering prototype.",
    ],
    ar: [
      "تصميم نموذج أولي لحصاد الطاقة الحركية الميكانيكية.",
      "استكشاف تحويل الحركة الميكانيكية إلى طاقة كهربائية.",
      "توضيح مبدأ حصاد الطاقة من خلال نموذج هندسي عملي.",
    ],
  },
];

export default function ProjectGallery({
  language,
  projects,
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isArabic = language === "ar";

  const labels = isArabic
    ? {
        view: "عرض التفاصيل",
        details: "تفاصيل المشروع",
        highlights: "أبرز الجوانب التقنية",
        technologies: "التقنيات والمفاهيم",
        close: "إغلاق",
      }
    : {
        view: "View Project Details",
        details: "Project Overview",
        highlights: "Technical Highlights",
        technologies: "Technologies & Concepts",
        close: "Close",
      };

  const activeProject =
    activeIndex === null ? null : projects[activeIndex];

  const activeDetails =
    activeIndex === null ? null : projectDetails[activeIndex];

  function openProject(index: number) {
    setActiveIndex(index);

    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }

  function closeProject() {
    dialogRef.current?.close();
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const details = projectDetails[index];
          if (!details) return null;

          const Icon = details.icon;

          return (
            <motion.button
              type="button"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              onClick={() => openProject(index)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0D1425] text-start transition-colors duration-300 hover:border-blue-400/50 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              {/* Engineering Illustration */}
              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${details.color}`}
              >
                <div className="absolute h-40 w-40 rounded-full border border-blue-400/20" />

                <div className="absolute h-52 w-52 animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-blue-400/15" />

                <div className="absolute h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />

                <Icon
                  size={75}
                  strokeWidth={1.2}
                  className="relative z-10 text-blue-300 transition-transform duration-500 group-hover:scale-110"
                />

                <span
                  dir="ltr"
                  className="absolute left-5 top-5 rounded-full border border-blue-400/20 bg-[#080B14]/70 px-3 py-1 text-xs text-blue-200"
                >
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                <span className="absolute bottom-4 end-5 text-xs text-blue-200/70">
                  {details.stage[language]}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-blue-400">
                  {project.category}
                </p>

                <h3 className="mb-4 min-h-14 text-xl font-bold leading-snug">
                  {project.title}
                </h3>

                <p className="mb-6 line-clamp-3 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {details.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-blue-300">
                  <span>{labels.view}</span>
                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* PROJECT DETAILS DIALOG */}
      <dialog
        ref={dialogRef}
        dir={isArabic ? "rtl" : "ltr"}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeProject();
          }
        }}
        className="m-auto max-h-[85vh] w-[min(92vw,760px)] rounded-3xl border border-blue-400/25 bg-[#0B1120] p-0 text-white shadow-2xl backdrop:bg-black/80"
      >
        {activeProject && activeDetails && (
          <div className="max-h-[85vh] overflow-y-auto">
            <div
              className={`relative bg-gradient-to-br p-7 sm:p-10 ${activeDetails.color}`}
            >
              <button
                type="button"
                aria-label={labels.close}
                onClick={closeProject}
                className="absolute end-5 top-5 rounded-full border border-white/15 bg-black/30 p-2 transition hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <p className="mb-4 pe-12 text-xs font-semibold uppercase tracking-widest text-blue-300">
                {activeDetails.stage[language]}
              </p>

              <h2 className="max-w-xl pe-8 text-3xl font-bold leading-tight sm:text-4xl">
                {activeProject.title}
              </h2>

              <p className="mt-4 text-sm text-cyan-200">
                {activeProject.category}
              </p>
            </div>

            <div className="space-y-9 p-7 sm:p-10">
              <section>
                <h3 className="mb-4 text-xl font-bold">
                  {labels.details}
                </h3>
                <p className="leading-8 text-gray-300">
                  {activeProject.description}
                </p>
              </section>

              <section>
                <h3 className="mb-5 text-xl font-bold">
                  {labels.highlights}
                </h3>

                <ul className="space-y-4">
                  {activeDetails[language].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-7 text-gray-300"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-5 text-xl font-bold">
                  {labels.technologies}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {activeDetails.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              <button
                type="button"
                onClick={closeProject}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-300"
              >
                {labels.close}
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
