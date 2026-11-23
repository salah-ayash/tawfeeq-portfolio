
"use client";

import { motion } from "motion/react";
import {
  Award,
  GraduationCap,
  Users,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

type Props = {
  language: "en" | "ar";
};

const content = {
  en: {
    eyebrow: "BEYOND ENGINEERING",
    title: "Certifications & Achievements",
    description:
      "A journey of continuous learning, professional development, leadership, and community contribution.",

    categories: [
      {
        title: "Certifications",
        icon: GraduationCap,
        items: [
          {
            name: "Diploma in Computer Applications",
            organization:
              "Asian Institute for Projects, Administrative Sciences & Computers",
            year: "2020",
            note: "With Excellence",
          },
          {
            name: "Certificate in Calligraphy",
            organization: "Al-Ward Center",
            year: "2019",
            note: "",
          },
        ],
      },
      {
        title: "Awards & Recognition",
        icon: Award,
        items: [
          {
            name: "University Certificate of Appreciation",
            organization: "Al-Rasheed Smart University",
            year: "2025 – 2026",
            note: "Electronics Laboratory Technical Support",
          },
          {
            name: "Certificate of Appreciation",
            organization:
              "Tax Office – General Authority for Investment",
            year: "2022 – 2023",
            note: "Electronic Archiving Project",
          },
        ],
      },
      {
        title: "Training & Development",
        icon: BookOpen,
        items: [
          {
            name: "The Art of Presentation & Public Speaking",
            organization:
              "Higher Academy for Languages, Computer & Human Capacity Development",
            year: "2020",
            note: "",
          },
          {
            name: "The Art of Leadership & Negotiation",
            organization: "Cardiff Institute",
            year: "2019",
            note: "",
          },
          {
            name: "Mind Mapping Workshop",
            organization: "Cardiff Institute",
            year: "2019",
            note: "",
          },
          {
            name: "Personal Strategic Planning",
            organization:
              "Center for Preparation of Youth & Sports Leaders",
            year: "2018",
            note: "",
          },
        ],
      },
      {
        title: "Leadership & Volunteering",
        icon: Users,
        items: [
          {
            name: "Community Volunteer",
            organization: "Wa'ai Wa Eed Initiative",
            year: "2026",
            note: "Autism Awareness Campaign",
          },
          {
            name: "Tour Guide & Leader",
            organization: "Yalla Nsafir Office",
            year: "2020 – 2022",
            note: "Group Logistics & Field Operations",
          },
          {
            name: "University Exhibition Organizer",
            organization: "Annual University Exhibition",
            year: "4 Years",
            note: "Engineering Project Presentations",
          },
          {
            name: "Peer Mentor & Academic Tutor",
            organization: "Student Community",
            year: "",
            note: "Engineering, Mathematics & Programming",
          },
        ],
      },
    ],
  },

  ar: {
    eyebrow: "ما وراء الهندسة",
    title: "الشهادات والإنجازات",
    description:
      "رحلة من التعلم المستمر والتطوير المهني والقيادة والمشاركة المجتمعية.",

    categories: [
      {
        title: "الشهادات",
        icon: GraduationCap,
        items: [
          {
            name: "دبلوم تطبيقات الحاسوب",
            organization:
              "المعهد الآسيوي للمشاريع والعلوم الإدارية والحاسوب",
            year: "2020",
            note: "بتقدير امتياز",
          },
          {
            name: "شهادة في الخط العربي",
            organization: "مركز الورد",
            year: "2019",
            note: "",
          },
        ],
      },
      {
        title: "الجوائز والتكريمات",
        icon: Award,
        items: [
          {
            name: "شهادة شكر وتقدير من الجامعة",
            organization: "جامعة الرشيد الذكية",
            year: "2025 – 2026",
            note: "الدعم الفني لمختبر الإلكترونيات",
          },
          {
            name: "شهادة شكر وتقدير",
            organization: "مكتب الضرائب – الهيئة العامة للاستثمار",
            year: "2022 – 2023",
            note: "مشروع الأرشفة الإلكترونية",
          },
        ],
      },
      {
        title: "الدورات والتطوير المهني",
        icon: BookOpen,
        items: [
          {
            name: "فن الإلقاء والتحدث أمام الجمهور",
            organization: "الأكاديمية العليا للغات والحاسوب وتنمية القدرات",
            year: "2020",
            note: "",
          },
          {
            name: "فن القيادة والتفاوض",
            organization: "معهد كارديف",
            year: "2019",
            note: "",
          },
          {
            name: "ورشة الخرائط الذهنية",
            organization: "معهد كارديف",
            year: "2019",
            note: "",
          },
          {
            name: "التخطيط الاستراتيجي الشخصي",
            organization: "مركز إعداد القيادات الشبابية والرياضية",
            year: "2018",
            note: "",
          },
        ],
      },
      {
        title: "القيادة والعمل التطوعي",
        icon: Users,
        items: [
          {
            name: "متطوع مجتمعي",
            organization: "مبادرة وعي وعيد",
            year: "2026",
            note: "حملة التوعية باضطراب طيف التوحد",
          },
          {
            name: "مرشد سياحي وقائد رحلات",
            organization: "مكتب يلا نسافر",
            year: "2020 – 2022",
            note: "تنظيم الرحلات والعمليات الميدانية",
          },
          {
            name: "منظم ومشارك في المعرض الجامعي",
            organization: "المعرض الجامعي السنوي",
            year: "4 أعوام",
            note: "عرض وشرح المشاريع الهندسية",
          },
          {
            name: "مرشد أكاديمي للطلاب",
            organization: "المجتمع الطلابي",
            year: "",
            note: "الهندسة والرياضيات والبرمجة",
          },
        ],
      },
    ],
  },
};

export default function Achievements({ language }: Props) {
  const t = content[language];

  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-t border-white/10 bg-[#0B1020]/60 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-400">
            {t.eyebrow}
          </p>

          <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
            {t.title}
          </h2>

          <p className="mb-12 max-w-2xl leading-8 text-gray-400">
            {t.description}
          </p>
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-2">
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
                className="rounded-2xl border border-white/10 bg-[#0D1425] p-7 transition duration-300 hover:border-blue-500/40"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                    <Icon className="text-blue-400" size={24} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-b border-white/10 pb-5 last:border-none last:pb-0"
                    >
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h4 className="font-semibold leading-6">
                          {item.name}
                        </h4>

                        {item.year && (
                          <span
                            dir="ltr"
                            className="shrink-0 rounded-lg bg-blue-500/10 px-2 py-1 text-xs text-blue-300"
                          >
                            {item.year}
                          </span>
                        )}
                      </div>

                      <p className="text-sm leading-6 text-gray-400">
                        {item.organization}
                      </p>

                      {item.note && (
                        <p className="mt-2 flex items-center gap-2 text-xs text-blue-300">
                          <ArrowUpRight size={14} />
                          {item.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
