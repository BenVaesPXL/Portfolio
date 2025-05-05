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
          <!-- Links may not work because github is not public fix later -->
          <a
            :href="project.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import paddockGearImage from "@/assets/images/paddockGear.png";

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
          "Paddock Gear is a motorsport-themed webshop built with Vue.js, SCSS and Bootstrap, showcasing responsive design, product filtering, and a functional shopping cart.",
        projectdetails:
          "Paddock Gear is a fully responsive, motorsport-inspired webshop developed for a school project. The project is built with Vue.js (Options API) for the frontend and styled using custom SCSS and Bootstrap. The goal of this project was to learn the basics of Vue.js and to create a webshop that is not only functional but also visually appealing. Paddock Gear reflects both my technical skills and personal interest in motorsports.",
        image: paddockGearImage,
        githubLink:
          "https://github.com/PXL-1DVO-WebAdvanced-2425/individuele-opdracht-deel-2-BenVaesPXL",
      },
      {
        id: "project-2",
        title: "Etaalent",
        description:
          "eTaalent is a large-scale team project built for a cross-disciplinary course. I was responsible for the frontend, using Vue.js, SCSS and Bootstrap to deliver a responsive and dynamic user experience.",
        projectdetails:
          "Etaalent project for a client developed during the WPL2 course, designed to simulate real-world collaboration between frontend developers, backend developers, and designers. As the sole frontend developer on the team, I was responsible for translating Figma designs into a responsive and dynamic user interface using Vue.js (Options API), Bootstrap, and SCSS. The project involved close collaboration with other disciplines, version control with Git, and frequent coordination through standups and planning sessions. eTaalent challenged me to manage a larger codebase, integrate backend APIs, and build scalable, reusable components — giving me hands-on experience with teamwork, communication, and full project delivery.",
        image: "",
        githubLink: "https://github.com/PXL-WPL2-2425/wpl2-frontend-team-01",
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
