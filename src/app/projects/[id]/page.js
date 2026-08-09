import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);
  return {
    title: project ? `${project.name} | Jannatul Khusbu` : "Project Details | Jannatul Khusbu",
    description: project?.description,
  };
}

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#f7faff] px-5 pb-20 pt-32 text-[#14233f] dark:bg-[#080d0f] dark:text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className="text-sm font-semibold text-teal-700 hover:text-teal-900 dark:text-emerald-400">
          ← Back to projects
        </Link>
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#11171a]">
          <div className="relative h-64 sm:h-96">
            <Image src={project.image} alt={`${project.name} project preview`} fill className="object-cover" priority />
          </div>
          <div className="p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-emerald-400">{project.label}</p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">{project.name}</h1>
            <p className="mt-5 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 dark:bg-emerald-400/10 dark:text-emerald-300">{item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-teal-600 px-5 py-3 text-sm font-bold text-white hover:bg-teal-700 dark:bg-emerald-500 dark:text-slate-950">Live Project ↗</a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:hover:border-emerald-400 dark:hover:text-emerald-300">GitHub Repository ↗</a>
            </div>
            <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 dark:border-white/10 md:grid-cols-2">
              <section>
                <h2 className="text-lg font-bold">Challenges faced</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.challenges}</p>
              </section>
              <section>
                <h2 className="text-lg font-bold">Future improvements</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.improvements}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
