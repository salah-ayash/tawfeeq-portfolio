
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "motion/react";

import ProjectGallery from "./components/ProjectGallery";

import Achievements from "./components/Achievements";
import Skills from "./components/Skills";

import {
  ArrowUpRight,
  Menu,
  X,
  Cpu,
  Settings2,
  Zap,
  GraduationCap,
  MapPin,
  ExternalLink,
  Mail,
  Download,
} from "lucide-react";

const content = {
  en: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projectsLabel: "Projects",
    contact: "Contact",
    contactMe: "Contact Me",
    switchLanguage: "العربية",
    downloadCV: "Download CV",
    achievementsLabel: "Achievements",
    skillsLabel: "Skills",

    eyebrow: "MECHATRONICS ENGINEERING",
    greeting: "Hello, I'm",
    name: "Tawfeeq Ayash",
    headline: "Engineering Intelligent Systems.",
    subheadline: "Building the Future.",
    heroDescription:
      "Mechatronics Engineering student specializing in robotics, industrial automation, and intelligent control systems. Passionate about transforming engineering ideas into real-world solutions.",
    explore: "Explore Projects",
    getInTouch: "Get in Touch",
    engineeringProjects: "Engineering Projects",
    academicGpa: "Academic GPA",
    expectedGraduation: "Expected Graduation",

    aboutEyebrow: "GET TO KNOW ME",
    aboutTitle: "The Engineer Behind the Innovation",
    aboutDescription:
      "I'm a Mechatronics Engineering student at Al-Rasheed Smart University, combining mechanical engineering, electronics, programming, and intelligent control systems. My experience spans robotics development, technical laboratory maintenance, IT infrastructure, and business management. I enjoy solving real-world challenges through practical engineering and continuous innovation.",
    education: "Education",
    educationDegree: "B.Sc. in Mechatronics Engineering",
    university: "Al-Rasheed Smart University",
    location: "Sana'a, Yemen",
    coreExpertise: "Core Expertise",
    skills: [
      "PLC Programming",
      "Robotics",
      "Industrial Automation",
      "SolidWorks",
      "AutoCAD",
      "Python",
      "C++",
      "CNC Systems",
      "PID Control",
      "Sensors & Actuators",
    ],

    experienceEyebrow: "PROFESSIONAL JOURNEY",
    experienceTitle: "Professional Experience",
    experienceDescription:
      "Experience across technical engineering, industrial systems, business management, and IT operations.",
    experiences: [
      {
        role: "Laboratory Maintenance Assistant & Technician",
        organization: "Al-Rasheed Smart University",
        period: "2025 – 2026",
        description:
          "Maintained, calibrated, and organized electronics laboratory equipment, including CNC machines, industrial automation modules, and PLC training kits. Received a university certificate of appreciation for technical support.",
      },
      {
        role: "General Manager",
        organization: "Candy Store",
        period: "2024 – 2026",
        description:
          "Directed daily business operations, inventory management, sales strategies, staff coordination, customer relationships, and budgeting.",
      },
      {
        role: "Electronic Archiving & IT Specialist",
        organization: "Tax Office – General Authority for Investment",
        period: "2022 – 2023",
        description:
          "Implemented an electronic archiving project and supported database administration, website updates, local networking, and office operations. Received a certificate of appreciation for the project.",
      },
    ],

    projectsEyebrow: "SELECTED WORK",
    projectsTitle: "Engineering Projects",
    projectsDescription:
      "Exploring robotics, automation, sensor technologies, and energy systems through practical engineering.",
    projects: [
      {
        title: "Industrial 6-DOF Robotic Arm",
        category: "Robotics & Kinematics",
        description:
          "Designed and programmed a six-degree-of-freedom robotic arm using forward and inverse kinematics for trajectory control.",
      },
      {
        title: "Smart Metal & Landmine Detector",
        category: "Sensors & Embedded Control",
        description:
          "Developed a smart detection system integrating sensor arrays and microcontroller-based real-time signaling.",
      },
      {
        title: "CNC Laser Engraving Machine",
        category: "CNC & Automation",
        description:
          "Built and calibrated a CNC laser engraving machine with G-code interpretation and precise stepper motor control.",
      },
      {
        title: "Dual-Axis Solar Tracking System",
        category: "Renewable Energy & Control",
        description:
          "Created an automated solar tracker using LDR sensors and servo motors to follow sunlight.",
      },
      {
        title: "Kinetic-to-Electrical Energy Harvester",
        category: "Energy Conversion",
        description:
          "Designed a prototype that converts mechanical kinetic energy into usable electrical energy.",
      },
    ],

    contactEyebrow: "LET'S CONNECT",
    contactTitle: "Have a Project in Mind?",
    contactDescription:
      "Open to engineering opportunities, technical collaboration, and innovative ideas.",
    emailMe: "Send an Email",
    copyright: "All rights reserved.",
  },

  ar: {
    home: "الرئيسية",
    about: "نبذة عني",
    experience: "الخبرات",
    projectsLabel: "المشاريع",
    contact: "التواصل",
    contactMe: "تواصل معي",
    switchLanguage: "English",
    downloadCV: "تحميل السيرة الذاتية",
    achievementsLabel: "الإنجازات",
    skillsLabel: "المهارات",

    eyebrow: "هندسة الميكاترونكس",
    greeting: "مرحباً، أنا",
    name: "توفيق عياش",
    headline: "أصمم الأنظمة الذكية.",
    subheadline: "وأساهم في بناء المستقبل.",
    heroDescription:
      "طالب هندسة ميكاترونكس متخصص في الروبوتات والأتمتة الصناعية وأنظمة التحكم الذكية، وأسعى لتحويل الأفكار الهندسية إلى حلول عملية.",
    explore: "استكشف المشاريع",
    getInTouch: "تواصل معي",
    engineeringProjects: "مشاريع هندسية",
    academicGpa: "المعدل التراكمي",
    expectedGraduation: "التخرج المتوقع",

    aboutEyebrow: "تعرف عليّ",
    aboutTitle: "المهندس وراء الابتكار",
    aboutDescription:
      "أنا طالب هندسة ميكاترونكس في جامعة الرشيد الذكية، أجمع بين الهندسة الميكانيكية والإلكترونيات والبرمجة وأنظمة التحكم الذكية. تشمل خبراتي تطوير الروبوتات وصيانة المختبرات التقنية والبنية التحتية لتقنية المعلومات وإدارة الأعمال. أستمتع بحل التحديات الواقعية من خلال التطبيقات الهندسية العملية والابتكار المستمر.",
    education: "التعليم",
    educationDegree: "بكالوريوس هندسة الميكاترونكس",
    university: "جامعة الرشيد الذكية",
    location: "صنعاء، اليمن",
    coreExpertise: "المهارات الأساسية",
    skills: [
      "برمجة PLC",
      "الروبوتات",
      "الأتمتة الصناعية",
      "SolidWorks",
      "AutoCAD",
      "Python",
      "C++",
      "أنظمة CNC",
      "التحكم PID",
      "المستشعرات والمشغلات",
    ],

    experienceEyebrow: "المسيرة المهنية",
    experienceTitle: "الخبرات العملية",
    experienceDescription:
      "خبرات متنوعة في الهندسة التقنية والأنظمة الصناعية وإدارة الأعمال وتقنية المعلومات.",
    experiences: [
      {
        role: "مساعد وفني صيانة المختبرات",
        organization: "جامعة الرشيد الذكية",
        period: "2025 – 2026",
        description:
          "صيانة ومعايرة وتنظيم معدات مختبر الإلكترونيات، بما يشمل آلات CNC ووحدات الأتمتة الصناعية وأجهزة التدريب على PLC. حصل على شهادة شكر وتقدير من الجامعة لدعمه الفني.",
      },
      {
        role: "مدير عام",
        organization: "متجر كاندي",
        period: "2024 – 2026",
        description:
          "إدارة العمليات اليومية والمخزون واستراتيجيات المبيعات وتنسيق الموظفين وعلاقات العملاء والميزانية.",
      },
      {
        role: "أخصائي الأرشفة الإلكترونية وتقنية المعلومات",
        organization: "مكتب الضرائب – الهيئة العامة للاستثمار",
        period: "2022 – 2023",
        description:
          "تنفيذ مشروع الأرشفة الإلكترونية والمساهمة في إدارة قواعد البيانات وتحديث الموقع الإلكتروني والشبكات المحلية والعمليات المكتبية. حصل على شهادة تقدير عن تنفيذ المشروع.",
      },
    ],

    projectsEyebrow: "أعمال مختارة",
    projectsTitle: "المشاريع الهندسية",
    projectsDescription:
      "مشاريع عملية في الروبوتات والأتمتة وتقنيات الاستشعار وأنظمة الطاقة.",
    projects: [
      {
        title: "ذراع روبوت صناعي بست درجات حرية",
        category: "الروبوتات وعلم الحركة",
        description:
          "تصميم وبرمجة ذراع روبوت بست درجات حرية باستخدام حسابات الحركة الأمامية والعكسية للتحكم في المسار.",
      },
      {
        title: "كاشف ذكي للمعادن والألغام",
        category: "المستشعرات والتحكم المدمج",
        description:
          "تطوير نظام كشف ذكي يدمج المستشعرات مع متحكم دقيق لتقديم إشارات فورية.",
      },
      {
        title: "آلة نقش بالليزر CNC",
        category: "التحكم الرقمي والأتمتة",
        description:
          "بناء ومعايرة آلة نقش بالليزر تعتمد على تفسير أوامر G-code والتحكم الدقيق في المحركات الخطوية.",
      },
      {
        title: "نظام تتبع شمسي ثنائي المحور",
        category: "الطاقة المتجددة والتحكم",
        description:
          "إنشاء نظام آلي لتتبع الشمس باستخدام مستشعرات الضوء ومحركات السيرفو.",
      },
      {
        title: "نظام تحويل الطاقة الحركية إلى كهربائية",
        category: "تحويل الطاقة",
        description:
          "تصميم نموذج أولي لتحويل الطاقة الحركية الميكانيكية إلى طاقة كهربائية قابلة للاستخدام.",
      },
    ],

    contactEyebrow: "لنتواصل",
    contactTitle: "هل لديك مشروع أو فكرة؟",
    contactDescription:
      "أرحب بالفرص الهندسية والتعاون التقني والأفكار المبتكرة.",
    emailMe: "إرسال بريد إلكتروني",
    copyright: "جميع الحقوق محفوظة.",
  },
};

