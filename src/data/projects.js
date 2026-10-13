export const projects = [
  {
    id: "gympilot",
    name: "GymPilot",
    label: "Fitness & Gym Management Platform",
    description:
      "A full-stack fitness platform connecting members, trainers, and admins with role-based dashboards, Stripe payments, and a vibrant community forum.",
    stack: [
      "Next.js 16",
      "Tailwind CSS v4",
      "MongoDB",
      "Better Auth",
      "Stripe",
      "Express",
    ],
    image: "/gympilot-preview.svg",
    accent: "orange",
    liveUrl: "https://gympilot-client.vercel.app/",
    githubUrl: "https://github.com/jk-jumur/gympilot-client",
    challenges:
      "Building a multi-role platform where members, trainers, and admins each get dedicated dashboards while keeping session auth, Stripe checkout, and role-based access control secure across all workflows.",
    improvements:
      "Add real-time notifications for booking confirmations, in-app messaging between trainers and members, advanced analytics charts for admins, and a mobile app.",
  },
  {
    id: "skillsphere",
    name: "SkillSphere",
    label: "Learning platform",
    description:
      "A modern learning platform for discovering, sharing and managing skills through an engaging web experience.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Hero UI", "Better Auth"],
    image: "/skillsphere-preview.svg",
    accent: "teal",
    liveUrl: "https://skillsphere-psi-six.vercel.app/",
    githubUrl: "https://github.com/jk-jumur",
    challenges:
      "Designing a clear learning flow while keeping authentication, user content and progress data easy to manage.",
    improvements:
      "Add course recommendations, richer learner analytics and real-time collaboration features.",
  },
  {
    id: "keenkeeper",
    name: "KeenKeeper",
    label: "Smart management app",
    description:
      "A clean and responsive Next.js application designed for organized workflows and a smooth user experience.",
    stack: ["Next.js", "Tailwind CSS", "DaisyUI"],
    image: "/keenkeeper-preview.svg",
    accent: "indigo",
    liveUrl: "https://assignment-7-inky.vercel.app/",
    githubUrl: "https://github.com/jk-jumur",
    challenges:
      "Creating a simple interface for managing multiple workflows without overwhelming users with controls.",
    improvements:
      "Introduce calendar integrations, reminders, team permissions and richer activity history.",
  },
  {
    id: "digitools",
    name: "DigiTools",
    label: "Digital products marketplace",
    description:
      "A premium marketplace for browsing and discovering digital products with a polished, responsive interface.",
    stack: ["React", "Tailwind CSS", "DaisyUI", "JavaScript ES6"],
    image: "/digitools-preview.svg",
    accent: "amber",
    liveUrl: "https://digitoolsplateform.netlify.app/",
    githubUrl: "https://github.com/jk-jumur",
    challenges:
      "Building a product browsing experience that stays fast and easy to scan across different screen sizes.",
    improvements:
      "Add checkout, customer accounts, product reviews and a seller dashboard.",
  },
];

export const getProject = (id) => projects.find((project) => project.id === id);