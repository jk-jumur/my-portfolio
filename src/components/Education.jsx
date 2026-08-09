const educationItems = [
  {
    label: "Currently studying · 2nd year",
    title: "Bachelor of Business Administration (BBA)",
    institute: "Feni Government College, Feni",
    description:
      "Building a strong foundation in business, management and professional communication alongside web development.",
    color: "border-teal-400 bg-teal-400",
  },
  {
    label: "Completed",
    title: "Higher Secondary Certificate (HSC)",
    institute: "Feni Government College, Feni",
    description:
      "Completed higher secondary education and developed the academic foundation for continuous learning.",
    color: "border-cyan-400 bg-cyan-400",
  },
];

const languages = [
  ["Bangla", "Native"],
  ["English", "Professional Working"],
  ["Hindi", "Fluent"],
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#f1f7fc] px-5 py-24 text-[#14233f] dark:bg-[#0b1218] dark:text-white sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl dark:bg-teal-500/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl dark:bg-cyan-500/10" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-400">
            Education &amp; languages
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Academic <span className="text-teal-600">journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
            Learning business fundamentals while growing as a modern full-stack
            web developer.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600">
              ✦
            </span>
            <h3 className="text-lg font-bold text-[#14233f] dark:text-white">Education</h3>
          </div>

          <div className="relative space-y-5 pl-6 before:absolute before:bottom-6 before:left-[9px] before:top-6 before:w-px before:bg-teal-200">
            {educationItems.map((item) => (
              <article
                key={item.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100 dark:border-white/10 dark:bg-[#111b2b] dark:hover:shadow-black/30 sm:p-7"
              >
                <span
                  className={`absolute -left-[27px] top-8 h-3 w-3 rounded-full border-4 ${item.color} box-content transition group-hover:scale-125`}
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-400">
                  {item.label}
                </p>
                <h4 className="mt-3 text-lg font-bold text-[#14233f] dark:text-white sm:text-xl">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {item.institute}
                </p>
                <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-100 dark:border-white/10 dark:bg-[#111b2b] dark:hover:shadow-black/30 sm:p-7">
            <h3 className="text-lg font-bold text-[#14233f] dark:text-white">Language Proficiency</h3>
            <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
              {languages.map(([language, level]) => (
                <div
                  key={language}
                  className="flex items-center justify-between py-4 text-xs"
                >
                  <span className="text-slate-500">{language}</span>
                  <span className="font-bold text-teal-700">{level}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
