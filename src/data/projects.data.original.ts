import bankholiday from "@/assets/images/projects/bankholiday.webp";
import carousel from "@/assets/images/projects/carousel.png";
import cd from "@/assets/images/projects/cd.png";
import dmf from "@/assets/images/projects/dmf.webp";
import dog from "@/assets/images/projects/dog.png";
import exchange from "@/assets/images/projects/exchange.png";
import fsn from "@/assets/images/projects/fsn.webp";
import gazetteer from "@/assets/images/projects/gazetteer.webp";
import gomoku from "@/assets/images/projects/gomoku.webp";
import mary from "@/assets/images/projects/mary.webp";
import namedayapi from "@/assets/images/projects/namedayapi.webp";
import review from "@/assets/images/projects/review.png";
import spw from "@/assets/images/projects/spw.webp";
import talpak from "@/assets/images/projects/talpak.webp";
import tsmrf from "@/assets/images/projects/tsmrf.png";
import weather from "@/assets/images/projects/weather.png";
import webdev from "@/assets/images/projects/webdev.png";

export type ProjectGroup = "api" | "website" | "web-app";

export type ProjectCategory =
    | "API"
    | "website"
    | "web-app"
    | "front-end app";

export interface Project {
    name: string;
    isActive: boolean;
    group: ProjectGroup;
    category: ProjectCategory;
    src: string;
    alt: string;
    description: string;
    stack: string;
    liveDemoUrl: string;
    gitHubUrl: string;
    isRepoPrivate?: boolean;
}

/* -------------------- */
/* Data */
/* -------------------- */

