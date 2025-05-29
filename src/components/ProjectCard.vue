<template>
  <div
    class="project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
  >
    <!-- Image Container -->
    <div class="relative overflow-hidden">
      <div
        v-if="!image || image === '' || image === null"
        class="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
      >
        <svg
          class="w-16 h-16 text-white opacity-50"
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
      <img
        v-else
        :src="image"
        :alt="title"
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        @error="handleImageError"
      />
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
      >
        <svg
          class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
      <div class="space-y-3 flex-1">
        <h3
          class="text-xl text-gray-900 dark:text-white font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
        >
          {{ title }}
        </h3>
        <p
          class="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 min-h-[3.5rem]"
        >
          {{ description }}
        </p>
      </div>

      <!-- Action Slot -->
      <div class="pt-2">
        <slot></slot>
      </div>
    </div>
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
      required: false,
      default: null,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleImageError(event) {
      // Hide the image element if it fails to load
      event.target.style.display = "none";
    },
  },
};
</script>

<style scoped>
/* Line clamp utility for text truncation */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Enhanced hover effects */
.project-card {
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
}

/* Image zoom effect container */
.project-card .relative {
  overflow: hidden;
}

/* Smooth transitions for all interactive elements */
.project-card * {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
