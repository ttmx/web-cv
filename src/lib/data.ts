import Intermodal from "$lib/logos/Intermodal.svg";
import Gira from "$lib/logos/Gira+.svg";
import CMet from "$lib/logos/CMet.svg";
import avatar from "./pfp.png?enhanced";

export const RESUME_DATA = {
    name: "Tiago Teles",
    initials: "TT",
    location: "Lisbon, Portugal, Earth, GMT+0",
    locationLink: "https://www.google.com/maps/place/Lisbon",
    about:
        "Full stack engineer focused on low latency, production grade systems across mobility, energy and geospatial services.",
    summary:
        "I'm a computer lover who enjoys making solutions that actually help people, with other enthusiastic devs.\
  My journey has led me into the world of web/app development, security, distributed systems, high performance algorithms and urban mobility.",
    avatar: avatar,
    blogUrl: null,
    contact: {
        email: "cv@tteles.dev",
        github: "ttmx",
        tel: null,
        social: [
        ],
    },
    education: [
        {
            school: "NOVA School of Science and Technology",
            degree: "Master's Degree in Computer Engineering",
            start: "2021",
            end: "2025",
        },
        {
            school: "Vrije Universiteit Brussel",
            degree: "Erasmus+ BIP Distributed and Replicated Environments",
            start: "2023",
            end: "2023",
        },
        {
            school: "Dresden University of Technology",
            degree: "Erasmus Exchange Student in Computer Engineering",
            start: "2022",
            end: "2022",
        },
        {
            school: "NOVA School of Science and Technology",
            degree: "Bachelor's Degree in Computer Engineering",
            start: "2018",
            end: "2021",
        },
    ],
    work: [
        {
            company: "Carris Metropolitana",
            link: "https://carrismetropolitana.pt",
            badges: ["Next.js", "Docker", "Cloudflare", "PostgreSQL", "Linear.app"],
            title: "Full Stack Developer",
            start: "2024",
            end: "2024",
            description:
                "Bootstrapped the internal company tech, with a new website, api, automatic PDF generation, GTFS parsing pipelines, automatic deployments, Cloudflare caching, and one off tools for non technical people. Participated in bringing the company from close to zero to a fully fledged bus operation with comprehensive user available data.",
        },
        {
            company: "EDP NEW",
            link: "https://www.edp.com/en/inovacao/NEW",
            badges: ["Dissertation", "Distributed Systems", "Fullstack"],
            title: "Distributed Systems Researcher (Dissertation)",
            start: "2023",
            end: "2024",
            description:
                "Researched, planned and implemented an anonymous and cryptographically secure P2P system for autonomous energy trading, paving the way for lower energy costs and more sustainable grid operation.\n\
                Developed a web platform for understanding municipalities renewable energy potentials, assisting with consulting. Developed a platform to provide miscellaneous services from EDP NEW to the rest of EDP.",
        },
        {
            company: "Bluecover",
            link: "https://bluecover.pt",
            badges: ["Android", "Reverse Engineering", "Python"],
            title: "Intern",
            start: "2021",
            end: "2021",
            description:
                "Reverse engineered a protocol for more precise GPS tracking(RTCM). Created an Android application that used this protocol. Added new features to an existing application. Bootstrapped simple on-site infrastructure, enabling remote work in the midst of the COVID pandemic.",
        },
    ],
    skills: [
        "TypeScript",
        "React",
        "Svelte",
        "Kotlin",
        "Java",
        "Python",
        "Node.js",
        "Networking",
        "Docker",
        "Cryptography",
        "Distributed Systems",
        "Linux"
    ],
    projects: [
        {
            title: "Gira+",
            techStack: [
                "Typescript",
                "SvelteKit",
                "Bun",
                "TailwindCSS",
                "maplibre-gl",
                "Capacitor"
            ],
            description: "Alternative app for Lisbon's public bike sharing system, with a focus on speed, reliability and clean UI. Peaked 6th on the App Store for mobility apps, currently at 1300~ DAU, 5* Play Store/4.8* App Store. You can see these stats live at the link below.",
            logo: Gira,
            link: {
                label: "gira-mais.app",
                href: "https://gira-mais.app",
            },
        },
        {
            title: "Intermodal",
            techStack: [
                "Typescript",
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
            title: "carrismetropolitana.pt",
            techStack: [
                "Typescript",
                "Next.js",
                "React",
                "maplibre-gl",
                "MongoDB",
                "Redis",
            ],
            description: "Official website for the largest bus operator in Portugal including live bus tracking, history, statistics and more",
            logo: CMet,
            link: {
                label: "carrismetropolitana.pt",
                href: "https://carrismetropolitana.pt/",
            },
        },
    ],
} as const;
