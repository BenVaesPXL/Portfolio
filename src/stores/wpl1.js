import { defineStore } from "pinia";

export const useWpl1Store = defineStore("wpl1", {
  state: () => ({
    courseInfo: {
      title: "WPL1",
      subtitle: "Introduction to the Job Market & Professional Development",
      duration: "1 Semester",
      credits: "6 ECTS",
      grade: "Passed",
      year: "2024",
      description:
        "WPL1 (Werkplekleren 1) was my first introduction to workplace learning, focusing on professional development, job market orientation, and building essential workplace skills while gaining technical competencies.",
    },

    keySkills: [
      "Professional Skills",
      "Time Management",
      "Team Leadership",
      "Project Management",
      "Self-Reflection",
    ],

    learningFocus: [
      {
        title: "Professional Development",
        description:
          "Building self-awareness and understanding workplace dynamics",
      },
      {
        title: "Time Management",
        description:
          "Learning to organize tasks, prioritize responsibilities, and meet deadlines",
      },
      {
        title: "Team Leadership",
        description:
          "Developing leadership skills and effective communication in team environments",
      },
      {
        title: "Technical Integration",
        description:
          "Applying programming skills in real workplace scenarios and projects",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "POP Sessions",
        description:
          "Our first WPL assignment focused on self-discovery through structured reflection sessions. We analyzed our strengths, weaknesses, and how we handle challenges, with emphasis on critical self-reflection and personal development.",
        callToAction:
          "Curious about my reflections? Check out the attached document!",
        skills: [
          {
            name: "Self-Reflection",
            bgColor: "bg-purple-100",
            textColor: "text-purple-800",
          },
          {
            name: "Personal Development",
            bgColor: "bg-blue-100",
            textColor: "text-blue-800",
          },
          {
            name: "Quality Assessment",
            bgColor: "bg-green-100",
            textColor: "text-green-800",
          },
        ],
        popPdfs: [
          {
            url: "/documents/Les2 - POP - Wat is jouw motivatie Ben Vaes.pdf",
            text: "POP: Wat is jouw motivatie?",
          },
          {
            url: "/documents/Opdracht Feedback & Reflecteren Ben Vaes.pdf",
            text: "POP: Feedback & Reflecteren",
          },
          {
            url: "/documents/Vragenlijst Personal Branding vs Imago.pdf",
            text: "POP: Personal Branding vs Imago",
          },
        ],
        downloadLink: null,
      },
      {
        id: 2,
        title: "Company Seminars",
        description:
          "On October 14th and 21st, several companies (two development companies and two design companies) came to speak for the course. The goal was to offer us students a first introduction to different companies: how they work, what we can expect from such a workplace, and what opportunities lie ahead for our future. For each of these companies, I prepared a short reflection on what stayed with me and what I thought of them.",
        callToAction: "Want to read my company insights and reflections?",
        skills: [
          {
            name: "Industry Analysis",
            bgColor: "bg-orange-100",
            textColor: "text-orange-800",
          },
          {
            name: "Professional Networking",
            bgColor: "bg-indigo-100",
            textColor: "text-indigo-800",
          },
        ],
        downloadLink: {
          url: "/documents/Reflectie Seminars WPL1 Vaes Ben.pdf",
          text: "Company Seminar Reflections PDF",
        },
      },
      {
        id: 3,
        title: "Job Market Analysis & Vacancy Research",
        description:
          "As part of our assignment, we researched job vacancies to gain insight into current developments within the field. We focused on expectations around both hard and soft skills. Additionally, we looked at what we as future professionals can expect in the job market. We selected vacancies that align with our interests, skills, and the roles we might see ourselves working in later. This process has given us valuable insights into the requirements and opportunities within our chosen sector.",
        callToAction:
          "Interested in my job market findings and vacancy analysis?",
        skills: [
          {
            name: "Market Research",
            bgColor: "bg-green-100",
            textColor: "text-green-800",
          },
          {
            name: "Skills Analysis",
            bgColor: "bg-purple-100",
            textColor: "text-purple-800",
          },
          {
            name: "Career Planning",
            bgColor: "bg-blue-100",
            textColor: "text-blue-800",
          },
        ],
        downloadLink: {
          url: "/documents/Analyse arbeidsmarkt Vaes Ben.pdf",
          text: "Job Market Analysis Report PDF",
        },
      },
      {
        id: 4,
        title: "Dashboard Design Project",
        description:
          "The first real project we worked on was the dashboard project. This group work involved designing a dashboard where we presented information about ourselves — comparable to a visual CV. The project encompassed the full design process, including documentation and reflection. After completion, we reflected on what went well and what could be improved, with the goal of further developing our teamwork skills and design abilities for future projects. Below you can find screenshots of the dashboard we designed.",
        callToAction:
          "Want to see our dashboard design and process documentation?",
        skills: [
          {
            name: "UI/UX Design",
            bgColor: "bg-red-100",
            textColor: "text-red-800",
          },
          {
            name: "Team Collaboration",
            bgColor: "bg-yellow-100",
            textColor: "text-yellow-800",
          },
          {
            name: "Design Documentation",
            bgColor: "bg-indigo-100",
            textColor: "text-indigo-800",
          },
        ],
        downloadLink: {
          url: "/images/Dashboard screenshot.png",
          text: "View Dashboard Screenshot",
        },
      },
    ],

    reflectionText:
      "WPL1 (Werkplekleren 1) was a transformative introduction to the professional world. This course helped me develop essential workplace skills including time management, team leadership, and professional communication. Through self-reflection exercises and real-world projects, I gained valuable insights into my strengths and areas for improvement, setting a solid foundation for my continued professional development.",

    downloadLinks: [
      {
        id: 1,
        text: "Complete WPL1 Reflection",
        url: "/documents/EindReflectieWPL1BenVaes.pdf",
        buttonColor: "bg-purple-600 hover:bg-purple-700",
        primary: true,
      },
    ],
  }),
});
