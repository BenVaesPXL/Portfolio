<template>
  <div
    class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div
      :class="iconBgClass"
      class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
    >
      <svg
        :class="iconColorClass"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="iconPath"
        ></path>
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-400 mb-4">
      {{ description }}
    </p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in skills"
        :key="skill"
        :class="skillBadgeClass"
        class="px-3 py-1 rounded-full text-sm transition-colors"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertiseCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    iconPath: {
      type: String,
      required: true,
    },
    colorTheme: {
      type: String,
      default: "indigo",
      validator: (value) => ["indigo", "purple", "green"].includes(value),
    },
  },
  computed: {
    iconBgClass() {
      return `bg-${this.colorTheme}-100 dark:bg-${this.colorTheme}-900`;
    },
    iconColorClass() {
      return `text-${this.colorTheme}-600`;
    },
    skillBadgeClass() {
      return `bg-${this.colorTheme}-100 dark:bg-${this.colorTheme}-900 text-${this.colorTheme}-700 dark:text-${this.colorTheme}-300 hover:bg-${this.colorTheme}-200 dark:hover:bg-${this.colorTheme}-800`;
    },
  },
};
</script>

<style scoped>
/* Additional hover effects */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}
</style>
