import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import type { ComponentType } from "react";

import Main from "@/app/layout/main";
import Blog from "@/features/portfolio/blog";
import Projects from "@/features/portfolio/sections/projects";
import Spinner from "@/shared/components/spinner";

type LazyComponent = () => Promise<{ default: ComponentType }>;

/* ----------------------------------------
   Auto-import blog posts
----------------------------------------- */

const blogModules = import.meta.glob(
    "@/features/portfolio/blog/posts/*/index.tsx"
);

const blogRoutes = Object.entries(blogModules).map(([path, importer]) => {
    const slug = path.split("/").at(-2)!;

    return {
        slug,
        Component: lazy(importer as LazyComponent),
    };
});

/* ----------------------------------------
   Auto-import project pages
----------------------------------------- */

const projectModules = import.meta.glob(
    "@/features/portfolio/sections/projects/*/index.tsx"
);

const projectRoutes = Object.entries(projectModules).map(([path, importer]) => {
    const slug = path.split("/").slice(-2, -1)[0];

    return {
        slug,
        Component: lazy(importer as LazyComponent),
    };
});

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<Spinner size={120} color="rgb(255, 0, 0)" />}>
                <Routes location={location} key={location.pathname}>
                    {/* Home */}
                    <Route
                        path="/"
                        element={
                            <PageWrapper>
                                <Main />
                            </PageWrapper>
                        }
                    />

                    {/* Blog listing */}
                    <Route
                        path="/blog"
                        element={
                            <PageWrapper>
                                <Blog />
                            </PageWrapper>
                        }
                    />

                    {/* Projects listing */}
                    <Route
                        path="/project"
                        element={
                            <PageWrapper>
                                <Projects />
                            </PageWrapper>
                        }
                    />

                    {/* Blog posts */}
                    {blogRoutes.map(({ slug, Component }) => (
                        <Route
                            key={slug}
                            path={`/blog/${slug}`}
                            element={
                                <PageWrapper>
                                    <Component />
                                </PageWrapper>
                            }
                        />
                    ))}

                    {/* Project pages */}
                    {projectRoutes.map(({ slug, Component }) => (
                        <Route
                            key={slug}
                            path={`/project/${slug}`}
                            element={
                                <PageWrapper>
                                    <Component />
                                </PageWrapper>
                            }
                        />
                    ))}
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ height: "100%" }}
        >
            {children}
        </motion.div>
    );
}