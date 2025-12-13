import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PostNavigation from "../../postnavigation/PostNavigation";

export default function React_QandA_2025_12_13() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* SEO / Social Sharing */}
            <Helmet>
                <title>20 Common React Theoretical Questions</title>

                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="20 Common React Theoretical Questions"
                />
                <meta
                    property="og:description"
                    content="A curated list of 20 common React theoretical questions with clear explanations to help you master core concepts."
                />
                <meta
                    property="og:url"
                    content="https://karolyhornyak.com/blog/20-common-react-theoretical-questions-2025-12-13"
                />
                <meta
                    property="og:image"
                    content="https://karolyhornyak.com/static/media/react_QandA_2025_12_13.jpg"
                />
                <meta property="og:site_name" content="karolyhornyak.com" />
            </Helmet>

            <article className="blog-post">
                <h1 className="blog-title">
                    20 Common React Theoretical Questions & Answers
                </h1>

                <p className="blog-meta">
                    A curated list of React theoretical questions with concise explanations
                    to help you strengthen your fundamentals.
                </p>

                <section>
                    <h2>1. What is React?</h2>
                    <p>
                        React is an open-source JavaScript library developed by Meta (Facebook)
                        for building fast, interactive user interfaces, especially single-page
                        applications. It uses a component-based architecture and a declarative UI.
                    </p>
                </section>

                <section>
                    <h2>2. What are React components?</h2>
                    <p>
                        Components are independent, reusable pieces of UI.
                    </p>
                    <ul>
                        <li>Functional Components (preferred)</li>
                        <li>Class Components (older)</li>
                    </ul>
                </section>

                <section>
                    <h2>3. What is JSX?</h2>
                    <p>
                        JSX (JavaScript XML) is a syntax extension that allows writing HTML-like
                        code inside JavaScript. It is compiled to
                        <code> React.createElement() </code> calls.
                    </p>
                </section>

                <section>
                    <h2>4. What is the Virtual DOM?</h2>
                    <p>
                        The Virtual DOM is an in-memory representation of the UI. When state
                        changes, React:
                    </p>
                    <ul>
                        <li>Creates a new Virtual DOM</li>
                        <li>Diffs it with the previous version</li>
                        <li>Updates only the changed parts in the real DOM</li>
                    </ul>
                    <p>This improves performance.</p>
                </section>

                <section>
                    <h2>5. What are props in React?</h2>
                    <p>
                        Props (“properties”) are read-only data passed from parent to child
                        components. They help customize components.
                    </p>
                </section>

                <section>
                    <h2>6. What is state in React?</h2>
                    <p>
                        State is mutable data stored inside a component. When state changes,
                        the component re-renders.
                    </p>
                </section>

                <section>
                    <h2>7. Difference between state and props</h2>
                    <ul>
                        <li><strong>Props:</strong> Immutable, set by parent</li>
                        <li><strong>State:</strong> Mutable, managed by the component</li>
                    </ul>
                </section>

                <section>
                    <h2>8. What are hooks in React?</h2>
                    <p>
                        Hooks are functions that allow functional components to use state and
                        lifecycle features.
                    </p>
                    <ul>
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>useContext</li>
                        <li>useMemo, useCallback</li>
                    </ul>
                </section>

                <section>
                    <h2>9. What is useState?</h2>
                    <p>
                        A hook that adds state to functional components.
                    </p>
                    <pre>
                        <code>{`const [count, setCount] = useState(0);`}</code>
                    </pre>
                </section>

                <section>
                    <h2>10. What is useEffect?</h2>
                    <p>
                        A hook used for side effects like data fetching, subscriptions,
                        or timers. It runs after render.
                    </p>
                    <pre>
                        <code>{`useEffect(() => {
    console.log("mount or update");
}, []);`}</code>
                    </pre>
                </section>

                <section>
                    <h2>11. What is lifting state up?</h2>
                    <p>
                        Sharing state between sibling components by moving it to their closest
                        common parent.
                    </p>
                </section>

                <section>
                    <h2>12. What is React Context?</h2>
                    <p>
                        Context allows passing data (theme, user, settings) down the component
                        tree without prop drilling.
                    </p>
                </section>

                <section>
                    <h2>13. What is prop drilling?</h2>
                    <p>
                        Passing props through multiple components even when only the deepest
                        component needs them.
                    </p>
                </section>

                <section>
                    <h2>14. What are controlled components?</h2>
                    <p>
                        Form elements where React controls the value via state.
                    </p>
                </section>

                <section>
                    <h2>15. What are uncontrolled components?</h2>
                    <p>
                        Form elements where the DOM maintains state, accessed via refs.
                    </p>
                </section>

                <section>
                    <h2>16. What is reconciliation?</h2>
                    <p>
                        The process of comparing Virtual DOM trees and efficiently updating
                        the real DOM using a diffing algorithm.
                    </p>
                </section>

                <section>
                    <h2>17. What are keys in lists?</h2>
                    <p>
                        Keys uniquely identify list items, helping React track changes and
                        avoid rendering bugs.
                    </p>
                    <pre>
                        <code>{`<li key={id}>Item</li>`}</code>
                    </pre>
                </section>

                <section>
                    <h2>18. What is React Router?</h2>
                    <p>
                        A library for navigation in React apps using components like
                        <code> Route </code>, <code> BrowserRouter </code>, and <code> Link </code>.
                    </p>
                </section>

                <section>
                    <h2>19. What is Redux?</h2>
                    <p>
                        Redux is a state management library based on a single store, actions,
                        reducers, and pure functions.
                    </p>
                </section>

                <section>
                    <h2>20. React vs Angular vs Vue</h2>
                    <ul>
                        <li><strong>React:</strong> Library, medium learning curve</li>
                        <li><strong>Angular:</strong> Full framework, steep learning curve</li>
                        <li><strong>Vue:</strong> Framework, beginner-friendly</li>
                    </ul>
                </section>

                <PostNavigation title="20 Common React Theoretical Questions" />
            </article>
        </>
    );
}
