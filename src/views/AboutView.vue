<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
  >
    <!-- Hero Section -->
    <section
      class="py-16 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
    >
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span class="text-indigo-600">Me</span>
            </h1>
            <p
              class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Hi! I'm Ben Vaes, a passionate frontend developer with a love for
              creating intuitive and visually stunning web applications.
              Currently studying at PXL, I specialize in Vue.js and modern web
              technologies.
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me following motorsports,
              exploring new technologies, or working on personal projects that
              challenge my creativity and technical skills.
            </p>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6 pt-6">
              <div
                class="text-center p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div class="text-2xl md:text-3xl font-bold text-indigo-600">
                  1+
                </div>
                <div
                  class="text-sm md:text-base text-gray-600 dark:text-gray-400"
                >
                  Years Learning
                </div>
              </div>
              <div
                class="text-center p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div class="text-2xl md:text-3xl font-bold text-indigo-600">
                  3+
                </div>
                <div
                  class="text-sm md:text-base text-gray-600 dark:text-gray-400"
                >
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Image -->
          <div class="flex justify-center order-first md:order-last">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"
              ></div>
              <img
                src="https://i.pinimg.com/236x/f4/fd/eb/f4fdebc1d602c057fa8bcd3cfc8a139f.jpg"
                alt="Ben Vaes - Profile Photo"
                class="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills & Expertise -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <ExpertiseCard
            title="Frontend Development"
            description="Building responsive, interactive user interfaces with modern frameworks."
            :skills="['Vue.js', 'HTML', 'CSS', 'Bootstrap', 'SCSS']"
            icon-path="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            color-theme="indigo"
          />

          <ExpertiseCard
            title="Backend Development"
            description="Creating robust server-side applications and APIs with modern technologies."
            :skills="['MongoDB', 'Node.js', 'Express', 'Restful APIs']"
            icon-path="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
            color-theme="green"
          />

          <ExpertiseCard
            title="Styling & Design"
            description="Creating beautiful, consistent designs with modern CSS frameworks."
            :skills="['UI Design', 'UX Design']"
            icon-path="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
            color-theme="purple"
          />

          <ExpertiseCard
            title="Tools & Workflow"
            description="Efficient development workflow with modern tools and version control."
            :skills="['GitHub', 'VS Code', 'Figma', 'Postman']"
            icon-path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
            color-theme="indigo"
          />
        </div>
      </div>
    </section>

    <!-- Journey Timeline -->
    <section
      class="py-16 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
    >
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          My Journey
        </h2>

        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"
          ></div>

          <!-- Timeline items -->
          <div class="space-y-8 md:space-y-12">
            <TimelineCard
              date="2025 - Present"
              title="Advanced Frontend Development"
              description="Made first project in Vue.js and learned basic backend at PXL. Working on complex projects like Etaalent and building responsive, user-focused applications."
              color-theme="indigo"
            />

            <TimelineCard
              date="2024"
              title="Frontend Foundations"
              description="Started my journey with HTML, CSS, and JavaScript. And discovered my passion for frontend development."
              color-theme="purple"
            />

            <TimelineCard
              date="Feb 2024"
              title="Development Journey Begins"
              description="Started at PXL with 'Digitale Vormgeving'. Learned the fundamentals of development and design, building a strong foundation in both Web Development and visual communication."
              color-theme="green"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Interests -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Beyond Coding
        </h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <InterestCard
            title="Motorsports"
            description="Passionate Formula 1 fan who loves the technical precision and innovation in racing."
            icon-path="M13 10V3L4 14h7v7l9-11h-7z"
            color-theme="indigo"
          />

          <InterestCard
            title="Learning"
            description="Always exploring new technologies and staying up-to-date with the latest web development trends."
            icon-path="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            color-theme="purple"
          />

          <InterestCard
            title="Side Projects"
            description="Building personal projects that combine my interests with coding challenges."
            icon-path="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            color-theme="green"
            class="sm:col-span-2 md:col-span-1"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ExpertiseCard from "../components/ExpertiseCard.vue";
import TimelineCard from "../components/TimelineCard.vue";
import InterestCard from "../components/InterestCard.vue";

export default {
  name: "AboutView",
  components: {
    ExpertiseCard,
    TimelineCard,
    InterestCard,
  },
  data() {
    return {
      observer: null,
      animatedElements: new Set(),
    };
  },
  mounted() {
    this.initScrollAnimations();
  },
  beforeUnmount() {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    initScrollAnimations() {
      // Vue-friendly scroll animation implementation
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

      // Use Vue's $nextTick to ensure DOM is ready
      this.$nextTick(() => {
        const elementsToAnimate = [
          ...this.$el.querySelectorAll(".timeline-item"),
          ...this.$el.querySelectorAll(".bg-white"),
          ...this.$el.querySelectorAll(".group"),
        ];

        elementsToAnimate.forEach((element) => {
          // Set initial state
          element.style.opacity = "0";
          element.style.transform = "translateY(30px)";
          element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

          // Observe element
          this.observer.observe(element);
        });
      });
    },

    animateElement(element) {
      // Get animation delay based on element type and position
      const delay = this.getAnimationDelay(element);

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, delay);
    },

    getAnimationDelay(element) {
      // Calculate delay based on element position and type
      if (element.classList.contains("timeline-item")) {
        const timelineItems = Array.from(
          this.$el.querySelectorAll(".timeline-item")
        );
        return timelineItems.indexOf(element) * 150;
      } else if (element.classList.contains("group")) {
        const groupItems = Array.from(this.$el.querySelectorAll(".group"));
        return groupItems.indexOf(element) * 100;
      } else {
        const skillCards = Array.from(this.$el.querySelectorAll(".bg-white"));
        return skillCards.indexOf(element) * 100;
      }
    },
  },
};
</script>

<style scoped>
/* Timeline animations */
.timeline-item {
  position: relative;
}

.timeline-item:before {
  content: "";
  position: absolute;
  left: 0.75rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #6366f1, #8b5cf6);
  opacity: 0.3;
  z-index: -1;
}

@media (min-width: 768px) {
  .timeline-item:before {
    left: 1.75rem;
  }
}

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

/* Hover effects for cards */
.group:hover .w-16 {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Smooth scrolling for better UX */
:deep(html) {
  scroll-behavior: smooth;
}

/* Enhanced transitions for animated elements */
.timeline-item,
.group,
.bg-white {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
