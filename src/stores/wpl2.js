import { defineStore } from "pinia";

export const useWpl2Store = defineStore("wpl2", {
  state: () => ({
    courseInfo: {
      title: "WPL2: Case Etaalent",
      subtitle: "Large-scale team project.",
    },

    technologies: ["Vue.js", "Bootstrap", "Pinia"],

    caseStudy: {
      title: "Etaalent - Language Learning Platform",

      // WPL2 Case Study Structure - Core Requirements
      caseDescription: `
      The Etaalent project is a modern language learning platform developed as part of the WPL2 course. The point of the project was to simulate a real-world development environment, focusing on collaboration between frontend and backend teams, as well as design specialists.

      The project involved creating the branding and website for Etaalent, the goal was to showcase the client's expertise in language learning and attract new clients through a professional online presence.
    `,

      myContribution: `
      I served as the lead developer for the Etaalent project, overseeing the entire development lifecycle. My responsibilities included:

      - Implementing the frontend and wireframes provided by the design team.
      - Implementing the backend API endpoints for data retrieval given by my backend team.
      - makeing sure the frontend and backend teams were aligned in terms of data structures and API usage.
    `,

      learningsAndInsights: `
      Through this project, I deepened my understanding of Vue.js, Pinia, and Bootstrap. I gained practical experience in structuring applications and applying responsive design principles.

      The project also improved my skills in collaboration, problem-solving, and working with deadlines.
    `,

      finalResults: {
        deliverables: [
          {
            title: "Screenshots",
            description: "PDF with annotated screenshots",
            type: "Visual Demo",
            link: "../documents/Etaalentscreens.pdf", // or a video link if available
          },
          {
            title: "Technical Documentation",
            description:
              "Explanation of architecture, technologies, and implementation (no source code)",
            type: "Documentation",
            link: "/documents/wpl2-frontend-team-01-README.pdf",
          },
        ],
        technicalAchievements: [
          "Implemented Vue.js with modern development practices",
          "Created reusable component architecture",
          "Established responsive design for all devices",
          "Integrated state management with Pinia",
          "Collaborated effectively with design and backend teams",
        ],
      },

      projectObjectives: [
        {
          title: "More Visibility towards the public",
          description:
            "Showcase the client's expertise and methodology to attract new clients",
        },
        {
          title: "Modern Styling & Branding",
          description:
            "Implement new and innovative branding that reflects the client's values",
        },
        {
          title: "Functionality and Usability",
          description:
            "Creating user-friendly learning platform where users can easily navigate and access resources that the client offers",
        },
      ],

      technicalSpecs: {
        framework: "Vue.js",
        styling: "Bootstrap & custom CSS",
        state: "Pinia",
      },
    },

    downloadLinks: [
      {
        id: 3,
        text: "Reflection WPL2",
        url: "/documents/eindreflectiewpl2.pdf",
        buttonColor: "bg-gray-600 hover:bg-gray-700",
        primary: false,
      },
    ],
  }),
});
