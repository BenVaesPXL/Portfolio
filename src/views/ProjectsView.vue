<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <section class="py-16 px-6 sm:px-8 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ project.title }}
        </h1>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-8">
        <img
          :src="project.image"
          alt="Project Image"
          class="rounded-lg shadow-md w-full md:w-1/2 h-auto object-cover border border-gray-200 dark:border-gray-700"
        />

        <div class="flex-1">
          <p
            class="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
          >
            {{ project.projectdetails }}
          </p>

          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            Visit Project
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      project: {},
    };
  },
  created() {
    const projectId = this.$route.params.id;
    const projects = [
      {
        id: "project-1",
        title: "Paddock Gear",
        description:
          "Short description of the project goes here. What it does, what tech you used, etc.",
        projectdetails:
          "Detailed description of the project goes here. What it does, what tech you used, etc.",
        image: "",
        link: "/projects/project-1",
      },
      {
        id: "project-2",
        title: "Etaalent",
        description:
          "Short description of the project goes here. What it does, what tech you used, etc.",
        projectdetails:
          "Detailed description of the project goes here. What it does, what tech you used, etc.",
        image: "",
        link: "/projects/project-2",
      },
      {
        id: "project-3",
        title: "Portfolio WPL1",
        description:
          "Short description of the project goes here. What it does, what tech you used, etc.",
        projectdetails:
          "Detailed description of the project goes here. What it does, what tech you used, etc.",
        image: "",
        link: "/projects/project-3",
      },
    ];
    this.project = projects.find((project) => project.id === projectId) || {};
  },
};
</script>

<style>
/* Match the base website's styling */
</style>
