import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const accentStyles = {
     orange: {
    border: "border-orange-200 dark:border-orange-900/40",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    glow: "from-orange-500/20 via-amber-500/10 to-transparent",
    button: "bg-orange-500 hover:bg-orange-600",
    text: "text-orange-600 dark:text-orange-400",
  },
    teal: {
      glow: "group-hover:bg-emerald-400/40 dark:group-hover:bg-emerald-400/25",
      shine: "group-hover:bg-emerald-200/25",
      border: "hover:border-emerald-300 dark:hover:border-emerald-400/40",
    },
    indigo: {
      glow: "group-hover:bg-violet-400/40 dark:group-hover:bg-violet-400/25",
      shine: "group-hover:bg-violet-200/25",
      border: "hover:border-violet-300 dark:hover:border-violet-400/40",
    },
    amber: {
      glow: "group-hover:bg-amber-400/40 dark:group-hover:bg-amber-400/25",
      shine: "group-hover:bg-amber-200/25",
      border: "hover:border-amber-300 dark:hover:border-amber-400/40",
    },
  }[project.accent];

  return (
    <article className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-2 ${accentStyles.border} hover:shadow-xl hover:shadow-slate-300/70 dark:border-white/10 dark:bg-[#11171a] dark:shadow-black/20 dark:hover:shadow-black/40`}>
      <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <div className={`pointer-events-none absolute -left-8 -top-10 h-28 w-28 rounded-full bg-transparent blur-2xl transition duration-500 ${accentStyles.glow}`} />
        <div className={`pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-transparent blur-2xl transition duration-500 ${accentStyles.glow}`} />
        <div className={`pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-transparent transition-all duration-700 group-hover:left-[115%] ${accentStyles.shine}`} />
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          className="object-cover opacity-85 transition duration-500 group-hover:scale-110 group-hover:opacity-100 dark:opacity-60 dark:group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/10 to-transparent transition-opacity duration-300 group-hover:from-white/75 dark:from-[#11171a] dark:via-transparent dark:group-hover:from-[#11171a]/80" />
        <div className="absolute right-3 top-3 flex gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link href={`/projects/${project.id}`} aria-label={`View ${project.name} details`} className="rounded-full border border-slate-300 bg-white/80 p-2 text-slate-600 shadow-sm backdrop-blur transition hover:border-teal-400 hover:text-teal-600 dark:border-white/15 dark:bg-black/20 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300">
            <FiGithub size={12} />
          </Link>
          <Link href={`/projects/${project.id}`} aria-label={`View ${project.name} details`} className="rounded-full border border-slate-300 bg-white/80 p-2 text-slate-600 shadow-sm backdrop-blur transition hover:border-teal-400 hover:text-teal-600 dark:border-white/15 dark:bg-black/20 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300">
            <FiExternalLink size={12} />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-[#14233f] dark:text-white">{project.name}</h3>
            <p className="mt-1 text-[10px] leading-4 text-slate-500">{project.description}</p>
          </div>
          <span className="text-sm text-teal-600 dark:text-emerald-400">↗</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-teal-200 bg-teal-50 px-2 py-1 text-[9px] font-semibold text-teal-700 dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-300">
              {item}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="mt-4 inline-flex rounded-lg bg-teal-600 px-3 py-2 text-[10px] font-bold text-white transition hover:bg-teal-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
        >
          View Details <span className="ml-1">↗</span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
