import {  Learns, Nugats, Internshala } from "../assets/images";
import {
    VedaCart,
    Atithi,
    Game,
    contact,
    css,
    github,
    html,
    JAVA,
    MYSQL,
    javascript,
    linkedin,
    react,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl:html,
        name: "HTML",
        type:"Frontend",
    },
    {
            imageUrl: css,
            name: "CSS",
            type: "Frontend",
        
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: JAVA,
        name: "JAVA",
        type:   "Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: MYSQL,
        name: "MYSql",
        type:   "DataBase",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Nugats Technology",
        icon: Nugats,
        iconBg: "#accbe1",
        date: "July 2023 - December 2023",
        points: [
            "In this Internship,I have worked on ReactJS , HTML, and CSS & JAVASCRIPT.",
            "Acquired proficiency in HTML and CSS also for building interactive and responsive web applications.",
            "Implementing responsive design and also contribute to various phases Of SDLC and gain hands-on experience.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Developed and optimized responsive website features using HTML, CSS and JavaScript and also using the open-source Js library (ReactJs).",
        ],
    },
    {
        title: "Training",
        company_name: "Internshala",
        icon: Internshala,
        iconBg: "#fbc3bc",
        date: "August 2021 - October 2021",
        points: [
            "Completed a semester-long internship at Internshala, gaining hands-on experience in C++ and OOPs skills while demonstrating a strong work ethic and the ability to thrive in a professional environment.",
            "Demonstrated a strong work ethic by consistently meeting project deadlines and delivering high-quality code.",
            "Developing and maintaining a Projects using C++ and OOPS skills and other related technologies.",
            " Developed and implemented a some good team project and given over contribution in team to making a projects",
        ],
    },
    {
        title: "Internship",
        company_name: "LearnX",
        icon: Learns,
        iconBg: "#b7e4c7",
        date: "Feb 2020 - April 2020",
        points: [
            "In this learnx Internship, I worked on the project of Java programming, and I got a chance to make a JAVA project.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Spearheaded the use of JAVA and C++ programming language to optimize code execution, resulting in a decrease in system response and improvement in overall application performance.",
            "I have made a project in these internship named ATM Machine.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sparshtyagi1811',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sparsh-tyagi-94b2831b7/',
    }
];

export const projects = [
    {
        iconUrl: VedaCart,
        theme: 'btn-back-blue',
        name: 'VedaCart',
        description: 'VedaCart is your gateway to a world of enlightened shopping. Embrace the essence of knowledge and wisdom as you explore a curated collection of quality products..',
        link: 'https://veda-cart.vercel.app/'
    },
    {
        iconUrl: Atithi,
        theme: 'btn-back-blue',
        name: 'Athithyam',
        description: 'This is Web Development Project , I have made, "Athithyam" is a Sanskrit word which means "Hospitality". And this is a Hotel Booking Website is a comprehensive online platform designed to simplify and enhance the process of booking accommodations for travelers.',
        link: 'https://athitya.vercel.app/',
    },
    {
        iconUrl: Game,
        theme: 'btn-back-blue',
        name: 'ChitRanjan',
        description: 'ChitRanjan (Rock Paper Scissors) This is a mini project. We have played it a lot in my childhood. We have created a digital version of it in JavaScript. This entire project is made with HTML, CSS and JavaScript.',
        link: 'https://chit-ranjan.vercel.app/',
    },
   
];