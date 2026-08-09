import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7faff] text-slate-900 dark:bg-[#080d0f] dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl dark:bg-indigo-500/10" />

      <div className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            Building with Next.js & modern web technologies
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#14233f] dark:text-white sm:text-6xl lg:text-[4.25rem]">
            I build modern and{" "}
            <span className="bg-linear-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text italic text-transparent">
              scalable web experiences.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            I turn ideas into fast, polished web experiences using Next.js and
            the modern JavaScript ecosystem, blending thoughtful UI design with
            clean, scalable full-stack solutions.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800"
            >
              <FaDownload className="text-[10px]" /> Download Resume
            </a>
            <Link
              href="#contact"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-800 shadow-sm transition hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="text-slate-400">Connect with me:</span>
            <a
              href="https://github.com/jk-jumur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-xl text-slate-500 transition hover:text-teal-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-xl text-slate-500 transition hover:text-teal-700"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-[2rem] border border-teal-100/80 bg-white/70 p-6 shadow-[0_20px_55px_rgba(13,148,136,0.16)] backdrop-blur-sm dark:border-emerald-400/20 dark:bg-[#111b2b]/80 sm:p-8">
            <div className="relative mx-auto h-64 w-full">
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-100" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-teal-200">
                <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-500 shadow-md shadow-blue-500/50" />
                <span className="absolute right-3 -top-1.5 h-3 w-3 rounded-full bg-teal-500 shadow-md shadow-teal-500/50" />
              </div>
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 animate-[spin_7s_linear_infinite_reverse] rounded-full border border-teal-200/70">
              </div>
              <div className="absolute left-1/2 top-1/2 h-44 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-[0_14px_26px_rgba(15,23,42,0.18)] ring-2 ring-teal-200 dark:border-slate-800 sm:h-48 sm:w-36">
                <Image
                  src="/profile-photo.png"
                  alt="Jannatul Khusbu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <span className="mx-auto block w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5">
              Based in Dhaka, Bangladesh
            </span>
            <h2 className="mt-4 text-center text-2xl font-bold text-[#14233f] dark:text-white">
              Jannatul Khusbu
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-center text-xs leading-5 text-slate-500">
              Junior Full Stack and MERN Stack Web Developer creating clean,
              responsive, and engaging web experiences.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["JavaScript", "React", "Next.js", "Express.js"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal-100 bg-teal-50/60 px-3 py-1 text-[10px] font-semibold text-teal-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-5 border-t border-slate-200 pt-4 text-center text-xs font-medium text-slate-500 dark:border-white/10">
              <a
                href="mailto:jumur581@gmail.com"
                className="inline-flex items-center gap-2 transition hover:text-teal-700"
              >
                <FaEnvelope className="text-teal-600" /> jumur581@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
