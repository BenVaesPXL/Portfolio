<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white py-16"
    >
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ courseInfo.title }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-indigo-100">
            {{ courseInfo.subtitle }}
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <span
              v-for="skill in keySkills"
              :key="skill"
              class="px-4 py-2 bg-white/20 rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Overview -->
    <section class="py-16">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Course Overview
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {{ courseInfo.description }}
              </p>
              <div class="space-y-4">
                <div
                  v-for="focus in learningFocus"
                  :key="focus.title"
                  class="flex items-start"
                >
                  <div
                    class="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"
                  ></div>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>{{ focus.title }}:</strong> {{ focus.description }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Course Details
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300"
                    >Duration:</span
                  >
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    courseInfo.duration
                  }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300">Credits:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    courseInfo.credits
                  }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300">Grade:</span>
                  <span
                    class="text-green-600 dark:text-green-400 font-medium"
                    >{{ courseInfo.grade }}</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300">Year:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    courseInfo.year
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Projects -->
    <section class="py-16 bg-gray-100 dark:bg-gray-800">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Key Learning Activities & Assignments
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <AssignmentCard
              v-for="(assignment, index) in assignments"
              :key="index"
              :title="assignment.title"
              :description="assignment.description"
              :call-to-action="assignment.callToAction"
              :skills="assignment.skills"
              :download-link="assignment.downloadLink"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Reflection & Documentation -->
    <section class="py-16 bg-gray-100 dark:bg-gray-800">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Reflection & Documentation
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {{ reflectionText }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              v-for="link in downloadLinks"
              :key="link.id"
              :href="link.url"
              :class="`inline-flex items-center px-6 py-3 ${link.buttonColor} text-white font-medium rounded-lg transition-colors`"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              {{ link.text }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AssignmentCard from "@/components/AssignmentCard.vue";
import { mapStores } from "pinia";
import { useWpl1Store } from "@/stores/wpl1";

export default {
  name: "Wpl1View",
  components: {
    AssignmentCard,
  },
  computed: {
    ...mapStores(useWpl1Store),

    courseInfo() {
      return this.wpl1Store.courseInfo;
    },

    keySkills() {
      return this.wpl1Store.keySkills;
    },

    learningFocus() {
      return this.wpl1Store.learningFocus;
    },

    assignments() {
      return this.wpl1Store.assignments;
    },

    reflectionText() {
      return this.wpl1Store.reflectionText;
    },

    downloadLinks() {
      return this.wpl1Store.downloadLinks;
    },
  },
  metaInfo: {
    title: "WPL1 - Workplace Learning 1 | Ben Vaes",
    meta: [
      {
        name: "description",
        content:
          "WPL1 workplace learning experience focusing on professional development, time management, team leadership, and introduction to the job market.",
      },
    ],
  },
};
</script>

<style scoped>
@media (min-width: 1600px) {
  .\\33xl\\:px-32 {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  .\\34xl\\:px-48 {
    padding-left: 12rem;
    padding-right: 12rem;
  }
}
</style>
