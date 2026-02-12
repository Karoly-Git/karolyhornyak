import { motion as m, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

import BlogCard from "@/features/blog/components/BlogCard";
import { blogs } from "@/data/blogs";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

export default function Blog() {
    const blogRef = useRef<HTMLElement | null>(null);

    const sectionInView = useInView(blogRef, {
        once: true,
        amount: 0.1
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
                animate={sectionInView ? "show" : "hidden"}
            >
                {blogPosts.map((post) => (
                    <m.div key={post.slug} variants={itemVariants}>
                        <BlogCard {...post} />
                    </m.div>
                ))}
            </m.div>
        </section>
    );
}
