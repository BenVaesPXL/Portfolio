<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <section class="py-16 px-6 sm:px-8 max-w-6xl mx-auto">
      <!-- All Projects Grid -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          All Projects
        </h1>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          Explore my complete portfolio of web development projects
        </p>
      </div>

      <!-- Project Categories Filter -->
      <CategoryFilter
        v-model="selectedCategory"
        :categories="categories"
        all-categories-label="All Projects"
      />

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          class="project-card"
        >
          <div class="flex flex-col gap-2">
            <!-- Technologies -->
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                class="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 3"
                class="text-xs text-gray-500 dark:text-gray-400"
              >
                +{{ project.technologies.length - 3 }} more
              </span>
            </div>

            <!-- Action Button -->
            <router-link
              :to="project.link"
              class="inline-flex items-center justify-center rounded-lg border-2 border-indigo-600 px-4 py-2 font-medium text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600 hover:text-white dark:hover:text-white group"
            >
              <span>View Details</span>
              <svg
                class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </router-link>
          </div>
        </ProjectCard>
      </div>

      <!-- Project Stats -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <div class="text-3xl font-bold text-indigo-600 mb-2">
            {{ projectCount }}
          </div>
          <div class="text-gray-600 dark:text-gray-400">Total Projects</div>
        </div>
        <div
          class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <div class="text-3xl font-bold text-indigo-600 mb-2">
            {{ technologies.length }}
          </div>
          <div class="text-gray-600 dark:text-gray-400">Technologies Used</div>
        </div>
        <div
          class="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <div class="text-3xl font-bold text-indigo-600 mb-2">
            {{ categories.length }}
          </div>
          <div class="text-gray-600 dark:text-gray-400">Project Categories</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import { useProjectsStore } from "@/stores/projects.js";
import { mapStores } from "pinia";

export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
    CategoryFilter,
  },
  data() {
    return {
      selectedCategory: "all",
    };
  },
  computed: {
    ...mapStores(useProjectsStore),
    categories() {
      return this.projectsStore.allCategories;
    },
    technologies() {
      return this.projectsStore.allTechnologies;
    },
    projectCount() {
      return this.projectsStore.projectCount;
    },
    filteredProjects() {
      if (this.selectedCategory === "all") {
        return this.projectsStore.projects;
      }
      return this.projectsStore.projects.filter(
        (project) => project.category === this.selectedCategory
      );
    },
  },
};
</script>

<style>
/* Match the base website's styling */
</style>
