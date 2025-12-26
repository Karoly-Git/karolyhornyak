import dmf from "../img/projects/dmf.webp";
import spw from "../img/projects/spw.webp";
import mary from "../img/projects/mary.webp";
import talpak from "../img/projects/talpak.webp";
import tsmrf from "../img/projects/tsmrf.png";
import webdev from "../img/projects/webdev.png";
import gazetteer from "../img/projects/gazetteer.webp";
import dog from "../img/projects/dog.png";
import namedayapi from "../img/projects/namedayapi.webp";
import weather from "../img/projects/weather.png";
import gomoku from "../img/projects/gomoku.webp";
import carousel from "../img/projects/carousel.png";
import bankholiday from "../img/projects/bankholiday.webp";
import exchange from "../img/projects/exchange.png";
import review from "../img/projects/review.png";
import cd from "../img/projects/cd.png";
import fsn from "../img/projects/fsn.webp";

export const projects = [
    {
        name: "Name Day API",
        isActive: true,
        group: "api",
        category: "API",
        src: namedayapi,
        alt: "Name day",
        description: "A simple REST API that provides name day information for the entire year, with filtering options by month, date, and country.",
        stack: "Node.js, Express.js, JSON, Swagger, GitHub, Heroku",
        liveDemoUrl: "https://karoly-git.github.io/name-day-frontend/",
        gitHubUrl: "https://github.com/Karoly-Git/name-day-backend",
        isRepoPrivate: false
    },
    {
        name: "Gazetteer",
        isActive: true,
        group: "api",
        category: "front-end app",
        src: gazetteer,       // or whatever your imported image variable is
        alt: "Gazetteer App",
        description:
            "An interactive world explorer that lets users view real-time country data—including weather, news, borders, population, photos, and currency—powered by multiple public APIs and an interactive Leaflet map.",
        stack: "HTML, CSS, JavaScript, PHP, Leaflet.js, APIs",
        liveDemoUrl: "https://transferstation.co.uk/gazetteer/",
        gitHubUrl: "https://github.com/Karoly-Git/gazetteer",
        isRepoPrivate: false
    },
    {
        name: "Form Submit Now",
        isActive: true,
        group: "api",
        category: "API",
        src: fsn,
        alt: "Name day",
        description: "A plug-and-play contact form API that lets developers send form submissions directly to email—no backend or database required.",
        stack: "HTML, CSS, JavaScript, Node.js",
        liveDemoUrl: "https://karoly-git.github.io/form-submit-now/",
        gitHubUrl: "https://github.com/Karoly-Git/form-submit-now",
        isRepoPrivate: false
    },
    {
        name: "Bank Holiday",
        isActive: true,
        group: "web-app",
        category: 'web-app',
        src: bankholiday,
        alt: "Bank Holiday",
        description: "A fast React + Vite app that fetches official UK bank-holiday data from the GOV.UK endpoint https://www.gov.uk/bank-holidays.json. Select a region and year to view accurate holiday dates in a clear, responsive interface.",
        stack: "React, Vite, JavaScript, CSS",
        liveDemoUrl: "https://karoly-git.github.io/bank-holidays-uk/",
        gitHubUrl: "https://github.com/Karoly-Git/bank-holidays-uk",
        isRepoPrivate: false
    },
    {
        name: "Photography Studio",
        isActive: true,
        group: "website",
        category: 'website',
        src: spw,
        alt: "SPW",
        description: "A fully responsive photography studio Progressive Web App built with React, Node.JavaScript, and Sass, featuring dynamic image galleries, service and portfolio pages, client testimonials, and integrated contact and session-booking forms for seamless client enquiries.",
        stack: "React, Vite, JavaScript, Sass, Node.js",
        liveDemoUrl: "https://www.sparklingwillowphotography.co.uk/",
        gitHubUrl: "https://github.com/Karoly-Git/sparkling-willow-photography",
        isRepoPrivate: false
    },
    {
        name: "Plumbing & Heating",
        isActive: true,
        group: "website",
        category: 'website',
        src: dmf,
        alt: "DMF",
        description: "A responsive React + Node.js service Progressive Web App showcasing plumbing and heating offerings, detailed pricing, terms pages, and integrated contact options—built with a clean, professional UI using Sass.",
        stack: "React, Vite, JavaScript, Sass, Node.js",
        liveDemoUrl: "https://dmfplumbingandheating.com/",
        gitHubUrl: "https://github.com/Karoly-Git/dmf-plumbing",
        isRepoPrivate: false
    },
    {
        name: "Sewing Workshop",
        isActive: true,
        group: "website",
        category: 'website',
        src: mary,
        alt: "Mary",
        description: "A multilingual tailoring Progressive Web App built with React, Node.JavaScript, and Sass, featuring service pages, and a clean responsive layout, with seamless language switching for English and Hungarian visitors.",
        stack: "React, Vite, JavaScript, Sass, Node.js",
        liveDemoUrl: "https://www.maryvarrodaja.hu/",
        gitHubUrl: "https://github.com/Karoly-Git/mary-varrodaja-vite",
        isRepoPrivate: false
    },
    {
        name: "Massage Salon",
        isActive: false,
        group: "website",
        category: 'website',
        src: talpak,
        alt: "Talpak",
        description: "Short description of the project.",
        stack: "React, JavaScript, Node.JavaScript, Sass",
        //liveDemoUrl: "https://www.talpak.hu/",
        liveDemoUrl: "https://talpak.hu/",
        gitHubUrl: "https://github.com/Karoly-Git/talpak",
        isRepoPrivate: true
    },
    {
        name: "WebDevMe",
        isActive: false,
        group: "website",
        category: 'website',
        src: webdev,
        alt: "WDM",
        description: "Short description of the project.",
        stack: "React, JavaScript, Node.JavaScript, Sass",
        liveDemoUrl: "https://webdevme.co.uk/",
        gitHubUrl: "https://github.com/Karoly-Git/portfolio"
    },
    {
        name: "Gomoku",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: gomoku,
        alt: "Gomoku",
        description: "Short description of the project.",
        stack: "HTML, Sass, JavaScript, React",
        liveDemoUrl: "https://karoly-git.github.io/gomoku/",
        gitHubUrl: "https://github.com/Karoly-Git/gomoku"
    },
    {
        name: "Map",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: "",
        alt: "Map App",
        description: "Short description of the project.",
        stack: "HTML, jQuery, CSS, PHP",
        liveDemoUrl: "https://karolyhornyak.com/gazetteer/",
        gitHubUrl: "https://github.com/Karoly-Git/karolyHornyak/tree/main/project1"
    },
    {
        name: "Company Directory",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: cd,
        alt: "Company Directory",
        description: "Short description of the project.",
        stack: "HTML, jQuery, CSS, PHP",
        liveDemoUrl: "https://karolyhornyak.com/company-directory/",
        gitHubUrl: "https://github.com/Karoly-Git/karolyHornyak/tree/main/project2"
    },
    {
        name: "Transfer Station Apps",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: tsmrf,
        alt: "TS & MRF",
        description: "Short description of the project",
        stack: "React, JavaScript, Node.JavaScript, Sass",
        liveDemoUrl: "https://transferstation.co.uk/",
        gitHubUrl: "https://github.com/Karoly-Git/transferstation"
    },
    {
        name: "Watch Dogs",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: dog,
        alt: "Map App",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/watch-dog-photos/",
        gitHubUrl: "https://github.com/Karoly-Git/watch-dog-photos"
    },
    {
        name: "Weather Info",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: weather,
        alt: "Weather info",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/weather-app/",
        gitHubUrl: "https://github.com/Karoly-Git/weather-app"
    },
    {
        name: "Image carousel",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: carousel,
        alt: "Carousel",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/img-carousel/",
        gitHubUrl: "https://github.com/Karoly-Git/gomoku"
    },
    {
        name: "Exchange Rate",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: exchange,
        alt: "Exchange",
        description: "Short description of the project.",
        stack: "HTML, CSS, JavaScript, React, Node.js",
        liveDemoUrl: "https://karoly-git.github.io/napiarfolyam/",
        gitHubUrl: "https://github.com/Karoly-Git/napiarfolyam"
    },
    {
        name: "Review slider",
        isActive: false,
        group: "web-app",
        category: 'web-app',
        src: review,
        alt: "Slider",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS",
        liveDemoUrl: "https://karoly-git.github.io/review-slider/",
        gitHubUrl: "https://github.com/Karoly-Git/review-slider"
    },
];