export const projects: Project[] = [
    {
        name: "Name Day API",
        isActive: true,
        group: "api",
        category: "API",
        src: namedayapi,
        alt: "Name day",
        description:
            "A simple REST API that provides name day information for the entire year, with filtering options by month, date, and country.",
        stack: "Node.js, Express.js, JSON, Swagger, GitHub, Heroku",
        liveDemoUrl: "https://karoly-git.github.io/name-day-frontend/",
        gitHubUrl: "https://github.com/Karoly-Git/name-day-backend",
        isRepoPrivate: false,
    },
    {
        name: "Gazetteer",
        isActive: true,
        group: "api",
        category: "front-end app",
        src: gazetteer,
        alt: "Gazetteer App",
        description:
            "An interactive world explorer that lets users view real-time country data powered by multiple public APIs and an interactive Leaflet map.",
        stack: "HTML, CSS, JavaScript, PHP, Leaflet.js, APIs",
        liveDemoUrl: "https://transferstation.co.uk/gazetteer/",
        gitHubUrl: "https://github.com/Karoly-Git/gazetteer",
        isRepoPrivate: false,
    },
    {
        name: "Form Submit Now",
        isActive: true,
        group: "api",
        category: "API",
        src: fsn,
        alt: "Form Submit Now",
        description:
            "A plug-and-play contact form API that lets developers send form submissions directly to email—no backend required.",
        stack: "HTML, CSS, JavaScript, Node.js",
        liveDemoUrl: "https://karoly-git.github.io/form-submit-now/",
        gitHubUrl: "https://github.com/Karoly-Git/form-submit-now",
        isRepoPrivate: false,
    },
    {
        name: "Bank Holiday",
        isActive: true,
        group: "web-app",
        category: "web-app",
        src: bankholiday,
        alt: "Bank Holiday",
        description:
            "A fast React + Vite app that fetches official UK bank-holiday data and displays it in a clear, responsive interface.",
        stack: "React, Vite, JavaScript, CSS",
        liveDemoUrl: "https://karoly-git.github.io/bank-holidays-uk/",
        gitHubUrl: "https://github.com/Karoly-Git/bank-holidays-uk",
        isRepoPrivate: false,
    },
    {
        name: "Photography Studio",
        isActive: true,
        group: "website",
        category: "website",
        src: spw,
        alt: "SPW",
        description:
            "A fully responsive photography studio Progressive Web App built with React, Node.js, and Sass.",
        stack: "React, Vite, JavaScript, Sass, Node.js",
        liveDemoUrl: "https://www.sparklingwillowphotography.co.uk/",
        gitHubUrl:
            "https://github.com/Karoly-Git/sparkling-willow-photography",
        isRepoPrivate: false,
    },
    {
        name: "Plumbing & Heating",
        isActive: true,
        group: "website",
        category: "website",
        src: dmf,
        alt: "DMF",
        description:
            "A responsive React + Node.js service Progressive Web App showcasing plumbing and heating services.",
        stack: "React, Vite, JavaScript, Sass, Node.js",
        liveDemoUrl: "https://dmfplumbingandheating.com/",
        gitHubUrl: "https://github.com/Karoly-Git/dmf-plumbing",
        isRepoPrivate: false,
    },
    {
        name: "Sewing Workshop",
        isActive: true,
        group: "website",
        category: "website",
        src: mary,
        alt: "Mary",
        description:
            "A multilingual tailoring Progressive Web App built with React, Node.js, and Sass.",
        stack: "React, Vite, JavaScript, Sass, Node.js",
        liveDemoUrl: "https://www.maryvarrodaja.hu/",
        gitHubUrl: "https://github.com/Karoly-Git/mary-varrodaja-vite",
        isRepoPrivate: false,
    },
    {
        name: "Massage Salon",
        isActive: false,
        group: "website",
        category: "website",
        src: talpak,
        alt: "Talpak",
        description: "Short description of the project.",
        stack: "React, JavaScript, Node.js, Sass",
        liveDemoUrl: "https://talpak.hu/",
        gitHubUrl: "https://github.com/Karoly-Git/talpak",
        isRepoPrivate: true,
    },
    {
        name: "WebDevMe",
        isActive: false,
        group: "website",
        category: "website",
        src: webdev,
        alt: "WDM",
        description: "Short description of the project.",
        stack: "React, JavaScript, Node.js, Sass",
        liveDemoUrl: "https://webdevme.co.uk/",
        gitHubUrl: "https://github.com/Karoly-Git/portfolio",
    },
    {
        name: "Gomoku",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: gomoku,
        alt: "Gomoku",
        description: "Short description of the project.",
        stack: "HTML, Sass, JavaScript, React",
        liveDemoUrl: "https://karoly-git.github.io/gomoku/",
        gitHubUrl: "https://github.com/Karoly-Git/gomoku",
    },
    {
        name: "Map",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: "",
        alt: "Map App",
        description: "Short description of the project.",
        stack: "HTML, jQuery, CSS, PHP",
        liveDemoUrl: "https://karolyhornyak.com/gazetteer/",
        gitHubUrl:
            "https://github.com/Karoly-Git/karolyHornyak/tree/main/project1",
    },
    {
        name: "Company Directory",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: cd,
        alt: "Company Directory",
        description: "Short description of the project.",
        stack: "HTML, jQuery, CSS, PHP",
        liveDemoUrl: "https://karolyhornyak.com/company-directory/",
        gitHubUrl:
            "https://github.com/Karoly-Git/karolyHornyak/tree/main/project2",
    },
    {
        name: "Transfer Station Apps",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: tsmrf,
        alt: "TS & MRF",
        description: "Short description of the project.",
        stack: "React, JavaScript, Node.js, Sass",
        liveDemoUrl: "https://transferstation.co.uk/",
        gitHubUrl: "https://github.com/Karoly-Git/transferstation",
    },
    {
        name: "Watch Dogs",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: dog,
        alt: "Watch Dogs",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/watch-dog-photos/",
        gitHubUrl:
            "https://github.com/Karoly-Git/watch-dog-photos",
    },
    {
        name: "Weather Info",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: weather,
        alt: "Weather Info",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/weather-app/",
        gitHubUrl:
            "https://github.com/Karoly-Git/weather-app",
    },
    {
        name: "Image carousel",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: carousel,
        alt: "Carousel",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/img-carousel/",
        gitHubUrl:
            "https://github.com/Karoly-Git/gomoku",
    },
    {
        name: "Exchange Rate",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: exchange,
        alt: "Exchange",
        description: "Short description of the project.",
        stack: "HTML, CSS, JavaScript, React, Node.js",
        liveDemoUrl: "https://karoly-git.github.io/napiarfolyam/",
        gitHubUrl:
            "https://github.com/Karoly-Git/napiarfolyam",
    },
    {
        name: "Review slider",
        isActive: false,
        group: "web-app",
        category: "web-app",
        src: review,
        alt: "Slider",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/review-slider/",
        gitHubUrl:
            "https://github.com/Karoly-Git/review-slider",
    },
];
