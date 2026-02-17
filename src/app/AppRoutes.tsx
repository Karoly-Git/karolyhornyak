import { Routes, Route } from "react-router-dom";
import Main from "@/app/layout/Main/Main";
import Blog from "@/features/portfolio/blog/Blog";

import HowIBecome from "@/features/portfolio/blog/posts/how-i-became/index";
import TrackingSystem from "@/features/portfolio/blog/posts/lorry-tracking";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/blog/how-i-became-a-full-stack-developer" element={<HowIBecome />} />
            <Route path="/blog/start-to-build-a-lorry-tracking-system" element={<TrackingSystem />} />
        </Routes>
    )
}
