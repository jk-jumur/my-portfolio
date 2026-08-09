# Jannatul Khusbu — Developer Portfolio

A responsive personal portfolio built to present Jannatul Khusbu's work, technical skills, education and contact information through a polished light and dark interface.

## Live Projects

| Project | Live preview | Main stack |
| --- | --- | --- |
| **SkillSphere** | [Open project](https://skillsphere-psi-six.vercel.app/) | Next.js, Tailwind CSS, MongoDB, Hero UI, Better Auth |
| **KeenKeeper** | [Open project](https://assignment-7-inky.vercel.app/) | Next.js, Tailwind CSS, DaisyUI |
| **DigiTools** | [Open project](https://digitoolsplateform.netlify.app/) | React, Tailwind CSS, DaisyUI, JavaScript ES6 |

## Portfolio Highlights

- Responsive layouts for mobile, tablet, laptop and desktop screens
- Light theme by default with persistent dark-theme support
- Hero section with profile information, animated image treatment and calls to action
- About section with personal profile, interests and technology overview
- Categorized technical skills with animated proficiency indicators
- Project cards with responsive previews, accent-colored hover effects and dynamic detail pages
- Dynamic project routes at `/projects/[id]`
- Project detail pages containing the technology stack, description, live link, GitHub link, development challenges and future improvements
- Education and language proficiency section
- Web3Forms-powered contact form
- Accessible navigation, external links and theme controls

## Tech Stack

- **Framework:** Next.js 16 App Router
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** React Icons
- **Font:** Manrope via `next/font`
- **Contact delivery:** Web3Forms
- **Deployment:** Compatible with Vercel and Netlify

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm

### Installation

```bash
git clone https://github.com/jk-jumur/my-portfolio.git
cd my-portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |

## Project Structure

```text
src/
├── app/
│   ├── projects/[id]/page.js   # Dynamic project detail pages
│   ├── globals.css             # Global styles and dark-theme variant
│   ├── layout.js               # Root layout, font and shared UI
│   └── page.js                 # Portfolio homepage
├── components/
│   ├── Hero.jsx
│   ├── AboutMe.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
└── data/
    └── projects.js             # Shared project content and links

public/
├── profile-photo.png
└── *-preview.svg               # Project preview artwork
```

## Customization

Project content and links are centralized in [`src/data/projects.js`](src/data/projects.js). Update that file to change project descriptions, technologies, live URLs, repository URLs, challenges or future plans.

The contact form is implemented in [`src/components/Contact.jsx`](src/components/Contact.jsx) and submits through Web3Forms. Replace the form configuration with your own Web3Forms access key before deploying a separate copy of the portfolio.

## Contact

- **Email:** [jumur581@gmail.com](mailto:jumur581@gmail.com)
- **GitHub:** [github.com/jk-jumur](https://github.com/jk-jumur)
- **Location:** Dhaka, Bangladesh

## License

This portfolio is personal work by Jannatul Khusbu. Please do not reuse the personal content, profile image or project assets without permission.
