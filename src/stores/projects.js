import { defineStore } from "pinia";

// Import project images
import paddockGearImage from "@/assets/images/paddockGear.png";
import etaalentImage from "@/assets/images/etaalent.png";
import portfolioWPL1Image from "@/assets/images/Portfolio-BenVaes.jpeg";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Paddock Gear",
        description:
          "A motorsport-themed e-commerce platform built with Vue.js.",
        image: paddockGearImage,
        technologies: ["Vue.js", "Bootstrap", "SCSS", "Pinia"],
        link: "/projects/1",
        githubUrl: "", // Add if available
        liveUrl: "", // Add if available
        status: "School",
        category: "E-commerce",
        completedDate: "2024",
      },
      {
        id: 2,
        title: "Etaalent",
        description:
          "Large-scale team project. Responsible for frontend development using Vue.js, SCSS, and Bootstrap. Check the WPL2 case study for more details.",
        image: etaalentImage,
        technologies: ["Vue.js", "SCSS", "Bootstrap", "Team Collaboration"],
        link: "/projects/2",
        githubUrl: "", // Add if available
        liveUrl: "", // Add if available
        status: "School",
        category: "Team Project",
        completedDate: "May 2025",
      },
      {
        id: 3,
        title: "Portfolio WPL1",
        description:
          "My first portfolio website showcasing early projects, built with fundamental web technologies.",
        image: portfolioWPL1Image,
        technologies: ["HTML", "CSS", "JavaScript", "Web Fundamentals"],
        link: "/projects/3",
        githubUrl: "", // Add if available
        liveUrl: "https://portfoliobenvaes.netlify.app/", // Add if available
        status: "School",
        category: "Portfolio",
        completedDate: "2024",
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
