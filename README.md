# Project Portfolio

## Purpose

This project is a personal portfolio and interactive showcase. It highlights design, development, and creative work through a playful, modern web experience. The site is built to be both a resume and a living playground for UI/UX, featuring draggable modals, responsive layouts, and fun surprises for visitors.

## Key Features

- Modern Next.js 14 with App Router
- Tailwind CSS for styling
- Responsive About and Portfolio pages
- Draggable modals for project details
- TypeScript support

## Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [@react-three/drei](https://drei.pmnd.rs/) - Useful helpers for React Three Fiber

## Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── page.tsx          # Home page
│   ├── portfolio/        # Portfolio page
│   └── ...
├── components/           # React components
│   ├── about/            # About page components (Intro, Me, Book, Spotify, Pantone, etc.)
│   ├── modals/           # Draggable modals (modal1, modal2, modal3)
│   ├── portfolio/        # Portfolio folders (Design, Experience, Project)
│   └── ...
└── ...
```

## Easter Eggs

- **Draggable Modals:** You can drag the project/experience modals around the screen for a playful, interactive experience.
- **Animated Icons & Characters:** Some icons and images have subtle animations or interactive effects.
- **Hidden UI Details:** Try hovering or clicking on various elements—some have fun surprises!

## License

MIT

