import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Main from "@/app/layout/Main/Main";
import Blog from "@/features/portfolio/blog/Blog";

import HowIBecome from "@/features/portfolio/blog/posts/how-i-became/index";
import TrackingSystem from "@/features/portfolio/blog/posts/lorry-tracking";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageWrapper>
                            <Main />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <PageWrapper>
                            <Blog />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/blog/how-i-became-a-full-stack-developer"
                    element={
                        <PageWrapper>
                            <HowIBecome />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/blog/start-to-build-a-lorry-tracking-system"
                    element={
                        <PageWrapper>
                            <TrackingSystem />
                        </PageWrapper>
                    }
                />
            </Routes>
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
