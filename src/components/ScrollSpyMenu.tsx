"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function ScrollSpyMenu() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let firstVisible = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firstVisible) {
            setActiveId(entry.target.id);
            firstVisible = true; // Ensure only the first visible section is set
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex fixed top-[450px] left-[80px] z-50 flex-col gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center"
        >
          <span
            className={`nav-indicator mr-4 h-px w-8 transition-all motion-reduce:transition-none ${
              activeId === section.id
                ? "w-16 bg-slate-200"
                : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
            }`}
          />
          <span
            className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
              activeId === section.id
                ? "text-slate-200"
                : "text-slate-500 group-hover:text-slate-200"
            }`}
          >
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
