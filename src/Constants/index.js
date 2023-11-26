import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    springboot,
    mySql,
    blockchain,
    solidity,
    java,
    ml,
    microservice,
    socket
} from "../assets/icons";
import three from './../assets/icons/three.png'
import youtube from './../assets/icons/youtube.png'
import hackout from './../assets/certificate/thehitmansubhadeepsarkar@gmail.com.pdf'

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: springboot,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: blockchain,
        name: "Blockchain",
        type: "Web3",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: three,
        name: "Three",
        type: "Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: mySql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: microservice,
        name: "Microservices",
        type: "Backend",
    },
    {
        imageUrl: ml,
        name: "AI/ML",
        type: "Machine Learning",
    },
    {
        imageUrl: socket,
        name: "Socket",
        type: "Connection Establish",
    }
];

export const projects = [
    {
        title: "Decentralised Cloud using Web3",
        company_name: "Hackout 2023",
        icon: blockchain,
        iconBg: "#accbe1",
        date: "Nov 2023 - Dec 2023",
        points: [
            "Developed a decentralised cloud system using web3 technology that will allow you to share access of your files with another person",
            "User's files will be stored in IPFS that is a decentralised server and the access of each files are secured by Blockchain technology",
            "User can request someone to get access of their files. And user can grant the request or remove the access any time",
            "There is no file format restriction. Just like google drive user can upload image, pdf, audio, video etc",
        ],
        github:'https://github.com/CR-Samrat/DecentralisedCloud-main.git',
        youtube:'https://youtu.be/_ui3AINxilQ?si=ZTI2EeSL8xilBhYa',
        technologies: ["Solidity","IPFS","React JS","Node JS","Ethers.JS","Mongodb","Web 3","Tailwind CSS","Hardhat"]
    },
    {
        title: "Geo Insight India",
        company_name: "Karmakshetra 2023",
        icon: react,
        iconBg: "#fbc3bc",
        date: "Oct 2023 - Nov 2023",
        points: [
            "To enhance the public awareness we introduced Geo Insight India that will bring together all the authorised government information in a single place.",
            "Whether its covid pandemic, water crisis or education status of each state of india we were needed to search explicitly also we are not sure which information to trust.",
            "Geo Insight India presents all these information from trusted government data to the users in an user friendly environment",
            "We introduced react simple maps to enhance the viewing experience of the users",
        ],
        github:"https://github.com/CR-Samrat/GeoInsight_India.git",
        youtube:"https://youtu.be/QZ9tyRaP-T8?si=mL3lK3FxjudAWNfa",
        technologies: ["React JS","Javascript","Tailwind CSS","Rest API","React-Simple-Maps"]
    },
    {
        title: "Crowd Source Question Paper Generation",
        company_name: "Internal Hackathon",
        icon: springboot,
        iconBg: "#b7e4c7",
        date: "Mar 2023 - Jun 2023",
        points: [
            "Developed a Crowd Source Question Paper generator that will ease the process of generating question papers with quality questions and ML verification",
            "Subject matter experts contribute questions in our system. Those questions will be further varified by an ML algorithm to check if similar question exists",
            "If similar questions doesn't exist then the algorithm will predict a difficulty and marks of that system and store in the database.",
            "Any user can create question paper of any subject by providing some common details like paper name, topic, full marks etc.",
        ],
        github:"https://github.com/CR-Samrat/Crowd-Source-QuestionPaper-Generation.git",
        github_2:"https://github.com/CR-Samrat/Hackethon_springboot.git",
        youtube:"https://youtu.be/aAqnSSw9ZzU",
        technologies: ["Spring Boot","Java","Machine Learning","Next JS","Tailwind CSS","MySQL"]
    },
    {
        title: "Client Server Model for Group Chat",
        company_name: "MCA 2nd Semester",
        icon: java,
        iconBg: "#a2d2ff",
        date: "May 2023 - June 2023",
        points: [
            "Created a client server model using Java Socket to enable communication",
            "Clients can communicate privately or in a group chat",
            "Very easy to use with an user friendly experience",
        ],
        github:"https://github.com/CR-Samrat/Client-Server-model-for-GroupChat.git",
        technologies: ["Java","Socket Programming"]
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const experiences = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'League of Error Coding Competition',
        description: 'Secured 2nd place in the coding contest "League of Error" presented by Coders club in BBIT campus Calcutta',
        link: 'https://ninjasfiles.s3.amazonaws.com/certificate_of_event_league_of_errors_coding_competition_d35ee2ebe31cadbcaa76.pdf',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'IBM Data Analytics Internship by CSRBOX',
        description: 'Successfully completed IBM Skills Build program and CSRBOX academic Internship from 19th June to 28th July 2023',
        link: 'https://media.licdn.com/dms/document/media/D4D1FAQG17ol3IVeQWg/feedshare-document-pdf-analyzed/0/1696141258219?e=1701302400&v=beta&t=nim3nypUdHVQA95Wykbsk30bxJEGV7NJ1ISbdXgs62E',
    },
    {
        iconUrl: ml,
        theme: 'btn-back-blue',
        name: 'Karmakshetra 2023 Hackathon',
        description: 'Participated in Karmakshetra hackathon on October 2023 which was organised by Bytemonk',
        link: 'https://certificate.givemycertificate.com/c/a5810884-4778-408d-82f2-ab97adacfcac',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Hackout 2023 Hackathon',
        description: 'Participated in Hackout hackathon on November 2023 which was organised in IIT Kharagpur',
        link: hackout,
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Geek For Geeks',
        description: 'Completed over 110+ coding problems on Geek for Geeks platform. With a current institute rank of 64',
        link: 'https://auth.geeksforgeeks.org/user/thehitmansubhadeepsarkar',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Leetcode',
        description: 'Completed over 110+ coding problems on Geek for Geeks platform also',
        link: 'https://leetcode.com/Subhadeep23/',
    }
];