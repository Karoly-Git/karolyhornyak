import dmf from "../img/projects/dmf.png";
import spw from "../img/projects/spw.png";
import mary from "../img/projects/mary.png";
import talpak from "../img/projects/talpak.png";
import tsmrf from "../img/projects/tsmrf.png";
import webdev from "../img/projects/webdev.png";
import mapapp from "../img/projects/mapapp.png";
import dog from "../img/projects/dog.png";
import namedayapi from "../img/projects/namedayapi.png";
import weather from "../img/projects/weather.png";
import gomoku from "../img/projects/gomoku.png";
import carousel from "../img/projects/carousel.png";
import bankholiday from "../img/projects/bankholiday.png";
import exchange from "../img/projects/exchange.png";
import review from "../img/projects/review.png";
import cd from "../img/projects/cd.png";
import fsn from "../img/projects/fsn.png";

export const projects = [
    {
        name: "Plumbing & Heating",
        isActive: true,
        group: "website",
        category: 'website',
        src: dmf,
        alt: "DMF",
        description: "Short description of the project.",
        stack: "React, JS, NodeJS, Sass",
        liveDemoUrl: "https://dmfplumbingandheating.com/",
        gitHubUrl: "https://github.com/Karoly-Git/dmf-plumbing",
        isRepoPrivate: true
    },
    {
        name: "Photography Studio",
        isActive: true,
        group: "website",
        category: 'website',
        src: spw,
        alt: "SPW",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS, Handlebars",
        liveDemoUrl: "https://www.sparklingwillowphotography.co.uk/",
        gitHubUrl: "https://github.com/Karoly-Git/sparkling-willow-photography",
        isRepoPrivate: true
    },
    {
        name: "Sewing Workshop",
        isActive: true,
        group: "website",
        category: 'website',
        src: mary,
        alt: "Mary",
        description: "Short description of the project.",
        stack: "React, JS, NodeJS, Sass",
        liveDemoUrl: "https://www.maryvarrodaja.hu/",
        gitHubUrl: "https://github.com/Karoly-Git/mary-varrodaja",
        isRepoPrivate: true
    },
    {
        name: "Massage Salon",
        isActive: true,
        group: "website",
        category: 'website',
        src: talpak,
        alt: "Talpak",
        description: "Short description of the project.",
        stack: "React, JS, NodeJS, Sass",
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
        stack: "React, JS, NodeJS, Sass",
        liveDemoUrl: "https://webdevme.co.uk/",
        gitHubUrl: "https://github.com/Karoly-Git/portfolio"
    },
    {
        name: "Form Submit Now",
        isActive: true,
        group: "api",
        category: "cdn",
        src: fsn,
        alt: "Name day",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS, NodeJS",
        liveDemoUrl: "https://karoly-git.github.io/form-submit-now/",
        gitHubUrl: "https://github.com/Karoly-Git/form-submit-now"
    },
    {
        name: "Name Day",
        isActive: true,
        group: "api",
        category: "api",
        src: namedayapi,
        alt: "Name day",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS, NodeJS",
        liveDemoUrl: "https://karoly-git.github.io/name-day/",
        gitHubUrl: "https://github.com/Karoly-Git/name-day"
    },
    {
        name: "Gomoku",
        isActive: true,
        group: "web-app",
        category: 'web-app',
        src: gomoku,
        alt: "Gomoku",
        description: "Short description of the project.",
        stack: "HTML, Sass, JS, ReactJS",
        liveDemoUrl: "https://karoly-git.github.io/gomoku/",
        gitHubUrl: "https://github.com/Karoly-Git/gomoku"
    },
    {
        name: "Bank Holiday",
        isActive: true,
        group: "web-app",
        category: 'web-app',
        src: bankholiday,
        alt: "Bank Holiday",
        description: "Short description of the project.",
        stack: "HTML, CSS, JS, ReactJS",
        liveDemoUrl: "https://karoly-git.github.io/bank-holiday-uk/",
        gitHubUrl: "https://github.com/Karoly-Git/bank-holiday-uk"
    },
    {
        name: "Map",
        isActive: !!!true,
        group: "web-app",
        category: 'web-app',
        src: mapapp,
        alt: "Map App",
        description: "Short description of the project.",
        stack: "HTML, jQuery, CSS, PHP",
        liveDemoUrl: "https://karolyhornyak.co.uk/gazetteer/",
        gitHubUrl: "https://github.com/Karoly-Git/karolyHornyak/tree/main/project1"
    },
    {
        name: "Company Directory",
        isActive: true,
        group: "web-app",
        category: 'web-app',
        src: cd,
        alt: "Company Directory",
        description: "Short description of the project.",
        stack: "HTML, jQuery, CSS, PHP",
        liveDemoUrl: "https://karolyhornyak.co.uk/company-directory/",
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
        stack: "React, JS, NodeJS, Sass",
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
        stack: "HTML, CSS, JS, ReactJS, NodeJS",
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

