<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white py-16"
    >
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ courseInfo.title }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-purple-100">
            {{ courseInfo.subtitle }}
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <span
              v-for="tech in technologies"
              :key="tech"
              class="px-4 py-2 bg-white/20 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Introduction -->
    <section class="py-16">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {{ caseStudy.title }}
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {{ caseStudy.description }}
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Objectives
              </h3>
              <div class="space-y-4">
                <div
                  v-for="objective in caseStudy.projectObjectives"
                  :key="objective.title"
                  class="flex items-start"
                >
                  <div
                    class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"
                  ></div>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>{{ objective.title }}:</strong>
                    {{ objective.description }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Specifications
              </h3>
              <div class="space-y-3">
                <div
                  v-if="caseStudy.technicalSpecs.framework"
                  class="flex justify-between"
                >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Framework:</span
                  >
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    caseStudy.technicalSpecs.framework
                  }}</span>
                </div>
                <div
                  v-if="caseStudy.technicalSpecs.buildTool"
                  class="flex justify-between"
                >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Build Tool:</span
                  >
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    caseStudy.technicalSpecs.buildTool
                  }}</span>
                </div>
                <div
                  v-if="caseStudy.technicalSpecs.styling"
                  class="flex justify-between"
                >
                  <span class="text-gray-600 dark:text-gray-300">Styling:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    caseStudy.technicalSpecs.styling
                  }}</span>
                </div>
                <div
                  v-if="caseStudy.technicalSpecs.state"
                  class="flex justify-between"
                >
                  <span class="text-gray-600 dark:text-gray-300">State:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    caseStudy.technicalSpecs.state
                  }}</span>
                </div>
                <div
                  v-if="caseStudy.technicalSpecs.routing"
                  class="flex justify-between"
                >
                  <span class="text-gray-600 dark:text-gray-300">Routing:</span>
                  <span class="text-gray-900 dark:text-white font-medium">{{
                    caseStudy.technicalSpecs.routing
                  }}</span>
                </div>
                <div
                  v-if="caseStudy.technicalSpecs.deployment"
                  class="flex justify-between"
                >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Deployment:</span
                  >
                  <span
                    class="text-green-600 dark:text-green-400 font-medium"
                    >{{ caseStudy.technicalSpecs.deployment }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Details -->
    <section class="py-16">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Case Study Analysis
          </h2>

          <!-- Case Description -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <div
                class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              Case Description
            </h3>
            <div class="prose dark:prose-invert max-w-none">
              <p
                class="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line"
              >
                {{ caseStudy.caseDescription }}
              </p>
            </div>
          </div>

          <!-- Personal Contribution -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <div
                class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              My Personal Contribution
            </h3>
            <div class="prose dark:prose-invert max-w-none">
              <p
                class="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line"
              >
                {{ caseStudy.myContribution }}
              </p>
            </div>
          </div>

          <!-- Learnings and Insights -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <div
                class="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              Learnings & Insights
            </h3>
            <div class="prose dark:prose-invert max-w-none">
              <p
                class="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line"
              >
                {{ caseStudy.learningsAndInsights }}
              </p>
            </div>
          </div>

          <!-- Final Results & Deliverables -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <div
                class="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3"
              >
                <svg
                  class="w-5 h-5 text-orange-600 dark:text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </div>
              Final Results & Deliverables
            </h3>

            <!-- Deliverables -->
            <div class="mb-8">
              <h4
                class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              >
                Project Deliverables
              </h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div
                  v-for="deliverable in caseStudy.finalResults.deliverables"
                  :key="deliverable.title"
                  class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg"
                >
                  <div class="flex items-center mb-2">
                    <span
                      class="text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded"
                    >
                      {{ deliverable.type }}
                    </span>
                  </div>
                  <h5 class="font-semibold text-gray-900 dark:text-white mb-1">
                    <a
                      v-if="deliverable.link"
                      :href="deliverable.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="underline hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {{ deliverable.title }}
                    </a>
                    <span v-else>{{ deliverable.title }}</span>
                  </h5>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    {{ deliverable.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Technical Achievements -->
            <div>
              <h4
                class="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              >
                Technical Achievements
              </h4>
              <div class="grid md:grid-cols-2 gap-3">
                <div
                  v-for="achievement in caseStudy.finalResults
                    .technicalAchievements"
                  :key="achievement"
                  class="flex items-center"
                >
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span class="text-sm text-gray-600 dark:text-gray-300">{{
                    achievement
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentation & Downloads -->
    <section class="py-16 bg-gray-100 dark:bg-gray-800">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Reflection
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Access my reflection of the WPL2 case study.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              v-for="link in downloadLinks"
              :key="link.id"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="`inline-flex items-center px-6 py-3 ${link.buttonColor} text-white font-medium rounded-lg transition-colors`"
            >
              <svg
                class="w-5 h-5 mr-2"
                :fill="link.primary ? 'currentColor' : 'none'"
                :stroke="link.primary ? 'none' : 'currentColor'"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="link.primary"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
                <path
                  v-else
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
import { mapStores } from "pinia";
import { useWpl2Store } from "@/stores/wpl2";

export default {
  name: "Wpl2View",
  computed: {
    ...mapStores(useWpl2Store),

    courseInfo() {
      return this.wpl2Store.courseInfo;
    },

    technologies() {
      return this.wpl2Store.technologies;
    },

    caseStudy() {
      return this.wpl2Store.caseStudy;
    },

    downloadLinks() {
      return this.wpl2Store.downloadLinks;
    },
  },
  metaInfo: {
    title: "WPL2 - Advanced Web Programming | Ben Vaes",
    meta: [
      {
        name: "description",
        content:
          "WPL2 case study showcasing modern web development with Vue.js, featuring the Etaalent project and advanced frontend development techniques.",
      },
    ],
  },
};
</script>

<style scoped>
/* Responsive styles handled by Tailwind classes */
</style>
