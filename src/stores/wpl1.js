import { defineStore } from "pinia";

export const useWpl1Store = defineStore("wpl1", {
  state: () => ({
    courseInfo: {
      title: "WPL1: Workplace Learning 1",
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
        downloadLink: {
          url: "#",
          text: "Download POP Sessions Reflection PDF",
        },
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
          url: "#",
          text: "Download Company Seminar Reflections PDF",
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
          url: "#",
          text: "Download Job Market Analysis Report PDF",
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
          url: "#",
          text: "Download Dashboard Project Report PDF",
        },
      },
    ],

    learningOutcomes: [
      {
        id: 1,
        title: "Professional Communication",
        description:
          "Developed effective communication skills for professional environments, including presentation skills and collaborative work.",
        iconPath:
          "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        bgColor: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        id: 2,
        title: "Time & Project Management",
        description:
          "Mastered essential time management techniques and project planning skills crucial for professional success.",
        iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        bgColor: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-600 dark:text-green-400",
      },
      {
        id: 3,
        title: "Self-Reflection & Growth",
        description:
          "Cultivated self-awareness and continuous learning mindset essential for personal and professional development.",
        iconPath:
          "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        bgColor: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
    ],

    reflectionText:
      "WPL1 (Werkplekleren 1) was a transformative introduction to the professional world. This course helped me develop essential workplace skills including time management, team leadership, and professional communication. Through self-reflection exercises and real-world projects, I gained valuable insights into my strengths and areas for improvement, setting a solid foundation for my continued professional development.",

    downloadLinks: [
      {
        id: 1,
        text: "POP Sessions Reflection PDF",
        url: "#",
        buttonColor: "bg-indigo-600 hover:bg-indigo-700",
        primary: true,
      },
      {
        id: 2,
        text: "Complete WPL1 Reflection",
        url: "#",
        buttonColor: "bg-purple-600 hover:bg-purple-700",
        primary: false,
      },
      {
        id: 3,
        text: "All Assignment Files",
        url: "#",
        buttonColor: "bg-gray-600 hover:bg-gray-700",
        primary: false,
      },
    ],
  }),

  getters: {
    // Get assignment by ID
    getAssignmentById: (state) => (id) => {
      return state.assignments.find((assignment) => assignment.id === id);
    },

    // Get assignments with download links only
    getAssignmentsWithDownloads: (state) => {
      return state.assignments.filter((assignment) => assignment.downloadLink);
    },

    // Get all skill names from assignments
    getAllSkills: (state) => {
      const skills = new Set();
      state.assignments.forEach((assignment) => {
        assignment.skills.forEach((skill) => skills.add(skill.name));
      });
      return Array.from(skills);
    },

    // Get primary download link
    getPrimaryDownloadLink: (state) => {
      return state.downloadLinks.find((link) => link.primary);
    },
  },

  actions: {
    // Update assignment download link
    updateAssignmentDownloadLink(assignmentId, newUrl) {
      const assignment = this.getAssignmentById(assignmentId);
      if (assignment && assignment.downloadLink) {
        assignment.downloadLink.url = newUrl;
      }
    },

    // Update download link URL
    updateDownloadLink(linkId, newUrl) {
      const link = this.downloadLinks.find((l) => l.id === linkId);
      if (link) {
        link.url = newUrl;
      }
    },

    // Add new assignment
    addAssignment(assignment) {
      const newId = Math.max(...this.assignments.map((a) => a.id)) + 1;
      this.assignments.push({ ...assignment, id: newId });
    },
  },
});
