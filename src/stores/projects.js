import { defineStore } from "pinia";

// Import project images
import paddockGearImage from "@/assets/images/paddockGear.png";
import etaalentImage from "@/assets/images/etaalent.png";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Paddock Gear",
        description:
          "A motorsport-themed e-commerce platform built with Vue.js.",
        image: paddockGearImage,
        technologies: ["Vue.js", "Bootstrap", "SCSS"],
        link: "/projects/1",
        githubUrl: "", // Add if available
        liveUrl: "", // Add if available
        featured: true,
        category: "E-commerce",
        completedDate: "2024",
        challenges:
          "Building a responsive e-commerce interface with modern design patterns",
        solutions:
          "Implemented Vue.js with Tailwind CSS for optimal user experience",
      },
      {
        id: 2,
        title: "Etaalent",
        description:
          "Large-scale team project. Responsible for frontend development using Vue.js, SCSS, and Bootstrap.",
        image: etaalentImage,
        technologies: ["Vue.js", "SCSS", "Bootstrap", "Team Collaboration"],
        link: "/projects/2",
        githubUrl: "", // Add if available
        liveUrl: "", // Add if available
        featured: true,
        category: "Team Project",
        completedDate: "May 2025",
        challenges:
          "Collaborating effectively with multidisciplinary teams, including Design and Backend Development, to ensure seamless integration and communication.",
        solutions:
          "Established clear communication channels, used Git for version control, and implemented reusable Vue components to streamline development and integration.",
      },
      {
        id: 3,
        title: "Portfolio WPL1",
        description:
          "My first portfolio website showcasing early projects and development journey, built with fundamental web technologies.",
        image: null,
        technologies: ["HTML", "CSS", "JavaScript", "Web Fundamentals"],
        link: "/projects/3",
        githubUrl: "", // Add if available
        liveUrl: "", // Add if available
        featured: true,
        category: "Portfolio",
        completedDate: "2024",
        challenges:
          "Learning fundamental web technologies and creating a professional portfolio",
        solutions:
          "Built with core web technologies focusing on clean code and responsive design",
      },
    ],
  }),

  getters: {
    // Get all featured projects
    featuredProjects: (state) => {
      return state.projects.filter((project) => project.featured);
    },

    // Get projects by category
    getProjectsByCategory: (state) => {
      return (category) =>
        state.projects.filter((project) => project.category === category);
    },

    // Get project by ID
    getProjectById: (state) => {
      return (id) => state.projects.find((project) => project.id === id);
    },

    // Get all unique technologies
    allTechnologies: (state) => {
      const techs = state.projects.flatMap((project) => project.technologies);
      return [...new Set(techs)];
    },

    // Get all unique categories
    allCategories: (state) => {
      const categories = state.projects.map((project) => project.category);
      return [...new Set(categories)];
    },

    // Get total project count
    projectCount: (state) => state.projects.length,
  },

  actions: {
    // Add a new project
    addProject(project) {
      const newProject = {
        id: this.projects.length + 1,
        featured: false,
        ...project,
      };
      this.projects.push(newProject);
    },

    // Update a project
    updateProject(id, updates) {
      const index = this.projects.findIndex((project) => project.id === id);
      if (index !== -1) {
        this.projects[index] = { ...this.projects[index], ...updates };
      }
    },

    // Delete a project
    deleteProject(id) {
      const index = this.projects.findIndex((project) => project.id === id);
      if (index !== -1) {
        this.projects.splice(index, 1);
      }
    },

    // Toggle featured status
    toggleFeatured(id) {
      const project = this.getProjectById(id);
      if (project) {
        project.featured = !project.featured;
      }
    },
  },
});
