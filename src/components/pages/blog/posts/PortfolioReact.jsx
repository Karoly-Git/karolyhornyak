export default function PortfolioReact() {
    return (
        <article className="blog-post">

            <h1 className="blog-title">How I Built My Portfolio with React</h1>

            <p className="blog-meta">
                A behind-the-scenes look at the tools, structure, and decisions that shaped my portfolio website.
            </p>

            <section>
                <h2>Starting With a Purpose</h2>
                <p>
                    Before writing a single line of code, I wanted to define what my portfolio should accomplish.
                    The goal was simple: create a fast, modern, lightweight site that reflects who I am as a
                    developer — without relying on heavy UI frameworks.
                </p>
                <p>
                    I decided early that the site needed to feel snappy, clean, and intentional. React gave me the freedom
                    to structure components exactly the way I wanted, while keeping the UI minimal.
                </p>
            </section>

            <section>
                <h2>Organizing the Project Structure</h2>
                <p>
                    I structured the application using clear, isolated sections: <strong>Hero</strong>,
                    <strong>About</strong>, <strong>Skills</strong>, <strong>Projects</strong>, <strong>Reviews</strong>,
                    and <strong>Contact</strong>. Each section lives in its own folder with its own styles, ensuring
                    the project stays maintainable as it grows.
                </p>
                <p>
                    Reusable components — such as <em>NavLinks</em>, <em>SocialLinks</em>, <em>ScrollUp</em>,
                    and <em>Loader</em> — keep the UI consistent and reduce duplicated code.
                </p>
            </section>

            <section>
                <h2>Adding Smooth Navigation With Refs</h2>
                <p>
                    Instead of traditional page navigation, I used React <code>useRef</code> hooks to scroll smoothly
                    to each section. This keeps the experience seamless and avoids unnecessary page reloads.
                </p>
                <p>
                    The navigation logic detects whether you are currently on the home page.
                    If not, it redirects you home <em>and then</em> triggers the scroll — useful once blog posts were added.
                </p>
            </section>

            <section>
                <h2>Enhancing the UI With Framer Motion</h2>
                <p>
                    To give the site a polished look, I added subtle animations using Framer Motion.
                    Sections fade in when they enter the viewport, and buttons elevate slightly on hover.
                </p>
                <p>
                    Nothing too flashy — just enough movement to make the interface feel alive.
                </p>
            </section>

            <section>
                <h2>Projects Grid and Custom Card Design</h2>
                <p>
                    One of the most enjoyable parts of the build was designing the Projects grid.
                </p>
                <p>
                    I built a custom card component with soft shadows, rounded corners, and clean spacing.
                    Each project card includes a screenshot, category, tech stack, and links to demos or GitHub.
                </p>
                <p>
                    Once the Blog section was added, I repurposed the design to create a matching premium-style Blog grid.
                </p>
            </section>

            <section>
                <h2>Creating the Blog System</h2>
                <p>
                    I didn’t want a CMS or Markdown pipeline — I wanted something simple and developer-friendly.
                    So I built a dynamic routing system based on a <strong>blogs.js</strong> configuration file.
                </p>

                <p>Each blog entry defines:</p>

                <ul>
                    <li><strong>title</strong></li>
                    <li><strong>slug</strong></li>
                    <li><strong>cover image</strong></li>
                    <li><strong>excerpt</strong></li>
                    <li><strong>component</strong> — the actual React page for the article</li>
                </ul>

                <p>
                    React Router then automatically generates routes for every post, making the blog infinitely scalable
                    without additional routing code.
                </p>
            </section>

            <section>
                <h2>Performance Optimizations</h2>
                <p>
                    I kept dependencies minimal and avoided unnecessary re-renders. Images are optimized,
                    animations are lightweight, and the entire project is structured to remain snappy even on older devices.
                </p>
                <p>
                    The goal wasn’t just to show off a portfolio — it was to demonstrate thoughtful engineering.
                </p>
            </section>

            <section>
                <h2>Final Thoughts</h2>
                <p>
                    Building this portfolio taught me that design and development go hand in hand.
                    You don’t need a massive framework or a designer background to create something clean and polished.
                </p>
                <p>
                    With React, some refined UI principles, and attention to detail, you can craft a personal site
                    that not only introduces you — but represents your work with pride.
                </p>
            </section>

        </article>
    );
}
