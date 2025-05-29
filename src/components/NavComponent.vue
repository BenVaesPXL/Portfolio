<template>
  <header
    class="bg-white/95 dark:bg-gray-900/95 w-full border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm"
  >
    <div
      class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 4xl:px-48"
    >
      <div class="flex h-16 items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <router-link
            class="block text-gray-900 dark:text-white font-bold text-xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            to="/"
          >
            {{ title }}
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-8 text-sm">
              <li v-for="(navItem, index) in navItems" :key="index">
                <router-link
                  :to="navItem.path"
                  class="relative text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  :class="{
                    'text-indigo-600 dark:text-indigo-400 bg-gray-100 dark:bg-gray-800':
                      isActiveRoute(navItem.path),
                  }"
                >
                  {{ navItem.name }}
                </router-link>
              </li>
            </ul>
          </nav>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        >
          <nav class="px-4 py-4 space-y-2">
            <router-link
              v-for="(navItem, index) in navItems"
              :key="index"
              :to="navItem.path"
              @click="closeMobileMenu"
              class="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400"
              :class="{
                'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400':
                  isActiveRoute(navItem.path),
              }"
            >
              {{ navItem.name }}
            </router-link>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "WPL1", path: "/wpl1" },
        { name: "WPL2 Case", path: "/wpl2" },
        { name: "Contact", path: "/contact" },
      ],
      title: "Ben Vaes",
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isMobileMenuOpen = false;
      }
    },
    isActiveRoute(path) {
      return (
        this.$route.path === path ||
        (path === "/" && this.$route.path === "/") ||
        (path !== "/" && this.$route.path.startsWith(path))
      );
    },
  },
};
</script>

<style scoped>
@media (min-width: 1600px) {
  .\\33xl\\:px-32 {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}
</style>
