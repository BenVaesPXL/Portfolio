<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <main>
      <!-- Hero Section -->
      <section
        class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-800 dark:via-gray-900 dark:to-gray-800"
      >
        <div
          class="absolute inset-0 opacity-50"
          style="
            background-image: url('data:image/svg+xml;utf8,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%23f0f0f0&quot; fill-opacity=&quot;0.3&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/></g></g></svg>');
          "
        ></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Hero Content -->
            <div class="text-center lg:text-left space-y-8">
              <div class="space-y-4">
                <h1
                  class="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Hi, I'm
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                    >Ben Vaes</span
                  >
                </h1>
                <h2
                  class="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium"
                >
                  Frontend Developer & Student
                </h2>
              </div>

              <p
                class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
              >
                Passionate about creating beautiful, functional web experiences.
                Currently studying at PXL University of Applied Sciences and
                building modern applications with the latest web technologies.
              </p>

              <!-- Quick Stats -->
              <div class="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div class="text-center">
                  <div class="text-3xl font-bold text-indigo-600">1+</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Years Learning
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-purple-600">3+</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Projects Built
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-green-600">PXL</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    University
                  </div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div
                class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <router-link
                  to="/projects"
                  class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  View My Work
                </router-link>
                <router-link
                  to="/contact"
                  class="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get In Touch
                </router-link>
              </div>
            </div>

            <!-- Hero Image -->
            <div class="flex justify-center lg:justify-end">
              <img
                src="../assets/images/profilepic.png"
                alt="Ben Vaes"
                class="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span class="text-indigo-600">Skills</span>
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <SkillsComponent />
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span class="text-purple-600">Projects</span>
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A showcase of my academic work and practical applications
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <!-- WPL2 Project -->
            <div
              class="bg-white dark:bg-gray-900 flex flex-col justify-around rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-6 h-6 text-indigo-600"
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
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Etaalent
                </h3>
              </div>

              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Etaalent is a multidisciplinary project designed to simulate a
                real-world work environment. My primary role was as the
                front-end developer, where I collaborated closely with team
                members from various backgrounds.
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
                  >Vue.js</span
                >
                <span
                  class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >Bootstrap</span
                >
                <span
                  class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >Pinia</span
                >
              </div>

              <router-link
                to="/wpl2"
                class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group"
              >
                View Case Study
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

            <!-- Paddock Gear Project -->
            <div
              class="bg-white dark:bg-gray-900 flex flex-col justify-around rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l3 3-3 3m5 0h3"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  Paddock Gear
                </h3>
              </div>

              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                As introduction to Vue.js we had to build a simple e-commerce
                site. I created Paddock Gear a fictional online store for
                Formula 1 merchandise.
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-full text-sm font-medium"
                  >HTML5</span
                >
                <span
                  class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >CSS3</span
                >
                <span
                  class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium"
                  >JavaScript</span
                >
                <span
                  class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >PHP</span
                >
              </div>

              <router-link
                :to="
                  projectsStore.projects.find((p) => p.title === 'Paddock Gear')
                    .link
                "
                class="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group"
              >
                View Project
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
          </div>

          <div class="text-center mt-12">
            <router-link
              to="/projects"
              class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Projects
            </router-link>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section
        class="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p class="text-xl text-indigo-100 mb-10 leading-relaxed">
            I'm actively seeking internship opportunities and junior frontend
            developer positions. Let's create something amazing together!
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <router-link
              to="/contact"
              class="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </router-link>
            <a
              href="mailto:ben.vaes@student.pxl.be"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import SkillsComponent from "../components/SkillsComponent.vue";
import { mapStores } from "pinia";
import { useProjectsStore } from "@/stores/projects";

export default {
  name: "HomeView",
  components: {
    SkillsComponent,
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      // Animate elements on scroll
      this.$nextTick(() => {
        const elementsToAnimate =
          this.$el.querySelectorAll(".animate-on-scroll");
        elementsToAnimate.forEach((element) => {
          element.style.opacity = "0";
          element.style.transform = "translateY(30px)";
          element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          observer.observe(element);
        });
      });
    },
  },
};
</script>

<style scoped>
/* Smooth animations and transitions */
* {
  transition: all 0.3s ease;
}

/* Gradient text effect */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Hover effects for cards */
.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}

.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

/* Button hover effects */
.transform:hover {
  transform: translateY(-4px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom dot pattern background */
.bg-dot-pattern {
  background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Enhanced shadow effects */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive image sizing */
@media (max-width: 768px) {
  .hero img {
    width: 20rem;
    height: 20rem;
  }
}

/* Animation classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Gradient background animations */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>
