import { Technologies } from "./app/model/technologies";
import { Experiences } from "./app/model/experiences";

export const TECHNOLOGIES: any = [
    {
        id: 1,
        icon: 'assets/blog.svg',
        title:'Programming Skill',
        subtitle:'Programming Languages',
        description: 'TypeScript, JavaScript, HTML, CSS, SASS, SQL'
    },
    {
        id: 2,
        icon: 'assets/portfolio.svg',
        title:'Frameworks',
        subtitle: 'Testing Frameworks',
        description: 'Playwright, Cypress, Cucumber'
    },
    {
        id: 3,
        icon: 'assets/building.svg',
        title: 'Tools',
        subtitle: 'Issue Tracking & Test Management',
        description: 'Jira, Xray, TestRail, Postman, Android Studio'
    }
]

export const EXPERIENCES: any = [
    {
        id: 1,
        icon: 'assets/support.svg',
        title: 'Software Development',
        description: 'I have experience in software development, with knowledge and skills in front-end, back-end, and APIs. Understanding the Software Development Life Cycle (SDLC) helps me a lot, especially when it comes to testing.'
    },
    {
        id: 2,
        icon: 'assets/passionate.svg',
        title: 'BtoB',
        description: 'Having experience in BtoB marketing, I often listened to client needs. This skill has been really helpful in my work as a tester on projects, as I understand the importance of meeting requirements.'
    },
    {
        id: 3,
        icon: 'assets/professional.svg',
        title: 'BtoC',
        description: "Having experience in BtoC settings, I often listened to user requests and feedback. This has taught me to always consider things from the user's point of view when I'm testing, making sure their needs are met."
    },
]
