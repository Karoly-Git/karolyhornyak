import type { ReactNode } from "react";

export type Review = {
    isActive: boolean;
    name: string;
    comment: ReactNode;
    company: string;
};

export const reviews: Review[] = [
    {
        isActive: true,
        name: "Nicky",
        comment: <>
            Karoly redesigned my business website from the ground up, transforming it into a modern and professional platform I’m proud to share.
            He was responsive, flexible with changes, and contributed valuable suggestions throughout the process.
            The final result aligned perfectly with my vision.
        </>,
        company: "Sparkling Willow Photography",
    },
    {
        isActive: true,
        name: "Daniel",
        comment: <>
            Karoly modernised our website and helped shape it into a clear and engaging representation of our business.
            He provided practical guidance and tailored the project to our needs.
            We’re very pleased with the outcome and the overall collaboration.
        </>,
        company: "DMP Plumbing & Heating",
    },
    {
        isActive: true,
        name: "Mary",
        comment: <>
            Karoly guided me through the full process of building a new website from scratch.
            He took the time to understand my business and delivered a clean, user-friendly result that met my expectations.
            The process was structured and straightforward from start to finish.
        </>,
        company: "Mary's Sewing Workshop",
    },
    {
        isActive: true,
        name: "Anett",
        comment: <>
            Karoly developed the Talpak website with attention to detail and a clear understanding of the brand.
            The final interface is professional and easy to use, and it has been well received by our clients.
        </>,
        company: "Talpak Massage Salon",
    },
];
