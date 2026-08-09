import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white px-5 py-10 dark:border-white/10 dark:bg-[#080d0f]">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Link href="#home" className="inline-flex items-center gap-2 text-lg font-black text-[#14233f] dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-xs text-white dark:bg-emerald-500 dark:text-slate-950">JK</span>
          Jannatul Khusbu
        </Link>
        <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500">Building thoughtful, responsive experiences for the modern web.</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="mailto:jumur581@gmail.com" aria-label="Email" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400"><FiMail size={16} /></a>
        <a href="https://github.com/jk-jumur" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400"><FiGithub size={16} /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-xl border border-slate-200 p-3 text-slate-600 transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400"><FiLinkedin size={16} /></a>
        <a href="#home" aria-label="Back to top" className="rounded-xl bg-teal-600 p-3 text-white transition hover:-translate-y-1 hover:bg-teal-700 dark:bg-emerald-500 dark:text-slate-950"><FiArrowUp size={16} /></a>
      </div>
    </div>
    <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-5 text-[11px] text-slate-500 dark:border-white/10">© {new Date().getFullYear()} Jannatul Khusbu. Crafted with care.</div>
  </footer>
);

export default Footer;
