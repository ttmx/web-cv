import Intermodal from "$lib/logos/Intermodal.svg";
import { GithubLogo } from "radix-icons-svelte";

export const RESUME_DATA = {
    name: "Tiago Teles",
    initials: "TT",
    location: "Lisbon, Portugal, Earth (sometimes)",
    locationLink: "https://www.google.com/maps/place/Lisbon",
    about:
        "Full Stack Engineer focused on building products with extra attention to detail",
    summary:
        "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
    avatarUrl: "https://avatars.githubusercontent.com/u/12669467?v=4",
    personalWebsiteUrl: "https://tteles.dev",
    contact: {
        email: "cvweb@tteles.dev",
        tel: null,
        social: [
            {
                name: "GitHub",
                url: "https://github.com/ttmx",
                icon: GithubLogo,
            },
        ],
    },
    education: [
        {
            school: "NOVA School of Science and Technology",
            degree: "Bachelor's Degree in Computer Engineering",
            start: "2018",
            end: "2021",
        },
        {
            school: "Dresden University of Technology",
            degree: "Eramus+ Exchange Student in Computer Engineering",
            start: "2022",
            end: "2022",
        },
        {
            school: "NOVA School of Science and Technology",
            degree: "Master's Degree in Computer Engineering",
            start: "2021",
            end: "ongoing",
        },
    ],
    work: [
        {
            company: "Bluecover",
            link: "https://bluecover.pt",
            badges: [],
            title: "Intern",
            start: "2021",
            end: "2021",
            description:
                "Reverse engineered part of a protocol more precise GPS tracking, created an application that used it and did small sysadmin tasks.",
        },
        {
            company: "EDP NEW",
            link: "https://www.edp.com/en/inovacao/NEW",
            badges: ["Dissertation"],
            title: "Intern",
            start: "2023",
            end: "2024",
            description:
                "Worked on a few European projects, including creating a p2p energy market, and fully developed some web applications",
        },
    ],
    skills: [
        "Kotlin",
        "TypeScript",
        "Python",
        "React",
        "Svelte",
        "Node.js",
    ],
    projects: [
        {
            title: "Intermodal",
            techStack: [
                "Side Project",
                "Javascript",
                "SvelteKit",
                "Vite",
                "TailwindCSS",
                "maplibre",
                "tileserver-gl",
                "planetiler",
                "Rust",
                "Axum",
            ],
            description: "A platform to collect and access public transport data, including accessibility, visibility and other metrics for stops",
            logo: Intermodal,
            link: {
                label: "editor.intermodal.pt",
                href: "https://editor.intermodal.pt/",
            },
        },
        {
            title: "Gira+",
            techStack: [
                "Side Project",
                "Javascript",
                "SvelteKit",
                "Vite",
                "TailwindCSS",
                "maplibre",
                "tileserver-gl",
                "planetiler",
                "Rust",
                "Axum",
            ],
            description: "Replacement for the official app",
            logo: Intermodal,
            link: {
                label: "editor.intermodal.pt",
                href: "https://editor.intermodal.pt/",
            },
        },
    ],
} as const;