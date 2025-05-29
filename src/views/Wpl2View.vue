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
            WPL2: Advanced Web Programming
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-purple-100">
            Modern Frontend Development with Vue.js
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <span class="px-4 py-2 bg-white/20 rounded-full">Vue.js 3</span>
            <span class="px-4 py-2 bg-white/20 rounded-full"
              >JavaScript ES6+</span
            >
            <span class="px-4 py-2 bg-white/20 rounded-full">Tailwind CSS</span>
            <span class="px-4 py-2 bg-white/20 rounded-full">Vite</span>
            <span class="px-4 py-2 bg-white/20 rounded-full">Pinia</span>
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
              Case Study: Modern Portfolio Development
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              This portfolio itself serves as the primary case study for WPL2,
              demonstrating the implementation of modern web development
              practices using Vue.js ecosystem.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Objectives
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"
                  ></div>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Component-Based Architecture:</strong> Build
                    reusable Vue.js components
                  </p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"
                  ></div>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Modern Styling:</strong> Implement responsive design
                    with Tailwind CSS
                  </p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"
                  ></div>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>State Management:</strong> Utilize Pinia for
                    application state
                  </p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"
                  ></div>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Routing:</strong> Implement SPA navigation with Vue
                    Router
                  </p>
                </div>
                <div class="flex items-start">
                  <div
                    class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"
                  ></div>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Performance:</strong> Optimize with Vite build tool
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Specifications
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300"
                    >Framework:</span
                  >
                  <span class="text-gray-900 dark:text-white font-medium"
                    >Vue.js 3</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300"
                    >Build Tool:</span
                  >
                  <span class="text-gray-900 dark:text-white font-medium"
                    >Vite</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300">Styling:</span>
                  <span class="text-gray-900 dark:text-white font-medium"
                    >Tailwind CSS</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300">State:</span>
                  <span class="text-gray-900 dark:text-white font-medium"
                    >Pinia</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300">Routing:</span>
                  <span class="text-gray-900 dark:text-white font-medium"
                    >Vue Router 4</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-300"
                    >Deployment:</span
                  >
                  <span class="text-green-600 dark:text-green-400 font-medium"
                    >Vercel/Netlify</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementation Details -->
    <section class="py-16 bg-gray-100 dark:bg-gray-800">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Implementation Highlights
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Component Architecture -->
            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3"
                >
                  <svg
                    class="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  Component Architecture
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Designed a modular component structure with reusable elements
                like NavComponent, FooterComponent, ProjectCard, and
                SkillsComponent.
              </p>
              <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Composition API usage</li>
                <li>• Props and emit patterns</li>
                <li>• Scoped styling</li>
                <li>• Component lifecycle management</li>
              </ul>
            </div>

            <!-- Responsive Design -->
            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3"
                >
                  <svg
                    class="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  Responsive Design
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Implemented mobile-first responsive design using Tailwind CSS
                utility classes and custom breakpoints for optimal viewing on
                all devices.
              </p>
              <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Mobile-first approach</li>
                <li>• Custom breakpoints</li>
                <li>• Flexible grid systems</li>
                <li>• Touch-friendly interactions</li>
              </ul>
            </div>

            <!-- State Management -->
            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3"
                >
                  <svg
                    class="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  State Management
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Utilized Pinia for managing application state, including project
                data, theme preferences, and dynamic content.
              </p>
              <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Pinia store implementation</li>
                <li>• Reactive state updates</li>
                <li>• Actions and getters</li>
                <li>• Persistent storage</li>
              </ul>
            </div>

            <!-- Performance Optimization -->
            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3"
                >
                  <svg
                    class="w-6 h-6 text-orange-600 dark:text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  Performance
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Optimized performance through code splitting, lazy loading, and
                efficient build processes using Vite's advanced features.
              </p>
              <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Vite HMR development</li>
                <li>• Code splitting</li>
                <li>• Lazy route loading</li>
                <li>• Optimized builds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges & Solutions -->
    <section class="py-16">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Challenges & Solutions
          </h2>
          <div class="space-y-8">
            <!-- Challenge 1 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Challenge: Component Communication
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Managing data flow between multiple components while maintaining
                clean code structure.
              </p>
              <div
                class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4"
              >
                <h4
                  class="font-semibold text-green-800 dark:text-green-400 mb-2"
                >
                  Solution:
                </h4>
                <p class="text-green-700 dark:text-green-300">
                  Implemented Pinia stores for global state management and used
                  props/emit for local component communication. This created a
                  clear separation between global and local state.
                </p>
              </div>
            </div>

            <!-- Challenge 2 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Challenge: Responsive Design Complexity
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Creating a consistently beautiful design across all device sizes
                while maintaining performance.
              </p>
              <div
                class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4"
              >
                <h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-2">
                  Solution:
                </h4>
                <p class="text-blue-700 dark:text-blue-300">
                  Utilized Tailwind CSS's utility-first approach with custom
                  breakpoints and extensive testing across multiple devices to
                  ensure optimal user experience.
                </p>
              </div>
            </div>

            <!-- Challenge 3 -->
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Challenge: SEO and Performance
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Ensuring good SEO practices and fast loading times in a
                single-page application.
              </p>
              <div
                class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4"
              >
                <h4
                  class="font-semibold text-purple-800 dark:text-purple-400 mb-2"
                >
                  Solution:
                </h4>
                <p class="text-purple-700 dark:text-purple-300">
                  Implemented proper meta tags, structured data, lazy loading
                  for images, and code splitting to improve both SEO rankings
                  and page load performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Outcomes -->
    <section class="py-16 bg-gray-100 dark:bg-gray-800">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Key Learning Outcomes
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Vue.js Mastery
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Deep understanding of Vue 3 features including Composition API,
                reactivity, and component lifecycle.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Modern CSS
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Proficiency in Tailwind CSS, responsive design patterns, and
                modern layout techniques.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Build Tools
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Experience with modern development tools like Vite, including
                HMR and optimization strategies.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-orange-600 dark:text-orange-400"
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
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Best Practices
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Application of industry best practices for code organization,
                performance, and maintainability.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-pink-600 dark:text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                UX Design
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Understanding of user experience principles and their
                implementation in web applications.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-teal-600 dark:text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Performance
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Knowledge of performance optimization techniques for modern web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Improvements -->
    <section class="py-16">
      <div
        class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Future Enhancements
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            While this portfolio demonstrates strong foundational skills in
            modern web development, there are several areas identified for
            future improvement and expansion.
          </p>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Dark Mode Implementation
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Complete dark/light theme toggle functionality
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Blog Integration
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Add a blog section for technical articles
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Contact Form
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Implement functional contact form with backend
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Animations
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Enhanced micro-interactions and page transitions
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                PWA Features
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Progressive Web App capabilities
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                Testing Suite
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive unit and integration tests
              </p>
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
            Documentation & Resources
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Access the complete documentation, source code, and reflection
            materials for the WPL2 case study.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
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
              Download Case Study PDF
            </a>
            <a
              href="https://github.com/benvaes/portfolio-wpl2"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              View Source Code
            </a>
            <a
              href="#"
              class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Wpl2View",
  metaInfo: {
    title: "WPL2 Case Study - Advanced Web Programming | Ben Vaes",
    meta: [
      {
        name: "description",
        content:
          "Comprehensive case study of WPL2 portfolio development using Vue.js, Tailwind CSS, and modern web development practices.",
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
