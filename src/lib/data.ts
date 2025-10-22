import Intermodal from "$lib/logos/Intermodal.svg";
import Gira from "$lib/logos/Gira+.svg";
import CMet from "$lib/logos/CMet.svg";

export const RESUME_DATA = {
    name: "Tiago Teles",
    initials: "TT",
    location: "Lisbon, Portugal, Earth, GMT+0",
    locationLink: "https://www.google.com/maps/place/Lisbon",
    about:
        "Full Stack Developer with a passion for fast, beautiful applications, and an interest in urban mobility.",
    summary:
        "I'm a computer lover who enjoys making solutions that actually help people, with other enthusiastic devs. My journey has led me into the world of web/app development, security, distributed systems, high performance algorithms and urban mobility.",
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
            end: "2025",
        },
        {
            school: "Dresden University of Technology",
            degree: "Erasmus+ Exchange Student in Computer Engineering",
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
            badges: ["Next.js", "Docker", "Mantine", "SvelteKit", "Cloudflare", "Data Pipeline", "Linear.app"],
            title: "Consultant",
            start: "2024",
            end: "2024",
            description:
                "Bootstrapped the internal company tech, with a new website, automatic PDF generation, GTFS parsing pipelines, automatic deployments, Cloudflare caching, and one off tools for non technical people. A bit of everything, participated in bringing the company from close to zero to the best in the business.",
        },
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
            description: "Alternative app for Lisbon's public bike sharing system, with a focus on speed, reliability and clean UI. Peaked 6th on the App Store for mobility apps, currently at 700~ DAU, 5* Play Store/4.8* App Store. You can see these stats live at the link below.",
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
                "Mantine",
                "maplibre-gl",
                "MongoDB",
                "Redis",
            ],
            description: "Official website for the largest bus operator in Portugal",
            logo: CMet,
            link: {
                label: "carrismetropolitana.pt",
                href: "https://carrismetropolitana.pt/",
            },
        },
        {
            title: "Bus Schedule Generator",
            techStack: [
                "Typescript",
                "Next.js",
                "React",
                "Tailwind",
                "Puppeteer",
                "Bun",
            ],
            description: "PDF Bus schedule generator from GTFS, these schedules are being deployed throughout Metropolitan Lisbon to this day",
            logo: CMet,
            link: {
                label: "Schedule repository",
                href: "https://storage.carrismetropolitana.pt/static/pdfs/horarios",
            },
        },
    ],
} as const;
