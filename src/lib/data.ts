import Intermodal from "$lib/logos/Intermodal.svg";
import Gira from "$lib/logos/Gira+.svg";
import { GithubLogo } from "radix-icons-svelte";

export const RESUME_DATA = {
    name: "Tiago Teles",
    initials: "TT",
    location: "Lisbon, Portugal, Earth (sometimes)",
    locationLink: "https://www.google.com/maps/place/Lisbon",
    about:
        "Full Stack Developer with a passion for fast, beautiful applications, and an interest in urban mobility.",
    summary:
        "I'm a computer lover who enjoys making tools that help people. My journey has led me into the world of web development, security, distributed systems, algorithmics and urban mobility.",
    avatarUrl: "/pfp.png",
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
            badges: ["Android"],
            title: "Intern",
            start: "2021",
            end: "2021",
            description:
                "Reverse engineered a protocol for more precise GPS tracking(RTCM), created an Android application that used it and bootstrapped some on-site infrastructure.",
        },
        {
            company: "EDP NEW",
            link: "https://www.edp.com/en/inovacao/NEW",
            badges: ["Dissertation", "Distributed Systems", "Fullstack"],
            title: "Intern",
            start: "2023",
            end: "2024",
            description:
                "Worked on a few European projects, including creating a P2P energy market, and took a few web applications from 0 to production.",
        },
    ],
    skills: [
        "Kotlin",
        "Java",
        "TypeScript",
        "React",
        "Svelte",
        "Node.js",
        "Networking",
        "Linux"
    ],
    projects: [
        {
            title: "Intermodal",
            techStack: [
                "Javascript",
                "SvelteKit",
                "TailwindCSS",
                "maplibre-gl",
                "tileserver-gl",
                "planetiler",
                "PostgreSQL",
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
                "Typescript",
                "SvelteKit",
                "TailwindCSS",
                "maplibre-gl",
                "Capacitor"
            ],
            description: "Replacement for Lisbon's public bike sharing system's official app, with a focus on speed, reliability and clean UI",
            logo: Gira,
            link: {
                label: "github/rt-evil-inc/gira",
                href: "https://github.com/rt-evil-inc/gira",
            },
        },
    ],
} as const;