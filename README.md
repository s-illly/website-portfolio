# Project Portfolio

## Features

- Modern Next.js 14 with App Router
- Tailwind CSS for styling
- Three.js integration with React Three Fiber
- Support for 3D model viewing
- Responsive design
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
├── app/              # Next.js app router pages
├── components/       # React components
│   └── ModelViewer.tsx  # 3D viewer component
└── ...
```

## Future Enhancements

- File upload for Blender models
- Model manipulation controls
- Material and lighting adjustments
- Animation support
- Export capabilities

## License

MIT