type Language = keyof typeof content;


const LANGUAGE_KEY = "tawfeeq-language";
const LANGUAGE_EVENT = "tawfeeq-language-change";

function getSavedLanguage(): Language {
  return window.localStorage.getItem(LANGUAGE_KEY) === "ar"
    ? "ar"
    : "en";
}

function getServerLanguage(): Language {
  return "en";
}

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANGUAGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
}


const navigationIds = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "achievements",
  "contact",
] as const;



export default function Home() {
  
const language = useSyncExternalStore(
  subscribeToLanguage,
  getSavedLanguage,
  getServerLanguage
);

  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";

 


useEffect(() => {
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
}, [language, isArabic]);

  

const navigationLabels = [
  t.home,
  t.about,
  t.experience,
  t.skillsLabel,
  t.projectsLabel,
  t.achievementsLabel,
  t.contact,
];



  

function changeLanguage() {
  const nextLanguage = language === "en" ? "ar" : "en";

  window.localStorage.setItem(
    LANGUAGE_KEY,
    nextLanguage
  );

  window.dispatchEvent(new Event(LANGUAGE_EVENT));

  setMenuOpen(false);
}



  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#080B14] text-white"
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080B14]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6">

          <a href="#home" dir="ltr" className="shrink-0 text-2xl font-black">
            T<span className="text-blue-500">.</span>A
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            {navigationIds.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-gray-300 transition hover:text-blue-400"
              >
                {navigationLabels[index]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={changeLanguage}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
            >
              {t.switchLanguage}
            </button>

            <a
              href="mailto:taofeeg10a@gmail.com"
              className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500 sm:block"
            >
              {t.contactMe}
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div 
className="flex flex-col gap-5 border-t border-white/10 bg-[#0B1020] px-6 py-6 xl:hidden"
>
            {navigationIds.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-200"
              >
                {navigationLabels[index]}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[calc(100vh-80px)] scroll-mt-20 items-center"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs tracking-wider text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              {t.eyebrow}
            </p>

            <p className="mb-4 text-xl text-gray-400">{t.greeting}</p>

            <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl xl:text-7xl">
              {t.name}
            </h1>

            <h2 className="mb-6 text-2xl font-semibold leading-snug sm:text-3xl">
              {t.headline}
              <span className="mt-2 block text-gray-400">
                {t.subheadline}
              </span>
            </h2>

            <p className="mb-9 max-w-xl text-base leading-8 text-gray-400">
              {t.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
              >
                {t.explore}
                <ArrowUpRight size={19} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 font-semibold transition hover:border-blue-400"
              >
                {t.getInTouch}
              </a>

<a
  href="/tawfeeq-cv.pdf"
  download="Tawfeeq_Ayash_CV.pdf"
  className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-7 py-3.5 font-semibold text-blue-300 transition duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
>
  <Download size={19} />
  {t.downloadCV}
</a>

            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
              {[
                { value: "05", label: t.engineeringProjects },
                { value: "3.5/4.0", label: t.academicGpa },
                { value: "2027", label: t.expectedGraduation },
              ].map((stat) => (
                <div key={stat.label}>
                  <p dir="ltr" className="text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ENGINEERING VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-blue-400/20 bg-gradient-to-br from-[#101D38] via-[#0B1224] to-[#080B14] shadow-[0_0_100px_rgba(37,99,235,0.12)]">

              <div className="absolute left-7 top-7 text-xs tracking-widest text-blue-300/70">
                ENGINEERING // 001
              </div>

              <div className="absolute inset-[15%] rounded-full border border-blue-400/15" />
              <div className="absolute inset-[23%] animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-cyan-400/35" />
              <div className="absolute inset-[31%] rounded-full border border-blue-500/30 bg-blue-500/5 shadow-[0_0_60px_rgba(37,99,235,0.2)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cpu className="h-24 w-24 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)] sm:h-28 sm:w-28" strokeWidth={1.2} />
                </motion.div>
              </div>

              <div className="absolute bottom-7 left-7 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-blue-200">
                <Settings2 size={17} />
                ROBOTICS
              </div>

              <div className="absolute bottom-7 right-7 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-cyan-200">
                <Zap size={17} />
                AUTOMATION
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold tracking-widest text-blue-400">
              {t.aboutEyebrow}
            </p>

            <h2 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl">
              {t.aboutTitle}
            </h2>

            <p className="mb-8 leading-8 text-gray-400">
              {t.aboutDescription}
            </p>

            <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 text-blue-400">
                <GraduationCap size={24} />
                <h3 className="font-semibold">{t.education}</h3>
              </div>
              <p className="font-medium">{t.educationDegree}</p>
              <p className="text-sm text-gray-400">{t.university}</p>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={16} /> {t.location}
              </p>
              <p dir="ltr" className={isArabic ? "text-right text-sm text-blue-300" : "text-sm text-blue-300"}>
                GPA: 3.5/4.0 | 2027
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-blue-500/15 bg-gradient-to-br from-blue-950/40 to-[#0B1020] p-8 lg:p-10"
          >
            <div className="mb-8 flex items-center gap-3">
              <Cpu className="text-blue-400" size={27} />
              <h3 className="text-2xl font-bold">{t.coreExpertise}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {t.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-blue-400/15 bg-blue-500/10 px-4 py-3 text-sm text-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24 border-t border-white/10 bg-[#0B1020]/60 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-400">
            {t.experienceEyebrow}
          </p>

          <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
            {t.experienceTitle}
          </h2>

          <p className="mb-12 max-w-2xl leading-7 text-gray-400">
            {t.experienceDescription}
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.experiences.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/40"
              >
                <p dir="ltr" className="mb-7 text-start text-sm font-medium text-blue-400">
                  {job.period}
                </p>
                <h3 className="mb-3 text-xl font-bold leading-snug">
                  {job.role}
                </h3>
                <p className="mb-5 font-medium text-blue-300">
                  {job.organization}
                </p>
                <p className="text-sm leading-7 text-gray-400">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
{/* TECHNICAL SKILLS */}
<Skills language={language} />

      
{/* PROJECTS */}
<section
  id="projects"
  className="scroll-mt-24 border-t border-white/10 px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <p className="mb-4 text-sm font-semibold tracking-widest text-blue-400">
      {t.projectsEyebrow}
    </p>

    <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
      {t.projectsTitle}
    </h2>

    <p className="mb-12 max-w-2xl leading-7 text-gray-400">
      {t.projectsDescription}
    </p>

    <ProjectGallery language={language} projects={t.projects} />
  </div>
</section>

      
      {/* CERTIFICATIONS & ACHIEVEMENTS */}
<Achievements language={language} />

{/* CONTACT */}
<section
  id="contact"
  className="scroll-mt-24 border-t border-white/10 px-6 py-28"
>
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#0D1425] p-7 sm:p-12 lg:p-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="relative grid items-center gap-14 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <p className="mb-5 text-sm font-semibold tracking-widest text-blue-400">
            {t.contactEyebrow}
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
            {t.contactTitle}
          </h2>

          <p className="mb-9 max-w-xl leading-8 text-gray-400">
            {t.contactDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:taofeeg10a@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]"
            >
              <Mail size={19} />
              {t.emailMe}
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/tawfeeq-cv.pdf"
              download="Tawfeeq_Ayash_CV.pdf"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 font-semibold transition hover:border-blue-400 hover:text-blue-300"
            >
              <Download size={19} />
              {t.downloadCV}
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          <a
            href="mailto:taofeeg10a@gmail.com"
            className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/40 hover:bg-blue-500/[0.05]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <Mail size={22} className="text-blue-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-xs text-gray-400">
                {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
              </p>
              <p dir="ltr" className="break-all text-start text-sm font-medium sm:text-base">
                taofeeg10a@gmail.com
              </p>
            </div>

            <ArrowUpRight size={18} className="shrink-0 text-blue-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/tawfeeq-ayash"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/40 hover:bg-blue-500/[0.05]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <ExternalLink size={22} className="text-blue-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-xs text-gray-400">
                LinkedIn
              </p>
              <p className="font-medium">
                Tawfeeq Ayash
              </p>
            </div>

            <ArrowUpRight size={18} className="shrink-0 text-blue-400" />
          </a>

          <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <MapPin size={22} className="text-blue-400" />
            </div>

            <div>
              <p className="mb-1 text-xs text-gray-400">
                {language === "ar" ? "الموقع" : "Location"}
              </p>
              <p className="font-medium">
                {t.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>



      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Tawfeeq Ayash. {t.copyright}
      </footer>
    </main>
  );
}
