import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-white px-5 py-20 text-[#14233f] dark:bg-[#080d0f] dark:text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl dark:bg-teal-500/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl dark:bg-violet-500/10" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Featured <span className="text-teal-600 dark:text-emerald-400">Projects</span>
          </h2>
          <p className="max-w-xs text-xs leading-5 text-slate-500">
            Real-world applications built with modern tools and thoughtful user experiences.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/jk-jumur"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-700 hover:shadow-lg hover:shadow-teal-100 dark:border-white/15 dark:bg-[#11171a] dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300 dark:hover:shadow-emerald-950/30"
          >
            <FiGithub size={17} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
