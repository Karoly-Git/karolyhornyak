import { motion as m, useInView, type Variants } from "framer-motion";
import { useRef, useEffect } from "react";

import { blogs } from "@/data/blogs.data";
import Card from "@/shared/components/Card";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Blog() {
    const blogRef = useRef<HTMLElement | null>(null);

    // ✅ Scroll to top only when this page mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sectionInView = useInView(blogRef, {
        once: true,
        amount: 0.1,
    });

    const activePosts = blogs.filter((b) => b.isActive);

    return (
        <section id="blog" ref={blogRef}>
            <div className="container">
                <m.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9 }}
                >
                    Blogs
                </m.h2>

                <div className="content">
                    <m.h3
                        className="subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        Thoughts & insights
                    </m.h3>

                    <m.div
                        className="grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate={sectionInView ? "show" : "hidden"}
                    >
                        {activePosts.map((post) => (
                            <m.div key={post.slug} variants={itemVariants}>
                                <Card variant="blog" data={post} />
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    );
}
