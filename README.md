# Karoly Hornyak – Full-Stack Developer Portfolio

A production-grade React Single Page Application built with TypeScript and Vite. Designed to showcase projects, client work, and technical expertise using modern frontend architecture and performance-first engineering principles.

🔗 Live: https://karolyhornyak.com  
💻 Repository: https://github.com/Karoly-Git/karolyhornyak

---

## 🚀 Tech Stack

**Core**
- React
- TypeScript
- Vite
- React Router

**Architecture**
- Feature-driven folder structure
- Dynamic routing via `import.meta.glob`
- Route-level code splitting (lazy loading)
- Metadata-driven project and blog system

**Performance**
- Progressive Web App (Workbox)
- Service Workers
- Runtime caching strategies
- Image optimisation
- Lazy loading
- Production bundle optimisation

**UI & UX**
- Sass (SCSS)
- Framer Motion animations
- Responsive design
- Accessible semantic structure

**Deployment**
- Firebase Hosting
- Global CDN delivery

---

## 🏗 Architecture Overview

The application follows a feature-driven architecture, separating domain logic into clearly defined layers:

```
app/
features/
shared/
assets/
```

Projects and blog posts are automatically registered using:

```ts
import.meta.glob()
```

This enables automatic route generation, route-level code splitting, scalable content expansion, and clean separation between metadata and UI.

Each project and blog entry includes:
- `index.tsx` → Page component
- `meta.ts` → SEO and structured metadata

---

## ⚡ Performance Strategy

Performance is treated as a core requirement:

- Route-based lazy loading
- Code splitting per project and blog entry
- Reduced initial bundle size
- Service worker precaching
- Runtime caching for images and fonts
- Optimised production build via Vite

---

## 📱 Progressive Web App

The application is configured as a Progressive Web App using `vite-plugin-pwa` and Workbox.

Features include:
- Installable experience
- Offline support
- Asset precaching
- Runtime caching strategies
- SPA-compatible navigation fallback for Firebase Hosting

---

## 🧠 What This Project Demonstrates

- Scalable frontend architecture
- Type-safe metadata-driven content system
- Performance-first development
- Real-world deployment configuration
- Production-ready React engineering practices

---

## 🛠 Running Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## 🚀 Deployment

The project is deployed via Firebase Hosting:

```bash
firebase deploy
```

---

© Karoly Hornyak
