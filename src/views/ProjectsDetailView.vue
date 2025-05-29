<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div v-if="project" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Back Button -->
      <div class="mb-8">
        <router-link
          to="/projects"
          class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Projects
        </router-link>
      </div>

      <!-- Project Header -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1
            class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {{ project.title }}
          </h1>
          <p
            class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            {{ project.description }}
          </p>

          <!-- Technologies -->
          <div class="mb-8">
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              Technologies Used
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Project Links -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 text-center"
            >
              View Live Demo
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 text-center"
            >
              View Code
            </a>
          </div>
        </div>

        <!-- Project Image -->
        <div v-if="project.image" class="order-first lg:order-last">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      <!-- Project Details -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <!-- Category -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Category
          </h3>
          <p class="text-gray-600 dark:text-gray-300">{{ project.category }}</p>
        </div>

        <!-- Completed Date -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Completed
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ project.completedDate }}
          </p>
        </div>

        <!-- Status -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Status
          </h3>
          <span
            :class="project.featured ? 'text-green-600' : 'text-gray-600'"
            class="font-medium"
          >
            {{ project.featured ? "Featured Project" : "Portfolio Project" }}
          </span>
        </div>
      </div>

      <!-- Challenges and Solutions -->
      <div
        v-if="project.challenges || project.solutions"
        class="grid lg:grid-cols-2 gap-8"
      >
        <!-- Challenges -->
        <div
          v-if="project.challenges"
          class="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Challenges
          </h3>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ project.challenges }}
          </p>
        </div>

        <!-- Solutions -->
        <div
          v-if="project.solutions"
          class="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Solutions
          </h3>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ project.solutions }}
          </p>
        </div>
      </div>
    </div>

    <!-- Project Not Found -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The project you're looking for doesn't exist.
        </p>
        <router-link
          to="/projects"
          class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Back to Projects
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useProjectsStore } from "@/stores/projects";

export default {
  name: "ProjectsDetailView",
  computed: {
    ...mapStores(useProjectsStore),
    project() {
      const id = parseInt(this.$route.params.id);
      return this.projectsStore.getProjectById(id);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
