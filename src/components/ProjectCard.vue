<template>
  <div class="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 class="text-xl text-gray-900 dark:text-white font-semibold">
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Removed inline styles as Tailwind classes are now used */
</style>
