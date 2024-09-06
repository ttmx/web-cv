import Intermodal from "$lib/logos/Intermodal.svg";
import Gira from "$lib/logos/Gira+.svg";

export const RESUME_DATA = {
    name: "Tiago Teles",
    initials: "TT",
    location: "Lisbon, Portugal, Earth, GMT+0",
    locationLink: "https://www.google.com/maps/place/Lisbon",
    about:
        "Full Stack Developer with a passion for fast, beautiful applications, and an interest in urban mobility.",
    summary:
        "I'm a computer lover who enjoys making solutions with other enthusiastic devs that actually help people. My journey has led me into the world of web/app development, security, distributed systems, high performance algorithms and urban mobility.",
    avatarUrl: "/pfp.png",
    personalWebsiteUrl: "https://tteles.dev",
    contact: {
        email: "cvweb@tteles.dev",
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
            end: "ongoing",
        },
        {
            school: "Dresden University of Technology",
            degree: "Eramus+ Exchange Student in Computer Engineering",
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
            company: "EDP NEW",
            link: "https://www.edp.com/en/inovacao/NEW",
            badges: ["Dissertation", "Distributed Systems", "Fullstack"],
            title: "Intern",
            start: "2023",
            end: "2024",
            description:
                "Researched, planned and implemented an anonymous and cryptographically secure P2P system for autonomous energy trading, paving the way for lower energy costs and more sustainable grid operation.\n\
                Developed a web platform for understanding municipalities renewable energy potentials, assisting with consulting. Developed a platform to provide miscelaneous services from EDP NEW to the rest of EDP.",
        },
        {
            company: "Bluecover",
            link: "https://bluecover.pt",
            badges: ["Android"],
            title: "Intern",
            start: "2021",
            end: "2021",
            description:
                "Reverse engineered a protocol for more precise GPS tracking(RTCM). Created an Android application that used this protocol. Added new features to an existing application. Bootstrapped simple on-site infrastructure, enabling remote work in the midst of the COVID pandemic.",
        },
    ],
    skills: [
        "Kotlin",
        "Java",
        "TypeScript",
        "Python",
        "Svelte",
        "React",
        "Node.js",
        "Networking",
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
                "TailwindCSS",
                "maplibre-gl",
                "Capacitor"
            ],
            description: "Alternative for Lisbon's public bike sharing system's official app, with a focus on speed, reliability and clean UI",
            logo: Gira,
            link: {
                label: "github/rt-evil-inc/gira",
                href: "https://github.com/rt-evil-inc/gira",
            },
        },
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
    ],
} as const;