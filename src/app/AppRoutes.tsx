import { Routes, Route } from "react-router-dom";
import Main from "@/app/layout/Main/Main";
import Blog from "@/features/blog/pages/Blog";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}
