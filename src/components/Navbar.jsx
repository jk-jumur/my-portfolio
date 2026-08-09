"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isDark, setIsDark] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem("portfolio-theme") === "dark",
  );

  useEffect(() => {
    const shouldUseDark = window.localStorage.getItem("portfolio-theme") === "dark";
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    if (window.location.pathname !== "/") return undefined;

    const sectionTitles = {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    };
    const updateDocumentTitle = (sectionId) => {
      const title = sectionTitles[sectionId] || "Home";
      document.title = `${title} | Jannatul Khusbu`;
    };

    updateDocumentTitle(window.location.hash.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActive(sectionTitles[visibleSection.target.id] || "Home");
          updateDocumentTitle(visibleSection.target.id);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    const sections = document.querySelectorAll("main section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    window.localStorage.setItem("portfolio-theme", nextThemeIsDark ? "dark" : "light");
    setIsDark(nextThemeIsDark);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#080d0f]/90">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-3">
        <div className="flex min-h-[60px] items-center justify-between">

          {/* ================= LOGO & NAME ================= */}
          <Link
            href="#home"
            onClick={() => {
              setActive("Home");
              closeMenu();
            }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100/60 text-sm font-bold text-teal-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              JK
            </div>

            <div>
              <h1 className="text-sm font-bold text-slate-900 dark:text-white sm:text-[15px]">
                Jannatul Khusbu
              </h1>
              <p className="text-[11px] text-slate-500">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const isActive = active === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    document.title = `${item.name} | Jannatul Khusbu`;
                  }}
                  className={`group relative py-2 text-sm font-medium transition duration-200 ${
                    isActive ? "font-semibold text-slate-900 dark:text-white" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Bottom green border on active or hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-teal-600 rounded-full transition-all duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side: Theme Toggle Only */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-teal-500 hover:text-teal-600 shadow-sm dark:border-white/10 dark:bg-[#111b2b] dark:text-slate-300 dark:hover:border-emerald-400"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              text-slate-700
              dark:border-white/10 dark:bg-[#111b2b] dark:text-slate-300
              transition
              hover:border-teal-500
              hover:text-teal-600
              lg:hidden
            "
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* ================= MOBILE / TABLET MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen
              ? "mt-3 max-h-[500px] border-t border-slate-200 pt-3 opacity-100 dark:border-white/10"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-3">
            {navItems.map((item) => {
              const isActive = active === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    document.title = `${item.name} | Jannatul Khusbu`;
                    closeMenu();
                  }}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-teal-50 font-semibold text-teal-600 dark:bg-emerald-400/10 dark:text-emerald-300"
                      : "text-slate-700 hover:bg-teal-50 hover:text-teal-600 dark:text-slate-300 dark:hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Theme Toggle */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-white/10">
            <span className="text-xs text-slate-500">Toggle Theme</span>
            <button
              type="button"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-teal-500 hover:text-teal-600 shadow-sm dark:border-white/10 dark:bg-[#111b2b] dark:text-slate-300 dark:hover:border-emerald-400"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;