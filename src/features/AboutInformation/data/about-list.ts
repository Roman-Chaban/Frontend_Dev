import { AboutListItems } from "../types/about-list";

const aboutListItems: AboutListItems = [
   {
      id: 1,
      role: "Software Engineer",
      fullName: "Roman Chaban",
      about: "Software Engineer with 1+ year of experience in React, Next.js, TypeScript, and Redux. Skilled in building scalable, high-performance web applications with a focus on responsive design, accessibility, and SEO. Proficient in unit and integration testing (Jest, React Testing Library) with 95% test coverage, reducing production bugs by 50%. Experienced in Agile (Scrum, Kanban) workflows, collaborating with cross-functional teams, and writing clean, maintainable code to deliver seamless user experiences.",
      languages: [
         {
            id: 1,
            language: "Ukrainian — Native",
         },
         {
            id: 2,
            language: "English — Intermediate (B1)",
         },
      ],
      courses: [
         {
            id: 1,
            course: `Udemy: Learn to Program in
            Javascript: Beginner to Pro.
            Javascript Essentials. Responsive
            Web & Mobile Development in
            HTML, CSS & Javascript`,
         },
         {
            id: 2,
            course: `
            Self-learning: Javascript.info,
            Reactjs.org, Nextjs.org, "Grokking
            Algorithms", CodeWars 4(ky)
         `,
         },
         {
            id: 3,
            course: "SmallTalk English Speaking Level Test",
         },
      ],
      education: [
         {
            id: 1,
            name: "Junior Specialist in Electrical Engineering",
            degree: "Stryi Vocational College LNUP",
            year: "(2016) - (2020)",
         },
         {
            id: 2,
            name: "Bachelor’s Degree in Electrical Engineering",
            degree: "Lviv University of Natural Resources Management",
            year: "(2020) - (2022)",
         },
      ],
   },
];
export { aboutListItems };
