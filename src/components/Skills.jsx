import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTool,
  FiZap,
} from "react-icons/fi";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Interfaces that feel fast and intuitive",
    icon: FiLayout,
    accent: "teal",
    skills: [
      ["HTML", 95],
      ["CSS", 90],
      ["JavaScript", 82],
      ["React", 86],
      ["Next.js", 90],
    ],
  },
  {
    title: "Backend",
    subtitle: "Reliable data and application logic",
    icon: FiServer,
    accent: "violet",
    skills: [
      ["Node.js", 76],
      ["Express.js", 72],
      ["MongoDB", 72],
      ["REST API", 75],
    ],
  },
  {
    title: "Tools & UI",
    subtitle: "A polished workflow from idea to launch",
    icon: FiTool,
    accent: "amber",
    skills: [
      ["Tailwind CSS", 88],
      ["DaisyUI", 84],
      ["Hero UI", 78],
      ["Git & GitHub", 80],
    ],
  },
];

const accents = {
  teal: {
    icon: "border-teal-200 bg-teal-50 text-teal-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300",
    bar: "from-teal-500 to-cyan-400",
    glow: "hover:border-teal-300 hover:shadow-teal-100/70 dark:hover:border-emerald-400/40",
  },
  violet: {
    icon: "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300",
    bar: "from-violet-500 to-fuchsia-400",
    glow: "hover:border-violet-300 hover:shadow-violet-100/70 dark:hover:border-violet-400/40",
  },
  amber: {
    icon: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300",
    bar: "from-amber-500 to-orange-400",
    glow: "hover:border-amber-300 hover:shadow-amber-100/70 dark:hover:border-amber-400/40",
  },
};

const Skills = () => (
  <section
    id="skills"
    className="relative overflow-hidden bg-[#f7faff] px-5 py-20 sm:px-8 lg:px-10 dark:bg-[#080d0f]"
  >
    <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl dark:bg-cyan-500/10" />
    <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl dark:bg-violet-500/10" />

    <div className="relative mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end dark:border-white/10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700 dark:text-emerald-400">
            My toolkit
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight text-[#14233f] sm:text-5xl dark:text-white">
            Skills that turn ideas into{" "}
            <span className="text-teal-600 dark:text-emerald-400">experiences.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-500">
          A balanced mix of frontend craft, backend fundamentals and practical
          tools for building complete web products.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          const style = accents[group.accent];

          return (
            <article
              key={group.title}
              className={`group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-[#111b2b] ${style.glow}`}
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.icon}`}>
                  <Icon size={22} />
                </div>
                <span className="text-4xl font-black text-slate-100 dark:text-white/5">
                  0{skillGroups.indexOf(group) + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#14233f] dark:text-white">
                {group.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{group.subtitle}</p>

              <div className="mt-7 space-y-5">
                {group.skills.map(([name, value]) => (
                  <div key={name}>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300">{name}</span>
                      <span className="text-slate-400">{value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full bg-linear-to-r ${style.bar} transition-all duration-700 group-hover:brightness-110`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          [FiCode, "Component-driven", "Reusable and scalable UI"],
          [FiDatabase, "Data-minded", "Structured and reliable logic"],
          [FiZap, "Performance-first", "Responsive on every screen"],
        ].map(([Icon, title, text]) => (
          <div
            key={title}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-[#111b2b]/70"
          >
            <Icon className="shrink-0 text-teal-600 dark:text-emerald-400" size={20} />
            <div>
              <p className="text-xs font-bold text-[#14233f] dark:text-white">{title}</p>
              <p className="mt-1 text-[11px] text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
