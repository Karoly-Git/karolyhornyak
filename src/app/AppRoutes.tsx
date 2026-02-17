import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";

import Main from "@/app/layout/Main/Main";
import Blog from "@/features/portfolio/blog/Blog";

import HowIBecome from "@/features/portfolio/blog/posts/how-i-became/index";
import TrackingSystem from "@/features/portfolio/blog/posts/lorry-tracking";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <m.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
            >
                <Routes location={location}>
                    <Route path="/" element={<Main />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route
                        path="/blog/how-i-became-a-full-stack-developer"
                        element={<HowIBecome />}
                    />
                    <Route
                        path="/blog/start-to-build-a-lorry-tracking-system"
                        element={<TrackingSystem />}
                    />
                </Routes>
            </m.div>
        </AnimatePresence>
    );
}
