<template>
  <header class="bg-white dark:bg-gray-900 w-full">
    <div class="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <router-link class="block text-gray-900 dark:text-white" to="/">
            {{ title }}
          </router-link>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li v-for="(navItem, index) in navItems" :key="index">
                <router-link
                  :to="navItem.path"
                  class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                >
                  {{ navItem.name }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "About", path: "/about" },
        { name: "WPL2 Case", path: "/wpl2" },
        { name: "Contact", path: "/contact" },
      ],
      title: "My Portfolio",
    };
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
