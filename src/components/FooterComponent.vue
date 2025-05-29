<template>
  <footer
    class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div
              class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center brand-logo"
            >
              <span class="text-white font-bold text-sm">BV</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white"
              >Ben Vaes</span
            >
          </div>
          <div class="flex space-x-4">
            <!-- Social Links -->
            <a
              href="https://github.com/benvaes"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/benvaes"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="mailto:bvaes@icloud.com"
              class="social-link text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Email"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
          >
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/"
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link
                to="/wpl1"
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                WPL1
              </router-link>
            </li>
            <li>
              <router-link
                to="/wpl2"
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                WPL2 Case Study
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Technologies -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
          >
            Technologies
          </h3>
          <ul class="space-y-3">
            <li class="text-gray-600 dark:text-gray-400">Vue.js</li>
            <li class="text-gray-600 dark:text-gray-400">JavaScript</li>
            <li class="text-gray-600 dark:text-gray-400">Tailwind CSS</li>
            <li class="text-gray-600 dark:text-gray-400">Node.js</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 footer-bottom"
      >
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          <!-- Copyright -->
          <div
            class="text-gray-600 dark:text-gray-400 text-sm order-2 lg:order-1"
          >
            &copy; {{ currentYear }} Ben Vaes. All rights reserved.
          </div>

          <!-- Right Side Content -->
          <div
            class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 lg:order-2"
          >
            <!-- Back to Top Button -->
            <button
              @click="scrollToTop"
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-500 group"
            >
              <svg
                class="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span>Back to Top</span>
            </button>

            <!-- Tech Stack and Made with Love -->
            <div
              class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left"
            >
              <span
                class="text-gray-500 dark:text-gray-400 text-xs font-medium"
              >
                Built with Vue.js & Tailwind CSS
              </span>
              <div class="flex items-center space-x-1">
                <span class="text-gray-500 dark:text-gray-400 text-xs"
                  >Made with</span
                >
                <svg
                  class="w-3 h-3 text-red-500 heart-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-500 dark:text-gray-400 text-xs"
                  >in Belgium</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: [
        {
          name: "GitHub",
          url: "https://github.com/benvaes",
          icon: "github",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/benvaes",
          icon: "linkedin",
        },
        {
          name: "Email",
          url: "mailto:ben.vaes@example.com",
          icon: "email",
        },
      ],
      technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "Node.js", "Vite"],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
/* Enhanced hover effects for social links */
.social-link {
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  transform: scale(0);
  transition: transform 0.3s ease;
  border-radius: 50%;
}

.social-link:hover::before {
  transform: scale(1);
}

.social-link svg {
  position: relative;
  z-index: 10;
}

/* Smooth transitions for all interactive elements */
footer a {
  transition: all 0.2s ease;
}

/* Brand logo gradient animation */
.brand-logo {
  background: linear-gradient(45deg, #6366f1, #8b5cf6, #06b6d4);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
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

/* Link hover effects */
footer .router-link-active {
  color: #6366f1;
  font-weight: 500;
}

footer .dark .router-link-active {
  color: #818cf8;
}

/* Heart animation */
.heart-pulse {
  animation: heartPulse 2s ease-in-out infinite;
}

@keyframes heartPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Responsive improvements */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Back to top button enhanced styling */
button:hover svg {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

/* Improved responsive layout for footer bottom */
@media (max-width: 640px) {
  .footer-bottom .flex {
    text-align: center;
  }

  .footer-bottom .order-1 {
    order: 1;
  }

  .footer-bottom .order-2 {
    order: 2;
  }
}
</style>
