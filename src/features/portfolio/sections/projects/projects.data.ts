export interface Project {
    title: string;
    slug: string;
    cover: string;
    alt: string;
    excerpt: string;
    info: string,
    labels: string[];
    liveDemoUrl: string;
    gitHubUrl: string;
    isGitHubRepoPrivate?: boolean;
    isActive: boolean;
}

import { meta as bankholiday } from "@/features/portfolio/sections/projects/bankholiday/meta";
import { meta as carousel } from "@/features/portfolio/sections/projects/carousel/meta";
import { meta as cd } from "@/features/portfolio/sections/projects/cd/meta";
import { meta as dmf } from "@/features/portfolio/sections/projects/dmf/meta";
import { meta as dog } from "@/features/portfolio/sections/projects/dog/meta";
import { meta as exchange } from "@/features/portfolio/sections/projects/exchange/meta";
import { meta as fsn } from "@/features/portfolio/sections/projects/fsn/meta";
import { meta as gazetteer } from "@/features/portfolio/sections/projects/gazetteer/meta";
import { meta as gomoku } from "@/features/portfolio/sections/projects/gomoku/meta";
import { meta as mary } from "@/features/portfolio/sections/projects/mary/meta";
import { meta as namedayapi } from "@/features/portfolio/sections/projects/namedayapi/meta";
import { meta as slider } from "@/features/portfolio/sections/projects/slider/meta";
import { meta as spw } from "@/features/portfolio/sections/projects/spw/meta";
import { meta as talpak } from "@/features/portfolio/sections/projects/talpak/meta";
import { meta as tsmrf } from "@/features/portfolio/sections/projects/tsmrf/meta";
import { meta as weather } from "@/features/portfolio/sections/projects/weather/meta";
import { meta as kh } from "@/features/portfolio/sections/projects/kh/meta";

export const projects: Project[] = [
    kh,
    spw,
    mary,
    dmf,
    talpak,
    namedayapi,
    gazetteer,
    fsn,
    bankholiday,

    carousel,
    cd,
    dog,
    exchange,
    gomoku,
    slider,
    tsmrf,
    weather,
];
