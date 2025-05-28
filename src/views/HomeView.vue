<!-- src/views/HomeView.vue -->
<template>
  <div
    class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
  >
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section
        class="bg-white dark:bg-gray-900 lg:grid lg:items-center min-h-screen w-full"
      >
        <div
          class="mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
        >
          <div class="max-w-prose text-left space-y-6 hero-content">
            <!-- Main Title -->
            <h1
              class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white leading-tight"
            >
              Hi, I'm <span class="text-indigo-600">Ben Vaes</span>
            </h1>

            <!-- Subtitle -->
            <h2
              class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Crafting Seamless Frontend Experiences
            </h2>

            <!-- Description -->
            <p
              class="text-base text-gray-600 sm:text-lg lg:text-xl dark:text-gray-300 leading-relaxed"
            >
              {{ description }}
            </p>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-4 py-4">
              <div
                class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div class="text-2xl font-bold text-indigo-600">1+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Years Learning
                </div>
              </div>
              <div
                class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div class="text-2xl font-bold text-indigo-600">3+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 group"
                href="#projects-preview"
              >
                <span>View My Work</span>
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
              </a>

              <router-link
                to="/contact"
                class="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 px-6 py-3 font-semibold text-gray-700 dark:text-gray-200 shadow-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5"
              >
                Contact Me
              </router-link>
            </div>
          </div>

          <!-- Profile Image -->
          <div
            class="flex justify-center order-first md:order-last mt-8 md:mt-0 profile-image"
          >
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"
              ></div>
              <img
                src="https://i.pinimg.com/236x/f4/fd/eb/f4fdebc1d602c057fa8bcd3cfc8a139f.jpg"
                alt="Ben Vaes - Portfolio Photo"
                class="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <!--Skills section-->
      <div class="px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48">
        <SkillsComponent />
      </div>

      <!-- Project preview section-->
      <section
        class="projects-preview py-16 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48 bg-gray-50 dark:bg-gray-800 w-full"
        id="projects-preview"
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12 projects-header">
            <h2
              class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Featured <span class="text-indigo-600">Projects</span>
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Here are some of my recent projects that showcase my skills in
              frontend development
            </p>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid"
          >
            <ProjectCard
              v-for="(project, index) in projectsData"
              :key="index"
              :title="project.title"
              :description="project.description"
              :image="project.image"
              :link="project.link"
              class="project-card"
            >
              <router-link
                :to="`/projects/project-${index + 1}`"
                class="inline-flex items-center justify-center rounded-lg border-2 border-indigo-600 px-5 py-2.5 font-medium text-indigo-600 dark:text-indigo-400 transition-all duration-300 hover:bg-indigo-600 hover:text-white dark:hover:text-white group"
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
            </ProjectCard>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Custom ultrawide screen support */
@media (min-width: 1600px) {
  :deep(.3xl\:px-32) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

@media (min-width: 1920px) {
  :deep(.4xl\:px-48) {
    padding-left: 12rem;
    padding-right: 12rem;
  }
}

/* Hero section animations */
.hero-content,
.profile-image,
.projects-header,
.project-card {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Profile image hover effects */
.profile-image img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover img {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* Button hover effects */
.inline-flex:hover {
  transform: translateY(-2px);
}

/* Smooth scrolling */
:deep(html) {
  scroll-behavior: smooth;
}

/* Custom gradient background for hero */
.hero-content {
  position: relative;
}

/* Project cards grid animation */
.projects-grid {
  perspective: 1000px;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.8s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Mobile responsiveness improvements */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .hero-content h2 {
    font-size: 1.25rem;
  }

  .profile-image img {
    width: 16rem;
    height: 16rem;
  }
}

/* Enhanced button styles */
.inline-flex {
  position: relative;
  overflow: hidden;
}

.inline-flex:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.inline-flex:hover:before {
  left: 100%;
}
</style>

<script>
import SkillsComponent from "../components/SkillsComponent.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { useProjectsStore } from "@/stores/projects.js";
import { mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    SkillsComponent,
    ProjectCard,
  },
  computed: {
    ...mapState(useProjectsStore, {
      projectsData: "featuredProjects",
    }),
  },
  data() {
    return {
      description:
        "Passionate about building intuitive, responsive, and visually stunning web applications. Let's bring your ideas to life with modern Vue.js and cutting-edge technologies.",
      observer: null,
      animatedElements: new Set(),
    };
  },
  mounted() {
    this.initScrollAnimations();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !this.animatedElements.has(entry.target)
          ) {
            this.animatedElements.add(entry.target);
            this.animateElement(entry.target);
          }
        });
      }, observerOptions);

      this.$nextTick(() => {
        const elementsToAnimate = [
          ...this.$el.querySelectorAll(".hero-content"),
          ...this.$el.querySelectorAll(".profile-image"),
          ...this.$el.querySelectorAll(".projects-header"),
          ...this.$el.querySelectorAll(".project-card"),
        ];

        elementsToAnimate.forEach((element) => {
          element.style.opacity = "0";
          element.style.transform = "translateY(30px)";
          element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          this.observer.observe(element);
        });
      });
    },

    animateElement(element) {
      const delay = this.getAnimationDelay(element);

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    },

    getAnimationDelay(element) {
      if (element.classList.contains("hero-content")) {
        return 0;
      } else if (element.classList.contains("profile-image")) {
        return 200;
      } else if (element.classList.contains("projects-header")) {
        return 0;
      } else if (element.classList.contains("project-card")) {
        const projectCards = Array.from(
          this.$el.querySelectorAll(".project-card")
        );
        return projectCards.indexOf(element) * 150;
      }
      return 0;
    },
  },
};
</script>
