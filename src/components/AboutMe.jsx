import Image from "next/image";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const proficiencies = [
  { name: "React", percentage: 86, level: "bg-cyan-500" },
  { name: "Next.js", percentage: 90, level: "bg-teal-500" },
  { name: "JavaScript", percentage: 82, level: "bg-blue-500" },
  { name: "Node.js", percentage: 76, level: "bg-emerald-500" },
  { name: "MongoDB", percentage: 72, level: "bg-green-500" },
  { name: "Tailwind CSS", percentage: 88, level: "bg-cyan-500" },
];

const tools = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-800" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-600" },
  { name: "DaisyUI", icon: SiDaisyui, color: "text-purple-500" },
  { name: "Express.js", icon: SiExpress, color: "text-slate-700" },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-5 py-20 dark:bg-[#0b1218] sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            About me
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#14233f] dark:text-white sm:text-4xl">
            Turning ideas into <span className="text-teal-600">digital experiences</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-teal-100 bg-linear-to-br from-[#f8fbfd] to-teal-50/50 p-6 shadow-lg shadow-teal-100/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-100 dark:border-emerald-400/20 dark:from-[#111b2b] dark:to-emerald-950/20 dark:shadow-black/20 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-white shadow-md ring-2 ring-teal-100">
                <Image
                  src="/profile-photo.png"
                  alt="Jannatul Khusbu"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#14233f] dark:text-white">Jannatul Khusbu</h3>
                <p className="mt-1 text-xs font-medium text-teal-700">
                  Junior Full Stack &amp; MERN Stack Web Developer
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <p>
                My programming journey is driven by curiosity and a passion for
                building clean, responsive interfaces with strong usability.
              </p>
              <p>
                I enjoy creative UI design, learning continuously, exploring new
                technologies and solving problems with thoughtful, maintainable
                code.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white/80 p-4 transition hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Location
                </p>
                <p className="mt-1 text-sm font-semibold text-[#14233f] dark:text-white">
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/80 p-4 transition hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-sm font-semibold text-[#14233f] dark:text-white">
                  Full Stack Development
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/80 p-4 transition hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Interests
                </p>
                <p className="mt-1 text-sm font-semibold text-[#14233f] dark:text-white">
                  Sports, travelling &amp; creativity
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/80 p-4 transition hover:border-teal-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Availability
                </p>
                <p className="mt-1 text-sm font-semibold text-teal-700">
                  Curious problem-solver
                </p>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <article className="rounded-3xl border border-cyan-100 bg-linear-to-br from-[#f8fbfd] to-cyan-50/50 p-6 shadow-lg shadow-cyan-100/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100 dark:border-cyan-400/20 dark:from-[#111b2b] dark:to-cyan-950/20 dark:shadow-black/20 sm:p-8">
              <h3 className="text-lg font-bold text-[#14233f] dark:text-white">Proficiency</h3>
              <div className="mt-6 space-y-5">
                {proficiencies.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="mb-2 flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-400">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200">
                      <div
                        style={{ width: `${skill.percentage}%` }}
                        className={`h-full rounded-full ${skill.level} shadow-sm transition-all duration-500 group-hover:brightness-110 animate-[pulse_3s_ease-in-out_infinite]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-linear-to-br from-[#f8fbfd] to-white p-6 shadow-lg shadow-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:from-[#111b2b] dark:to-[#0f1724] dark:shadow-black/20 sm:p-8">
              <h3 className="text-lg font-bold text-[#14233f] dark:text-white">
                Full Stack Tools
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                  <div
                    key={tool.name}
                    className="group rounded-xl border border-slate-200 bg-white px-2 py-3 text-center transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md hover:shadow-teal-100 dark:border-white/10 dark:bg-white/5"
                  >
                    <Icon
                      className={`mx-auto text-xl transition duration-300 group-hover:scale-110 ${tool.color}`}
                    />
                    <span className="mt-2 block text-[10px] font-semibold text-slate-600 group-hover:text-teal-700">
                      {tool.name}
                    </span>
                  </div>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
