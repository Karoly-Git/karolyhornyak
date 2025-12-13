import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

import BlogCard from "./BlogCard";
import { blogs } from "../../../data/blogs.js";

import './Blog.css';
import './BlogPost.css';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Blog() {
    const blogRef = useRef(null);

    const sectionInView = useInView(blogRef, {
        triggerOnce: true,
        threshold: 0.1
    });

    const blogPosts = blogs.filter(b => b.isActive);

    return (
        <section id="blog" ref={blogRef}>
            <m.h2
                className="blog-title-main"
                initial={{ opacity: 0, y: 40 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
            >
                Blog Posts
            </m.h2>

            <m.p
                className="blog-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 }}
            >
                Thoughts, tutorials & insights
            </m.p>

            <m.div
                className="blog-grid"
                variants={containerVariants}
                initial="hidden"
                animate={sectionInView ? "show" : ""}
            >
                {blogPosts.map((post, index) => (
                    <m.div key={index} variants={itemVariants}>
                        <BlogCard {...post} />
                    </m.div>
                ))}
            </m.div>
        </section>
    );
}
