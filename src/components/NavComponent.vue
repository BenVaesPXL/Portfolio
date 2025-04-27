<template>
  <nav class="bg-gray-800 text-white py-4">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <!-- Title -->
      <router-link to="/" class="text-2xl font-semibold hover:text-gray-400">
        {{ title }}
      </router-link>

      <!-- Navigation Links -->
      <nav>
        <ul class="flex space-x-6">
          <li v-for="(navItem, index) in navItems" :key="index">
            <router-link :to="navItem.path" class="hover:text-gray-400">
              {{ navItem.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "WPL2 Case", path: "/wpl2" },
        { name: "Contact", path: "/contact" },
      ],
      title: "Ben Vaes' Portfolio",
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
