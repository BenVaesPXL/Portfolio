<!-- src/views/HomeView.vue -->
<template>
  <div
    class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <!-- Main Content -->
    <main class="py-10">
      <section
        class="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900"
      >
        <div
          class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
        >
          <div class="max-w-prose text-left">
            <h1
              class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white"
            >
              {{ title }}
            </h1>

            <p
              class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200"
            >
              {{ description }}
            </p>

            <div class="mt-4 flex gap-4 sm:mt-6">
              <a
                class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#projects-preview"
              >
                View my work
              </a>

              <router-link
                to="/contact"
                class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Contact Me
              </router-link>
            </div>
          </div>

          <img
            src="https://i.pinimg.com/236x/f4/fd/eb/f4fdebc1d602c057fa8bcd3cfc8a139f.jpg"
            alt="Portfolio Image"
            class="mx-auto hidden max-w-md text-gray-900 md:block dark:text-white"
          />
        </div>
      </section>
      <!--skill section-->
      <SkillsComponent />
      <!-- Project preview section-->
      <section class="projects-preview py-20 px-20" id="projects-preview">
        <h2 class="text-center text-4xl font-bold mb-8">Featured Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :link="project.link"
          >
            <router-link
              :to="`/projects/project-${index + 1}`"
              class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              View Details
            </router-link>
          </ProjectCard>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import SkillsComponent from "../components/SkillSComponent.vue";
import ProjectCard from "../components/ProjectCard.vue";

import paddockGearImage from "@/assets/images/paddockGear.png";

export default {
  name: "HomeView",
  components: {
    SkillsComponent,
    ProjectCard,
  },
  data() {
    return {
      title: "Hi, I'm Ben Vaes – Crafting Seamless Frontend Experiences",
      description:
        "Passionate about building intuitive, responsive, and visually stunning web applications. Let's bring your ideas to life.",
      projects: [
        {
          title: "Paddock Gear",
          description:
            "Paddock Gear is a motorsport-themed webshop built with Vue.js, SCSS and Bootstrap, showcasing responsive design, product filtering, and a functional shopping cart.",
          image: paddockGearImage,
          link: "/projects/project-1",
        },
        {
          title: "Etaalent",
          description:
            "Short description of the project goes here. What it does, what tech you used, etc.",
          image: "",
          link: "/projects/project-2",
        },
        {
          title: "Portfolio WPL1",
          description:
            "Short description of the project goes here. What it does, what tech you used, etc.",
          image: "",
          link: "/projects/project-3",
        },
      ],
    };
  },
};
</script>
