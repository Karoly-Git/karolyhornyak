export type BlogPost = {
    title: string;
    slug: string;
    cover: string;
    alt: string;
    excerpt: string;
    info: string;
    labels: string[];
    isActive: boolean;
};

const modules = import.meta.glob<{
    meta: BlogPost;
}>("@/features/portfolio/blog/posts/*/meta.ts", {
    eager: true,
});

const posts: BlogPost[] = Object.entries(modules).map(
    ([path, module]) => {
        const folderSlug = path.split("/").slice(-2, -1)[0];
        const post = module.meta;

        if (post.slug !== folderSlug) {
            console.warn(
                `Slug mismatch detected:
           Folder: "${folderSlug}"
           meta.slug: "${post.slug}"`
            );
        }

        return post;
    }
);

export const blogs: BlogPost[] = posts
    .filter((post) => post.isActive);